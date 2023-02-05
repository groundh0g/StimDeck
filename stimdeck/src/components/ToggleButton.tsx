import React, {Component} from "react";
import "./ToggleButton.css";
import Toggle from 'react-toggle';

type ToggleButtonProps = {
    isSet: boolean;
    isDisabled: boolean;
};

type ToggleButtonState = ToggleButtonProps & {
    tooltip: string;
    // add more attributes here ...
};

const TOOLTIP_TEXT = "Click the  button to toggle between ON and OFF.";

export class ToggleButton extends Component<ToggleButtonProps, ToggleButtonState> {

    state: ToggleButtonState = {
        isSet: false,
        isDisabled: false,
        tooltip: TOOLTIP_TEXT,
    };

    constructor(props: ToggleButtonProps) {
        super(props);

        this.state.isSet = this.props.isSet;
        this.state.isDisabled = this.props.isDisabled;
        this.state.tooltip = TOOLTIP_TEXT;
    }

    render() {
        return (
            <div className="toggle-button">
                <Toggle
                    defaultChecked={this.state.isSet}
                    disabled={this.state.isDisabled}
                    aria-label='No label tag'
                    value={'no'}
                    icons={{ checked: '✓', unchecked: '✘'}}
                    title={TOOLTIP_TEXT} /* TODO: doesn't work as expected */
                    onChange={(event) => {
                        event.currentTarget.blur();
                        this.setState({ isSet: event.target.checked });
                        // event.preventDefault();
                    }}
                />
            </div>
        );
    }
}