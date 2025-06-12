# Input Component

## Cách sử dụng cơ bản

```jsx
import { Input } from "@your-package/input";

function MyComponent() {
  const handleChange = (e) => {
    console.log("Giá trị input:", e.target.value);
  };

  return <Input placeholder="Nhập text" onChange={handleChange} />;
}
```

## Tính năng

### Props

| Prop         | Type                           | Mặc định | Mô tả                                     |
| ------------ | ------------------------------ | -------- | ----------------------------------------- |
| className    | string                         | ''       | Class CSS bổ sung                         |
| size         | 'large' \| 'middle' \| 'small' | 'middle' | Kích thước của input                      |
| type         | string                         | 'text'   | Loại input (text, password, number, ...)  |
| placeholder  | string                         | -        | Placeholder của input                     |
| prefix       | ReactNode                      | -        | Icon hoặc text ở đầu input                |
| suffix       | ReactNode                      | -        | Icon hoặc text ở cuối input               |
| disabled     | boolean                        | false    | Vô hiệu hóa input                         |
| allowClear   | boolean                        | false    | Cho phép xóa giá trị                      |
| value        | string                         | -        | Giá trị của input (controlled)            |
| defaultValue | string                         | -        | Giá trị mặc định của input (uncontrolled) |
| onChange     | (e: ChangeEvent) => void       | -        | Callback khi giá trị thay đổi             |
| onPressEnter | (e: KeyboardEvent) => void     | -        | Callback khi nhấn Enter                   |

### Ví dụ

#### Input với prefix và suffix

```jsx
<Input
  prefix={<UserOutlined />}
  suffix={<SearchOutlined />}
  placeholder="Nhập tên người dùng"
/>
```

#### Input với allowClear

```jsx
<Input allowClear placeholder="Nhập text và xóa" />
```

#### Input với các kích thước khác nhau

```jsx
<Input size="large" placeholder="Large size" />
<Input placeholder="Default size" />
<Input size="small" placeholder="Small size" />
```

#### Input bị vô hiệu hóa

```jsx
<Input disabled placeholder="Disabled input" />
```

#### Input password

```jsx
<Input.Password placeholder="Nhập mật khẩu" />
```

## Tùy chỉnh giao diện

Component sử dụng các class CSS để tùy chỉnh giao diện. Bạn có thể ghi đè các class sau:

```css
.pui-input-wrapper
  .pui-input
  .pui-input-prefix
  .pui-input-suffix
  .pui-input-clear
  .pui-input-focused
  .pui-input-disabled;
```

## Đóng góp

Mọi đóng góp đều được hoan nghênh! Hãy thoải mái tạo Pull Request.
