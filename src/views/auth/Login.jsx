import React from 'react';
import { Formik } from 'formik';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

function Login() {

    const cookies = new Cookies()
    const navigate = useNavigate()

    const validate = values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = '';
        }
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1 className='h1_heading'>LOGIN</h1>
            <hr/>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Email is Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    } if (!values.password) {
                        errors.password = 'Password is Required';
                    }
                    return errors
                }
                }

                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        cookies.set('x-auth-token', "agigaiisdasdsho")
                        actions.setSubmitting(false);
                        window.location.reload()
                        navigate('/')
                    }, 1000);
                }}
            >
                {props => (
                    <form onSubmit={props.handleSubmit} style={{ marginTop: '10%' }}>
                        <div className='error'>
                            <input
                                className='input_email'
                                style={{ width: '20%', padding: 10 }}
                                type="email"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.email}
                                placeholder='Enter Email'
                                name="email"
                            />
                            {props.errors.email && <div id="feedback">{props.errors.email}</div>}
                        </div>
                        <div className='error'>
                            <input
                                className='input_password'
                                style={{ width: '20%', padding: 10 }}
                                type="password"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.password}
                                placeholder='Enter Password'
                                name="password"
                            />
                            {props.errors.password && <div id="feedback">{props.errors.password}</div>}
                        </div>

                        <button className='button_submit' style={{ }} type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Login;