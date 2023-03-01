import { useState } from "react";

import { crewMembersData } from "../components/data";

function Crew() {
    const [crewMemberIndex, setCrewMemberIndex] = useState<number>(0);

    const activeCrewMember = crewMembersData[crewMemberIndex];
    return (
        <div className="container h-100 position-relative crew-container">
            <h3 className="heading fw-light">
                <span className="heading-index">02</span>
                <span className="text-uppercase text-light">Meet Your Crew</span>
            </h3>
            <div className="row text-light crew-row text-align">
                <div className="col crew-details-col">
                    <h3 className="crew-position text-uppercase fw-light">{activeCrewMember?.position}</h3>
                    <h2 className="crew-name text-uppercase fw-light">{activeCrewMember?.name}</h2>
                    <p className="crew-description fw-light">{activeCrewMember?.description}</p>
                    <div className="dot-container d-flex align-items-center">
                        {
                            crewMembersData.map((data, index) => {
                                return (
                                    <p className={`${crewMemberIndex === index ? "active" : ""} dot cursor-pointer`}
                                        onClick={() => setCrewMemberIndex(index)}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col">
                    <img src={activeCrewMember?.image} alt={activeCrewMember?.name} className="crew-image" />
                </div>
            </div>
        </div>
    )
};

export default Crew;
