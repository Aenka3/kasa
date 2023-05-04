import { Link } from 'react-router-dom';

import '../css/Card.css';

export default function Card({id, title, cover}) {

	return (

			<Link
				to={`/housing/${id}`}
				className="card"
			>
				<img className='card_img' src={cover} alt={title} />
				<h2 className='card_h2'>{title}</h2>
			</Link>
	)
};