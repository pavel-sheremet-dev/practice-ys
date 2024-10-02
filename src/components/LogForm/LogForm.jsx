import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const schema = Yup.object({
  date: Yup.date().required("Required"),
  user: Yup.string()
    .min(2, "Must be longer")
    .max(30, "Must be 20 characters or less")
    .required("Required"),
  start: Yup.string().required("Required"),
  end: Yup.string().required("Required"),
});

export default function LogForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ date: "", user: "", start: "", end: "" }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        const newLogItem = { ...values, id: nanoid() };
        console.log(values);
        console.log(actions);
        onSubmit(newLogItem);
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          <span>Date</span>
          <Field type="date" name="date" />
          <ErrorMessage name="date" />
        </label>
        <label>
          <span>Name</span>
          <Field type="text" name="user" />
          <ErrorMessage name="user" />
        </label>
        <label>
          <span>Start</span>
          <Field type="datetime-local" name="start" />
          <ErrorMessage name="start" />
        </label>
        <label>
          <span>End</span>
          <Field type="datetime-local" name="end" />
          <ErrorMessage name="end" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
