import '../css/Footer.css';

import ScrollToTop from './scroll/ScrollToTop';

import logoFooter from '../img/logo_footer.svg';

export default function Footer() {

	return (

		<footer className='footer'>
			<img
				className='footer_logo'
				src={logoFooter}
				alt="Kasa - agence de location d'appartements entre particuliers"
				onClick={ScrollToTop}
			/>
			<p className='copyright'>© 2020 Kasa. All rights reserved</p>
		</footer>
	)
};