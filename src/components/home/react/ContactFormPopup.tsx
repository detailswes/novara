import React, { useState, useEffect } from 'react';

interface ContactFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
  contactNumber: string;
}

interface FormData {
  fullName: string;
  email: string;
  telephone: string;
}

interface FormErrors {
  fullName: string;
  email: string;
  telephone: string;
}

const ContactFormPopup: React.FC<ContactFormPopupProps> = ({ isOpen, onClose, contactNumber }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    telephone: '',
  });

  const [errors, setErrors] = useState<FormErrors>({
    fullName: '',
    email: '',
    telephone: '',
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({
    fullName: false,
    email: false,
    telephone: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

 
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFormData({ fullName: '', email: '', telephone: '' });
        setErrors({ fullName: '', email: '', telephone: '' });
        setTouched({ fullName: false, email: false, telephone: false });
        setIsSubmitted(false);
      }, 300); 
    }
  }, [isOpen]);

  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
      case 'fullName':
        return value.trim() ? '' : 'Name is required';
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(value) ? '' : 'Invalid email address';
      case 'telephone':
        if (!value.trim()) return 'Contact Number is required';
        if (!/^\d{10}$/.test(value)) return 'Contact Number must be 10 digits';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    setTouched({
      fullName: true,
      email: true,
      telephone: true,
    });

    
    const newErrors: FormErrors = {
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
      telephone: validateField('telephone', formData.telephone),
    };

    setErrors(newErrors);

 
    if (!Object.values(newErrors).some((error) => error !== '')) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${isOpen ? 'flex' : 'hidden'} items-center justify-center`}
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg p-8 max-w-sm mx-auto z-50 relative">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <section className="max-w-sm mx-auto bg-white rounded-lg">
          <p className="text-center font-bold  mt-4 text-primary">
            Provide your contact details
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Name *"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.fullName && touched.fullName ? 'border-red-500' : ''
                  }`}
                />
                {errors.fullName && touched.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email && touched.email ? 'border-red-500' : ''
                  }`}
                />
                {errors.email && touched.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  placeholder="Contact Number *"
                  maxLength={10}
                  value={formData.telephone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.telephone && touched.telephone ? 'border-red-500' : ''
                  }`}
                />
                {errors.telephone && touched.telephone && (
                  <p className="text-red-500 text-sm">{errors.telephone}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md transition hover:bg-primary/90"
              >
                SAVE
              </button>
            </form>
          ) : (
            <p className="text-center text-green-600 font-bold mt-4">
              Thank you! Your details have been saved.
            </p>
          )}
        </section>
      </div>
    </div>
  );
};

export default ContactFormPopup;