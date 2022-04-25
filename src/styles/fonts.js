import React from 'react'
import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
        @font-face {
            font-family: SpaceMono-Regular;
            src: url("./fonts/Space_Mono/SpaceMono-Regular.ttf")
        }
        
        @font-face {
            font-family: SpaceMono-Bold;
            src: url("./fonts/Space_Mono/SpaceMono-Bold.ttf")
        }
      `}
  />
)

export default Fonts