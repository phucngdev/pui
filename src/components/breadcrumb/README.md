# Breadcrumb

## Cách sử dụng

```jsx
import { Breadcrumb } from "pui";

// Cách sử dụng cơ bản
<Breadcrumb
  items={[
    { title: "Trang chủ", href: "/" },
    { title: "Sản phẩm", href: "/products" },
    { title: "Danh mục", href: "/products/category" },
    { title: "Trang hiện tại" },
  ]}
/>;
```

## Các ví dụ

### Tùy chỉnh dấu phân cách

```jsx
<Breadcrumb
  items={[
    { title: "Trang chủ", href: "/" },
    { title: "Sản phẩm", href: "/products" },
    { title: "Trang hiện tại" },
  ]}
  separator=">"
/>
```

### Tùy chỉnh style

```jsx
<Breadcrumb
  items={[
    { title: "Trang chủ", href: "/" },
    { title: "Sản phẩm", href: "/products" },
    { title: "Trang hiện tại" },
  ]}
  className="custom-breadcrumb"
  style={{ marginBottom: "20px" }}
/>
```

### Sử dụng với icon

```jsx
<Breadcrumb
  items={[
    { title: <HomeIcon />, href: "/" },
    { title: "Sản phẩm", href: "/products" },
    { title: "Trang hiện tại" },
  ]}
/>
```

### Xử lý sự kiện click

```jsx
<Breadcrumb
  items={[
    {
      title: "Trang chủ",
      href: "/",
      onClick: () => console.log("Click vào trang chủ"),
    },
    { title: "Sản phẩm", href: "/products" },
    { title: "Trang hiện tại" },
  ]}
/>
```

## API

### Breadcrumb Props

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mặc định | Mô tả                          |
| ---------- | ------------ | -------- | -------- | ------------------------------ |
| items      | Array        | Có       | -        | Mảng các phần tử breadcrumb    |
| separator  | ReactNode    | Không    | '/'      | Dấu phân cách giữa các phần tử |
| className  | string       | Không    | ''       | Class CSS tùy chỉnh            |
| style      | object       | Không    | {}       | Style CSS tùy chỉnh            |

### BreadcrumbItem Props

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mặc định | Mô tả                               |
| ---------- | ------------ | -------- | -------- | ----------------------------------- |
| title      | ReactNode    | Có       | -        | Nội dung hiển thị của phần tử       |
| href       | string       | Không    | -        | URL khi click vào phần tử           |
| onClick    | function     | Không    | -        | Hàm xử lý sự kiện click             |
| separator  | ReactNode    | Không    | -        | Dấu phân cách tùy chỉnh cho phần tử |
| isLast     | boolean      | Không    | -        | Đánh dấu phần tử cuối cùng          |
| className  | string       | Không    | ''       | Class CSS tùy chỉnh                 |
| style      | object       | Không    | {}       | Style CSS tùy chỉnh                 |

## Tính năng

- 🎯 Hỗ trợ điều hướng thông qua các liên kết
- 🎨 Tùy chỉnh giao diện linh hoạt
- 📱 Thiết kế responsive
- 🖱️ Hiệu ứng hover mượt mà
- ♿ Hỗ trợ accessibility
- 🎭 Style riêng cho phần tử cuối cùng
- 🛠️ Dễ dàng tùy chỉnh style và class

## Lưu ý

- Phần tử cuối cùng thường không nên có liên kết (href)
- Nên sử dụng các tiêu đề ngắn gọn và rõ ràng
- Đảm bảo thứ tự các phần tử phản ánh đúng cấu trúc phân cấp của trang web
