import Image from 'next/image';
import FaqComponent from '../components/faq';

const Faq = () => {
  return (
    <div className='h-full bg-white'>
      <section className='container text-center flex flex-col items-center gap-4 py-20'>
        <h3 className='text-lemon text-lg font-semibold'>The FAQs</h3>
        <h2 className='text-5xl font-medium'>Help Center</h2>
        <p className='w-1/2 mx-auto'>
          Everything you need to know about us and how work process.
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
      <section>
        <FaqComponent />
      </section>
    </div>
  );
};

export default Faq;
