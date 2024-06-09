import { SetStateAction } from 'react';
import { NavItem } from '../nav-item/nav-item';
import s from './nav-bar.module.css'
export const NavBar = ({ tagList,active, setActive }: { tagList: string[] | undefined,active:string, setActive: any }) => {
  return (
    <nav className={s.nav}>
      <ul className={s.nav_list}>
        <li className={s.list_item}>
          <button onClick={()=> setActive('Все темы')} className={active === 'Все темы' ? s.active :  s.item_btn}>Все темы</button>
        </li>
        {tagList?.map((navItem: string) => (
          <NavItem active={active} setActive={setActive} text={navItem} />
        ))}
      </ul>
    </nav>
  );
};
