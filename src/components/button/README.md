# Button Component

Button là một component cơ bản để tạo các nút bấm với nhiều kiểu dáng và trạng thái khác nhau.

## Cài đặt

```bash
npm install @your-package/button
```

## Cách sử dụng

```jsx
import Button from '@your-package/button';

// Button cơ bản
<Button>Default Button</Button>

// Button với các props
<Button
  type="primary"
  size="large"
  shape="round"
  icon="🔍"
  loading
  block
>
  Click me
</Button>
```

## Props

| Prop      | Type                                                   | Default   | Description                     |
| --------- | ------------------------------------------------------ | --------- | ------------------------------- |
| type      | 'default' \| 'primary' \| 'dashed' \| 'text' \| 'link' | 'default' | Kiểu button                     |
| size      | 'large' \| 'middle' \| 'small'                         | 'middle'  | Kích thước button               |
| shape     | 'default' \| 'circle' \| 'round'                       | 'default' | Hình dạng button                |
| danger    | boolean                                                | false     | Hiển thị button nguy hiểm       |
| disabled  | boolean                                                | false     | Vô hiệu hóa button              |
| loading   | boolean                                                | false     | Hiển thị trạng thái loading     |
| block     | boolean                                                | false     | Button chiếm toàn bộ chiều rộng |
| icon      | ReactNode                                              | -         | Icon hiển thị bên trái nội dung |
| className | string                                                 | -         | Class CSS tùy chỉnh             |
| onClick   | function                                               | -         | Hàm xử lý sự kiện click         |

## Các kiểu Button

### Types

- `default`: Button mặc định với viền xám
- `primary`: Button chính với nền xanh
- `dashed`: Button với viền đứt nét
- `text`: Button dạng text không viền
- `link`: Button dạng link

### Sizes

- `large`: Chiều cao 40px, font 16px
- `middle`: Chiều cao 32px, font 14px
- `small`: Chiều cao 24px, font 12px

### Shapes

- `default`: Bo góc 6px
- `circle`: Hình tròn
- `round`: Bo góc 32px

## Ví dụ

### Button với các kiểu khác nhau

```jsx
<Button type="default">Default</Button>
<Button type="primary">Primary</Button>
<Button type="dashed">Dashed</Button>
<Button type="text">Text</Button>
<Button type="link">Link</Button>
```

### Button với các kích thước

```jsx
<Button size="large">Large</Button>
<Button size="middle">Middle</Button>
<Button size="small">Small</Button>
```

### Button với icon

```jsx
<Button icon="🔍">Search</Button>
<Button icon="📝">Edit</Button>
```

### Button loading

```jsx
<Button loading>Loading</Button>
```

### Button danger

```jsx
<Button danger>Danger</Button>
<Button type="primary" danger>Danger Primary</Button>
```

### Button block

```jsx
<Button block>Block Button</Button>
```

## Tùy chỉnh CSS

Button component sử dụng các class CSS sau để tùy chỉnh:

- `.pui-btn`: Class cơ bản cho button
- `.pui-btn-{type}`: Class cho các kiểu button
- `.pui-btn-{size}`: Class cho các kích thước
- `.pui-btn-{shape}`: Class cho các hình dạng
- `.pui-btn-dangerous`: Class cho button nguy hiểm
- `.pui-btn-disabled`: Class cho button bị vô hiệu hóa
- `.pui-btn-loading`: Class cho button đang loading
- `.pui-btn-block`: Class cho button block
- `.pui-btn-icon`: Class cho icon
- `.pui-btn-content`: Class cho nội dung button

## Contributing

Mọi đóng góp đều được hoan nghênh! Vui lòng tạo pull request để đóng góp.
