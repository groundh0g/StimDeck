import React, {Component} from "react";

import "./AppSettingsPopup.css";
import "./fontawesome/css/all.css";

import {
    Theme,
    SetThemeFunction,
    ColumnSize,
    SetColumnSizeFunction,
    DoActionFunction,
    SetWhitelistValuesFunction,
    SetBlacklistValuesFunction
} from "./columns/Types";
import {ToggleButton} from "./ToggleButton";


type AppSettingsPopupProps = {
    theme: Theme;
    columnSize: ColumnSize;
    setTheme: SetThemeFunction; // | undefined;
    setColumnSize: SetColumnSizeFunction; // | undefined;
    reloadAllColumns: DoActionFunction;
    closeAllColumns: DoActionFunction;
    setBlacklistValues: SetBlacklistValuesFunction,
    setWhitelistValues: SetWhitelistValuesFunction,
};

type AppSettingsPopupState = AppSettingsPopupProps & {
    // add more attributes here ...
};


const emptySetColumnSize: SetColumnSizeFunction = (() => { /**/ });
const emptySetTheme: SetThemeFunction = (() => { /**/ });
const emptyDoAction: DoActionFunction = (() => { /**/ });
const emptySetBlacklistValues: SetBlacklistValuesFunction = (() => { /**/ });
const emptySetWhitelistValues: SetWhitelistValuesFunction = (() => { /**/ });

type TooltipValues = {[key: string] : string};
const tooltipValues : TooltipValues = {
    "general": "In this section, you can select a theme, resize the columns, force the columns to refresh, close all columns.",
    "blacklist": "Here, you can enter keywords to hide posts with that text, hide posts with too many hashtags, and hide posts with too many mentions.",
    "whitelist": "Here, you can ignore blacklist entries for the specified people, your followers, and/or those that you follow.",
};

export class AppSettingsPopup extends Component<AppSettingsPopupProps, AppSettingsPopupState> {

    state: AppSettingsPopupState = {
        theme: "light",
        columnSize: "small",
        setTheme: emptySetTheme,
        setColumnSize: emptySetColumnSize,
        reloadAllColumns: emptyDoAction,
        closeAllColumns: emptyDoAction,
        setBlacklistValues: emptySetBlacklistValues,
        setWhitelistValues: emptySetWhitelistValues,
    };

    constructor(props: AppSettingsPopupProps) {
        super(props);

        this.state.theme = this.props.theme ?? "light";
        this.state.columnSize = this.props.columnSize ?? "small";
        this.state.setTheme = this.props.setTheme ?? emptySetTheme;
        this.state.setColumnSize = this.props.setColumnSize ?? emptySetColumnSize;
        this.state.reloadAllColumns = this.props.reloadAllColumns ?? emptyDoAction;
        this.state.closeAllColumns = this.props.closeAllColumns ?? emptyDoAction;
        this.state.setBlacklistValues = this.props.setBlacklistValues ?? emptySetBlacklistValues;
        this.state.setWhitelistValues = this.props.setWhitelistValues ?? emptySetWhitelistValues;
    }

    render() {
        return (
            <div className="nav-settings-popup hidden">
                <div className="nav-settings-popup-heading">Application Settings</div>

                <div className="nav-settings-instructions">Scroll down to see all options,<br/>and to save your changes.</div>

                <fieldset>
                    <legend>General&nbsp;&nbsp;<span className="nav-settings-button-info-xxx" title={tooltipValues["general"]}><i className="fa-regular fa-circle-question">&nbsp;</i></span></legend>
                    <table>
                        <tbody>
                            <tr className="nav-settings-row">
                                <td className="nav-settings-indent nav-settings-fill">Theme</td>
                                <td className="nav-settings-right">
                                    <select name="theme" id="theme-select" defaultValue={this.props.theme} onChange={(event) => {
                                        const newValue = event.currentTarget.value as Theme;
                                        this.setState({theme: newValue});
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
                                    <select name="column-size" id="column-size-select" defaultValue={this.state.columnSize.toString()} onChange={(event) => {
                                        const newValue = event.currentTarget.value as ColumnSize;
                                        this.setState({columnSize: newValue});
                                        event.preventDefault();
                                    }}>
                                        <optgroup label="Select Size">
                                            <option value={"x-small"}>X-Small (250px)</option>
                                            <option value={"small"}>Small* (300px)</option>
                                            <option value={"medium"}>Medium (400px)</option>
                                            <option value={"large"}>Large (500px)</option>
                                            <option value={"x-large"}>X-Large (600px)</option>
                                        </optgroup>
                                    </select>
                                </td>
                            </tr>
                            <tr className="nav-settings-row">
                                <td className="nav-settings-indent nav-settings-fill">Reload All</td>
                                <td className="nav-settings-right">
                                    <div className="nav-settings-button">RELOAD ALL</div>
                                </td>
                            </tr>
                            <tr className="nav-settings-row">
                                <td className="nav-settings-indent nav-settings-fill">Close All</td>
                                <td className="nav-settings-right">
                                    <div className="nav-settings-button">CLOSE ALL</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </fieldset>

                <fieldset>
                    <legend>Blacklist&nbsp;&nbsp;<span className="nav-settings-button-info-xxx" title={tooltipValues["blacklist"]}><i className="fa-regular fa-circle-question">&nbsp;</i></span></legend>
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
                    <legend>Whitelist&nbsp;&nbsp;<span className="nav-settings-button-info-xxx" title={tooltipValues["whitelist"]}><i className="fa-regular fa-circle-question">&nbsp;</i></span></legend>
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
                <div className="nav-settings-button-row-xxx nav-settings-button-bottom-row">
                    <div className="nav-settings-button nav-float-right green-button">SAVE</div>
                    <div className="nav-settings-button nav-float-right gray-button">CANCEL</div>
                    <div className="nav-settings-button-info-xxx nav-settings-button blue-button nav-float-clear">HELP</div>
                </div>
            </div>
        );
    }
}