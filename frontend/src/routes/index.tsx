import Home from "@/pages/Home"

type Route = {
	path: string
	component: React.FC
	layout?: React.FC<{ children: React.ReactNode }> | null
}

export const publicRoutes: Route[] = [
	{
		path: "/",
		component: Home,
	},
]

export const privateRoutes: Route[] = []
