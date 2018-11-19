import * as React from "react";
import { PropertyControls, ControlType } from "framer";

// Define type of properties
interface Props {
    apiURL: string;
}

interface States {
    json: any;
}

// const dataURL = "https://randomuser.me/api/?results=";

export class apiCallTemplate extends React.Component<Partial<Props>, States> {
    // Set default properties
    static defaultProps = {
        width: 375,
        height: 375,
        apiURL: "https://randomuser.me/api/"
    };

    state = {
        json: []
    };

    static propertyControls: PropertyControls<Props> = {
        apiURL: {
            type: ControlType.String,
            title: "API URL"
        }
    };

    // Function to fetch a local JSON
    fetchJSON(jsonPath) {
        fetch(jsonPath)
            .then(response => response.json())
            .then(data => this.setState({ json: data.results }));
    }

    // We need this method for the very first time
    // when we drag`n`drop our component from the left panel
    componentDidMount() {
        this.fetchJSON(this.props.apiURL);
    }

    // Compare previous and current Prop. If they are different
    // we could make changes
    componentDidUpdate(prevProps) {
        if (prevProps.apiURL !== this.props.apiURL) {
            this.fetchJSON(this.props.apiURL);
        }
    }

    render() {
        // Log the JSON data to see what it returns.
        // Open the console to find the way to render
        // the desired data.
        console.log(this.state.json)

        return (
            <div>
                {this.state.json.map((card, i) => (
                    <div key={i}>
                        <div
                        // info goes here for the card
                        // card.xxx
                        />
                    </div>
                ))}
            </div>
        );
    }
}
