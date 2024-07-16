import { Controller } from "react-hook-form";
import { FormInputProps } from "./form-input-props";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

interface FormInputDropdownProps extends FormInputProps {
  options: { label: string; value: string }[];
}

export const FormInputDropdown = ({
  name,
  control,
  label,
  sx,
  options,
}: FormInputDropdownProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={(renderProps) => (
        <FormControl
          error={!!renderProps.fieldState.error}
          sx={{ minWidth: 200 }}
        >
          <InputLabel id={name}>{label}</InputLabel>
          <Select
            onChange={renderProps.field.onChange}
            value={renderProps.field.value}
            sx={sx}
            label={name}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {renderProps.fieldState.error && (
            <FormHelperText>
              {renderProps.fieldState.error.message}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};
