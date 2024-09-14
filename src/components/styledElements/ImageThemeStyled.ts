import { styled } from "styled-components";
import {
  BackgroundPrimary,
  BackgroundSecondary,
  ColorPrimary,
  ColorSecondary,
} from "../../styles/ThemeMixin";

const ImageThemeStyled = styled.img<{ $contrast?: boolean }>`
  background-color: ${({ $contrast }) =>
    $contrast ? BackgroundPrimary : BackgroundSecondary};
  color: ${({ $contrast }) => ($contrast ? ColorPrimary : ColorSecondary)};
`;

export default ImageThemeStyled;
