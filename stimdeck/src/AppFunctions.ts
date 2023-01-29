import {ColumnSize, Theme} from "./components/columns/Types";

export const setTheme = (self: React.Component, event: React.UIEvent, currentTheme: Theme, theme?: Theme): void => {
    if(theme) {
        self.setState({ theme: theme });
    } else {
        switch(currentTheme) {
            case "light": self.setState((prev) => ({ theme: "dark" })); break;
            case "dark": self.setState((prev) => ({ theme: "red" })); break;
            case "red": self.setState((prev) => ({ theme: "green" })); break;
            case "green": self.setState((prev) => ({ theme: "blue" })); break;
            case "blue": self.setState((prev) => ({ theme: "purple" })); break;
            case "purple": self.setState((prev) => ({ theme: "yellow" })); break;
            case "yellow": self.setState((prev) => ({ theme: "orange" })); break;
            case "orange": self.setState((prev) => ({ theme: "light" })); break;
            default: self.setState((prev) => ({ theme: "light" })); break;
        }
    }
}

export const setColumnSize = (self: React.Component, event: React.MouseEvent, colSize : ColumnSize): void => {
    (event.target as HTMLElement)?.blur();
    event.preventDefault();
    self.setState({ columnSize: colSize });
}
