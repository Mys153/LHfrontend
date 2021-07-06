import'../App.css'

import Axios from 'axios'
import { useState, useEffect } from 'react'

import Footer from "../component/footer";
import Header from "../component/header";

const Allherb = () => {

    const [leafherb, setleafherbList] = useState([]);

    async function getLeafherbList() {
        const res = Axios.get('http://localhost:3001/leafherb').then((response) => {
            setleafherbList(response.data);
        });
    }

    useEffect(() => {
        getLeafherbList();
    })

    return (
        <div>
            <Header />
            {leafherb.map((val, key) => {
                return (
                    <div class="row justify-content-start">
                        <div className="col-4"> 
                            <img src={val.Img} class="img-thumbnail" alt="..." width="500" height="600"></img>
                        </div>
                        <div className="col-4 card-body text-left">
                            <p className="card-text"><b>ชื่อ :</b> {val.SPname}</p>
                            <p className="card-text"><b>ชื่อสามัญ :</b> {val.Cname}</p>
                            <p className="card-text"><b>ชื่อวิทยาศาสตร์ :</b> {val.Sname}</p>
                            <p className="card-text"><b>วงศ์ :</b> {val.Family}</p>
                            <p className="card-text"><b>ลักษณทางพฤษศาสตร์ :</b> {val.Characteristic}</p>
                            <p className="card-text"><b>สรรพคุณ :</b> {val.Ingredient}</p>
                        </div>
                        <hr />
                    </div>
                    // <div>
                    //     <div class="font-link container">
                    //         <div class="row">
                    //             <div class="col-md-4">
                    //                 <div class="thumbnail">
                    //                     <a href="/w3images/lights.jpg" target="_blank">
                    //                         <img src="https://hipowershot.com/wp-content/uploads/2020/06/shutterstock_1020502231-scaled.jpg" alt="Lights" style={{ width: '100%' }}></img>
                    //                             <div class="caption text-center">
                    //                                 <button type="button" class="btn btn-info">{val.SPname}</button>
                    //                             </div>
                    //                     </a>
                    //                 </div>
                    //             </div>
                    //         </div>
                    //     </div>
                    //  </div>
                )
            })}
            <Footer />
                        </div>
    )
}
export default Allherb;