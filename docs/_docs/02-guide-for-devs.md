---
title: "Developer Guide"
permalink: /docs/guides/developer/
excerpt: "The how-tos and what-fors."
last_modified_at: 2023-01-21T00:00:00-00:00
toc: true
toc_label: "&nbsp; On This Page"
toc_icon: book-open
layout: single
author: Joseph Hall
author_profile: true
---

This is the developer documentation for the StimDeck application.

If you're comfortable at tinkering with code, [fork the repo](https://github.com/groundh0g/StimDeck/fork) and have at it. The [README.md](https://github.com/groundh0g/StimDeck#readme) should have all you need to get going. When you're ready for more details about the functionality and rationales behind design choices, read this guide.

> <strong><i class="fas fa-solid fa-pencil-alt"></i> NOTE: </strong> StimDeck is the unofficial HUD for Simulus.com. This project **is not** affiliated with or endorsed by Sticker Mule, Stimulus, their subsidiaries, employees, associates, vendors, families, or pets. It's a simple app created by one of their users.

## Getting Started

This next section attempts to answer all the "How?" questions, or link to the relevant answers elsewhere.

There are two major parts of the StimDeck application &mdash; The main application is a ReactJS Single-Page Application (SPA), and the desktop bindings are managed by the ElectronJS application, which contains the ReactJS SPA at its core.

### Your Development Environment

You will need to have already installed the following software on your development machine before attempting to build and run this project.

- [NodeJS](https://nodejs.org/), preferably installed using a version manager like [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).
- An IDE that supports [TypeScript](https://www.typescriptlang.org/) and NodeJS. I use [WebStorm](https://www.jetbrains.com/webstorm/), but [Visual Studio Code](https://code.visualstudio.com/) is a great IDE that's free. If you would prefer to use the JetBrains IDE, but don't want to spend the cash on it just yet, the [Community Edition of IntelliJ](https://www.jetbrains.com/idea/download/) should perform the same functions.

Just about every other dependency will be installed when you run `npm install` from the project directory.

You might want to install tools like a graphics editor (I've used [Affinity Designer](https://affinity.serif.com/designer/), [Adobe Illustrator](https://www.adobe.com/products/illustrator.html), and [Inkccape](https://inkscape.org/)) and a [git client](https://github.com/git-guides/install-git) ([SourceTree](https://www.sourcetreeapp.com/) and [GitHub Desktop](https://desktop.github.com/) are popular, free options).

### Getting the Source Code

Navigate to the [Downloads](http://localhost:4000/docs/downloads/select/#source-code) page to get a direct link to the project's GitHub repository. From there, you can [fork the repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo), or just download the source as [a ZIP file](https://github.com/groundh0g/StimDeck/archive/refs/heads/main.zip) for quick proofs of concept.

Be sure to install all project dependencies by running the following from the `stimdeck` folder before you attempt to run any of the other scripts. If you forget this step, you'll get an error along the lines of "command not found" later.

```shell
npm install
```

The common scripts that you'll need are descrbed in the following sections. For a full list of all scripts that you can run, execute the following command.

```shell
npm run
```

### Building the React App

To make sure everything compiles and runs properly on the React side, execute the following command.

```shell
npm run build
```

To clean up the build artifacts, you can run the following command.

```shell
npm run clean
```

To clean up the build artifacts, and then rebuild the project, you can run the following command.

```shell
npm run rebuild
```

Note that `npm run rebuild` is the same as running the following commands.

```shell
npm run clean
npm run build
```

To completely nuke all generated artifacts and start fresh, you can run the following command. Doing so requires you to run the `npm install` command again before attempting to run any other scripts.

```shell
npm run clean-all
```

### Linting the Application

To make sure the source code adheres to the coding standards for the project, execute the following command.

```shell
npm run lint
```

While not directly related, another code quality check you can run will test for circular dependencies. Execute the following command.

```shell
npm run circular
```

### Running the React App

To make sure everything compiles and runs properly on the React side, execute the following command.

```shell
npm run start
```

If everything is working as expected, the React side of StimDeck will build and be launched in the default web browser.

### Running the Desktop App

To make sure everything compiles and runs properly on the Electron side, execute the following command.

```shell
npm run electron:dev
```

If everything is working as expected, the StimDeck desktop application will be launched.

### Testing the Application

To make sure all of the automated tests are passing, execute the following command.

```shell
npm run test
```

To continually test the application as you make changes, run the following command in place of `npm run test`.

```shell
npm run watch
```

The `npm run watch` command will also generate a test coverage report for you. The results will be in an HTML file in the `coverage` folder.

### Packaging the Application

The requirements for packaging the application vary by platform, but the command is the same.

```shell
npm run electron:build
```

Be prepared to wait while it does its magic. The end result will be a signed and packaged application that can be distributed.

## Contributing

I wear many hats while working on projects like this. If you'd like to get plugged into the development of StimDeck, there's almost certainly a role that fits your skills, abilities, and interests.

### Programmers

If you're a programmer, and you see some things you feel would be better handled another way, the above sections should have what you need. Be sure to read the [Getting Started](#getting-started) section, above. You know, to get started.

### Power Users

How do you use StimDeck? Do you have tips for newcomers, or hacks for old pros? Is there a feature you've seen in other apps that would make life easier for fellow stimmies?

An active community fosters active development of the project. Lurk in [the forums](https://github.com/groundh0g/StimDeck/discussions). See if you can offer advice or solutions or guidance.

### Tech Writers

Everything you've seen so far (code and documentation) was written by one person. If you see some improvements to be made, step up.

All the documentation is in the [gh-pages branch](https://github.com/groundh0g/StimDeck/tree/gh-pages). Content is written using [Markdown](https://www.markdownguide.org/getting-started/). Specifically, [GitHub-Flavored Markdown](https://github.github.com/gfm/).

### Translators

It has been said that I am quite fluent in both Southern and sarcasm. Unfortunately, that's about as far as my language skills reach. The target community for Stimulus is decidedly English-speaking. But, who's to say that will always be the case?

This website, including the documentation, is hosted in an open-source theme that supports localization. So, the plumbing is already there.

### Free Thinkers

It's really hard to please everyone when it comes to the design of an application. The look and feel of an application can make it or break it. I do not claim to be a UI/UX guru. I know what needs to be done, and I do it.

If you think the user interface could be made better, I welcome the feedback. From [simple, drive-by ideas](https://github.com/groundh0g/StimDeck/issues/new?assignees=&labels=&template=feature_request.md&title=%5BFEATURE%5D+Title+Here) to [full-fledged GUI tweaks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests), there's room for all levels of engagement.

## Behind the Scenes

As I scratch my head at design decisions, I'll comment them in the code, and try to address them here. Hopefully there will be enough bits on the web to store this list.

### Why an App and not a Site?

For technical reasons, the application uses requests to the web server to populate WebViews that overlay the backing React UI.

Those views take advantage of the site's great mobile-friendly design, then injects script to hide and show widgets on the page after loading. When the Stimulus developer team adds API supoprts to the site, the app will pivot to support that instead. At that point, a webapp version of StimDeck may be possible.
