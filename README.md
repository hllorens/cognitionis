# Cognitionis

[https://cognitionis.com](https://cognitionis.com) is a collection of articles and YouTube videos on tech topics.

## Features

- **Dynamic Content:** The website loads all its content from a `data.json` file, making it easy to update and manage the information without changing the HTML structure.
- **Categorized Entries:** The content is organized into categories, each containing multiple entries with titles, descriptions, and embedded YouTube videos.
- **Responsive Design:** The layout is designed to be responsive and accessible on different devices.
- **External Links:** The header includes links to my LinkedIn and GitHub profiles for further professional connection.

## Technologies Used

Single-page application that dynamically loads content from a JSON file.
- **HTML5:** The basic structure of the website.
- **CSS3:** For styling and layout, ensuring a clean and modern look.
- **JavaScript (ES6):** To fetch and dynamically render the content from the JSON file.

## Deployment

The site is deployed using [Netlify](https://cognitionis-website.netlify.app) as hosting and using this github repository.

## Project Structure

- `index.html`: The main HTML file.
- `style.css`: The stylesheet for the website.
- `script.js`: The JavaScript file for dynamic content loading.
- `data.json`: The JSON file containing the website's data.
- `README.md`: This file, providing an overview of the project.

## How to Test Locally

To view the website, you need to run a simple web server due to browser security policies (CORS).

1. Open a terminal in the project's root directory.
2. Run the following command:

```bash
python3 -m http.server 8000
```

3. Open your web browser and navigate to `http://localhost:8000`.

## Future Enhancements

- **Search Functionality:** Adding a search bar to filter the content.
- **Improved Styling:** Enhancing the visual design and user experience.

---

