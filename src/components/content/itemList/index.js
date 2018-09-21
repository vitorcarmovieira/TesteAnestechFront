import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './index.css';
import Item from '../item';
import actions from '../../../actions';

class ItemList extends Component {

    componentDidMount(){
        this.props.fetchTodos();
    }
    
    render() {
        const items = this.props.items.map((item, index)=>{
            return <Item key={ index } 
                        id={ item._id }
                        description={ item.description }
                        duration={ item.duration }
                        closeTodo={ this.props.closeTodo } />
        })

        return (
            <div className="itemList">
                { items }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.todos
    };
}

const mapDispatchToProps = dispatch => ({
    fetchTodos: () => dispatch(actions.get_todos()),
    closeTodo: todoId => dispatch(actions.close_todo(todoId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
