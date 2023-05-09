import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import "./app.css";

const getUsers = async ({ pageParam = 0 }) => {
  console.log("getUsers", pageParam);
  const res = await fetch(
    `https://api.realworld.io/api/articles?limit=10&offset=${pageParam}`
  );
  const data = await res.json();
  return { ...data, prevOffset: pageParam };
};

const App = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    getNextPageParam: (lastPage) => {
      console.log(
        "getNextPageParam",
        lastPage.prevOffset + 10 > lastPage.articlesCount / 10,
        lastPage.prevOffset,
        lastPage.articlesCount / 10
      );
      if (lastPage.prevOffset + 10 > lastPage.articlesCount) {
        return false;
      }
      return lastPage.prevOffset + 10;
    },
  });
  const articles = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.articles];
  }, []);

  return (
    <div>
      <h1>Hello monsterlessons</h1>

      <InfiniteScroll
        dataLength={articles ? articles.length : 0}
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={<div>Loading...</div>}
      >
        <div>
          {articles &&
            articles.map((article, index) => (
              <div key={index} className="element">
                {article.title}
              </div>
            ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default App;
