import React, { Component, Fragment } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }
    //必须有一个包裹函数
    render() {
        return (
            //占位符
            <Fragment>
                <div><input value={this.state.inputValue}
                    onChange={this.handleInputChange.bind(this)}
                /><button onClick={this.handleBtnClick.bind(this)}>submit</button></div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (<li key={index}
                                onClick={this.handleItmDelete.bind(this, index)}>{item}</li>)
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e) {
        // this.state.inputValue = e.target.value;
        this.setState({
            inputValue: e.target.value
        })

    }

    handleBtnClick() {
        this.setState({
            //...this.state.list 是list拼接的内容
            //拼接
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })

    }

    handleItmDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        //1 代表一个
        this.setState({
            list: list
        })
        console.log(index);

    }
}

export default Todo;