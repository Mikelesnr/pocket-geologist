import Header from "../common/Header";
import Table from "react-bootstrap/Table"

function Info() {
    
    return (
        <>
        <Header/>
        <div className="pdng-top mb">
            <h1>Information Page</h1>
            <h2>Mineral Tests</h2>
        <div className="container">
            <h3>streak test</h3>
            <br/>
            <img className="mb" src="http://localhost:8000/images/xVW15pZKmuWy5AEPJoK9IwNwyqbVDhWUCRtWT9xj.jpg" alt="streak test"></img>
            <br/>
            <p className="col-sm-6 offset-3 text-light">
                
            </p>
        </div>
        </div>
        </>
    )
}

export default Info;