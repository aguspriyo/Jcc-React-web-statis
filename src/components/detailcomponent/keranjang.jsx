import detail from '../../assets/1 .png'
import Footer from '../navigasi/footer'
import Navbar from '../navigasi/navbar'



export default function Keranjang(){
  return(
    <>
<Navbar/>

<table className="table table-hover text-center" style={{marginTop:"200px"}}>
  <thead>
    <tr>
      <th scope="col">Pilih</th>
      <th scope="col">Produk</th>
      <th scope="col">Jumlah Item</th>
      <th scope="col">Jumalah Pembayaran(RP)</th>
      <span className=" text-center" role="button">Hapus</span>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input type="checkbox"/></td>
      <td><img src={detail} alt="" style={{width: "150px "}}/></td>
      <td>2</td>
      <td>Dibayar</td>
     <td><button className="btn btn-danger">Hapus</button></td>
    </tr>
  </tbody>
</table>

<div className="text-end p-1 " style={{marginTop:"15em ", marginBottom:"7em "}}>

  <button className="btn btn-warning rounded-pill ">Buat Pemesanan</button>
</div>

<Footer/>
    </>
  )
}
