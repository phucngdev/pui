import React, { useState } from "react";
import Form from "../Form";

const DynamicForm = () => {
  const [form] = Form.useForm();
  const [fields, setFields] = useState([{ id: 1 }]);

  const handleFinish = (values) => {
    console.log("Form values:", values);
  };

  const addField = () => {
    setFields([...fields, { id: fields.length + 1 }]);
  };

  const removeField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
    const values = form.getFieldsValue();
    delete values[`item-${id}`];
    form.setFieldsValue(values);
  };

  return (
    <div className="demo-container">
      <h2>Dynamic Form</h2>
      <Form form={form} onFinish={handleFinish} layout="vertical">
        {fields.map((field) => (
          <div key={field.id} className="flex gap-2 items-start">
            <Form.Item
              name={`item-${field.id}`}
              label={`Item ${field.id}`}
              rules={{
                required: true,
                message: `Please enter item ${field.id}`,
              }}
              className="flex-1"
            >
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`Enter item ${field.id}`}
              />
            </Form.Item>
            {fields.length > 1 && (
              <button
                type="button"
                onClick={() => removeField(field.id)}
                className="px-3 py-2 text-red-500 border border-red-500 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Remove
              </button>
            )}
          </div>
        ))}

        <div className="flex gap-2">
          <button
            type="button"
            onClick={addField}
            className="px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Item
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default DynamicForm;
