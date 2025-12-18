---
title: "UI5 Search Utility"
date: 2018-04-18T12:13:30+05:30
description: "A search utility for SAP Fiori applications"
tags: [Primer, todo]
---
I needed a way to locate specific OData service usage within custom UI5 applications to assess the impact of potential changes. While standard SAP reports such as **RS_ABAP_SOURCE_SCAN** allow for broad ABAP code searches, they do not effectively index UI5 application content.

To fill this gap, I created a Fiori-based search utility compatible with EHP8. The tool supports filtered searches by package or text content and outputs a structured list of files and applications where the search term is found

![post-1-screenshot.png](post-1-screenshot.png)