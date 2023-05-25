import React, {useId, useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function SignIn(){

    const [modalRegState, setModalRegState] = useState(false);

    const openRegModal = () => {
        setModalRegState(!modalRegState)
    }


    let useCode = useId();

    function SignInForm(){
        return(
            <>
                <div className='sign_in_modal_bkg' onClick={openRegModal}>

                </div>
                <div className='sign_in_modal'>
                    <div className='sign_in_modal_box'>
                        <h1>Sign in</h1>
                        <Formik
                            initialValues={{ email: '', name: '', phone: '', post_code: '' }}
                            validate={values => {
                                const errors = {};
                                //EMAIL VALIDATION
                                if (!values.email) {
                                    errors.email = 'Required';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address';
                                }

                                //NAME VALIDATION
                                if (!values.name) {
                                    errors.name = 'Required';
                                } else if (
                                    !/^[a-zA-Z1-9_-]{5,9}$/i.test(values.name)
                                ) {
                                    errors.name = 'Invalid name';
                                }

                                //PHONE VALIDATION
                                if (!values.phone) {
                                    errors.phone = 'Required';
                                } else if (
                                    !/^[0-9]{12}$/i.test(values.phone)
                                ) {
                                    errors.phone = 'Invalid phone';
                                }
                                //POST CODE VALIDATION
                                if (!values.post_code) {
                                    errors.post_code = 'Required';
                                } else if (
                                    !/^[0-9]{6}$/i.test(values.post_code)
                                ) {
                                    errors.post_code = 'Invalid post code';
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                // alert(JSON.stringify(values, null, 2));
                                localStorage.setItem('reg-' + useCode , JSON.stringify(values));
                                setTimeout(() => {
                                    setSubmitting(false,openRegModal());
                                }, 400);
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form className='sign_in_form'>
                                    <div className="form_item">
                                        <Field type="text" name="name" placeholder='Your name' />
                                        <ErrorMessage name="name" component="div" />
                                    </div>
                                    <div className='form_item'>
                                        <Field type="email" name="email" placeholder='example@email.com'/>
                                        <ErrorMessage name="email" component="div" />
                                    </div>
                                    <div className='form_item'>
                                        <Field type="tel" name="phone" placeholder='380674564545'/>
                                        <ErrorMessage name="phone" component="div" />
                                    </div>
                                    <div className='form_item'>
                                        <Field type="text" name="city" placeholder='Lviv'/>
                                        <ErrorMessage name="city" component="div" />
                                    </div>
                                    <div className='form_item'>
                                        <Field type="text" name="street" placeholder='Centralna 12'/>
                                        <ErrorMessage name="street" component="div" />
                                    </div>
                                    <div className='form_item'>
                                        <Field type="text" name="post_code" placeholder='79007'/>
                                        <ErrorMessage name="post_code" component="div" />
                                    </div>


                                    <button className='sign_in_btn' type="submit" disabled={isSubmitting}>
                                        Submit
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </>
        )
    }



    return (
            <>
                <button className='sign_in_btn' onClick={openRegModal}>Sign in</button>

                {
                    modalRegState ? <SignInForm/> : null

                }

            </>


    )

}