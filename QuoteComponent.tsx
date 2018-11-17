import * as React from "react";
import { PropertyControls, ControlType } from "framer";

// Define type of property
interface Props {
    img: string;
    main: string;
    company: string;
    author: string;
    dark: boolean;
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function error(e) {
    e.currentTarget.src = "https://via.placeholder.com/150";
}

export class Quote extends React.Component<Props> {
    // Set default properties
    static defaultProps = {
        height: 225,
        width: 375,
        img: "https://uinames.com/api/photos/male/17.jpg",
        main: "Lorem Ipsum",
        company: "Framer",
        author: "Addison Schultz",
        dark: false,
    };

    // Items shown in property panel
    static propertyControls: PropertyControls = {
        img: {
            type: ControlType.String,
            title: "Image URL"
        },
        main: {
            type: ControlType.String,
            title: "Quote Text"
        },
        company: {
            type: ControlType.String,
            title: "Company"
        },
        author: {
            type: ControlType.String,
            title: "Author"
        },
        dark: {
            type: ControlType.Boolean,
            title: "Dark Mode"
        }
    };

    render() {
        return (
            <div style={divStyle}>
                <figure style={figureStyle}>
                    {this.props.img && (
                        <img style={quoteImgStyle} src={this.props.img} onError={error} />
                    )}
                    {this.props.img &&
                        this.props.company !== undefined &&
                        this.props.company !== null && (
                            <img
                                style={quoteSVGStyle}
                                src={`https://logo.clearbit.com/${this.props.company}.com`}
                                onError={error}
                            />
                        )}
                </figure>

                <p style={quoteMainStyle}>&quot;{this.props.main}&quot;</p>

                <span style={spanStyle}>
                    <p style={quoteOtherStyle}>{this.props.author}</p>
                    {this.props.company && (
                        <p style={quoteOtherStyle}>, {capitalize(this.props.company)}</p>
                    )}
                </span>
            </div>
        );
    }
}

// let darkText = this.props.dark ? "white" : "black";
// let darkBorder = this.props.dark ? "2px solid black" : "2px solid white";

const divStyle: React.CSSProperties = {
    padding: "20px",
    width: "100%",
    height: "100%",
    textAlign: "center",
    color: "black"
    // color: darkText
};

const spanStyle: React.CSSProperties = {
    display: "inline-block"
};

const quoteMainStyle: React.CSSProperties = {
    fontSize: "18px",
    fontStyle: "italic"
};

const quoteOtherStyle: React.CSSProperties = {
    display: "inline-block",
    fontSize: "18px",
    color: "#aaa"
};

const figureStyle: React.CSSProperties = {
    textAlign: "center",
    position: "relative",
    paddingBottom: "5px"
};

const quoteImgStyle: React.CSSProperties = {
    width: "50px",
    height: "50px",
    borderRadius: "100%"
};

const quoteSVGStyle: React.CSSProperties = {
    position: "absolute",
    left: "50%",
    top: "30px",
    objectFit: "cover",
    border: "2px solid white",
    // border: darkBorder,
    width: "25px",
    height: "25px",
    borderRadius: "100%"
};
