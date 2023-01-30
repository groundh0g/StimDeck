import React, {Component} from 'react';
import './App.css';
import { NavBar} from "./components/NavBar";
import { Column } from "./components/columns/Column";
import {ColumnSize, Theme, SetThemeFunction, SetColumnSizeFunction} from "./components/columns/Types";

type AppProps = {
    columnSize: ColumnSize;
    theme: Theme;
    setTheme: SetThemeFunction; // | undefined;
    setColumnSize: SetColumnSizeFunction; // | undefined;
};

type AppState = AppProps & {
    // add more attributes here ...
};


export default class App extends Component<AppProps, AppState> {
    state: AppState = {
        theme: "light",
        setTheme: ((self, event, theme) => { self.setState({theme: theme}) }) as SetThemeFunction,
        columnSize: "small",
        setColumnSize: ((self, event, size) => { self.setState({columnSize: size}) }) as SetColumnSizeFunction,
    };

    constructor(props: AppProps) {
        super(props);

        this.state.theme = this.props.theme;
        this.state.columnSize = this.props.columnSize;
        // this.state.setTheme = this.props.setTheme;
        // this.state.setColumnSize= this.props.setColumnSize;
    }

    render() {
        return (
            <div className={`app app-${this.state.theme}`}>
                <div className="app-header page-background">
                    <NavBar key={0}
                            columnSize={this.props.columnSize}
                            setColumnSize={this.props.setColumnSize}
                            theme={this.state.theme}
                            setTheme={this.props.setTheme} />
                    <div className="">
                        <Column foo={3} key={3} />
                        <Column foo={4} key={4} />
                        <Column foo={5} key={5} />
                        <Column foo={6} key={6} />
                        <Column foo={7} key={7} />
                        <Column foo={8} key={8} />
                    </div>
                </div>
            </div>
        );
    }
}