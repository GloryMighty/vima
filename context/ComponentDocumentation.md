# Component Documentation

## Header.js

### Overview
The `Header.js` component serves as the navigation bar for the application, providing links to various sections and integrating a language selector for localization.

### State Management
- Utilizes `useState` to manage the mobile menu's visibility with the `isMobileMenuOpen` state.
- The button toggles this state, allowing users to open and close the mobile menu.

### Navigation Links
- Contains links to Home, About, Pricing, Blog, and Contact.
- Each link uses the `router` from Next.js to navigate while preserving the current route.
- Active links are highlighted based on the current pathname.

### Language Selector Integration
- The `LanguageSelector` component is included in the navbar, allowing users to switch languages seamlessly.

---

## LanguageSelector.js

### Overview
The `LanguageSelector.js` component provides functionality for users to switch between different languages in the application.

### Language Switching
- Uses `useTranslations` to handle language localization.
- Maintains the current route when switching languages, ensuring a smooth user experience.

### Dropdown Functionality
- The component features a button that toggles the visibility of the language options.
- It includes a click outside handler to close the dropdown when clicking outside of it.

### Responsive Design
- The component is designed to work well on both desktop and mobile devices, adapting its layout accordingly.

---

This documentation provides a clear understanding of the logic and functionality of the `Header.js` and `LanguageSelector.js` components, ensuring maintainability and ease of use for future developers.
