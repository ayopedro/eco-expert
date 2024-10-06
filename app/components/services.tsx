import ServiceCard from './service-card';

const SERVICES = [
  {
    id: 1,
    title: 'Disinfectant Cleaning',
    description: 'from ₤10/4 meters',
    image: '/assets/disinfectant-cleaning.png',
    width: 677,
    height: 532,
  },
  {
    id: 4,
    title: 'General Cleaning',
    description: 'from ₤10/4 meters',
    image: '/assets/general-cleaning.png',
    width: 380,
    height: 532,
  },
  {
    id: 2,
    title: 'Window Cleaning',
    description: 'from ₤10/4 meters',
    image: '/assets/window-cleaning.png',
    width: 380,
    height: 532,
  },
  {
    id: 3,
    title: 'Deep Cleaning',
    description: 'from ₤10/4 meters',
    image: '/assets/deep-cleaning.png',
    width: 380,
    height: 532,
  },
  {
    id: 5,
    title: 'Carpet Cleaning',
    description: 'from ₤10/4 meters',
    image: '/assets/carpet-cleaning.png',
    width: 380,
    height: 532,
  },
];

const Services = () => {
  return (
    <section className='container py-20'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col w-full'>
          <h3 className='text-lemon text-lg font-semibold'>Our Services</h3>
          <h2 className='text-3xl font-semibold'>
            Our Top Notch <br /> Services
          </h2>
        </div>
        <p>
          We are committed to expanding our market presence by targeting
          eco-conscious homes and businesses. Our goal is to build a reputation
          for excellence, reliability, and environmental responsibility.
        </p>
      </div>
      <div className='grid grid-cols-3 gap-6 my-8'>
        {SERVICES.map((service, idx) => (
          <div
            className={idx === 0 ? 'col-span-2' : 'col-span-1'}
            key={service.id}
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              image={service.image}
              w={service.width}
              h={service.height}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
