import { useState } from "react";

function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email); // seta o email de acordo com o estado do email
  }

  function limparEmail(){
    setUserEmail('')
  }

  return (
    <div>
      <h2> Cadastre o seu e-mail:</h2>
      <form>
      <input
        type="email"
        placeholder="Digite o seu melhor e-mail"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" onClick={enviarEmail}>
        {" "}
        Enviar e-mail
      </button>
      {userEmail && ( // se tiver o userEmail, execute o bloco abaixo
          <div>
          <p>o e-mail do usuário é: {userEmail} </p>
          <button onClick={limparEmail}> Limpar E-mail</button>
        </div>
      )}
      </form>
    </div>
  )
}

export default Condicional
