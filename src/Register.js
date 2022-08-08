import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 25px 15px;
  border: 0;
  background: #f0f0f0;
  border-radius: 5px;
  font-size: 18px;
  color: #555;
  font-weight: 600;
`;
const Field = styled.div`
  margin-bottom: 30px;
`;
const Label = styled.div`
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 600;
  color: #777;
`;
const SubmitButton = styled.button`
  background: #037ef3;
  color: #fff;
  font-weight: 600;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  padding: 25px 15px;
  border: 0;
  transition: all 0.8s;
  font-size: 18px;

  &:hover {
    background: #0271da;
  }
`;
const Form = styled.div`
  width: 100%;
  background: #fff;
  padding: 30px;
  max-width: 450px;
  border-radius: 10px;
  box-shadow: rgba(3, 3, 3, 0.1) 10px 0px 50px;
`;

const Register = () => {
  return (
    <Form>
      <Field>
        <Label>Name</Label>
        <Input type="text" name="name"></Input>
      </Field>
      <Field>
        <Label>Email</Label>
        <Input type="text" name="email"></Input>
      </Field>
      <Field>
        <Label>Password</Label>
        <Input type="password" name="password"></Input>
      </Field>
      <SubmitButton>Register</SubmitButton>
    </Form>
  );
};
export default Register;
