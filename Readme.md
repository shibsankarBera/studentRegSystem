# Student Registration System

## Objective

The objective of this project is to develop a **Student Registration System** using **HTML, CSS, and JavaScript (DOM Manipulation)**.  
The system allows users to register student details, display records, edit existing records, and delete records.  
Student data is stored using **Local Storage**, so data is not lost after refreshing the page.

---


## Features

- Add new student records  
- Edit existing student records  
- Delete student records  
- Prevent empty form submission  
- Validate all input fields  
- Store data using Local Storage  
- Dynamic vertical scrollbar using JavaScript  
- Responsive design for mobile, tablet, and desktop  
- Remix Icon used for icons  

---

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**
- **Remix Icon**
- **Browser Local Storage**

---

## File Structure
    studentRegSystem
    ├── index.html
    ├── index.css
    ├── index.js
    └── README.md

---

## Work Flow 

1. User enters student details in the registration form  
2. Submit button triggers JavaScript validation  
3. Empty fields are not allowed  
4. Student Name accepts only characters  
5. Student ID accepts only numbers  
6. Email ID must be in valid format  
7. Contact Number must be exactly 10 digits  
8. If validation fails, error message and icon are shown  
9. If validation passes, data is stored as a student object  
10. Student objects are stored in an array  
11. Array data is saved in Local Storage  
12. Student records are displayed dynamically in a table  
13. Edit button updates existing student data  
14. Delete button removes selected student record  
15. Scrollbar appears dynamically when records exceed container height  

---

## Icons

**Remix Icon** is used for:
- Form validation success and error icons  
- Edit action button  
- Delete action button  

---

## Responsive Design

The application is fully responsive and works on:
- Mobile devices (≤ 640px)  
- Tablet devices (641px – 1024px)  
- Desktop devices (≥ 1025px)  

CSS media queries are used to achieve responsiveness.

---

## How to Run the Project

1. Download or clone the project  
2. Open the `studentRegSystem` folder  
3. Open `index.html` in any web browser  
4. Start adding student records  

---

## Conclusion

This project successfully implements a **Student Registration System** using JavaScript DOM manipulation.  
It fulfills all assignment requirements, including validation, Local Storage usage, responsiveness, and proper file organization.
