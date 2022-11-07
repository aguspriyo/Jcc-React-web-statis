import detail from "../../assets/1 .png"
import { FaShoppingBag} from "react-icons/fa";
import Navbar from "../navigasi/navbar";
import Footer from "../navigasi/footer";
// import axios from 'axios';
// import {useEffect, useState} from 'react'





export default function Detail(){

//   const [state, setState]=useState({
//     post:[],
//     datapost:{
//       userId:1,
//       id:null,
//       title:'',
//       body:''
//     }
//   })


//   const getData =()=>{
//     axios.get('http://localhost:3004/post?limited=9')
//     .then((response)=>{
//       console.log(response.data)
//       setState({
//         post:response.data
//       })
//     })
//   }

//   useEffect(() => {


//     getData
//   }, [])

// return(
//   <>



// <div className="row">
//           {this.state.post.map((isipost) => {
//             return <Post key={isipost.id} id={isipost.id} clickRemove={this.handleRemove} clickEdit={this.handleEdit} title={isipost.title} desc={isipost.body} />;
//           })}
//         </div>
//   </>
// )




  return(
    <>
    <Navbar/>
    <main>
     <div className="container" style={{backgroundColor:"#f8f0f0" , padding: "2rem", marginTop:"10rem", marginBottom:"10rem" }}>
      <div className="card">
        <div className="card-body p-5">
          <h3 className="card-title text-center">Detail Produk</h3>
          <div className="row">
            <div className="col-lg-5 col-md-5 mt-5 col-sm-6">
              <h6 className="card-subtitle mb-3 text-center">Udang Goreng</h6>
              <div className="white-box text-center"><img src={detail} className="img-responsive" alt="gambarDetail"/></div>
            </div>
            <div className="col-lg-7 col-md-8 col-sm-7">
              <h4 className="box-title mt-5">Product description</h4>
              <p>
                Lorem Ipsum available,but the majority have suffered alteration in some form,by injected humour,or randomised words which don't look even slightly believable.but the majority have suffered alteration in some form,by injected
                humour
              </p>
              <h2 className="mt-5">
                Rp.50.000
              </h2>
              <div className="form-group mb-2 w-25">
                <label>Jumlah</label>
                <input type="quantiy" placeholder="jumlah item" className="form-control" />
              </div>
              <button className="btn btn-warning btn-rounded m-2" data-toggle="tooltip" title="" data-original-title="Add to cart">
                <FaShoppingBag/>
              </button>
              <button className="btn btn-success btn-rounded">Beli</button>

            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
    <Footer />
    </>
  )
}
