import { useState } from "react";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { destinationData } from "../components/data";

function Destination() {

    const [destIndex, setIndex] = useState<number>(0);
    const currentDestination = destinationData[destIndex];

    const destinationTabs = destinationData.map((data, index) => {
        return (
            <p className={`${destIndex === index ? "active" : ""} destination-link text-uppercase cursor-pointer`}
                onClick={() => setIndex(index)}
                key={data.id}
            >{data.title}</p>
        )
    })

    return (
        <section className="section h-100">
            <div className="container h-100 d-flex align-items-center">
                <div className="row h-100 w-100 align-items-center">
                    <div className="col image-col">
                        <h3 className="heading fw-light">
                            <span className="heading-index">01</span>
                            <span className="text-uppercase text-light">Pick Your Destination</span>
                        </h3>
                        <TransitionGroup>
                            <CSSTransition
                                timeout={600}
                                key={destIndex}
                                classNames={{
                                    enter: "transition-enter",
                                    enterActive: "transition-enter-active",
                                    exit: "d-none",
                                }}
                            >
                                <figure className="image-container text-align">
                                    <img src={currentDestination?.image} alt={currentDestination?.title} className="destination-image" />
                                </figure>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                    <div className="col destination-col text-light d-flex flex-column">
                        <div className="destination-header">
                            <nav className="d-flex align-items-center justify-content-between">
                                {destinationTabs}
                            </nav>
                        </div>
                        <TransitionGroup>
                            <CSSTransition
                                timeout={600}
                                key={destIndex}
                                classNames={{
                                    enter: "transition-enter",
                                    enterActive: "transition-enter-active",
                                    exit: "d-none",
                                }}
                            >
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
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Destination;
