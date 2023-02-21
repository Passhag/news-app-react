import {
  NewsList,
  TopNews,
  NewsDataProvider,
} from "../features/show-news/index";
import styled from "styled-components";
import { useConfig } from "../providers/config";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 2em;
  padding-left: 1em;
  padding-right: 1em;

  @media (min-width: 769px) {
    align-items: start;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3em;
  }
`;

const Main = styled.main``;

const Aside = styled.aside`
  width: 45%;
`;

const HomePage = () => {
  const { isSmallScreen } = useConfig();

  return (
    <NewsDataProvider>
      <Container>
        <Main>
          <NewsList />
        </Main>
        {!isSmallScreen && (
          <Aside>
            <TopNews title="Net binnen" />
          </Aside>
        )}
      </Container>
    </NewsDataProvider>
  );
};

export default HomePage;
