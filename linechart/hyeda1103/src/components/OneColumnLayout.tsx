import { ReactNode } from 'react'
import styled from 'styled-components'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

interface Props {
  children: ReactNode
}

function OneColumnLayout({ children }: Props) {
  return (
    <Root>
      {children}    
    </Root>
  )
}

export default OneColumnLayout
