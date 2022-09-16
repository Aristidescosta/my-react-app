import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEnter = useCallback(() => {
    console.log(email, password);
    if (inputPasswordRef.current) {
      inputPasswordRef.current.focus();
    }
  }, [email, password]);

  //O useMemo só recuperará o valor memorizado quando o array receber uma atualização. Esta otimização ajuda a evitar cálculos caros em cada renderização.
  const emailLength = useMemo(() => {
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
      <p>Quantidade de letras no email: {emailLength}</p>
      <label>
        <span>Email</span>
        <input
          type="text"
          onKeyDown={(e) =>
            e.key === "Enter" ? inputPasswordRef.current?.focus() : undefined
          }
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
          ref={inputPasswordRef}
        />
      </label>

      <button type="button" onClick={handleEnter}>
        Entrar
      </button>
    </form>
  );
};
