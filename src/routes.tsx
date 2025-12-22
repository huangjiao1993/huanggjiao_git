import { createBrowserRouter } from 'react-router-dom';
import App from './App'; // 你的主组件
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
