import * as stylex from "@stylexjs/stylex";

const fadeIn = stylex.keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const styles = stylex.create({
  base: {
    fontSize: 18,
    color: "white",
    backgroundColor: {
      default: "teal",
      ":hover": "blue",
    },
    width: {
      default: "100px",
      "@media (max-width: 800px)": "100%",
    },
    animationName: fadeIn,
    animationDuration: "1s",
  },
  highlighted: {
    color: "purple",
  },
});

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return <button {...stylex.props(styles.base)}>{text}</button>;
};

export default Button;
