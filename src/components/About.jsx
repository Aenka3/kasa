import '../css/About.css';

import datas from '../datas/AboutDatas';

import Banner from './Banner';
import Collapse from './Collapse';

export default function About() {

	return (

        <div>
            <section>
                <Banner/>
            </section>
            <section>
                <div className='about'>
                    {datas.map(data => {
                        return (
                            <div key={data.id} className="about_collapse">
                                <Collapse title={data.title} content={data.content}/>
                            </div>
                        )}
                    )}
                </div>
            </section>
        </div>
	)
}

