import styled from "styled-components";
import Register from "./Register";

const Title = styled.h1`
  font-size: "16px";
  text-align: center;
  color: green;
`;

const Wrapper = styled.div`
  padding: 10px;
`;

const Button = styled.button`
  color: ${(props) => (props.danger ? "white" : "#CA0B00")};
  background: ${(props) => (props.danger ? "#CA0B00" : "white")};
  font-size: 14px;
  padding: 4px;
  border: 2px solid #ca0b00;
  border-radius: 3px;
`;

const CommentButton = styled(Button)`
  color: white;
  background: blue;
  border: 2px solid transparent;
`;

const Link = ({ route, name, className }) => (
  <a href={route} className={className}>
    {name}
  </a>
);

const StyledLink = styled(Link)`
  color: white;
  background: purple;
  &:hover {
    color: red;
  }
`;

const App = () => {
  return (
    <Wrapper>
      <Title>Hello monsterlessons</Title>
      <Button>Normal</Button>
      <Button danger>Normal</Button>
      <CommentButton>Add comment</CommentButton>
      <Button as="a" href="#">
        Link
      </Button>
      <Link route="/" name="Some link" />
      <StyledLink route="/" name="Styled link" />
      <br />
      <Register />
    </Wrapper>
  );
};

export default App;
