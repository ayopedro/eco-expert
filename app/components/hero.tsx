import BookUsButton from './book-us-btn';

const Hero = () => {
  return (
    <div className='h-[calc(100vh-100px)] bg-hero bg-cover bg-center bg-no-repeat'>
      <div className='container flex items-end h-full'>
        <div className='text-center md:text-left text-white bg-[#0000007d] bg-blur-md rounded-lg md:w-1/2 p-5 md:p-10 mb-20'>
          <h1 className='text-3xl md:text-5xl md:leading-snug mb-4 font-semibold md:font-bold'>
            Where <span className='text-lemon italic'>Quality Service</span>{' '}
            Meets <span className='text-lemon italic'>Affordability</span>
          </h1>
          <p className='mb-12 md:mb-8 md:text-lg'>
            <span className='text-bold text-lemon'>
              EcoExpert Cleaning Solution Services Ltd
            </span>{' '}
            is a pioneering provider of environmentally friendly cleaning
            solutions. Registered as a private limited company in England and
            Wales.
          </p>
          <BookUsButton variant='base' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
