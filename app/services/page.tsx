import FaqComponent from '../components/faq';
import FAQs from '../utils/faq.json';
import SERVICES from '../utils/services.json';

const Services = () => {
  return (
    <div className='h-full bg-white'>
      <section className='h-[calc(100vh-200px)] bg-services bg-cover bg-center bg-no-repeat'>
        <div className='container text-white text-center flex flex-col items-center justify-center gap-4 py-10 md:py-20 h-full'>
          <h3 className='text-lemon text-lg font-semibold'>Services</h3>
          <h2 className='text-3xl md:text-5xl font-bold'>
            We are passionate about cleaning
          </h2>
          <p className='md:w-1/2 mx-auto md:text-xl'>
            We are committed to expanding our market presence by targeting
            eco-conscious homes and businesses. Our goal is to build a
            reputation for excellence, reliability, and environmental
            responsibility.
          </p>
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
        <FaqComponent faqs={FAQs.slice(0, 5)} />
      </section>
    </div>
  );
};

export default Services;
