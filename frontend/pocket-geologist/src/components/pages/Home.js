import Table from "react-bootstrap/Table"
import Gallery from "components/common/Gallery";
import { Link } from "react-router-dom"
import Header from "components/common/Header";
import DisplaySearch from "./DisplaySearch";
import Weather from "./Weather";

function Home() {

    return (
        <div className="bg-danger">
            {
                localStorage.getItem('user-info') ?
                    <>
                        <Header />
                    </> :
                    <></>
            }
            <div className="landing-view col-sm-12 ">
                <br></br>
                <div className="text-div">
                    <h1 className="inner-landing">pocketGeologist</h1>
                    <br></br>
                    <h2 className="inner-landing-h2">The mineral database on the go</h2>
                </div>
                <Table className="col-sm-3" style={{backgroundColor:"transparent"}}>
                    <tr>
                        <td>
                            {
                                localStorage.getItem('user-info') ?
                                    <></> :
                                    <div className="" style={{backgroundColor:"transparent"}}>
                                        <p className="col-md-6 col-sm-12 text-light offset-md-3">
                                            Sign up for free and use our different search methods to navigate our mineral database.
                                            It's so easy to use that you can look for a mineral by simply typing its color in the
                                            keyword search and comparing. For those with a bit more knowledge, you can identify the
                                            mineral but doing tests and entering the results in the property search.

                                        </p>
                                        <Link to="/login" ><button className="btn btn-danger btn-home" style={{marginRight:"10px"}}>login</button></Link>
                                        <Link to="/register"><button className="btn btn-dark btn-home" style={{marginLeft:"10px"}}>Signup</button></Link>
                                    </div>
                            }
                        </td>
                    </tr>
                </Table>
            </div>
            <div>
                <DisplaySearch />
            </div>
            <Gallery />
            {
                                localStorage.getItem('user-info') ?
                                    <>
                                    <Weather />
                                    </> :
                                    <>
            <div className="container d-flex justify-content-center text-center jstfy">
                <section className="text-center row">
                    <div className="col-lg-6 col-md-12 mb">
            <div className="card bg-danger">
              <div className="card-body">
                <h3 className="card-title">Get Started</h3>
                <p>
                  <strong className="card-text">Join Us</strong>
                  </p>
                <Link to="/register"><button className="btn btn-dark btn-home">Signup</button></Link>
                <br />
              </div>
            </div>
          </div>
           <div className="col-lg-6 col-md-12 mb">
            <div className="card bg-danger">
              <div className="card-body">
                <p className="card-text center" style={{maxWidth:"400px"}}>
                    Are you a Geology intern? Maybe you are a student, or simply a mineral enthusiast.
                    Join us and access our extensive library of minerals.
                    If we don't have it we will add it soon.
                </p>
              </div>
            </div>
          </div>
        </section>
            </div>
            </>
            }

        </div>

    )

}

export default Home;