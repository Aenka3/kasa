import { Link } from 'react-router-dom';

import '../css/Error.css'

export default function Error() {

	return (

        <div className="error">
            <div className="error_infos">
                <h1 className='error_title'>404</h1>
                <p className='error_content'>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <Link className='error_return' to='/'><p>Retourner sur la page d'accueil</p></Link>
        </div>
	)
}

                