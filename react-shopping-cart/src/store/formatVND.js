export default function formatVND(money) {
    return money.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}