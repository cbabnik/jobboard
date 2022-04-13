/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Sidebar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="386px"
      height="959px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Sidebar")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="4.15%"
        right="0%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(185,217,248,0.75)"
        {...getOverrideProps(overrides, "Rectangle 26")}
      ></View>
      <Icon
        width="385px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 385, height: 0 }}
        paths={[
          {
            d: "M0 0L385 0L385 -3L0 -3L0 0Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 3,
          },
        ]}
        position="absolute"
        top="7.92%"
        bottom="92.08%"
        left="0%"
        right="0.26%"
        {...getOverrideProps(overrides, "Line 3")}
      ></Icon>
      <Icon
        width="0px"
        height="956px"
        viewBox={{ minX: 0, minY: 0, width: 0, height: 956 }}
        paths={[
          {
            d: "M0 0L956 0L956 -3L0 -3L0 0Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 3,
          },
        ]}
        position="absolute"
        top="0.31%"
        bottom="99.69%"
        left="99.74%"
        right="-247.41%"
        transformOrigin="top left"
        transform="rotate(90deg)"
        {...getOverrideProps(overrides, "Line 1")}
      ></Icon>
    </View>
  );
}
