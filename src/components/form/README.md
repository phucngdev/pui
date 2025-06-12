# Form Component

## Cách sử dụng

```jsx
import { Form } from "@pui/form";

const MyForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        label="Username"
        name="username"
        rules={[
          { required: true, message: "Please input your username!" },
          { min: 3, message: "Username must be at least 3 characters!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
```

## API

### Form

| Property       | Type                       | Default      | Description                                       |
| -------------- | -------------------------- | ------------ | ------------------------------------------------- |
| form           | FormInstance               | -            | Form instance được tạo bởi Form.useForm()         |
| layout         | 'horizontal' \| 'vertical' | 'horizontal' | Layout của form                                   |
| onFinish       | (values) => void           | -            | Callback được gọi khi form được submit thành công |
| onFinishFailed | (errorInfo) => void        | -            | Callback được gọi khi form submit thất bại        |
| className      | string                     | -            | Custom CSS class                                  |
| style          | CSSProperties              | -            | Custom CSS styles                                 |

### Form.Item

| Property        | Type               | Default    | Description                |
| --------------- | ------------------ | ---------- | -------------------------- |
| label           | ReactNode          | -          | Label của form item        |
| name            | string             | -          | Tên field trong form data  |
| rules           | Rule[]             | -          | Validation rules           |
| required        | boolean            | false      | Field có bắt buộc không    |
| validateTrigger | string \| string[] | 'onChange' | Khi nào trigger validation |
| valuePropName   | string             | 'value'    | Prop name của field value  |
| noStyle         | boolean            | false      | Ẩn label và wrapper        |
| className       | string             | -          | Custom CSS class           |
| style           | CSSProperties      | -          | Custom CSS styles          |

### Rule

| Property  | Type                                                  | Default  | Description             |
| --------- | ----------------------------------------------------- | -------- | ----------------------- |
| required  | boolean                                               | false    | Field có bắt buộc không |
| message   | string                                                | -        | Error message           |
| min       | number                                                | -        | Độ dài tối thiểu        |
| max       | number                                                | -        | Độ dài tối đa           |
| type      | 'string' \| 'number' \| 'boolean' \| 'email' \| 'url' | 'string' | Kiểu dữ liệu            |
| pattern   | RegExp                                                | -        | Regex pattern           |
| validator | (rule, value) => Promise                              | -        | Custom validator        |

### FormInstance

| Method         | Type                                  | Description                   |
| -------------- | ------------------------------------- | ----------------------------- |
| getFieldValue  | (name: string) => any                 | Lấy giá trị của field         |
| getFieldsValue | () => Record<string, any>             | Lấy tất cả giá trị của form   |
| setFieldValue  | (name: string, value: any) => void    | Set giá trị cho field         |
| setFieldsValue | (values: Record<string, any>) => void | Set nhiều giá trị cho form    |
| resetFields    | () => void                            | Reset form về giá trị ban đầu |
| validateFields | () => Promise                         | Validate form                 |
| submit         | () => void                            | Submit form                   |

## Ví dụ

### Form với validation

```jsx
<Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
  <Form.Item
    label="Username"
    name="username"
    rules={[
      { required: true, message: "Please input your username!" },
      { min: 3, message: "Username must be at least 3 characters!" },
    ]}
  >
    <Input />
  </Form.Item>

  <Form.Item
    label="Password"
    name="password"
    rules={[
      { required: true, message: "Please input your password!" },
      { min: 6, message: "Password must be at least 6 characters!" },
    ]}
  >
    <Input.Password />
  </Form.Item>
</Form>
```

### Form với custom validator

```jsx
<Form.Item
  label="Age"
  name="age"
  rules={[
    { required: true, message: "Please input your age!" },
    {
      validator: async (_, value) => {
        if (value < 18) {
          throw new Error("You must be at least 18 years old!");
        }
      },
    },
  ]}
>
  <Input type="number" />
</Form.Item>
```

### Form với dynamic fields

```jsx
<Form.List name="items">
  {(fields, { add, remove }) => (
    <>
      {fields.map(({ key, name, ...restField }) => (
        <Form.Item
          key={key}
          {...restField}
          name={[name, "value"]}
          rules={[{ required: true, message: "Missing value" }]}
        >
          <Input />
        </Form.Item>
      ))}
      <Form.Item>
        <Button type="dashed" onClick={() => add()}>
          Add field
        </Button>
      </Form.Item>
    </>
  )}
</Form.List>
```

## Styling

Form component sử dụng CSS modules và có thể được tùy chỉnh thông qua các props `className` và `style`. Các class mặc định:

- `.form`: Container của form
- `.form-item`: Container của form item
- `.form-item-label`: Label của form item
- `.form-item-control`: Container của form control
- `.form-item-error`: Error message của form item

## Best Practices

1. Sử dụng `Form.useForm()` để tạo form instance và quản lý form state
2. Đặt validation rules phù hợp với yêu cầu của field
3. Sử dụng `onFinish` để xử lý dữ liệu form khi submit thành công
4. Sử dụng `onFinishFailed` để xử lý lỗi validation
5. Sử dụng `layout="vertical"` cho form có nhiều fields
6. Sử dụng `noStyle` cho form items không cần label
7. Sử dụng `valuePropName` cho các components không sử dụng prop `value` mặc định

## Contributing

Mọi đóng góp đều được hoan nghênh! Vui lòng đọc [CONTRIBUTING.md](CONTRIBUTING.md) để biết thêm chi tiết.
