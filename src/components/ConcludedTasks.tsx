import styles from './ConcludedTasks.module.css'

export function ConcludedTasks({ concludedTodosList }) {
  return (
    <>
      <div className={styles.concluded}>
        <p>Concluídas&nbsp;({concludedTodosList})</p>
      </div>
    </>
  )
}