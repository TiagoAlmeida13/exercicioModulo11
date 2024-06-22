import React, { Component } from "react";
import Slider from "react-slick";

import Poke1 from '../images/poke1.jpg';
import Poke2 from '../images/poke2.jpg';
import Poke3 from '../images/poke3.jpg';
import Poke4 from '../images/poke4.jpg';

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <img src={Poke1} alt="Poke1" />
                    </div>
                    <div>
                        <img src={Poke2} alt="Poke2" />
                    </div>
                    <div>
                        <img src={Poke3} alt="Poke3" />
                    </div>
                    <div>
                        <img src={Poke4} alt="Poke4" />
                    </div>


                </Slider>
            </div>
        );
    }
}
