import { NewsItem, NewsItemDto } from "../types";

export const formatNewsItem = ({
  id,
  title,
  popularity,
  timestamp,
}: NewsItemDto): NewsItem => ({
  id,
  title,
  popularity: Number(popularity),
  timestamp: new Date(timestamp).getTime(),
});
