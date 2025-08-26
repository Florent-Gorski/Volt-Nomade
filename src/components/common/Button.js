import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, children, ...props }) => (
  <Link
    to={to}
    className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
    {...props}
  >
    {children}
  </Link>
);

export default Button;