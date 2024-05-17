import { lazy } from "react";

const Dashboard = lazy(() => import("../views/dashboard"));
const Login = lazy(() => import("../views/auth/Login"));
const Signup = lazy(() => import("../views/auth/Signup"));
const Client = lazy(() => import("../views/client/index"));
const Meeting = lazy(() => import("../views/meeting/index"));
const Chat = lazy(() => import("../views/chat/index"));
const Account = lazy(() => import("../views/account/Account"));
const Bill = lazy(() => import("../views/bill/Bill"));

export const privateRouteList = [
    { path: '/', name: 'Dashboard', exact: true, element: Dashboard },
    { path: '/client', name: 'Client', exact: true, element: Client },
    { path: '/meeting', name: 'Meeting', exact: true, element: Meeting },
    { path: '/chat', name: 'Chat', exact: true, element: Chat },
    { path: '/account', name: 'Account', exact: true, element: Account },
    { path: '/bill', name: 'Bill', exact: true, element: Bill },
]

export const publicRouteList = [
    { path: '/login', name: 'Login', exact: true, element: Login },
    { path: '/register', name: 'Signup', exact: true, element: Signup },
]