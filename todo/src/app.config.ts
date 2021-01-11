import { AppConfig } from "remax/wechat";

const config: AppConfig = {
  pages: ["pages/index/index", "pages/about/index"],
  window: {
    navigationBarTitleText: "Remax Tab Demo",
  },
  tabBar: {
    custom: true,
    color: "#FFFFFF",
    selectedColor: "#000000",
    backgroundColor: "#FFFFFF",
    list: [
      {
        pagePath: "pages/index/index",
        //iconPath: '/icon.png',
        text: "首页",
      },
      {
        pagePath: "pages/about/index",
        text: "关于",
      },
    ],
  },
};

export default config;
