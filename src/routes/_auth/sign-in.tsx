import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/sign-in")({
	component: SignInPage,
});

/** Shell page: mount your login / OAuth form component here. */
function SignInPage() {
	return (
		<main className="page-wrap flex min-h-[70vh] flex-col items-center justify-center px-4 py-12">
			<p className="island-kicker mb-2 text-center">Sign in</p>
			<h1 className="display-title mb-3 text-center text-2xl font-bold text-[var(--sea-ink)] sm:text-3xl">
				Continue to your account
			</h1>
			<p className="mb-8 max-w-md text-center text-[var(--sea-ink-soft)]">
				Add your form component here (email/password, GitHub, etc.).
			</p>
			<Link
				to="/login"
				className="text-sm font-medium text-[var(--lagoon-deep)] underline-offset-4 hover:underline"
			>
				← Back to welcome
			</Link>
		</main>
	);
}
