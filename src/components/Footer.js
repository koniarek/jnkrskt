import React from 'react'
import './Layout.js'
import './Footer.css'
import styled from '@emotion/styled'
import { FaCopyright } from 'react-icons/fa'
import { FaEnvelopeSquare } from 'react-icons/fa'
import Socials from './Socials'

const FooterWrap = styled.div`
    background: black;
    color: #fff;
    text-align: center;
    padding: 20px;
`

const SocialWrap = styled.div`
    max-width: 400px;
    margin: 0 auto;
    padding: 10px
`

const Footer = () => (
	<FooterWrap>
		<SocialWrap>
			<Socials />
		</SocialWrap>
		<span>
		    <FaEnvelopeSquare/> mailto:tedoendoce@gmail.com <br/>
		    | millennium | 51 1160 2202 0000 0002 6070 5913 | tedoendoce | junkierap | sekta | <br/>
                 </span>
		<p>
			<FaCopyright /> Copyright {new Date().getFullYear()}. junkierap.pl | All rights reserved. Developed by{' '}
			<a href="https://skwebarchitecture.com/">Szymon Koniarek</a>.
		</p>
	</FooterWrap>
)

export default Footer




