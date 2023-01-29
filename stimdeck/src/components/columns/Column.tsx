import React, {Component} from "react";
import "./Column.css";

import { ColumnHeader} from "./ColumnHeader";
import { ColumnContent} from "./ColumnContent";

type ColumnProps = {
    foo: number;
};

type ColumnState = ColumnProps & {
    // add more attributes here ...
};

export class Column extends Component<ColumnProps, ColumnState> {
    state: ColumnState = {
        foo: 0,
    };

    constructor(props: ColumnProps) {
        super(props);

        this.state.foo = this.props.foo;
    }

    render() {
        return (
            <div className="col-content-wrapper">
                <ColumnHeader colType={ "explore" } />
                <ColumnContent foo={1} />
            </div>
        );
    }
}