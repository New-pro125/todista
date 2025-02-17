"use client"
import {Trash} from "lucide-react"
import {Button} from "./ui/button"
import {useState} from "react"
import {deleteTodoListAction} from "@/app/_actions/todo.actions"
import Spinner from "./Spinner"
import EditTodoForm from "./EditTodoForm"
import {ITodo} from "@/app/_interfaces"

interface IProps {
  todo: ITodo
}
const TodoTableActions: React.FC<IProps> = ({todo}) => {
  const [loading, setLoading] = useState<boolean>(false)
  return (
    <>
      <EditTodoForm todo={todo} />
      <Button
        size="icon"
        variant="destructive"
        onClick={async () => {
          setLoading(true)
          await deleteTodoListAction(todo.id)
          setLoading(false)
        }}
      >
        {!loading ? <Trash size={16} /> : <Spinner />}
      </Button>
    </>
  )
}

export default TodoTableActions
