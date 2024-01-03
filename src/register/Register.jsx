import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import "./register.css";
import z from "zod";
import axios from "axios";

const Register = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value, form.getFieldMeta("email"));
      // form.setFieldMeta("email", { touchedErrors: ["sss"] });
      // axios
      //   .post("https://api.realworld.io/api/users", { user: value })
      //   .then((response) => {
      //     console.log("succ", response);
      //   })
      //   .catch((err) => {
      //     console.log("err", err);
      //     if (err.response.data.errors.email) {
      //       form.setFieldMeta("email", { errors: "ss" });
      //       // setError("email", {
      //       //   type: "server",
      //       //   message: err.response.data.errors.email[0],
      //       // });
      //     }
      //     if (err.response.data.errors.username) {
      //       // setError("username", {
      //       //   type: "server",
      //       //   message: err.response.data.errors.username[0],
      //       // });
      //     }
      //     if (err.response.data.errors.password) {
      //       // setError("password", {
      //       //   type: "server",
      //       //   message: err.response.data.errors.password[0],
      //       // });
      //     }
      //   });
    },
    validatorAdapter: zodValidator,
  });
  return (
    <form.Provider>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("onSubmit", form.getFieldMeta("email"));
          form.handleSubmit();
        }}
      >
        <form.Field
          name="username"
          validators={{
            onChange: z.string().nonempty("Missing username"),
          }}
        >
          {(field) => (
            <div className="field">
              <label className="label">Username</label>
              <input
                className="input"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.touchedErrors && (
                <span className="error">{field.state.meta.touchedErrors}</span>
              )}
            </div>
          )}
        </form.Field>

        <form.Field
          name="email"
          validators={{
            onChange: z
              .string()
              .nonempty("Missing email")
              .email("Wrong format"),
          }}
        >
          {(field) => (
            <div className="field">
              <label className="label">Email</label>
              <input
                className="input"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.touchedErrors && (
                <span className="error">{field.state.meta.touchedErrors}</span>
              )}
            </div>
          )}
        </form.Field>

        <form.Field
          name="password"
          validators={{
            onChange: z.string().nonempty("Missing password"),
          }}
        >
          {(field) => (
            <div className="field">
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.touchedErrors && (
                <span className="error">{field.state.meta.touchedErrors}</span>
              )}
            </div>
          )}
        </form.Field>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => {
            return (
              <div>
                <button type="submit" className="button" disabled={!canSubmit}>
                  Register {!!isSubmitting && <span>Submitting</span>}
                </button>
              </div>
            );
          }}
        </form.Subscribe>
      </form>
    </form.Provider>
  );
};
export default Register;
