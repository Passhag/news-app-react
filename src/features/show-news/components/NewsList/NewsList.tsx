import styled from "styled-components";
import { useConfig } from "../../../../providers/config";
import { useNewsData } from "../../providers/NewsDataProvider";
import { ErrorState } from "../../../../components/ErrorState/ErrorState";
import { LoadingState } from "../../../../components/LoadingState/LoadingState";
import { Link } from "../../../../components/Link/Link";
import { Headline } from "../Headline/Headline";
import { ItemsPerScreenSize } from "../../../../constants";

const List = styled.ul`
  font-size: 0.95em;
  list-style: inside;
  margin-top: 1.2em;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 0.5em;
  }
`;

const Text = styled.span`
  line-height: 1.4em;
`;

export const NewsList = () => {
  const { items, isLoading, isError } = useNewsData();
  const { isSmallScreen } = useConfig();

  if (isError) {
    return <ErrorState />;
  }

  if (isLoading) {
    return <LoadingState />;
  }

  const maxItems = isSmallScreen
    ? ItemsPerScreenSize.MAX_ITEMS_SMALL_SCREEN
    : ItemsPerScreenSize.MAX_ITEMS_LARGE_SCREEN;
  const news = items.sort((a, b) => b.popularity - a.popularity).slice(0, maxItems);
  const headline = news[0];

  return (
    <>
      <Headline
        src="http://localhost:3000/assets/img1.jpg"
        caption={headline.title}
      />
      <List>
        {news.slice(1).map(({ id, title }) => (
          <ListItem key={id}>
            <Link href="">
              <Text>{title}</Text>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};
