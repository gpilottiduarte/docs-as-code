const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const docsRoot = './';
const outputFile = './structure.json';

// Lista de arquivos e diretórios a serem ignorados
const ignoredItems = [
    'structure.json', 
    'index.html', 
    'styles.css', 
    'script.js',
    '.git',        // Ignorar pasta git
    'api-specs',   // Ignorar pasta api-specs
    'node_modules',// Também é bom ignorar node_modules
    '.github',     // Ignorar configurações do GitHub
    '.vscode',     // Ignorar configurações do VSCode
    'cria_menu.js' // Ignorar o próprio script
];

// Função para extrair o título H1 do conteúdo Markdown
function extractTitle(markdownContent) {
    const tokens = marked.lexer(markdownContent);
    const h1 = tokens.find(token => token.type === 'heading' && token.depth === 1);
    return h1 ? h1.text : null;
}

function scanDirectory(dir) {
    const result = [];
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
        // Verificar se o item deve ser ignorado
        if (ignoredItems.includes(item) || item.startsWith('.')) return;
        
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            const children = scanDirectory(fullPath);
            // Só adicionar diretórios que tenham conteúdo ou sejam especificamente necessários
            if (children.length > 0) {
                result.push({
                    name: item,
                    type: 'directory',
                    children: children,
                    path: fullPath
                });
            }
        } else if (path.extname(item) === '.md') {
            try {
                const content = fs.readFileSync(fullPath, 'utf8');
                const title = extractTitle(content) || path.basename(item, '.md');
                
                result.push({
                    name: item,
                    type: 'file',
                    title: title,
                    path: fullPath
                });
            } catch (error) {
                console.warn(`Erro ao ler o arquivo ${fullPath}: ${error.message}`);
            }
        }
    });
    
    return result;
}

try {
    console.log('Gerando estrutura da documentação...');
    const structure = scanDirectory(docsRoot);
    fs.writeFileSync(outputFile, JSON.stringify(structure, null, 2));
    console.log('Estrutura gerada com sucesso!');
    console.log(`Total de ${countItems(structure)} itens processados.`);
} catch (error) {
    console.error('Erro ao gerar estrutura:', error);
}

// Função auxiliar para contar itens processados
function countItems(items) {
    let count = items.length;
    items.forEach(item => {
        if (item.type === 'directory' && item.children) {
            count += countItems(item.children);
        }
    });
    return count;
}