import React, {useState} from 'react'
import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
    const [form, setForm] = useState({username:"", password:"", email:""});
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Please input username.").min(1), 
        phone: Yup.string().required("Please input your password"),
        address: Yup.string().required("Please input an email.")
    });
    const handleSubmit = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
    }
    return (<div className='container'>
    <Formik 
    initialValues={form}
    validationSchema = {validationSchema}
    enableReinitialize = {true}
    onSubmit = {(value) => {
        console.log(value);
    }}>
        <Form>
            <p className='mb-0'>Username</p>
            <Field name="username" placeholder="Username" value={form.name||""} onChange={handleSubmit} ></Field>
            <ErrorMessage name="username" component="div" className='text-danger'></ErrorMessage>
            <p className='mb-0'>Password</p>
            <Field name='password' placeholder="Input Your Password" value={form.password||""} onChange={handleSubmit}></Field>
            <ErrorMessage name='password' component="div" className='text-danger'></ErrorMessage>
            <p className='mb-0'>Email</p>
            <Field name='email' placeholder="Input Your Email" value={form.email||""} onChange={handleSubmit}></Field>
            <ErrorMessage name='email' component="div" className='text-danger'></ErrorMessage>
            <br></br>
            <button type='submit' className='btn btn-success mt-2'>Submit</button>
        </Form>
           </Formik>
           </div>
    );
};

export default LoginForm;