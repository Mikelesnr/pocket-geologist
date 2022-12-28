import Header from "../common/Header"

function Contact() {
    return (
        <>
        <Header/>
        <div className="pdng-top pdng-top">
            <h1>Contact Us</h1>
        </div>
        <Header/>
        <div className="col-sm-6 offset-sm-3 pdng-top">
            <form action="mailto:thefingertipinformer@gmail.com" method="get" enctype="text/plain">
            <input type="text"  className="form-control" placeholder="name"/>
            <br></br>
            <input type="email"  className="form-control" placeholder="email"/>
            <br></br>
            <textarea type="text" className="form-control" placeholder="Enter text"/>
            <br></br>
            <input type="submit" className="btn btn-primary" name="submit" value="Send" />
            </form>
        </div>
  
        </>
    )
}

export default Contact;
