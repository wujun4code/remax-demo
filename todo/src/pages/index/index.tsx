import * as React from "react";
import { View, Text, Image } from "remax/wechat";
import styles from "./index.css";
import { Selector, Filter } from "annar";
export const options1 = [
  {
    value: "0",
    text: "1000",
  },
  {
    value: "1",
    text: "2000",
  },
  {
    value: "2",
    text: "3000",
  },
];
export const ReturnDeliveryWay = [
  {
    children: [
      {
        text: "公司自取",
        value: "companySelfFetch",
      },
      {
        text: "货拉拉",
        value: "companyHuoLaLa",
      },
      {
        text: "其他第三方物流",
        value: "companyOtherLogistics",
      },
    ],
    text: "公司配送",
    value: "company",
  },
  {
    children: [
      {
        text: "客户自送",
        value: "customerSelfSend",
      },
      {
        text: "货拉拉",
        value: "customerHuoLaLa",
      },
      {
        text: "其他第三方物流",
        value: "customerOtherLogistics",
      },
    ],
    text: "客户配送",
    value: "customer",
  },
];

export default () => {
  const [selector, setSelector] = React.useState({
    value: [],
    valueStr: null,
  });
  const [selector1, setSelector1] = React.useState({
    value: [],
    valueStr: null,
  });
  const [selector2, setSelector2] = React.useState({
    value: [],
    valueStr: null,
  });
  const [value3, setValue3] = React.useState<any>("0");
  // Filter
  const seletorRef = React.useRef<any>();
  const handleChange2 = (value: any, valueStr: any) => {
    setSelector2({
      value,
      valueStr,
    });
    seletorRef.current.toggle();
  };
  return (
    <View className={styles.app}>
      <View style={{ backgroundColor: "#FDFFFD" }}>
        <Filter zIndex={998}>
          <Filter.Item title="配送方式" ref={seletorRef}>
            <Selector
              options={ReturnDeliveryWay}
              onChange={handleChange2}
              value={selector2.value}
            />
          </Filter.Item>
          <Filter.Item
            title="价格"
            value={value3}
            options={options1}
            onChange={(e) => setValue3(e.value)}
          />
        </Filter>
      </View>
    </View>
  );
};
