import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addBookAction } from "../flux/actions";

const AddBookForm = () => {
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    price: Yup.number()
      .typeError("Price must be a number")
      .required("Price is required"),
  });

  return (
    <div style={{ padding: 20 }}>
      <h2>Add New Book</h2>
      <Formik
        initialValues={{ title: "", author: "", price: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          await addBookAction(values);
          alert("Book added successfully!");
          resetForm();
        }}
      >
        {() => (
          <Form>
            <div>
              <label>Title:</label>
              <Field name="title" />
              <ErrorMessage name="title" component="div" style={{ color: "red" }} />
            </div>

            <div>
              <label>Author:</label>
              <Field name="author" />
              <ErrorMessage name="author" component="div" style={{ color: "red" }} />
            </div>

            <div>
              <label>Price:</label>
              <Field name="price" />
              <ErrorMessage name="price" component="div" style={{ color: "red" }} />
            </div>

            <button type="submit" style={{ marginTop: 10 }}>
              Add Book
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddBookForm;
