import Image from 'next/image';

const About = () => {
  return (
    <div className='h-full'>
      <section className='h-[calc(100vh-200px)] bg-about bg-cover bg-center bg-no-repeat'>
        <div className='container text-white text-center flex flex-col items-center justify-center gap-4 py-20 h-full'>
          <h3 className='text-lemon text-lg font-semibold'>About us</h3>
          <h2 className='text-3xl md:text-5xl font-bold'>What we are</h2>
          <p className='md:w-1/2 mx-auto md:text-xl'>
            At the company, we make sure we deliver the best cleaning services
            to our clients, be it full house cleaning or express cleaning, even
            office cleaning
          </p>
        </div>
      </section>
      <section className='bg-foreground text-white'>
        <div className='container py-20 flex flex-col-reverse md:flex-row gap-8 justify-between'>
          <div className='flex flex-col gap-12 md:w-3/4'>
            <div>
              <h2 className='text-3xl font-medium'>Our Story</h2>
              <p className='mt-5'>
                EcoExpert Cleaning Solution Services Ltd is a leading provider
                of environmentally friendly cleaning solutions. Registered as a
                private limited company in England and Wales, we are committed
                to delivering tailored cleaning services for both residential
                and commercial clients, all while minimizing environmental
                impact. Our dedication to sustainability sets us apart, making
                us a trusted name in the green cleaning industry.
              </p>
            </div>
            <div>
              <h2 className='text-3xl font-medium'>Our Mission</h2>
              <p className='mt-5'>“Let Us Make It Clean and Sparkle Always”</p>
              <p className='mt-5'>
                At EcoExpert, our mission is to set a new benchmark for
                conscious cleaning services in the industry. We aim to provide
                superior cleaning solutions that are not only effective but also
                environmentally safe.
              </p>
            </div>
          </div>
          <div className='w-full flex justify-end'>
            <Image
              src='/assets/meeting-room.webp'
              alt='about'
              width={661}
              height={721}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
