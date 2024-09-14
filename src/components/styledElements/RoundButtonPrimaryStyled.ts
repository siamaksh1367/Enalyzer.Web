import { styled } from "styled-components";
import {
  BackgroundPrimary,
  BorderSecondary,
  ColorPrimary,
  HoverEffect,
  Large,
} from "../../styles/ThemeMixin";
import { SmallFont } from "../../styles/ThemeMixin";

const RoundButtonPrimaryStyled = styled.button`
  ${BackgroundPrimary}
  ${ColorPrimary}
  ${SmallFont}
  ${Large}
  ${BorderSecondary}
  ${HoverEffect}
`;

export default RoundButtonPrimaryStyled;
