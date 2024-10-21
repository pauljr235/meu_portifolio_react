import styled from 'styled-components'

import { Props } from './index'

export const P = styled.p<Props>`
  font-size: 16px;
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  line-height: 22px;
  margin-top: 16px;
  margin-bottom: 16px;
`
