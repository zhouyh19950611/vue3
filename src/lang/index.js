import { createI18n } from "vue-i18n";
import en from "./en.json";
import zh from "./zh.json";
// 创建 i18n 实例
const i18n = createI18n({
    globalInjection: true,
    locale: localStorage.getItem("LANGUAGE") || "zh", // 设置默认语言
    messages: {
      en,
      zh
    }
  });
export { i18n }
