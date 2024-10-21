'use client';

import Image from 'next/image';
import { ContactForm } from './contact-form';

const Contact = () => {
  return (
    <section className='bg-mint py-12 md:py-24'>
      <div className='container flex flex-col md:flex-row gap-8 justify-between'>
        <div className='self-center'>
          <Image
            src='/assets/contact-us.webp'
            alt='contact'
            width={700}
            height={366}
          />
        </div>
        <div className='flex flex-col'>
          <h3 className='text-lg text-foreground font-semibold'>Contact us</h3>
          <h2 className='text-2xl font-semibold w-2/3'>
            FILL OUT THE FORM AND WE WILL CONTACT YOU
          </h2>
          <p>Fill out your information to book a session with us.</p>
          <div className='mt-10'>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
