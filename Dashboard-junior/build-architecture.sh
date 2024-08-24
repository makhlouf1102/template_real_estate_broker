# Create directories
mkdir views public public/css public/js routes controllers models config

# Create files
touch views/layout.pug views/index.pug
touch public/css/style.css public/js/main.js
touch routes/index.js
touch controllers/indexController.js
touch config/.gitkeep
touch app.js

# Rename index.js to app.js (if it exists)
mv index.js app.js 2>/dev/null || :

# Display the created structure
tree -L 2