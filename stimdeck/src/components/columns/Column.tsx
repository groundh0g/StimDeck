import React, {Component} from "react";
import "./Column.css";

import { ColumnHeader} from "./ColumnHeader";
import { ColumnContent} from "./ColumnContent";
import {ColumnSettings, ColumnSettingsDefault} from "../../ColumnSettings";
import {DoActionFunction} from "./Types";
// import {ColumnSettingsPopup} from "../ColumnSettingsPopup";
// import {ColumnType} from "./Types";

const emptyDoAction: DoActionFunction = (() => { /**/ });

type ColumnProps = {
    settings: ColumnSettings;
    togglePopup: DoActionFunction;
    isActive: boolean;
    // add more attributes here ...
};

type ColumnState = ColumnProps & {
    id: string;
    // add more attributes here ...
};

export class Column extends Component<ColumnProps, ColumnState> {
    state: ColumnState = {
        id: "column000-wrapper",
        settings: Object.assign({}, ColumnSettingsDefault),
        togglePopup: emptyDoAction,
        isActive: false,
    };

    static counter = 0;
    static getNextId() : string {
        return `column-${String(++Column.counter).padStart(3, "0")}-wrapper`;
    }

    constructor(props: ColumnProps) {
        super(props);

        this.state.id = Column.getNextId();
        this.state.settings = Object.assign({}, this.props.settings);
        this.state.isActive = this.props.isActive;
        // this.state.togglePopup = this.props.togglePopup;
    }

    render() {
        return (
            <div id={this.state.id} className="col-content-wrapper">
                <ColumnHeader settings={this.state.settings} isActive={this.props.isActive} togglePopup={() => {
                    this.props.togglePopup(this);
                }} />
                <ColumnContent isActive={this.props.isActive} />
            </div>
        );
    }
}