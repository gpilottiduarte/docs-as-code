const fs = require('fs');
const path = require('path');

// Caminho para o diretório raiz onde estão os arquivos .md
const rootDirectory = path.join(__dirname);

// Função para percorrer o diretório recursivamente
function traverseDirectory(dir, callback) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.error(`Erro ao ler o diretório ${dir}:`, err);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(dir, file);

            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.error(`Erro ao obter informações do arquivo ${filePath}:`, err);
                    return;
                }

                if (stats.isDirectory()) {
                    // Se for um diretório, chama a função recursivamente
                    traverseDirectory(filePath, callback);
                } else if (path.extname(file) === '.md') {
                    // Se for um arquivo .md, executa o callback
                    callback(filePath);
                }
            });
        });
    });
}

// Função para processar um único arquivo
function processFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Erro ao ler o arquivo ${filePath}:`, err);
            return;
        }

        // Regex para capturar o bloco de metadados
        const metadataRegex = /## Metadata_Start[\s\S]*?## Metadata_End\n/;
        const titleRegex = /## title: (.+)/;

        const titleMatch = data.match(titleRegex);
        if (titleMatch) {
            const title = titleMatch[1].trim();
            const updatedContent = data.replace(metadataRegex, `# ${title}\n\n`);

            fs.writeFile(filePath, updatedContent, 'utf8', err => {
                if (err) {
                    console.error(`Erro ao escrever no arquivo ${filePath}:`, err);
                } else {
                    console.log(`Arquivo processado: ${filePath}`);
                }
            });
        } else {
            console.warn(`Título não encontrado no arquivo ${filePath}`);
        }
    });
}

// Executa o script
traverseDirectory(rootDirectory, processFile);