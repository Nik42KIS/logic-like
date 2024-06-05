import React from 'react';
import s from './nav-item.module.css'
export const NavItem = ({ text }:{text:string}) => {
  return (
    <li key={text}>
      <button className={s.item_btn}>{text}</button>
    </li>
  );
};
