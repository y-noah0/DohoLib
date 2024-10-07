// Button.jsx
import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick, href, children, variant = 'default' }) => {
  const classNames = `${styles.button} ${styles[variant]}`;

  if (href) {
    return (
      <a href={href} className={classNames}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
};

export default Button;