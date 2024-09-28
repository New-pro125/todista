import { SignUp } from "@clerk/nextjs";

export default function Page() {
	return (
		<div className="flex justify-center w-full mt-16">
			<SignUp forceRedirectUrl={"/"} />
		</div>
	);
}
