import React from "react";
import Form from "./components/form/Form";
import "./App.css";
import Input from "./components/input";

function App() {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <div className="app-container container mx-auto my-10 border border-[1px] p-10">
      <Form form={form} onFinish={handleFinish} layout="vertical">
        <Form.Item
          label="Tên người dùng"
          name="username"
          rules={[
            { required: true, message: "Vui lòng nhập tên người dùng!" },
            { min: 3, message: "Tên người dùng phải có ít nhất 3 ký tự!" },
          ]}
        >
          <Input prefix="👤" placeholder="Nhập tên người dùng" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập email!" },
            { type: "email", message: "Email không hợp lệ!" },
          ]}
        >
          <Input prefix="📧" placeholder="Nhập email" />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[
            { required: true, message: "Vui lòng nhập mật khẩu!" },
            { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự!" },
          ]}
        >
          <Input.Password placeholder="Nhập mật khẩu" />
        </Form.Item>

        <Form.Item>
          <button type="submit" className="submit-button">
            Đăng ký
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
