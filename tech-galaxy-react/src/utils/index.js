
export function formatMoney(num) {
    return num.toLocaleString('vi', { style: 'currency', currency: 'VND' });
}