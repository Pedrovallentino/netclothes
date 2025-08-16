# NetClothes

## 📌 Descrição
O **NetClothes** é um protótipo de e-commerce de roupas desenvolvido para a disciplina **Programação para Internet 1**.  
O projeto foi construído utilizando **HTML5, CSS3 e JavaScript puro** (sem frameworks), visando atender aos requisitos de um site interativo, responsivo e com funcionalidades dinâmicas.

O site oferece:
- Página inicial com **carrossel** rotativo.
- Listagem de produtos com **filtro por categoria**.
- **Busca global** que pesquisa termos em diversas páginas.
- **Formulário de contato** com validação e contador de caracteres.
- **Tela de login** com controle de estado de usuário logado.
- **Tema claro/escuro** persistente via `localStorage`.
- Botão **"voltar ao topo"** com rolagem suave.

---

## 👨‍💻 Autores
- Pedro Valentino  
- Rodrigo Cardoso  
- José Gilson  
- José Nilton  

---

## 📂 Estrutura de Pastas

netclothes-master/
│
├── html/
│ ├── index.html # Página inicial
│ ├── produtos.html # Lista e filtro de produtos
│ ├── contato.html # Formulário de contato
│ ├── search.html # Resultados de busca
│ └── login.html # Tela de login
│
├── css/
│ └── style.css # Estilos globais e tema claro/escuro
│
└── js/
├── ui-enhancements.js # Botão voltar ao topo + alternador de tema
├── carousel.js # Carrossel com autoplay, pausa e navegação
├── filter.js # Filtragem de produtos por categoria
├── search.js # Busca global usando fetch + DOMParser
├── contact.js # Validação do formulário de contato
├── login.js # (Parcial) Funções relacionadas ao login
└── script.js # Controle de estado do login via localStorage

markdown
Copiar
Editar

---

## 📊 Comparação com as Exigências do Trabalho

### 3.4.1 Carousel
- **Implementado** em `carousel.js`
- Possui:
  - Início automático (5s).
  - Navegação manual (botões “Anterior” e “Próximo”).
  - Pausa ao passar o mouse (hover).
- **Status:** Atende aos requisitos descritos.

### 3.4.2 Filtragem
- **Implementado** em `filter.js`
- Página `produtos.html` contém botões de categoria (Todos, Camisetas, Calças, Jaquetas).
- Ao clicar em um botão, apenas os produtos da categoria escolhida são exibidos.
- **Status:** Atende aos requisitos.

### 3.4.3 Pesquisa do site
- **Implementado** em `search.js`
- Captura termo via `?q=` na URL (`search.html?q=...`).
- Usa `fetch()` para carregar páginas (`index.html`, `produtos.html`, etc.).
- Converte conteúdo para DOM pesquisável via `DOMParser`.
- Exibe resultados com trecho de contexto e link.
- **Status:** Atende aos requisitos.

### 3.4.4 Tela de Login
- **Parcialmente implementado**:
  - `login.html` contém formulário básico.
  - `script.js` exibe nome do usuário e link "Sair" ao detectar `isLoggedIn` no `localStorage`.
  - **Falta:** Validação avançada de senha/usuário conforme regras do documento e gravação do estado logado no `login.js`.

### 3.4.5 Validação de Formulários
- **Contato** (`contact.js`):
  - Nome obrigatório.
  - E-mail validado com regex.
  - Assunto obrigatório.
  - Mensagem com mínimo de caracteres + contador em tempo real.
  - **Status:** Atende aos requisitos para contato.
- **Login**:
  - Apenas validações simples. **Falta** aplicar regras de senha e feedback personalizado.

### 3.4.5 Efeitos e Animações
- **Botão “Voltar ao Topo”**: Implementado em `ui-enhancements.js` com rolagem suave.
- **Alternador de Tema**: Implementado com CSS variables e persistência via `localStorage`.
- **Botão “Copiar”**: Não encontrado no sistema.
- **Status:** Parcialmente atendido (falta botão de copiar).

### 4. Requisitos Não-Funcionais
- **Responsividade**: Parcialmente presente. CSS inclui ajustes básicos, mas menu não possui versão “hamburger”.
- **Qualidade do Código**:
  - JS dividido em arquivos por funcionalidade.
  - HTML e CSS relativamente organizados.
  - Há código duplicado (`voltar ao topo` e `tema` repetidos em `login.js`).

---

## 🚀 Como Executar
1. Baixe ou clone o repositório.
2. Abra um terminal na pasta raiz do projeto.
3. Inicie um servidor local para evitar problemas de CORS na busca:
   ```bash
   python -m http.server 5500