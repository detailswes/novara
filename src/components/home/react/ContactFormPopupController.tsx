import React, { useState, useEffect } from 'react';
import ContactFormPopup from './ContactFormPopup';

interface ContactFormPopupControllerProps {
  contactNumber: string;
}

const ContactFormPopupController: React.FC<ContactFormPopupControllerProps> = ({ contactNumber }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpenPopup = () => {
      setIsOpen(true);
    };

    document.addEventListener('openContactFormPopup', handleOpenPopup);

    return () => {
      document.removeEventListener('openContactFormPopup', handleOpenPopup);
    };
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <ContactFormPopup 
      isOpen={isOpen} 
      onClose={closePopup} 
      contactNumber={contactNumber} 
    />
  );
};

export default ContactFormPopupController;