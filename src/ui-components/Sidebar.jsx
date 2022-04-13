/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Sidebar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="370px"
      height="960px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Sidebar")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(185,217,248,0.75)"
        {...getOverrideProps(overrides, "Rectangle 26")}
      ></View>
      <Icon
        width="370px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 370, height: 0 }}
        paths={[
          {
            d: "M0 0L370 0L370 -3L0 -3L0 0Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 3,
          },
        ]}
        position="absolute"
        top="7.29%"
        bottom="92.71%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Line 3")}
      ></Icon>
      <Icon
        width="0px"
        height="960px"
        viewBox={{ minX: 0, minY: 0, width: 0, height: 960 }}
        paths={[
          {
            d: "M0 0L960 0L960 -3L0 -3L0 0Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 3,
          },
        ]}
        position="absolute"
        top="0%"
        bottom="100%"
        left="100%"
        right="-259.46%"
        transformOrigin="top left"
        transform="rotate(90deg)"
        {...getOverrideProps(overrides, "Line 1")}
      ></Icon>
      <Text
        fontFamily="Work Sans"
        fontSize="34px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="39.84375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="-0.53px"
        position="absolute"
        top="1.77%"
        bottom="89.9%"
        left="3.78%"
        right="63.78%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Filters"
        {...getOverrideProps(overrides, "Filters")}
      ></Text>
    </View>
  );
}
