import { useState } from 'react';

export const useFormValidation = (initialValues, validationRules) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    
    Object.keys(validationRules).forEach(field => {
      const rule = validationRules[field];
      const value = values[field];
      
      if (rule.required && (!value || value.trim() === '')) {
        newErrors[field] = `${field} is required`;
      } else if (rule.email && value && !/\S+@\S+\.\S+/.test(value)) {
        newErrors[field] = 'Email is invalid';
      } else if (rule.minLength && value && value.length < rule.minLength) {
        newErrors[field] = `${field} must be at least ${rule.minLength} characters`;
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (onSubmit) => {
    setIsSubmitting(true);
    
    if (validate()) {
      try {
        await onSubmit(values);
        setValues(initialValues); // Reset form
      } catch (error) {
        console.error('Form submission error:', error);
      }
    }
    
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    validate
  };
};
