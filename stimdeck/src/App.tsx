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
    AppSettings, ActiveDialog
} from "./components/columns/Types";
import {ColumnSettings, ColumnSettingsDefault} from "./ColumnSettings";
import {ColumnSettingsPopup} from "./components/ColumnSettingsPopup";
import {AppSettingsPopup} from "./components/AppSettingsPopup";

const emptySetColumnSize: SetColumnSizeFunction = (() => { /**/ });
const emptySetTheme: SetThemeFunction = (() => { /**/ });
const emptyDoAction: DoActionFunction = (() => { /**/ });

const MAX_COUNT = 9999;

type AppProps = AppSettings & {
    themeChanged: SetThemeFunction;
    columnSizeChanged: SetColumnSizeFunction;
    reloadAllColumns: DoActionFunction;
    closeAllColumns: DoActionFunction;
    saveChanges: DoActionFunction;
};

type AppState = AppProps & {
    columns: ColumnSettings[],
    activeColumnIndex: number,
    activeColumnSettings: ColumnSettings,
    activeDialog: ActiveDialog,
    // add more attributes here ...
};

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
        blacklistMaxHashtags: MAX_COUNT,
        blacklistMaxMentions: MAX_COUNT,
        whitelistUsers: [],
        whitelistFollowers: false,
        whitelistFollowing: false,
        columns: [],
        activeColumnIndex: -1,
        activeColumnSettings: Object.assign({}, ColumnSettingsDefault),
        activeDialog: "none",
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
        this.state.columns = [] as ColumnSettings[];

        this.state.columns.push({
            type: "explore",
            title: "Explore",
            text: "",
            url: "/explore",
            icon: "fa-regular fa-compass"
        });
        this.state.columns.push({
            type: "profile",
            title: "groundh0g",
            text: "groundh0g",
            url: "/groundh0g",
            icon: "fa-solid fa-user"
        });
        this.state.columns.push({
            type: "hashtag",
            title: "fauxcabulary",
            text: "fauxcabulary",
            url: "/search/keyword?q=%23fauxcabulary&tab=stims",
            icon: "fa-solid fa-hashtag"
        });

        this.state.columns.push({
            type: "explore",
            title: "Explore",
            text: "",
            url: "/explore",
            icon: "fa-regular fa-compass"
        });
        this.state.columns.push({
            type: "profile",
            title: "groundh0g",
            text: "groundh0g",
            url: "/groundh0g",
            icon: "fa-solid fa-user"
        });
        this.state.columns.push({
            type: "hashtag",
            title: "fauxcabulary",
            text: "fauxcabulary",
            url: "/search/keyword?q=%23fauxcabulary&tab=stims",
            icon: "fa-solid fa-hashtag"
        });

        this.state.activeColumnIndex = -1;
        this.state.activeColumnSettings = Object.assign({}, ColumnSettingsDefault);

        this.closeDialogs.bind(this);
        this.closeAllColumns.bind(this);
        this.makeColumnFirst.bind(this);
        this.moveColumnLeft.bind(this);
        this.refreshColumn.bind(this);
        this.removeColumn.bind(this);
        this.moveColumnRight.bind(this);
        this.makeColumnLast.bind(this);
    }

    static counter = 999;
    static getNextId() : string {
        return `popup-${String(++Column.counter).padStart(4, "0")}-wrapper`;
    }

    closeDialogs() {
        const newState = {
            activeDialog: "none" as ActiveDialog,
            activeColumnIndex: -1,
            activeColumnSettings: Object.assign({}, ColumnSettingsDefault),
        };
        this.setState(newState);
    }

    closeAllColumns() {
        const newState = {
            activeDialog: "editColumn" as ActiveDialog,
            activeColumnIndex: -1,
            activeColumnSettings: Object.assign({}, ColumnSettingsDefault),
            columns: [] as ColumnSettings[],
        };
        this.setState(newState);
    }

    saveChanges() {
        const columns = Array.of(...this.state.columns);
        columns.push(ColumnSettingsPopup.getFieldValues());
        const newState = {
            activeDialog: "none" as ActiveDialog,
            activeColumnIndex: -1,
            activeColumnSettings: Object.assign({}, ColumnSettingsDefault),
            columns: columns,
        };
        this.setState(newState);
    }

    render() {
        const colIndex = this.state.activeColumnIndex;
        const columnEditMode = colIndex >= 0 ? "edit" : "add";
        const showAppSettings = this.state.activeDialog === "settings";
        const showColSettings = ["addColumn", "editColumn"].indexOf(this.state.activeDialog) >= 0;

        return (
            <div className={"app"}>
                <div className="app-header page-background">
                    <NavBar key={0}
                            theme={"light"}
                            columnSize={"small"}
                            themeChanged={this.props.themeChanged}
                            columnSizeChanged={this.props.columnSizeChanged}
                            reloadAllColumns={emptyDoAction}
                            blacklistKeywords={[]}
                            blacklistMaxHashtags={9999}
                            blacklistMaxMentions={9999}
                            whitelistUsers={[]}
                            whitelistFollowers={false}
                            whitelistFollowing={false}
                            toggleSettingsPopup={() => {
                                // this is the navbar settings
                                const newState = {
                                    activeDialog: (this.state.activeDialog === "none" ? "settings" : "none") as ActiveDialog,
                                    activeColumnIndex: -1,
                                    activeColumnSettings: Object.assign({}, ColumnSettingsDefault),
                                };
                                this.setState(newState);
                            }}
                            toggleAddColumnPopup={() => {
                                // this is the navbar add-column
                                const newState = {
                                    activeDialog: (this.state.activeDialog === "none" ? "addColumn" : "none") as ActiveDialog,
                                    activeColumnIndex: -1,
                                    activeColumnSettings: Object.assign({}, ColumnSettingsDefault),
                                };
                                this.setState(newState);
                            }}
                    />
                    <div className="app-columns">
                        {(this.state.columns).map((column, index, array) => (
                            <Column settings={column} key={App.getNextId()} isActive={index === this.state.activeColumnIndex} togglePopup={() => {
                                // this is the column header
                                const newState = {
                                    activeDialog: (this.state.activeDialog === "none" ? "editColumn" : "none") as ActiveDialog,
                                    activeColumnIndex: index,
                                    activeColumnSettings: (index >= 0 && index < this.state.columns.length) ? this.state.columns[index] : Object.assign({}, ColumnSettingsDefault),
                                };
                                this.setState(newState);
                            }} />
                        ))}
                    </div>
                </div>
                <AppSettingsPopup
                    key={App.getNextId()}
                    theme={"light"}
                    columnSize={"small"}
                    themeChanged={this.props.themeChanged}
                    columnSizeChanged={this.props.columnSizeChanged}
                    reloadAllColumns={emptyDoAction}
                    closeAllColumns={() => { this.closeAllColumns(); }}
                    blacklistKeywords={[]}
                    blacklistMaxHashtags={9999}
                    blacklistMaxMentions={9999}
                    whitelistUsers={[]}
                    whitelistFollowers={false}
                    whitelistFollowing={false}
                    saveChanges={() => { this.saveChanges(); }}
                    show={showAppSettings}
                    closeDialog={() => { this.closeDialogs(); }}
                />
                <ColumnSettingsPopup
                    key={App.getNextId()}
                    settings={this.state.activeColumnSettings}
                    popupMode={columnEditMode}
                    saveChanges={() => { this.saveChanges(); }}
                    show={showColSettings}
                    closeDialog={() => { this.closeDialogs(); }}
                    makeColumnFirst={() => { this.makeColumnFirst(); }}
                    moveColumnLeft={() => { this.moveColumnLeft(); }}
                    refreshColumn={() => { this.refreshColumn(); }}
                    removeColumn={() => { this.removeColumn(); }}
                    moveColumnRight={() => { this.moveColumnRight(); }}
                    makeColumnLast={() => { this.makeColumnLast(); }}
                    columnIndex={this.state.activeColumnIndex}
                />
            </div>
        );
    }

    makeColumnFirst() {
        if(this.state.activeColumnIndex >= 0) {
            const columnsCopy = this.state.columns.slice();
            const settings = columnsCopy.splice(this.state.activeColumnIndex, 1);
            const columns = Array.of(settings[0], ...columnsCopy);
            const newState = {
                columns: columns,
                activeColumnIndex: 0,
            };
            console.log("after make first", newState)
            this.setState(newState);
        }
    }

    moveColumnLeft() {
        if(this.state.activeColumnIndex > 0) {
            const columnsCopy = this.state.columns.slice();
            const settings = columnsCopy.splice(this.state.activeColumnIndex, 1);
            columnsCopy.splice(this.state.activeColumnIndex - 1, 0, settings[0]);
            const newState = {
                columns: columnsCopy,
                activeColumnIndex: this.state.activeColumnIndex - 1,
            };
            console.log("after move left", newState)
            this.setState(newState);
        }
    }

    refreshColumn() { /* TODO refresh BrowserView */ }

    removeColumn() {
        const colIndex = this.state.activeColumnIndex;
        if(colIndex >= 0) {
            const columnsCopy = this.state.columns.slice();
            columnsCopy.splice(colIndex, 1);
            const newState = {
                columns: columnsCopy,
                activeColumnIndex: Math.max(colIndex - 1, 0),
            };
            console.log("after remove", newState)
            this.setState(newState);
        }
    }

    moveColumnRight() {
        const colIndex = this.state.activeColumnIndex;
        if(colIndex >= 0 && colIndex < this.state.columns.length - 1) {
            const columnsCopy = this.state.columns.slice();
            const settings = columnsCopy.splice(colIndex, 1);
            columnsCopy.splice(colIndex + 1, 0, settings[0]);
            const newState = {
                columns: columnsCopy,
                activeColumnIndex: colIndex + 1,
            };
            console.log("after move right", newState)
            this.setState(newState);
        }
    }

    makeColumnLast() {
        if(this.state.activeColumnIndex >= 0) {
            const columnsCopy = this.state.columns.slice();
            const settings = columnsCopy.splice(this.state.activeColumnIndex, 1);
            const columns = [...columnsCopy, ...settings];
            const newState = {
                columns: columns,
                activeColumnSettings: settings[0],
                activeColumnIndex: columns.length - 1,
            };
            console.log("after make last", newState)
            this.setState(newState);
            this.forceUpdate();
        }
    }
}