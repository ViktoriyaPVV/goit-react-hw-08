import { Field, Form, Formik } from "formik";
import s from "./LoginForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(login(values));
    options.resetForm();
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className={s.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
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
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
