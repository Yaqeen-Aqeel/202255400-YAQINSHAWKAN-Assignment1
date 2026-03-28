# Technical Documentation

## 1. Project Overview
This project is a responsive personal portfolio web application built using HTML, 
CSS, and JavaScript. It represents the starting point of a professional portfolio 
and demonstrates understanding of front-end development fundamentals, responsive 
design principles, and basic interactivity.

The website contains three primary sections: About Me, Projects, and Contact.

---

## 2. Project Structure

The project follows a clear and organized folder structure:

assignment-1/
├── index.html              → Main webpage structure  
├── css/styles.css          → Styling and responsive design  
├── js/script.js            → JavaScript interactivity  
├── assets/images/          → Project images  
├── docs/                   → Documentation files  
│   ├── ai-usage-report.md  
│   └── technical-documentation.md  
└── README.md               → Project overview and setup instructions  

This structure separates content, styling, logic, and documentation to improve 
maintainability and readability.

---

## 3. Technologies Used

HTML5 was used to build the structure and semantic layout of the webpage.  
CSS3 was used for styling, layout design, and responsive behavior.  
JavaScript was used to implement dynamic interactivity through a greeting message based on the time of day.

---

## 4. Design and Layout Decisions

### Section-Based Layout
Each major part of the website is wrapped in a `<section>` element 
to maintain a semantic and organized structure.

### Flexbox Usage
Flexbox is used for layout alignment and spacing in several areas:
- Navigation menu alignment
- Vertical arrangement of project cards
- Contact form layout

Flexbox allows flexible and consistent alignment across different screen sizes.

### Card Design for Projects
Projects are displayed inside visually distinct cards with padding, rounded 
corners, and shadows. This improves readability and creates a clean and modern user interface.

---

## 5. Responsive Design Strategy

Responsive design was implemented using CSS media queries.

### Breakpoint
@media (max-width: 768px)

### Mobile and Tablet Adjustments
- Navigation links stack vertically instead of horizontally
- Project cards are centered on smaller screens
- Spacing and layout adapt for better readability on mobile devices

These adjustments ensure the site works well on desktops, tablets, and smartphones.

---

## 6. JavaScript Interactivity

The project includes a dynamic greeting message that changes based on the 
user's local time.

### Functionality
The script retrieves the current hour using JavaScript's Date object. Based on the 
hour, it determines whether it is morning, afternoon, or evening and displays an 
appropriate greeting.

The greeting is inserted into the HTML element with the ID `greeting-message`. 
This demonstrates basic DOM manipulation and improves user engagement.

---

## 7. Accessibility and Usability Considerations

- Semantic HTML elements such as `header`, `section`, and `footer` improve structure and accessibility
- Form fields include associated labels for better usability
- Buttons and links include hover effects for user feedback
- Readable font sizes and consistent spacing improve overall user experience

---

## 8. Testing and Validation

The website was tested by:
- Opening it in modern browsers such as Chrome and Edge
- Resizing the browser window to confirm responsive behavior
- Verifying the greeting message updates correctly depending on the time of day
- Ensuring all images and navigation links load correctly

No console errors were found during testing.

---

This documentation explains the technical structure, design decisions, and 
functionality of the portfolio project.
