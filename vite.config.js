export default defineConfig(({ command }) => {
  if (command === "serve") {
    return {
      root: "public",
      plugins: [vue()],
    };
  } else {
    return {
      plugins: [vue()],
      build: {
        lib: {
          entry: "src/index.js",
          name: "Greeter",
          formats: ["umd"],
          fileName: "compiled-greeter-component",
        },
        rollupOptions: {
          external: ["vue"],
          output: {
            globals: {
              vue: "Vue",
            },
          },
        },
      },
    };
  }
});
