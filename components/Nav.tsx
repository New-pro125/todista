import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggle";

const Nav = () => {
	return (
		<nav className="flex items-center justify-between  mt-2 mb-8">
			<ModeToggle />
			<SignedIn>
				<UserButton />
			</SignedIn>
			<SignedOut>
				<SignInButton />
			</SignedOut>
		</nav>
	);
};

export default Nav;
