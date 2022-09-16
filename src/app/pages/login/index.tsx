import { useNavigate } from "react-router-dom"

export const Login = () => {
	const navigate = useNavigate()
	const handleClick = () =>{
		navigate("/pagina-inicial")
	}

  return (
    <>
      <div>Login</div>
      <button onClick={handleClick}>Voltar a página inicial</button>
    </>
  );
};
