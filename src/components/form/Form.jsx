import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import "./style/Form.css";

const FormContext = createContext();

const Form = ({
  children,
  layout = "vertical",
  onFinish,
  initialValues = {},
  className = "",
  form,
  ...props
}) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const formItemsRef = useRef(new Map());

  const validateField = (name, value, rules) => {
    if (!rules) return true;

    let isValid = true;
    let errorMessage = "";

    if (rules.required && !value) {
      isValid = false;
      errorMessage = rules.message || "This field is required";
    }

    if (rules.pattern && value && !rules.pattern.test(value)) {
      isValid = false;
      errorMessage = rules.message || "Invalid format";
    }

    if (rules.min && value && value.length < rules.min) {
      isValid = false;
      errorMessage =
        rules.minMessage ||
        rules.message ||
        `Minimum length is ${rules.min} characters`;
    }

    if (rules.max && value && value.length > rules.max) {
      isValid = false;
      errorMessage =
        rules.maxMessage ||
        rules.message ||
        `Maximum length is ${rules.max} characters`;
    }

    if (rules.validator && value) {
      const result = rules.validator(value);
      if (typeof result === "string") {
        isValid = false;
        errorMessage = result;
      } else if (result === false) {
        isValid = false;
        errorMessage = rules.message || "Invalid value";
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: isValid ? "" : errorMessage,
    }));

    return isValid;
  };

  const validateAllFields = () => {
    const newErrors = {};
    let isValid = true;

    formItemsRef.current.forEach(({ name, rules }, key) => {
      const value = formData[name];
      const fieldValid = validateField(name, value, rules);
      if (!fieldValid) {
        isValid = false;
      }
    });

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateAllFields();
    if (isValid) {
      onFinish?.(formData);
    }
  };

  const registerField = (name, rules) => {
    formItemsRef.current.set(name, { name, rules });
  };

  const setFieldValue = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    const field = formItemsRef.current.get(name);
    if (field) {
      validateField(name, value, field.rules);
    }
  };

  const setFieldsValue = (values) => {
    setFormData((prev) => ({
      ...prev,
      ...values,
    }));
    Object.entries(values).forEach(([name, value]) => {
      const field = formItemsRef.current.get(name);
      if (field) {
        validateField(name, value, field.rules);
      }
    });
  };

  const getFieldValue = (name) => {
    return formData[name];
  };

  const getFieldsValue = () => {
    return { ...formData };
  };

  const resetFields = () => {
    setFormData(initialValues);
    setErrors({});
  };

  const clearFields = () => {
    setFormData({});
    setErrors({});
  };

  const formInstance = {
    setFieldValue,
    setFieldsValue,
    getFieldValue,
    getFieldsValue,
    resetFields,
    clearFields,
    validateFields: validateAllFields,
    submit: handleSubmit,
  };

  if (form) {
    Object.assign(form, formInstance);
  }

  const contextValue = {
    formData,
    setFormData,
    errors,
    validateField,
    layout,
    registerField,
    ...formInstance,
  };

  return (
    <FormContext.Provider value={contextValue}>
      <form
        onSubmit={handleSubmit}
        className={`pui-form pui-form-${layout} ${className}`}
        {...props}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
};

const useForm = () => {
  const [form] = useState(() => ({}));
  return [form];
};

const FormItem = ({
  name,
  label,
  rules,
  children,
  className = "",
  ...props
}) => {
  const {
    formData,
    setFormData,
    errors,
    validateField,
    layout,
    registerField,
  } = useContext(FormContext);

  useEffect(() => {
    if (name && rules) {
      registerField(name, rules);
    }
  }, [name, rules]);

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateField(name, value, rules);
  };

  const childProps = {
    value: formData[name] || "",
    onChange: handleChange,
    className: errors[name] ? "pui-form-item-error" : "",
    ...props,
  };

  return (
    <div className={`pui-form-item pui-form-item-${layout} ${className}`}>
      {label && (
        <label className="pui-form-item-label">
          {label}
          {rules?.required && <span className="pui-form-item-required">*</span>}
        </label>
      )}
      <div className="pui-form-item-control">
        {React.cloneElement(children, childProps)}
        {errors[name] && (
          <div className="pui-form-item-error-message">{errors[name]}</div>
        )}
      </div>
    </div>
  );
};

Form.Item = FormItem;
Form.useForm = useForm;

export default Form;
