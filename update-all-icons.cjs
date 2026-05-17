const fs = require('fs');
const path = require('path');

const dirs = [
  'src/data/categories',
  'src/data/services',
  'src/data/services/licensing'
];

const mapping = {
  'waterResourcesCategory.ts': 'Droplet',
  'waterResourcesServices.ts': 'Droplet',
  'licensingCategory.ts': 'Leaf',
  'licensingServices.ts': 'Leaf',
  'lpService.ts': 'Leaf',
  'liService.ts': 'Leaf',
  'loService.ts': 'Leaf',
  'lasService.ts': 'Leaf',
  'lacService.ts': 'Leaf',
  'dlamService.ts': 'Leaf',
  'degradedAreasCategory.ts': 'TreePine',
  'degradedAreasServices.ts': 'TreePine',
  'monitoringCategory.ts': 'Beaker',
  'monitoringServices.ts': 'Beaker',
  'reportsCategory.ts': 'FileText',
  'reportsServices.ts': 'FileText',
  'consultingCategory.ts': 'Users',
  'consultingServices.ts': 'Users',
  'trainingCategory.ts': 'GraduationCap',
  'trainingServices.ts': 'GraduationCap',
  'managementCategory.ts': 'ClipboardList',
  'managementServices.ts': 'ClipboardList',
  'esgCategory.ts': 'Globe2',
  'esgServices.ts': 'Globe2',
  'climateCategory.ts': 'Triangle',
  'climateServices.ts': 'Triangle'
};

for (const dir of dirs) {
  if (!fs.existsSync(dir)) continue;
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    if (mapping[file]) {
      const filePath = path.join(dir, file);
      let content = fs.readFileSync(filePath, 'utf8');
      const newIcon = mapping[file];
      
      // Update icon imports if not present
      if (!content.includes(newIcon)) {
         content = content.replace(/import\s+\{\s*([^}]+)\s*\}\s+from\s+["']lucide-react["'];/, (match, group) => {
           // ensure newIcon is in the import list
           const imports = group.split(',').map(s => s.trim());
           if (!imports.includes(newIcon)) {
             imports.push(newIcon);
           }
           return `import { ${imports.join(', ')} } from "lucide-react";`;
         });
      }

      // Replace React.createElement(OldIcon, ...) -> React.createElement(NewIcon, ...) for categories
      // It looks like: icon: React.createElement(OldIcon, { className: ... })
      // Since we don't know the OldIcon easily, we can just replace the first argument of React.createElement
      content = content.replace(/icon:\s*React\.createElement\([A-Za-z0-9_]+/g, `icon: React.createElement(${newIcon}`);

      // Replace icon: OldIcon -> icon: NewIcon for services
      // This regex matches `icon: OldIcon,` but avoids `icon: React.createElement` since we handle it above
      // It matches `icon: Name,`
      content = content.replace(/icon:\s*[A-Za-z0-9_]+,/g, `icon: ${newIcon},`);

      fs.writeFileSync(filePath, content);
      console.log(`Updated ${file} to use ${newIcon}`);
    }
  }
}
