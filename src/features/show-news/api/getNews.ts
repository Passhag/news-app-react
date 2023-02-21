import axios from "axios";
import { useQuery, QueryClientConfig } from "react-query";
import Papa from "papaparse";
import { NewsItem, NewsItemDto } from "../types/index";
import { formatNewsItem } from "../utils";

const BASE_URL = "http://localhost:3000/";
const api = axios.create({
  baseURL: BASE_URL,
});

export const getNews = async (): Promise<NewsItem[]> => {
  const { data } = await api.get("/data/newsSource.csv");

  return new Promise((resolve, reject) => {
    Papa.parse(data, {
      header: true,
      complete(results) {
        const newsItems = (results.data as NewsItemDto[])
          .slice(0, results.data.length - 1)
          .map(formatNewsItem);
        resolve(newsItems);
      },
      error(error) {
        reject(error);
      },
    });
  });
};

type QueryFnOptions = {
  config?: QueryClientConfig;
};

export const useNewsQuery = ({ config }: QueryFnOptions) => {
  return useQuery({
    queryKey: ["news"],
    queryFn: () => getNews(),
    ...config,
  });
};
