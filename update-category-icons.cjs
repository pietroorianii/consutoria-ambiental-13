const fs = require('fs');
const path = require('path');

const dir = 'src/data/categories';
const files = fs.readdirSync(dir);

const mapping = {
  'waterResourcesCategory.ts': 'Droplet',
  'licensingCategory.ts': 'ShieldCheck',
  'degradedAreasCategory.ts': 'TreePine',
  'monitoringCategory.ts': 'LineChart',
  'reportsCategory.ts': 'FileText',
  'consultingCategory.ts': 'Briefcase',
  'trainingCategory.ts': 'GraduationCap',
  'managementCategory.ts': 'Map',
  'esgCategory.ts': 'Globe2',
  'climateCategory.ts': 'Wind'
};

for (const file of files) {
  if (mapping[file]) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const newIcon = mapping[file];
    
    // Replace import
    content = content.replace(/import\s+\{\s*([A-Za-z0-9_]+)\s*\}\s+from\s+["']lucide-react["'];/, (match, oldIcon) => {
      // Also replace React.createElement
      content = content.replace(new RegExp(`React\\.createElement\\(${oldIcon}`, 'g'), `React.createElement(${newIcon}`);
      return `import { ${newIcon} } from "lucide-react";`;
    });

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file} to use ${newIcon}`);
  }
}
