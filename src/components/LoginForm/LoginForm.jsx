import { Formik, Form, Field } from "formik";
import css from "./LoginForm.module.css";

export default function LoginForm() {
    const handleSubmit = (values, actions) => {
        actions.resetForm();
    }

    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            onSubmit={handleSubmit}>
            <Form className={css.form}>
                <label className={css.label}>
                    Email
                    <Field type="email" name="email"/>
                </label>
                <label className={css.label}>
                    Password
                    <Field type="password" name="password"/>
                </label>
                <button type="submit">Log In</button>
            </Form>
        </Formik>
    )
}