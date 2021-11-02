import React, { useContext } from 'react';
import ItemsContext from '../context/items-context';
import Item from './Item';

const ItemList = () => {
  const { items } = useContext(ItemsContext);

  return (
    <div className="items-container">
      <ul style={{'list-style-type':'none','padding-inline-start': '0'}}>
        {items.map((item) => (
          <li>
            <Item key={item} item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ItemList as default };
