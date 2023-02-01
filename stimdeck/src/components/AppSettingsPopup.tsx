import React, {Component} from "react";

import "./AppSettingsPopup.css";
import "./fontawesome/css/all.css";

import {
    Theme,
    SetThemeFunction,
    ColumnSize,
    SetColumnSizeFunction,
    DoActionFunction,
    AppSettings
} from "./columns/Types";
import {ToggleButton} from "./ToggleButton";


type AppSettingsPopupProps = AppSettings & {
    themeChanged: SetThemeFunction,
    columnSizeChanged: SetColumnSizeFunction,
    reloadAllColumns: DoActionFunction,
    closeAllColumns: DoActionFunction,
    saveChanges: DoActionFunction
};

type AppSettingsPopupState = AppSettingsPopupProps & {
    // add more attributes here ...
};

const emptySetColumnSize: SetColumnSizeFunction = (() => { /**/ });
const emptySetTheme: SetThemeFunction = (() => { /**/ });
const emptyDoAction: DoActionFunction = (() => { /**/ });

type TooltipValues = {[key: string] : string};
const tooltipValues : TooltipValues = {
    "general": "In this section, you can select a theme, resize the columns, force the columns to refresh, close all columns.",
    "blacklist": "Here, you can enter keywords to hide posts with that text, hide posts with too many hashtags, and hide posts with too many mentions.",
    "whitelist": "Here, you can ignore blacklist entries for the specified people, your followers, and/or those that you follow.",
};

export class AppSettingsPopup extends Component<AppSettingsPopupProps, AppSettingsPopupState> {

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

    constructor(props: AppSettingsPopupProps) {
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
        return <div className="nav-settings-popup hidden">
            <div className="nav-settings-popup-heading">Application Settings <span className="nav-settings-close-button" onClick={(event) => {
                (document.querySelector(".nav-settings-popup") as HTMLElement).classList.toggle("hidden");
            }}><i
                className="fa-solid fa-rectangle-xmark"> </i></span></div>

            <div className="nav-settings-instructions">Scroll down to see all options,<br/>and to save your changes.</div>

            <fieldset>
                <legend>General&nbsp;&nbsp;<span className="" title={tooltipValues["general"]}><i className="fa-regular fa-circle-question">&nbsp;</i></span></legend>
                <table>
                    <tbody>
                        <tr className="nav-settings-row">
                            <td className="nav-settings-indent nav-settings-fill">Theme</td>
                            <td className="nav-settings-right">
                                <select name="theme" id="theme-select" defaultValue={this.props.theme} onChange={(event) => {
                                    const newValue = event.currentTarget.value as Theme;
                                    this.setState({theme: newValue});
                                    this.props.themeChanged(this, newValue);
                                    event.preventDefault();
                                }}>
                                    <optgroup label="Select Theme">
                                        <option value="light">Light*</option>
                                        <option value="dark">Dark</option>
                                        <option disabled>───────</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                        <option value="yellow">Yellow</option>
                                        <option value="orange">Orange</option>
                                        <option value="purple">Purple</option>
                                    </optgroup>
                                </select>
                            </td>
                        </tr>
                        <tr className="nav-settings-row">
                            <td className="nav-settings-indent nav-settings-fill">Column Width</td>
                            <td className="nav-settings-right">
                                <select name="column-size" id="column-size-select" defaultValue={this.state.columnSize} onChange={(event) => {
                                    const newValue = event.currentTarget.value as ColumnSize;
                                    this.setState({columnSize: newValue});
                                    this.props.columnSizeChanged(this, newValue);
                                    event.preventDefault();
                                }}>
                                    <optgroup label="Select Size">
                                        <option value={"x-small"}>X-Small (250px)</option>
                                        <option value={"small"}>Small* (300px)</option>
                                        <option value={"medium"}>Medium (350px)</option>
                                        <option value={"large"}>Large (400px)</option>
                                        <option value={"x-large"}>X-Large (450px)</option>
                                    </optgroup>
                                </select>
                            </td>
                        </tr>
                        <tr className="nav-settings-row">
                            <td className="nav-settings-indent nav-settings-fill">Reload Columns</td>
                            <td className="nav-settings-right">
                                <div className="nav-settings-button">RELOAD ALL</div>
                            </td>
                        </tr>
                        <tr className="nav-settings-row">
                            <td className="nav-settings-indent nav-settings-fill">Close Columns</td>
                            <td className="nav-settings-right">
                                <div className="nav-settings-button">CLOSE ALL</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </fieldset>

            <fieldset>
                <legend>Blacklist&nbsp;&nbsp;<span className="" title={tooltipValues["blacklist"]}><i className="fa-regular fa-circle-question">&nbsp;</i></span></legend>
                <table>
                    <tbody>
                        <tr className="nav-settings-row">
                            <td className="nav-settings-indent nav-settings-fill">Keywords</td>
                            <td className="nav-settings-right">
                                <div className="nav-settings-button">EDIT LIST</div>
                            </td>
                        </tr>
                        <tr className="nav-settings-row">
                            <td className="nav-settings-indent nav-settings-fill">Max Hashtags</td>
                            <td className="nav-settings-right">
                                {/*<div className="nav-settings-button">SELECT</div>*/}
                                <input id="nav-settings-textbox-max-hashtags" placeholder="9999"/>
                            </td>
                        </tr>
                        <tr className="nav-settings-row">
                            <td className="nav-settings-indent nav-settings-fill">Max Mentions</td>
                            <td className="nav-settings-right">
                                {/*<div className="nav-settings-button">SELECT</div>*/}
                                <input id="nav-settings-textbox-max-mentions" placeholder="9999"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </fieldset>

            <fieldset>
                <legend>Whitelist&nbsp;&nbsp;<span className="" title={tooltipValues["whitelist"]}><i className="fa-regular fa-circle-question">&nbsp;</i></span></legend>
                <table>
                    <tbody>
                        <tr className="nav-settings-row">
                            <td className="nav-settings-indent nav-settings-fill">Users</td>
                            <td className="nav-settings-right">
                                <div className="nav-settings-button">EDIT LIST</div>
                            </td>
                        </tr>
                        <tr className="nav-settings-row">
                            <td className="nav-settings-indent nav-settings-fill">Followers</td>
                            <td className="nav-settings-right">
                                <ToggleButton isSet={false} isDisabled={false} />
                                {/*<div className="nav-settings-button">SELECT</div>*/}
                            </td>
                        </tr>
                        <tr className="nav-settings-row">
                            <td className="nav-settings-indent nav-settings-fill">Following</td>
                            <td className="nav-settings-right">
                                <ToggleButton isSet={false} isDisabled={false} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </fieldset>
            <div className="nav-settings-button-bottom-row">
                <div className="nav-settings-button nav-float-right green-button">SAVE</div>
                <div className="nav-settings-button nav-float-right gray-button">CANCEL</div>
                <div className="nav-settings-button blue-button nav-float-clear">HELP</div>
            </div>
        </div>;
    }
}