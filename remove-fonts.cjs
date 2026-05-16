const fs = require('fs');
const path = require('path');

function replaceFontFamily(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      replaceFontFamily(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // regex to remove style={{fontFamily:...}} or fontFamily: '...' from inline styles
      // this matches: style={{ fontFamily: '...' }}
      const newContent = content.replace(/style=\{\{\s*fontFamily:\s*[^}]+\}\}/g, '')
                                .replace(/style=\{\{\s*fontFamily:\s*[^,]+,\s*/g, 'style={{ ')
                                .replace(/,\s*fontFamily:\s*[^}]+\s*\}\}/g, ' }}');
      
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

replaceFontFamily('src');
