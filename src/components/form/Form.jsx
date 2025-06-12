import React, { createContext, useContext, useState } from "react";
import "./Form.css";

const FormContext = createContext();

const Form = ({ children, form, onFinish, layout = "horizontal" }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const validateField = (name, value, rules) => {
    if (!rules) return true;

    for (const rule of rules) {
      if (rule.required && !value) {
        return rule.message || "Trường này là bắt buộc";
      }
      if (rule.min && value.length < rule.min) {
        return rule.message || `Tối thiểu ${rule.min} ký tự`;
      }
      if (rule.max && value.length > rule.max) {
        return rule.message || `Tối đa ${rule.max} ký tự`;
      }
      if (rule.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return rule.message || "Email không hợp lệ";
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    let isValid = true;

    React.Children.forEach(children, (child) => {
      if (child.type === FormItem) {
        const { name, rules } = child.props;
        const value = formData[name];
        const error = validateField(name, value, rules);
        if (error !== true) {
          newErrors[name] = error;
          isValid = false;
        }
      }
    });

    setErrors(newErrors);

    if (isValid) {
      onFinish?.(formData);
    }
  };

  const contextValue = {
    formData,
    setFormData,
    errors,
    setErrors,
    validateField,
    layout,
  };

  return (
    <FormContext.Provider value={contextValue}>
      <form onSubmit={handleSubmit} className={`pui-form pui-form-${layout}`}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

const FormItem = ({ children, label, name, rules }) => {
  const { formData, setFormData, errors, validateField, layout } =
    useContext(FormContext);

  const isRequired = rules?.some((rule) => rule.required);

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value, rules);
    if (error === true) {
      errors[name] = undefined;
    }
  };

  const child = React.cloneElement(children, {
    value: formData[name] || "",
    onChange: handleChange,
    className: errors[name] ? "pui-input-error" : "",
  });

  return (
    <div className={`pui-form-item pui-form-item-${layout}`}>
      {label && (
        <label className="pui-form-item-label">
          {label}
          {isRequired && <span className="pui-form-item-required">*</span>}
        </label>
      )}
      <div className="pui-form-item-control">
        {child}
        {errors[name] && (
          <div className="pui-form-item-error">{errors[name]}</div>
        )}
      </div>
    </div>
  );
};

Form.Item = FormItem;

Form.useForm = () => {
  const [form] = useState({});
  return [form];
};

export default Form;
