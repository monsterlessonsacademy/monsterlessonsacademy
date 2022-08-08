import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

const App2 = () => {
  const initialValues = {
    email: "",
    password: "",
    username: "",
  };
  const registerUser = (values, { setSubmitting }) => {
    console.log("registerUser", values);
    setSubmitting(false);
  };
  // const validate = (values) => {
  //   const errors = {};
  //   if (!values.email) {
  //     errors.email = "Email is required";
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //     errors.email = "Invalid email address";
  //   }
  //   if (!values.password) {
  //     errors.password = "Password is required";
  //   }
  //   if (!values.username) {
  //     errors.username = "Username is required";
  //   }
  //   return errors;
  // };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    username: Yup.string().required("Username is required"),
  });

  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={registerUser}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="field">
              <Field name="email" placeholder="Email" />

              <div className="error">
                <ErrorMessage name="email" component="span" />
              </div>
            </div>
            <div className="field">
              <Field name="username" placeholder="Username" />
              <div className="error">
                <ErrorMessage name="username" component="span" />
              </div>
            </div>
            <div className="field">
              <Field name="password" type="password" placeholder="Password" />
              <div className="error">
                <ErrorMessage name="password" component="span" />
              </div>
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App2;
