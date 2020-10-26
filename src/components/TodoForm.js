import React from 'react'

class ToDoForm extends React.Component{
    constructor(){
        super()
        this.state = {
            input:''
        }
    }

    handleChanges = (event) =>{
        this.setState({
            input:event.target.value
        })
    }

    onSubmit = (event) =>{
        event.preventDefault()
        this.props.handleAddChore(this.state.input)
    }

    render() {
        return(
            <form onSubmit = {this.onSubmit}>
                <input
                value={this.state.input}
                onChange={this.handleChanges}
                type='text'
                name='chore'
                />
                <button>Add a chore</button>
            </form>
        )
    }
}

export default ToDoForm