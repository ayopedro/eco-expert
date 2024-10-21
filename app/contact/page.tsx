'use client';

import { ContactForm } from '../components/contact-form';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { socialLinks } from '../utils/helpers';

const Contact = () => {
  return (
    <div className='h-full'>
      <div className='h-[50vh] md:h-[calc(100vh-200px)] bg-contact bg-cover bg-center bg-no-repeat' />
      <section className='bg-foreground '>
        <div className='container py-20 text-white grid md:grid-cols-2 gap-16 relative'>
          <div>
            <h1 className='text-3xl font-semibold mb-4'>
              Get in touch with us
            </h1>
            <p>
              If you have any questions or would like to learn more about our
              services, please don&apos;t hesitate to reach out to us.
              We&apos;re always eager to hear from you and explore how we can
              assist you in achieving your cleaning goals.
            </p>
            <div className='flex flex-col'>
              <h3 className='text-xl font-semibold mt-10'>
                Follow us on our socials:
              </h3>
              <div className='flex gap-4 mt-2'>
                {socialLinks.map((link) => (
                  <a
                    href={link.url}
                    target='_blank'
                    key={link.name}
                    className='text-2xl'
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            <h3 className='text-xl font-semibold mt-10'>Company address:</h3>

            <p className='text-mint'>Suite RA01,</p>
            <p className='text-mint'>195-197 Wood Street</p>
            <p className='text-mint'>London, E17 3NU</p>
            <p className='text-mint'>United Kingdom</p>

            <div className='mt-8 md:w-[580px] h-[250px] md:h-[435px]'>
              <APIProvider
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
              >
                <Map
                  style={{
                    borderRadius: '10px',
                  }}
                  defaultCenter={{ lat: 22.54992, lng: 0 }}
                  defaultZoom={3}
                  gestureHandling={'greedy'}
                  disableDefaultUI={true}
                />
              </APIProvider>
            </div>
          </div>
          <div className='md:absolute md:top-[-25%] md:right-4'>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
