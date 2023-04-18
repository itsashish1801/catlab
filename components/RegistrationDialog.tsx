import { Fragment, useState } from 'react';
import localFont from 'next/font/local';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';

import { ButtonOutline, ButtonSolid } from './Buttons';
import { TextInput } from './Inputs';

const averta = localFont({
  src: [
    {
      path: '../public/fonts/AvertaStd-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/AvertaStd-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/AvertaStd-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-averta',
});

interface RegistrationDialogProps {
  type?: 'button' | 'link';
}

interface RegistrationForm {
  firstname: string;
  email: string;
}

const RegistrationFormSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, 'Too short!')
    .max(15, 'Too long!')
    .required('First name is a required field!'),

  email: Yup.string()
    .email('Not a valid email!')
    .required('Email is a required field!'),
});

function RegistrationDialog({ type = 'button' }: RegistrationDialogProps) {
  const initialValues: RegistrationForm = {
    firstname: '',
    email: '',
  };
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      {type === 'link' && (
        <button
          onClick={openModal}
          className='font-medium text-emerald-500 hover:underline underline-offset-4'
        >
          Get your free account
        </button>
      )}
      {type === 'button' && (
        <ButtonOutline onClickHandler={openModal}>Join for free</ButtonOutline>
      )}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex items-center justify-center min-h-full p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel
                  className={`relative w-full max-w-md p-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded-md shadow-lg ${averta.variable} font-sans`}
                >
                  <button
                    onClick={closeModal}
                    className='absolute right-5 top-5'
                  >
                    <XMarkIcon className='w-5 h-5' />
                  </button>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-semibold leading-6 text-slate-800 font-display'
                  >
                    Join Catlab for free
                  </Dialog.Title>
                  <div className='mt-2'>
                    <p className='text-sm text-slate-500'>
                      We are currently providing access to limited people only.
                      Enter details to join the wait list.
                    </p>
                  </div>

                  <Formik
                    initialValues={initialValues}
                    validationSchema={RegistrationFormSchema}
                    onSubmit={(values) => {
                      console.log(values);
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form className='flex flex-col mt-6 text-sm gap-y-4'>
                        <TextInput
                          label='First name'
                          placeholder='Ashish'
                          error={
                            errors.firstname && touched.firstname
                              ? errors.firstname
                              : ''
                          }
                        />
                        <TextInput
                          label='Email'
                          placeholder='yourname@example.com'
                          type='email'
                          error={
                            errors.email && touched.email ? errors.email : ''
                          }
                        />
                        <ButtonSolid type='submit' className='mt-2'>
                          Submit
                        </ButtonSolid>
                      </Form>
                    )}
                  </Formik>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default RegistrationDialog;
