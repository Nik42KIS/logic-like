
import { NavItem } from '../nav-item/nav-item';

export const NavBar = ({tagList}:{tagList:string[] | undefined}) => {
  
  

  return (
    <nav>
      <ul>
        <li>
          <button>
            Все темы
          </button>
        </li>
        {tagList?.map((navItem:string)=><NavItem text={navItem}/>)}
      </ul>
    </nav>
  );
};
