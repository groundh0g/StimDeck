import React, {Component} from 'react';
import './App.css';
import { NavBar} from "./components/NavBar";
import { Column } from "./components/columns/Column";
import {
    // ColumnSize,
    // Theme,
    SetThemeFunction,
    SetColumnSizeFunction,
    DoActionFunction,
    AppSettings
} from "./components/columns/Types";

type AppProps = AppSettings & {
    themeChanged: SetThemeFunction,
    columnSizeChanged: SetColumnSizeFunction,
    reloadAllColumns: DoActionFunction,
    closeAllColumns: DoActionFunction,
    saveChanges: DoActionFunction
};

type AppState = AppProps & {
    // add more attributes here ...
};

const emptySetColumnSize: SetColumnSizeFunction = (() => { /**/ });
const emptySetTheme: SetThemeFunction = (() => { /**/ });
const emptyDoAction: DoActionFunction = (() => { /**/ });

export default class App extends Component<AppProps, AppState> {
    state: AppState = {
        theme: "light",
        columnSize: "small",
        themeChanged: emptySetTheme,
        columnSizeChanged: emptySetColumnSize,
        reloadAllColumns: emptyDoAction,
        closeAllColumns: emptyDoAction,
        saveChanges: emptyDoAction,
        blacklistKeywords: [],
        blacklistMaxHashtags: 9999,
        blacklistMaxMentions: 9999,
        whitelistUsers: [],
        whitelistFollowers: false,
        whitelistFollowing: false,
    };

    constructor(props: AppProps) {
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
            <div className={`app`}>
                <div className="app-header page-background">
                    <NavBar key={0}
                            theme={"light"}
                            columnSize={"small"}
                            themeChanged={this.props.themeChanged}
                            columnSizeChanged={this.props.columnSizeChanged}
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
                    <div className="app-columns">
                        <Column foo={3} key={3} />
                        <Column foo={4} key={4} />
                        <Column foo={5} key={5} />
                        <Column foo={6} key={6} />
                        <Column foo={7} key={7} />
                        <Column foo={8} key={8} />
                    </div>
                </div>
            </div>
        );
    }
}