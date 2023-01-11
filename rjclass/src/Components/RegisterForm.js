import React from 'react';
import {Formik, Feild, Form} from 'formik';

const RegisterForm = () => {
    return (
        <div>
            <Formik
            initialValues={form}
            validationSchema= {validationSchema}
            enableReinitialize = {true}
            onSubmit={(values) => {
            console.log(values);}}
            >
                <Form>
                    <h2>Đăng ký</h2>
                    
                </Form>
            </Formik>
        </div>
    );
};

export default RegisterForm;