import styled from "styled-components";

type Props = {
  content?: React.ReactNode;
};

const Container = styled.div.attrs({ role: "status" })``;

export const LoadingState = ({ content }: Props) => {
  return <Container>{content || 'Loading...'}</Container>;
};
