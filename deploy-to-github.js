const { execSync } = require("child_process");

try {
  // Ejecutar el script de construcción
  console.log("Building project...");
  execSync("npm run build", { stdio: "inherit" });

  // Agregar, hacer commit y push a GitHub
  console.log("Deploying to GitHub...");
  execSync("git add .", { stdio: "inherit" });
  execSync('git commit -m "Deploying project"', { stdio: "inherit" });
  execSync("git push origin main", { stdio: "inherit" });

  console.log("Deployment successful!");
} catch (error) {
  console.error(`Error during deployment: ${error.message}`);
}
