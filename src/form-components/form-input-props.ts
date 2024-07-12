import { SxProps, Theme } from "@mui/material";

export interface FormInputProps {
  name: string;
  control: any;
  label: string;
  setValue?: any;
  sx?: SxProps<Theme>;
}
