import React, {Component} from "react";
import ReactDOM from "react-dom";
import ImgLoader from "../../img/spinner.gif";

class Form extends Component {
    constructor() {
        super();


        // console.log("the img is ", img);
        this.state = {
            value: "ddss"
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {value} = event.target;
        this.setState(() => {
            return {
                value
            };
        });
    }

    render() {

        let imgPath = "/my_module/dist/" + ImgLoader;

        return (
            <form>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <img src={imgPath}/>
            </form>
        );
    }
}

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form/>, wrapper) : false;