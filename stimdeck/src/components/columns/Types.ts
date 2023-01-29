import { TypedDictionary } from '../../utils/Dictionary';
import {ReactComponentElement} from "react";

export type ColumnTypeUnAuthenticated = "explore" | "giveaways" | "profile" | "keywords" | "hashtag";
export type ColumnTypeAuthenticated = "home" | "notifications";
export type ColumnType = ColumnTypeUnAuthenticated | ColumnTypeAuthenticated;

export const typeToUrlMap : TypedDictionary<string> = {
    "explore": "/explore",
    "home": "/feed/latest",
    "profile": "/{profile}",
    "giveaways": "/giveaways",
    "notifications": "/notifications",
    "hashtag": "/search/keyword?q={hashtag}&tab=stims",
    "keywords": "/search/keyword?q={keywords}&tab=stims",
};


export type Theme = "light" | "dark" | "red" | "blue" | "green" | "purple" | "yellow" | "orange";
export type ColumnSize = "x-small" | "small" | "medium" | "large" | "x-large";

export type SetThemeFunction = (app: React.Component, event: React.UIEvent, currentTheme: Theme, theme?: Theme) => void;
export type SetColumnSizeFunction = (app: React.Component, event: React.UIEvent, colSize: ColumnSize) => void;
