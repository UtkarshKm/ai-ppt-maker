import { createFileRoute } from "@tanstack/react-router";
import { Button } from "#/components/ui/button";
import { authClient } from "@/lib/auth-client" // import the auth client

export const Route = createFileRoute("/")({ component: App });

function App() {
	    const { 
        data: session, 
        isPending, //loading state
        error, //error object
        // refetch //refetch the session
    } = authClient.useSession() 
	return <div>
		<h1>Welcome to PPTMage</h1>
		{isPending && <p>Loading session...</p>}
		{error && <p>Error loading session: {error.message}</p>}
		{session ? (
			<div>
				<p>Logged in as {session.user.name}</p>
				<Button onClick={() => authClient.signOut()}>Sign Out</Button>
			</div>
		) : (
			<Button>Sign In</Button>
		)}
	</div>;
}
