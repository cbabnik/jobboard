/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Header(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="70px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Header")}
    >
      <Icon
        width="1440px"
        height="70px"
        viewBox={{ minX: 0, minY: 0, width: 1440, height: 70 }}
        paths={[
          {
            d: "M0 0L0 -1L-1 -1L-1 0L0 0ZM1440 0L1441 0L1441 -1L1440 -1L1440 0ZM1440 70L1440 71L1441 71L1441 70L1440 70ZM0 70L-1 70L-1 71L0 71L0 70ZM0 1L1440 1L1440 -1L0 -1L0 1ZM1439 0L1439 70L1441 70L1441 0L1439 0ZM1440 69L0 69L0 71L1440 71L1440 69ZM1 70L1 0L-1 0L-1 70L1 70Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M0 0L1440 0L1440 70L0 70L0 0Z",
            fill: "rgba(170,146,129,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="0px"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Rectangle 4")}
      ></Icon>
      <Text
        fontFamily="Work Sans"
        fontSize="34px"
        fontWeight="700"
        color="rgba(98,54,22,1)"
        lineHeight="39.84375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="-0.53px"
        position="absolute"
        top="19.68%"
        bottom="5%"
        left="1.04%"
        right="75.49%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="IndiasJobBoard"
        {...getOverrideProps(overrides, "IndiasJobBoard")}
      ></Text>
    </View>
  );
}
