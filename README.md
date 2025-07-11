# sklearn_parametrisation


#Interactive Image Preview Tool

This project is a front-end visualization tool that dynamically updates an image based on two user-controlled sliders. It is designed for testing or showcasing different data outputs — such as variations in clustering algorithms or image parameters — using a static image library.


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
