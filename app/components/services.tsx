import ServiceCard from './service-card';

export const SERVICES = [
  {
    id: 1,
    title: 'Gardening & Fumigation services',
    description: 'from ₤10/4 meters',
    image: '/assets/disinfectant-cleaning.png',
  },
  {
    id: 4,
    title: 'General Cleaning',
    description: 'from ₤10/4 meters',
    image: '/assets/general-cleaning.png',
  },
  {
    id: 2,
    title: 'Window Cleaning',
    description: 'from ₤10/4 meters',
    image: '/assets/window-cleaning.png',
  },
  {
    id: 3,
    title: 'Deep Cleaning',
    description: 'from ₤10/4 meters',
    image: '/assets/deep-cleaning.png',
  },
  {
    id: 5,
    title: 'Carpet Cleaning',
    description: 'from ₤10/4 meters',
    image: '/assets/carpet-cleaning.png',
  },
  {
    id: 6,
    title: 'Customized cleaning contracts',
    description: 'from ₤10/4 meters',
    image: '/assets/carpet-cleaning.png',
  },
];

const Services = () => {
  return (
    <section className='container py-10 md:py-20'>
      <div className='flex flex-col md:flex-row gap-4 items-center justify-between'>
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
      <div className='flex flex-col md:grid md:grid-cols-3 gap-6 my-8'>
        {SERVICES.slice(0, 5).map((service, idx) => (
          <div
            className={idx === 0 ? 'col-span-2' : 'col-span-1'}
            key={service.id}
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              image={service.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
