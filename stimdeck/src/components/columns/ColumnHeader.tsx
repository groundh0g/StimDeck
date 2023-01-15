import React, {Component} from "react";

import "../fontawesome/css/all.css";
import "./ColumnHeader.css";

type ContentTypeUnAuthenticated = "explore" | "giveaways" | "profile" | "keywords" | "hashtag";
type ContentTypeAuthenticated = "home" | "notifications"; // home === '/feed/latest'
type ContentType = ContentTypeUnAuthenticated | ContentTypeAuthenticated | undefined;

type ColumnHeaderProps = {
    foo: number;
};

type ColumnHeaderState = {
    foo: number;
};

export class ColumnHeader extends Component<ColumnHeaderProps, ColumnHeaderState> {
    state: ColumnHeaderState = {
        foo: 0,
    };

    constructor(props: ColumnHeaderProps) {
        super(props);

        // this.state.foo = this.props.foo;
    }

    render() {
        return (
            <div className="colHeader">
                {/*<button className="colButton"><i className="fa-solid fa-left-long"></i></button>*/}
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                <button className="colButton" onClick={(event) => { // @ts-ignore
                    document.querySelector("html").dataset.theme = "light"; }}><i className="fa-solid fa-rotate"></i></button>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                <button className="colButton" onClick={(event) => { // @ts-ignore
                    document.querySelector("html").dataset.theme = "dark"; }}><i className="fa-solid fa-up-long"></i></button>

                <span className="colTitle">@groundh0g</span>

                <button className="colButton"><i className="fa-solid fa-right-left"></i></button>
                <button className="colButton"><i className="fa-solid fa-gear"></i></button>
                <button className="colButton"><i className="fa-regular fa-trash-can"></i></button>
            </div>
        );
    }
}