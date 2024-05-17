import { Route,Navigate } from "react-router-dom"
import { isAuthenticated } from "../utils"
import { privateRouteList, publicRouteList } from "./routes"
import DefaultLayout from "../layout"




export const privateRouter = () => {
    const PrivateRoute = ({ children }) => {
        const token = isAuthenticated()
        if (!token) {
            return <Navigate to="/login" />
        }
        return children
    }

    return privateRouteList.map(({ path, name, exact, element: Component }, index) => (
        <Route
            key={index}
            path={path}
            exact={exact}
            element={
                <PrivateRoute>
                    <DefaultLayout>
                        <Component />
                    </DefaultLayout>
                </PrivateRoute>
            }
        />
    ))
}


export const publicRouter = () => {
    const PublicRoute = ({ children }) => {
        const token = isAuthenticated()
        if (token) {
            return <Navigate to="/" />
        }
        return children
    }

    return publicRouteList.map(({ path, name, exact, element: Component }, index) => (
        <Route
            key={index}
            path={path}
            exact={exact}
            element={
                <PublicRoute>
                    <DefaultLayout>
                        <Component />
                    </DefaultLayout>
                </PublicRoute>
            }
        />
    ))
}