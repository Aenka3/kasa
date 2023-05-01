import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import '../css/Banner.css';

export default function Banner() {

	const [home, setHome] = useState(true);

	const currentLocation = useLocation().pathname;
	
	useEffect(() => {
		
		if(currentLocation === '/aboutus'){
			setHome(false)
		}
		// eslint-disable-next-line
	}, [currentLocation])

	return (

		<div className={home
							 ? 'banner banner_home'
							 : 'banner banner_about'}
		>
			{home && <h1 className='banner_title'>Chez vous, partout et ailleurs</h1>}
		</div>
	)
}