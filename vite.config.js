import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'  // 引入 mock 插件提供的方法

export default defineConfig(({command,mode})=>{
    console.log('command', command)
    console.log('mode:',mode)
    return{
        plugins: [
            vue(),
            AutoImport({
                imports: ['vue'],  //导入vue3相关API
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
            // mock 配置项
            viteMockServe({
                mockPath:'mock',
                localEnabled:command === 'serve',
            }),
        ],
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue'],
            alias: [{
                find: "@",
                replacement: "/src"
            }]
        },
        // 配置反向代理
        server: {
            host: 'localhost', // 启动后浏览器窗口输入地址就可以进行访问
            port: 8082, // 端口号
            open: false, //是否自动打开浏览器
            cors: true, //为开发服务器配置 CORS , 默认启用并允许任何源
            hmr: true, // 开启热更新
            proxy: {
                "/dev-api": {
                    // 配置接口调用目标地址
                    target: 'http://192.168.0.240:8088',
                    // 当进行代理时，Host 的源默认会保留（即Host是浏览器发过来的host），如果将changeOrigin设置为true，则host会变成target的值。
                    changeOrigin: true,
                    // 前缀 /api 是否被替换为特定目标，不过大多数后端给到的接口都是以/api打头，这个没有完全固定的答案，根据自己的业务需求进行调整
                    rewrite: (path) => path.replace(/^\/dev-api/, ""),
                }
            }
        },
    }
})