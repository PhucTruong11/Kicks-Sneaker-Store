// JavaScript chỉ hiển thị thông báo. Dữ liệu của mọi trang được viết sẵn trong HTML.
let toastTimer;
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('show');
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 3000);
}
function addToCart() {
    showToast('Đã thêm sản phẩm vào giỏ hàng thành công!');
}
