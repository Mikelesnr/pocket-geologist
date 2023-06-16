import Header from "../common/Header";

function About() {
    
    return (
        <>
        <Header/>
        <div className="pdng-top">
            <h1>About</h1>
            <main className="mt-5">
      <div className="container mb">
        {/* <!--Section: Content--> */}
        <section>
          <div className="row">
            <div className="col-md-6 gx-5 mb-4">
              <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/slides/031.jpg" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor:"#FBFBFB"}}></div>
                </a>
              </div>
            </div>

            <div className="col-md-6 gx-5 mb-4">
              <h4><strong>Overview</strong></h4>
              <p className="text-muted">
                This site is a geology tool used for mineral Identification. 
                  There are two types of searches, one is the key word search 
                  and the other is the advanced search. The advanced search 
                  takes in parameters from tests done on the mineral and gives 
                  a result based on the number of matching properties.
              </p>
              <h4><strong>About Me</strong></h4>
              <p className="text-muted">
                I am a Geologist turned software developer. 
                      I always had a challenge in college when I 
                      needed a tool to help me study for mineralogy 
                      exams and something I can use on the go in the 
                      field to help with mineral identification. A 
                      second opinion so to speak. For this reason I 
                      decided to build my own tool with my newly 
                      acquired software developer skills. This is a 
                      really fun project for me because it is almost 
                      like a tool built by the end user.
              </p>
            </div>
          </div>
        </section>
        {/* <!--Section: Content--> */}

        <hr className="my-5" />

        {/* <!--Section: Content--> */}
        <section className="text-center">
          <h4 className="mb-5"><strong>About Project</strong></h4>

          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img
                    src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                    className="img-fluid"
                  />
                  <a href="#!">
                    <div className="mask" style={{backgroundColor:"#FBFBFB"}}></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Project Outline</h5>
                  <p className="card-text">
                    This project is built and maintained by me. Since it is a one 
                  man project the library will take some time to fill with 
                  minerals and rocks. More functionality will be added and 
                  existing functionality will be improved as my software 
                  engineering skills grow. I will release it into the geology 
                  community as a field assistant. I will also be using the 
                  feedback I receive to improve functionality. My hope is to 
                  eventually create a mobile app which will make fieldwork 
                  significantly easier.
                  </p>
                  {/* <a href="#!" className="btn btn-primary">Button</a> */}
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img
                    src="https://mdbootstrap.com/img/new/standard/nature/023.jpg"
                    className="img-fluid"
                  />
                  <a href="#!">
                    <div className="mask" style={{backgroundColor:"#FBFBFB"}}></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">What To Expect</h5>
                  <p className="card-text">
                    As mentioned above this projects Is a mineral database 
                    which can be queried by properties or keyword. 
                    The keyword search takes the color name or mineral group and 
                    starts matching as soon as you start typing. The property search 
                    takes the results of standard mineral tests and retrieves 
                    suggestions from minerals which match the given criterion. 
                    The instructions for tests are available for those who need 
                    them on the info page and if you select a particular test you 
                    get another page with more detail. 
                  </p>
                  {/* <a href="#!" className="btn btn-primary">Button</a> */}
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img
                    src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                    className="img-fluid"
                  />
                  <a href="#!">
                    <div className="mask" style={{backgroundColor:"#FBFBFB"}}></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Who Is It For</h5>
                  <p className="card-text">
                    This site is for geology students, geologists and anyone with an interest in minerals.
                     As the name pocket geologist suggests, this site can be used in the field to identify 
                     minerals when one is not sure about the identity of the mineral. It’s particularly 
                     useful for entry level geologists  as well as university students who are new to 
                     mineralogy. If you are not a geologist, instructions on how to run tests are given on the site on the info page, so you do not need to be a qualified geologist to use it.
                  </p>
                  {/* <a href="#!" className="btn btn-primary">Button</a> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
        </div>
        </>
    )
}

export default About;