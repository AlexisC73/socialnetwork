import Header from '../../components/Header/Header'
import { Main } from '../../components/styled/Main.styled'
import {
  ColumnStyled,
  ContentStyled,
  InputWithImageContent,
  NewPostFormStyled,
} from './components/Home.styled'

import Image from '../../components/icons/Image'
import Tag from '../../components/icons/Tag'
import Location from '../../components/icons/Location'
import Emoticon from '../../components/icons/Emoticon'

export default function Test() {
  return (
    <>
      <Header />
      <Main bg='e5e5e5'>
        <ContentStyled>
          <ColumnStyled width='20%'></ColumnStyled>
          <ColumnStyled width='60%'>
            <NewPostFormStyled>
              <div>
                <img src='https://static.vecteezy.com/ti/vecteur-libre/p1/1840612-image-profil-icon-male-icon-human-or-people-sign-and-symbol-vector-gratuit-vectoriel.jpg' />
                <textarea
                  rows={3}
                  name='newPost'
                  id='newPost'
                  placeholder='Vous souhaitez dire quelque chose ?'
                />
              </div>
              <div className='separator'></div>
              <InputWithImageContent>
                <div className='input-with-image'>
                  <label htmlFor='image'>
                    <Image color='orange' />
                    Photo ou vidéo
                  </label>
                  <input type={'file'} name='image' id='image' />
                </div>
                <div className='input-with-image'>
                  <label htmlFor='tag'>
                    <Tag color='blue' />
                    Tag
                  </label>
                  <input type={'text'} name='tag' id='tag' />
                </div>
                <div className='input-with-image'>
                  <label htmlFor='location'>
                    <Location color='green' />
                    Location
                  </label>
                  <input type={'text'} name='location' id='location' />
                </div>
                <div className='input-with-image'>
                  <label htmlFor='emoticon'>
                    <Emoticon color='#dbc835' />
                    Emoticon
                  </label>
                  <input type={'text'} name='emoticon' id='emoticon' />
                </div>
                <button type='submit'>Partager</button>
              </InputWithImageContent>
            </NewPostFormStyled>
          </ColumnStyled>
          <ColumnStyled width='20%'></ColumnStyled>
        </ContentStyled>
      </Main>
    </>
  )
}
