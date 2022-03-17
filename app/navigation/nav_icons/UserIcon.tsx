import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const UserIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    xmlSpace="preserve"
    width={24}
    height={24}
    {...props}
  >
    <Path fill={props.color} d="M128.001 255.596a128 128 0 1 0-128-128A128.142 128.142 0 0 0 128 255.595l.001.001zm0-243.202A115.201 115.201 0 1 1 12.8 127.595 115.338 115.338 0 0 1 128.001 12.394z" />
    <Path fill={props.color} d="M172.804 69.995c0 24.742-20.059 44.801-44.801 44.801S83.201 94.737 83.201 69.995s20.059-44.801 44.801-44.801 44.802 20.059 44.802 44.801M128.001 223.597a95.624 95.624 0 0 0 78.677-40.922 25.696 25.696 0 0 0-8.193-37.164 144.104 144.104 0 0 0-70.481-17.914 144.1 144.1 0 0 0-70.481 17.921 25.692 25.692 0 0 0-12.319 16.77 25.704 25.704 0 0 0 4.127 20.394 95.602 95.602 0 0 0 34.308 30.129 95.598 95.598 0 0 0 44.369 10.787h-.007z" />
  </Svg>
)

export default UserIcon
