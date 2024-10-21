import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineArrowOutward } from 'react-icons/md';

const About = () => {
  return (
    <section className='py-16 md:py-32 bg-white'>
      <div className='container flex flex-col md:flex-row items-center md:gap-10 justify-between'>
        <div className='flex md:w-[100%] mb-4 md:mb-0'>
          <Image
            src='/assets/office-space.webp'
            alt='about'
            width={600}
            height={529}
            className='rounded-lg'
          />
        </div>
        <div className='flex flex-col gap-4 w-full'>
          <h3 className='text-lemon text-lg font-semibold'>About</h3>
          <h2 className='text-3xl font-semibold'>
            KEEPING YOUR SPACES CLEAN AND SPARKY
          </h2>
          <p>
            EcoExpert Cleaning Solution Services Ltd is a leading provider of
            environmentally friendly cleaning solutions. Registered as a private
            limited company in England and Wales, we are committed to delivering
            tailored cleaning services for both residential and commercial
            clients, all while minimizing environmental impact.
          </p>
          <p>
            Our dedication to sustainability sets us apart, making us a trusted
            name in the green cleaning industry. We are committed to expanding
            our market presence by targeting eco-conscious homes and businesses.
            Our goal is to build a reputation for excellence, reliability, and
            environmental responsibility.
          </p>
          <div className='flex items-center gap-1 mt-10'>
            <Link href='/about' className='underline'>
              Read More
            </Link>
            <MdOutlineArrowOutward />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
