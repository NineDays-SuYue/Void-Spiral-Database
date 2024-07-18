/// <reference types="vite/client" />
/* 解决ts识别不了vue文件 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const vueComponent: DefineComponent<{}, {}, any>
  export default vueComponent
}
