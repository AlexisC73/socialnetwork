import {
  StyledFooter,
  StyledLanguageList,
  StyledList,
} from './styled/Footer.styled'
import { Wrapper } from '../../../components/styled/Wrapper.styled'
import { app } from '../../../services/app/myApp'

export default function Footer() {
  return (
    <StyledFooter>
      <Wrapper>
        <StyledLanguageList>
          <li>Français (France)</li>
          <li>English (US)</li>
          <li>Español</li>
          <li>Türkçe</li>
          <li>Português (Portugal)</li>
          <li>العربية</li>
          <li>Italiano</li>
          <li>Deutsch</li>
          <li>हिन्दी</li>
          <li>中文(简体)</li>
          <li>日本語</li>
          <div className='add'>+</div>
        </StyledLanguageList>
        <div className='separator'></div>
        <StyledList>
          <li>S'inscrire</li>
          <li>Se connecter</li>
          <li>Messenger</li>
          <li>{app.name} Lite</li>
          <li>Watch</li>
          <li>Lieux</li>
          <li>Jeux</li>
          <li>Marketplace</li>
          <li>{app.name} Pay</li>
          <li>Offres d'emploi</li>
          <li>Octopus</li>
          <li>Portail</li>
          <li>Mes Photos</li>
          <li>Bulletin</li>
          <li>Local</li>
          <li>Collectes de fonds</li>
          <li>Services</li>
          <li>Centre d'information sur les élections</li>
          <li>Groupes</li>
          <li>A propos</li>
          <li>Créer une publicité</li>
          <li>Créer une page</li>
          <li>Développeurs</li>
          <li>Emplois</li>
          <li>Confidentialité</li>
          <li>Cookies</li>
          <li>Conditions générales</li>
          <li>Aide</li>
        </StyledList>
        <p className='copyright'>{app.author} © 2021</p>
      </Wrapper>
    </StyledFooter>
  )
}
