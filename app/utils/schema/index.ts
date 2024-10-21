import * as Yup from 'yup';

export const ContactSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string().optional(),
  service: Yup.string().required('Kindly select a service'),
});

export const BookUsSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string().optional(),
  service: Yup.string().required('Kindly select a service'),
  address: Yup.string().required('Address is required'),
});
