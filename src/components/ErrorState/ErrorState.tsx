import styled from "styled-components";

type Props = {
  content?: React.ReactNode;
};

const Container = styled.div.attrs({ role: "alert" })``;

export const ErrorState = ({ content }: Props) => {
  return <Container>{content || 'Something went wrong.'}</Container>;
};
