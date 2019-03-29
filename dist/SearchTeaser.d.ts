import React, { PureComponent } from "react";
import { CardTypes } from "@fdmg/fd-card";
import { ImageType, Theme } from "@fdmg/fd-teaser";
export interface SourceSet {
    media: '(max-width: 640px)' | '(max-width: 860px)' | '(min-width: 861px)';
    srcSet: string;
}
export interface Props {
    baseUrl: string;
    bookmarked?: boolean;
    cardStyle?: CardTypes;
    className?: string;
    comments?: number;
    date: string;
    description: string;
    figCaption?: string;
    hashTags?: string;
    hideFooter?: boolean;
    hideMeta?: boolean;
    hideRelated?: boolean;
    id: string;
    image?: ImageType;
    printTitle?: string;
    onBookmark?: (e: React.MouseEvent<HTMLElement>) => void;
    readableAge: string;
    shareTitle?: string;
    sourceSets?: SourceSet[];
    subject: string;
    theme?: Theme;
    title: string;
    updated?: boolean;
    url: string;
}
export default class SearchTeaser extends PureComponent<Props, any> {
    render(): JSX.Element;
}
/**
 * Used for the FD Style Guide Kitchensink
 */
export declare const SearchTeaserStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
