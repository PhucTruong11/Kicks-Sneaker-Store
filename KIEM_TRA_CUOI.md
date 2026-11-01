# Đối chiếu yêu cầu Web 1 — 01/11/2026

Đối chiếu với `BienBanDanhGia_Web1.doc` và yêu cầu của nhóm: giao diện tĩnh, mỗi loại trang có một mẫu đại diện, JavaScript hiện thông báo; theo yêu cầu bổ sung, cho phép định dạng dấu chấm trong ô giá.

## Các mục giao diện

| Yêu cầu | Trang thể hiện | Kết quả |
| --- | --- | --- |
| Danh sách/phân loại sản phẩm | `products.html`, chọn thương hiệu | Có |
| Chi tiết sản phẩm | `detail.html` | Một trang đại diện |
| Tìm kiếm cơ bản và nâng cao | Ô tìm kiếm; form tên, thương hiệu, giá từ/đến; `search.html` | Kết quả cố định |
| Phân trang | `products.html`, `search.html` | Liên kết tải lại trang mẫu |
| Đăng ký/đăng nhập người mua | `register.html`, `login.html` | Form HTML dẫn tới user, không xác thực |
| Giỏ hàng và người mua đã đăng nhập | `cart.html`, `invoice.html` | Thông tin viết sẵn |
| Địa chỉ tài khoản hoặc địa chỉ mới | `invoice.html` | Chọn bằng radio HTML/CSS, nhập được địa chỉ mới |
| Tiền mặt hoặc trực tuyến | `invoice.html` | Có hai lựa chọn |
| Hiển thị đơn sau giao dịch/lịch sử theo đơn | `invoice.html`, `profile.html#orders`, `order-detail.html` | Đơn mẫu có sẵn; không lưu bằng JS |
| Đăng nhập/đăng xuất admin bằng URL riêng | `admin/login.html`, menu Đăng xuất | Có |
| Thêm/xem chi tiết/khóa/mở người dùng | `admin/users.html`, `user-add.html`, `user-detail.html` | Theo yêu cầu bổ sung: bỏ thao tác Sửa trên danh sách, thay bằng trang chỉ xem |
| Thêm sản phẩm, phân loại, chọn ảnh/xem trước | `admin/product-add.html` | Có ô chọn file và ảnh mẫu; không đọc file bằng JS |
| Sửa có thông tin/phân loại/ảnh điền sẵn | `admin/product-edit.html` | Khớp mẫu chi tiết user |
| Ẩn sản phẩm đã bán, hỏi trước khi xóa sản phẩm chưa bán | `admin/products.html` | Có hai loại thao tác; không sửa danh sách thật |
| Chi tiết/cập nhật trạng thái đơn theo chiều tiến | `admin/order-detail.html` | Ô chọn trạng thái tiếp theo; lựa chọn trạng thái hiện tại bị vô hiệu; cập nhật chỉ báo thành công |
| Lọc đơn theo trạng thái/ngày/địa điểm | `admin/orders.html` | Có đủ ô; kết quả cố định |
| Top 5 khách hàng theo khoảng ngày, đơn liên quan và tổng giảm dần | `admin/statistics.html` | Có đủ dữ liệu mẫu, liên kết chi tiết và tổng mua |

## Nội dung đã đối chiếu

- 12 sản phẩm trong danh sách user và admin: tên, ảnh, thương hiệu, giá, size đại diện khớp nhau.
- Mẫu chi tiết user/admin và form sửa: Nike Free Run Flyknit Đỏ, SKU NK-FR-042, 4.500.000đ, size 39–42; màu, kho, mô tả, nhãn và chính sách khớp nhau. Form thêm có các ô tương ứng.
- Giỏ hàng, hóa đơn, hai trang chi tiết đơn và dòng đơn mới trong lịch sử/admin dùng cùng mẫu #KICKS-8922: 3 sản phẩm, tổng số lượng 4 đôi, 10.700.000đ, chưa xác nhận, ngày 30/10/2026.
- Người mua Phúc Trương: mã KH001, email, số điện thoại, địa chỉ, hạng và điểm thành viên khớp hồ sơ/admin.
- Lịch sử có 4 đơn viết sẵn; danh sách admin có đủ các đơn đó. Top 5 chỉ tính đơn đã giao thành công, tổng mẫu 22.900.000đ, sắp giảm dần.
- Mọi sản phẩm vẫn mở cùng `detail.html`; mọi nút Mua ngay mở `invoice.html`; mọi liên kết chi tiết đơn mở một trang đại diện của từng khu vực.

## Kiểm tra mã và trình duyệt

- 24 trang HTML; liên kết file, ảnh và anchor tồn tại.
- `js/main.js` gồm `showToast()` và `addToCart()` gọi thông báo. Theo yêu cầu bổ sung, `js/price-format.js` được nạp ở 4 trang có ô giá, chỉ định dạng dấu chấm phân cách hàng nghìn. Các handler inline chỉ gọi thông báo hoặc chặn submit để hiện thông báo.
- Không có JS tính tiền, đổi số lượng, tìm kiếm/lọc, tạo/xóa/sửa bản ghi, đọc ảnh, lưu trữ, gọi API hoặc truyền dữ liệu qua URL.
- Đã mở 23 trang trong lượt kiểm tra trước trên trình duyệt, kiểm tra các luồng đăng nhập/đăng ký, tìm kiếm/lọc, giỏ/hóa đơn, lịch sử và thao tác admin.
- Khi bấm thêm/sửa/xóa/khóa/cập nhật: thông báo xuất hiện, dữ liệu mẫu giữ nguyên.
- Đã kiểm tra thêm bố cục desktop và các trang chính ở chiều rộng 390px.

Đây là kết quả đối chiếu giao diện tĩnh. Các lựa chọn HTML, chuyển trang và tab CSS hoạt động để trình bày; không triển khai chức năng nghiệp vụ hoặc cơ sở dữ liệu.

Cập nhật bổ sung: nhập tiền tự thêm dấu chấm; người dùng admin mở một trang Chi tiết chỉ xem, không còn nút Sửa trong danh sách. Các trang đại diện và dữ liệu viết sẵn được giữ nguyên.
