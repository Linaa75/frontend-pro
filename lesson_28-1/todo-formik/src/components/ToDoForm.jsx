import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const TodoForm = ({ addTodo }) => {
  const validationSchema = Yup.object({
    task: Yup.string()
      .min(5, 'Мінімальна довжина задачі - 5 символів')
      .required('Це поле є обов`язковим'),
  });

  return (
    <Formik
      initialValues={{ task: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        addTodo(values.task);
        resetForm();
      }}
    >
      <Form>
        <div>
          <Field type="text" name="task" placeholder="Введіть задачу..." />
          <ErrorMessage name="task" component="div" style={{ color: 'red' }} />
        </div>
        <div>
          <button type="submit">Додати задачу</button>
        </div>
      </Form>
    </Formik>
  );
};

export default TodoForm;
