import {Styles, SvgProps, SvgXml} from 'react-native-svg';
import {svgmap} from './svgs';
import { ViewStyle } from 'react-native';

export type TName = keyof typeof svgmap;
export const RenderSvgIcon = ({
  icon,
  width = 24,
  height = 24,
  color,
  style,

}: {
  icon: TName;
  width?: number;
  height?: number;
  color?: string | undefined;
  style?: ViewStyle;
 
}) => {
  return (
    <SvgXml
      width={width}
      height={height}
      xml={svgmap[`${icon}`]({color: color})}
      fill={color}
      style={{
        ...style,
      }}
    />
  );
};
