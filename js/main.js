// main.js - Chỉ xử lý Toast notification và chuyển trang, KHÔNG DOM MANIPULATION HTML DATA

function showToast(message) {
    var toast = document.getElementById("toast");
    if(!toast) return;
    
    // Gán nội dung
    toast.innerHTML = '<i class="fas fa-check-circle"></i> ' + message;
    
    // Thêm class 'show' để hiện
    toast.className = "show";
    
    // Tự động ẩn sau 3 giây (trùng với thời gian animation CSS)
    setTimeout(function(){ 
        toast.className = toast.className.replace("show", ""); 
    }, 3000);
}

function addToCart() {
    showToast("Đã thêm sản phẩm vào giỏ hàng thành công!");
}

function handleLogin(event) {
    event.preventDefault(); 
    showToast("Đăng nhập thành công! Đang chuyển hướng...");
    setTimeout(function() {
        window.location.href = "index.html"; 
    }, 1000);
    return false;
}
