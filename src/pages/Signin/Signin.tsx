import { useState } from 'react'
import { Main } from '../../components/styled/Main.styled'
import Content from './Content/Content'
import Modal from './Content/Modal'
import Footer from './Footer/Footer'

export default function Signin() {
  const [viewModal, setViewModal] = useState(false)
  return (
    <>
      {viewModal && <Modal displayModal={setViewModal} />}
      <Main bg={'#f0f2f5'}>
        <Content displayModal={setViewModal} />
      </Main>
      <Footer />
    </>
  )
}
