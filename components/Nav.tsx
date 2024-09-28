import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggle";

const Nav = () => {
	return (
		<nav className="flex items-center justify-between w-full mt-2 mb-8">
			<h1 className="text-4xl font-black underline cursor-pointer">
				Todista
			</h1>
			<div className="flex items-center space-x-8">
				<SignedIn>
					<UserButton />
				</SignedIn>
				<SignedOut>
					<SignInButton />
				</SignedOut>
				<ModeToggle />
			</div>
		</nav>
	);
};

export default Nav;
