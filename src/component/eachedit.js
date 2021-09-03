import '../App.css'

import Axios from 'axios'
import { useState, useEffect } from 'react'

import Footer from "./footer";
import Header from "./header";

const Eachdetail = (props) => {

    const [detail, setDetailherb] = useState([]);
    const [id, setID] = useState(props.match.params.id);
    const [leafherb, setleafherbList] = useState([]);
    const [newSPname, setnewSPname] = useState("");
    const [newCname, setnewCname] = useState("");

    async function detailLeafherb() {
        const res = Axios.get(`http://localhost:3001/detail/${id}`).then((response) => {
            setDetailherb(response.data);
            // console.log(response.data);
        });
    }

    const updateLeafherbList = (HID) => {
        Axios.put("http://localhost:3001/update", { SPname: newSPname,Cname: newCname, HID: HID }).then((response) => {
            setleafherbList(
                leafherb.map((val) => {
                    return val.HID == HID ? {
                        HID: val.HID,
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

    useEffect(() => {
        detailLeafherb(id);
        // console.log(props.match.params.id);
    })

    return (
        <div className="font-link">
            <Header />
            {detail.map((val, key) => {
                return (
                    <div className="information card-body text-left">
                        {/* รายละเอียด */}
                        <div class="col-auto">
                        <h3>{val.SPname}</h3>
                            <img src={val.Pic} class="pic img-thumbnail" alt="..." width="500" height="600"></img>
                        </div>
                        <form class="row g-3 rounded bgc" novalidate>
                            <h4>รายละเอียด</h4>
                            <div class="col-md-4">
                                <label for="validationCustom01" class="form-label">ชื่อ</label>
                                <input type="text" class="form-control" id={val.SPname} placeholder={val.SPname} 
                                onChange={(event) => {
                                    setnewSPname(event.target.value)
                                }}
                                />
                            </div>
                            <div class="col-md-4">
                                <label for="validationCustom02" class="form-label">ชื่อสามัญ (ชื่อภาษาอังกฤษ)</label>
                                <input type="text" class="form-control" id={val.Cname} placeholder={val.Cname} 
                                onChange={(event) => {
                                    setnewCname(event.target.value)
                                }}
                                />
                            </div>
                            <div class="col-md-4">
                                <label for="validationCustomUsername" class="form-label">ชื่อวิทยาศาสตร์</label>
                                <div class="input-group has-validation">
                                    <input type="text" class="form-control" id="validationCustomUsername" placeholder={val.Sname} />
                                </div>
                            </div>
                            {/* <div class="col-md-6">
                                <label for="validationCustom03" class="form-label">ชื่อท้องถิ่น</label>
                                <input type="text" class="form-control" id="validationCustom03" placeholder="ชื่อท้องถิ่น..."  />
                            </div> */}
                            <div class="col-md-3">
                                <label for="validationCustom04" class="form-label">วงศ์</label>
                                <select class="form-select" id="validationCustom04" placeholder={val.Family} >
                                    <option selected disabled value="">Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <hb />
                        </form>

                        {/* ลักษณะทางพฤษศาสตร์ */}
                        <form class="row g-3 needs-validation rounded bgc" novalidate>
                            <h4>ลักษณะทางพฤษศาสตร์</h4>
                            <div class="col-md-4">
                                <label for="exampleFormControlTextarea1" class="form-label">ราก</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder={val.Root} >
                                </textarea>
                            </div>
                            <div class="col-md-4">
                                <label for="exampleFormControlTextarea1" class="form-label">ลำต้น</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder={val.Stem}>
                                </textarea>
                            </div>
                            <div class="col-md-4">
                                <label for="exampleFormControlTextarea1" class="form-label">ใบ</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder={val.Leaf}>
                                </textarea>
                            </div>
                            <div class="col-md-4">
                                <label for="exampleFormControlTextarea1" class="form-label">ดอก</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder={val.Flower}>
                                </textarea>
                            </div>
                            <div class="col-md-4">
                                <label for="exampleFormControlTextarea1" class="form-label">ผล</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder={val.Fruit}>
                                </textarea>
                            </div>
                            <div class="col-md-4">
                                <label for="exampleFormControlTextarea1" class="form-label">เมล็ด</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder={val.Seed}>
                                </textarea>
                            </div>
                            <hb />
                        </form>
                        <div class="d-grid d-md-flex justify-content-md-end">
                            <a onClick={() => { updateLeafherbList(val.HID) }} href={"/editherb/"} class="btn btn-warning btn-md">Edit</a>
                            {/* <button className="button btn btn-warning btn-lg" onClick={() => { updateLeafherbList(val.HID) }} >Edit</button> */}
                        </div>

                        {/* สรรพคุณและวิธีใช้ */}
                        {/* <form class="row g-3 needs-validation rounded bgc" novalidate>
                            <h4>สรรพคุณ</h4>
                            <div class="col-md-6">
                                <label for="validationCustom03" class="form-label">สรรพคุณ</label>
                                <input type="text" class="form-control" id="validationCustom03" placeholder="สรรพคุณ..." required />
                            </div>
                            <div class="col-md-3">
                                <label for="validationCustom04" class="form-label">วิธีใช้งาน</label>
                                <select class="form-select" id="validationCustom04" required >
                                    <option selected disabled value="">Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label for="validationCustom04" class="form-label">ส่วนที่ใช้งาน</label>
                                <select class="form-select" id="validationCustom04" required >
                                    <option selected disabled value="">Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <hb />
                        </form>

                        <form class="row g-3 needs-validation rounded bgc" novalidate>
                            <h4>งานวิจัยที่เกี่ยวข้อง</h4>
                            <div class="col-md-5">
                                <label for="validationCustom03" class="form-label">ชื่องานวิจัย</label>
                                <input type="text" class="form-control" id="validationCustom03" placeholder="ชื่องานวิจัย..." required />
                            </div>
                            <div class="col-md-2">
                                <label for="validationCustom03" class="form-label">ปีที่ตีพิมพ์</label>
                                <input type="text" class="form-control" id="validationCustom03" placeholder="" required />
                            </div>
                            <div class="col-md-5">
                                <label for="validationCustom03" class="form-label">แหล่งอ้างอิง (Link)</label>
                                <input type="text" class="form-control" id="validationCustom03" placeholder="" required />
                            </div>
                            <div class="col-md-12">
                                <label for="exampleFormControlTextarea1" class="form-label">บทคัดย่อ</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="">
                                </textarea>
                            </div>
                            <hb />
                        </form> */}
                    </div>
                )
            })}
            <Footer />
        </div>
    )
}
export default Eachdetail;