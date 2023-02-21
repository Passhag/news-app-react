import styled from "styled-components";
import { Image } from "../../../../components/Image/Image";
import { Link } from "../../../../components/Link/Link";

const Figure = styled.figure`
  position: relative;
  margin: 0;
`;

const FigCaption = styled.figcaption`
  position: absolute;
  bottom: 10px;
`;

const Heading = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 1.4em;
  padding: 0.5em;
  margin: 0;
`;

const StyledImage = styled(Image)`
  border-radius: .5em;
`;

type Props = {
  caption: string;
  src: string;
};

export const Headline = ({ caption, src }: Props) => {
  return (
    <Link href="">
      <Figure>
        <StyledImage src={src} alt={caption} />
        <FigCaption>
          <Heading>{caption}</Heading>
        </FigCaption>
      </Figure>
    </Link>
  );
};
