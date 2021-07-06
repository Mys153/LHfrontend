import '../App.css'
import '../css/show.css'

import React, { Component } from "react";
import { Link } from "react-router-dom"

class Header extends Component {
    render() {
        const style = {
            height: 100,
        }
        return (
            <div className="container-fulid bg-success" >
                <div className="row">
                    <div className="col-md-8 text-left mt-2">
                        <h1 className="text-light ml-2">
                            <img style={style} src="https://lh3.googleusercontent.com/proxy/9ycrEcEw1N2MXAlY6lDjU_WBBN4owHF6sus-MaHnukjyTXktUl8myUUF8jPiNYTW3lPZjlxxgugx6h3WJzveUhYtrBN_WIDNb1NK8u7fhwQZYgTKclFBim98drj0LyOEpVrs" alt="" />
                            Leaf Herb
                        </h1>
                    </div>
                    <div className="inline col-md-4 text-right mt-5">
                    {/* <div class="box">
                        <input type="checkbox" id="check" />
                            <div class="search-box">
                                <input type="text" placeholder="Type here..." />
                                <label for="check" class="icon">
                                    <i class="fas fa-search"></i>
                                </label>
                            </div>
                    </div> */}
                        <ul className="text-light">
                            <li className="list-inline-item title "> </li>
                            <li className="list-inline-item title ">|</li>
                            <li className="list-inline-item title "><Link to={"/"} className="text-light text-decoration-none">Home</Link></li>
                            <li className="list-inline-item title ">|</li>
                            <li className="list-inline-item title "><Link to={"/allherb"} className="text-light text-decoration-none">All Herb</Link></li>
                            <li className="list-inline-item title ">|</li>
                            <li className="list-inline-item title "><Link to={"/addnewherb"} className="text-light text-decoration-none">New Herb</Link></li>
                            <li className="list-inline-item title ">|</li>
                            <li className="list-inline-item title "><Link to={"/editherb"} className="text-light text-decoration-none">Edit Herb</Link></li>
                            <li className="list-inline-item title ">|</li>
                            <li className="list-inline-item title "> </li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>

        );
    }

}
export default Header;