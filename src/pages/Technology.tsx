import { useState } from "react";
import { techData } from "../components/data";

function Technology() {

    const [techIndex, setTechIndex] = useState<number>(0);

    const activeTechnology = techData[techIndex];

    return (
        <div className="container h-100 d-flex flex-column">
            <h3 className="heading fw-light">
                <span className="heading-index">03</span>
                <span className="text-uppercase text-light">Space Launch 101</span>
            </h3>
            <div className="row align-items-center flex-grow-1 technology-row">
                <div className="tech-col-1">
                    <div className="row tech-details-row text-align">
                        <div className="tech-detail-col-1">
                            <div className="tech-nav h-100 justify-content-center">
                                {techData.map((data, index) => {
                                    return <p className={`${techIndex === index ? "active" : ""} tech-link d-flex align-items-center justify-content-center cursor-pointer`}
                                        onClick={() => setTechIndex(index)}
                                        key={data.id}
                                    >{index + 1}</p>
                                })}
                            </div>
                        </div>
                        <div className="tech-detail-col-2">
                            <h4 className="tech-pre-heading text-uppercase fw-light">The Terminology...</h4>
                            <h2 className="tech-name text-uppercase text-light fw-light">{activeTechnology?.name}</h2>
                            <p className="tech-description fw-light">{activeTechnology?.description}</p>
                        </div>
                    </div>
                </div>
                <div className="tech-col-2">
                    <img src={activeTechnology?.imageSm} alt={activeTechnology?.name} className="tech-image show-sm" />
                    <img src={activeTechnology?.imageLg} alt={activeTechnology?.name} className="tech-image show-lg" />
                </div>
            </div>
        </div>
    )
};

export default Technology;
