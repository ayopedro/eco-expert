import Image from 'next/image';
import { SERVICES } from '../components/services';
import FaqComponent from '../components/faq';
const Services = () => {
  return (
    <div className='h-full bg-white'>
      <section className='container text-center flex flex-col items-center gap-4 py-10 md:py-20'>
        <h3 className='text-lemon text-lg font-semibold'>Services</h3>
        <h2 className='text-3xl md:text-5xl font-medium'>
          We are passionate about cleaning
        </h2>
        <p className='md:w-1/2 mx-auto'>
          We are committed to expanding our market presence by targeting
          eco-conscious homes and businesses. Our goal is to build a reputation
          for excellence, reliability, and environmental responsibility.
        </p>
        <div className='mt-10'>
          <Image
            src='/assets/cleaning-materials.png'
            alt='about'
            width={1000}
            height={1000}
          />
        </div>
      </section>
      <section className='bg-background'>
        <div className='container py-14 md:py-28'>
          <div className='grid md:grid-cols-3 gap-5'>
            {SERVICES.map(({ id, image, title }) => (
              <div key={id}>
                <div
                  className={'h-[323px] mb-2'}
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></div>
                <p className='font-semibold'>{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <FaqComponent />
      </section>
    </div>
  );
};

export default Services;
