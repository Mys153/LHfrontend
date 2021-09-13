import '../App.css'

import Axios from 'axios'
import { useState, useEffect } from 'react'

import Footer from "../component/footer";
import Header from "../component/header";

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const Addmore = () => {
    const [HID, setHID] = useState("");
    const [Usetype, setUsetype] = useState("");
    const [SymID, setSymID] = useState("");
    const [Part, setPart] = useState("");
    const [How, setHow] = useState("");

    const [Rname, setRname] = useState("");
    const [Publish_years, setPublish_years] = useState("");
    const [Rlink, setRlink] = useState("");
    const [Rdetail, setRdetail] = useState("");

    const [ChemID, setChemID] = useState("");
    const [Chem_name, setChem_name] = useState("");
    const [Chem_formular, setChem_formular] = useState("");

    const [leafherb, setleafherbList] = useState([]);
    const [symptom, setsymptom] = useState([]);

    const [addmore, setAddmore] = useState([]);

    const [SymptomForm, setSymptomForm] = useState([
        { HID: '', Usetype: '', SymID: '', Part: '', How: '' }
    ]);
    const [ResearchForm, setResearchForm] = useState([
        { HID: '', Rname: '', Publish_years: '', Rlink: '', Rdetail: '' }
    ])
    const [ChemForm, setChemForm] = useState([
        { HID: '', ChemID: '', Chem_name: '', Chem_formular: ''}
    ])

    async function symptopherb() {
        const res = Axios.get(`http://localhost:3001/symptom`).then((response) => {
            setsymptom(response.data);
            // console.log(response.data);
        });
    }

    async function addmoredata() {
        const res = Axios.get(`http://localhost:3001/addmore/`).then((response) => {
            setAddmore(response.data);
            // console.log(response.data);
        });
    }

    const addLeafherbList = () => {
        Axios.post('http://localhost:3001/create', {

            HID: HID,
            Usetype: Usetype,
            SymID: SymID,
            Part: Part,
            How: How,

            Rname: Rname,
            Publish_years: Publish_years,
            Rlink: Rlink,
            Rdetail: Rdetail,

            ChemID: ChemID,
            Chem_name: Chem_name,
            Chem_formular: Chem_formular,
        }).then(() => {
            setleafherbList([
                ...leafherb,
                {
                    HID: HID,
                    Usetype: Usetype,
                    SymID: SymID,
                    Part: Part,
                    How: How,

                    Rname: Rname,
                    Publish_years: Publish_years,
                    Rlink: Rlink,
                    Rdetail: Rdetail,

                    ChemID: ChemID,
                    Chem_name: Chem_name,
                    Chem_formular: Chem_formular,
                }
            ])
        })
    }

    const SymptomAddFields = () => {
        setSymptomForm([...SymptomForm, { HID: '', Usetype: '', SymID: '', Part: '', How: '' }])
    }
    const SymptomRemoveFields = (index) => {
        const values = [...SymptomForm];
        values.splice(index, 1);
        setSymptomForm(values);
    }

    const ResearchAddFields = () => {
        setResearchForm([...ResearchForm, { HID: '', Rname: '', Publish_years: '', Rlink: '', Rdetail: '' }])
    }
    const ResearchRemoveFields = (index) => {
        const values = [...ResearchForm];
        values.splice(index, 1);
        setResearchForm(values);
    }

    const ChemAddFields = () => {
        setChemForm([...ChemForm, { HID: '', ChemID: '', Chem_name: '', Chem_formular: ''}])
    }
    const ChemRemoveFields = (index) => {
        const values = [...ChemForm];
        values.splice(index, 1);
        setChemForm(values);
    }

    useEffect(() => {
        symptopherb();
        addmoredata();
    })

    return (
        <div className="font-link">
            <Header />
            <div className="information card-body text-left">
                <form class="row " >
                    <h4>สรรพคุณ</h4>
                    {addmore.map((val, key) => (
                        <form class="row g-3 rounded bgc " novalidate>
                            <div class="col-md-1">
                                <label for="validationCustom01" class="form-label">รหัสสมุนไพร</label>
                                <input class="form-control" list="useid" type="text" value={val.HID}
                                // onChange={(event) => {
                                //     setHID(event.target.value)
                                // }}
                                />
                                <datalist id="useid">
                                    <option value={val.HID}>{val.HID}</option>
                                </datalist>
                            </div>
                            <div class="col-md-2">
                                <label for="validationCustom01" class="form-label">ชื่อ</label>
                                <input class="form-control" type="text" placeholder={val.SPname}
                                    disabled />
                            </div>
                            <div class="col-md-2">
                                <label for="validationCustom02" class="form-label">ชื่อสามัญ (ชื่อภาษาอังกฤษ)</label>
                                <input class="form-control" type="text" placeholder={val.Cname}
                                    disabled />
                            </div>
                            <hb />
                        </form>
                    ))}
                    {SymptomForm.map((inputField, index) => (
                        // <form class="row g-3">
                        //     <div key={index}>
                        //         <div class="col-md-2">
                        //             <label for="vinputEmail4" class="form-label">HID</label>
                        //             <div class="input-group has-validation">
                        //                 <input type="text" list="useid" class="form-control" placeholder=""
                        //                     onChange={(event) => {
                        //                         setHID(event.target.value)
                        //                     }}
                        //                 />
                        //                 <datalist id="useid">
                        //                     {addmore.map((val) => (<option value={val.HID}>{val.HID}</option>))}
                        //                 </datalist>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </form>
                        <form class="row g-3  rounded bgc " key={index}>
                            <div class="col-md-1">
                                <label for="vinputEmail4" class="form-label">HID</label>
                                <div class="input-group has-validation">
                                    <input type="text" list="useid" class="form-control" placeholder=""
                                        onChange={(event) => {
                                            setHID(event.target.value)
                                        }}
                                    />
                                    <datalist id="useid">
                                        {addmore.map((val) => (<option value={val.HID}>{val.HID}</option>))}
                                    </datalist>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <label for="exampleDataList" class="form-label">สรรพคุณ</label>
                                <input class="form-control" list="SymptomOptions" id="exampleDataList" placeholder=""
                                    onChange={(event) => {
                                        setSymID(event.target.value)
                                    }}
                                />
                                <datalist id="SymptomOptions">
                                    {symptom.map((val) => (<option value={val.SymID}>{val.Detail}</option>))}
                                </datalist>
                            </div>

                            <div class="col-1">
                                <label for="validationCustom04" class="form-label">วิธีใช้งาน</label>
                                <input class="form-control" list="UseOptions" id="exampleDataList" placeholder=""
                                    onChange={(event) => {
                                        setUsetype(event.target.value)
                                    }}
                                />
                                <datalist id="UseOptions">
                                    <option value="ต้ม">ต้ม</option>
                                    <option value="กินสด">กินสด</option>
                                    <option value="บด">บด</option>
                                    <option value="ตากแห้ง">ตากแห้ง</option>
                                    <option value="ดอง">ดอง</option>
                                </datalist>
                            </div>
                            <div class="col-1">
                                <label for="validationCustom04" class="form-label">ส่วนที่ใช้งาน</label>
                                <input class="form-control" list="PartOptions" id="exampleDataList" placeholder=""
                                    onChange={(event) => {
                                        setPart(event.target.value)
                                    }}
                                />
                                <datalist id="PartOptions">
                                    <option value="ราก">ราก</option>
                                    <option value="ต้น">ต้น</option>
                                    <option value="ใบ">ใบ</option>
                                    <option value="ดอก">ดอก</option>
                                    <option value="ผล">ผล</option>
                                    <option value="เมล็ด">เมล็ด</option>
                                </datalist>
                            </div>
                            <div class="w-50"></div>
                            <div class="col-md-5 ">
                                <label for="exampleFormControlTextarea1" class="form-label">การใช้งาน</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder=""
                                    onChange={(event) => {
                                        setHow(event.target.value)
                                    }}>
                                </textarea>
                            </div>
                            <div class="w-70"></div>
                            <div class="col align-self-center">
                                <IconButton
                                    onClick={() => SymptomRemoveFields(index)}
                                >
                                    <RemoveIcon />
                                </IconButton>
                                <IconButton
                                    onClick={() => SymptomAddFields()}
                                >
                                    <AddIcon />
                                </IconButton>
                            </div>

                        </form>
                    ))}
                    {/* <h4>งานวิจัยที่เกี่ยวข้อง</h4>
                    {ResearchForm.map((inputField, index) => (
                        <form class="row g-3  rounded bgc ">
                            <div class="col-md-5">
                                <label for="validationCustom01" class="form-label">ชื่องานวิจัย</label>
                                <input class="form-control" list="useid" type="text" value=""
                                />
                            </div>
                            <div class="w-55"></div>
                            <div class="col-md-1">
                                <label for="validationCustom01" class="form-label">ปีที่พิมพ์</label>
                                <input class="form-control" type="text" placeholder=""
                                />
                            </div>
                            <div class="col-md-4">
                                <label for="validationCustom02" class="form-label">อ้างอิง (Link)</label>
                                <input class="form-control" type="text" placeholder=""
                                />
                            </div>
                            <div class="w-50"></div>
                            <div class="col-md-5 ">
                                <label for="exampleFormControlTextarea1" class="form-label">บทคัดย่อ</label>
                                <textarea class="form-control" id="Reaserach_detail" rows="3" placeholder=""
                                    onChange={(event) => {
                                        setRdetail(event.target.value)
                                    }}>
                                </textarea>
                            </div>
                            <div class="w-70"></div>
                            <div class="col align-self-center">
                                <IconButton
                                    onClick={() => ResearchRemoveFields(index)}
                                >
                                    <RemoveIcon />
                                </IconButton>
                                <IconButton
                                    onClick={() => ResearchAddFields()}
                                >
                                    <AddIcon />
                                </IconButton>
                            </div>

                            <hb />
                        </form>
                    ))}
                    <h4>สารแคมีที่เกี่ยวข้อง</h4>
                    {ChemForm.map((inputField,index) => (
                        <form class="row g-3  rounded bgc ">
                        <div class="col-md-5">
                            <label for="validationCustom01" class="form-label">ชื่องานวิจัย</label>
                            <input class="form-control" list="useid" type="text" value=""
                            />
                        </div>
                        <div class="w-55"></div>
                        <div class="col-md-1">
                            <label for="validationCustom01" class="form-label">ปีที่พิมพ์</label>
                            <input class="form-control" type="text" placeholder=""
                            />
                        </div>
                        <div class="col-md-4">
                            <label for="validationCustom02" class="form-label">อ้างอิง (Link)</label>
                            <input class="form-control" type="text" placeholder=""
                            />
                        </div>
                        <div class="w-50"></div>
                        <div class="col-md-5 ">
                            <label for="exampleFormControlTextarea1" class="form-label">บทคัดย่อ</label>
                            <textarea class="form-control" id="Reaserach_detail" rows="3" placeholder=""
                                onChange={(event) => {
                                    setRdetail(event.target.value)
                                }}>
                            </textarea>
                        </div>
                        <div class="w-70"></div>
                        <div class="col align-self-center">
                            <IconButton
                                onClick={() => ChemRemoveFields(index)}
                            >
                                <RemoveIcon />
                            </IconButton>
                            <IconButton
                                onClick={() => ChemAddFields()}
                            >
                                <AddIcon />
                            </IconButton>
                        </div>

                        <hb />
                    </form>
                    ))} */}
                    <hb />
                </form>
                <div class="d-grid justify-content-md-end">
                    <button class="btn btn-primary " onClick={(addLeafherbList)} type="submit">Submit form</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Addmore;