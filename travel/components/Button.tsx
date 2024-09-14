import React from 'react';
import Image from 'next/image';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string; // Ensure this variant is handled correctly in your styling{-_
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button className={`flexCenter gap-3 rounded-full border ${variant}`}type={type}>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span>{title}</span>
    </button>
  );
};

export default Button;

