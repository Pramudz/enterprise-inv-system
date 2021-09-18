import { RotateLeft } from "@material-ui/icons"
import React from "react"
import { Redirect, Route, Switch } from 'react-router-dom'
import routes from "../App/routes"
const AppContent = () => {
    return (
          <Switch>
            {routes.map((route, idx) => {
              console.log(route)
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => (
                      <>
                        <route.component {...props} />
                      </>
                    )}
                  />
                )
              )
            })}
            <Redirect from="/" to="/home" />
          </Switch>
    )
  }

  
export default React.memo(AppContent)