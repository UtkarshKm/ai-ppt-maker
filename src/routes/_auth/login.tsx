import { createFileRoute, Link } from "@tanstack/react-router";

import * as z from "zod";
import LoginForm from "#/components/auth/LoginForm.tsx";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/_auth/login")({
	validateSearch: z.object({
		redirect: z.string().optional(),
	}),
	component: LoginPage,
});

function LoginPage() {
	const { redirect } = Route.useSearch();
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-16">
			<div className="flex w-full max-w-[22rem] flex-col items-center text-center">
				<img
					src="/icon.svg"
					alt=""
					width={72}
					height={72}
					className="mb-10 size-[4.5rem] shrink-0 animate-in fade-in zoom-in-95 duration-300 motion-reduce:animate-none"
				/>

				<div className="animate-in fade-in slide-in-from-bottom-3 duration-300 delay-75 motion-reduce:animate-none motion-reduce:opacity-100 motion-reduce:transform-none fill-mode-both">
					<h1 className="mb-2 font-heading text-2xl font-semibold tracking-tight text-(--sea-ink) sm:text-[1.75rem] sm:leading-snug">
						Welcome to <span style={{ color: "#4FB8B2" }}>PPTMage</span>
					</h1>
					<p className="mb-10 text-sm leading-relaxed text-(--sea-ink-soft)">
						Sign in to create buitifull presentations in seconds.
					</p>
				</div>

				<div className="flex w-full flex-col gap-2.5 animate-in fade-in slide-in-from-bottom-3 duration-300 delay-150 motion-reduce:animate-none motion-reduce:opacity-100 motion-reduce:transform-none fill-mode-both">
					<LoginForm redirectTo={redirect} />
					<Button
						variant="ghost"
						size="lg"
						className="w-full rounded-2xl text-(--sea-ink-soft)"
						asChild
					>
						<Link to="/">Back to home</Link>
					</Button>
				</div>
			</div>
		</main>
	);
}
