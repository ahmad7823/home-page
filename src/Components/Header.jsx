
import React from "react";
import Saly from "../Images/Saly-22.png"
import Vector from "../Images/Vector.png"

function Header() {
    return (
        <>
            <div id="header">
                <nav>
                    <div className="header-logo">
                        <img src={Vector} alt="Vector" />
                    </div>
                    <div class="logo">Bima Kavach</div>
                    <div class="menu">
                        <a href="#company">About Company</a>
                        <a href="#courages">Courages and Plans</a>
                        <a href="#business">Business Plans</a>
                        <a href="#sales">Talk to Sales</a>
                    </div>
                </nav>
            </div>

            <div className="banner">
                <div className="left-content">
                    <h1>Best Way to secure your dream startup</h1>
                    <br />
                    <div className="insurance">
                        <h2>Your Hustle,<br />Our</h2>
                        <button className="insurance-btn">Insurance</button>
                    </div>
                    <br />
                    <p>The easiest way to understand, buy and manage<br />insurance for your business all online.</p>
                    <br />

                    <button className="apply">Apply Now</button>
                    <button className="learn">Learn More</button>


                </div>

                <div className="right-image">
                    <img src={Saly} alt="Saly" />
                </div>
            </div>








        </>
    );
}

export default Header;
