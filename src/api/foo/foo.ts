import { hello } from "../bar";

const world = (): string => {
  return hello() + " world";
};

export { world };
