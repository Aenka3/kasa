import '../css/Gallery.css';

import datas from '../datas/HousingDatas';

import Card from './Card';

export default function Gallery() {

    return (
        
        <div className='gallery'>
            {datas.map(data => {

                return (

                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })};
        </div>
    )
};