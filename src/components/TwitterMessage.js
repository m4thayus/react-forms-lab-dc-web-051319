import React from "react";

class TwitterMessage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
            remaining: props.maxChars
        };
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
            remaining: this.props.maxChars - event.target.value.length
        })
    }

    render() {
        return (
            <div>
                <strong>Your message:</strong>
                <p>{this.state.remaining}/{this.props.maxChars}</p>
                <input
                    type="text" 
                    name="message" 
                    id="message" 
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default TwitterMessage;
