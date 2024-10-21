'use client';

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import BookUs from './book-us';

interface BookUsBtnProps {
  variant: 'base' | 'outline';
}

const BookUsButton = ({ variant }: BookUsBtnProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button
        className={`btn ${
          variant === 'base' ? 'btn-secondary' : 'btn-outline'
        }`}
        onClick={onOpen}
      >
        Book us
      </button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <BookUs />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BookUsButton;
