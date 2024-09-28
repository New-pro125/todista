import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";
import { ITodo } from "@/interfaces";
import TodoTableActions from "./TodoTableActions";

interface IProps {
	todos: ITodo[];
}
const TodoTable: React.FC<IProps> = ({ todos }) => {
	return (
		<Table className="mt-12 w-1/2 mx-auto">
			<TableCaption>A list of your todos.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Id</TableHead>
					<TableHead>Title</TableHead>
					<TableHead>Completed</TableHead>
					<TableHead className="text-right">Actions</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{todos.map((todo) => (
					<TableRow key={todo.id}>
						<TableCell className="font-medium">{todo.id}</TableCell>
						<TableCell>{todo.title}</TableCell>
						<TableCell>
							{todo.completed ? (
								<Badge>Completed</Badge>
							) : (
								<Badge variant="destructive">UnCompleted</Badge>
							)}
						</TableCell>
						<TableCell className="flex items-center justify-end space-x-2">
							<TodoTableActions todo={todo} />
						</TableCell>
					</TableRow>
				))}
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={3}>Total</TableCell>
					<TableCell className="text-right">{todos.length}</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	);
};

export default TodoTable;
