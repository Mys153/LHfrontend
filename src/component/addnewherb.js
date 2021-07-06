import '../App.css'
import Axios from 'axios'
import { useState } from 'react'

import Footer from "../component/footer";
import Header from "../component/header";

const Addnewherb = () => {

    const [SPname, setSPname] = useState("");
    const [Cname, setCname] = useState("");
    const [Sname, setSname] = useState("");
    const [Family, setFamily] = useState("");
    const [Characteristic, setCharacteristic] = useState("");
    const [Ingredient, setIngredient] = useState("");
    const [Img, setImg] = useState("");

    const [leafherb, setleafherbList] = useState([]);

    const addLeafherbList = () => {
        Axios.post('http://localhost:3001/create', {
            SPname: SPname,
            Cname: Cname,
            Sname: Sname,
            Family: Family,
            Characteristic: Characteristic,
            Ingredient: Ingredient,
            Img: Img
        }).then(() => {
            setleafherbList([
                ...leafherb,
                {
                    SPname: SPname,
                    Cname: Cname,
                    Sname: Sname,
                    Family: Family,
                    Characteristic: Characteristic,
                    Ingredient: Ingredient,
                    Img: Img
                }
            ])
        })
    }

    return (
        <div className="font-link">
            <Header />
            <div className="information card-body text-left">
                <h3>Add New Herb</h3>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="Simple Name" className="form-label">
                            Simple Name:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Simple Name.."
                            onChange={(event) => {
                                setSPname(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Common Name" className="form-label">
                            Common Name:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Common Name.."
                            onChange={(event) => {
                                setCname(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Science Name" className="form-label">
                            Science Name:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Science Name.."
                            onChange={(event) => {
                                setSname(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Family Name" className="form-label">
                            Family Name:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Family Name.."
                            onChange={(event) => {
                                setFamily(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Characteristic" className="form-label">
                        Characteristic:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Characteristic.."
                            onChange={(event) => {
                                setCharacteristic(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Ingredient" className="form-label">
                            Ingredient:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ingredient.."
                            onChange={(event) => {
                                setIngredient(event.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Img" className="form-label">
                            Image:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Image.."
                            onChange={(event) => {
                                setImg(event.target.value)
                            }}
                        />
                    </div>
                    <button className="btn btn-success" onClick={addLeafherbList} >Add Herb</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}
export default Addnewherb;