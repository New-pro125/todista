"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
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
import { createTodoAction } from "@/actions/todo.actions";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import Spinner from "./Spinner";

// ESLINT_IGONRE_TYPES
const AddTodoForm = ({ userId }: { userId: string | null }) => {
	const [open, setOpen] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const defaultValues: Partial<TodoFormValues> = {
		body: "",
		title: "",
		completed: false,
	};
	const onSubmit = async (data: TodoFormValues) => {
		setLoading(true);
		await createTodoAction(data, userId);
		setLoading(false);
		setOpen(false);
	};

	const form = useForm<TodoFormValues>({
		resolver: zodResolver(todoFormSchema),
		defaultValues,
		mode: "onChange",
	});
	return (
		<div className="flex justify-center">
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button>
						<Plus size={14} className="mr-1" />
						New Todo
					</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Edit profile</DialogTitle>
						<DialogDescription>
							Make changes to your profile here. Click save when
							you&apos;re done.
						</DialogDescription>
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
													onCheckedChange={
														field.onChange
													}
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
											<FormLabel>
												Short Description
											</FormLabel>
											<FormControl>
												<Textarea
													placeholder="Tell us about your todo"
													className="resize-none"
													{...field}
												/>
											</FormControl>
											<FormDescription>
												write a short description about
												your next todo
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
		</div>
	);
};

export default AddTodoForm;
