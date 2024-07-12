import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { FormInputProps } from "./form-input-props";

export const FormInputText = ({ name, control, label, sx }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={(renderProps) => (
        <TextField
          helperText={renderProps.fieldState.error?.message ?? null}
          size="small"
          error={!!renderProps.fieldState.error}
          onChange={renderProps.field.onChange}
          value={renderProps.field.value}
          fullWidth
          label={label}
          variant="outlined"
          sx={sx}
        />
      )}
    />
  );
};
