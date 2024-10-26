# NextJS Simple Blog

This project is a dynamic blog page built with NextJS, TypeScript, TailwindCSS, Sanity.io, and Zod. It allows users to subscribe to newsletters while enabling administrators to manage content efficiently through a headless CMS.

## Project Description

NextJS Simple Blog is designed to provide a seamless experience for users to check the latest company updates, and for administrators to manage blog content using the Sanity Headless CMS.

### Features

- **User Subscription**: Easy-to-use subscription form with validation.
- **Content Management**: Manage website content with Sanity.io headless CMS.
- **Responsive Design**: Built with TailwindCSS for responsiveness across devices.
- **Server-Side Rendering**: Utilizes NextJS for optimized performance and SEO.
- **Form Validation**: Implemented using Zod for robust data handling.
- **Code Highlighting**: Syntax highlighting for code blocks using `react-syntax-highlighter`.

### Notable Libraries and Technologies

- **NextJS**: React framework with server-side rendering capabilities.
- **TypeScript**: Adds static typing to JavaScript for safer, more maintainable code.
- **TailwindCSS**: Utility-first CSS framework for rapid UI development.
- **Sanity.io**: Headless CMS for flexible content management.
- **Zod**: TypeScript-first schema validation library.
- **DaisyUI**: TailwindCSS component library for faster UI building.
- **Styled-Components**: Allows writing CSS-in-JS for component styling.
- **Sentry**: Error monitoring and performance tracking.
- **PortableText**: Sanity Portable Text renderer for rich text content.
- **React Hook Form**: Library for building forms with easy validation.
- **React Syntax Highlighter**: Provides syntax highlighting for code blocks.
- **React Icons**: A popular icon library for React projects.
- **Speakingurl**: Library for generating URL-friendly slugs.
- **Node Mailjet**: Library for handling email subscriptions.
- **React Testing Library Hooks**: Utility for testing custom React hooks.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Author](#author)
- [License](#license)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/oleksii-suprun-github/nextjs-blog.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd nextjs-blog
   ```

3. **Install the dependencies**:

   ```bash
   yarn install
   ```

## Usage

- **Start the development server**:

  ```bash
  yarn dev
  ```

- **Build the project for production**:

  ```bash
  yarn build
  ```

- **Start the production server**:

  ```bash
  yarn start
  ```

## Scripts

- `dev`: Starts the NextJS development server.
- `build`: Builds the application for production.
- `start`: Starts the production server.
- `lint`: Runs ESLint to lint the code.
- `format`: Formats code using Prettier.
- `test`: Runs tests using Vitest.
- `test:coverage`: Generates test coverage reports.

## Dependencies

- `@hookform/resolvers`: ^3.9.0
- `@next/third-parties`: 14.1.1
- `@portabletext/react`: ^3.1.0
- `@sanity/client`: ^6.21.3
- `@sanity/code-input`: ^4.1.4
- `@sanity/icons`: ^3.4.0
- `@sanity/image-url`: ^1.0.2
- `@sanity/types`: ^3.57.4
- `@sanity/ui`: ^2.8.9
- `@sanity/vision`: 3
- `@sentry/nextjs`: ^8
- `@tailwindcss/typography`: ^0.5.15
- `@typescript-eslint/eslint-plugin`: ^7.14.1
- `@vercel/postgres`: ^0.10.0
- `@vercel/speed-insights`: ^1.0.12
- `clsx`: ^2.1.1
- `daisyui`: ^4.12.10
- `next`: ^14.2.15
- `next-sanity`: 9.5.0
- `node-mailjet`: ^6.0.6
- `react`: ^18.3.1
- `react-dom`: ^18
- `react-hook-form`: ^7.53.0
- `react-syntax-highlighter`: ^15.6.1
- `sanity`: ^3.57.4
- `server-only`: ^0.0.1
- `speakingurl`: ^14.0.1
- `styled-components`: ^6.1
- `use-debounce`: ^10.0.3
- `zod`: ^3.23.8
- `@testing-library/react-hooks`: ^8.0.1

## Dev Dependencies

- `@testing-library/dom`: ^10.3.1
- `@testing-library/react`: ^16.0.0
- `@types/node`: ^20
- `@types/react`: ^18
- `@types/react-dom`: ^18
- `@types/react-syntax-highlighter`: ^15.5.13
- `@types/testing-library__jest-dom`: ^6.0.0
- `@vitejs/plugin-react`: ^4.3.2
- `@vitest/coverage-v8`: ^2.1.1
- `@vitest/ui`: ^2.0.2
- `eslint`: ^8
- `eslint-config-airbnb-typescript`: 16.0.0
- `eslint-config-next`: 14.2.4
- `eslint-config-node`: 4.1.0
- `eslint-config-prettier`: 8.0.0
- `eslint-import-resolver-typescript`: 3.6.1
- `eslint-plugin-deprecation`: 2.0.0
- `eslint-plugin-import`: 2.25.2
- `eslint-plugin-jest-dom`: 5.4.0
- `eslint-plugin-jsx-a11y`: 6.7.0
- `eslint-plugin-node`: 11.1.0
- `eslint-plugin-package-json`: 0.12.0
- `eslint-plugin-prettier`: 5.1.3
- `eslint-plugin-react`: 7.28.0
- `eslint-plugin-testing-library`: 6.2.2
- `jsdom`: ^24.1.0
- `postcss`: ^8
- `prettier`: ^3.3.3
- `prettier-plugin-tailwindcss`: ^0.6.8
- `react-icons`: ^5.3.0
- `tailwindcss`: ^3.4.1
- `typescript`: ^5
- `vite-tsconfig-paths`: ^4.3.2
- `vitest`: ^1.6.0

## Author

Oleksii Suprun  
Email: oleksii.suprun.email@gmail.com

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
