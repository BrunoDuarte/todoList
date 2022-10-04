import { Header } from "./components/Header"
import { Todo } from "./components/Todo"
import styles from './App.module.css'

import './global.css'

// console.log(todos)

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>

        <Todo />
      </div>
    </>
  )
}

export default App
