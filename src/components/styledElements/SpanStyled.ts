import { styled } from "styled-components";
import {
  Bold,
  ColorPrimary,
  LargeFont,
  SmallFont,
} from "../../styles/ThemeMixin";

const SpanStyled = styled.span<{ $isLarge?: boolean }>`
  ${ColorPrimary}
  ${Bold}
  ${({ $isLarge }) => ($isLarge ? LargeFont : SmallFont)};
  dis
`;

export default SpanStyled;
