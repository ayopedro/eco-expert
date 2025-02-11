'use client';

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react';
import { MinusIcon, AddIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/navigation';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  list?: string[];
}

interface FAQProps {
  faqs: FAQ[];
}

const Faq = ({ faqs }: FAQProps) => {
  const router = useRouter();
  return (
    <section className='bg-white py-16 md:py-32'>
      <div className='container flex flex-col text-foreground'>
        <div className='flex flex-col gap-4'>
          <h3 className='text-3xl font-semibold text-center'>FAQs</h3>
          <p className='text-center'>
            Some of the questions that might be bothering you, we have answers
            to them
          </p>
        </div>
        <div className='md:w-3/4 mt-10 mx-auto'>
          <Accordion allowMultiple>
            {faqs.map((faq) => (
              <AccordionItem key={faq.id}>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton className='md:text-lg font-semibold'>
                      <div className='flex items-center justify-between gap-4 text-left w-full'>
                        <span>{faq.question}</span>
                        {isExpanded ? (
                          <MinusIcon fontSize='12px' />
                        ) : (
                          <AddIcon fontSize='12px' />
                        )}
                      </div>
                    </AccordionButton>
                    <AccordionPanel>
                      <p>{faq.answer}</p>
                      {faq.list && (
                        <ul className='list-disc pl-4 mt-4'>
                          {faq.list.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className='flex flex-col mt-20'>
          <h3 className='text-xl font-semibold text-center'>
            Have more questions?
          </h3>
          <p className='text-center'>Contact us for more assistance and help</p>
          <button
            className='btn btn-outline w-fit mx-auto mt-4'
            onClick={() => router.push('/contact')}
          >
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
