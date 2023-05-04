import { useParams } from "react-router-dom";

import "../css/House.css";

import datas from "../datas/HousingDatas.js";

import Error from "./Error";

import Slider from "./Slider";
import Collapse from "./Collapse";

import redStar from "../img/red_star.svg";
import greyStar from "../img/grey_star.svg";

export default function House() {
  const idHouse = useParams().id;
  const currentHouse = datas.find((data) => data.id === idHouse);

  if (!!currentHouse) {
    return (
      <div className="lodge">
        <section>
          <Slider imageSlider={currentHouse.pictures} />
        </section>
        <section>
          <div className="lodge_content">
            <div className="lodge_content_infos">
              <h1 className="lodge_content_infos_title">
                {currentHouse.title}
              </h1>

              <p className="lodge_content_infos_location">
                {currentHouse.location}
              </p>

              <div className="lodge_content_infos_tags">
                {currentHouse.tags.map((tag, index) => {
                  return (
                    <button key={index}>
                      <span className="lodge_content_infos_tags_tag">
                        {tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="lodge_content_host">
              <div className="lodge_content_host_infos">
                <div className="lodge_content_host_infos_names">
                  <span className="lodge_content_host_infos_names_name">
                    {currentHouse.host.name.split(" ")[0]}
                  </span>
                  <span className="lodge_content_host_infos_names_name">
                    {currentHouse.host.name.split(" ")[1]}
                  </span>
                </div>
                <img
                  className="lodge_content_host_infos_img"
                  src={currentHouse.host.picture}
                  alt="host of this accomodation"
                />
              </div>

              <div className="lodge_content_host_stars">
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <img
                      className="lodge_content_host_stars_img"
                      key={index}
                      src={
                        ratingValue <= currentHouse.rating ? redStar : greyStar
                      }
                      alt="star"
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lodge_collapse">
            <div className="lodge_collapse_item">
              <Collapse
                title={"Description"}
                content={currentHouse.description}
              />
            </div>

            <div className="lodge_collapse_item">
              <Collapse
                title={"Équipements"}
                content={currentHouse.equipments}
              />
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return (
      <>
        <Error/>
      </>
    );
  }
}
