export interface ITodoRepository {
  createTodo(): void
  getTodos(): void
  getTodoById(): void
  updateTodo(): void
  deleteTodo(): void
}
