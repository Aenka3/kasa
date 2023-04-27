import Header from '../components/Header';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

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
		</div>
	);
};