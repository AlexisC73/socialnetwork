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
        <img
          className='closeButton'
          src='https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png'
          alt='close signup modal'
          role='button'
          onClick={(e) => {
            handleBlur(e)
          }}
        />
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

          <p>
            En cliquant sur S’inscrire, vous acceptez nos{' '}
            <span>Conditions générales.</span>
            Découvrez comment nous recueillons, utilisons et partageons vos
            données en lisant notre{' '}
            <span>Politique d’utilisation des données</span> et comment nous
            utilisons les cookies et autres technologies similaires en
            consultant notre <span>Politique d’utilisation des cookies.</span>
            Vous recevrez peut-être des notifications par texto de notre part et
            vous pouvez à tout moment vous désabonner.
          </p>

          {/* TODO Finir le formulaire ! */}
          <button role='submit'>S'inscrire</button>
        </Form>
      </Signup>
    </StyledBackground>
  )
}
