import React, {Component} from "react";

import "./ColumnSettingsPopup.css";
import "./fontawesome/css/all.css";
import {ColumnSettings} from "../ColumnSettings";

// import {
//     Theme,
//     SetThemeFunction,
//     ColumnSize,
//     SetColumnSizeFunction,
//     DoActionFunction,
//     AppSettings
// } from "./columns/Types";
// import {ToggleButton} from "./ToggleButton";


type ColumnSettingsPopupProps = ColumnSettings & {
    popupId: string;
    // add more attributes here ...
};

type ColumnSettingsPopupState = ColumnSettingsPopupProps & {
    // add more attributes here ...
};

// const emptySetColumnSize: SetColumnSizeFunction = (() => { /**/ });
// const emptySetTheme: SetThemeFunction = (() => { /**/ });
// const emptyDoAction: DoActionFunction = (() => { /**/ });

// type TooltipValues = {[key: string] : string};
// const tooltipValues : TooltipValues = {
//     "general": "In this section, you can select a theme, resize the columns, force the columns to refresh, close all columns.",
//     "blacklist": "Here, you can enter keywords to hide posts with that text, hide posts with too many hashtags, and hide posts with too many mentions.",
//     "whitelist": "Here, you can ignore blacklist entries for the specified people, your followers, and/or those that you follow.",
// };

export class ColumnSettingsPopup extends Component<ColumnSettingsPopupProps, ColumnSettingsPopupState> {

    state = {
        popupId: "no-id",
    };

    constructor(props: ColumnSettingsPopupProps) {
        super(props);

        this.state.popupId = this.props.popupId;
        // this.state.theme = this.props.theme;
        // this.state.columnSize = this.props.columnSize;
        // this.state.themeChanged = this.props.themeChanged;
        // this.state.columnSizeChanged = this.props.columnSizeChanged;
        // this.state.reloadAllColumns = this.props.reloadAllColumns;
        // this.state.closeAllColumns = this.props.closeAllColumns;
        // this.state.saveChanges = this.props.saveChanges;
        // this.state.blacklistKeywords = this.props.blacklistKeywords;
        // this.state.blacklistMaxHashtags = this.props.blacklistMaxHashtags;
        // this.state.blacklistMaxMentions = this.props.blacklistMaxMentions;
        // this.state.whitelistUsers = this.props.whitelistUsers;
        // this.state.whitelistFollowers = this.props.whitelistFollowers;
        // this.state.whitelistFollowing = this.props.whitelistFollowing;
    }

    render() {
        return <div id={this.props.popupId} className="col-settings-popup hidden">
            <div>Hello, World!</div>
        </div>;
    }
}