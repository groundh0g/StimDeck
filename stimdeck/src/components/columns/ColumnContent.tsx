import React, {Component} from "react";

//import "../fontawesome/css/all.css";
import "./ColumnContent.css";

type ColumnContentProps = {
    isActive: boolean;
    // add more attributes here ...
};

type ColumnContentState = ColumnContentProps & {
    // add more attributes here ...
};

export class ColumnContent extends Component<ColumnContentProps, ColumnContentState> {
    state: ColumnContentState = {
        isActive: false,
    };

    constructor(props: ColumnContentProps) {
        super(props);

        this.state.isActive = this.props.isActive;
    }

    render() {
        return (
            <div className={`col-content ${this.props.isActive ? "col-content-active" : ""}`}>
                Loading ...
            </div>
        );
    }
}