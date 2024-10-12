const Hero = () => {
  return (
    <div className='h-[calc(100vh-100px)] bg-hero bg-cover bg-center bg-no-repeat'>
      <div className='container flex items-center h-full'>
        <div className='text-white bg-[#0000004D] bg-blur-md rounded-lg md:w-1/2 p-8 md:p-10'>
          <h1 className='text-3xl md:text-5xl md:leading-snug mb-4 font-bold'>
            Where <span className='text-lemon italic'>Cleanliness</span> meets{' '}
            <span className='text-lemon italic'>Affordability</span>
          </h1>
          <p className='mb-8'>
            EcoExpert Cleaning Solution Services Ltd is a leading provider of
            environmentally friendly cleaning solutions. Registered as a private
            limited company in England and Wales.
          </p>
          <button className='btn btn-secondary'>Book us</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
