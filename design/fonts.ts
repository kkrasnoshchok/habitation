import {
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import { colors } from "../design/colors";

export enum Fonts {
  Quicksand_Light = "Quicksand_300Light",
  Quicksand_Regular = "Quicksand_400Regular",
  Quicksand_Medium = "Quicksand_500Medium",
  Quicksand_SemiBold = "Quicksand_600SemiBold",
  Quicksand_Bold = "Quicksand_700Bold",
}

export const QuicksandFonts = {
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
};

export enum FontSizes {
  title = 32,
  smallTitle = 24,
  text = 16,
  smallText = 12,
  tinyText = 8,
}

type GetFontStyleFunction = (
  fontFamily: Fonts,
  fontSize: FontSizes,
  color: colors
) => { fontFamily: Fonts; fontSize: FontSizes; color: colors };

export const getFontStyle: GetFontStyleFunction = (
  fontFamily,
  fontSize,
  color
) => ({ fontFamily, fontSize, color });
