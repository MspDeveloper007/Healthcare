import { useFormik } from 'formik';
import React from 'react'

function Account() {

  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          id="oldPassword"
          name="oldPassword"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.oldPassword}
        />
      </div>
      <div>
        <input
          id="newPassword"
          name="newPassword"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.newPassword}
        />
      </div>
      <div>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Account