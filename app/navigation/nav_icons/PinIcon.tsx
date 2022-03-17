import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const PinIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    xmlSpace="preserve"
    width={24}
    height={24}
    {...props}
  >
    <Path fill={props.color} d="M128.83 0c50.536 0 91.13 41.425 91.13 91.963 0 50.536-87.82 164.037-91.13 164.037-3.314 0-91.963-113.501-91.963-164.037S77.462 0 128.83 0zm0 57.995c17.398 0 31.481 14.085 31.481 31.481 0 17.398-14.085 31.481-31.481 31.481-17.398 0-31.481-14.085-31.481-31.481-.001-17.399 14.084-31.481 31.481-31.481z" />
  </Svg>
)

export default PinIcon
