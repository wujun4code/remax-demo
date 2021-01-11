import { AppConfig } from "remax/wechat";

const config: AppConfig = {
  pages: ["pages/about/index", "pages/index/index"],
  window: {
    navigationBarTitleText: "Remax Tab Demo",
  },
  usingComponents: {
    "mp-tabbar": "weui-miniprogram/tabbar/tabbar",
  },
  useExtendedLib: {
    weui: true,
  },
  tabBar: {
    custom: true,
    color: "#868686",
    selectedColor: "#FF2020",
    position: "bottom",
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
