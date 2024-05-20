import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { RouterElement } from "./router/Router"
import { Suspense, createElement } from "react"
import './App.css'
import Loading from "./components/Loading"


function App() {

  const router = createBrowserRouter(
    RouterElement.map((rout) => ({
      ...rout,
      element: createElement(rout.element),
      children: rout.children?.map((child) => ({
        ...child,
        element: createElement(child.element)
      }))
    }))
  )

  return (
    <>
      <Suspense fallback={<Loading/>}>
        <RouterProvider router={router} />
      </Suspense>

    </>
  )
}

export default App
