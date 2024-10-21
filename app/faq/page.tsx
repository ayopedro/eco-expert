import FaqComponent from '../components/faq';
import FAQs from '../utils/faq.json';

const Faq = () => {
  return (
    <div className='h-full bg-white'>
      <section className='h-[calc(100vh-300px)] bg-faqs bg-cover bg-center bg-no-repeat'>
        <div className='container text-white text-center flex flex-col items-center justify-center gap-4 pt-10 md:pt-20 h-full'>
          <h3 className='text-lemon text-lg font-semibold'>The FAQs</h3>
          <h2 className='text-3xl md:text-5xl font-bold'>Help Center</h2>
          <p className='md:w-1/2 mx-auto md:text-xl'>
            Everything you need to know about us and how work process.
          </p>
        </div>
      </section>
      <FaqComponent faqs={FAQs} />
    </div>
  );
};

export default Faq;
