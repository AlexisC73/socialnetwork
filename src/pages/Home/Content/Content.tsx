import { StyledContent, Title, Connect, Form } from './styled/Content.styled'
import { app } from '../../../services/app/myApp'

export default function Content() {
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
            <button
              onClick={(e) => {
                console.log('clic')
              }}
            >
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
