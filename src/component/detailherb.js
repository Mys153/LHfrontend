import '../App.css'
import '../'

import Axios from 'axios'
import { useState, useEffect } from 'react'

import Footer from "./footer";
import Header from "./header";

const Detailherb = (props) => {

    const [detail, setDetailherb] = useState([]);
    const [symptom, setSymptom] = useState([]);
    const [research, setResearch] = useState([]);
    const [chemical, setChemical] = useState([]);
    const [id, setID] = useState(props.match.params.id);

    async function detailLeafherb() {
        const res = Axios.get(`http://localhost:3001/detail/${id}`).then((response) => {
            setDetailherb(response.data);
            // console.log(response.data);
        });
    }

    async function Symptomherb() {
        const res = Axios.get(`http://localhost:3001/symptom/${id}`).then((response) => {
            setSymptom(response.data);
            // console.log(response.data);
        });
    }

    async function Researchherb() {
        const res = Axios.get(`http://localhost:3001/research/${id}`).then((response) => {
            setResearch(response.data);
            // console.log(response.data);
        });
    }

    async function Chemicalherb() {
        const res = Axios.get(`http://localhost:3001/chemical/${id}`).then((response) => {
            setChemical(response.data);
            // console.log(response.data);
        });
    }

    useEffect(() => {
        detailLeafherb(id);
        Symptomherb(id);
        Researchherb(id);
        Chemicalherb(id);
        // console.log(props.match.params.id);
    })


    return (
        <div>
            <Header />
            {detail.map((val, key) => {
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
                            <p className="card-text"><b>ลักษณะทางพฤษศาสตร์ </b></p>
                            <li><b>ราก :</b> {val.Root}</li>
                            <li><b>ลำต้น :</b> {val.Stem}</li>
                            <li><b>ใบ :</b> {val.Leaf}</li>
                            <li><b>ดอก :</b> {val.Flower}</li>
                            <li><b>ผล :</b> {val.Fruit}</li>
                            <li><b>เมล็ด :</b> {val.Seed}</li>
                        </div>
                        <div class="col-4 card-body text-left">
                            <p className="card-text"><b>สรรพคุณ </b></p>
                            {symptom.map((val) => (<li>{val.How}</li>))}
                            <hr />
                            <p className="card-text"><b>งานวิจัยที่เกี่ยวข้อง </b></p>
                            {research.map((val) => (
                                <div>
                                    <li><b>ชื่อ :</b> {val.Rname}</li>
                                    <li style="list-style-type:none;"><b>ปีที่ตีพิมพ์ :</b> {val.Publish_years}</li>
                                    <li style="list-style-type:none;"><b>อ้างอิง :</b> {val.Rlink}</li>
                                    <li style="list-style-type:none;"><b>บทคัดย่อ :</b> {val.Rdetail}</li>
                                </div>

                            ))}
                            <hr />
                            <p className="card-text"><b>สารที่พบ </b></p>
                            {chemical.map((val) => (<li>{val.Chem_name}</li>))}
                        </div>

                    </div>
                )
            })}
            <Footer />
        </div>
    )
}
export default Detailherb;