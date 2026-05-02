const fs = require('fs');

const moduleFiles = [
  'src/WebDev/Frontend/Javascript/Module6/LexicalScope.jsx',
  'src/WebDev/Frontend/Javascript/Module6/BlockScope.jsx',
  'src/WebDev/Frontend/Javascript/Module6/Hoisting.jsx',
  'src/WebDev/Frontend/Javascript/Module6/Tdz.jsx',
  'src/WebDev/Frontend/Javascript/Module6/Closures.jsx',
  'src/WebDev/Frontend/Javascript/Module6/ScopeChain.jsx'
];

const simulatorFiles = [
  'src/simulators/web/js/JsLexicalScopeSimulator.jsx',
  'src/simulators/web/js/JsBlockScopeSimulator.jsx',
  'src/simulators/web/js/JsHoistingSimulator.jsx',
  'src/simulators/web/js/JsTdzSimulator.jsx',
  'src/simulators/web/js/JsClosureSimulator.jsx',
  'src/simulators/web/js/JsScopeChainSimulator.jsx'
];

function processFile(file, isCourseModule) {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // Remove framer-motion imports
  content = content.replace(/import\s*\{\s*motion[^{}]*\}\s*from\s*['"]framer-motion['"];?\n?/g, '');
  content = content.replace(/import\s*\{\s*AnimatePresence[^{}]*\}\s*from\s*['"]framer-motion['"];?\n?/g, '');
  content = content.replace(/import\s*\{\s*motion,\s*AnimatePresence\s*\}\s*from\s*['"]framer-motion['"];?\n?/g, '');

  // Change motion.xxx to xxx
  content = content.replace(/<motion\.([a-zA-Z0-9]+)/g, '<$1');
  content = content.replace(/<\/motion\.([a-zA-Z0-9]+)>/g, '</$1>');

  // Remove animation props
  const props = ['initial', 'animate', 'transition', 'exit', 'layoutId'];
  props.forEach(p => {
    content = content.replace(new RegExp(`\\s${p}=\\{\\{[\\s\\S]*?\\}\\}`, 'g'), '');
    content = content.replace(new RegExp(`\\s${p}=\\{[^}]*\\}`, 'g'), '');
    content = content.replace(new RegExp(`\\s${p}="[^"]*"`, 'g'), '');
  });
  content = content.replace(/\slayout\b/g, '');

  // Remove AnimatePresence wrapper but keep children
  content = content.replace(/<AnimatePresence[^>]*>/g, '');
  content = content.replace(/<\/AnimatePresence>/g, '');

  if (isCourseModule) {
    // Replace non-amber colors in Module 6 headers with amber/yellow to match JS course
    const colors = [
      'purple', 'fuchsia', 'pink',
      'indigo', 'blue', 'cyan',
      'rose', 'red',
      'emerald', 'green', 'teal'
    ];
    colors.forEach(color => {
      content = content.replace(new RegExp(`${color}-400`, 'g'), 'amber-400');
      content = content.replace(new RegExp(`${color}-500`, 'g'), 'yellow-500');
      content = content.replace(new RegExp(`from-${color}-500`, 'g'), 'from-amber-500');
      content = content.replace(new RegExp(`to-${color}-500`, 'g'), 'to-orange-500');
      content = content.replace(new RegExp(`via-${color}-500`, 'g'), 'via-yellow-500');
    });
    
    // Fix shadow colors
    content = content.replace(/rgba\(99,102,241,0.15\)/g, 'rgba(245,158,11,0.15)');
    content = content.replace(/rgba\(99,102,241,0.2\)/g, 'rgba(245,158,11,0.2)');
    content = content.replace(/rgba\(99,102,241,0.1\)/g, 'rgba(245,158,11,0.1)');
  }

  fs.writeFileSync(file, content);
  console.log('Processed', file);
}

moduleFiles.forEach(f => processFile(f, true));
simulatorFiles.forEach(f => processFile(f, false));
