import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Greeter from "../src/Greeter.vue";

describe("Greeter.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Greeter, {
      props: {
        message: "Hello from test!",
        buttonLabel: "Test Button",
      },
    });
  });

  it("renders a button", () => {
    const button = wrapper.find("button");
    expect(button.exists()).toBe(true);
    expect(button.text()).toBe("Test Button");
  });

  it("shows message when clicked", async () => {
    window.alert = vi.fn();

    const button = wrapper.find("button");
    await button.trigger("click");
    expect(window.alert).toHaveBeenCalledWith("Hello from test!");
  });

  it("renders default props if not provided", () => {
    const defaultWrapper = mount(Greeter);
    expect(defaultWrapper.props().message).toBe("Hello World!");
    expect(defaultWrapper.props().buttonLabel).toBe("Click Me");
  });
});
