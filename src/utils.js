export const range = (start, end) => {
  return [...Array(end - start).keys()].map((el) => el + start);
};
