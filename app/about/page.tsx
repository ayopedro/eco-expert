import Image from 'next/image';

const team = [
  {
    name: 'John Doe',
    role: 'CEO',
    image: '/assets/person-1.png',
  },
  {
    name: 'John Doe',
    role: 'CEO',
    image: '/assets/person-2.png',
  },
  {
    name: 'John Doe',
    role: 'CEO',
    image: '/assets/person-3.png',
  },
  {
    name: 'John Doe',
    role: 'CEO',
    image: '/assets/person-4.png',
  },
  {
    name: 'John Doe',
    role: 'CEO',
    image: '/assets/person-5.png',
  },
  {
    name: 'John Doe',
    role: 'CEO',
    image: '/assets/person-6.png',
  },
];

const About = () => {
  return (
    <div className='h-full'>
      <section className='container text-center flex flex-col items-center gap-4 py-20'>
        <h3 className='text-lemon text-lg font-semibold'>About us</h3>
        <h2 className='text-5xl font-medium'>
          Meet the people behind the company
        </h2>
        <p className='w-1/2 mx-auto'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
          consequatur distinctio autem quos at libero perspiciatis consequuntur
          quisquam quia? Facere?
        </p>
        <div className='mt-10'>
          <Image
            src='/assets/about.png'
            alt='about'
            width={1000}
            height={1000}
          />
        </div>
      </section>
      <section className='bg-foreground text-white'>
        <div className='container py-20 flex justify-between'>
          <div className='flex flex-col gap-24 w-3/4'>
            <div>
              <h2 className='text-3xl font-medium'>Our Story</h2>
              <p className='mt-10'>
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
              <p className='mt-10'>“Let Us Make It Clean and Sparkle Always”</p>
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
              src='/assets/about-2.png'
              alt='about'
              width={661}
              height={721}
            />
          </div>
        </div>
      </section>
      <section className='container py-20'>
        <h2 className='text-3xl font-medium text-center'>Meet the team</h2>
        <p className='text-center w-1/2 mx-auto mt-5'>
          At the company, we make sure we deliver the best cleaning services to
          our clients, be it full house cleaning or express cleaning, even
          office cleaning
        </p>
        <div className='grid grid-cols-3 gap-10 my-10'>
          {team.map((person) => (
            <div key={person.name} className='flex flex-col gap-4'>
              <div className='rounded-md bg-gray-100'>
                <Image
                  src={person.image}
                  alt={person.name}
                  width={500}
                  height={320}
                />
              </div>
              <div className='text-center'>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
