# AT GitHub App 🚀

Aplicativo mobile acadêmico em React Native desenvolvido com Expo e JavaScript, projetado para interagir diretamente com a API REST oficial do GitHub.

---

## 📋 Sumário

- [Recursos Principais](#-recursos-principais)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 Como Executar](#-como-executar)
- [⚙️ Configuração e Autenticação](#️-configuração-e-autenticação)

---

## ✨ Recursos Principais

- **Autenticação Segura:** Autenticação local simplificada integrada com o Personal Access Token (PAT) do GitHub para comunicação direta com a API REST oficial.
- **Exploração de Repositórios:**
  - Listagem em tempo real de repositórios do usuário.
  - Paginação sob demanda (_lazy loading_ / scroll infinito).
  - Gestos de _pull-to-refresh_ para recarregar as listas.
  - Tela de detalhes completa exibindo estrelas, forks, issues abertas e descrição do projeto.
- **Gerenciador de Issues:**
  - Visualização integrada de bugs, tarefas e melhorias.
  - Barra de progresso dinâmica que reflete a quantidade de issues carregadas.
  - Ações interativas de swipe para visualizar detalhes específicos de uma issue.
- **Layout Responsivo & Fluido:** Menus deslizantes dinâmicos (Drawer) e navegação por abas inferiores (Tabs) usando o React Navigation v7.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído usando o ecossistema moderno de desenvolvimento híbrido:

- **Core:** [React Native](https://reactnative.dev/) & [Expo (v54)](https://expo.dev/)
- **Navegação:** [React Navigation (v7)](https://reactnavigation.org/) (Stack, Drawer e Bottom Tabs)
- **Estilização:** Sistema de temas personalizados com paleta GitHub Dark Refined (baseado em tokens centralizados de estilo).
- **Gestos & Animações:** `react-native-gesture-handler` e `react-native-reanimated`.
- **Gerenciamento de Estado:** React Context API para controle global de autenticação e comunicação com a API do GitHub.

---

## 📁 Estrutura do Projeto

A arquitetura do projeto é dividida em pastas modulares dentro do diretório `src/`:

```text
src/
├── components/     # Componentes de interface reutilizáveis (botões, inputs, listas, etc.)
├── context/        # Provedores de contexto para estado global (Auth e dados do GitHub)
├── navigation/     # Estrutura de navegação (Stack, Tab e Drawer)
├── screens/        # Telas completas da aplicação (Login, Repositórios, Issues, Perfil, etc.)
└── styles/         # Arquivos de estilização baseados na identidade visual do GitHub
```

---

## 🚀 Como Executar

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- Gerenciador de pacotes `npm` ou `yarn`
- Aplicativo **Expo Go** instalado no seu celular (iOS/Android) ou emuladores configurados.

### Passos para Inicialização

1. **Instalar as dependências:**

   ```bash
   npm install
   ```

2. **Iniciar o servidor do Expo:**

   ```bash
   npm run start
   ```

3. **Executar no dispositivo/emulador:**
   - Escaneie o código QR exibido no terminal utilizando o aplicativo **Expo Go** no celular.
   - Alternativamente, pressione `a` para rodar no Android, `i` para iOS, ou `w` para Web.

---

## ⚙️ Configuração e Autenticação

Para utilizar todos os recursos do aplicativo e se comunicar com o GitHub, você precisará de um **Personal Access Token (PAT)**:

1. Vá para a página de **Developer Settings** no seu GitHub.
2. Em **Personal Access Tokens**, clique em **Tokens (classic)** e gere um novo token.
3. Garanta as permissões necessárias (como `repo` e `project`) para que o aplicativo consiga ler os repositórios e issues.
4. Insira seu token na tela de login ou na página de perfil do aplicativo para se autenticar.
