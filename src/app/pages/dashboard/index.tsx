import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { UserLoggedContext } from "../../shared/contexts";

export const Dashboard = () => {
  const counterRef = useRef({ counter: 0 });
  const { userName } = useContext(UserLoggedContext);

  return (
    <>
      <p>Dashboard</p>
      <p>{userName}</p>
      <Link to="/entrar">Entrar</Link>
      <p>Contador: {counterRef.current.counter}</p>
      <button onClick={() => counterRef.current.counter++} type="button">Somar</button>
      <button onClick={() => console.log(counterRef.current.counter)} type="button">Somar Console</button>
    </>
  );
};
