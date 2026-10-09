# KICKS — Sneaker Store & Admin Management System

> Dự án website thương mại điện tử chuyên kinh doanh giày Sneaker thời trang cao cấp, tích hợp đầy đủ giao diện người dùng (Storefront) và hệ thống quản trị chuyên nghiệp (Admin Dashboard).

---

## 🌟 Điểm nổi bật & Tính năng chính

### 1. Phía Khách hàng (Storefront)
- **Trang chủ (`index.html`)**:
  - Hero banner độc đáo, phối cảnh năng động với các mẫu giày xu hướng.
  - Dynamic Island Navigation Bar hiện đại, hỗ trợ tìm kiếm nhanh và dropdown menu người dùng.
  - Danh sách sản phẩm thịnh hành (Trending Sneakers), cam kết dịch vụ và chân trang (Footer) đầy đủ thông tin.
- **Danh mục sản phẩm (`products.html`)**:
  - Hiển thị 4 sản phẩm/hàng chuẩn tỉ lệ vàng, grid layout thoáng đãng.
  - Bộ lọc thương hiệu (Nike, Adidas, Jordan, Converse, Puma, New Balance,...).
  - Thanh tìm kiếm và bộ chọn sắp xếp giá/độ phổ biến.
  - Hệ thống phân trang (Pagination) mượt mà.
- **Chi tiết sản phẩm (`detail.html`)**:
  - Khung ảnh sản phẩm tỉ lệ 1:1 sắc nét, bo góc hiện đại.
  - Chọn size giày thời gian thực với hiệu ứng chuyển màu sống động.
  - 4 khối lợi ích & dịch vụ trải ngang cân đối (Giao hàng hỏa tốc, Đổi trả 30 ngày, 100% Chính hãng, Bảo hành 12 tháng).
- **Giỏ hàng (`cart.html`)**:
  - Bảng giỏ hàng tối ưu: bộ tăng giảm số lượng (+ / -) realtime, tính tổng tiền tự động.
  - Hộp nhập Voucher giảm giá kèm mã đề xuất tiện lợi.
- **Hồ sơ cá nhân (`profile.html`)**:
  - Avatar đơn sắc tối giản (Monochrome badge).
  - Quản lý thông tin tài khoản, sổ địa chỉ nhận hàng, đổi mật khẩu.
  - Lịch sử mua hàng với badge trạng thái đơn hàng (Đang giao hàng, Đã nhận hàng,...) có icon chỉ dẫn trực quan.
- **Đăng nhập & Đăng ký (`login.html`, `register.html`)**:
  - Giao diện form tối giản, hiện đại, hình nền sneaker thẩm mỹ.

### 2. Phía Quản trị viên (Admin Dashboard)
- **Tổng quan (`admin/index.html`)**:
  - Dashboard thống kê doanh thu, đơn hàng, khách hàng mới và biểu đồ trực quan.
  - Bảng danh sách đơn hàng gần đây với trạng thái cập nhật liên tục.
- **Quản lý sản phẩm (`admin/products.html`, `admin/product-add.html`, `admin/product-edit.html`)**:
  - Danh sách sản phẩm kèm ảnh thumbnail, phân loại, giá bán và tồn kho.
  - Trang thêm mới và chỉnh sửa sản phẩm đầy đủ thông tin chi tiết.
- **Quản lý đơn hàng (`admin/orders.html`, `admin/order-detail.html`)**:
  - Danh sách đơn hàng với bộ lọc trạng thái và thao tác nhanh (Duyệt, In hóa đơn, Hủy).
  - Trang chi tiết đơn hàng chi tiết từng món đồ, địa chỉ nhận hàng và tổng thanh toán.
- **Hồ sơ Admin (`admin/profile.html`)**:
  - Thông tin quản trị viên, phân quyền và cài đặt hệ thống.

---

## 🛠 Công nghệ sử dụng
- **HTML5**: Cấu trúc ngữ nghĩa chuẩn SEO, hỗ trợ khả năng truy cập.
- **CSS3 (Vanilla CSS)**: Thiết kế giao diện hiện đại (Modern UI, Dynamic Island, Flexbox, CSS Grid, Glassmorphism, Micro-animations).
- **JavaScript (Vanilla JS)**: Xử lý tương tác giao diện, tính toán giỏ hàng, thông báo Toast, chuyển tab hồ sơ và trạng thái.
- **Font Awesome 6**: Hệ thống icon vector đồng bộ.
- **Google Fonts**: Phông chữ `Inter` thanh lịch và chuẩn quốc tế.

---

## 🚀 Hướng dẫn khởi chạy dự án

1. Clone repository về máy:
   ```bash
   git clone https://github.com/<your-username>/kicks-sneaker-store.git
   ```
2. Mở thư mục dự án bằng Visual Studio Code hoặc bất kỳ trình soạn thảo code nào.
3. Khởi chạy bằng extension **Live Server** (chuột phải vào `index.html` chọn *Open with Live Server*) hoặc mở trực tiếp file `index.html` trên trình duyệt web.

---

## 📂 Cấu trúc thư mục

```text
├── index.html              # Trang chủ khách hàng
├── products.html           # Trang danh sách sản phẩm
├── detail.html             # Trang chi tiết sản phẩm
├── cart.html               # Trang giỏ hàng & thanh toán
├── profile.html            # Trang hồ sơ cá nhân khách hàng
├── login.html              # Trang đăng nhập
├── register.html           # Trang đăng ký
├── admin/                  # Khu vực quản trị viên
│   ├── index.html          # Dashboard tổng quan
│   ├── products.html       # Quản lý danh mục sản phẩm
│   ├── product-add.html    # Thêm sản phẩm mới
│   ├── product-edit.html   # Chỉnh sửa sản phẩm
│   ├── orders.html         # Quản lý danh sách đơn hàng
│   ├── order-detail.html   # Xem chi tiết đơn hàng
│   └── profile.html        # Hồ sơ & cài đặt Admin
├── css/
│   ├── style.css           # Toàn bộ style cho khách hàng
│   └── admin.css           # Toàn bộ style cho quản trị viên
├── js/
│   └── main.js             # Logic xử lý giao diện & giỏ hàng
└── images/                 # Tài nguyên hình ảnh sản phẩm & banner
```

---
*Dự án phục vụ mục đích học tập và phát triển ứng dụng Web Front-end.*
