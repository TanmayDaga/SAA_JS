const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

const templatesDir = path.join(__dirname, 'views');
const outputDir = path.join(__dirname, 'public', 'stylesheets');
const inputCss = path.join(__dirname, 'public', 'stylesheets', 'tailwind.css');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Generate CSS for each main template and its partials
const templates = ['home', 'team','gallery','events']; // Add more templates as needed

templates.forEach(template => {
  const mainTemplatePath = path.join(templatesDir, `${template}.ejs`);
  const partialsPath = path.join(templatesDir, template, '**/*.ejs');
  const outputCssPath = path.join(outputDir, `${template}.css`);

  exec(`npx tailwindcss -i ${inputCss} -o ${outputCssPath} --content "${mainTemplatePath}" "${partialsPath}"`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error generating CSS for ${template}:`, stderr);
    } else {
      console.log(`Generated ${outputCssPath}`);
    }
  });
});

