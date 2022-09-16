import { useEffect, useMemo, useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEnter = () => {
    console.log(email, password);
  };

  //O useMemo só recuperará o valor memoizado quando o array receber uma atualização. Esta otimização ajuda a evitar cálculos caros em cada renderização.
  const emailLenght = useMemo(() => {
    console.log("executou");
    return email.length * 1000;
  }, [email.length]);
  useEffect(() => {
    if (window.confirm("Você é homem?")) {
      console.log("homem");
    } else {
      console.log("Mulher");
    }
  }, []);

  return (
    <form>
      <p>Quantidade de letras no email: {emailLenght}</p>
      <label>
        <span>Email</span>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <label>
        <span>Senha</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>

      <button type="button" onClick={handleEnter}>
        Entrar
      </button>
    </form>
  );
};
