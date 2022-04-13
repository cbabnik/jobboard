/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Label(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="355px"
      height="40px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Label")}
    >
      <Text
        fontFamily="Work Sans"
        fontSize="30px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="35.15625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="-0.45px"
        position="absolute"
        top="5%"
        bottom="7.5%"
        left="12.68%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Curtis House"
        {...getOverrideProps(overrides, "Curtis House")}
      ></Text>
    </View>
  );
}
