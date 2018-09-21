import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ItemsList from './itemList';

const theme = createMuiTheme({
    palette: {
        primary: { main: '#0383FF' }
    }
}
);

class Content extends Component {
    render() {
        return (
            <div >
                <MuiThemeProvider theme={theme}>
                    <AppBar 
                        position="sticky">
                        <Tabs value={0}>
                            <Tab label="Tarefas" />
                        </Tabs>
                    </AppBar>
                    <ItemsList />
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Content;
