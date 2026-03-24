const fs = require('fs');
const path = require('path');

const basePath = 'd:\\user\\Desktop\\TechSpread\\src';
const simulatorsPath = path.join(basePath, 'simulators', 'web');

const htmlDir = path.join(simulatorsPath, 'html');
const cssDir = path.join(simulatorsPath, 'css');
const jsDir = path.join(simulatorsPath, 'js');

[htmlDir, cssDir, jsDir].forEach(d => {
    if (!fs.existsSync(d)) fs.mkdirSync(d, {recursive: true});
});

const fileMap = {
    'AudioSimulator.jsx': 'html',
    'FormsSimulator.jsx': 'html',
    'InputTypesSimulator.jsx': 'html',
    'LinksSimulator.jsx': 'html',
    'ListsSimulator.jsx': 'html',
    'MediaOptimizationSimulator.jsx': 'html',
    'TablesSimulator.jsx': 'html',
    'ValidationSimulator.jsx': 'html',
    'VideoSimulator.jsx': 'html',
    'WebArchitectureSimulator.jsx': 'html',
    
    'CssBoxModelSimulator.jsx': 'css',
    'CssPseudoClassSimulator.jsx': 'css',
    'CssSelectorSimulator.jsx': 'css',
    'CssSpecificitySimulator.jsx': 'css',
    
    'JsConsoleSimulator.jsx': 'js',
    'JsDynamicTypingSimulator.jsx': 'js',
    'JsEngineSimulator.jsx': 'js',
    'JsExpressionsSimulator.jsx': 'js',
    'JsOperatorsSimulator.jsx': 'js',
    'JsPrimitivesSimulator.jsx': 'js',
    'JsReferenceSimulator.jsx': 'js',
    'JsTypeCoercionSimulator.jsx': 'js',
    'JsVariablesSimulator.jsx': 'js'
};

// Move files
for (const [file, folder] of Object.entries(fileMap)) {
    const oldPath = path.join(simulatorsPath, file);
    const newPath = path.join(simulatorsPath, folder, file);
    if (fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath);
        console.log(`Moved ${file} to ${folder}`);
    }
}

// Map of simulator names to their new folder
const simFolderMap = {};
for (const [file, folder] of Object.entries(fileMap)) {
    simFolderMap[file.replace('.jsx', '')] = folder;
}

// Update imports
function walkSync(dir, callback) {
    fs.readdirSync(dir).forEach(file => {
        const filepath = path.join(dir, file);
        const stats = fs.statSync(filepath);
        if (stats.isDirectory()) {
            walkSync(filepath, callback);
        } else if (stats.isFile() && (file.endsWith('.js') || file.endsWith('.jsx'))) {
            callback(filepath);
        }
    });
}

walkSync(path.join(basePath, 'WebDev'), (filepath) => {
    let content = fs.readFileSync(filepath, 'utf8');
    let modified = false;
    
    const importRegex = /from\s+['"](.*?)simulators\/web\/([A-Za-z0-9_]+)['"]/g;
    content = content.replace(importRegex, (match, prefix, simName) => {
        if (simFolderMap[simName]) {
            modified = true;
            return `from "${prefix}simulators/web/${simFolderMap[simName]}/${simName}"`;
        }
        return match;
    });

    // Also specifically handle .jsx extensions in imports if they exist
    const importRegexJsx = /from\s+['"](.*?)simulators\/web\/([A-Za-z0-9_]+)\.jsx['"]/g;
    content = content.replace(importRegexJsx, (match, prefix, simName) => {
        if (simFolderMap[simName]) {
            modified = true;
            return `from "${prefix}simulators/web/${simFolderMap[simName]}/${simName}.jsx"`;
        }
        return match;
    });

    if (modified) {
        fs.writeFileSync(filepath, content, 'utf8');
        console.log('Updated imports in: ' + filepath);
    }
});
