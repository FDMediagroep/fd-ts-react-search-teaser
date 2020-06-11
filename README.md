> :exclamation: **DEPRECATED** :exclamation: : Superseded by @fdmg/design-system. See: https://github.com/FDMediagroep/fd-design-system

[![Build Status](https://travis-ci.org/FDMediagroep/fd-ts-react-search-teaser.svg?branch=master)](https://travis-ci.org/FDMediagroep/fd-ts-react-search-teaser)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fd-ts-react-search-teaser/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fd-ts-react-search-teaser?branch=master)
[![npm version](https://badge.fury.io/js/%40fdmg%2Ffd-search-teaser.svg)](https://badge.fury.io/js/%40fdmg%2Ffd-search-teaser)


# fd-search-teaser

FD-themed search teaser.

# Installation

-   Run `npm i -D @fdmg/fd-search-teaser`

# Demo

To run the demo, check-out this repository and run `npm run build-demo`.
After the build succeeded you can open `dist/demo.html` with your webbrowser.

-   [Demo](http://static.fd.nl/react/teaser/demo.html)

# Usage

```
import SearchTeaser from '@fdmg/fd-search-teaser';
...
<SearchTeaser
        id="123"
        bookmarked={false}
        comments={99}
        description="Containers van warenhuizen als Amazon en Alibaba bevatten een veelheid aan producten die allemaal apart ingeklaard moeten worden."
        url="https://dev.fd.nl/ondernemen/1254849/douane-20-tot-30-meer-aangiftes-door-groei-in-webwinkelen"
        hashTags="#Kitchensink"
        image: {
            src: 'https://images.fd.nl/h7f0-gZo7t8HbiVhcWgo5x8HPaA.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=599&h=337&rect=',
            alt: 'Amsterdam doet ertoe'
        },
        sourceSets: [{
            media: '(max-width: 640px)',
            srcSet: `https://images.fd.nl/h7f0-gZo7t8HbiVhcWgo5x8HPaA.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=599&h=337&rect=`
        }, {
            media: '(max-width: 860px)',
            srcSet: `https://images.fd.nl/h7f0-gZo7t8HbiVhcWgo5x8HPaA.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=115&h=115&rect=`
        }, {
            media: '(min-width: 861px)',
            srcSet: `https://images.fd.nl/h7f0-gZo7t8HbiVhcWgo5x8HPaA.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=115&h=115&rect=`
        }],
        onBookmark={() => {}}
        subject="Monetair"
        readableAge="7 uur"
        related={[{
            longread: true,
            title: '‘Als vrouw moet je altijd onafhankelijk zijn’',
            url: 'https://dev.fd.nl/profiel/1235280/als-vrouw-moet-je-onafhankelijk-zijn',
            uuid: "234"
        }, {
            title: 'President van de Amerikaanse Fed hamert op onafhankelijkheid',
            url: 'https://dev.fd.nl/economie-politiek/1235274/president-van-de-amerikaanse-fed-hamert-op-onafhankelijkheid',
            uuid: "345"
        }]}
        title="Douane: 20 tot 30% meer aangiftes door groei in webwinkelen"
        printTitle="Douane: 20 tot 30% meer aangiftes door groei in webwinkelen"
    />
```
