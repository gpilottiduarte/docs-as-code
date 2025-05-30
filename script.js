let currentVersion = localStorage.getItem('docVersion') || '4.0';
let currentLanguage = localStorage.getItem('docLanguage') || 'pt';
let structure = [];
let currentPath = null;
let currentFile = null;
let searchIndex = {}; // Índice de busca
let searchDebounceTimer = null;
let isPreloading = false;
let dropdownsInitialized = false;

// Função para pré-carregar o conteúdo de todos os documentos
async function preloadContent() {
    if (isPreloading) {
        console.log('Pré-carregamento já em andamento...');
        return;
    }

    isPreloading = true;
    console.log('Iniciando pré-carregamento de conteúdo...');
    
    try {
        const version = structure.find(v => v.name === currentVersion);
        if (!version) {
            console.error('Versão não encontrada:', currentVersion);
            return;
        }

        const language = version.children.find(l => l.name === currentLanguage);
        if (!language) {
            console.error('Idioma não encontrado:', currentLanguage);
            return;
        }

        // Função recursiva para processar todos os arquivos
        async function processItems(items) {
            for (const item of items) {
                if (item.type === 'directory') {
                    await processItems(item.children);
                } else if (item.type === 'file' && item.path.endsWith('.md')) {
                    try {
                        console.log('Carregando arquivo:', item.path);
                        const response = await fetch(item.path);
                        if (!response.ok) {
                            console.error('Erro ao carregar arquivo:', item.path, response.status);
                            continue;
                        }
                        
                        const content = await response.text();
                        // Adiciona ao índice de busca
                        searchIndex[item.path] = {
                            title: item.title || item.name.replace('.md', ''),
                            content: content,
                            path: item.path
                        };
                        console.log('Arquivo carregado com sucesso:', item.path);
                    } catch (error) {
                        console.error(`Erro ao carregar ${item.path}:`, error);
                    }
                }
            }
        }

        await processItems(language.children);
        console.log('Pré-carregamento concluído. Total de arquivos:', Object.keys(searchIndex).length);
        
        // Atualiza o placeholder da busca para indicar que está pronto
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.placeholder = 'Buscar na documentação...';
        }
    } catch (error) {
        console.error('Erro durante o pré-carregamento:', error);
    } finally {
        isPreloading = false;
    }
}

// Função para realizar a busca
function performSearch(query) {
    if (!query || query.length < 2) {
        hideSearchModal();
        return;
    }

    const results = [];
    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);

    // Verifica se o índice está vazio
    if (Object.keys(searchIndex).length === 0) {
        console.log('Índice de busca vazio. Tentando pré-carregar...');
        preloadContent();
        return;
    }

    for (const [path, doc] of Object.entries(searchIndex)) {
        const content = doc.content.toLowerCase();
        const title = doc.title.toLowerCase();
        
        // Verifica se todos os termos de busca estão presentes
        const hasAllTerms = searchTerms.every(term => 
            content.includes(term) || title.includes(term)
        );

        if (hasAllTerms) {
            // Encontra o primeiro trecho relevante
            let snippet = '';
            for (const term of searchTerms) {
                const termIndex = content.indexOf(term);
                if (termIndex !== -1) {
                    const start = Math.max(0, termIndex - 50);
                    const end = Math.min(content.length, termIndex + 50);
                    snippet = content.substring(start, end);
                    break;
                }
            }

            results.push({
                title: doc.title,
                path: doc.path,
                snippet: snippet
            });
        }
    }

    displaySearchResults(results, query);
}

// Função para exibir os resultados da busca
function displaySearchResults(results, query) {
    const resultsContainer = document.getElementById('searchResults');
    const resultsCount = document.getElementById('searchResultsCount');
    if (!resultsContainer || !resultsCount) {
        console.error('Elementos de busca não encontrados');
        return;
    }
    
    resultsContainer.innerHTML = '';
    resultsCount.textContent = `${results.length} resultado${results.length !== 1 ? 's' : ''}`;

    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="search-result-item">
                <h3>Nenhum resultado encontrado</h3>
                <p class="snippet-container">Tente usar termos diferentes ou mais específicos.</p>
            </div>
        `;
    } else {
        results.forEach(result => {
            const item = document.createElement('div');
            item.className = 'search-result-item';
            
            // Destaca os termos de busca no snippet
            let highlightedSnippet = result.snippet;
            query.split(' ').forEach(term => {
                if (term.length > 0) {
                    const regex = new RegExp(term, 'gi');
                    highlightedSnippet = highlightedSnippet.replace(regex, match => 
                        `<span class="highlight">${match}</span>`
                    );
                }
            });

            // Extrai o caminho do arquivo para mostrar a hierarquia
            const pathParts = result.path.split('/');
            const version = pathParts[0];
            const language = pathParts[1];
            const filePath = pathParts.slice(2).join(' > ');

            item.innerHTML = `
                <h3>
                    ${result.title}
                    <span class="result-path">${filePath}</span>
                </h3>
                <div class="snippet-container">
                    ...${highlightedSnippet}...
                </div>
                <div class="result-meta">
                    <span>Versão: ${version}</span>
                    <span>Idioma: ${language}</span>
                </div>
            `;

            item.addEventListener('click', () => {
                loadContent(result.path);
                hideSearchModal();
            });

            resultsContainer.appendChild(item);
        });
    }

    showSearchModal();
}

function showSearchModal() {
    const modal = document.getElementById('searchModal');
    const overlay = document.getElementById('searchModalOverlay');
    
    if (overlay) {
        overlay.classList.add('active');
    }
    modal.classList.add('active');

    // Fecha o modal ao clicar no overlay
    if (overlay) {
        overlay.addEventListener('click', hideSearchModal);
    }

    // Fecha o modal ao pressionar ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideSearchModal();
        }
    });
}

function hideSearchModal() {
    const modal = document.getElementById('searchModal');
    const overlay = document.getElementById('searchModalOverlay');
    
    if (modal) modal.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
}

// Inicializa a busca
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const closeButton = document.querySelector('.close-search-modal');
    
    if (!searchInput) {
        console.error('Elemento searchInput não encontrado');
        return;
    }
    
    // Configura o evento de input
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchDebounceTimer);
        searchDebounceTimer = setTimeout(() => {
            performSearch(e.target.value);
        }, 300);
    });

    // Fecha o modal ao clicar no botão de fechar
    if (closeButton) {
        closeButton.addEventListener('click', hideSearchModal);
    }

    // Inicia o pré-carregamento após carregar a estrutura
    fetch('structure.json')
        .then(response => response.json())
        .then(data => {
            structure = data;
            initDropdowns();
            updateSidebar();
            preloadContent();
        })
        .catch(error => console.error('Error loading structure:', error));
});

document.addEventListener('DOMContentLoaded', () => {
    // Configurar o evento de clique do logo da empresa
    const companyLogo = document.getElementById('companyLogo');
    if (companyLogo) {
        companyLogo.style.cursor = 'pointer';
        companyLogo.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            loadIndexContent();
            return false;
        };
    }
    
    // Configurar o botão Cloud SaaS
    const saasBtn = document.getElementById('saasBtn');
    if (saasBtn) {
        saasBtn.addEventListener('click', function() {
            // Caminho correto para o arquivo senhasegura-saas.md
            const saasPath = `Cloud/${currentLanguage}/senhasegura-saas.md`;
            
            // Atualizar a URL no navegador
            const newUrl = `${window.location.origin}${window.location.pathname}?article=${encodeURIComponent(saasPath)}`;
            history.pushState({ path: saasPath }, '', newUrl);
            
            // Carregar o conteúdo
            loadContent(saasPath);
            
            // Destacar o arquivo na barra lateral se necessário
            setTimeout(() => {
                document.querySelectorAll('.sidebar-item.file').forEach(item => {
                    const path = item.getAttribute('data-path');
                    if (path === saasPath) {
                        // Remover destaque de outros arquivos
                        document.querySelectorAll('.sidebar-item.file.active').forEach(el => {
                            el.classList.remove('active');
                        });
                        
                        // Destacar este arquivo
                        item.classList.add('active');
                        
                        // Abrir os diretórios pais
                        let parent = item.parentElement;
                        while (parent && !parent.classList.contains('sidebar')) {
                            if (parent.classList.contains('children-container')) {
                                parent.style.display = 'block';
                                
                                const folderElement = parent.previousElementSibling;
                                if (folderElement && folderElement.classList.contains('sidebar-folder')) {
                                    folderElement.classList.add('open');
                                    const icon = folderElement.querySelector('.folder-icon');
                                    if (icon) icon.textContent = '▾';
                                }
                            }
                            parent = parent.parentElement;
                        }
                    }
                });
            }, 100);
        });
    }
    
    fetch('structure.json')
        .then(response => response.json())
        .then(data => {
            structure = data;
            initDropdowns();
            
            // Forçar versão 4.0 e pt se não existir configuração salva
            if (!localStorage.getItem('docVersion')) {
                currentVersion = '4.0';
                localStorage.setItem('docVersion', '4.0');
            }
            if (!localStorage.getItem('docLanguage')) {
                currentLanguage = 'pt';
                localStorage.setItem('docLanguage', 'pt');
            }
            
            updateSidebar();
            
            // Verificar se há um artigo na URL
            const urlParams = new URLSearchParams(window.location.search);
            const articlePath = urlParams.get('article');
            
            if (articlePath) {
                loadContent(articlePath);
            } else {
                // Sempre carregar a página inicial se não houver artigo na URL
                loadIndexContent();
            }
            
            preloadContent();
        })
        .catch(error => console.error('Error loading structure:', error));
});

function initDropdowns() {
    // Se os dropdowns já foram inicializados, não faça nada
    if (dropdownsInitialized) {
        return;
    }
    
    const versionSelect = document.getElementById('versionSelect');
    const languageSelect = document.getElementById('languageSelect');
    
    // Popular versões
    const versions = structure.filter(item => item.type === 'directory');
    versions.forEach(version => {
        const option = new Option(version.name, version.name);
        versionSelect.add(option);
    });
    
    // Popular idiomas
    ['en', 'pt'].forEach(lang => {
        const option = new Option(lang.toUpperCase(), lang);
        languageSelect.add(option);
    });
    
    // Definir valores padrão
    versionSelect.value = currentVersion;
    languageSelect.value = currentLanguage;
    
    // Salvar preferências ao mudar
    versionSelect.addEventListener('change', (e) => {
        currentVersion = e.target.value;
        localStorage.setItem('docVersion', currentVersion);
        updateSidebarAndKeepPosition();
    });
    
    languageSelect.addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        localStorage.setItem('docLanguage', currentLanguage);
        loadCurrentDocumentInNewLanguage(); // Carregar o mesmo documento no novo idioma
        updateSidebarAndKeepPosition(); // Atualizar a barra lateral
    });
    
    // Marcar como inicializado
    dropdownsInitialized = true;
}

function updateSidebar() {
    const sidebar = document.getElementById('sidebar-content');
    sidebar.innerHTML = '';
    const version = structure.find(v => v.name === currentVersion);
    if (!version) return;
    const language = version.children.find(l => l.name === currentLanguage);
    if (!language) return;
    buildSidebarTree(language.children, sidebar);
}

function updateSidebarAndKeepPosition() {
    const sidebar = document.getElementById('sidebar-content');
    sidebar.innerHTML = '';
    const version = structure.find(v => v.name === currentVersion);
    if (!version) return;
    const language = version.children.find(l => l.name === currentLanguage);
    if (!language) return;
    buildSidebarTree(language.children, sidebar);
    
    // Após recriar a barra lateral, destaque o arquivo atual
    setTimeout(() => {
        if (currentPath) {
            highlightCurrentFile();
        } else {
            // Se não houver arquivo atual, destaque o senhasegura.md
            const senhaseguraPath = `${currentVersion}/${currentLanguage}/senhasegura.md`;
            document.querySelectorAll('.sidebar-item.file').forEach(el => {
                const path = el.getAttribute('data-path');
                if (path === senhaseguraPath) {
                    el.classList.add('active');
                    // Abrir apenas as pastas pai necessárias
                    let parent = el.parentElement;
                    while (parent && !parent.classList.contains('sidebar')) {
                        if (parent.classList.contains('children-container')) {
                            parent.style.display = 'block';
                            const folderElement = parent.previousElementSibling;
                            if (folderElement && folderElement.classList.contains('sidebar-folder')) {
                                folderElement.classList.add('open');
                                folderElement.querySelector('.folder-icon').textContent = '▾';
                            }
                        }
                        parent = parent.parentElement;
                    }
                }
            });
        }
    }, 50);
}

function buildSidebarTree(items, parent) {
    items.forEach(item => {
        if (item.type === 'directory') {
            const folderWrapper = document.createElement('div');
            
            const folderElement = document.createElement('div');
            folderElement.className = 'sidebar-item sidebar-folder';
            folderElement.innerHTML = `
                <span class="folder-icon">▸</span>
                ${item.name}
            `;
            
            const childrenContainer = document.createElement('div');
            childrenContainer.className = 'children-container';
            folderElement.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = folderElement.classList.toggle('open');
                childrenContainer.style.display = isOpen ? 'block' : 'none';
                folderElement.querySelector('.folder-icon').textContent = isOpen ? '▾' : '▸';
            });
            buildSidebarTree(item.children, childrenContainer);
            
            folderWrapper.appendChild(folderElement);
            folderWrapper.appendChild(childrenContainer);
            parent.appendChild(folderWrapper);
        } else {
            const fileElement = document.createElement('div');
            fileElement.className = 'sidebar-item file';
            fileElement.setAttribute('data-path', item.path); // Adiciona o caminho como atributo data-path
            fileElement.innerHTML = `
                <span class="file-icon">•</span>
                ${item.title || item.name.replace('.md', '')}
            `;
            
            fileElement.addEventListener('click', (e) => {
                e.stopPropagation();
                document.querySelectorAll('.sidebar-item.file').forEach(el => el.classList.remove('active'));
                fileElement.classList.add('active');
                loadContent(item.path);
            });
            
            parent.appendChild(fileElement);
        }
    });
}
function highlightCurrentFile() {
    if (!currentPath) return;
    // Percorre todos os itens da barra lateral
    document.querySelectorAll('.sidebar-item.file').forEach(el => {
        const filePath = el.getAttribute('data-path'); // Obtém o caminho do atributo data-path
        if (filePath === currentPath) {
            el.classList.add('active'); // Adiciona a classe 'active' ao item correspondente
            el.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); // Garante que o item esteja visível
            // Abrir os diretórios pais
            let parent = el.parentElement;
            while (parent && !parent.classList.contains('sidebar')) {
                if (parent.classList.contains('children-container')) {
                    parent.style.display = 'block'; // Exibe o container de filhos
                }
                const folder = parent.previousElementSibling;
                if (folder && folder.classList.contains('sidebar-folder')) {
                    folder.classList.add('open'); // Marca o diretório como aberto
                    folder.querySelector('.folder-icon').textContent = '▾'; // Atualiza o ícone
                }
                parent = parent.parentElement;
            }
        } else {
            el.classList.remove('active'); // Remove a classe 'active' de outros itens
        }
    });
}
// Função para destacar senhasegura.md na barra lateral
function highlightSenhaseguraInSidebar() {
    document.querySelectorAll('.sidebar-item.file').forEach(el => {
        const filePath = el.getAttribute('data-path');
        if (filePath && filePath.endsWith('senhasegura.md')) {
            // Remover destaque de todos os outros itens
            document.querySelectorAll('.sidebar-item.file').forEach(item => {
                item.classList.remove('active');
            });
            
            // Destacar o senhasegura.md
            el.classList.add('active');
            el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            
            // Abrir apenas os diretórios pais necessários
            let parent = el.parentElement;
            while (parent && !parent.classList.contains('sidebar')) {
                if (parent.classList.contains('children-container')) {
                    parent.style.display = 'block';
                    
                    // Se houver um irmão anterior que seja pasta, abrimos apenas ele
                    const folderElement = parent.previousElementSibling;
                    if (folderElement && folderElement.classList.contains('sidebar-folder')) {
                        folderElement.classList.add('open');
                        const icon = folderElement.querySelector('.folder-icon');
                        if (icon) icon.textContent = '▾';
                    }
                }
                parent = parent.parentElement;
            }
        }
    });
}
// Função para pré-processar callouts no Markdown
function preProcessCallouts(markdown) {
    // Expressão regular para encontrar callouts no formato :::(Warning) (Atenção)
    const calloutRegex = /:::\((\w+)\)\s+\(([^\n]+)\)([\s\S]*?)(?=\n:::)/gm;
    
    let processedMarkdown = markdown.replace(calloutRegex, function(match, type, title, content) {
        // Transforma em HTML diretamente, que o Marked respeitará
        return `<div class="callout callout-${type.toLowerCase()}">
<div class="callout-title">${title}</div>
<div class="callout-content">
${content}
</div>
</div>`;
    });
    
    // Remove as tags de fechamento de callout
    processedMarkdown = processedMarkdown.replace(/\n:::/g, '');
    
    return processedMarkdown;
}
// Salvar o caminho atual no localStorage ao carregar um arquivo
function loadContent(path) {
    currentPath = path;
    currentFile = path.split('/').pop();
    // Salvar o caminho atual no localStorage
    localStorage.setItem('currentPath', currentPath);
    // Atualizar a URL no navegador
    const newUrl = `${window.location.origin}${window.location.pathname}?article=${encodeURIComponent(path)}`;
    history.pushState({ path }, '', newUrl);
    fetch(path)
        .then(response => {
            if (!response.ok) throw new Error('File not found');
            return response.text();
        })
        .then(markdown => {
            // Pré-processar o Markdown para lidar com os callouts
            const processedMarkdown = preProcessCallouts(markdown);
            
            // Renderizar com o Marked
            const htmlContent = marked.parse(processedMarkdown);
            
            document.getElementById('content').innerHTML = `
                <div class="content-container">
                    ${htmlContent}
                </div>
            `;
            // Gerar TOC após carregar o conteúdo
            generateTOC();
            // Adicionar IDs aos headings
            addHeadingIDs();
            // Ativar scroll spy
            setupScrollSpy();
        })
        .catch(error => {
            console.error('Error loading content:', error);
            loadFallbackContent();
        });
}

function loadCurrentDocumentInNewLanguage() {
    if (!currentPath) {
        // Se não houver documento atual, carregue a página inicial
        const senhaseguraPath = `${currentVersion}/${currentLanguage}/senhasegura.md`;
        loadContent(senhaseguraPath);
        return;
    }
    
    // Se o arquivo atual for senhasegura.md, carregue a versão no novo idioma
    if (currentFile === 'senhasegura.md') {
        const senhaseguraPath = `${currentVersion}/${currentLanguage}/senhasegura.md`;
        loadContent(senhaseguraPath);
        return;
    }
    
    // Comportamento normal para outros arquivos
    // Substituir o idioma no caminho atual
    const newPath = currentPath.replace(`\\${currentLanguage === 'pt' ? 'en' : 'pt'}\\`, `\\${currentLanguage}\\`);
    
    // Verificar se o arquivo no novo idioma existe
    fetch(newPath)
        .then(response => {
            if (!response.ok) throw new Error('File not found');
            return newPath;
        })
        .then(validPath => {
            loadContent(validPath); // Carregar o arquivo no novo idioma
            // Destacar o arquivo atual após carregar o conteúdo
            setTimeout(() => {
                highlightCurrentFile();
            }, 50);
        })
        .catch(() => {
            console.warn('Arquivo não encontrado no novo idioma. Carregando página inicial.');
            const senhaseguraPath = `${currentVersion}/${currentLanguage}/senhasegura.md`;
            loadContent(senhaseguraPath);
            // Destacar o senhasegura.md após carregar a página inicial
            setTimeout(() => {
                document.querySelectorAll('.sidebar-item.file').forEach(el => {
                    const path = el.getAttribute('data-path');
                    if (path === senhaseguraPath) {
                        el.classList.add('active');
                        // Abrir apenas as pastas pai necessárias
                        let parent = el.parentElement;
                        while (parent && !parent.classList.contains('sidebar')) {
                            if (parent.classList.contains('children-container')) {
                                parent.style.display = 'block';
                                const folderElement = parent.previousElementSibling;
                                if (folderElement && folderElement.classList.contains('sidebar-folder')) {
                                    folderElement.classList.add('open');
                                    folderElement.querySelector('.folder-icon').textContent = '▾';
                                }
                            }
                            parent = parent.parentElement;
                        }
                    }
                });
            }, 50);
        });
}

// Adicione esta função ao seu script.js
function forceSidebarCollapse() {
    // Definir um timeout para garantir que isso aconteça após qualquer outra operação
    setTimeout(() => {
      console.log("Forçando colapso da barra lateral");
      
      // 1. Feche TODAS as pastas abertas, sem exceção
      const openFolders = document.querySelectorAll('.sidebar-folder.open');
      openFolders.forEach(folder => {
        folder.classList.remove('open');
        const icon = folder.querySelector('.folder-icon');
        if (icon) icon.textContent = '▸';
        
        // Fechar o container de filhos
        const childContainer = folder.nextElementSibling;
        if (childContainer && childContainer.classList.contains('children-container')) {
          childContainer.style.display = 'none';
        }
      });
      
      // 2. Remover destaque de todos os arquivos
      document.querySelectorAll('.sidebar-item.file.active').forEach(item => {
        item.classList.remove('active');
      });
      
      // 3. Encontrar e destacar o arquivo atual
      const currentFilePath = currentPath || `${currentVersion}/${currentLanguage}/senhasegura.md`;
        const items = document.querySelectorAll('.sidebar-item.file');
      
        items.forEach(item => {
          const path = item.getAttribute('data-path');
        if (path === currentFilePath) {
          // Destacar o arquivo
            item.classList.add('active');
          
          // Abrir apenas as pastas pai necessárias
          let parent = item.parentElement;
          while (parent && !parent.classList.contains('sidebar')) {
            if (parent.classList.contains('children-container')) {
              parent.style.display = 'block';
              
              const folderElement = parent.previousElementSibling;
              if (folderElement && folderElement.classList.contains('sidebar-folder')) {
                folderElement.classList.add('open');
                const icon = folderElement.querySelector('.folder-icon');
                if (icon) icon.textContent = '▾';
              }
            }
            parent = parent.parentElement;
          }
        }
      });
      
      console.log("Barra lateral colapsada com sucesso");
    }, 200); // Um timeout significativo para garantir que isso aconteça por último
  }

function loadIndexContent() {
    // Caminho para o arquivo senhasegura.md baseado na versão e idioma atuais
    const senhaseguraPath = `${currentVersion}/${currentLanguage}/senhasegura.md`;
    
    // Importante: salvar este caminho no localStorage
    localStorage.setItem('currentPath', senhaseguraPath);
    
    // Forçar o carregamento do conteúdo
    loadContent(senhaseguraPath);
    
    // Forçar o colapso da barra lateral
    forceSidebarCollapse();
            
            // Atualizar a URL no navegador para indicar que estamos na página inicial
            const newUrl = `${window.location.origin}${window.location.pathname}`;
            history.replaceState(null, '', newUrl);
}

// Gerar TOC dinâmica
function generateTOC() {
    const tocNav = document.getElementById('toc-nav');
    const headings = document.querySelectorAll('.content-container h1, .content-container h2, .content-container h3');
    
    tocNav.innerHTML = '';
    
    headings.forEach(heading => {
        const level = heading.tagName.toLowerCase();
        const text = heading.textContent;
        const id = heading.id || text.toLowerCase().replace(/ /g, '-');
        
        if (!heading.id) heading.id = id;
        
        const tocItem = document.createElement('a');
        tocItem.href = `#${id}`;
        tocItem.className = `toc-item ${level}`;
        tocItem.textContent = text;
        
        // Adicionar evento de clique para prevenir o comportamento padrão
        tocItem.addEventListener('click', (e) => {
            e.preventDefault();
            const targetHeading = document.getElementById(id);
            if (targetHeading) {
                targetHeading.scrollIntoView({ behavior: 'smooth' });
                // Atualizar a URL sem recarregar a página
                history.pushState(null, '', `#${id}`);
            }
        });
        
        tocNav.appendChild(tocItem);
    });
}
// Adicionar IDs automáticos aos headings
function addHeadingIDs() {
    document.querySelectorAll('.content-container h1, .content-container h2, .content-container h3').forEach(heading => {
        if (!heading.id) {
            heading.id = heading.textContent
                .toLowerCase()
                .replace(/[^\w\s]/gi, '')
                .replace(/\s+/g, '-');
        }
    });
}
// Scroll Spy para destacar itens ativos
function setupScrollSpy() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.id;
            const tocItem = document.querySelector(`.toc-item[href="#${id}"]`);
            
            if (entry.isIntersecting) {
                document.querySelectorAll('.toc-item.active').forEach(item => {
                    item.classList.remove('active');
                });
                if (tocItem) tocItem.classList.add('active');
            }
        });
    }, { 
        rootMargin: '0px 0px -50% 0px',
        threshold: 1.0
    });
    document.querySelectorAll('.content-container h1, .content-container h2, .content-container h3').forEach(heading => {
        observer.observe(heading);
    });
}
// Função para criar e exibir o modal de feedback
function showFeedbackModal(type) {
    // Verifica se o modal já existe no DOM
    if (document.querySelector('.feedback-modal')) return;
    // Cria o modal dinamicamente
    const modal = document.createElement('div');
    modal.className = 'feedback-modal';
    modal.innerHTML = `
        <div class="feedback-modal-content">
            <span class="close-modal">&times;</span>
            <h3>${type === 'like' ? 'Obrigado pelo seu feedback!' : 'Nos diga como podemos melhorar'}</h3>
            <form id="feedbackForm">
                <input type="hidden" id="feedbackType" value="${type}">
                <div class="form-group">
                    <label for="message">Mensagem:</label>
                    <textarea id="message" rows="4" placeholder="Escreva sua mensagem aqui..." required></textarea>
                </div>
                <button type="submit" class="submit-feedback">Enviar</button>
            </form>
        </div>
    `;
    // Adiciona o modal ao corpo do documento
    document.body.appendChild(modal);
    // Fecha o modal ao clicar no botão de fechar
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });
    // Lida com o envio do formulário
    modal.querySelector('#feedbackForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const feedbackData = {
            type,
            message: document.getElementById('message').value,
            page: window.location.href,
            timestamp: new Date().toISOString(),
        };
        try {
            // Enviar o feedback para o backend (substitua a URL pelo seu endpoint)
            const response = await fetch('https://formspree.io/f/mjkygnje', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(feedbackData),
            });
            if (response.ok) {
                alert('Obrigado pelo seu feedback!');
                modal.remove();
            } else {
                alert('Erro ao enviar feedback. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao enviar feedback:', error);
            alert('Erro ao enviar feedback.');
        }
    });
}
// Adiciona eventos aos botões de feedback
document.querySelector('.like-btn').addEventListener('click', () => showFeedbackModal('like'));
document.querySelector('.dislike-btn').addEventListener('click', () => showFeedbackModal('dislike'));

// Função de fallback se o conteúdo não puder ser carregado
function loadFallbackContent() {
    document.getElementById('content').innerHTML = `
        <div class="content-container">
            <h1>Conteúdo não encontrado</h1>
            <p>O documento solicitado não foi encontrado ou não pôde ser carregado.</p>
            <p>Por favor, selecione outro documento na barra lateral.</p>
        </div>
    `;
}

// Lidar com o evento popstate (navegação pelo histórico)
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.path) {
        loadContent(event.state.path);
        highlightCurrentFile();
    } else {
        loadIndexContent();
    }
});

// Função para carregar a página inicial (senhasegura.md) sem expandir toda a barra lateral
function loadHomePageClean() {
    // Primeiro, fechar todas as pastas abertas na barra lateral
    document.querySelectorAll('.sidebar-folder.open').forEach(folder => {
        folder.classList.remove('open');
        const icon = folder.querySelector('.folder-icon');
        if (icon) icon.textContent = '▸';
        
        const childrenContainer = folder.nextElementSibling;
        if (childrenContainer && childrenContainer.classList.contains('children-container')) {
            childrenContainer.style.display = 'none';
        }
    });
    
    // Remover destaque de todos os arquivos
    document.querySelectorAll('.sidebar-item.file.active').forEach(item => {
        item.classList.remove('active');
    });
    
    // Construir o caminho para senhasegura.md
    const senhaseguraPath = `${currentVersion}/${currentLanguage}/senhasegura.md`;
    
    // Carregar o conteúdo
    fetch(senhaseguraPath)
        .then(response => {
            if (!response.ok) throw new Error('File not found');
            return response.text();
        })
        .then(markdown => {
            // Processar e renderizar o conteúdo
            const processedMarkdown = preProcessCallouts(markdown);
            const htmlContent = marked.parse(processedMarkdown);
            
            document.getElementById('content').innerHTML = `
                <div class="content-container">
                    ${htmlContent}
                </div>
            `;
            
            // Atualizar metadados e navegação
            generateTOC();
            addHeadingIDs();
            setupScrollSpy();
            
            // Atualizar estado
            currentPath = senhaseguraPath;
            currentFile = 'senhasegura.md';
            
            // Atualizar URL
            history.pushState(null, '', window.location.pathname);
            
            // Encontrar o arquivo senhasegura.md na barra lateral e destacá-lo
            // (mas sem abrir todas as pastas)
            let senhaseguraElement = null;
            document.querySelectorAll('.sidebar-item.file').forEach(el => {
                const path = el.getAttribute('data-path');
                if (path && path.endsWith('senhasegura.md')) {
                    senhaseguraElement = el;
                }
            });
            
            // Se encontrarmos o elemento, destaque-o e abra apenas as pastas necessárias
            if (senhaseguraElement) {
                senhaseguraElement.classList.add('active');
                
                // Abrir apenas as pastas pai
                let parent = senhaseguraElement.parentElement;
                while (parent && !parent.classList.contains('sidebar')) {
                    if (parent.classList.contains('children-container')) {
                        parent.style.display = 'block';
                        
                        // Abrir a pasta pai
                        const folderElement = parent.previousElementSibling;
                        if (folderElement && folderElement.classList.contains('sidebar-folder')) {
                            folderElement.classList.add('open');
                            const icon = folderElement.querySelector('.folder-icon');
                            if (icon) icon.textContent = '▾';
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        })
        .catch(error => {
            console.error('Error loading senhasegura content:', error);
            // Fallback se o arquivo não for encontrado
            document.getElementById('content').innerHTML = `
                <div class="content-container">
                    <h1>${currentLanguage === 'pt' ? 'Bem-vindo à Segura' : 'Welcome to Segura'}</h1>
                    <p>${currentLanguage === 'pt' 
                        ? 'Selecione um arquivo na barra lateral para começar.' 
                        : 'Please select a file from the sidebar to get started.'}</p>
                </div>
            `;
        });
}

// Adicionar evento de clique ao logo da empresa quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    const companyLogo = document.getElementById('companyLogo');
    if (companyLogo) {
        companyLogo.style.cursor = 'pointer';
        companyLogo.onclick = function(e) {
            e.preventDefault();
            loadHomePageClean();
        };
    }
});

// Adicione esta função ao final do seu script.js
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se estamos carregando a página com o parâmetro 'home=true'
    const urlParams = new URLSearchParams(window.location.search);
    const isHomePage = urlParams.get('home') === 'true';
    
    if (isHomePage) {
        // Remova o parâmetro 'home' da URL para limpar
        history.replaceState(null, '', window.location.pathname);
        
        // Carregue especificamente o senhasegura.md
        const senhaseguraPath = `${currentVersion}/${currentLanguage}/senhasegura.md`;
        
        // Carregar o conteúdo sem expandir a sidebar
        // 1. Fechar todas as pastas primeiro
        document.querySelectorAll('.sidebar-folder.open').forEach(folder => {
            folder.classList.remove('open');
            folder.querySelector('.folder-icon').textContent = '▸';
            const childrenContainer = folder.nextElementSibling;
            if (childrenContainer) childrenContainer.style.display = 'none';
        });
        
        // 2. Carregar o conteúdo
        fetch(senhaseguraPath)
            .then(response => response.text())
            .then(markdown => {
                const processedMarkdown = preProcessCallouts(markdown);
                const htmlContent = marked.parse(processedMarkdown);
                document.getElementById('content').innerHTML = `
                    <div class="content-container">${htmlContent}</div>
                `;
                generateTOC();
                addHeadingIDs();
                setupScrollSpy();
                
                // Atualizar estado
                currentPath = senhaseguraPath;
                currentFile = 'senhasegura.md';
            })
            .catch(error => console.error('Error:', error));
    }
    
    // Configurar o clique no logo para recarregar a página com parâmetro 'home=true'
    const companyLogo = document.getElementById('companyLogo');
    if (companyLogo) {
        companyLogo.style.cursor = 'pointer';
        companyLogo.onclick = function(e) {
            e.preventDefault();
            // Recarregar a página com parâmetro especial
            window.location.href = window.location.pathname + '?home=true';
        };
    }
});