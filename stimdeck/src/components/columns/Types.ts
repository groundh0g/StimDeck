import { TypedDictionary } from '../../utils/Dictionary';

export type ColumnTypeUnAuthenticated = "explore" | "giveaways" | "profile" | "keywords" | "hashtag";
export type ColumnTypeAuthenticated = "home" | "notifications";
export type ColumnType = ColumnTypeUnAuthenticated | ColumnTypeAuthenticated;

export const getColumnTitle = (type: ColumnType, keywords: string) : string => {
    const keywordArray = (keywords ?? "")
        .replace('"', "")
        .replace('#', "")
        .split(" ");

    switch(type) {
        case "explore": return "Explore";
        case "home": return "Home";
        case "profile": return "@" + (keywordArray.length ? keywordArray[0] : "Unknown");
        case "giveaways": return "Giveaways";
        case "notifications": return "Notifications";
        case "hashtag":
        case "keywords":
            return (keywordArray.length ? (type === "hashtag" ? "#" : "") + keywordArray[0] : "Unknown") +
                (keywordArray.length > 1 ? ` (+${keywordArray.length - 1} more)` : "");
        default: return "Unknown";
    }
};

export const getColumnUrl = (type: ColumnType, keywords: string) : string => {
    const keywordArray = (keywords ?? "")
        .replace('"', "")
        .replace('#', "")
        .split(" ");

    switch(type) {
        case "explore":
        case "home":
        case "giveaways":
        case "notifications":
            return typeToUrlMap[type];
        case "profile": return typeToUrlMap[type]
            .replace("{profile}", keywordArray.length ? keywordArray[0] : "Unknown");
        case "hashtag": return typeToUrlMap[type]
            .replace("{hashtags}", keywordArray.length ? "%23" + keywordArray.join("+%23") : "%23dailystim" );
        case "keywords": return typeToUrlMap[type]
            .replace("{keywords}", keywordArray.length ? keywordArray.join("+") : "dailystim" );
        default: return typeToUrlMap["explore"];
    }
};

export const typeToUrlMap : TypedDictionary<string> = {
    "explore": "/explore",
    "home": "/feed/latest",
    "profile": "/{profile}",
    "giveaways": "/giveaways",
    "notifications": "/notifications",
    "hashtag": "/search/keyword?q={hashtags}&tab=stims",
    "keywords": "/search/keyword?q={keywords}&tab=stims",
};

export const typeToIconMap : TypedDictionary<string> = {
    "explore": "fa-regular fa-compass",
    "home": "fa-solid fa-house",
    "profile": "fa-regular fa-circle-user",
    "giveaways": "fa-solid fa-piggy-bank",
    "notifications": "fa-regular fa-bell",
    "hashtag": "fa-solid fa-hashtag",
    "keywords": "fa-solid fa-magnifying-glass",
};

export type Theme = "light" | "dark" | "red" | "blue" | "green" | "purple" | "yellow" | "orange";
export type ColumnSize = "x-small" | "small" | "medium" | "large" | "x-large";

export type SetThemeFunction = (app: React.Component, event: React.UIEvent, currentTheme: Theme, theme?: Theme) => void;
export type SetColumnSizeFunction = (app: React.Component, event: React.UIEvent, colSize: ColumnSize) => void;
