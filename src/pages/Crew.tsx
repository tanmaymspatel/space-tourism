import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { crewMembersData } from "../components/data";

function Crew() {
    const [crewMemberIndex, setCrewMemberIndex] = useState<number>(0);

    const activeCrewMember = crewMembersData[crewMemberIndex];
    return (
        <div className="container h-100 position-relative">
            <h3 className="heading fw-light">
                <span className="heading-index">02</span>
                <span className="text-uppercase text-light">Meet Your Crew</span>
            </h3>
            <div className="row text-light crew-row text-align">
                <div className="col crew-details-col">
                    <TransitionGroup>
                        <CSSTransition
                            timeout={600}
                            key={crewMemberIndex}
                            classNames={{
                                enter: "transition-enter",
                                enterActive: "transition-enter-active",
                                exit: "d-none",
                            }}
                        >
                            <div>
                                <h3 className="crew-position text-uppercase fw-light">{activeCrewMember?.position}</h3>
                                <h2 className="crew-name text-uppercase fw-light">{activeCrewMember?.name}</h2>
                                <p className="crew-description fw-light">{activeCrewMember?.description}</p>
                            </div>
                        </CSSTransition>
                    </TransitionGroup>
                    <div className="dot-container d-flex align-items-center">
                        {
                            crewMembersData.map((data, index) => {
                                return (
                                    <p className={`${crewMemberIndex === index ? "active" : ""} dot cursor-pointer`}
                                        onClick={() => setCrewMemberIndex(index)}
                                        key={data.id}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col">
                    <TransitionGroup>
                        <CSSTransition
                            timeout={600}
                            key={crewMemberIndex}
                            classNames={{
                                enter: "transition-enter",
                                enterActive: "transition-enter-active",
                                exit: "d-none",
                            }}
                        >
                            <img src={activeCrewMember?.image} alt={activeCrewMember?.name} className="crew-image" />
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </div>
        </div>
    )
};

export default Crew;
