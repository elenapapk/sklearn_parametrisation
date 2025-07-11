# sklearn_parametrisation


This repository contains a simple, interactive front-end tool to visualize the effects of parameter changes (such as radius and points) on pre-generated image outputs. It is ideal for rapid testing and demonstration of hyperparameter tuning results in clustering algorithms or other machine learning workflows.

Developed using only HTML, CSS, and JavaScript, this tool provides an easy way to preview static results without needing a backend server or frameworks.

📁 Contents
index.html
Purpose: The main structure and interface of the application.
Features:

Contains sliders for selecting parameter values (radius and points)

A “Run” button to trigger image preview update

#Features
Two customizable sliders (radius and points)

Dynamically updates the image preview based on selected values

Lightweight, pure HTML/CSS/JavaScript (no frameworks)

Easy to expand or integrate with machine learning outputs


#File Structure

index.html — main interface and layout

index.css — styling and responsive design

script.js — logic for handling slider input and image updates

./used/ — folder where images must be named using the format radius_points.png (e.g., 2_3.png)


#Usage

Place your image assets in a /used folder and name them like:

bash
Copy
Edit
./used/2_3.png
./used/1_0.png
Open index.html in a browser.

Use the sliders to select values.

Click “Run” to update the displayed image.


#Example Use Case

This type of interface can be used in:

Visualizing hyperparameter outputs (e.g., DBSCAN clustering)

Educational interactive demos

Exploratory design testing


#Assets Required

Make sure to include:

A folder named /used/ with all the required images


Optional: /assets/ for vector graphics if included in index.css
