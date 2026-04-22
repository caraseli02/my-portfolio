import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent, h } from "vue";

describe("smoke test", () => {
  it("mounts a basic component", () => {
    const Wrapper = defineComponent({
      render() {
        return h("div", "hello");
      },
    });
    const wrapper = mount(Wrapper);
    expect(wrapper.text()).toBe("hello");
  });
});
