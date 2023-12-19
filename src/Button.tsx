import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  base: {
    fontSize: 18,
    backgroundColor: {
      default: "teal",
      ":hover": "blue",
    },
    color: "white",
    width: {
      default: "100px",
      "@media (max-width: 800px)": "100%",
    },
  },
  highlighted: {
    backgroundColor: "orange",
  },
  danger: {
    backgroundColor: "red",
  },
  primary: {
    backgroundColor: "green",
  },
});

interface ButtonProps {
  text: string;
  isHighlighted: boolean;
  variant: "danger" | "primary";
  style: stylex.StyleXStyles;
}

const Button = ({ text, isHighlighted, variant, style }: ButtonProps) => {
  return (
    <button
      {...stylex.props(
        styles.base,
        isHighlighted && styles.highlighted,
        styles[variant],
        style
      )}
    >
      {text}
    </button>
  );
};

export default Button;
