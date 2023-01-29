/*
On main navigation bar, implement the following features:

- [ ] add column
- [ ] reload all columns
- [X] settings:
  - [X] theme selection
  - [X] column width: SM/MD/LG
  - [X] mute:
    - [X] keywords
    - [X] max hashtag count
    - [X] whitelist users
      - [X] users: list of users
      - [X] my followers
      - [X] those i follow
 */


import {ColumnSize, Theme} from "./components/columns/Types";

/*
Theme:          [DROPDOWN]
Column Size:    [DROPDOWN]
Reload All:  [RELOAD COLS]
Close All:    [CLOSE COLS]
Mute Options:
  Keywords:         [EDIT]
  Max Hashtags:     [9999]
  Max Mentions:     [9999]
Whitelist:
  Users:            [EDIT]
  Followers:      [YES/NO]
  Following:      [YES/NO]
*/

export type BlacklistOptions = {
    keywords: string[],
    maxHashtagCount: number,
    maxMentions: number,
};

export type WhitelistOptions = {
    users: string[],
    followers: boolean,
    following: boolean,
};

export type AppSettings = {
    theme: Theme,
    columnSize: ColumnSize,
    blacklistOptions: BlacklistOptions,
    whitelistOptions: WhitelistOptions,
};

export const AppSettingsDefaults: AppSettings = {
    theme: "light",
    columnSize: "small",
    blacklistOptions: {
        keywords: ["app.temu."],
        maxHashtagCount: 999,
        maxMentions: 999,
    },
    whitelistOptions: {
        users: [],
        followers: false,
        following: true,
    }
}