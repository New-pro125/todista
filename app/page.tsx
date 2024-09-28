import { getUserTodoListAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodoTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
	const { userId } = auth();
	const todos = await getUserTodoListAction(userId);
	return (
		<main className="container mx-auto">
			<AddTodoForm userId={userId} />
			<TodoTable todos={todos} />
		</main>
	);
}
