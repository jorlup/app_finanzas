import React, {FC} from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { View } from "react-native";

interface IWavyHeaderProps {
  customStyles?: object;
};

export const WavyHeader: FC<IWavyHeaderProps> = ({ customStyles }) => {
  return (
    <View style={customStyles}>
      <View style={{ backgroundColor: "#3949ab", height: 160 }}>
        <Svg
          viewBox="0 0 1440 320"
          style={{ position: "absolute", top: 110 }}
        >
          <Path
            fill="#3949ab"
            d="M0,192L80,197.3C160,203,320,213,480,192C640,171,800,117,960,85.3C1120,53,1280,43,1360,37.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </Svg>
      </View>
    </View>
  );
}
