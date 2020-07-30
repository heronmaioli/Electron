import React, { useState, useEffect } from 'react'
import { Background, LoginBox, ErrMsg } from './styles'
import { useHistory } from 'react-router-dom'
import api from '../../Services/Api'

// import { Container } from './styles';

export default function Login () {
  const [user, setUser] = useState(false)
  const [pass, setPass] = useState('')
  const [valid, setValid] = useState(true)
  const history = useHistory()

  const handleUser = e => {
    setUser(e.target.value)
  }

  const handlePass = e => {
    setPass(e.target.value)
  }

  const handleLogin = async () => {
    const response = await api.post('/login', {
      Usuario: user,
      Senha: pass
    })

    if (response.data === false) {
      return setValid(false), setPass('')
    }

    return history.push('/home')
  }

  return (
    <Background>
      <LoginBox>
        <h1>Seja bem vindo!</h1>
        <input placeholder='Login' onChange={handleUser} />
        <input
          placeholder='Senha'
          type='password'
          onChange={handlePass}
          value={pass}
        />
        {!valid && <ErrMsg>Usuário ou senha incorretas!</ErrMsg>}

        <button onClick={() => handleLogin()}>Entrar</button>
        <a href='#'>Esqueci a senha</a>
        <div>HR Soluções empresariais.</div>
      </LoginBox>
    </Background>
  )
}
