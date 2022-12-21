import Header from "./Header"
// import Weather from "./Weather"

function Gallery() {
    return (
        <>
        <Header/>
        <div className="pdng-top">
            {/* <div>
                <Weather/>
            </div> */}
            <div className=" album py-5 bg-light">
        <h2>Gallery</h2>
        <div className="container">

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                    <div className="card shadow-sm">
                        <img loading="lazy" src="images/obsidian2.jpg" alt="obsidian"/>

                        <div className="card-body">
                            <p className="card-text">This is a type of volcanic glass. It is none crystalline due to rapid
                                cooling during its formation. It is extrusive igneous.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <small className="text-muted"> <a href="http://www.mindat.org/min-8519.html" target="_blank"
                                        rel="noopener noreferrer">obsidian</a> </small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-sm">
                        <img loading="lazy" src="images/amethyst(1).jpg" alt="amethyst"/>

                        <div className="card-body">
                            <p className="card-text">Amethyst is a purple variety of quartz. Quartz is normally clear, but
                                it can become colored due to impurities.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <small className="text-muted"> <a href="https://www.mindat.org/min-198.htmll"
                                        target="_blank" rel="noopener noreferrer">amethyst</a> </small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-sm">
                        <img loading="lazy" src="images/quartz.jpg" alt="quartz"/>

                        <div className="card-body">
                            <p className="card-text">Quartz is the most abundant minerals on the earth’s surface. The
                                variety in the picture is called rock crystal.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <small className="text-muted"><a href="https://www.mindat.org/min-3337.html" target="_blank"
                                        rel="noopener noreferrer">quartz</a></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card shadow-sm">
                        <img loading="lazy" src="images/feldspar2.jpg" alt="feldspar"/>

                        <div className="card-body">
                            <p className="card-text">Feldspars are a group of rock-forming aluminium tectosilicate minerals.
                                The variety in the image is plagioclase.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <small className="text-muted"><a href="https://www.mindat.org/min-1624.html" target="_blank"
                                        rel="noopener noreferrer">feldspar</a></small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-sm">
                        <img loading="lazy" src="images/biotite2.jpg" alt="biotite"/>

                        <div className="card-body">
                            <p className="card-text">Biotite is a dark mineral from the mica group. It is commonly found in
                                igneous rocks or in metamorphic rocks.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <small className="text-muted"><a href="https://www.mindat.org/min-677.html" target="_blank"
                                        rel="noopener noreferrer">biotite</a></small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-sm">
                        <img loading="lazy" src="images/galena2.jpg" alt="galena"/>

                        <div className="card-body">
                            <p className="card-text">This is a lead sulfide mineral. It is a relatively heavy mineral which
                                is the primary ore for lead around the world.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <small className="text-muted"><a href="https://www.mindat.org/min-1641.html" target="_blank"
                                        rel="noopener noreferrer">galena</a></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card shadow-sm">
                        <img loading="lazy" src="images/sandstone2.jpg" alt="sandstone"/>

                        <div className="card-body">
                            <p className="card-text">Sandstone is a clastic sedimentary rock primarily composed of quartz
                                and other silicate minerals such as feldspar.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <small className="text-muted"><a href="https://www.mindat.org/min-49438.html"
                                        target="_blank" rel="noopener noreferrer">sandstone</a></small>
                            </div>
                        </div>
                    </div>Name
                </div>
                <div className="col">
                    <div className="card shadow-sm">
                        <img loading="lazy" src="images/marble(2).jpg" alt="marble"/>

                        <div className="card-body">
                            <p className="card-text">Marble is a metamorphic rock formed from exposing limestone to high
                                temperature and pressure.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <small className="text-muted"><a href="https://www.mindat.org/min-9507.html" target="_blank"
                                        rel="noopener noreferrer">marble</a></small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-sm">
                        <img loading="lazy" src="images/gneiss2.jpg" alt="gneiss"/>

                        <div className="card-body">
                            <p className="card-text">Gneiss is a high-grade metamorphic rock formed from high-grade <a
                                    href="https://www.mindat.org/glossary/metamorphism" target="_blank"
                                    rel="noopener noreferrer">metamorphism</a> of
                                granite or sedimentary rock.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <small className="text-muted"><a href="https://www.mindat.org/min-48629.html"
                                        target="_blank" rel="noopener noreferrer">gneiss</a></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
        </>
    )
}

export default Gallery
