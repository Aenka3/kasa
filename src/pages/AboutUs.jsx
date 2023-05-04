import Header from "../components/Header";
import Footer from '../components/Footer';
import About from '../components/About';

import ScrollToTop from '../components/scroll/ScrollToTop';

export default function AboutUs() {

	return (
		
		<div className="page">
			<div className='lead'>
				<Header/>
				<main>
					<About/>					
				</main>
			</div>
			<Footer/>
			<ScrollToTop/>
		</div>
	)
}