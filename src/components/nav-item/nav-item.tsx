import React from 'react';

export const NavItem = ({ text }:{text:string}) => {
  return (
    <li key={text}>
      <button>{text}</button>
    </li>
  );
};
