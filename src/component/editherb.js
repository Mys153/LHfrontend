import '../App.css'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import { Table, Button } from 'reactstrap';

import Footer from "../component/footer";
import Header from "../component/header";

const Editherb = () => {

    const [leafherb, setleafherbList] = useState([]);
    const [newSPname, setnewSPname] = useState("");
    const [newCname, setnewCname] = useState("");

    const updateLeafherbList = (HID) => {
        Axios.put("http://localhost:3001/update", { SPname: newSPname, Cname: newCname, HID: HID }).then((response) => {
            setleafherbList(
                leafherb.map((val) => {
                    return val.HID === HID ? {
                        SPname: newSPname,
                        Cname: newCname,
                        Sname: val.Sname,
                        Family: val.Family,
                        Pic: val.Pic,
                        Root: val.Root,
                        Stem: val.Stem,
                        Leaf: val.Leaf,
                        Flower: val.Flower,
                        Fruit: val.Fruit,
                        Seed: val.Seed
                    } : val;
                })
            )
        })
    }

    const deleteLeafherbList = (HID) => {
        Axios.delete(`http://localhost:3001/delete/${HID}`).then((response) => {
            setleafherbList(
                leafherb.filter((val) => {
                    return val.HID !== HID;
                })
            )
        })
    }

    async function getLeafherbList() {
        const res = Axios.get('http://localhost:3001/herb').then((response) => {
            setleafherbList(response.data);
        });

    }

    useEffect(() => {
        getLeafherbList();
    })


    return (
        <div class=" font-link">
            <Header />
            <div className="card-body text-left">
                <h3>
                    Edit
                </h3>
            </div>
            {/* <div class="container">
                <div class="row ">
                  <div class="col col-md-2"><h5><b>ชื่อ</b></h5></div>
                  <div class="col col-md-2"><h5><b>ชื่อสามัญ</b></h5></div>
                  <div class="col col-md-3"><h5><b>ชื่อวิทยาศาสตร์</b></h5></div>
                  <div class="col col-md-2"><h5><b>วงศ์</b></h5></div>
                </div>
            </div> */}

            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">ชื่อ</th>
                        <th scope="col">ชื่อสามัญ</th>
                        <th scope="col">ชื่อวิทยาศาสตร์</th>
                        <th scope="col">วงศ์</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {leafherb.map((val, key) => {
                    return (
                        // <div className="leafherb card">
                        //     <div className="card-body text-left">
                        //         <p className="card-text"><b>ชื่อ :</b> {val.SPname}</p>
                        //         <p className="card-text"><b>ชื่อสามัญ :</b> {val.Cname}</p>
                        //         <p className="card-text"><b>ชื่อวิทยาศาสตร์ :</b> {val.Sname}</p>
                        //         <p className="card-text"><b>วงศ์ :</b> {val.Family}</p>
                        //         <div className="d-flex">
                        //             <input type="text"
                        //                 type="text"
                        //                 style={{ width: "300px" }}
                        //                 placeholder="name.."
                        //                 className="form-control"
                        //                 onChange={(event) => {
                        //                     setnewSPname(event.target.value)
                        //                 }}
                        //             />
                        //             <button className="btn btn-warning" onClick={() => { updateLeafherbList(val.HID) }} >Edit</button>
                        //             <button className="btn btn-danger" onClick={() => { deleteLeafherbList(val.HID) }} >Del</button>
                        //         </div>
                        //     </div>
                        // </div>

                        // <div class="container">
                        //     <table class="table table-bordered">
                        //         <div class="col col-md-2">{val.SPname}</div>
                        //         <div class="col col-md-2">{val.Cname}</div>
                        //         <div class="col col-md-3">{val.Sname}</div>
                        //         <div class="col col-md-2">{val.Family}</div>
                        //         <div class="col col-md">
                        //             {/* <button className="button btn btn-info btn-sm" onClick={() => { updateLeafherbList(val.HID) }} >Detail</button> */}
                        //             <button className="button btn btn-warning btn-sm" onClick={() => { updateLeafherbList(val.HID) }} >Edit</button>
                        //             <button className="button btn btn-danger btn-sm" onClick={() => { deleteLeafherbList(val.HID) }} >Del</button>
                        //         </div>
                        //     </table >
                        // </div>

                        <tbody>
                            <tr>
                                <th scope="row">{val.HID}</th>
                                <td>{val.SPname}</td>
                                <td>{val.Cname}</td>
                                <td>{val.Sname}</td>
                                <td>{val.Family}</td>
                                <td>
                                    <a href={"/detailherb/" +val.HID}class="button btn btn-info btn-sm">Detail</a>
                                    <a href={"/editherb/" +val.HID}class="button btn btn-warning btn-sm">Edit</a>
                                    {/* <button className="button btn btn-warning btn-sm" onClick={() => { updateLeafherbList(val.HID) }} >Edit</button> */}
                                    <button className="button btn btn-danger btn-sm" onClick={() => { deleteLeafherbList(val.HID) }} >Del</button>
                                </td>
                            </tr>
                        </tbody>

                    )
                })}
            </table>
            <Footer />
        </div>
    )

}
export default Editherb;