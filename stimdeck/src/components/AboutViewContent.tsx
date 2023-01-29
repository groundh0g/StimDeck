export const content = (version: string) => `
# About StimDeck

StimDeck is a cross-platform desktop application for near real-time tracking of stims and organizing views of your favorite [Stimulus.com](https://www.stimulus.com/) feeds.

    Version   v${version}
    Source:   https://github.com/groundh0g/StimDeck
    Releases: https://github.com/groundh0g/StimDeck/releases 

> **NOTE:** This project is not endorsed by Stimulus.com, its affiliate companies, or their employees and representatives. This is a hobby project, created by one of the Stimulus.com users, [@groundh0g](https://www.stimulus.com/groundh0g).

## Supported Feed Types

Each feed is shown in its own colummn, and that column's activity is updated near real-time as the community generates new content.

You can even navigate within a column by clicking on its interactive elements, just as you do on the Stimulus.com website. If you get lost, just click the refresh button at the top of the column and you'll be taken back to the default view for that feed type.

Supported feed types include:

* **Explore:** Watch all Stimulus.com content.
* **Profiles:** Watch the content that your favorite creators are making.
* **Hashtags:** Watch for stims that contain one or more hashtags that you specify.
* **Searches:** Watch for stims that contain one or more keywords that you specify.
* **Giveaways:** Watch for new giveaways.

The search for keywords and/or hashtags is actually pretty powerful. Stimulus supports searching for many things, including emoji. So if your community commonly uses a flag icon or religious symbol, paste it into the search and you'll be able to find others that share your passions. 🤓

The list of feed types above are available *even when you're not logged in*. If you do login, you get the following additional features:

* **Home:** Watch the Stimulus.com feed for the people you follow.
* **Wallet:** Watch your wallet. I don't know why you would want to, but it's a feature.

### Caveats

The complete list of features (above) is based on the current functionalilty of the Stimulus.com website. Features are subject to change if/when the site decides to:

* Remove a feature
* Change the functionality of a feature
* Place the functionality or feature behind a required login

## StimDeck Support

If you have any issues with the program, you may file a bug report or feature request at the following links:

* [Feature Request](https://github.com/groundh0g/StimDeck/issues/new?assignees=&labels=&template=feature_request.md&title=%5BFEATURE%5D+Title+Here)
* [Bug Report](https://github.com/groundh0g/StimDeck/issues/new?assignees=&labels=&template=bug_report.md&title=%5BBUG%5D+Title+Here)
* [Other Question / General Feedback](https://github.com/groundh0g/StimDeck/issues/new/choose)

To report issues or offer feedback through this system, you'll need have (or create a free) GitHub account. Start creating the issue using the "New Issue" button and you'll be prompted to login or sign up.

## Contribute to StimDeck

If you know how to sling bytes and wrangle bits, feel free to [fork the repo](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) and [create a Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) for changes that you would like to see.

Keep it simple. At this time, there is no API for [Stimulus.com](https://www.stimulus.com/), so the StimDeck application is basically a glorified, multi-view browser where each column points back to the official website for content.

## Special Thanks

Thanks to the folks who helped make this possible.

* [Permission to access stimulus.com content and services](https://www.stimulus.com/stimulus/p/8bJ7_Lv3SdCOPFoNRfYPqw)
* [Background image by rawpixel.com on Freepik](https://www.freepik.com/free-vector/social-media-icons_4120018.htm#query=social%20media%20background&position=2&from_view=search&track=ais)

`;
