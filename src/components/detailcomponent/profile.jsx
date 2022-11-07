import profile from "../../assets/profile.png"
import Footer from "../navigasi/footer"
import Navbar from "../navigasi/navbar"

export default function Profile(){
  return(
    <>
    <Navbar/>
  <div className="container " style={{backgroundColor:"#f8f0f0 ", marginTop:" 150px",marginBottom:" 150px", padding:"5px"}}>
      <div className="col-md-4 col offset-4 text-center" style={{marginTop: "40px ",}}>
        <img src={profile} alt="" style={{width: "25%"}} />
        <h4>Agus Priyono</h4>
        <p>Villa Situdaun, Jalan Desa Situdaun, RT.7/RW.2, Situ Daun, Tenjolaya, Kab. Bogor, Tenjolaya, Jawa barat 081xxxxxxx</p>
        <button className="btn btn-warning">Edit Profile</button>
      </div>
      <hr />
      <p className="text-start">Riwayat Transaksi</p>
      <table className="table table-hover text-center">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Jenis Item</th>
            <th scope="col">Jumlah Item</th>
            <th scope="col">Status Pembayaran</th>
            <th scope="col">Jumalah Pembayaran(RP)</th>
            <th scope="col">Status Pemesanan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Udang Goreng</td>
            <td>2</td>
            <td>Dibayar</td>
            <td>50000</td>
            <td>On Proccess</td>
          </tr>
        </tbody>
      </table>
    </div>
<Footer/>
    </>
  )
}
