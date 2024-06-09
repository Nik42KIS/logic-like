import React from 'react';
import s from './nav-item.module.css'
export const NavItem = ({ text,active,setActive }:{text:string, active:string, setActive: any}) => {
  return (
    <li key={text}>
      <button onClick={()=> setActive(text)} className={active === text ? s.active :  s.item_btn}>{text}</button>
    </li>
  );
};
