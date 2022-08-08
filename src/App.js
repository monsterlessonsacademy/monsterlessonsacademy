import { Formik } from "formik";

const App = () => {
  const initialValues = {
    email: "",
    password: "",
    username: "",
  };
  const registerUser = (values, { setSubmitting }) => {
    console.log("registerUser", values);
    setSubmitting(false);
  };
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.username) {
      errors.username = "Username is required";
    }
    return errors;
  };
  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={registerUser}
        validate={validate}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          touched,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="field">
              <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />

              <div className="error">
                {errors.email && touched.email && errors.email}
              </div>
            </div>
            <div className="field">
              <input
                name="username"
                placeholder="Username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              <div className="error">
                {errors.username && touched.username && errors.username}
              </div>
            </div>
            <div className="field">
              <input
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <div className="error">
                {errors.password && touched.password && errors.password}
              </div>
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default App;
