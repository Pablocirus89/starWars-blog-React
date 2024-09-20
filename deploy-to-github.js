const { execSync } = require("child_process");

try {
  // Ejecutar el script de construcción
  console.log("Building project...");
  execSync("npm run build", { stdio: "inherit" });

  // Agregar los cambios si los hay
  console.log("Deploying to GitHub...");
  execSync("git add .", { stdio: "inherit" });

  // Verificar si hay cambios
  const changes = execSync("git status --porcelain").toString().trim();

  if (changes) {
    // Si hay cambios, hacer commit y push
    execSync('git commit -m "Deploying project"', { stdio: "inherit" });
    execSync("git push origin main", { stdio: "inherit" });
    console.log("Deployment successful!");
  } else {
    console.log("No changes to deploy.");
  }
} catch (error) {
  console.error(`Error during deployment: ${error.message}`);
}

