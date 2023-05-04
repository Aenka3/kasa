import Header from '../components/Header';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

import ScrollToTop from '../components/scroll/ScrollToTop';

export default function Home() {

	return (

		<div className='page'>
			<div className='lead'>
				<Header />
				<main>
					<section>
						<Banner />
					</section>
					<section>
						<Gallery />
					</section>
				</main>
			</div>
			<Footer />
			<ScrollToTop/>
		</div>
	);
};