Temperature Converter

A simple and responsive temperature converter created using HTML5, CSS3, and JavaScript as part of my Web Development Internship task.

Project Description

This project is a temperature conversion tool that allows users to convert temperatures between Celsius, Fahrenheit, and Kelvin. The conversion results are updated automatically when the user enters a value or changes the temperature unit.

The project was created to practice HTML form inputs, JavaScript calculations, functions, DOM manipulation, input events, and validation.

Features
Convert Celsius to Fahrenheit and Kelvin
Convert Fahrenheit to Celsius and Kelvin
Convert Kelvin to Celsius and Fahrenheit
Live conversion while entering a value
Unit selection using a dropdown
Validation for invalid temperature values
Kelvin validation below absolute zero
Results displayed up to two decimal places
Responsive design for desktop and mobile screens
Simple and clean user interface
Technologies Used
HTML5
CSS3
JavaScript
Project Structure
Temperature_Converter/
│
├── index.html
├── style.css
└── script.js
Conversion Formulas
Celsius to Fahrenheit
°F = (°C × 9/5) + 32
Fahrenheit to Celsius
°C = (°F - 32) × 5/9
Celsius to Kelvin
K = °C + 273.15
Kelvin to Celsius
°C = K - 273.15
Fahrenheit to Kelvin
K = (°F - 32) × 5/9 + 273.15
Kelvin to Fahrenheit
°F = (K - 273.15) × 9/5 + 32
How It Works

The user enters a temperature value and selects the unit from the dropdown.

JavaScript then:

Reads the entered temperature.
Identifies the selected unit.
Applies the appropriate conversion formula.
Validates the entered value.
Displays the converted Celsius, Fahrenheit, and Kelvin values.
Updates the result automatically when the input changes.
Input Validation

The project handles invalid inputs to prevent incorrect results.

Empty input does not display a conversion.
Non-numeric values are rejected.
Kelvin values below 0 K are considered invalid.
Temperatures below absolute zero are not accepted.
Example

If the user enters:

25 °C

The result is approximately:

Celsius: 25.00 °C
Fahrenheit: 77.00 °F
Kelvin: 298.15 K
How to Run
Download or clone the repository.
Open the Temperature_Converter folder.
Make sure all three files are in the same folder.
Open index.html in a web browser.
Enter a temperature and select the required unit.
Learning Outcomes

Through this project, I practiced:

Creating HTML form inputs
Using JavaScript functions
Performing mathematical calculations
Working with parseFloat()
Using isNaN() for validation
Handling input and change events
Selecting HTML elements using the DOM
Updating webpage content dynamically
Formatting numbers using toFixed()
Creating responsive layouts using CSS
Future Improvements
Add temperature conversion history
Add dark and light mode
Add more unit conversion options
Add a reset button
Add animated temperature icons
Deploy the project using GitHub Pages# Task-4
