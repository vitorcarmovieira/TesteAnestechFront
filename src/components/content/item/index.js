import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './index.css';


class Item extends Component {
    render() {
        return (
            <div className='item'>
                <Card>
                    <CardContent style={{ padding: '0px' }}>
                        <table>
                            <tbody>
                            <tr>
                                <td className="item-info">
                                    <div>
                                        <span className="primary-color">{ this.props.description }</span><br/> 
                                    </div>
                                    <span className="discrete-span">{ this.props.duration }</span><br/> 
                                </td>
                                <td className="item-action">
                                    <img onClick={()=> this.props.closeTodo(this.props.id)} alt="img" src={require('./icon.png')}/> 
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </CardContent>
                </Card>
    
            </div>
        );
    }
}

export default Item;
