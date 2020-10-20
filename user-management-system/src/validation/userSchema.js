import * as yup from "yup";

export const UserValidationSchema = yup.object({
  firstName: yup
    .string()
    .min(2, "First name should be at least 2 characters!")
    .matches(/^[A-Za-zа-яА-Я]+$/, "First name should contain only letters.")
    .required("First name is required!"),
  lastName: yup
    .string()
    .min(4, "Last name should be at least 4 characters!")
    .matches(/^[A-Za-zа-яА-Я]+$/, "Last name should contain only letters.")
    .required("Last name is required!"),
  email: yup
    .string()
    .email("Email should be valid email address!")
    .required("Email is required!"),
});
