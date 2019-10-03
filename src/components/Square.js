import React from 'react';
class Square extends React.Component{
    render(){
        return (
            <button className="square" onClick={() => this.setState({value:'X'})}>
                {this.props.value}
            </button>
        )
    }
}
export default Square;