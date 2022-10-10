import styled from "styled-components";

const Form = styled.div`
  width: 100%;
  background: #fff;
  padding: 30px;
  max-width: 450px;
  border-radius: 10px;
  box-shadow: rgba(3, 3, 3, 0.1) 10px 0px 50px;
`;

const Field = styled.div`
  margin-bottom: 30px;
`;

const Label = styled.div`
  margin-bottom: 10px;
  font-size: 15px;
  fort-weight: 600;
  color: #777;
`;

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

const Button = styled.button`
  background: #037ef3;
  color: #fff;
  font-weight: 600;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  padding: 25px 15px;
  border: 0;
  font-size: 18px;

  &:hover {
    background: #0271da;
  }
`;

const Register = () => {
  return (
    <Form>
      <Field>
        <Label>Name</Label>
        <Input type="text" name="name" />
      </Field>
      <Field>
        <Label>Email</Label>
        <Input type="text" name="email" />
      </Field>
      <Field>
        <Label>Password</Label>
        <Input type="password" name="password" />
      </Field>
      <Button>Register</Button>
    </Form>
  );
};
export default Register;
