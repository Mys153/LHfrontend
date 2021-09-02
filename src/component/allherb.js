import '../App.css'

import Axios from 'axios'
import { useState, useEffect } from 'react'

import Footer from "../component/footer";
import Header from "../component/header";

const Allherb = () => {

    const [leafherb, setleafherbList] = useState([]);
    const [searchherb, setSearchherb] = useState([]);

    async function getLeafherbList() {
        const res = Axios.get('http://localhost:3001/herb').then((response) => {
            setleafherbList(response.data);
        });
    }

    useEffect(() => {
        getLeafherbList();
    })

    return (
        <div>
            <Header />
            <input
                type="text"
                class="search-container"
                placeholder="Search Herb..."
                onChange={event => {
                    setSearchherb(event.target.value);
                }}
            />
            {leafherb.filter((val) => {
                if (searchherb == "") {
                    return val
                } else if (val.SPname.toLowerCase().includes(searchherb.toLowerCase())) {
                    return val
                } else if (val.Family.toLowerCase().includes(searchherb.toLowerCase())) {
                    return val
                }
            }).map((val, key) => {
                return (
                    <div class="row justify-content-around">
                        <div class="col-4">
                            <img src={val.Pic} class="pic img-thumbnail" alt="..." width="500" height="600"></img>
                        </div>
                        <div class="col-4 card-body text-left">
                            <p class="card-text"><b>ชื่อ :</b> {val.SPname}</p>
                            <p class="card-text"><b>ชื่อสามัญ :</b> {val.Cname}</p>
                            <p class="card-text"><b>ชื่อวิทยาศาสตร์ :</b> {val.Sname}</p>
                            <p class="card-text"><b>วงศ์ :</b> {val.Family}</p>
                            <a href={"/detailherb/" + val.HID} class="btn btn-info">more</a>
                        </div>
                    </div>
                )
            })}
            <Footer />
        </div>
    )
}
export default Allherb;