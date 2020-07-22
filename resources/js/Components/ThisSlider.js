import * as React from 'react';

export class ThisSlider extends React.Component {
    constructor(props) {
        super(props);
        let totalSlides = 9;
        this.state = {
            activeIndex: 0,
            activeClass: ["active","","","","","","","",""],
        }
        this.numbers = [...Array(totalSlides).keys()];
        this.updateClassList = this.updateClassList.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.nextSlide(),
            3000
        );
    }

    updateClassList(state) {
        return state.activeClass.map( function(text,i) {
            return (i === state.activeIndex) ? "active" : ""
        });
    }

    nextSlide() {
        const nextNum = function(index, length) { return (index < length) ? index+1 : 0 }
        let newIndex = nextNum(this.state.activeIndex, this.numbers.length);

        this.setState({
            activeIndex: newIndex,
            activeClass: this.updateClassList(this.state)
        });
    }

    /* slides are 1-9 */
    render() {
        const slides = this.numbers.map((number, i) => 
            <img src={"/images/this-slides/slide" + (number+1).toString() + ".png"} key={i} className={this.state.activeClass[number]} alt="" />
        );

        return (
            <div id="slideContainer">
                {slides}
            </div>
        );
    }
}

export default ThisSlider;