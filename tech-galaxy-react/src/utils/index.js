import { type } from "../../node_modules/@testing-library/user-event/dist/type/index";

export function formatMoney(num) {
    if (typeof (num) == 'number') {
        return num.toLocaleString('vi', { style: 'currency', currency: 'VND' });
    }
    return num
}