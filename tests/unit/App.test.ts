import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import App from "@/App.vue";
import router from "@/router";

describe("App tests", () => {
    it("should mount", async () => {
        const wrapper = mount(App, {
            global: {
                plugins: [router]
            }
        });
        await router.isReady();
        expect(wrapper.html()).toContain("Legup");
    });
});
