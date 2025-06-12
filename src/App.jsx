import React from "react";
import Form from "./components/form/Form";
import Input from "./components/input/index";
import Button from "./components/button";
import message from "./components/message";
import { UserIcon, LockIcon, EyeIcon, EyeInvisibleIcon } from "./icons/index";

function App() {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    // Simulate login
    message.loading("Đang đăng nhập...");
    setTimeout(() => {
      message.success("Đăng nhập thành công!");
      console.log("Form values:", values);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-8">Đăng nhập</h1>

        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          className="space-y-6"
        >
          <Form.Item
            label="Tên đăng nhập"
            name="username"
            rules={[
              { required: true, message: "Vui lòng nhập tên đăng nhập!" },
              { min: 3, message: "Tên đăng nhập phải có ít nhất 3 ký tự!" },
            ]}
          >
            <Input
              prefix={<UserIcon size={16} />}
              placeholder="Nhập tên đăng nhập"
            />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              { required: true, message: "Vui lòng nhập mật khẩu!" },
              { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự!" },
            ]}
          >
            <Input.Password
              prefix={<LockIcon size={16} />}
              placeholder="Nhập mật khẩu"
              iconRender={(visible) =>
                visible ? <EyeIcon size={16} /> : <EyeInvisibleIcon size={16} />
              }
            />
          </Form.Item>

          <div className="flex items-center justify-between">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Ghi nhớ đăng nhập
                </label>
              </div>
            </Form.Item>
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Quên mật khẩu?
            </a>
          </div>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Đăng nhập
            </Button>
          </Form.Item>

          <div className="text-center">
            <span className="text-sm text-gray-600">Chưa có tài khoản? </span>
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Đăng ký ngay
            </a>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default App;
