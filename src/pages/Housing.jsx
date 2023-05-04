import Header from '../components/Header';
import House from '../components/House';
import Footer from '../components/Footer';

import ScrollToTop from '../components/scroll/ScrollToTop';

export default function Housing() {
	return (
		<div className='page'>
			<div className='lead'>
				<Header/>
				<main>
					<House/>
				</main>
			</div>
			<Footer/>
			<ScrollToTop/>
		</div>
	)
}