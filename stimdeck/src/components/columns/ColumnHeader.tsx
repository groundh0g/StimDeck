import React, {Component} from "react";

import { ColumnType } from './Types';

import "../fontawesome/css/all.css";
import "./ColumnHeader.css";

type ColumnHeaderProps = {
    colType: ColumnType;
};

type ColumnHeaderState = ColumnHeaderProps & {
    // add more attributes here ...
};

export class ColumnHeader extends Component<ColumnHeaderProps, ColumnHeaderState> {
    state: ColumnHeaderState = {
        colType: "explore",
    };

    constructor(props: ColumnHeaderProps) {
        super(props);

        this.state.colType = this.props.colType;
    }

    render() {
        return (
            <div className="col-bar">
                <div className="col-button col-float-right"><i className="fas fa-solid fa-sliders"></i></div>
                <div className="col-button col-float-left"><i className="fas fa-solid fa-rotate-right"></i></div>
                <div className="col-title"><i className="fas fa-solid fa-user"></i>&nbsp;&nbsp;@groundh0g</div>
            </div>
        );
    }
}