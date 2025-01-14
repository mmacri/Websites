# Michael Macri Portfolio Website

This repository contains the source code for my personal portfolio website, which showcases my skills, experience, and professional achievements. It includes a blog section where I can post articles, and readers can leave comments.

Live site: [Michael Macri Portfolio](https://mmacri.github.io/Websites/)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Blog Page](#blog-page)
- [Installation and Setup](#installation-and-setup)
- [License](#license)

---

## Overview

This portfolio website highlights my professional background and achievements. It includes:
- **Home Page**: A brief overview of my skills, experience, and contact information.
- **Portfolio Page**: A showcase of my projects and professional accomplishments.
- **Blog Page**: A dynamic blog system where I can post articles, and readers can comment.

---

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Dynamic Blog**: Includes admin-only article creation and public commenting functionality.
- **Styling**: Uses consistent styling across all pages via `styles.css`.
- **GitHub Pages Hosting**: Free and easy-to-deploy static hosting.

---

## Technologies Used

- **HTML5**: For structuring the website content.
- **CSS3**: For styling and layout design.
- **Bootstrap**: For responsive and modern UI components.
- **Font Awesome**: For icons used throughout the site.
- **JavaScript**: For interactive blog functionality.
- **GitHub Pages**: For static hosting.

---

## Project Structure

├── index.html # Main homepage file 
├── portfolio.html # Portfolio section page 
├── css/ 
│ ├── styles.css # Main stylesheet 
├── assets/ 
│ ├── img/ # Images used in the site
│ └── profile.jpg # Profile image  
│ ├── fonts/ # Custom fonts 
├── js/ 
│ ├── scripts.js # JavaScript logic for interactive elements 
│ └── blog.js # JavaScript logic for the blo
├── posts.json # JSON file for blog storage
├── README.md # Repository documentation

---

## Blog Page

### Overview
The blog page allows admin users to create new blog posts and provides functionality for readers to leave comments on posts.

### Features
- **Admin-only Post Creation**:
  - A passcode field ensures that only admins can create new posts.
  - Passcode is set as `"1234"` in the current implementation (can be updated in `blog.js`).
- **Public Commenting**:
  - Readers can leave comments on individual posts.
  - Comments are displayed below each post.

### How It Works
1. Blog posts are fetched from `posts.json` using JavaScript.
2. Admins can create new posts using the form at the bottom of the blog page.
3. Comments can be added by readers and are displayed dynamically.

---

## Installation and Setup

### Step 1: Clone the Repository

git clone https://github.com/mmacri/Websites.git
cd Websites

### Step 2: File Structure

Ensure the following files are present:
index.html
portfolio.html
blog.html
css/styles.css
js/blog.js
posts.json

### Step 3: Enable GitHub Pages
Go to your repository settings.
Navigate to the Pages section.
Select the branch (e.g., main) and root directory.
Save changes.
Your site will be live at https://mmacri.github.io/websites.

### Step 4: Test the Blog
Visit https://mmacri.github.io/websites/blog.html.
Test creating new posts and leaving comments.
License
This project is licensed under the MIT License - feel free to use or modify the code for personal or commercial purposes.

### Contact
For inquiries or collaboration, feel free to reach out:
