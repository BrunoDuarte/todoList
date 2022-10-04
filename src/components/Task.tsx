import styles from './Task.module.css'
import { Trash } from 'phosphor-react'
import { useState } from 'react'

interface Todos {
  id: string
  title: string
  isCompleted: boolean
  onDeleteTodo(id: string): any
  onChangeRadioBox(id: string): any
}


export function Task({ title, isCompleted, id, onDeleteTodo, onChangeRadioBox }: Todos) {

  const [todoDone, setTodoDone] = useState('')

  function handleDeleteTodo() {
    onDeleteTodo(id)
  }

  function handleRadioCheck() {
    onChangeRadioBox(id)
    // console.log(event.target.value)

    setTodoDone(styles.doneCheckbox)

    console.log(todoDone)
  }
  // console.log(`${id} -> ${isCompleted}`)
  return (
    <div className={styles.task}>
      <header>
        <input className={styles.checkbox} onChange={handleRadioCheck} id={id} type="radio" defaultChecked={isCompleted} />
        <p className={todoDone}>{title}</p>
        <div onClick={handleDeleteTodo} className={styles.delete} title="Delete todo">
          <Trash />
        </div>
      </header>
    </div>
  )
}