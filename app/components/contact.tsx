'use client';

import Image from 'next/image';
import { ContactForm } from './contact-form';

const Contact = () => {
  return (
    <section className='bg-mint py-24'>
      <div className='container flex justify-between'>
        <div className='flex flex-col'>
          <h3 className='text-lg text-foreground font-semibold'>Contact us</h3>
          <h2 className='text-2xl font-semibold w-2/3'>
            FILL OUT THE FORM AND WE WILL CONTACT YOU
          </h2>
          <p>Fill out your information to book a session with us.</p>
          <div className='mt-10'>
            <Image
              src='/assets/contact.png'
              alt='contact'
              width={479}
              height={366}
            />
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
