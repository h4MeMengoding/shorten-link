import { useColorModeValue } from '@chakra-ui/react'

import { LayoutAuth } from 'components/Layout/LayoutAuth'
import { AuthSignIn } from 'components/AuthSignIn'
import { MetaHead } from 'components/MetaHead/MetaHead'

function Login() {
  const bgColor = useColorModeValue('gray.50', 'gray.800')

  return (
    <LayoutAuth minH={'100vh'} bg={bgColor}>
      <MetaHead
        title="Masuk/Login | Hame Shorten"
        description="Sudah punya Akun di Hame Shorten? Yuk login dan gunakan layanan dari Hame Shorten untuk membantu memepercantik tautan Anda sekarang juga."
      />
      <AuthSignIn />
    </LayoutAuth>
  )
}

export default Login

export { getServerSideProps } from '../../Chakra'
