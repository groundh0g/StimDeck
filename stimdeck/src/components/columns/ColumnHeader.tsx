import React, {Component} from "react";

import {ColumnIconsByType, DoActionFunction} from './Types';

import "../fontawesome/css/all.css";
import "./ColumnHeader.css";
// import {ColumnSettingsPopup} from "../ColumnSettingsPopup";
import {ColumnSettings, ColumnSettingsDefault} from "../../ColumnSettings";

const emptyDoAction: DoActionFunction = (() => { /**/ });

type ColumnHeaderProps = {
    settings: ColumnSettings;
    togglePopup: DoActionFunction;
    isActive: boolean;
};

type ColumnHeaderState = ColumnHeaderProps & {
    // add more attributes here ...
};

export class ColumnHeader extends Component<ColumnHeaderProps, ColumnHeaderState> {
    state: ColumnHeaderState = {
        settings: Object.assign({}, ColumnSettingsDefault),
        togglePopup: emptyDoAction,
        isActive: false,
    };

    constructor(props: ColumnHeaderProps) {
        super(props);

        this.state.settings = this.props.settings;
        this.state.togglePopup = this.props.togglePopup;
        this.state.isActive = this.props.isActive;
    }

    render() {
        return (
            <div>
                <div className={`col-bar ${this.props.isActive ? "col-active" : ""}`}>
                    <div className="col-button col-float-right" onClick={(event) => {
                        this.props.togglePopup(this);
                        event.preventDefault();
                    }}><i className="fas fa-solid fa-sliders"> </i></div>
                    <div className="col-button col-float-left"><i className="fas fa-solid fa-rotate-right"> </i></div>
                    <div className="col-title"><i className={ColumnIconsByType[this.state.settings.type as string]}> </i>&nbsp;&nbsp;{this.state.settings.title}</div>
                </div>
            </div>
        );
    }
}