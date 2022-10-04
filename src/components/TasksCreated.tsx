import styles from './TasksCreated.module.css'

export function TasksCreated({ todosList }) {
  return (
    <>
      <div className={styles.tasks}>
        <p>Tarefas criadas&nbsp;({todosList})</p>
      </div>
    </>
  )
}