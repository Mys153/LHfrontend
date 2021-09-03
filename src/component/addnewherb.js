import '../App.css'
import Axios from 'axios'
import { useState, useEffect } from 'react'

import Footer from "../component/footer";
import Header from "../component/header";
import { useHistory } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const Addnewherb = () => {

    const [HID, setHID] = useState("");
    const [SPname, setSPname] = useState("");
    const [Cname, setCname] = useState("");
    const [Sname, setSname] = useState("");
    const [Family, setFamily] = useState("");
    const [Pic, setPic] = useState("");
    const [Root, setRoot] = useState("");
    const [Stem, setStem] = useState("");
    const [Leaf, setLeaf] = useState("");
    const [Flower, setFlower] = useState("");
    const [Fruit, setFruit] = useState("");
    const [Seed, setSeed] = useState("");

    // const [UseID, setUseID] = useState("");
    // const [SymID, setSymID] = useState("");
    // const [Part, setPart] = useState("");
    // const [How, setHow] = useState("");

    // const [Rname, setRname] = useState("");
    // const [Publish_years, setPublish_years] = useState("");
    // const [Rlink, setRlink] = useState("");
    // const [Rdetail, setRdetail] = useState("");

    // const [ChemID, setChemID] = useState("");
    // const [Chem_name, setChem_name] = useState("");
    // const [Chem_formular, setChem_formular] = useState("");

    const [leafherb, setleafherbList] = useState([]);
    const [symptom, setsymptom] = useState([]);

    const [SymptomForm, setSymptomForm] = useState([
        { UseID: '', SymID: '', Part: '', How: '' }
    ]);

    async function symptopherb() {
        const res = Axios.get(`http://localhost:3001/symptom`).then((response) => {
            setsymptom(response.data);
            // console.log(response.data);
        });
    }

    const addLeafherbList = () => {
        Axios.post('http://localhost:3001/create', {
            HID: HID,
            SPname: SPname,
            Cname: Cname,
            Sname: Sname,
            Family: Family,
            Pic: Pic,
            Root: Root,
            Stem: Stem,
            Leaf: Leaf,
            Flower: Flower,
            Fruit: Fruit,
            Seed: Seed,

            // UseID: UseID,
            // SymID: SymID,
            // Part: Part,
            // How: How,

            // Rname: Rname,
            // Publish_years: Publish_years,
            // Rlink: Rlink,
            // Rdetail: Rdetail,

            // ChemID: ChemID,
            // Chem_name: Chem_name,
            // Chem_formular: Chem_formular,
        }).then(() => {
            setleafherbList([
                ...leafherb,
                {
                    HID: HID,
                    SPname: SPname,
                    Cname: Cname,
                    Sname: Sname,
                    Family: Family,
                    Pic: Pic,
                    Root: Root,
                    Stem: Stem,
                    Leaf: Leaf,
                    Flower: Flower,
                    Fruit: Fruit,
                    Seed: Seed,

                    // UseID: UseID,
                    // SymID: SymID,
                    // Part: Part,
                    // How: How,

                    // Rname: Rname,
                    // Publish_years: Publish_years,
                    // Rlink: Rlink,
                    // Rdetail: Rdetail,

                    // ChemID: ChemID,
                    // Chem_name: Chem_name,
                    // Chem_formular: Chem_formular,
                }
            ])
        })
    }

    const handleAddFields = () => {
        setSymptomForm([...SymptomForm, { UseID: '', SymID: '', Part: '', How: '' }])

    }

    const handleRemoveFields = (index) => {
        const values = [...SymptomForm];
        values.splice(index, 1);
        setSymptomForm(values);
    }

    useEffect(() => {
        symptopherb();
    })

    return (
        <div className="font-link">
            <Header />
            <div className="information card-body text-left">
                <h3>Add New Herb</h3>
                {/* รายละเอียด */}
                <form class="row g-3 rounded bgc">
                    <h4>รายละเอียด</h4>
                    {/* <div class="col-md-4">
                        <label for="validationCustom01" class="form-label">รหัสสมุนไพร</label>
                        <input class="form-control" type="text" placeholder="" 
                            disabled />
                    </div> */}
                    <div class="col-md-4">
                        <label for="validationCustom01" class="form-label">ชื่อ</label>
                        <input type="text" class="form-control" id="validationCustom01" placeholder="ชื่อ..."
                            onChange={(event) => {
                                setSPname(event.target.value)
                            }}
                            required />
                    </div>
                    <div class="col-md-4">
                        <label for="vinputEmail4" class="form-label">ชื่อสามัญ (ชื่อภาษาอังกฤษ)</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="ชื่อสามัญ..."
                            onChange={(event) => {
                                setCname(event.target.value)
                            }}
                        />
                    </div>
                    <div class="col-md-4">
                        <label for="vinputEmail4" class="form-label">ชื่อวิทยาศาสตร์</label>
                        <div class="input-group has-validation">
                            <input type="text" class="form-control" id="inputEmail4" placeholder="ชื่อวิทยาศาสตร์..."
                                onChange={(event) => {
                                    setSname(event.target.value)
                                }}
                            />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="vinputEmail43" class="form-label">ชื่อท้องถิ่น</label>
                        <input type="text" class="form-control" id="inputEmail43" placeholder="ชื่อท้องถิ่น..."
                        />
                    </div>
                    <div class="col-md-3">
                        <label for="exampleDataList" class="form-label">วงศ์</label>
                        <input class="form-control" list="FamilyOptions" id="exampleDataList" placeholder="Type to search..."
                            onChange={(event) => {
                                setFamily(event.target.value)
                            }}
                        />
                        <datalist id="FamilyOptions">
                            {/* {symptom.map((val) => (<option title={val.SymID}>{val.Detail}</option>)
                            )} */}
                        </datalist>
                    </div>
                    <div class="col-md-4">
                        <label for="vinputEmail4" class="form-label">รูปภาพ (Link)</label>
                        <div class="input-group has-validation">
                            <input type="text" class="form-control" id="inputEmail4" placeholder="Link..."
                                onChange={(event) => {
                                    setPic(event.target.value)
                                }}
                            />
                        </div>
                    </div>

                    <hb />
                </form>

                {/* ลักษณะทางพฤษศาสตร์ */}
                <form class="row g-3 rounded bgc">
                    <h4>ลักษณะทางพฤษศาสตร์</h4>
                    <div class="col-md-4">
                        <label for="exampleFormControlTextarea1" class="form-label">ราก</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="ราก..."
                            onChange={(event) => {
                                setRoot(event.target.value)
                            }}>
                        </textarea>
                    </div>
                    <div class="col-md-4">
                        <label for="exampleFormControlTextarea1" class="form-label">ลำต้น</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="ลำต้น..."
                            onChange={(event) => {
                                setStem(event.target.value)
                            }}>
                        </textarea>
                    </div>
                    <div class="col-md-4">
                        <label for="exampleFormControlTextarea1" class="form-label">ใบ</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="ใบ..."
                            onChange={(event) => {
                                setLeaf(event.target.value)
                            }}>
                        </textarea>
                    </div>
                    <div class="col-md-4">
                        <label for="exampleFormControlTextarea1" class="form-label">ดอก</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="ดอก..."
                            onChange={(event) => {
                                setFlower(event.target.value)
                            }}>
                        </textarea>
                    </div>
                    <div class="col-md-4">
                        <label for="exampleFormControlTextarea1" class="form-label">ผล</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="ผล..."
                            onChange={(event) => {
                                setFruit(event.target.value)
                            }}>
                        </textarea>
                    </div>
                    <div class="col-md-4">
                        <label for="exampleFormControlTextarea1" class="form-label">เมล็ด</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="เมล็ด..."
                            onChange={(event) => {
                                setSeed(event.target.value)
                            }}>
                        </textarea>
                    </div>
                    <hb />
                </form>

                {/* สรรพคุณและวิธีใช้ */}
                {/* <form class="row g-3 rounded bgc" >
                    <h4>สรรพคุณ</h4>
                    {SymptomForm.map((inputField, index) => (
                        <div key={index}>
                            <TextField
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
                            />
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
                                        setUseID(event.target.value)
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
                </form> */}
                {/* <form class="row g-3 rounded bgc" >
                    <h4>สรรพคุณ</h4>
                    {SymptomForm.map((inputField, index) => (
                        <div key={index}>
                            <TextField
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
                            />
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
                                        setUseID(event.target.value)
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
                </form>

                <form class="row g-3 rounded bgc" >
                    <h4>งานวิจัยที่เกี่ยวข้อง</h4>
                    <div class="col-md-5">
                        <label for="validationCustom03" class="form-label">ชื่องานวิจัย</label>
                        <input type="text" class="form-control" id="validationCustom03" placeholder=""
                            onChange={(event) => {
                                setRname(event.target.value)
                            }}
                        />
                    </div>
                    <div class="col-md-2">
                        <label for="validationCustom03" class="form-label">ปีที่ตีพิมพ์</label>
                        <input type="text" class="form-control" id="validationCustom03" placeholder=""
                            onChange={(event) => {
                                setPublish_years(event.target.value)
                            }}
                        />
                    </div>
                    <div class="col-md-5">
                        <label for="validationCustom03" class="form-label">แหล่งอ้างอิง (Link)</label>
                        <input type="text" class="form-control" id="validationCustom03" placeholder=""
                            onChange={(event) => {
                                setRlink(event.target.value)
                            }}
                        />
                    </div>
                    <div class="col-md-12">
                        <label for="exampleFormControlTextarea1" class="form-label">บทคัดย่อ</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder=""
                            onChange={(event) => {
                                setRdetail(event.target.value)
                            }}>
                        </textarea>
                    </div>
                    <hb />
                </form> */}
                <div>
                    <div class="col-12">
                        <button class="btn btn-primary button" onClick={(addLeafherbList)} type="submit">Submit form</button>
                        <a onClick={(addLeafherbList)} href={"/addnewherb/addmore"} class="btn btn-info">more</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}
export default Addnewherb;