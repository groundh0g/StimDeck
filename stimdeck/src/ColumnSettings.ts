import {ColumnType} from "./components/columns/Types";

export type ColumnSettings = {
    type: ColumnType;
    title: string;
    text: string;
    url: string;
    icon: string;
    // add more attributes here ...
};

export const ColumnSettingsDefault: ColumnSettings = {
    type: "explore" as ColumnType,
    title: "Explore",
    text: "",
    url: "/explore",
    icon: "fa-regular fa-compass",
};