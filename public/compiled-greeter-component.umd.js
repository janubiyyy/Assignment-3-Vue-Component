<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Test Greeter Component</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <h1>Testing Greeter Component</h1>
    <div id="my-component"></div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
    <script src="./compiled-greeter-component.umd.js"></script>

    <script>
      if (typeof Greeter === "undefined") {
        console.error("Greeter is not defined");
      } else {
        Greeter.init("#my-component", {
          message: "Hello from the host app!",
          buttonLabel: "Say Hello"
        });
      }
    </script>
  </body>
</html>
