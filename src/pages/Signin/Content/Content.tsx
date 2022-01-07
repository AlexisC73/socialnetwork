import { StyledContent, Title, Connect, Form } from './styled/Content.styled'
import { app } from '../../../services/app/myApp'
import React, { useContext, useState } from 'react'
import { gql, useLazyQuery } from '@apollo/client'
import AuthContext from '../../../services/auth/Auth'

interface ContentProps {
  displayModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Content({ displayModal }: ContentProps) {
  const auth = useContext(AuthContext)

  const [formInput, setFormInput] = useState<{
    email: string
    password: string
  }>({
    email: '',
    password: '',
  })

  const SIGNIN = gql`
    query signin($user: ConnectInput!) {
      signin(user: $user) {
        token
      }
    }
  `

  const [connect] = useLazyQuery(SIGNIN, {
    onCompleted: (data) => {
      if (data.signin.token) {
        localStorage.token = data.signin.token
        auth.setToken(data.signin.token)
      }
    },
  })

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    displayModal(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const state = { ...formInput }
    if (e.target.id) {
      const chan: 'email' | 'password' = e.target.id as 'email' | 'password'
      state[chan] = e.target.value
      setFormInput(state)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { email, password } = formInput
    connect({ variables: { user: { email, password } } })
  }

  return (
    <div>
      <StyledContent>
        <Title>
          <h1>{app.name.toLowerCase()}</h1>
          <p>
            Avec {app.name}, partagez et restez en contact avec votre entourage.
          </p>
        </Title>
        <Connect>
          <Form
            onSubmit={(e) => {
              handleSubmit(e)
            }}
          >
            <input
              type={'email'}
              name='email'
              id='email'
              placeholder='Adresse e-mail'
              value={formInput.email}
              onChange={(e) => {
                handleChange(e)
              }}
            />
            <input
              type={'password'}
              name='password'
              id='password'
              placeholder='Mot de passe'
              value={formInput.password}
              onChange={(e) => {
                handleChange(e)
              }}
            />
            <button type='submit'>Se connecter</button>
            <a href='#'>Mot de passe oublié ?</a>
            {/* TODO a changer */}
            <div className='separator'></div>
            <button onClick={(e) => handleClick(e)}>
              Créer nouveau compte
            </button>
          </Form>
          <p>
            <strong>Créer une Page</strong> pour une célébrité, une marque ou
            une entreprise.
          </p>
        </Connect>
      </StyledContent>
    </div>
  )
}
