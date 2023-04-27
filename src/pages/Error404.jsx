import Header from "../components/Header";
import Footer from '../components/Footer';
import Error from '../components/Error';

export default function Error404() {

	return (

		<div className="page">
			<div className='lead'>
				<Header/>
				<main>
					<Error/>
				</main>
			</div>
			<Footer/>
		</div>
	)
}