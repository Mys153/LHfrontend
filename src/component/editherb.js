import '../App.css'
import Axios from 'axios'
import { useState, useEffect } from 'react'

import Footer from "../component/footer";
import Header from "../component/header";

const Editherb = () => {

    const [leafherb, setleafherbList] = useState([]);
    const [newSPname, setnewSPname] = useState("");

    const updateLeafherbList = (HID) => {
        Axios.put("http://localhost:3001/update", { SPname: newSPname, HID: HID }).then((response) => {
            setleafherbList(
                leafherb.map((val) => {
                    return val.HID == HID ? {
                        HID: val.HID,
                        SPname: newSPname,
                        Cname: val.Cname,
                        Sname: val.Sname,
                        Family: val.Family,
                        Characteristic: val.Characteristic,
                        Ingredient: val.Ingredient,
                        Img: val.Img
                    } : val;
                })
            )
        })
    }

    const deleteLeafherbList = (HID) => {
        Axios.delete(`http://localhost:3001/delete/${HID}`).then((response) => {
            setleafherbList(
                leafherb.filter((val) => {
                    return val.HID != HID;
                })
            )
        })
    }

    async function getLeafherbList() {
        const res = Axios.get('http://localhost:3001/leafherb').then((response) => {
            setleafherbList(response.data);
        });

    }

    useEffect(() => {
        getLeafherbList();
    })

    return (
        <div className="font-link">
            <Header />
            <div className="card-body text-left">
                <h3>
                    Edit
                </h3>
            </div>
            {leafherb.map((val, key) => {
                return (
                    <div className="leafherb card">
                        <div className="card-body text-left">
                            <p className="card-text"><b>ชื่อ :</b> {val.SPname}</p>
                            <p className="card-text"><b>ชื่อสามัญ :</b> {val.Cname}</p>
                            <p className="card-text"><b>ชื่อวิทยาศาสตร์ :</b> {val.Sname}</p>
                            <p className="card-text"><b>วงศ์ :</b> {val.Family}</p>
                            <p className="card-text"><b>ลักษณทางพฤษศาสตร์ :</b> {val.Characteristic}</p>
                            <p className="card-text"><b>สรรพคุณ :</b> {val.Ingredient}</p>
                            <div className="d-flex">
                                <input type="text"
                                    type="text"
                                    style={{ width: "300px" }}
                                    placeholder="name.."
                                    className="form-control"
                                    onChange={(event) => {
                                        setnewSPname(event.target.value)
                                    }}
                                />
                                <button className="btn btn-warning" onClick={() => { updateLeafherbList(val.HID) }} >Update</button>
                                <button className="btn btn-danger" onClick={() => { deleteLeafherbList(val.HID) }} >Delete</button>
                            </div>
                        </div>
                    </div>
                )
            })}
            <Footer />
        </div>
    )

}
export default Editherb;