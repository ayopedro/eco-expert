'use client';

import { ContactForm } from '../components/contact-form';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { socialLinks } from '../utils/helpers';

const Contact = () => {
  return (
    <div className='h-full'>
      <div className='h-[calc(100vh-100px)] bg-contact bg-cover bg-center bg-no-repeat'></div>
      <section className='bg-foreground '>
        <div className='container py-20 text-white grid grid-cols-2 gap-16 relative'>
          <div>
            <h1 className='text-3xl font-semibold mb-4'>
              Get in touch with us
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              tempora mollitia, eos exercitationem amet eius aperiam unde
              maiores tempore eum?
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
            <p className='text-mint text-sm'>
              Brixton Close, London, United Kingdom
            </p>
            <div className='mt-8'>
              <APIProvider
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
              >
                <Map
                  style={{
                    width: '580px',
                    height: '435px',
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
          <div className='absolute top-[-25%] right-0'>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
