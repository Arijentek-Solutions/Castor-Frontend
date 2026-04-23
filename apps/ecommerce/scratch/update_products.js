const fs = require('fs');
const path = 'c:\\Users\\Admin\\castor\\apps\\ecommerce\\lib\\products\\products.ts';
let content = fs.readFileSync(path, 'utf8');

// Add enquiryUrl before "insuranceCovered" or before the closing brace if "insuranceCovered" is missing
content = content.replace(/"insuranceCovered": (true|false)/g, '"insuranceCovered": $1,\n    "enquiryUrl": "https://form.jotform.com/261111682493051"');

fs.writeFileSync(path, content);
console.log('Updated products.ts');
