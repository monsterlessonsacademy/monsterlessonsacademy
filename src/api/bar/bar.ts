import { world } from "../foo";

const hello = (): string => {
  return "hello " + world();
};

export { hello };
