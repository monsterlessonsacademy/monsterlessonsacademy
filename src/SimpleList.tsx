import { useRef } from "react";
import "./simpleList.css";
import { useVirtualizer } from "@tanstack/react-virtual";
import { faker } from "@faker-js/faker";

const SimpleList = () => {
  const parentRef = useRef(null);
  const rowVirtualizer = useVirtualizer({
    count: 10000,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
    overscan: 5,
  });
  const users = new Array(10000).fill(true).map(() => faker.person.fullName());
  console.log(users);
  return (
    <div className="container" ref={parentRef}>
      <div
        className="list"
        style={{ height: `${rowVirtualizer.getTotalSize()}px` }}
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
            {users[virtualRow.index]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleList;
