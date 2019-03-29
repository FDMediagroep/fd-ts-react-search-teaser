import TestRenderer from 'react-test-renderer';
import SearchTeaser from '../src/SearchTeaser';
import React from 'react';

describe('Search Teaser', () => {
    const teaserData: any = {
        id: "1286721",
        baseUrl: "https://fd.nl",
        url: "https://fd.nl/economie-politiek/1286721/amsterdam-doet-er-toe",
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
        figCaption: "Amsterdam doet ertoe",
        subject: "Buitenland",
        comments: 1,
        readableAge: "34 min",
        date: "17 Nov 1981",
        title: "Amsterdam doet ertoe",
        printTitle: "Amsterdam doet ertoe in de krant",
        description: "Een wethouder Verkeer en Vervoer, in Davos? Zeker! Wethouder Sharon Dijksma legt op het World Economic Forum uit hoe Amsterdam omgaat met duurzame mobiliteit."
    };

    test('renders correctly', () => {
        let teaser = TestRenderer.create(<SearchTeaser {...teaserData}/>);
        expect(teaser.toJSON()).toMatchSnapshot();
    });

    test('renders bookmarked correctly', () => {
        let teaser = TestRenderer.create(<SearchTeaser {...teaserData} bookmarked={true}/>);
        expect(teaser.toJSON()).toMatchSnapshot();
    });

    test('renders multiple comments correctly', () => {
        let teaser = TestRenderer.create(<SearchTeaser {...teaserData} comments={99}/>);
        expect(teaser.toJSON()).toMatchSnapshot();
    });
});
