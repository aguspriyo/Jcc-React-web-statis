import { BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom"
import menu1 from "../../assets/1 .png";
import menu2 from "../../assets/2.png";
import menu3 from "../../assets/3.png";
import menu4 from "../../assets/4.png";
import menu5 from "../../assets/5.png";
import menu6 from "../../assets/66.png";
import cart from "../../assets/cart.svg";
import userimage from "../../assets/User profile.png";
import Footer from "../navigasi/footer";
import Navbar from "../navigasi/navbar";
export default function Main() {
  return (
    <div>
      <Navbar />
      <section className="position-relative">
        <div className="container container-fluid text-center mt-4 p-5">
          <img src={userimage} alt="" style={{ marginTop: "100", position: "absolute", top: "0", left: "0", width: "100%", height: "100%", objectFit: "cover", margin: "0", padding: "0px" }} />
          <div className="row py-lg-5 position-sticky">
            <div className="col-lg-6 col-md-8 mx-auto p-2">
              <h1 className="text-center fw-semibold" style={{ fontFamily:'DancingScript', fontSize: "50px" }}>
                Menu makanan
              </h1>
              <p className="lead text-light">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="search d-flex justify-content-center ">
        <div className="custom-search mt-2 " style={{ position: "relative", width: "300px" }}>
          <input
            type="text"
            className="custom-search-input"
            placeholder="Cari disini"
            style={{ width: "100%", border: " 2px solid rgb(8, 12, 14)", borderRadius: "100px", padding: "10px 100px 10px 20px", lineHeight: "1", boxSizing: "borderBox", outline: "none" }}
          />
          <button
            className="custom-search-botton"
            type="submit"
            style={{ position: "absolute", right: "3px" , top: "3px", bottom: "3px", border: "0", background: " #3398e6", color: " #fff", outline: " none", margin: "0", padding: "0 10px", borderRadius: " 100px", Zindex: " 4" }}
          >
            { <BiSearch />}

          </button>
        </div>
      </div>
      <main style={{ backgroundColor: "#f8f0f0" }}>
        <div className="container d-flex justify-content-center mt-2 pt-5 flex-wrap" id="">
          <div className="col-lg-3 d-flex m-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={menu1} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Ikan Pepes</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink className="btn btn-success rounded-pill" to="/detail">Beli</NavLink>
                <NavLink className="btn btn-warning rounded-pill">
                  tambah keranjang
                  <img src={cart} style={{ width: "20px" }} alt="" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex m-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={menu2} className="card-img-top" alt="..." />
              <div className="card-body text-center text-center">
                <h5 className="card-title">Udang Goreng</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink className="btn btn-success rounded-pill" to="/detail">Beli</NavLink>
                <NavLink className="btn btn-warning rounded-pill">
                  tambah keranjang
                  <img src={cart} style={{ width: "20px" }} alt="" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex m-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={menu3} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Pepes Ikan</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink className="btn btn-success rounded-pill">Beli</NavLink>
                <NavLink className="btn btn-warning rounded-pill">
                  tambah keranjang
                  <img src={cart} style={{ width: "20px" }} alt="" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex m-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={menu4} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Soto Kuning</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink className="btn btn-success rounded-pill">Beli</NavLink>
                <NavLink className="btn btn-warning rounded-pill">
                  tambah keranjang
                  <img src={cart} style={{ width: "20px" }} alt="" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex m-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={menu5} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Kepiting Kremes</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink className="btn btn-success rounded-pill">Beli</NavLink>
                <NavLink className="btn btn-warning rounded-pill">
                  tambah keranjang
                  <img src={cart} style={{ width: "20px" }} alt="" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex m-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={menu6} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Ikan Pepes</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink className="btn btn-success rounded-pill">Beli</NavLink>
                <NavLink className="btn btn-warning rounded-pill">
                  tambah keranjang
                  <img src={cart} style={{ width: "20px" }} alt="" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex m-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={menu1} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Ayam Goreng</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink className="btn btn-success rounded-pill">Beli</NavLink>
                <NavLink className="btn btn-warning rounded-pill">
                  tambah keranjang
                  <img src={cart} style={{ width: "20px" }} alt="" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex m-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={menu2} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Ayam Panggang</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink className="btn btn-success rounded-pill">Beli</NavLink>
                <NavLink className="btn btn-warning rounded-pill">
                  tambah keranjang
                  <img src={cart} style={{ width: "20px" }} alt="" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex m-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={menu3} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Batagor</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink className="btn btn-success rounded-pill">Beli</NavLink>
                <NavLink className="btn btn-warning rounded-pill">
                  tambah keranjang
                  <img src={cart} style={{ width: "20px" }} alt="" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex m-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={menu3} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Nasi Tumpeng</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink className="btn btn-success rounded-pill">Beli</NavLink>
                <NavLink className="btn btn-warning rounded-pill">
                  tambah keranjang
                  <img src={cart} style={{ width: "20px" }} alt="" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex m-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={menu3} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Soto Bening</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink to="atrafdetail.html" className="btn btn-success rounded-pill">
                  Beli
                </NavLink>
                <NavLink className="btn btn-warning rounded-pill">
                  tambah keranjang
                  <img src={cart} style={{ width: "20px" }} alt="" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex m-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={menu3} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Seblak</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink className="btn btn-success rounded-pill">Beli</NavLink>
                <NavLink className="btn btn-warning rounded-pill">
                  tambah keranjang
                  <img src={cart} style={{ width: "20px" }} alt="" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
