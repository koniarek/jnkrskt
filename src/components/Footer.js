import React from 'react'
import './Layout.js'
import './Footer.css'



export default () => (
    <footer className="footer">
	    <div className="container taCenter">
		    <div className="footerIcons">
			    <li><a href="https://www.facebook.com/tonciurap"><i class="fa fa-facebook fa-fw"></i></a></li>
			    <li><a href="https://www.youtube.com/channel/UC3EOoqNeN30lu00ExULB5uA"><i class="fa fa-youtube fa-fw"></i></a></li>
			    <li><a href="https://www.instagram.com/tedoendoce/?hl=pl"><i class="fa fa-instagram fa-fw"></i></a></li>
			    <li><a href="https://soundcloud.com/tonciu"><i class="fa fa-soundcloud fa-fw"></i></a></li>
		  </div>
        </div>
        <div className="container taCenter">
	    <span>
		    | MILLENIUM BANK : 51 1160 2202 0000 0002 6070 5913 | <br/>
		    tedoendoce@gmail.com <br/>
NA - ROZWÓJ, MIX WOKALI, PŁYTY, INWESTYCJE W SIEBIE, LEPSZY SPRZĘT, LEPSZE BRZMIENIE, ORGANIZACJĘ KONCERTÓW, DZIARY, MANDATY, ODWYKI, TERAPIE, SZLUGI, JEDZENIE, PICIE, PALIWO NA DOJAZDY NA PROGRAM METADONOWY, PCHANIE TEGO DO PRZODU I RKOTYKI  |
        </span>
        </div>
	    <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} @Tedoendoce Junkierap | All rights reserved. Developed by{' '}
          <a href="https://skwebarchitecture.com/">Szymon Koniarek</a>.
        </span>
      </div>
    </footer>
)
