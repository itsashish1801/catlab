import * as Yup from 'yup';
import { Form, Formik } from 'formik';

import { ButtonSolid } from '@/components/Buttons';
import { Favicon } from '@/components/Icons';
import { TextInput } from '@/components/Inputs';
import RegistrationDialog from '@/components/RegistrationDialog';

interface SignInForm {
  email: string;
  password: string;
}

const SignInFormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Not a valid email!')
    .required('Email is a required field!'),

  password: Yup.string()
    .min(8, 'Password should be min 8 characters long!')
    .max(16, 'Password should be max 16 characters long!')
    .required('Password is a required field!'),
});

function SignIn() {
  const initialValues: SignInForm = {
    email: '',
    password: '',
  };

  return (
    <div className='flex flex-col items-center max-w-md mx-auto mt-20 lg:mt-16'>
      <Favicon className='w-8 h-8' />

      <div className='text-center'>
        <h2 className='mt-6 text-2xl font-semibold'>Sign in to your account</h2>
        <div className='mt-1 text-sm'>
          <span>Or</span> <RegistrationDialog type='link' />
        </div>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={SignInFormSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className='w-full mt-10'>
            <div className='flex flex-col gap-y-4'>
              <TextInput
                label='Email'
                placeholder='yourname@example.com'
                type='email'
                error={errors.email && touched.email ? errors.email : ''}
              />
              <TextInput
                label='Password'
                type='password'
                placeholder='********'
                error={
                  errors.password && touched.password ? errors.password : ''
                }
              />
            </div>
            <ButtonSolid type='submit' className='w-full mt-8'>
              Sign in
            </ButtonSolid>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignIn;
