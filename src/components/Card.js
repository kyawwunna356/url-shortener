import React from 'react'
import { useTheme } from 'styled-components'
import { Button } from './styled/Button.styled'
import { StyledCard } from './styled/StyledCard.styled'
import { ShortLink } from './styled/StyledCard.styled'
import {CopyToClipboard} from 'react-copy-to-clipboard';

function Card({url,short,copied,handleCopied}) {
  const intro = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
      }
  }
    const theme = useTheme('theme');
  return (
    <StyledCard variants={intro} initial="hidden" animate="visible">
        <span>
            {url}
        </span>
        <ShortLink>
            <p>{short}</p>
            <CopyToClipboard
            text={short}
            onCopy={handleCopied}
        >
                <Button color={theme.color.button}>{copied ? "Copied" : "Copy"}</Button>
            </CopyToClipboard>
        </ShortLink>
    </StyledCard>
  )
}

export default Card