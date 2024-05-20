import { lazy } from "react";

const Login = lazy(() => import('../Login/Login'))
const Dashboard = lazy(() => import('../pages/dashboard/Dashboard'))
const Table = lazy(() => import('../pages/Table/Table'))
const Create = lazy(() => import('../pages/Create/Create'))


export const RouterElement = [
    {
        path: '',
        element: Login
    },
    {
        path: '/dashboard',
        element: Dashboard,
        children: [
            {
                path: 'table',
                element: Table
            },
            {
                path: 'create',
                element: Create
            }

        ]
    }
]