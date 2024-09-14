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
  display: inline-block;
  @media (max-width: 576px) {
    display: block;
    width: 100%;
    word-break: break-word;
    overflow-wrap: break-word;
  }
`;

export default SpanStyled;
