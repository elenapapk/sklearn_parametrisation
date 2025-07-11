# sklearn_parametrisation

This repository provides an interactive front-end tool for visualizing static image outputs generated from machine learning experiments, such as clustering or parameter tuning using scikit-learn. It is designed for demonstration, education, or exploratory analysis where users can dynamically view how parameter changes affect results. Built using only HTML, CSS, and JavaScript, it allows for lightweight deployment and integration with pre-generated image sets.

---

## Contents

### `index.html`  
**Purpose:** Defines the main layout and interactive interface for the tool.

**Features:**
- Two parameter sliders: `radius` and `points`
- “Run” button to trigger visual update
- Live image preview based on slider selection

---

### `index.css`  
**Purpose:** Provides the styling for the layout and interface elements.

**Features:**
- Clean responsive design
- Basic styling for interactive controls
- Optional support for vector icons and custom assets

---

### `script.js`  
**Purpose:** Contains the logic to handle parameter input and update image previews.

**Features:**
- Reads values from both sliders
- Constructs filenames based on selected parameters
- Dynamically updates preview with corresponding image from `/used/`

---

### `/used/`  
**Purpose:** Folder containing image assets used for previews.

**Requirements:**
- Image files must follow the naming format: `radius_points.png`  
  *(e.g., `2_3.png`, `1_0.png`)*

---

## Example Use Cases

This tool can be adapted for:
- Visualizing DBSCAN or other clustering hyperparameter effects
- Comparing static model outputs based on tuning choices
- Creating interactive demos for ML education
- UI prototypes for ML visualization tools
