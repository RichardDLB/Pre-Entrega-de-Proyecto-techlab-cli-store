# TechLab - Gestor de Productos CLI 🚀

Herramienta de consola desarrollada en Node.js (ESModules) para interactuar con la FakeStore API, permitiendo realizar 
operaciones CRUD (Consultar, Crear y Eliminar productos) directamente desde la terminal.

## 🛠️ Tecnologías utilizadas
* Node.js (ESModules)
* Fetch API
* FakeStore API
* DummyJSON API
  

## 📦 Instalación y Configuración

1. Clona el repositorio:
   \`\`\`bash
   git clone https://github.com/RichardDLB/techlab-cli-store.git
   \`\`\`
2. Instala las dependencias :
   \`\`\`bash
   npm install
   \`\`\`

## 🚀 Uso

Ejecuta los siguientes comandos desde la terminal mediante npm:

* **Consultar todos los productos:**
  \`\`\`bash
  npm run start GET products
  \`\`\`
* **Consultar un producto específico:**
  \`\`\`bash
  npm run start GET products/15
  \`\`\`
* **Crear un nuevo producto:**
  \`\`\`bash
  npm run start POST products "T-Shirt Rex" 300 remeras
  \`\`\`
* **Eliminar un producto:**
  \`\`\`bash
  npm run start DELETE products/7
  \`\`\`
