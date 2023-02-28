function Home() {
    return (
        <section className="section h-100">
            <div className="container h-100 d-flex align-items-center">
                <div className="row h-100 align-items-center">
                    <div className="col text-light">
                        <h6 className="pre-title text-uppercase text-secondary fw-light text-align">So, you want to travel to</h6>
                        <h2 className="title text-uppercase fw-light text-align">Space</h2>
                        <p className="description text-secondary fw-light text-align">Let`s face it; if you want to go to space, you might as well genuinely go to
                            outer space and not hover kind of on the edge of it. Well sit back, and relax
                            because we`ll give you a truly out of this world experience!</p>
                    </div>
                    <div className="col col-explore d-flex justify-content-end">
                        <div className="d-flex align-items-center">
                            <div className="home-explore">
                                <p className="explore-text text-uppercase">Explore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Home;
