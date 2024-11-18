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
// 把HEX转化为RGB
function HexToRgb (str) {
    str = str.replace("#", ""); // 去掉#
    let hexs = null;
    let reg = /^\#?[0-9A-Fa-f]{6}$/;
    if (!reg.test(str)) 
        return alert("色值不正确");
    hexs = str.match(/../g); // 切割成数组
    // 将切割的色值转换为16进制
    for (let i = 0; i < hexs.length; i++) hexs[i] = parseInt(hexs[i], 16);
    return hexs.toString(); // 返回rgb色值
  };
export {
    FormatDateTime,
    KeepDecimals,
    HexToRgb
}