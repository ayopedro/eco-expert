interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
  return (
    <div>
      <div
        className={'h-[532px] mb-2'}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <p className='font-semibold'>{title}</p>
      <small className='text-sm'>{description}</small>
    </div>
  );
};

export default ServiceCard;
