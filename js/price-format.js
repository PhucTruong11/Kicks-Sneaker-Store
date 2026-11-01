// Ngoại lệ trình bày: chỉ thêm dấu chấm trong ô tiền, không tính hoặc lưu dữ liệu.
document.querySelectorAll('[data-money-input]').forEach(function (input) {
    function formatMoneyInput() {
        const position = input.selectionStart;
        const digitsBeforeCaret = input.value.slice(0, position).replace(/\D/g, '').length;
        const digits = input.value.replace(/\D/g, '').replace(/^0+(?=\d)/, '');
        input.value = digits.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        if (document.activeElement === input) {
            let caret = 0;
            let seen = 0;
            while (caret < input.value.length && seen < digitsBeforeCaret) {
                if (/\d/.test(input.value[caret])) seen++;
                caret++;
            }
            input.setSelectionRange(caret, caret);
        }
    }
    input.addEventListener('input', formatMoneyInput);
    formatMoneyInput();
});
