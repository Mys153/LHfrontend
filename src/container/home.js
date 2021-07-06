import'../App.css'
import React, { Component } from "react";
import Footer from "../component/footer";
import Header from "../component/header";

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <img src="https://www.sunset.com/wp-content/uploads/dba567009322d034eac873f041af8998-750x0-c-default.jpg" class="rounded mx-auto d-block" alt=""></img>
                <Footer />
            </div>
        );
    }
}
export default Home;