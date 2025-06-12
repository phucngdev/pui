# Form Component

Một component Form linh hoạt và có thể tùy chỉnh, được lấy cảm hứng từ Form component của Ant Design.

## Cài đặt

```bash
npm install @your-package/form
```

## Cách sử dụng cơ bản

```jsx
import { Form } from "@your-package/form";

function MyForm() {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log("Giá trị form:", values);
  };

  return (
    <Form form={form} onFinish={handleFinish}>
      <Form.Item
        name="username"
        label="Tên đăng nhập"
        rules={{
          required: true,
          message: "Vui lòng nhập tên đăng nhập",
        }}
      >
        <input type="text" />
      </Form.Item>
    </Form>
  );
}
```

## Tính năng

### Props của Form

| Prop          | Type                       | Mặc định   | Mô tả                                     |
| ------------- | -------------------------- | ---------- | ----------------------------------------- |
| form          | FormInstance               | -          | Instance form được tạo bởi Form.useForm() |
| layout        | 'horizontal' \| 'vertical' | 'vertical' | Bố cục của form                           |
| onFinish      | (values) => void           | -          | Callback khi form được submit             |
| initialValues | object                     | {}         | Giá trị ban đầu của các trường            |
| className     | string                     | ''         | Class CSS bổ sung                         |

### Props của Form.Item

| Prop      | Type      | Mặc định | Mô tả              |
| --------- | --------- | -------- | ------------------ |
| name      | string    | -        | Tên trường         |
| label     | ReactNode | -        | Nhãn của form item |
| rules     | object[]  | -        | Quy tắc validation |
| className | string    | ''       | Class CSS bổ sung  |

### Quy tắc Validation

```jsx
rules={{
  required: true,
  message: "Trường này là bắt buộc",
  min: 3,
  minMessage: "Độ dài tối thiểu là 3 ký tự",
  max: 20,
  maxMessage: "Độ dài tối đa là 20 ký tự",
  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  validator: (value) => {
    if (!/[A-Z]/.test(value)) {
      return "Phải chứa ít nhất một chữ hoa";
    }
    return true;
  }
}}
```

### Các phương thức của Form Instance

```jsx
const [form] = Form.useForm();

// Đặt giá trị cho một trường
form.setFieldValue("username", "john");

// Đặt giá trị cho nhiều trường
form.setFieldsValue({
  username: "john",
  email: "john@example.com",
});

// Lấy giá trị của một trường
const username = form.getFieldValue("username");

// Lấy giá trị của tất cả các trường
const values = form.getFieldsValue();

// Reset form về giá trị ban đầu
form.resetFields();

// Xóa tất cả giá trị của form
form.clearFields();

// Validate tất cả các trường
form.validateFields();

// Submit form
form.submit();
```

## Ví dụ

Xem thêm các ví dụ trong thư mục demo:

- Form cơ bản
- Form với Validation
- Form với Validation tùy chỉnh
- Form với các trường động
- Form với các tùy chọn bố cục

## Tùy chỉnh giao diện

Component sử dụng các class CSS để tùy chỉnh giao diện. Bạn có thể ghi đè các class sau:

```css
.pui-form
  .pui-form-vertical
  .pui-form-horizontal
  .pui-form-item
  .pui-form-item-label
  .pui-form-item-required
  .pui-form-item-control
  .pui-form-item-error
  .pui-form-item-error-message;
```

Mọi đóng góp đều được hoan nghênh! Hãy thoải mái tạo Pull Request.
