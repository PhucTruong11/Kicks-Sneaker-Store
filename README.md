# KICKS Sneaker Store

Đồ án Web 1 xây dựng giao diện bán giày tĩnh bằng HTML và CSS.
JavaScript hiển thị thông báo và, theo yêu cầu mới, định dạng dấu chấm phân cách hàng nghìn trong ô nhập giá. Không tính tiền, tìm kiếm, lọc, lưu dữ liệu hoặc gọi API.
Dữ liệu sản phẩm, khách hàng và đơn hàng được viết sẵn trong HTML.

## Quy ước trang đại diện

Mỗi loại giao diện chỉ có một trang mẫu đại diện, không tạo trang riêng cho từng sản phẩm hoặc đơn hàng:

- Mọi ảnh/tên sản phẩm user đều dẫn tới `detail.html`, luôn hiển thị mẫu Nike Free Run Flyknit Đỏ.
- Mọi liên kết giỏ hàng dẫn tới `cart.html`, dùng số lượng 1, 1, 2 và tổng tiền cố định 10.700.000đ. Nút −/+ chỉ minh họa giao diện.
- Mua ngay và Tiến hành thanh toán đều dẫn tới `invoice.html`, dùng cùng một hóa đơn mẫu cố định.
- Ô tìm kiếm và bộ lọc sản phẩm dẫn tới `search.html`, luôn hiển thị cùng danh sách kết quả mẫu, không xử lý từ khóa hoặc điều kiện nhập.
- Lịch sử user có nút Xem chi tiết, tất cả cùng dẫn tới `order-detail.html` đại diện.
- Admin dùng một `product-detail.html`, một `product-edit.html`, một `order-detail.html` và một `user-detail.html` chỉ xem đại diện; mọi dòng danh sách tương ứng đều dẫn tới các trang đó.
- Không truyền SKU, mã đơn, số lượng hoặc giá qua URL. Phân trang và sắp xếp chỉ tải lại trang tĩnh.

## Mở website

Mở `index.html` bằng Chrome, hoặc dùng Live Server khi phát triển.
Font Awesome và font Inter dùng CDN nên cần Internet để tải icon/font.

## Giao diện user

- `index.html`: trang chủ với 4 sản phẩm nổi bật.
- `products.html`: 12 sản phẩm khác nhau, bộ lọc, sắp xếp và phân trang giao diện.
- `search.html`: trang kết quả tìm kiếm đại diện; dữ liệu cố định.
- `detail.html`: chi tiết sản phẩm đại diện; chọn size bằng radio HTML/CSS, thêm giỏ chỉ thông báo, Mua ngay dẫn tới hóa đơn mẫu.
- `cart.html`: giỏ hàng đại diện với số lượng và tiền viết sẵn.
- `invoice.html`: hóa đơn đại diện; chọn địa chỉ tài khoản hoặc nhập địa chỉ mới, chọn COD/trực tuyến, xác nhận chỉ hiện thông báo.
- `profile.html`: thông tin cá nhân và sổ địa chỉ chỉ xem; lịch sử nhóm theo đơn và giao diện đổi mật khẩu. Chuyển mục bằng HTML/CSS.
- `order-detail.html`: trang chi tiết đơn đại diện, khớp mẫu cùng mã ở admin.
- `login.html`, `register.html`: form mẫu dẫn về trang chủ bằng HTML, không xác thực hoặc gửi thông tin nhập.

## Giao diện admin

- `admin/login.html`: URL đăng nhập riêng, dẫn tới dashboard mẫu.
- `admin/index.html`: tổng quan và biểu đồ HTML/CSS.
- `admin/products.html`: danh sách 12 mẫu sản phẩm; ẩn sản phẩm đã bán và xác nhận xóa bằng giao diện/thông báo.
- `admin/product-detail.html`: chi tiết Nike Free Run Flyknit Đỏ đại diện.
- `admin/product-add.html`, `admin/product-edit.html`: các ô tên, SKU, thương hiệu, giá, phân loại, màu, size, kho, mô tả, ảnh, trạng thái, nhãn và chính sách tương ứng chi tiết user. Sửa điền sẵn mẫu Nike; chọn file chỉ thông báo, không đọc hoặc đổi ảnh.
- `admin/orders.html`, `admin/order-detail.html`: danh sách/bộ lọc và chi tiết đơn đại diện; cập nhật chỉ thông báo.
- `admin/users.html`, `admin/user-add.html`, `admin/user-detail.html`: danh sách, thêm và xem người dùng đại diện. Danh sách dùng Chi tiết thay cho Sửa theo yêu cầu mới; khóa/mở chỉ thông báo. Trang sửa cũ không còn được liên kết từ danh sách.
- `admin/statistics.html`: top 5 khách hàng và các đơn mẫu có liên kết chi tiết, số liệu viết sẵn theo tổng mua giảm dần.
- `admin/profile.html`: hồ sơ quản trị.

## Thông tin mẫu thống nhất

12 sản phẩm ở danh sách user/admin có cùng tên, thương hiệu, ảnh, giá và size đại diện.
Trang chi tiết user và trang chi tiết/sửa admin dùng cùng mẫu Nike Free Run Flyknit Đỏ, giá 4.500.000đ, size 39–42.
Trang chi tiết đơn user/admin dùng cùng mẫu #KICKS-8922 của Phúc Trương, 10.700.000đ, chưa xác nhận.
Ảnh lưu trong `images/`; nguồn ảnh bổ sung nằm ở `images/SOURCES.md`.

Các trang vẫn là giao diện đại diện: bấm một dòng khác trong danh sách không thay dữ liệu của trang chi tiết.

Hóa đơn #KICKS-8922, chi tiết đơn user/admin, dòng lịch sử và danh sách đơn admin đều dùng cùng nội dung mẫu 3 sản phẩm, 4 đôi, tổng 10.700.000đ. Dữ liệu được viết sẵn, không thêm đơn bằng JavaScript.

`js/price-format.js` chỉ định dạng các ô giá ở trang thêm/sửa sản phẩm admin và bộ lọc user: nhập `4500000` hiển thị `4.500.000`. Không cập nhật giá của sản phẩm hoặc xử lý kết quả lọc.
