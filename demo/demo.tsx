import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import uniqid from 'uniqid';
import SearchTeaser from '../src/SearchTeaser';

const GlobalStyle = createGlobalStyle`
    html {
        background-color: #f1ded0;
    }

    .clear.centered,
    .content-area {
        padding: 1rem 0;
        &.persoonlijk {
            background-color: white;
        }
        .fd-search-teaser {
            margin-bottom: 1rem;
        }
    }
`;

class App extends PureComponent<any, any> {
    state: any = {
        teaser: {
            id: "1286721",
            baseUrl: "https://fd.nl",
            url: "https://fd.nl/economie-politiek/1286721/amsterdam-doet-er-toe",
            image: {
                src: 'https://images.fd.nl/h7f0-gZo7t8HbiVhcWgo5x8HPaA.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=599&h=337&rect=',
                alt: 'Amsterdam doet ertoe'
            },
            sourceSets: [{
                media: "(max-width:640px)",
                srcSet: `https://images.fd.nl/h7f0-gZo7t8HbiVhcWgo5x8HPaA.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=599&h=337&rect=`
            }, {
                media: "(max-width:860px)",
                srcSet: `https://images.fd.nl/h7f0-gZo7t8HbiVhcWgo5x8HPaA.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=115&h=115&rect=`
            }, {
                media: "(min-width:861px)",
                srcSet: `https://images.fd.nl/h7f0-gZo7t8HbiVhcWgo5x8HPaA.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=115&h=115&rect=`
            }],
            figCaption: "Amsterdam doet ertoe",
            subject: "Buitenland",
            comments: 1,
            readableAge: "34 min",
            date: "17 Nov 1981",
            title: "Amsterdam doet ertoe",
            printTitle: "Amsterdam doet ertoe",
            description: "Een wethouder Verkeer en Vervoer, in Davos? Zeker! Wethouder Sharon Dijksma legt op het World Economic Forum uit hoe Amsterdam omgaat met duurzame mobiliteit."
        }
    };

    onBookmark = (e: React.MouseEvent<HTMLElement>) => {
        if (e.currentTarget.classList.contains('selected')) {
            this.setState({teaser: {...this.state.teaser, bookmarked: false}});
        } else {
            this.setState({teaser: {...this.state.teaser, bookmarked: true}});
        }
    }

    render() {
        return(
            <>
                <GlobalStyle/>
                <SearchTeaser
                    {...this.state.teaser}
                    id={uniqid()}
                    onBookmark={this.onBookmark}
                />
                <SearchTeaser
                    {...this.state.teaser}
                    printTitle=''
                    id={uniqid()}
                    onBookmark={this.onBookmark}
                />
            </>
        );
    }
}

ReactDOM.render(<>
    <div>
        <App/>
    </div>
</>,
document.querySelector('.clear.centered'));
