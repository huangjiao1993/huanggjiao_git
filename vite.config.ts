import { defineConfig, loadEnv, type ConfigEnv, type UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default ({ mode }: ConfigEnv): UserConfig => {
  return defineConfig({
    plugins: [react()],
    server: {
      hmr: {
        overlay: true, // 在浏览器中显示热更新错误覆盖层
      },
    },
    resolve: {
    //关键代码
      alias: {
        "@": path.resolve(__dirname, "./src"), // 配置别名指向 src 目录
      },
    },
  });
};

