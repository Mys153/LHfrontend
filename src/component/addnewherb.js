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

    const [ChemID, setChemID] = useState("");
    const [Chem_name, setChem_name] = useState("");
    const [Chem_formular, setChem_formular] = useState("");

    const [leafherb, setleafherbList] = useState([]);
    const [symptom, setsymptom] = useState([]);
    const [family_data, setfamily_data] = useState([]);

    async function symptopherb() {
        const res = Axios.get('http://localhost:3001/symptom').then((response) => {
            setsymptom(response.data);
            // console.log(response.data);
        });
    }

    async function getFamilyData() {
        const res = Axios.get('http://localhost:3001/family').then((response) => {
            setfamily_data(response.data);
        });
    }

    const addLeafherbList = () => {
        Axios.post('http://localhost:3001/create', {
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

            ChemID: ChemID,
            Chem_name: Chem_name,
            Chem_formular: Chem_formular,
        }).then(() => {
            setleafherbList([
                ...leafherb,
                {
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

                    // ChemID: ChemID,
                    // Chem_name: Chem_name,
                    // Chem_formular: Chem_formular,
                }
            ])
        })
    }

    useEffect(() => {
        symptopherb();
        getFamilyData();
    })

    return (
        <div className="font-link">
            <Header />
            <div className="information card-body text-left">
                <h3>Add New Herb</h3>
                {/* ?????????????????????????????? */}
                
                <form class="row g-3 rounded bgc">
                    <h4>??????????????????????????????</h4>
                    {/* <div class="col-md-4">
                        <label for="validationCustom01" class="form-label">?????????????????????????????????</label>
                        <input class="form-control" type="text" placeholder="" 
                            disabled />
                    </div> */}
                    <div class="col-md-4">
                        <label for="validationCustom01" class="form-label">????????????</label>
                        <input type="text" class="form-control" id="validationCustom01" placeholder="????????????..."
                            onChange={(event) => {
                                setSPname(event.target.value)
                            }}
                            required />
                    </div>
                    <div class="col-md-4">
                        <label for="vinputEmail4" class="form-label">??????????????????????????? (??????????????????????????????????????????)</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="???????????????????????????..."
                            onChange={(event) => {
                                setCname(event.target.value)
                            }}
                        />
                    </div>
                    <div class="col-md-4">
                        <label for="vinputEmail4" class="form-label">?????????????????????????????????????????????</label>
                        <div class="input-group has-validation">
                            <input type="text" class="form-control" id="inputEmail4" placeholder="?????????????????????????????????????????????..."
                                onChange={(event) => {
                                    setSname(event.target.value)
                                }}
                            />
                        </div>
                    </div>
                    {/* <div class="col-md-6">
                        <label for="vinputEmail43" class="form-label">????????????????????????????????????</label>
                        <input type="text" class="form-control" id="inputEmail43" placeholder="????????????????????????????????????..."
                        />
                    </div> */}
                    <div class="col-md-3">
                        <label for="exampleDataList" class="form-label">????????????</label>
                        <input class="form-control" list="FamilyOptions" id="exampleDataList" placeholder="Type to search..."
                            onChange={(event) => {
                                setFamily(event.target.value)
                            }}
                        />
                        <datalist id="FamilyOptions">
                            {family_data.map((val) => (<option title={val.Family}>{val.Family}</option>))}
                        </datalist>
                    </div>
                    <div class="col-md-9">
                        <label for="vinputEmail4" class="form-label">?????????????????? (Link)</label>
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

                {/* ?????????????????????????????????????????????????????? */}
                <form class="row g-3 rounded bgc">
                    <h4>??????????????????????????????????????????????????????</h4>
                    <div class="col-md-4">
                        <label for="exampleFormControlTextarea1" class="form-label">?????????</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="?????????..."
                            onChange={(event) => {
                                setRoot(event.target.value)
                            }}>
                        </textarea>
                    </div>
                    <div class="col-md-4">
                        <label for="exampleFormControlTextarea1" class="form-label">???????????????</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="???????????????..."
                            onChange={(event) => {
                                setStem(event.target.value)
                            }}>
                        </textarea>
                    </div>
                    <div class="col-md-4">
                        <label for="exampleFormControlTextarea1" class="form-label">??????</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="??????..."
                            onChange={(event) => {
                                setLeaf(event.target.value)
                            }}>
                        </textarea>
                    </div>
                    <div class="col-md-4">
                        <label for="exampleFormControlTextarea1" class="form-label">?????????</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="?????????..."
                            onChange={(event) => {
                                setFlower(event.target.value)
                            }}>
                        </textarea>
                    </div>
                    <div class="col-md-4">
                        <label for="exampleFormControlTextarea1" class="form-label">??????</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="??????..."
                            onChange={(event) => {
                                setFruit(event.target.value)
                            }}>
                        </textarea>
                    </div>
                    <div class="col-md-4">
                        <label for="exampleFormControlTextarea1" class="form-label">???????????????</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="???????????????..."
                            onChange={(event) => {
                                setSeed(event.target.value)
                            }}>
                        </textarea>
                    </div>
                    <hb />
                </form>

                {/* <form class="row g-3 rounded bgc" >
                    <h4>???????????????????????????????????????????????????????????????</h4>
                    <div class="col-md-5">
                        <label for="validationCustom03" class="form-label">????????????????????????????????????</label>
                        <input type="text" class="form-control" id="validationCustom03" placeholder=""
                            onChange={(event) => {
                                setRname(event.target.value)
                            }}
                        />
                    </div>
                    <div class="col-md-2">
                        <label for="validationCustom03" class="form-label">????????????????????????????????????</label>
                        <input type="text" class="form-control" id="validationCustom03" placeholder=""
                            onChange={(event) => {
                                setPublish_years(event.target.value)
                            }}
                        />
                    </div>
                    <div class="col-md-5">
                        <label for="validationCustom03" class="form-label">???????????????????????????????????? (Link)</label>
                        <input type="text" class="form-control" id="validationCustom03" placeholder=""
                            onChange={(event) => {
                                setRlink(event.target.value)
                            }}
                        />
                    </div>
                    <div class="col-md-12">
                        <label for="exampleFormControlTextarea1" class="form-label">????????????????????????</label>
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
                        {/* <button class="btn btn-primary button" onClick={(addLeafherbList)} type="submit">Submit form</button> */}
                        <a onClick={(addLeafherbList)} href={"/addnewherb/addmore/"} class="btn btn-info">Next</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}
export default Addnewherb;