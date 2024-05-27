import React, { useEffect, useState } from 'react';

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
        <li className="nav_list_item">
          <button className="list_item_btn">Все темы</button>
        </li>
        <li className="nav_list_item">
          <button className="list_item_btn">Логика и мышление</button>
        </li>
        <li className="nav_list_item">
          <button className="list_item_btn">Загадки</button>
        </li>
        <li className="nav_list_item">
          <button className="list_item_btn">Головоломки</button>
        </li>
        <li className="nav_list_item">
          <button className="list_item_btn">Путешествия</button>
        </li>
      </ul>
    </nav>
  );
};
