import { Field, Form, Formik } from "formik";
import s from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(register(values));
    options.resetForm();
  };
  return (
    <div className={s.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.lable}>
            <span>Name</span>
            <Field type="text" name="name" className={s.input}></Field>
            {/* <ErrorMessage name="name" component="span" /> */}
          </label>
          <label className={s.lable}>
            <span>Email</span>
            <Field type="email" name="email" className={s.input}></Field>
            {/* <ErrorMessage name="name" component="span" /> */}
          </label>
          <label className={s.lable}>
            <span>Password</span>
            <Field name="password" className={s.input}></Field>
            {/* <ErrorMessage name="number" component="span" /> */}
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
