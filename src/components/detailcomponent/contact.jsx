import Footer from "../navigasi/footer";
import Navbar from "../navigasi/navbar";

export default function Contact(){
  return(
    <>
    <Navbar/>
     <div className="container" style={{backgroundColor:"#f8f0f0", paddingBottom:" 0.5rem"}}>
      <section className="text-center"style=  {{marginTop: "150px", marginBottom: "100px"}}>

        <div className="p-5"></div>

        <div className="card mx-4 mx-md-5 shadow-5-strong" style= {{marginBottom: "100px" ,background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: `blur("30px")`}}>
          <div className="card-body py-5 px-md-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <form className="form text-start">
                  <div className="text my-4 text-center" >

                    <h3 className="fw-bold mb-5 " >Layanan Konsumen</h3>
                    <p className="">Pertanyaan dan keluhan dapat Anda sampaikan melalui form berikut</p>
                  </div>
                  <div className="form-outline mb-4">
                    <div className="form-outline">
                      <label className="form-label" htmlfor="form3Example1">Nama Lengkap</label>
                      <input type="text" id="nama" className="form-control" name="name" placeholder="nama" />
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" for="">Telp/hp</label>
                    <input type="number" id="" className="form-control" name=""  placeholder="telp"/>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="">Item yang dibeli(opsional)</label>
                    <input type="number" id="" className="form-control" name="" placeholder="item yang dibeli" style={{}}/>
                  </div>


                  <div className="form-outline mb-4">
                    <label className="form-label" for="">Kritik dan saran</label>
                    <textarea className="form-control" placeholder="tulis keluhan, kritik, saran anda" id="" rows="3"></textarea>
                  </div>



                  <div className="d-flex gap-2 col-12 mx-auto justify-content-start">
                    <button className="btn btn-primary text-white" type="button" id="btnbayar" >Kirim</button>
                  </div>



                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="p-5"></div>

  <Footer/>
    </>
  )
}
