import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Input from '@material-ui/core/Input';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './index.css';
import { connect } from 'react-redux';
import actions from '../../actions';

const theme = createMuiTheme({
    palette: {
        primary: { main: '#ffffff' }
    }
}
);

class Header extends Component {
    
    render() {
        return (
            <div>
                <Card >
                    <CardActions>
                        <MuiThemeProvider theme={theme}>
                            <Input 
                                id="input_item"
                                disableUnderline="true"
                                placeholder="Qual a tarefa?"
                                onKeyPress={(e) => {if(e.key === 'Enter'){
                                    this.props.createTodo(e.target.value);
                                    e.target.value = ''; 
                                } } }
                            />
                        </MuiThemeProvider>
                    </CardActions>
                </Card>
            </div>
        )      
    }
}


const mapStateToProps = state => {
    return {
    };
}

const mapDispatchToProps = dispatch => ({
    createTodo: text => dispatch(actions.create_todo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
