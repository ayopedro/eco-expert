'use client';

import {
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { ContactSchema } from '../utils/schema';
import { yupResolver } from '@hookform/resolvers/yup';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  service: string;
};

export const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(ContactSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
  }

  return (
    <div className='bg-white rounded-lg p-6 h-fit text-foreground'>
      <h2 className='text-xl font-semibold'>Contact Information</h2>
      <Divider my={6} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex gap-8'>
          <FormControl isInvalid={!!errors.firstName}>
            <FormLabel htmlFor='firstName' fontSize={'14px'}>
              First name
            </FormLabel>
            <Input
              id='firstName'
              placeholder='First name'
              {...register('firstName')}
            />
            <FormErrorMessage>
              {errors.firstName?.message as string}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.lastName}>
            <FormLabel htmlFor='lastName' fontSize={'14px'}>
              Last name
            </FormLabel>
            <Input
              id='lastName'
              placeholder='Last name'
              {...register('lastName')}
            />
            <FormErrorMessage>
              {errors.lastName?.message as string}
            </FormErrorMessage>
          </FormControl>
        </div>
        <div className='flex gap-8 mt-6'>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel htmlFor='email' fontSize={'14px'}>
              Email address
            </FormLabel>
            <Input
              id='email'
              placeholder='user@domain.com'
              {...register('email')}
            />
            <FormErrorMessage>
              {errors.email?.message as string}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.phone}>
            <FormLabel htmlFor='phone' fontSize={'14px'}>
              Phone number
            </FormLabel>
            <Input
              id='phone'
              placeholder='Phone number'
              {...register('phone')}
            />
            <FormErrorMessage>
              {errors.phone?.message as string}
            </FormErrorMessage>
          </FormControl>
        </div>
        <div className='mt-6'>
          <FormControl isInvalid={!!errors.service}>
            <FormLabel htmlFor='service' fontSize={'14px'}>
              Service
            </FormLabel>
            <Select
              id='service'
              placeholder='Select a service'
              {...register('service', {
                required: 'Kindly select a service',
              })}
            >
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
            <FormErrorMessage>
              {errors.service?.message as string}
            </FormErrorMessage>
          </FormControl>
        </div>
        <button className='btn btn-secondary w-full mt-8'>Submit</button>
      </form>
    </div>
  );
};
