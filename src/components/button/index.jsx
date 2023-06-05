import classNames from 'classnames';
import React, { useState } from 'react';

const variantStyles = {
  contained: 'bg-primary text-white',
  outlined:
    'border border-primary text-primary hover:bg-primary hover:bg-opacity-10',
  text: 'hover:bg-primary hover:bg-opacity-10 text-primary',
};

const Button = (prop) => {
  const { children, variant = 'contained', ...props } = prop;
  return (
    <button
      className={classNames(' px-3 py-1 rounded-md', variantStyles[variant])}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
