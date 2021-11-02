import React, { useContext } from 'react';
import ItemsContext from '../context/items-context';

const Item = ({ item }) => {
  const { itemsDispatch } = useContext(ItemsContext);

  return (
    <div>
     <input type="checkbox"
        onClick={() =>
          itemsDispatch({ type: 'REMOVE_ITEM', itemToBeDeleted: item })
        }
      />
      <span>{item}</span>

    </div>
  );
};

export { Item as default };
