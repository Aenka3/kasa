import Banner from '../components/Banner';
import Gallery from '../components/Gallery';

import ScrollToTop from '../components/scroll/ScrollToTop';

export default function Home() {

	return (

		<>
			<section>
				<Banner />
			</section>
			<section>
				<Gallery />
			</section>
			<ScrollToTop/>
		</>
	);
};