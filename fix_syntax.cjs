const fs = require('fs');
const files = [
  'src/simulators/web/js/JsLexicalScopeSimulator.jsx',
  'src/simulators/web/js/JsBlockScopeSimulator.jsx',
  'src/simulators/web/js/JsHoistingSimulator.jsx',
  'src/simulators/web/js/JsTdzSimulator.jsx',
  'src/simulators/web/js/JsClosureSimulator.jsx',
  'src/simulators/web/js/JsScopeChainSimulator.jsx',
  'src/WebDev/Frontend/Javascript/Module6/LexicalScope.jsx',
  'src/WebDev/Frontend/Javascript/Module6/BlockScope.jsx',
  'src/WebDev/Frontend/Javascript/Module6/Hoisting.jsx',
  'src/WebDev/Frontend/Javascript/Module6/Tdz.jsx',
  'src/WebDev/Frontend/Javascript/Module6/Closures.jsx',
  'src/WebDev/Frontend/Javascript/Module6/ScopeChain.jsx'
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  
  // Fix \${ to ${ globally
  content = content.replace(/\\\$\{/g, '${');
  
  // Fix className={\` to className={`
  content = content.replace(/className=\{\\\`/g, "className={`");
  
  // Fix \`} to `} globally
  content = content.replace(/\\\`\}/g, "`}");
  
  // Fix code: \` to code: `
  content = content.replace(/code:\s*\\\`/g, "code: `");
  
  // Fix \`, to `, globally
  content = content.replace(/\\\`,/g, "`,");
  
  // Fix code={\` to code={`
  content = content.replace(/code=\{\\\`/g, "code={`");
  
  // Fix console.log(\` to console.log(`
  content = content.replace(/console\.log\(\\\`/g, "console.log(`");
  
  // Fix \`); to `);
  content = content.replace(/\\\`\);/g, "`);");

  // Fix split('\\n') to split('\n')
  content = content.replace(/split\('\\\\n'\)/g, "split('\\n')");

  fs.writeFileSync(file, content);
  console.log("Fixed", file);
}
