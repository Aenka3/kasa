import Header from '../components/Header';
import House from '../components/House';
import Footer from '../components/Footer';

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
		</div>
	)
}