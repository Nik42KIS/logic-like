import { NavItem } from '../nav-item/nav-item';
import s from './nav-bar.module.css'
export const NavBar = ({ tagList }: { tagList: string[] | undefined }) => {
  return (
    <nav className={s.nav}>
      <ul className={s.nav_list}>
        <li className={s.list_item}>
          <button className={s.item_btn}>Все темы</button>
        </li>
        {tagList?.map((navItem: string) => (
          <NavItem text={navItem} />
        ))}
      </ul>
    </nav>
  );
};
