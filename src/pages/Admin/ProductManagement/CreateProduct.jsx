import { useFormik } from 'formik';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSubmitAction } from '../../../redux/reducers/modalReducer';

export default function CreateProduct() {
  const formik = useFormik({
    initialValues: {
      id: '',
      name: '',
      price: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const dispatch = useDispatch();
  useEffect(() => {
    const action = setSubmitAction(formik.handleSubmit);
    dispatch(action);
  }, []);

  return (
    <div>
      <div className="form-group" onClick={formik.handleSubmit}>
        <p>Id</p>
        <input className="form-control" name="id" id="id" onChange={formik.handleChange} />
      </div>

      <div className="form-group">
        <p>Name</p>
        <input className="form-control" name="name" id="name" onChange={formik.handleChange} />
      </div>

      <div className="form-group">
        <p>Price</p>
        <input className="form-control" name="price" id="price" onChange={formik.handleChange} />
      </div>
    </div>
  );
}
