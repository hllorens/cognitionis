# Cognitionis

[https://cognitionis.com](https://cognitionis.com) is a collection of articles and YouTube videos on tech topics.

## Features

- **Dynamic Content:** The website loads all its content from a `data.json` file, making it easy to update and manage the information without changing the HTML structure.
- **Categorized Entries:** The content is organized into categories, each containing multiple entries with titles, descriptions, and embedded YouTube videos.
- **Responsive Design:** The layout is designed to be responsive and accessible on different devices.
- **External Links:** The header includes links to my LinkedIn and GitHub profiles for further professional connection.

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

### Advanced How to Test Locally

To run the server in the background, capture the process ID (PID), and log the output for debugging, follow these steps:

1. **Run in the background, log output and capture the PID:**
   ```bash
   nohup python3 -m http.server 8000 > server.log 2>&1 & echo $! > server.pid
   ```
   This command will keep the server running even if you close the terminal (`nohup`), redirect all output to `server.log` and saves the PID of the last background process to a file named `server.pid`.

2. **Stop the server:**
   ```bash
   kill $(cat server.pid)
   ```
   This command reads the PID from `server.pid` and stops the server process.


## Technologies Used

Single-page application that dynamically loads content from a JSON file.
- **HTML5:** The basic structure of the website.
- **CSS3:** For styling and layout, ensuring a clean and modern look.
- **JavaScript (ES6):** To fetch and dynamically render the content from the JSON file.

## Deployment

The site is deployed using [Netlify](https://cognitionis-website.netlify.app) as hosting and using this github repository.

## Future Enhancements

- **Improved Styling:** Enhancing the visual design and user experience.

## Server Status

To check if the server is running, you can use the `server_status.sh` script:

```bash
./server_status.sh
```

This will output "Server is running." if the server is active, and "Server is not running." otherwise.

---

