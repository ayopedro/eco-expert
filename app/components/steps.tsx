'use client';

import { FaHandshakeAngle } from 'react-icons/fa6';
import { IoCalendarNumber, IoDocumentTextSharp } from 'react-icons/io5';
import { GiBroom } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import { Icon } from '@chakra-ui/react';

const STEPS = [
  {
    id: 1,
    title: 'Application',
    description:
      'You fill out the form on our website or contact us in any way you find convenient.',
    icon: IoDocumentTextSharp,
  },
  {
    id: 2,
    title: 'Select Date',
    description:
      'We select a date our representatives come to assess the plan works and discuss costs.',
    icon: IoCalendarNumber,
  },
  {
    id: 3,
    title: 'Hire Us',
    description:
      'Sign a contract with us, and we issue all necessary documents',
    icon: FaHandshakeAngle,
  },
  {
    id: 4,
    title: 'Cleaning',
    description:
      'Our representatives come and render utmost services to make your environment sparkle.',
    icon: GiBroom,
  },
];

const Steps = () => {
  const [$step, setStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev === 4 ? 1 : prev + 1));
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className='bg-foreground py-16 md:py-32'>
      <div className='container flex flex-col text-white'>
        <div className='flex flex-col'>
          <h3 className='text-lemon text-lg font-semibold'>Steps</h3>
          <h2 className='capitalize text-3xl font-semibold'>
            How does it work?
          </h2>
        </div>
        <div className='flex flex-col md:flex-row mt-14 md:mt-28 gap-10'>
          {STEPS.map((step) => (
            <div
              key={step.id}
              className={`flex flex-col items-center text-center gap-4 ${
                step.id === $step ? 'animate-pulse text-lemon' : ''
              }`}
              style={{ animationDelay: `${step.id * 0.5}s` }}
            >
              <div
                className={`text-5xl text-foreground rounded-full ${
                  step.id === $step ? 'bg-lemon' : 'bg-background'
                } p-4`}
              >
                <Icon as={step.icon} />
              </div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-xl font-semibold'>{step.title}</h3>
                <p className='text-sm'>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
