import { useVirtualizer } from "@tanstack/react-virtual";
import { useEffect, useRef } from "react";
import { faker } from "@faker-js/faker";

import "./asyncList.css";
import { useInfiniteQuery } from "react-query";

async function fetchServerPage(
  limit: number,
  offset: number = 0
): Promise<{ rows: string[]; nextOffset: number }> {
  const rows = new Array(limit)
    .fill(0)
    .map(() => `${faker.person.fullName()} ${offset * limit}`);

  await new Promise((r) => setTimeout(r, 500));

  return { rows, nextOffset: offset + 1 };
}

const AsyncList = () => {
  const {
    status,
    data,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    "projects",
    (ctx) => fetchServerPage(10, ctx.pageParam),
    {
      getNextPageParam: (_lastGroup, groups) => groups.length,
    }
  );
  const allRows = data ? data.pages.flatMap((d) => d.rows) : [];
  const parentRef = useRef(null);
  const rowVirtualizer = useVirtualizer({
    count: hasNextPage ? allRows.length + 1 : allRows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
    overscan: 5,
  });

  useEffect(() => {
    const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse();

    if (!lastItem) {
      return;
    }

    if (
      lastItem.index >= allRows.length - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  });

  return (
    <>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : status === "error" ? (
        <span>Error: {(error as Error).message}</span>
      ) : (
        <div ref={parentRef} className="container">
          <div
            className="list"
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => (
              <div
                key={virtualRow.index}
                className={`row ${
                  virtualRow.index % 2 ? "list-item-odd" : "list-item-even"
                }`}
                style={{
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                {allRows[virtualRow.index]}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AsyncList;
