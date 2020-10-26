import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const chores = [
  {
  name: 'Take out garbage',
  id: 1,
  completed: false,
},
  {
  name: 'Clean bathrrom',
  id: 2,
  completed: false,
},
  {
  name: 'Do Laundry',
  id: 3,
  completed: false,
},
  {
  name: 'Mow the lawn',
  id: 4,
  completed: false,
},

]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      chores: chores
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  handleChoreItem = (choreId)=>{
    this.setState({
      chores: this.state.chores.map(chore=>{
        if(chore.id === choreId){
          return {
            ...chore, completed: !chore.completed
          }
        } else {
          return chore;
        }
      })
    })
  }

  handleAddChore = (name) =>{
    this.setState({
      chores:[...this.state.chores, {
        name:name,
        id: this.state.chores.length,
        completed: false
      }]
    })
  }

  resetChores = () =>{
    this.setState({
      chores:this.state.chores.filter(chore=>(!chore.completed))
    })
  }

  render() {
    return (
      <div className ='App'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAddChore={this.handleAddChore}/>
        <TodoList handleResetChores={this.resetChores} handleChoreItem={this.handleChoreItem} chores={this.state.chores}/>
      </div>
    );
  }
}

export default App;
