# KICKS Sneaker Store

Đồ án Web 1 xây dựng **giao diện website bán giày tĩnh** bằng HTML và CSS.
Dữ liệu sản phẩm, khách hàng, đơn hàng và số tiền được viết sẵn trong HTML.
JavaScript chỉ hiển thị thông báo; không tính tiền, cập nhật dữ liệu, lưu trữ hay gọi API.
Các liên kết chuyển tới trang mẫu cố định và không truyền dữ liệu giữa các trang.
Tìm kiếm, lọc và áp dụng sắp xếp dùng form HTML tải lại chính trang hiện tại, không hiện thông báo và không xử lý kết quả thật.
Phân trang ở user và admin là liên kết về chính trang hiện tại. Các nút tăng/giảm số lượng chỉ minh họa giao diện, không có JavaScript và không thay đổi số lượng hoặc tổng tiền.

## Mở website

Mở trực tiếp `index.html` bằng Chrome. Có thể dùng Live Server khi phát triển.
Font Awesome và Google Fonts dùng CDN nên cần Internet để tải icon và font Inter.

## Giao diện khách hàng

- `index.html`: trang chủ và sản phẩm nổi bật.
- `products.html`: danh sách sản phẩm, bộ lọc tên/thương hiệu/khoảng giá, sắp xếp và phân trang mẫu.
- `detail.html`: chi tiết sản phẩm mẫu, kích cỡ và nút thêm giỏ hàng.
- `cart.html`: giỏ hàng và tổng tiền cố định. Nút thanh toán dẫn tới `invoice.html`.
- `invoice.html`: hóa đơn đặt hàng mẫu, thông tin người mua, chọn địa chỉ có sẵn/địa chỉ mới, phương thức thanh toán và thông báo xác nhận.
- `profile.html`: thông tin tài khoản, lịch sử mua hàng theo đơn, địa chỉ và đổi mật khẩu. Chuyển mục bằng liên kết HTML/CSS.
- `login.html`, `register.html`: form đăng nhập và đăng ký mẫu.

## Giao diện quản trị

- `admin/login.html`: đăng nhập quản trị bằng URL riêng. Liên kết “Vào trang quản trị” mở dashboard mẫu.
- `admin/index.html`: tổng quan và biểu đồ doanh thu dựng bằng HTML/CSS.
- `admin/products.html`: danh sách sản phẩm; minh họa ẩn sản phẩm đã bán và xác nhận xóa sản phẩm chưa bán.
- `admin/product-add.html`, `admin/product-edit.html`: form thêm/sửa với phân loại, ảnh xem trước cố định và ô chọn file. Chọn file chỉ hiện thông báo, không đọc file hoặc đổi ảnh.
- `admin/orders.html`: danh sách đơn và bộ lọc trạng thái, khoảng ngày, tỉnh/thành, quận/huyện.
- `admin/order-detail.html`: chi tiết đơn mẫu, thông tin người mua, thanh toán và các thao tác thông báo.
- `admin/users.html`, `admin/user-add.html`, `admin/user-edit.html`: danh sách, thêm, sửa, khóa/mở người dùng bằng giao diện mẫu.
- `admin/statistics.html`: chọn khoảng ngày, top 5 khách hàng theo tổng mua giảm dần, danh sách đơn từng khách và liên kết chi tiết.
- `admin/profile.html`: hồ sơ quản trị.

## Hình ảnh và dữ liệu mẫu

Ảnh có sẵn tương ứng với Nike Free Run Flyknit đỏ, Puma Smash trắng, Nike Air Max 1 cam,
Nike Air Force 1 Shadow pastel và Vans Old Skool đỏ đô. Danh sách gồm 12 biến thể kích cỡ;
tên, thương hiệu, ảnh và giá được thống nhất giữa trang chủ, danh sách và quản trị.

`css/style.css` giữ kiểu dáng cửa hàng; `css/static-pages.css` bổ sung bộ lọc, hóa đơn và các mục hồ sơ;
`css/admin.css` dành cho quản trị. `js/main.js` chỉ chứa thông báo toast.
