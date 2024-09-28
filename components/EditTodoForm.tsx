"use client";
import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { todoFormSchema, TodoFormValues } from "@/schema";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import Spinner from "./Spinner";
import { ITodo } from "@/interfaces";
import { updateTodoAction } from "@/actions/todo.actions";

// ESLINT_IGONRE_TYPES
interface IProps {
	todo: ITodo;
}
const EditTodoForm: React.FC<IProps> = ({ todo }) => {
	const [open, setOpen] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const defaultValues: Partial<TodoFormValues> = {
		body: todo.body as string,
		title: todo.title,
		completed: todo.completed,
	};
	const onSubmit = async ({ title, body, completed }: TodoFormValues) => {
		setLoading(true);
		// await createTodoAction(data);
		// Update Todo action
		await updateTodoAction({ id: todo.id, title, body, completed });
		setLoading(false);
		setOpen(false);
	};

	const form = useForm<TodoFormValues>({
		resolver: zodResolver(todoFormSchema),
		defaultValues,
		mode: "onChange",
	});
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button size="icon">
					<Pen size={16} />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Edit Todo</DialogTitle>
				</DialogHeader>
				<div className="py-4">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-8"
						>
							<FormField
								control={form.control}
								name="title"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Title</FormLabel>
										<FormControl>
											<Input
												placeholder="Go to gym"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="completed"
								render={({ field }) => (
									<FormItem className="space-x-2">
										<FormControl>
											<Checkbox
												{...field}
												checked={field.value}
												onCheckedChange={field.onChange}
												value={field.value.toString()}
											/>
										</FormControl>
										<FormLabel className="align-">
											Completed
										</FormLabel>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="body"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Short Description</FormLabel>
										<FormControl>
											<Textarea
												placeholder="Tell us about your todo"
												className="resize-none"
												{...field}
											/>
										</FormControl>
										<FormDescription>
											write a short description about your
											next todo
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<DialogFooter>
								<Button type="submit" disabled={loading}>
									{loading ? <Spinner /> : "Save"}
								</Button>
							</DialogFooter>
						</form>
					</Form>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default EditTodoForm;
