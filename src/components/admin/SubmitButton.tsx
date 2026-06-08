import React from 'react';

interface SubmitButtonProps {
  loading: boolean;
  label: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ loading, label }) => (
  <button
    type="submit"
    disabled={loading}
    className="px-6 py-3 bg-gold-500 text-dark-900 rounded-xl font-semibold hover:bg-gold-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {loading ? 'Enregistrement...' : label}
  </button>
);

export default SubmitButton;