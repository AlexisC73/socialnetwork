import { StyledContent, Title, Connect, Form } from './styled/Content.styled'
import { app } from '../../../services/app/myApp'
import React from 'react'

interface ContentProps {
  displayModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Content({ displayModal }: ContentProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    displayModal(true)
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
          <Form>
            <input
              type={'email'}
              name='email'
              id='email'
              placeholder='Adresse e-mail'
            />
            <input
              type={'password'}
              name='password'
              id='password'
              placeholder='Mot de passe'
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
