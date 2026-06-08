import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: 'text' | 'email' | 'textarea' | 'url';
  required?: boolean;
  placeholder?: string;
  rows?: number;
}

const FormField: React.FC<FormFieldProps> = ({ label, name, value, onChange, type = 'text', required, placeholder, rows = 4 }) => (
  <div>
    <label htmlFor={name} className="block text-sm text-gray-400 mb-2">{label}</label>
    {type === 'textarea' ? (
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        placeholder={placeholder}
        className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors resize-none"
      />
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
      />
    )}
  </div>
);

export default FormField;