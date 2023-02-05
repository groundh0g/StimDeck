import React, {Component} from "react";

import "./ColumnSettingsPopup.css";
import "./fontawesome/css/all.css";
import {ColumnSettings, ColumnSettingsDefault} from "../ColumnSettings";
import {ColumnType, DoActionFunction, PopupMode} from "./columns/Types";
import ButtonWithTooltip from "./ButtonWithTooltip";

// import {
//     Theme,
//     SetThemeFunction,
//     ColumnSize,
//     SetColumnSizeFunction,
//     DoActionFunction,
//     AppSettings
// } from "./columns/Types";
// import {ToggleButton} from "./ToggleButton";

type ColumnSettingsPopupProps = {
    popupMode: PopupMode;
    show: boolean;
    settings: ColumnSettings;
    closeDialog: DoActionFunction;
    saveChanges: DoActionFunction;
    makeColumnFirst: DoActionFunction;
    moveColumnLeft: DoActionFunction;
    refreshColumn: DoActionFunction;
    removeColumn: DoActionFunction;
    moveColumnRight: DoActionFunction;
    makeColumnLast: DoActionFunction;
    columnIndex: number,
    // add more attributes here ...
};

type ColumnSettingsPopupState = ColumnSettingsPopupProps & {
    // add more attributes here ...
};

// const emptySetColumnSize: SetColumnSizeFunction = (() => { /**/ });
// const emptySetTheme: SetThemeFunction = (() => { /**/ });
const emptyDoAction: DoActionFunction = (() => { /**/ });

// type ToolbarTitles = {[key: string] : string};
// const tooltipValues : ToolbarTitles = {
//     "first": "make this the first column",
//     "left": "move this column to the left",
//     "reload": "reload this column's content",
//     "close": "remove this column",
//     "right": "move this column to the right",
//     "last": "make thie the last column",
// };

export class ColumnSettingsPopup extends Component<ColumnSettingsPopupProps, ColumnSettingsPopupState> {

    state = {
        settings: Object.assign({}, ColumnSettingsDefault),
        popupMode: "add" as PopupMode,
        show: false,
        closeDialog: emptyDoAction,
        saveChanges: emptyDoAction,
        makeColumnFirst: emptyDoAction,
        moveColumnLeft: emptyDoAction,
        refreshColumn: emptyDoAction,
        removeColumn: emptyDoAction,
        moveColumnRight: emptyDoAction,
        makeColumnLast: emptyDoAction,
        columnIndex: -1,
    };

    constructor(props: ColumnSettingsPopupProps) {
        super(props);

        this.state.settings = this.props.settings;
        this.state.popupMode = this.props.popupMode;
        this.state.show = this.props.show;
        this.state.closeDialog = this.props.closeDialog;
        this.state.saveChanges = this.props.saveChanges;
        this.state.refreshColumn = this.props.refreshColumn;
        this.state.removeColumn = this.props.removeColumn;
        this.state.moveColumnLeft = this.props.moveColumnLeft;
        this.state.makeColumnFirst = this.props.makeColumnFirst;
        this.state.makeColumnLast = this.props.makeColumnLast;
        this.state.moveColumnRight = this.props.moveColumnRight;
        this.state.columnIndex = this.props.columnIndex;
    }

    static colTypeIcons = [
        "fa-solid", "fa-regular",
        "fa-user",
        "fa-house",
        "fa-compass", // fa-regular
        "fa-hashtag",
        "fa-magnifying-glass",
        "fa-money-bill-1-wave",
        "fa-bell"];

    static getFieldValues() : ColumnSettings {
        const result = Object.assign({}, ColumnSettingsDefault);

        result.type = (document.querySelector("#col-type-select") as HTMLSelectElement).value as ColumnType;
        result.text = (document.querySelector("#col-type-input") as HTMLInputElement).value;

        const text = result.text.replace("@","").replace("#", "");
        const parts = text.split(/[\s,;|]+/);
        result.title = parts.join(" ");
        result.url = (document.querySelector("#col-type-url-preview") as HTMLElement).innerText;
        const icon = (document.querySelector("#col-type-icon") as HTMLElement);
        icon.classList.remove("big-icon");
        result.icon = icon.classList.value;

        return result;
    }

    static updateInputFields(newValue: ColumnType, select?: HTMLElement) {
        if (select) {
            (select as HTMLSelectElement).value = newValue;
        }
        const icon = document.querySelector("#col-type-icon") as HTMLElement;
        icon.classList.remove(...ColumnSettingsPopup.colTypeIcons);
        const input = document.querySelector("#col-type-input") as HTMLElement;
        input.setAttribute("placeholder", "");
        input.removeAttribute("disabled");
        const span = document.querySelector("#col-type-url-preview") as HTMLElement;
        const text = (input as HTMLInputElement).value.replace("@","").replace("#", "");
        const parts = text.split(/[\s,;|]+/);
        let joined = "";
        switch (newValue) {
            case "explore":
                icon.classList.add("fa-regular", "fa-compass");
                input.setAttribute("disabled", "disabled");
                span.innerHTML = `<a href="https://stimulus.com/explore" target="_blank">/explore</a>`;
                (input as HTMLInputElement).value = "";
                break;
            case "home":
                icon.classList.add("fa-solid", "fa-house");
                input.setAttribute("disabled", "disabled");
                span.innerHTML = `<a href="https://stimulus.com/feed/latest" target="_blank">/feed/latest</a>`;
                (input as HTMLInputElement).value = "";
                break;
            case "profile":
                icon.classList.add("fa-solid", "fa-user");
                input.setAttribute("placeholder", "@username");
                span.innerHTML = `<a href="https://stimulus.com/${text || 'groundh0g'}" target="_blank">/${text || 'username'}</a>`;
                break;
            case "notifications":
                icon.classList.add("fa-solid", "fa-bell");
                input.setAttribute("disabled", "disabled");
                span.innerHTML = `<a href="https://stimulus.com/notifications" target="_blank">/notifications</a>`;
                (input as HTMLInputElement).value = "";
                break;
            case "hashtag":
                icon.classList.add("fa-solid", "fa-hashtag");
                input.setAttribute("placeholder", "#hashtag");
                joined = parts.join("+%23");
                span.innerHTML = `<a href="https://stimulus.com/search/keyword?q=%23${joined || 'fauxcabulary'}" target="_blank">/search/keyword?q=%23${joined || 'hashtag'}</a>`;
                break;
            case "keywords":
                icon.classList.add("fa-solid", "fa-magnifying-glass");
                input.setAttribute("placeholder", "search term(s)");
                joined = parts.join("+");
                span.innerHTML = `<a href="https://stimulus.com/search/keyword?q=${joined || 'artist'}" target="_blank">/search/keyword?q=${joined || 'artist'}</a>`;
                break;
            case "giveaways":
                icon.classList.add("fa-solid", "fa-money-bill-1-wave");
                input.setAttribute("disabled", "disabled");
                span.innerHTML = `<a href="https://stimulus.com/giveaways" target="_blank">/giveaways</a>`;
                (input as HTMLInputElement).value = "";
                break;
        }
    }

    componentDidMount() {
        const select = document.querySelector("#col-type-select") as HTMLElement;
        ColumnSettingsPopup.updateInputFields(this.state.settings.type, select);
    }

    render() {
        const isAddColumnMode = this.props.popupMode === "add";
        const title = isAddColumnMode ? "Add a New Column" : "Column Settings";
        const hiddenToolbar = isAddColumnMode ? "hidden" : "";

        return <div id="col-settings-popup" className={`col-settings-popup ${this.props.show ? "" : "hidden"}`}>
            <div className="col-settings-popup-heading">{title} <span className="nav-settings-close-button" onClick={(event) => {
                this.props.closeDialog(this);
                // (document.querySelector(".col-settings-popup") as HTMLElement).classList.toggle("hidden");
            }}><i className="fa-solid fa-rectangle-xmark"> </i></span></div>

            <table>
                <tbody>
                <tr className={`nav-settings-row ${hiddenToolbar}`}>
                    <td colSpan={2}>
                        <div style={{whiteSpace: "nowrap"}}>
                            <div className="col-settings-toolbar" style={{textAlign: "center"}}>
                                <span className="col-float-right-xx" style={{float: "right", textAlign: "right"}}>
                                    <ButtonWithTooltip icon="fa-solid fa-angle-right" onClick={() => {
                                        this.props.moveColumnRight(this, this.state.columnIndex);
                                    }}>
                                        <strong>Move Right</strong><br/>
                                        Move this column to the right.
                                    </ButtonWithTooltip>
                                    <ButtonWithTooltip icon="fa-solid fa-angles-right" onClick={() => {
                                        this.props.makeColumnLast(this, this.state.columnIndex);
                                    }}>
                                        <strong>Make Last</strong><br/>
                                        Make this the rightmost column.
                                    </ButtonWithTooltip>
                                </span>
                                <span className="col-float-left-xx" style={{float: "left", textAlign: "left"}}>
                                    <ButtonWithTooltip icon="fa-solid fa-angles-left" onClick={() => {
                                        this.props.makeColumnFirst(this, this.state.columnIndex);
                                    }}>
                                        <strong>Make First</strong><br/>
                                        Make this the leftmost column.
                                    </ButtonWithTooltip>
                                    <ButtonWithTooltip icon="fa-solid fa-angle-left" onClick={() => {
                                        this.props.moveColumnLeft(this, this.state.columnIndex);
                                    }}>
                                        <strong>Move Left</strong><br/>
                                        Move this column to the left.
                                    </ButtonWithTooltip>
                                </span>
                                <ButtonWithTooltip icon="fa-solid fa-rotate" onClick={() => {
                                    this.props.refreshColumn(this, this.state.columnIndex);
                                    // this.props.closeDialog(this);
                                }}>
                                    <strong>Reload</strong><br/>
                                    Refresh this column's content.
                                </ButtonWithTooltip>
                                <ButtonWithTooltip icon="fa-solid fa-x" onClick={() => {
                                    this.props.removeColumn(this, this.state.columnIndex);
                                    // this.props.closeDialog(this);
                                }}>
                                    <strong>Close</strong><br/>
                                    Close this column.
                                </ButtonWithTooltip>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr className="col-settings-row col-settings-row-short">
                    <td colSpan={2}>&nbsp;</td>
                </tr>
                <tr className="col-settings-row">
                    <td rowSpan={2}><i id="col-type-icon" className="big-icon fa-solid fa-user"> </i></td>
                    <td className="col-settings-fill">
                        <select name="type" id="col-type-select" defaultValue={this.state.settings.type} onChange={(event) => {
                            const newValue = event.currentTarget.value as ColumnType;
                            ColumnSettingsPopup.updateInputFields(newValue, event.currentTarget);
                            const change = Object.assign({}, this.state.settings);
                            change.type = newValue;
                            this.setState({settings: change});
                            event.preventDefault();
                        }}>
                            <optgroup label="Select Column Type">
                                <option value="profile">User</option>
                                <option value="hashtag">Hashtag(s)</option>
                                <option value="keywords">Keyword(s)</option>
                                <option value="giveaways">Giveaways</option>
                                <option value="explore">Explore</option>
                                <option disabled>─ Login Required ──</option>
                                <option value="home">Home</option>
                                <option value="notifications">Notifictions</option>
                            </optgroup>
                        </select>
                    </td>
                </tr>
                <tr className="col-settings-row">
                    <td><input type="text" id="col-type-input" onChange={(event) => {
                        ColumnSettingsPopup.updateInputFields(this.state.settings.type);
                        event.preventDefault();
                    }} defaultValue={this.props.settings.text} /></td>
                </tr>
                <tr className="col-settings-row col-settings-centered">
                    <td colSpan={2}>
                        <div className="col-settings-row-clip"><strong>URL:</strong> <span id="col-type-url-preview">/explore</span></div>
                    </td>
                </tr>
                <tr className="col-settings-row col-settings-row-short">
                    <td colSpan={2}>&nbsp;</td>
                </tr>
                <tr className="nav-settings-button-bottom-row">
                    <td colSpan={2}>
                        <div className="nav-settings-button nav-float-right green-button" onClick={(event) => {
                            this.props.saveChanges(this);
                            event.preventDefault();
                        }}>SAVE</div>
                        <div className="nav-settings-button nav-float-right gray-button">CANCEL</div>
                        <div className="nav-settings-button nav-float-clear blue-button">HELP</div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>;
    }
}