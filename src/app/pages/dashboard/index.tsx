import React, { useCallback, useState } from "react";

export const Dashboard = () => {
  const [list, setList] = useState<string[]>([]);
  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) =>{
    if(e.key === "Enter"){
      if(e.currentTarget.value.trim().length === 0) {
        return
      }
      else{
        const value = e.currentTarget.value
        e.currentTarget.value = "";
        setList((oldList) => {
          return [...oldList, value]
        })
      }
    }
  }, [])


  return (
    <>
      <p>Lista</p>
      <input type="text" 
        onKeyDown={handleInputKeyDown}
      />
      <ul>
        {list.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </>
  );
};
