# AJAX Type Ahead

A responsive city and state search application built with **HTML, CSS, and JavaScript**. The application fetches city data from an external API and provides real-time suggestions as the user types.

## 🚀 Features

* Fetches city data from an external API
* Searches cities and states in real time
* Displays population information for matching results
* Uses **JavaScript array filtering** to find matching data
* Uses **Regular Expressions (Regex)** for flexible text matching
* Dynamically updates search results based on user input
* Highlights matching search terms in the results

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* Fetch API
* Regular Expressions (Regex)
* Array methods such as `filter()` and `map()`

## 📖 How It Works

The application fetches a list of cities and their corresponding states and population data from an external API.

When a user enters a search term, the application:

1. Captures the user's input.
2. Creates a Regular Expression from the search term.
3. Filters the city data using the Regex pattern.
4. Finds matching city and state names.
5. Dynamically displays the matching results.
6. Shows the population for each matching location.

### Example

If the user searches for:

```text
new
```

The application searches the city and state data and displays locations containing the matching text.

## 🎯 What I Practiced

This project helped me practice:

* Working with the **Fetch API**
* Handling asynchronous JavaScript with `async/await`
* Working with arrays and objects
* Using `filter()` and `map()`
* Understanding and applying **Regular Expressions**
* Manipulating the DOM dynamically
* Handling user input and events
* Creating real-time search functionality

## 💻 Getting Started

### Clone the repository

```bash
git clone https://github.com/Layomi1/ajax-type-ahead.git
```

### Navigate into the project

```bash
cd ajax-type-ahead
```

### Run the project

Open `index.html` in your browser, or use a local development server such as the **VS Code Live Server** extension.

## 🔗 Live Demo

Add your deployed project link here:
`https://ajax-type-ahead-ahtshr5bi-layomis-projects.vercel.app/`


## 👨‍💻 Author

**Oluwalayomi Lawore**

* GitHub: [Layomi](https://github.com/Layomi1)
