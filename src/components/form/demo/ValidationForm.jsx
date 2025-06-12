import React from "react";
import Form from "../Form";

const ValidationForm = () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <div className="demo-container">
      <h2>Form with Validation</h2>
      <Form form={form} onFinish={handleFinish} layout="vertical">
        <Form.Item
          name="username"
          label="Username"
          rules={{
            required: true,
            message: "Please enter your username",
            min: 3,
            minMessage: "Username must be at least 3 characters",
            max: 20,
            maxMessage: "Username cannot exceed 20 characters",
          }}
        >
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={{
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please enter a valid email address",
          }}
        >
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={{
            required: true,
            message: "Please enter your password",
            min: 6,
            minMessage: "Password must be at least 6 characters",
            max: 20,
            maxMessage: "Password cannot exceed 20 characters",
            validator: (value) => {
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return true;
            },
          }}
        >
          <input
            type="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </Form.Item>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

export default ValidationForm;
