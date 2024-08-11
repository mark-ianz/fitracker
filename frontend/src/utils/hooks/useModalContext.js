import { useContext } from 'react'
import { ModalContext } from '../context/ModalProvider'

const useModalContext = () => {
  return useContext (ModalContext);
}

export default useModalContext;