import React, { useEffect, useState } from 'react';
import { NavItem } from '../nav-item/nav-item';

export const NavBar = () => {
  const [tagList, setTagList] = useState([]);

  useEffect(() => {
    const data = fetch('https://logiclike.com/docs/courses.json')
      .then((res) => res.json())
      .then((result) => {
        const tagArr = [];
        result.forEach((el) => {
          el.tags.forEach((item) => {
            tagArr.indexOf(item) === -1 ? tagArr.push(item) : null;
          });
        });

        return tagArr;
      });
    data.then((res) => setTagList(res));
  }, []);

  return (
    <nav>
      <ul>
        {tagList.map((navItem)=><NavItem text={navItem}/>)}
      </ul>
    </nav>
  );
};
