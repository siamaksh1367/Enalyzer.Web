import DivStyled from "./styledElements/DivStyled";
import SpanStyled from "./styledElements/SpanStyled";
import ImageThemeStyled from "./styledElements/ImageThemeStyled";

export interface CategoryProps {
  quantity: number;
  value: number;
  imageSource: string;
  contrast: boolean;
}
function Category({ value, quantity, imageSource, contrast }: CategoryProps) {
  return (
    <DivStyled className="d-flex flex-row justify-content-around align-items-center">
      <ImageThemeStyled
        src={imageSource}
        $contrast={contrast}
      ></ImageThemeStyled>
      <SpanStyled>
        {quantity} x {value}
      </SpanStyled>
    </DivStyled>
  );
}

export default Category;
