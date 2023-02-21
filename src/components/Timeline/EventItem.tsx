import styled from "styled-components";
import { Event } from "./Timeline";
import { Link } from "../Link/Link";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1em;

  &:focus,
  &:hover {
    text-decoration: none;
  }
`;

const ItemDateTime = styled.time`
  color: #878787;
  flex: 0 0 3rem;
  font-size: 1em;
  border: 0;
`;

const Content = styled.div`
  flex: 1 1 auto;
  align-self: center;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const ContentText = styled.span`
  display: -webkit-box;
  overflow: hidden;
  line-height: 1.4em;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const toTime = (timestamp: number) =>
  new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(new Date(timestamp));

type Props = {
  event: Event;
};

export const EventItem = ({ event }: Props) => {
  const { timestamp, content } = event;

  return (
    <StyledLink href="">
      <ItemDateTime>{toTime(timestamp)}</ItemDateTime>
      <Content>
        <ContentText>{content}</ContentText>
      </Content>
    </StyledLink>
  );
};
