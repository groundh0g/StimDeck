import React, {Component} from "react";

//import "../fontawesome/css/all.css";
import "./ColumnContent.css";

type ColumnContentProps = {
    foo: number;
};

type ColumnContentState = {
    foo: number;
};

export class ColumnContent extends Component<ColumnContentProps, ColumnContentState> {
    state: ColumnContentState = {
        foo: 0,
    };

    constructor(props: ColumnContentProps) {
        super(props);

        // this.state.foo = this.props.foo;
    }

    render() {
        return (
            <div className="colContentOuter">
                <div className="colContent">
                    Loading ...
                </div>
            </div>
        );
    }
}