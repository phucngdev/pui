# Message Component

## Cách sử dụng

```jsx
// Hiển thị message thông tin
message.info("Đây là thông báo thông tin");

// Hiển thị message thành công
message.success("Thao tác đã được thực hiện thành công!");

// Hiển thị message loading
message.loading("Thao tác đang được thực hiện!");

// Hiển thị message cảnh báo
message.warning("Cảnh báo! Vui lòng kiểm tra lại thông tin.");

// Hiển thị message lỗi
message.error("Đã xảy ra lỗi! Vui lòng thử lại sau.");
```

## API

### message.info(content, duration)

### message.loading(content, duration)

### message.success(content, duration)

### message.warning(content, duration)

### message.error(content, duration)

| Tham số  | Kiểu dữ liệu | Mặc định | Mô tả                                                              |
| -------- | ------------ | -------- | ------------------------------------------------------------------ |
| content  | string       | -        | Nội dung thông báo                                                 |
| duration | number       | 3        | Thời gian hiển thị (giây). Nếu là 0, message sẽ không tự động đóng |

## Tính năng

- 4 loại message: info, success, warning, error
- Tự động đóng sau một khoảng thời gian (mặc định: 3 giây)
- Có thể đóng thủ công bằng nút close
- Hiệu ứng slide in/out mượt mà
- Màu sắc và icon phù hợp với từng loại message
- Có thể hiển thị nhiều message cùng lúc
- Responsive và căn giữa màn hình

## Ví dụ

```jsx
import React from "react";
import message from "./components/message";

function Demo() {
  const showMessage = (type) => {
    switch (type) {
      case "info":
        message.info("Đây là thông báo thông tin");
        break;
      case "success":
        message.success("Thao tác đã được thực hiện thành công!");
        break;
      case "warning":
        message.warning("Cảnh báo! Vui lòng kiểm tra lại thông tin.");
        break;
      case "error":
        message.error("Đã xảy ra lỗi! Vui lòng thử lại sau.");
        break;
    }
  };

  return (
    <div>
      <button onClick={() => showMessage("info")}>Info Message</button>
      <button onClick={() => showMessage("success")}>Success Message</button>
      <button onClick={() => showMessage("warning")}>Warning Message</button>
      <button onClick={() => showMessage("error")}>Error Message</button>
    </div>
  );
}
```

## Styling

Message component sử dụng CSS thuần với các class sau:

- `.message-container`: Container chứa tất cả các message
- `.message`: Class cơ bản cho mỗi message
- `.message-content`: Container cho nội dung message
- `.message-icon`: Container cho icon
- `.message-text`: Text của message
- `.message-close`: Nút đóng message
- `.message-info`: Style cho message info
- `.message-success`: Style cho message success
- `.message-warning`: Style cho message warning
- `.message-error`: Style cho message error

## Animation

Message component có 2 animation:

1. `messageSlideIn`: Animation khi message xuất hiện
2. `messageSlideOut`: Animation khi message biến mất

## Lưu ý

- Message component sử dụng React 18's createRoot API
- Đảm bảo đã import đầy đủ các icon cần thiết (InfoIcon, SuccessIcon, WarningIcon, ErrorIcon, CloseIcon)
- Message sẽ tự động xóa khỏi DOM sau khi đóng
