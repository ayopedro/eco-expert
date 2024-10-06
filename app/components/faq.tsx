'use client';

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react';
import { MinusIcon, AddIcon } from '@chakra-ui/icons';
import FAQs from '../utils/faq.json';

const Faq = () => {
  return (
    <section className='bg-white py-32'>
      <div className='container flex flex-col text-foreground'>
        <div className='flex flex-col'>
          <h3 className='text-2xl font-semibold text-center'>FAQs</h3>
          <p className='text-center'>
            Some of the questions that might be bothering you, we have answers
            to them
          </p>
        </div>
        <div className='w-3/4 mt-10 mx-auto'>
          <Accordion allowMultiple>
            {FAQs.map((faq) => (
              <AccordionItem key={faq.id}>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton className='text-lg font-semibold'>
                      <div className='flex items-center justify-between w-full'>
                        <span>{faq.question}</span>
                        {isExpanded ? (
                          <MinusIcon fontSize='12px' />
                        ) : (
                          <AddIcon fontSize='12px' />
                        )}
                      </div>
                    </AccordionButton>
                    <AccordionPanel>{faq.answer}</AccordionPanel>
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
          <button className='btn btn-outline w-fit mx-auto mt-4'>
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
