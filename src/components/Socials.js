import React from 'react'
import styled from '@emotion/styled'
import './Layout.js'
import { FaInstagram, FaFacebookSquare, FaYoutubeSquare, FaSoundcloud } from 'react-icons/fa'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const SocialLink = styled.a`
  color: #fff;
  font-size: 30px;
  text-align: center;
  &:hover {
    filter: brightness(70%);
  }
`

export default function Socials() {
	return (
		<Wrapper>
			<SocialLink href="https://www.facebook.com/tonciujunkierap/" target="blank" rel="noopener noreferrer">
				<FaFacebookSquare />
			</SocialLink>

			<SocialLink href="https://www.youtube.com/channel/UC3EOoqNeN30lu00ExULB5uA" target="blank" rel="noopener noreferrer">
				<FaYoutubeSquare  />
			</SocialLink>

			<SocialLink href="https://www.instagram.com/tedoendoce/?hl=pl" target="blank" rel="noopener noreferrer">
				<FaInstagram  />
			</SocialLink>

				<SocialLink href="https://soundcloud.com/tonciu" target="blank" rel="noopener noreferrer">
					<FaSoundcloud  />
			</SocialLink>
		</Wrapper>
	)
}
