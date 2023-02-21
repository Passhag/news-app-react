import styled from "styled-components";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

const ImageElement = styled.img.attrs(() => {})`
  object-fit: contain;
  width: 100%;
`;

export const Image = ({ src, alt, className }: Props) => {
  return <ImageElement className={className} src={src} alt={alt} />;
};
