const fs = require('fs');
const path = require('path');

const dir = 'src/data/services/licensing';
const files = fs.readdirSync(dir);

const mapping = {
  'lpService.ts': 'Map',
  'liService.ts': 'Briefcase',
  'loService.ts': 'ShieldCheck',
  'lasService.ts': 'Leaf',
  'lacService.ts': 'Leaf',
  'dlamService.ts': 'FileText'
};

for (const file of files) {
  if (mapping[file]) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const newIcon = mapping[file];
    
    // Replace import
    content = content.replace(/import\s+\{\s*([A-Za-z0-9_]+)\s*\}\s+from\s+["']lucide-react["'];/, (match, oldIcon) => {
      // Replace the icon usage inside the object
      content = content.replace(new RegExp(`icon:\\s*${oldIcon}`, 'g'), `icon: ${newIcon}`);
      return `import { ${newIcon} } from "lucide-react";`;
    });

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file} to use ${newIcon}`);
  }
}
