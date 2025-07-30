# Cognitionis

Cognitionis is a personal website project that serves as a curated collection of resources and information on various technical topics. The site is designed to be a simple, single-page application that dynamically loads content from a JSON file.

## About

The primary goal of Cognitionis is to provide a clean and organized platform for presenting information related to Artificial Intelligence, Python programming, Vim editor configurations, and Jenkins automation. The website features a minimalist design with a focus on readability and ease of navigation.

## Features

- **Dynamic Content:** The website loads all its content from a `data.json` file, making it easy to update and manage the information without changing the HTML structure.
- **Categorized Entries:** The content is organized into categories, each containing multiple entries with titles, descriptions, and embedded YouTube videos.
- **Responsive Design:** The layout is designed to be responsive and accessible on different devices.
- **External Links:** The header includes links to my LinkedIn and GitHub profiles for further professional connection.

## Technologies Used

- **HTML5:** The basic structure of the website.
- **CSS3:** For styling and layout, ensuring a clean and modern look.
- **JavaScript (ES6):** To fetch and dynamically render the content from the JSON file.
- **JSON:** As the data source for the website's content.

## Project Structure

- `index.html`: The main HTML file.
- `style.css`: The stylesheet for the website.
- `script.js`: The JavaScript file for dynamic content loading.
- `data.json`: The JSON file containing the website's data.
- `README.md`: This file, providing an overview of the project.

## How to Use

To view the website, you need to run a simple web server due to browser security policies (CORS). 

1. Open a terminal in the project's root directory.
2. Run the following command:

```bash
python3 -m http.server 8000
```

3. Open your web browser and navigate to `http://localhost:8000`.

## Future Enhancements

- **Search Functionality:** Adding a search bar to filter the content.
- **More Content:** Expanding the collection of resources and topics.
- **Improved Styling:** Enhancing the visual design and user experience.

---

*This README was generated with the assistance of Gemini.*