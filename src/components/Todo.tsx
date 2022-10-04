import styles from './Todo.module.css'
import { TasksCreated } from './TasksCreated'
import { ConcludedTasks } from './ConcludedTasks'
import { Task } from './Task'
import { PlusCircle } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid'
import { FormEvent, useState } from 'react'

// const todos = [
//   {
//     id: uuidv4(),
//     title: 'Terminar o desafio',
//     isCompleted: true,
//   },
//   {
//     id: uuidv4(),
//     title: 'Estudar TypeScript',
//     isCompleted: false
//   },
//   {
//     id: uuidv4(),
//     title: 'Estudar TypeScript',
//     isCompleted: false
//   }
// ]

export function Todo() {

  const [doneTasks, setDoneTasks] = useState(0)

  const [newTodoText, setNewTodoText] = useState('')

  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'Terminar o desafio',
      isCompleted: false,
    },
    {
      id: uuidv4(),
      title: 'Estudar TypeScript',
      isCompleted: false
    }
  ])

  function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault()

    // console.log(event.target.newTodo.value)

    setTodos([
      ...todos, {
        id: uuidv4(),
        title: newTodoText,
        isCompleted: false
      }
    ])

    // event.target.newTodo.value = ''

    setNewTodoText('')
  }

  function handleNewTodoChange() {
    setNewTodoText(event.target.value)
  }

  function onDeleteTodo(todo_id: string) {
    const todosWithoutDeletedOne = todos.filter(todo => {
      return todo.id !== todo_id
    })
    console.log(todosWithoutDeletedOne)
    setTodos(todosWithoutDeletedOne)
  }

  function onChangeRadioBox(id: string) {
    // console.log(`state of radio box ${state}`)

    // console.log(`before change ${JSON.stringify(todos)}`)

    const concludedTodos = todos.filter(todo => {
      return todo.isCompleted == true
    })
    const concludedTodosList = concludedTodos.length
    // concludedTasks = concludedTodosList + 1
    setDoneTasks(concludedTodosList + 1)
    // console.log(`tasks concluded: ${concludedTodosList + 1}`)

    const todoIndex = todos.findIndex(todo => {
      return todo.id == id
    })

    todos[todoIndex].isCompleted = true
    const newTodos = todos

    // console.log(`after change ${JSON.stringify(newTodos)}`)
    setTodos(newTodos)
  }

  // console.log(`concluded task: ${concludedTasks}`)
  const todosList = todos.length

  return (
    <div className={styles.todo}>

      <form onSubmit={handleCreateNewTodo} className={styles.search}>
        <input
          type="text"
          name="newTodo"
          value={newTodoText}
          onChange={handleNewTodoChange}
          required
        // value={newTodoText}
        />
        <button type='submit'>
          Criar
          <PlusCircle size='15' />
        </button>
      </form>

      {/* <div className={styles.search}>

      </div> */}

      <div className={styles.stats}>
        <span><TasksCreated todosList={todosList} /></span>
        <span><ConcludedTasks concludedTodosList={doneTasks} /></span>
      </div>

      <div className={styles.items}>
        {todos.map(todo => {
          return (
            <Task
              key={todo.id}
              id={todo.id}
              isCompleted={todo.isCompleted}
              title={todo.title}
              onDeleteTodo={onDeleteTodo}
              onChangeRadioBox={onChangeRadioBox}
            />
          )
        })}
      </div>

    </div>
  )
}