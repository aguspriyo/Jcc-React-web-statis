import { NavLink, Link } from "react-router-dom";
import menu1 from "../assets/1 .png";
import menu2 from "../assets/2.png";
import menu3 from "../assets/3.png";
import menu4 from "../assets/4.png";
import bg from "../assets/bgmain.png";
import orang1 from "../assets/customer card.png";
import orang2 from "../assets/customer card2.png";
import orang3 from "../assets/customers card3.png";
import kepiting from "../assets/kepiting.png";
import pepes from "../assets/pepes.png";
import sundae from "../assets/sundae1.png";
import udang from "../assets/udang.png";
import Footer from "../components/navigasi/footer";
import Navbar from "../components/navigasi/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="position-relative " style={{ paddingBottom: "150px" }} id="mainSection">
          <img id="imageMainSection" src={sundae} alt="CardImage" />
          <div className="container-lg d-flex flex-column position-relative">
            <p className="fs-5 py-5 " style={{ maxWidth: "700px", color: "white", marginTop: "100px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis asperiores totam commodi? Voluptatibus praesentium at rerum totam similique culpa!
            </p>
            <div className="row" style={{ marginBottom: "5rem" }}>
              <div className="col-8 col-md-5 col-lg-2 d-grid">
                <Link name="pesansekarang" id="pesansekarang" className="btn   btn-warning rounded-pill text-dark" style={{ fontFamily: "" }} to="/menu">
                  Pesan Sekarang
                </Link>
              </div>
            </div>
          </div>
          <div className="position-absolute bottom-0 start-0 end-0 text-banner " style={{ fontFamily: "DancingScript" }}>
            <h3 className="text-center py-3 ">Selamat Datang Di Jatraf Restoran Khas sunda</h3>
          </div>
        </section>
        <div className="container">
          <div className="row text-center my-5">
            <div className="col-md-6 col-12 p-5">
              <h2 style={{ fontFamily: "DancingScript" }}>Menu Best seller</h2>
              <img src={pepes} alt="" style={{ width: " 80%" }} />
              <div className="d-flex p-2" style={{ justifyContent: "center", gap: "10px" }}>
                <img src={kepiting} alt="" style={{ width: " 40%" }} />
                <img src={udang} alt="" style={{ width: " 40%" }} />
              </div>
            </div>
            <div className="col-md-6 col-12 p-5">
              <h1 className="display-4" style={{ fontFamily: "DancingScript" }}>
                About Us
              </h1>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi eveniet est omnis placeat esse eligendi pariatur doloremque nisi, ad dolor dolores nemo ratione dignissimos nihil sapiente et consequatur odio harum? Esse
                nostrum nam similique deleniti tenetur est suscipit architecto minima, magnam quis recusandae culpa ducimus, ipsum accusantium laborum ad numquam voluptatem cumque modi? Officia iste alias illo commodi dicta eius quidem
                maiores minus soluta facere, reiciendis labore ducimus eligendi.
              </p>
              <NavLink className="btn btn-lg btn-warning rounded-pill text-dark" role="button">
                Selengkapnya
              </NavLink>
            </div>
            <div className="container d-flex p-5 vw-100 overflow-hidden" style={{ backgroundColor: "#d5f221" }}>
              <div className="row text-center">
                <h1 className="display-4" style={{ fontFamily: "DancingScript" }}>
                  Rekomendasi Menu
                </h1>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita molestiae labore odio libero earum, quibusdam necessitatibus facere omnis officiis perspiciatis?</p>
                <div className="container d-flex justify-content-center align-content-center mt-5">
                  <div className="row">
                    <div className="col-xl-3 col-md-6 col-sm-12 p-2 ">
                      <div className="card" style={{ borderRadius: " 20% 20% 0 0" }}>
                        <img src={menu1} className="card-img-top border-rounded" alt="..." style={{ borderRadius: " 30px 30px 0 0" }} />
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <NavLink className="btn btn-warning rounded-pill">Go somewhere</NavLink>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-12 p-2 ">
                      <div className="card" style={{ borderRadius: "20% 20% 0 0" }}>
                        <img src={menu2} className="card-img-top" alt="..." style={{ borderRadius: " 30px 30px 0 0" }} />
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <NavLink className="btn btn-warning rounded-pill">Go somewhere</NavLink>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-12 p-2 ">
                      <div className="card" style={{ borderRadius: "20% 20% 0 0" }}>
                        <img src={menu3} className="card-img-top" alt="..." style={{ borderRadius: " 30px 30px 0 0" }} />
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <button className="btn btn-warning rounded-pill">Go somewhere</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-12 p-2 ">
                      <div className="card" style={{ borderRadius: "20% 20% 0 0" }}>
                        <img src={menu4} className="card-img-top" alt="..." style={{ borderRadius: " 30px 30px 0 0" }} />
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <button className="btn btn-warning rounded-pill"> Go somewhere</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col pt-5">
                  <NavLink className="btn btn-lg rounded-pill text-white" style={{ width: "200px", backgroundColor: "#31af12", justifyContent: "center" }} role="button" to="/menu">
                    Selengkapnya
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container " style={{ backgroundImage: `url(${bg})`, backgroundSize: " cover", backgroundAttachment: "fixed", width: " 100%", height: "100%" }}>
          <div className="row text-light text-center mx-5">
            <h1 className="display-4" style={{ fontFamily: "DancingScript", color: "#d5f221" }}>
              Review Customer
            </h1>
            <p className="fs-4 text-light text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita molestiae labore odio libero earum, quibusdam necessitatibus facere omnis officiis perspiciatis?</p>
            <div className="col-xl-3 col-md-6 col-sm-12 p-2 ">
              <div className="card" style={{ borderRadius: "20% 20% 10% 10%" }}>
                <img src={orang1} className="card-img-top" alt="..." style={{ borderRadius: "30px 30px 0 0" }} />
                <div className="card-body">
                  <button className="btn btn-warning rounded-pill">Go somewhere</button>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12  p-2 ">
              <div className="card" style={{ borderRadius: " 20% 20% 10% 10%" }}>
                <img src={orang2} className="card-img-top" alt="..." style={{ borderRadius: " 30px 30px 0 0" }} />
                <div className="card-body">
                  <button className="btn btn-warning rounded-pill">Go somewhere</button>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12 p-2 ">
              <div className="card" style={{ borderRadius: " 20% 20% 10% 10%" }}>
                <img src={orang3} className="card-img-top" alt="..." style={{ borderRadius: " 30px 30px 0 0" }} />
                <div className="card-body">
                  <button className="btn btn-warning rounded-pill">Go somewhere</button>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12 p-2 ">
              <div className="card" style={{ borderRadius: " 20% 20% 10% 10%" }}>
                <img src={orang2} className="card-img-top" alt="..." style={{ borderRadius: " 30px 30px 0 0" }} />
                <div className="card-body">
                  <button className="btn btn-warning rounded-pill"> Go somewhere</button>
                </div>
              </div>
            </div>

            <div className="col pt-5 mb-5">
              <button className="btn btn-lg rounded-pill text-white" style={{ width: "200px", backgroundColor: " #31af12", justifyContent: "center" }}>
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
