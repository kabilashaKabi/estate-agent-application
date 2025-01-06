
# VistaHomes - Real Estate Application

VistaHomes is a real estate web application developed using React. It allows users to search for properties, view detailed property information, and explore available listings with filters such as property type, price range, and location.

## Features

- **Property Search:** Search for properties based on various criteria such as type, price range, and postcode area.
- **Property Details:** View detailed information about properties, including images, descriptions, floor plans, and map locations.
- **Responsive Design:** Fully responsive design optimized for various screen sizes.
- **Property Thumbnails:** Browse through multiple images of each property and view a larger version when clicked.
- **Integrated Google Maps:** View the property's location on an interactive map.

## Technologies Used

- **React:** For building the user interface.
- **React Router:** For navigation between pages (Home, Search, Property Details).
- **Bootstrap:** For responsive grid and layout.
- **CSS:** For custom styling.
- **JSON:** For property data storage (stored in `properties.json`).

## Getting Started

To get started with the project, follow these instructions:

### 1. Clone the Repository

```bash
git clone https://github.com/kabilashaKabi/estate-agent-application.git
cd vistahomes
```

### 2. Install Dependencies

Make sure you have `npm` (Node Package Manager) installed. Then, run the following command to install all the necessary dependencies:

```bash
npm install
```

### 3. Run the Application

After the dependencies are installed, you can run the application locally by using the following command:

```bash
npm start
```

This will start the app in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production

To create a production build of the app, use the following command:

```bash
npm run build
```

This will create a `build` directory with the optimized production files.

## Available Scripts

In the project directory, you can run the following commands:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload if you make edits.

### `npm test`

Launches the test runner in interactive watch mode. For more information, refer to the React testing documentation.

### `npm run build`

Builds the app for production to the `build` folder. The app will be minified and optimized for performance.

### `npm run eject`

**Warning: This is a one-way operation!** Once you `eject`, you can't go back. It will copy all configuration files and dependencies (webpack, Babel, ESLint, etc.) into your project for full customization.

## Learn More

You can learn more in the following documentation:

- [React Documentation](https://reactjs.org/)
- [React Router Documentation](https://reactrouter.com/)
- [Bootstrap Documentation](https://getbootstrap.com/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)

## Future Enhancements

- **User Authentication:** Add login and registration functionality.
- **Favorites:** Allow users to save and manage their favorite properties.
- **More Filters:** Add additional filters for search, such as property age or amenities.
- **Map Integration:** Enhance the map feature with additional property markers and info windows.

## License

This project is licensed under the MIT License.
