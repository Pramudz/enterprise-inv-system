import React from "react"
const UserForm = React.lazy(() => import("../pages/Users/UserForm"))


const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/user', name: 'user', component: UserForm },
  ]

  export default routes;