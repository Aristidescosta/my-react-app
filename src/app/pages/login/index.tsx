import { useCallback, useMemo, useRef, useState } from "react";

import { InputLogin } from "./components/inputLogin";
import { ButtonLogin } from "./components/buttonLogin"
import { useUserLogged } from "../../shared/hooks";

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const { userName } = useUserLogged();

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

  return (
    <form>
      <p>Quantidade de letras no email: {emailLength}</p>
      <p>{userName}</p>
      <InputLogin
        label="Email"
        type="text"
        value={email}
        onChange={(newValue) => setEmail(newValue)}
        onPressEnter={() => inputPasswordRef.current?.focus()}
      />

      <InputLogin
        label="Senha"
        type="password"
        value={password}
				ref={inputPasswordRef}
        onChange={(newValue) => setPassword(newValue)}
      />
      {/* <button type="button" onClick={handleEnter}>
        Entrar
      </button> */}
			<ButtonLogin type="button" onClick={handleEnter}>Entrar</ButtonLogin>
    </form>
  );
};
