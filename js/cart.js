// Giỏ hàng và hóa đơn dùng chung số lượng qua URL; không lưu dữ liệu hay tạo đơn thật.
const cartRows = document.querySelectorAll('.cart-table tbody tr[data-unit-price], .invoice-table tbody tr[data-unit-price]');
const cartCurrency = new Intl.NumberFormat('vi-VN');
const orderQuantities = new URLSearchParams(window.location.search);

cartRows.forEach(function (row, index) {
    const value = orderQuantities.get('q' + (index + 1));
    if (value !== null && Number.isSafeInteger(Number(value))) {
        row.querySelector('.qty-val').textContent = Math.max(1, Number(value));
    }
});

function updateOrderTotals() {
    let total = 0;
    const quantities = new URLSearchParams();
    cartRows.forEach(function (row, index) {
        const quantity = Number(row.querySelector('.qty-val').textContent);
        const subtotal = quantity * Number(row.dataset.unitPrice);
        row.querySelector('.item-subtotal').textContent = cartCurrency.format(subtotal) + 'đ';
        const decreaseButton = row.querySelector('[data-quantity-change="-1"]');
        if (decreaseButton) decreaseButton.disabled = quantity <= 1;
        quantities.set('q' + (index + 1), quantity);
        total += subtotal;
    });
    document.querySelector('[data-order-subtotal]').textContent = cartCurrency.format(total) + 'đ';
    document.querySelector('[data-order-total]').textContent = cartCurrency.format(total) + 'đ';
    const checkoutLink = document.querySelector('.btn-checkout');
    if (checkoutLink) checkoutLink.href = 'invoice.html?' + quantities;
    document.querySelectorAll('.invoice-back, .navbar .icon-link[href^="cart.html"]').forEach(function (link) {
        link.href = 'cart.html?' + quantities;
    });
}

cartRows.forEach(function (row) {
    row.querySelectorAll('.qty-btn').forEach(function (button) {
        button.addEventListener('click', function () {
            const quantity = row.querySelector('.qty-val');
            quantity.textContent = Math.max(1, Number(quantity.textContent) + Number(button.dataset.quantityChange));
            updateOrderTotals();
        });
    });
});

updateOrderTotals();
