/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function TickBox(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="30px"
      height="30px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "TickBox")}
    >
      <View
        position="absolute"
        top="-3.33%"
        bottom="-3.33%"
        left="-3.33%"
        right="-3.33%"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(253,253,253,1)"
        {...getOverrideProps(overrides, "TickBoxufx")}
      ></View>
    </View>
  );
}
