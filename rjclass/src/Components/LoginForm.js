import React, {useState} from 'react'
import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import loginAPI from '../API/loginAPI';

const LoginForm = () => {
    const [form, setForm] = useState({username:"", password:""});
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Please input username."), 
        phone: Yup.string().required("Please input your password")
    });
    const handleSubmit = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
    }
    const login = async () => {
       const response = await loginAPI.login(form);
       if (response.status === 401) alert(response.message)
       else if  (response.status === 200) {
        sessionStorage.setItem("access_token", JSON.stringify(response.data))
            this.prop.changeLoggedStatus();
       }
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
            <Field name="username" placeholder="Input Username" value={form.username||""} onChange={handleSubmit} ></Field>
            <ErrorMessage name="username" component="div" className='text-danger'></ErrorMessage>
            <p className='mb-0'>Password</p>
            <Field name='password' placeholder="Input Your Password" value={form.password||""} onChange={handleSubmit}></Field>
            <ErrorMessage name='password' component="div" className='text-danger'></ErrorMessage>
            <br></br>
            <button type='submit' className='btn btn-success mt-2' onClick={login()}>Submit</button>
        </Form>
           </Formik>
           </div>
    );
};

export default LoginForm;