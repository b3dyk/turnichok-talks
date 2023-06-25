import { useState } from 'react';
import { ItemInterface, TypeInterface } from '../interfaces';

export const useNavigation = (items: ItemInterface[], type: TypeInterface) => {
  const [dataItems, setDataItems] = useState(
    items.map((item) => ({ ...item }))
  );

  const onChangeSlide = (index: number | string) => () => {
    if (type === 'controlled') {
      setDataItems(
        dataItems.map((item) => ({ ...item, isActive: item.index === index }))
      );
    }

    if (type === 'uncontrolled') {
      setDataItems(
        dataItems.map((item) => {
          if (item.index === index) {
            return { ...item, isActive: !item.isActive };
          }

          return item;
        })
      );
    }
  };

  return {
    onChangeSlide,
    dataItems,
  };
};
