import React from 'react'
import { Signup, StyledBackground, Line, Form } from './styled/Modal.styled'

interface ModalProps {
  displayModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal({ displayModal }: ModalProps) {
  const handleBlur = (
    e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault()
    displayModal(false)
  }
  return (
    <StyledBackground onClick={(e) => handleBlur(e)}>
      <Signup
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <h2>S'inscrire</h2>
        <p>C'est rapide et facile.</p>
        <div className='separator'></div>
        <Form>
          <Line>
            <input
              type='text'
              placeholder='Prénom'
              name='firstname'
              id='firstname'
            />
            <input
              type='text'
              placeholder='Nom de famille'
              name='lastname'
              id='lastname'
            />
          </Line>
          <input
            type='mail'
            placeholder='Adresse email'
            name='mail'
            id='mail'
          />
          <input
            type='password'
            placeholder='Mot de passe'
            name='password'
            id='password'
          />

          {/* TODO Finir le formulaire ! */}
        </Form>
      </Signup>
    </StyledBackground>
  )
}
