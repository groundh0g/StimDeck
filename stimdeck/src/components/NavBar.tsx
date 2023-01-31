import React, {Component} from "react";

import "./fontawesome/css/all.css";
import "./NavBar.css";
import {
    SetThemeFunction,
    SetColumnSizeFunction,
    DoActionFunction, AppSettings, ColumnSize, Theme,
} from "./columns/Types";
import {AppSettingsPopup} from "./AppSettingsPopup";

type NavBarProps = AppSettings & {
    themeChanged: SetThemeFunction,
    columnSizeChanged: SetColumnSizeFunction,
    reloadAllColumns: DoActionFunction,
    closeAllColumns: DoActionFunction,
    saveChanges: DoActionFunction
};

type NavBarState = NavBarProps & {
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
        closeAllColumns: emptyDoAction,
        saveChanges: emptyDoAction,
        blacklistKeywords: [] as string[],
        blacklistMaxHashtags: 9999,
        blacklistMaxMentions: 9999,
        whitelistUsers: [] as string[],
        whitelistFollowers: false,
        whitelistFollowing: false,
    };

    constructor(props: NavBarProps) {
        super(props);

        this.state.theme = this.props.theme;
        this.state.columnSize = this.props.columnSize;
        this.state.themeChanged = this.props.themeChanged;
        this.state.columnSizeChanged = this.props.columnSizeChanged;
        this.state.reloadAllColumns = this.props.reloadAllColumns;
        this.state.closeAllColumns = this.props.closeAllColumns;
        this.state.saveChanges = this.props.saveChanges;
        this.state.blacklistKeywords = this.props.blacklistKeywords;
        this.state.blacklistMaxHashtags = this.props.blacklistMaxHashtags;
        this.state.blacklistMaxMentions = this.props.blacklistMaxMentions;
        this.state.whitelistUsers = this.props.whitelistUsers;
        this.state.whitelistFollowers = this.props.whitelistFollowers;
        this.state.whitelistFollowing = this.props.whitelistFollowing;
    }

    render() {
        return (
            <div className="nav-bar">
                <div className="nav-button nav-float-right"
                     onClick={(event) =>
                         this.props.columnSizeChanged(this, event, this.state.columnSize) } ><i className="fas fa-solid fa-sliders"> </i></div>
                <div className="nav-button nav-float-left"
                     onClick={(event) =>
                         this.props.themeChanged(this, event, this.state.theme) }><i className="fas fa-solid fa-plus"> </i></div>
                <div className="nav-title">StimDeck - a HUD for Stimulus.com</div>

                <AppSettingsPopup
                    theme={"light"}
                    columnSize={"small"}
                    themeChanged={emptySetTheme}
                    columnSizeChanged={emptySetColumnSize}
                    reloadAllColumns={emptyDoAction}
                    closeAllColumns={emptyDoAction}
                    blacklistKeywords={[]}
                    blacklistMaxHashtags={9999}
                    blacklistMaxMentions={9999}
                    whitelistUsers={[]}
                    whitelistFollowers={false}
                    whitelistFollowing={false}
                    saveChanges={emptyDoAction}
                />

                {/*<button className="colButton" onClick={(event) => { // @ts-ignore*/}
                {/*    document.querySelector("html").dataset.theme = "light"; }}><i className="fa-solid fa-rotate"></i></button>*/}
                {/*/!* eslint-disable-next-line @typescript-eslint/ban-ts-comment *!/*/}
                {/*<button className="colButton" onClick={(event) => { // @ts-ignore*/}
                {/*    document.querySelector("html").dataset.theme = "dark"; }}><i className="fa-solid fa-up-long"></i></button>*/}
            </div>
        );
    }
}