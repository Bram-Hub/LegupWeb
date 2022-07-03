import { defineConfig } from "vitest/config";
import { resolve } from "path";
import Vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        Vue()
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src")
        }
    },
    test: {
        environment: "jsdom"
    }
});
