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

This is the user documentation for the StimDeck application.

If you're comfortable at tinkering with code, [fork the repo](https://github.com/groundh0g/StimDeck/fork) and have at it. The [README.md](https://github.com/groundh0g/StimDeck#readme) should have all you need to get going. When you're ready for more details about the functionality and rationales behind design choices, read this guide.

> <strong><i class="fas fa-solid fa-pencil-alt"></i> NOTE: </strong> StimDeck is the unofficial HUD for Simulus.com. This project **is not** affiliated with or endorsed by Sticker Mule, Stimulus, their subsidiaries, employees, associates, vendors, families, or pets. It's a simple app created by one of their users.

## Getting Started

Blah, blah, blah, blah, blah, ...

### Your Development Environment

You will need to have already installed the following software on your development machine before attempting to build and run this project.

### Getting the Source Code

Navigate to the [Downloads](http://localhost:4000/docs/downloads/select/#source-code) page to get a direct link to the project's GitHub repository. 

> <i class="fas fa-solid fa-person-digging dl-icon"></i><br/>
> 
> <strong>NOTE: </strong> This section is under construction.<br/>
> <strong class="white-text">NOTE: </strong>More content coming soon ...

## Behind the Scenes

For technical reasons, the application uses requests to the web server to populate WebViews that overlay the backing React UI.

Those views take advantage of the site's great mobile-friendly design, then injects script to hide and show widgets on the page after loading.

When the Stimulus developer team adds API supoprts to the site, the app will pivot to support it instead. At that point, a website for StimDeck may be possible.


