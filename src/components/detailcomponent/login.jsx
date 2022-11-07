import { Link } from "react-router-dom";
import Footer from "../navigasi/footer";
import Navbar from "../navigasi/navbar";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="container " style={{ backgroundColor: "#f8f0f0 " }}>
        <section className="text-center " style={{ marginTop: "150px", marginBottom: "100px", paddingBottom: "0.5rem" }}>
          <div className="p-5"></div>

          <div className="card mx-4 mx-md-5 shadow-5-strong" style={{ marginBottom: "100px", background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: `blur("30px")` }}>
            <div className="card-body py-5 px-md-5">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <h2 className="fw-bold mb-5">Login</h2>
                  <form className="form text-start">
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="" id="">
                        Username/Email
                      </label>
                      <input type="text" id="namaEmail" className="form-control" />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="">
                        Password
                      </label>
                      <div className="input-group">
                        <input type="password" id="password" className="form-control" />
                        <div className="input-group-addon">
                          <i className="bi bi-eye-slash" id="togglePassword"></i>
                        </div>
                      </div>
                    </div>

                    <label className="form-label" htmlFor="">
                      Role
                    </label>
                    <select className="form-select mb-4" aria-label="Default select example" id="role">
                      <option id="role">Role</option>
                      <option value="" id="user">
                        User
                      </option>
                      <option value="" id="admin">
                        Admin
                      </option>
                    </select>

                    <div className="form-check d-flex justify-content-start mb-4">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" />
                      <label className="form-check-label" htmlFor="form2Example33">
                        Ingat Saya
                      </label>
                    </div>

                    <div className="d-flex gap-2 col-12 mb-4 mx-auto justify-content-center">
                      <Link to="/home">
                        {" "}
                        <button className="btn btn-primary" type="button" id="btLogin">
                          Login
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>
                <div className="form-outline d-flex justify-content-end">
                  <label className="form-check-label " htmlFor="form2Example33">
                    {" "}
                    Belum Punya Akun? <Link to="/register">Daftar Sekarang</Link>{" "}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
