import { useState } from "react";
import { destinationData } from "../components/data";

function Destination() {

    const [destIndex, setIndex] = useState<number>(0);
    const currentDestination = destinationData[destIndex];

    const destinationTabs = destinationData.map((data, index) => {
        return (
            <p className={`${destIndex === index ? "active" : ""} destination-link text-uppercase cursor-pointer`}
                onClick={() => setIndex(index)}
            >{data.title}</p>
        )
    })

    return (
        <div className="container h-100 d-flex align-items-center">
            <div className="row h-100 w-100 align-items-center">
                <div className="col image-col">
                    <h3 className="heading fw-light text-align">
                        <span className="heading-index">01</span>
                        <span className="text-uppercase text-light">Pick Your Destination</span>
                    </h3>
                    <figure className="image-container text-align">
                        <img src={currentDestination?.image} alt={currentDestination?.title} className="destination-image" />
                    </figure>
                </div>
                <div className="col destination-col text-light d-flex flex-column">
                    <div className="destination-header">
                        <nav className="d-flex align-items-center justify-content-between">
                            {destinationTabs}
                        </nav>
                    </div>
                    <div className="flex-grow-1 text-align">
                        <h2 className="destination-title text-uppercase fw-light">{currentDestination?.title}</h2>
                        <p className="destination-description">{currentDestination?.description}</p>
                        <div className="row destination-footer">
                            <div className="destination-footer-col">
                                <h6 className="footer-pre-heading fw-light text-uppercase">Avg. Distance</h6>
                                <h3 className="footer-heading fw-light">{currentDestination?.avgDistance}</h3>
                            </div>
                            <div className="destination-footer-col">
                                <h6 className="footer-pre-heading fw-light text-uppercase">Est. Travel Time</h6>
                                <h3 className="footer-heading fw-light">{currentDestination?.estTravelTime}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Destination;
