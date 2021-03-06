import '../App.css'

import Axios from 'axios'
import { useState, useEffect } from 'react'

import Footer from "../component/footer";
import Header from "../component/header";


const Allherb = () => {

    const [leafherb, setleafherbList] = useState([]);
    const [searchherb, setSearchherb] = useState([]);
    const [symptomSearch, setsymptomSearch] = useState([]);

    const [symptom, setsymptom] = useState([]);

    async function getLeafherbList() {
        const res = Axios.get('http://localhost:3001/herb').then((response) => {
            setleafherbList(response.data);
        });
    }

    async function symptomherb() {
        const res = Axios.get('http://localhost:3001/symptom').then((response) => {
            setsymptom(response.data);
            // console.log(response.data);
        });
    }

    // async function getsymptomSearch() {
    //     const res = Axios.get('http://localhost:3001/symptomSearch').then((response) => {
    //         setsymptomSearch(response.data);
    //     });
    // }

    useEffect(() => {
        getLeafherbList();
        symptomherb();
        // getsymptomSearch();
    })

    return (
        <div>
            <Header />
            <input
                type="text"
                class="search-container"
                placeholder=" Search Herb..."
                onChange={event => {
                    setSearchherb(event.target.value);
                }}
            />
            {/* <div class="dropdown ">
                <button class="btn btn-secondary dropdown-toggle search-container " type="button" id="Symptom" data-bs-toggle="dropdown" >
                    ค้นหาด้วยสรรพคุณ
                </button>
                <ul class="dropdown-menu" aria-labelledby="Symptom">
                    {symptom.map((val) => (
                        <li><a class="dropdown-item" href={"/detailherb/" + val.SymID}>{val.Detail}</a></li>
                    ))}
                </ul>
            </div> */}
            {leafherb.filter((val) => {
                if (searchherb == "") {
                    return val
                } else if (val.SPname.toLowerCase().includes(searchherb.toLowerCase())) {
                    return val
                } else if (val.Cname.toLowerCase().includes(searchherb.toLowerCase())) {
                    return val
                } else if (val.Sname.toLowerCase().includes(searchherb.toLowerCase())) {
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