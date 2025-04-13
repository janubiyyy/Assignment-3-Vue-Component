# Assignment 3 - Vue.js Component for Third-Party Integration

## Description

This is a standalone Vue.js component (Greeter) that can be embedded in third-party applications using a `<script>` tag.  
The component renders a button that, when clicked, displays an alert with a message passed via props.

## Features

- **Self-contained:** No conflict with host application styles/scripts.
- **Customizable Props:** Accepts `message` and `buttonLabel` for flexibility.
- **UMD Build:** Compiled as a UMD module for global access.
- **Virtual DOM:** Utilizes Vue's Virtual DOM for efficient re-rendering (for more details, see explanation below).

### Why Virtual DOM?

Vue's Virtual DOM enables efficient updates by only rendering parts of the DOM that have changed. This enhances performance and provides a smooth user experience, even in a self-contained component like this one.

## Installation & Build

1. Navigate to the `Assignment-3-Vue-Component` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
