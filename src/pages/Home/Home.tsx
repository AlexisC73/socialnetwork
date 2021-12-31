import { Main } from '../../components/styled/Main.styled'
import Content from './Content/Content'
import Footer from './Footer/Footer'

export default function Home() {
  return (
    <>
      <Main bg={'#f0f2f5'}>
        <Content />
      </Main>
      <Footer />
    </>
  )
}
