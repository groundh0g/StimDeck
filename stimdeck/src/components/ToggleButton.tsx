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
        console.log(this.state.isSet);
    }

    render() {
        return (
            <div style={{textAlign: "center"}}>
                <Toggle
                    defaultChecked={this.state.isSet}
                    disabled={this.state.isDisabled}
                    aria-label='No label tag'
                    value={'no'}
                    icons={{ checked: '✓', unchecked: '✘'}}
                    onChange={(event) => { this.setState({ isSet: event.target.checked }); console.log(this.state.isSet); }}
                />
            </div>
            // <div className="app-cover">
            //     <div className="row">
            //         <div className="toggle-button-cover">
            //             <div className="button-cover">
            //                 <div className="toggle-button button r">
            //                     <input type="Checkbox" className="checkbox" defaultChecked={false} disabled={this.state.isDisabled} onChange={(event) => { this.setState({ isSet: event.target.checked }); console.log(this.state.isSet); }} />
            //                     <div className="knobs"> </div>
            //                     <div className="layer"> </div>
            //                 </div>
            //              </div>
            //          </div>
            //     </div>
            // </div>
        );
    }
}