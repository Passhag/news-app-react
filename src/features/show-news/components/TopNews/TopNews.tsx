import styled from "styled-components";
import { useNewsData } from "../../providers/NewsDataProvider";
import { Timeline, Event } from "../../../../components/Timeline/Timeline";
import { ErrorState } from "../../../../components/ErrorState/ErrorState";
import { LoadingState } from "../../../../components/LoadingState/LoadingState";
import { NewsItem } from "../../types";

type Props = {
  title?: string;
  size?: number;
};

const Heading = styled.h2`
  margin-top: 0;
  line-height: 0.8;
`;
const Container = styled.div``;

const toEvents = (items: NewsItem[]): Event[] =>
  items.map(({ id, timestamp, title }) => ({
    id,
    timestamp,
    content: title,
  }));

export const TopNews = ({ title, size = 10 }: Props) => {
  const { items, isLoading, isError } = useNewsData();

  if (isError) {
    return <ErrorState />;
  }

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <Container>
      <Heading>{title || "Top News"}</Heading>
      <Timeline events={toEvents(items).slice(0, size)} />
    </Container>
  );
};
