# Grid System

## Cách sử dụng

```jsx
import { Row, Col } from "pui";

// Cách sử dụng cơ bản
<Row>
  <Col span={12}>col-12</Col>
  <Col span={12}>col-12</Col>
</Row>

// Responsive
<Row>
  <Col xs={24} sm={12} md={8} lg={6}>
    col
  </Col>
  <Col xs={24} sm={12} md={8} lg={6}>
    col
  </Col>
  <Col xs={24} sm={12} md={8} lg={6}>
    col
  </Col>
  <Col xs={24} sm={12} md={8} lg={6}>
    col
  </Col>
</Row>

// Căn chỉnh
<Row justify="center" align="middle">
  <Col span={6}>col-6</Col>
  <Col span={6}>col-6</Col>
  <Col span={6}>col-6</Col>
</Row>

// Khoảng cách giữa các cột
<Row gutter={[16, 16]}>
  <Col span={6}>col-6</Col>
  <Col span={6}>col-6</Col>
  <Col span={6}>col-6</Col>
  <Col span={6}>col-6</Col>
</Row>
```

## API

### Row Props

| Thuộc tính | Kiểu dữ liệu                                                      | Bắt buộc | Mặc định | Mô tả                         |
| ---------- | ----------------------------------------------------------------- | -------- | -------- | ----------------------------- |
| gutter     | number \| [number, number]                                        | Không    | 0        | Khoảng cách giữa các cột (px) |
| justify    | 'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' | Không    | 'start'  | Căn chỉnh theo chiều ngang    |
| align      | 'top' \| 'middle' \| 'bottom'                                     | Không    | 'top'    | Căn chỉnh theo chiều dọc      |
| wrap       | boolean                                                           | Không    | true     | Cho phép xuống dòng           |
| className  | string                                                            | Không    | ''       | Class CSS tùy chỉnh           |
| style      | object                                                            | Không    | {}       | Style CSS tùy chỉnh           |

### Col Props

| Thuộc tính | Kiểu dữ liệu | Bắt buộc | Mặc định | Mô tả                               |
| ---------- | ------------ | -------- | -------- | ----------------------------------- |
| span       | number       | Không    | -        | Số cột chiếm (1-24)                 |
| xs         | number       | Không    | -        | Số cột chiếm trên màn hình < 576px  |
| sm         | number       | Không    | -        | Số cột chiếm trên màn hình ≥ 576px  |
| md         | number       | Không    | -        | Số cột chiếm trên màn hình ≥ 768px  |
| lg         | number       | Không    | -        | Số cột chiếm trên màn hình ≥ 992px  |
| xl         | number       | Không    | -        | Số cột chiếm trên màn hình ≥ 1200px |
| xxl        | number       | Không    | -        | Số cột chiếm trên màn hình ≥ 1600px |
| offset     | number       | Không    | 0        | Số cột offset                       |
| order      | number       | Không    | 0        | Thứ tự hiển thị                     |
| pull       | number       | Không    | 0        | Số cột kéo sang trái                |
| push       | number       | Không    | 0        | Số cột đẩy sang phải                |
| className  | string       | Không    | ''       | Class CSS tùy chỉnh                 |
| style      | object       | Không    | {}       | Style CSS tùy chỉnh                 |

## Breakpoints

| Breakpoint | Kích thước màn hình |
| ---------- | ------------------- |
| xs         | < 576px             |
| sm         | ≥ 576px             |
| md         | ≥ 768px             |
| lg         | ≥ 992px             |
| xl         | ≥ 1200px            |
| xxl        | ≥ 1600px            |

## Tính năng

- 🎯 Hệ thống lưới 24 cột
- 📱 Responsive với 6 breakpoints
- 🎨 Tùy chỉnh gutter (khoảng cách)
- 🔄 Căn chỉnh linh hoạt (justify, align)
- 🎭 Offset, order, pull, push
- 🛠️ Dễ dàng tùy chỉnh style và class
