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

    // const [Rname, setRname] = useState("");
    // const [Publish_years, setPublish_years] = useState("");
    // const [Rlink, setRlink] = useState("");
    // const [Rdetail, setRdetail] = useState("");

    const [leafherb, setleafherbList] = useState([]);
    const [symptom, setsymptom] = useState([]);

    const [addmore, setAddmore] = useState([]);

    const [SymptomForm, setSymptomForm] = useState([
        { HID: '', Usetype: '', SymID: '', Part: '', How: '' }
    ]);

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

            // Rname: Rname,
            // Publish_years: Publish_years,
            // Rlink: Rlink,
            // Rdetail: Rdetail,
        }).then(() => {
            setleafherbList([
                ...leafherb,
                {
                    HID: HID,
                    Usetype: Usetype,
                    SymID: SymID,
                    Part: Part,
                    How: How,

                    // Rname: Rname,
                    // Publish_years: Publish_years,
                    // Rlink: Rlink,
                    // Rdetail: Rdetail,
                }
            ])
        })
    }

    const handleAddFields = () => {
        setSymptomForm([...SymptomForm, { HID: '', Usetype: '', SymID: '', Part: '', How: '' }])

    }

    const handleRemoveFields = (index) => {
        const values = [...SymptomForm];
        values.splice(index, 1);
        setSymptomForm(values);
    }

    useEffect(() => {
        symptopherb();
        addmoredata();
    })

    return (
        <div>
            <Header />
            <div className="information card-body text-left">
                <form class="row g-3 rounded bgc" >
                    <h4>สรรพคุณ</h4>
                    {addmore.map((val, key) => (
                        <form class="row g-3" novalidate>
                            <div class="col-md-1">
                                <label for="validationCustom01" class="form-label">รหัสสมุนไพร</label>
                                <input class="form-control" list="useid" type="text" value={val.HID}
                                    onChange={(event) => {
                                        setHID(event.target.value)
                                        // setHID={val.HID}
                                    }}
                                    
                                    // onChange={val.HID}
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
                        <div key={index}>
                            {/* <TextField
                                    name="firstName"
                                    label="First Name"
                                    variant="filled"
                                    value={inputField.firstName}
                                />
                                <TextField
                                    name="lastName"
                                    label="Last Name"
                                    variant="filled"
                                    value={inputField.lastName}
                                /> */}
                            {/* <div class="col-md-4">
                                    <label for="exampleDataList" class="form-label">สรรพคุณ</label>
                                    <input class="form-control" list="SymptomOptions" id="exampleDataList" placeholder=""
                                        onChange={(event) => {
                                            setSymID(val.HID)
                                        }}
                                    />
                                    <datalist id="SymptomOptions">
                                        {symptom.map((val) => (<option value={val.SymID}>{val.Detail}</option>)
                                        )}
                                    </datalist>
                                </div> */}
                            {/* <div class="col-md-4">
                                <label for="vinputEmail4" class="form-label">HID</label>
                                <div class="input-group has-validation">
                                    <input type="text" list="useid" class="form-control" placeholder=""
                                        onChange={(event) => {
                                            setHID(event.target.value)
                                        }}
                                    />
                                    <datalist id="useid">
                                    <option value={val.HID}>{val.HID}</option>
                                    </datalist>
                                </div>
                            </div> */}
                            {/* {addmore.map((val) => {
                                <div class="col-md-1">
                                <label for="validationCustom01" class="form-label">รหัสสมุนไพร</label>
                                <input class="form-control" type="text" value={val.HID}
                                    onChange={(event) => {
                                        setHID(event.target.value)
                                        // HID(event.target.value)
                                        // setHID={val.HID}
                                    }}
                                    disabled />
                                </div>
                            })} */}
                            <div class="col-md-4">
                                <label for="vinputEmail4" class="form-label">HID</label>
                                <div class="input-group has-validation">
                                    <input type="text" list="useid" class="form-control" placeholder=""
                                        onChange={(event) => {
                                            setHID(event.target.value)
                                        }}
                                    />
                                    <datalist id="useid">
                                    {addmore.map((val) => (<option value={val.HID}>{val.HID}</option>)
                                    )}
                                    </datalist>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label for="exampleDataList" class="form-label">สรรพคุณ</label>
                                <input class="form-control" list="SymptomOptions" id="exampleDataList" placeholder=""
                                    onChange={(event) => {
                                        setSymID(event.target.value)
                                    }}
                                />
                                <datalist id="SymptomOptions">
                                    {symptom.map((val) => (<option value={val.SymID}>{val.Detail}</option>)
                                    )}
                                </datalist>
                            </div>
                            <div class="col-md-4">
                                <label for="validationCustom04" class="form-label">วิธีใช้งาน</label>
                                <input class="form-control" list="UseOptions" id="exampleDataList" placeholder=""
                                    onChange={(event) => {
                                        setUsetype(event.target.value)
                                    }}
                                />
                                <datalist id="UseOptions">
                                    <option title="">ต้ม</option>
                                    <option title="">กินสด</option>
                                    <option title="">บด</option>
                                    <option title="">ตากแห้ง</option>
                                    <option title="">ดอง</option>
                                </datalist>
                            </div>
                            <div class="col-md-4">
                                <label for="validationCustom04" class="form-label">ส่วนที่ใช้งาน</label>
                                <input class="form-control" list="PartOptions" id="exampleDataList" placeholder=""
                                    onChange={(event) => {
                                        setPart(event.target.value)
                                    }}
                                />
                                <datalist id="PartOptions">
                                    <option title="">ราก</option>
                                    <option title="">ต้น</option>
                                    <option title="">ใบ</option>
                                    <option title="">ดอก</option>
                                    <option title="">ผล</option>
                                    <option title="">เมล็ด</option>
                                </datalist>
                            </div>
                            <div class="col-md-12">
                                <label for="exampleFormControlTextarea1" class="form-label">การใช้งาน</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder=""
                                    onChange={(event) => {
                                        setHow(event.target.value)
                                    }}>
                                </textarea>
                            </div>
                            <IconButton
                                onClick={() => handleRemoveFields(index)}
                            >
                                <RemoveIcon />
                            </IconButton>
                            <IconButton
                                onClick={() => handleAddFields()}
                            >
                                <AddIcon />
                            </IconButton>
                        </div>
                    ))}
                    <hb />
                    <button class="btn btn-primary button" onClick={(addLeafherbList)} type="submit">Submit form</button>
                    
                </form>
            </div>
            <Footer />
        </div>
    )
}
export default Addmore;