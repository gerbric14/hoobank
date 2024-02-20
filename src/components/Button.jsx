import React from 'react'

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-primary text-[18px] outline-none ${styles} rounded-[10px]`}
  >
    Get Started
  </button>
);

export default Button
