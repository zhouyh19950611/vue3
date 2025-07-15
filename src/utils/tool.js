// 格式化时间 默认格式 yyyy.MM.dd hh:mm:ss
function FormatDateTime(timeStamp, format = "yyyy.MM.dd hh:mm:ss") {
    const date = new Date()
    timeStamp = new Date(timeStamp).getTime()
    date.setTime(timeStamp)
    const z = {
        y: date.getFullYear(),
        M: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds()
    };
    return format.replace(/(y+|M+|d+|h+|m+|s+)/g, function (v) {
        return ("0" + eval('z.' + v.slice(-1))).slice(-(v.length > 2 ? v.length : 2))
    });
}
// 保留fix位小数
function KeepDecimals(num, fix) {
    return Number.isFinite(num) ? num : Number(num.toFixed(fix))
}
export {
    FormatDateTime,
    KeepDecimals,
}