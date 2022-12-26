import Table from "react-bootstrap/Table"
import Gallery from "components/common/Gallery";
import {Link} from "react-router-dom"
import Header from "components/common/Header";
import DisplaySearch from "./DisplaySearch";

function Home() {

    return(
        <div className="bg-danger">
            {
                localStorage.getItem('user-info') ?
                    <>
                    <Header/>
                    </> :
                    <></>
            }
        <div className="landing-view col-sm-12 pdng-top'">
            <br></br>
            <div className="text-div">
            <h1 className="inner-landing">pocketGeologist</h1>
            <br></br>
            <h2 className="inner-landing-h2">The mineral database on the go</h2>
            </div>
            <Table className="col-sm-3">
                <tr>
                    <td>
                        {
                                localStorage.getItem('user-info') ?
                                    <></> :
                                    <>
                                        <Link to="/login" ><button className="btn btn-danger btn-home">login</button></Link>
                                        <Link to="/register"><button className="btn btn-dark btn-home">Signup</button></Link>
                                    </>
                            }
                    </td>
                </tr>
            </Table>
        </div>
        <div>
            <DisplaySearch/>
        </div>
        <Gallery />
        </div>
    )

}

export default Home;