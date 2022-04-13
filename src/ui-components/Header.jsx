/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
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
      <View
        height="70px"
        position="absolute"
        top="0px"
        left="0px"
        right="0px"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(98,54,22,0.54)"
        {...getOverrideProps(overrides, "Rectangle 4")}
      ></View>
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
