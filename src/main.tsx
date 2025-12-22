import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
// antd部分
import { ConfigProvider } from "antd"
import zhCN from "antd/locale/zh_CN"
import 'antd/dist/antd.css';  // 引入官方提供的css样式文件

ReactDOM.createRoot(document.getElementById("root")!).render(
   <ConfigProvider locale={zhCN}>
     <App />
   </ConfigProvider>
)