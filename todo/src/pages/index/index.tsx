import * as React from "react";
import { View as view, Text, Image, Switch } from "remax/wechat";
import styles from "./index.css";

export default () => {
  return (
    <view>
      <view className="cu-bar bg-white solid-bottom">
        <view className="action">
          <text className="cuIcon-titles text-orange "></text> 案例类卡片
        </view>
        <view className="action">
          <Switch className="sm"></Switch>
        </view>
      </view>

      <view className="cu-card case">
        <view className="cu-item shadow">
          <view className="image">
            <image
              src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
              mode="widthFix"
            ></image>
            <view className="cu-tag bg-blue">史诗</view>
            <view className="cu-bar bg-shadeBottom">
              <text className="text-cut">
                我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。
              </text>
            </view>
          </view>
          <view className="cu-list menu-avatar">
            <view className="cu-item">
              <view
                className="cu-avatar round lg"
                style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
              ></view>
              <view className="content flex-sub">
                <view className="text-grey">正义天使 凯尔</view>
                <view className="text-gray text-sm flex justify-between">
                  十天前
                  <view className="text-gray text-sm">
                    <text className="cuIcon-attentionfill margin-lr-xs"></text>{" "}
                    10
                    <text className="cuIcon-appreciatefill margin-lr-xs"></text>{" "}
                    20
                    <text className="cuIcon-messagefill margin-lr-xs"></text> 30
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  );
};
