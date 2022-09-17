import React, { useCallback, useState } from "react";

interface IList {
  title: string;
  isSelect: boolean;
}

export const Dashboard = () => {
  const [list, setList] = useState<IList[]>([]);
  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback((e) => {
      if (e.key === "Enter") {
        if (e.currentTarget.value.trim().length === 0) return;

        const value = {
          title: e.currentTarget.value,
          isSelect: false,
        };

        e.currentTarget.value = "";

        setList((oldList) => {
          if (oldList.some((listItem) => listItem.title === value.title))
            return oldList;
          return [...oldList, value];
        });
      }
    }, []);

  return (
    <>
      <p>Lista</p>
      <input type="text" onKeyDown={handleInputKeyDown} />
      <p>{list.filter((listItem) => listItem.isSelect).length}</p>
      <ul>
        {list.map((listItem, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                checked={listItem.isSelect}
                onChange={() => {
                  setList((oldList) => {
                    return oldList.map((oldListItem) => {
                      const newIsSelect =
                        oldListItem.title === listItem.title
                          ? !oldListItem.isSelect
                          : oldListItem.isSelect;
                      return {
                        ...oldListItem,
                        isSelect: newIsSelect,
                      };
                    });
                  });
                }}
              />
              {listItem.title}
            </li>
          );
        })}
      </ul>
    </>
  );
};
