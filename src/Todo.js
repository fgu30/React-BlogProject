import React, { Component, Fragment } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'hello',
            list: ['GTA5', 'Witcher3', 'Cyberpunk2077']
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
                            return <li>{item}</li>
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

    handleBtnClick(e) {

    }
}

export default Todo;