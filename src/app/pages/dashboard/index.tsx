import { useRef } from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const counterRef = useRef({ counter: 0 });

  return (
    <>
      <p>Dashboard</p>
      <Link to="/entrar">Entrar</Link>
      <p>Contador: {counterRef.current.counter}</p>
      <button onClick={() => counterRef.current.counter++} type="button">Somar</button>
      <button onClick={() => console.log(counterRef.current.counter)} type="button">Somar Console</button>
    </>
  );
};
