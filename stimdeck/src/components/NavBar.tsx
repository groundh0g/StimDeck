import React, {Component} from "react";

import "./fontawesome/css/all.css";
import "./NavBar.css";
import {
    Theme,
    SetThemeFunction,
    ColumnSize,
    SetColumnSizeFunction,
    SetBlacklistValuesFunction,
    SetWhitelistValuesFunction, DoActionFunction
} from "./columns/Types";
import {AppSettingsPopup} from "./AppSettingsPopup";

type NavBarProps = {
    theme: Theme;
    columnSize: ColumnSize;
    setTheme: SetThemeFunction; // | undefined;
    setColumnSize: SetColumnSizeFunction; // | undefined;
};

type NavBarState = NavBarProps & {
    // add more attributes here ...
};


const emptySetColumnSize: SetColumnSizeFunction = (() => { /**/ });
const emptySetTheme: SetThemeFunction = (() => { /**/ });
const emptyReloadAllColumns: DoActionFunction = (() => { /**/ });
const emptyCloseAllColumns: DoActionFunction = (() => { /**/ });
const emptySetBlacklistValues: SetBlacklistValuesFunction = (() => { /**/ });
const emptySetWhitelistValues: SetWhitelistValuesFunction = (() => { /**/ });

export class NavBar extends Component<NavBarProps, NavBarState> {

    state: NavBarState = {
        theme: "light",
        columnSize: "small",
        setTheme: emptySetTheme,
        setColumnSize: emptySetColumnSize,
    };

    constructor(props: NavBarProps) {
        super(props);

        this.state.theme = this.props.theme;
        this.state.columnSize = this.props.columnSize;
        this.state.setTheme = this.props.setTheme ?? emptySetTheme;
        this.state.setColumnSize = this.props.setColumnSize ?? emptySetColumnSize;
    }

    render() {
        return (
            <div className="nav-bar">
                <div className="nav-button nav-float-right"
                     onClick={(event) =>
                         this.props.setColumnSize(this, event, this.state.columnSize) } ><i className="fas fa-solid fa-sliders"> </i></div>
                <div className="nav-button nav-float-left"
                     onClick={(event) =>
                         this.props.setTheme(this, event, this.state.theme) }><i className="fas fa-solid fa-plus"> </i></div>
                <div className="nav-title">StimDeck - a HUD for Stimulus.com</div>

                <AppSettingsPopup
                    theme={"light"}
                    columnSize={"small"}
                    setTheme={emptySetTheme}
                    setColumnSize={emptySetColumnSize}
                    reloadAllColumns={emptyReloadAllColumns}
                    closeAllColumns={emptyCloseAllColumns}
                    setBlacklistValues={emptySetBlacklistValues}
                    setWhitelistValues={emptySetWhitelistValues} />

                {/*<button className="colButton" onClick={(event) => { // @ts-ignore*/}
                {/*    document.querySelector("html").dataset.theme = "light"; }}><i className="fa-solid fa-rotate"></i></button>*/}
                {/*/!* eslint-disable-next-line @typescript-eslint/ban-ts-comment *!/*/}
                {/*<button className="colButton" onClick={(event) => { // @ts-ignore*/}
                {/*    document.querySelector("html").dataset.theme = "dark"; }}><i className="fa-solid fa-up-long"></i></button>*/}
            </div>
        );
    }
}