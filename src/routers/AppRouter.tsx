import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import config from './config';
const renderRoutes = (routes) => {
  if (!Array.isArray(routes)) {
    return null;
  }
  return (
    <Routes>
      {routes.map((route, index) => {
        const { path, exact, noAuth, childRoutes } = route;
        return (
          <Route
             key={route.path || index}
             path={route.path}
              exact={route.exact}
              strict={route.strict}
             element={<route.component />}
          >
            
             {
             !!childRoutes && childRoutes.map(i => {
                return <Route
                    key={i.path}
                    path={i.path}
                    exact={i.exact}
                    element={<i.component />}
                >
                </Route>
            })
            }
          </Route >
        );
      })}
    </Routes>
  );
};
const AppRouter = () => <Router> {renderRoutes(config)}</Router>;    
export default AppRouter;
