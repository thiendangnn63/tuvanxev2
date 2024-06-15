import { Route, Routes } from "react-router-dom"
import "./App.css"
import { privateRoutes, publicRoutes } from "./routes"
import DefaultLayout from "./layouts/DefaultLayout"
import React from "react"

function App() {
	return (
		<div className="App">
			<Routes>
				{/* Cho những route công khai, ai cũng truy cập được */}
				{publicRoutes.map((route, index) => {
					let Layout: React.FC<{ children: React.ReactNode }> = DefaultLayout
					if (route.layout) Layout = route.layout
					else if (route.layout === null) Layout = React.Fragment
					const Page = route.component
					return (
						<Route
							key={index}
							path={route.path}
							element={
								<Layout>
									<Page />
								</Layout>
							}
						/>
					)
				})}
				{/* Cho những route mà khi người dùng được cho phép, sẽ làm thêm chặn route khi làm xong backend */}
				{privateRoutes.map((route, index) => {
					let Layout: React.FC<{ children: React.ReactNode }> = DefaultLayout
					if (route.layout) Layout = route.layout
					else if (route.layout === null) Layout = React.Fragment
					const Page = route.component
					return (
						<Route
							key={index}
							path={route.path}
							element={
								<Layout>
									<Page />
								</Layout>
							}
						/>
					)
				})}
			</Routes>
		</div>
	)
}

export default App
