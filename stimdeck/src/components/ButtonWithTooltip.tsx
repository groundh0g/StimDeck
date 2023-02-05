import React, {PropsWithChildren} from 'react';
import './ButtonWithTooltip.css';
import {DoActionFunction} from "./columns/Types";



type ButtonWithTooltipProps = PropsWithChildren & {
    icon: string,
    onClick: DoActionFunction,
    // add more attributes here ...
};

type ButtonWithTooltipState = ButtonWithTooltipProps & {
    // add more attributes here ...
}

const emptyDoAction: DoActionFunction = (() => { /**/ });

export default class ButtonWithTooltip extends React.Component<ButtonWithTooltipProps, ButtonWithTooltipState> {
    state = {
        icon: "fa-regular fa-user",
        onClick: emptyDoAction,
    };

    constructor(props: ButtonWithTooltipProps) {
        super(props);

        this.state.icon = this.props.icon;
        this.state.onClick = this.props.onClick;
    }

    render() {
        return (
            <a className="tooltip" href="#null"><i className={`${this.state.icon} col-button`} onClick={(event) => {
                this.props.onClick(this);
            }}> </i><span>{this.props.children}</span></a>
        );
    }
}