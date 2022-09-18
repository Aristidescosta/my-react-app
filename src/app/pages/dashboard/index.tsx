import React, { useCallback, useState } from "react";

interface ITasks {
  id: number;
  title: string;
  isCompleted: boolean;
}

export const Dashboard = () => {
  const [list, setList] = useState<ITasks[]>([]);
  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback((e) => {
      if (e.key === "Enter") {
        if (e.currentTarget.value.trim().length === 0) return;

        const value = e.currentTarget.value;

        e.currentTarget.value = "";

        setList((oldList) => {
          if (oldList.some((listItem) => listItem.title === value))
            return oldList;
          return [
            ...oldList,
            {
              id: oldList.length,
              title: e.currentTarget.value,
              isCompleted: false,
            },
          ];
        });
      }
    }, []);

  return (
    <>
      <p>Lista</p>
      <input type="text" onKeyDown={handleInputKeyDown} />
      <p>{list.filter((listItem) => listItem.isCompleted).length}</p>
      <ul>
        {list.map((listItem, index) => {
          return (
            <li key={listItem.id}>
              <input
                type="checkbox"
                checked={listItem.isCompleted}
                onChange={() => {
                  setList((oldList) => {
                    return oldList.map((oldListItem) => {
                      const newisCompleted =
                        oldListItem.title === listItem.title
                          ? !oldListItem.isCompleted
                          : oldListItem.isCompleted;
                      return {
                        ...oldListItem,
                        isCompleted: newisCompleted,
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
