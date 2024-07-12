import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInputText } from "./form-components/form-input-text";
import { FormInputDropdown } from "./form-components/form-input-dropdown";

const validationSchema = yup
  .object({
    textValue: yup.string().required("Missing text value"),
    dropdownValue: yup.string().required("Missing dropdown value"),
  })
  .required();

interface FormValues {
  textValue: string;
  dropdownValue: string;
}

const SomeForm = () => {
  const { handleSubmit, control } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      textValue: "",
      dropdownValue: "",
    },
  });
  const onSubmit = (data: FormValues) => {
    console.log("onSubmit", data);
  };
  return (
    <Paper
      style={{
        display: "grid",
        gridRowGap: "20px",
        padding: "20px",
        margin: "10px 300px",
      }}
    >
      <Typography variant="h4"> Some Form</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInputText
          name="textValue"
          control={control}
          label="Text Input"
          sx={{ mb: 2 }}
        />
        <FormInputDropdown
          name="dropdownValue"
          control={control}
          label="Dropdown Input"
          options={[
            {
              label: "Dropdown Option 1",
              value: "1",
            },
            {
              label: "Dropdown Option 2",
              value: "2",
            },
          ]}
        />
        <Button
          type="submit"
          variant={"contained"}
          sx={{ mt: 2, display: "block" }}
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default SomeForm;
