import React, {Component} from "react";

import "./fontawesome/css/all.css";
import "./NavBar.css";
import {
    SetThemeFunction,
    SetColumnSizeFunction,
    DoActionFunction, AppSettings, ColumnSize, Theme,
} from "./columns/Types";

type NavBarProps = AppSettings & {
    themeChanged: SetThemeFunction,
    columnSizeChanged: SetColumnSizeFunction,
    reloadAllColumns: DoActionFunction,
    toggleSettingsPopup: DoActionFunction,
    toggleAddColumnPopup: DoActionFunction,
};

type NavBarState = NavBarProps & {
    // addColumnSettings: ColumnSettings,
    // editColumnSettings: ColumnSettings,
    // add more attributes here ...
};

const emptySetColumnSize: SetColumnSizeFunction = (() => { /**/ });
const emptySetTheme: SetThemeFunction = (() => { /**/ });
const emptyDoAction: DoActionFunction = (() => { /**/ });

export class NavBar extends Component<NavBarProps, NavBarState> {

    state = {
        theme: "light" as Theme,
        columnSize: "small" as ColumnSize,
        themeChanged: emptySetTheme,
        columnSizeChanged: emptySetColumnSize,
        reloadAllColumns: emptyDoAction,
        blacklistKeywords: [] as string[],
        blacklistMaxHashtags: 9999,
        blacklistMaxMentions: 9999,
        whitelistUsers: [] as string[],
        whitelistFollowers: false,
        whitelistFollowing: false,
        toggleSettingsPopup: emptyDoAction,
        toggleAddColumnPopup: emptyDoAction,
    };

    constructor(props: NavBarProps) {
        super(props);

        this.state.theme = this.props.theme;
        this.state.columnSize = this.props.columnSize;
        this.state.themeChanged = this.props.themeChanged;
        this.state.columnSizeChanged = this.props.columnSizeChanged;
        this.state.reloadAllColumns = this.props.reloadAllColumns;
        this.state.blacklistKeywords = this.props.blacklistKeywords;
        this.state.blacklistMaxHashtags = this.props.blacklistMaxHashtags;
        this.state.blacklistMaxMentions = this.props.blacklistMaxMentions;
        this.state.whitelistUsers = this.props.whitelistUsers;
        this.state.whitelistFollowers = this.props.whitelistFollowers;
        this.state.whitelistFollowing = this.props.whitelistFollowing;
        // this.state.addColumnSettings = Object.assign({}, ColumnSettingsDefault);
        // this.state.editColumnSettings = Object.assign({}, ColumnSettingsDefault);
    }

    render() {
        return (
            <div className="nav-bar">
                <div className="nav-button nav-float-right"
                     onClick={(event) => {
                         this.props.toggleSettingsPopup(this);
                         // (document.querySelector(".nav-settings-popup") as HTMLElement).classList.toggle("hidden");
                     }}><i className="fas fa-solid fa-sliders"> </i></div>
                <div className="nav-button nav-float-left"
                     onClick={(event) => {
                         this.props.toggleAddColumnPopup(this);
                         // (document.querySelector("#col-popup-add") as HTMLElement).classList.toggle("hidden");
                     }}><i className="fas fa-solid fa-plus"> </i></div>
                <div className="nav-title">StimDeck - a HUD for Stimulus.com</div>
            </div>
        );
    }
}