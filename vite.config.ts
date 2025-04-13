import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"
import fs from "node:fs"

export default defineConfig({
    plugins: [sveltekit()],
    server: {
        https: {
            key: fs.readFileSync("./key.pem"),
            cert: fs.readFileSync("./cert.pem"),
        },
        host: true, // 스마트폰에서도 접속 가능
    },
})
