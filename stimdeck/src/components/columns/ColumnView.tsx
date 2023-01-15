import React, {Component} from "react";

type ContentTypeUnAuthenticated = "explore" | "giveaways" | "profile" | "keywords" | "hashtag";
type ContentTypeAuthenticated = "home" | "notifications"; // home === '/feed/latest'
type ContentType = ContentTypeUnAuthenticated | ContentTypeAuthenticated | undefined;

type ColumnSettings = {
    title: string,
    initialUrl: string,
    contentType: ContentType,
}

type ColumnViewProps = {

};

type ColumnViewState = {

};

export class ColumnView extends Component<ColumnViewProps, ColumnViewState> {
    state: ColumnViewState = {

    };

    constructor(props: ColumnViewProps) {
        super(props);

        // this.state.foo = this.props.foo;
    }

    render() {
        return (
            <button className="button"></button>
        );
    }
}

export default {}