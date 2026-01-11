# 🌸 Criando Laços - Catálogo de Produtos Personalizados

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Shadcn/UI-000000?style=for-the-badge&logo=ui&logoColor=white" alt="Shadcn/UI">
</div>

<div align="center">
  <h3>✨ Um catálogo de produtos personalizados com carrinho de compras inteligente ✨</h3>
</div>

## 📋 Índice
- [📖 Visão Geral](#-visão-geral)
- [🎯 Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [🚀 Como Executar o Projeto](#-como-executar-o-projeto)
- [🏗️ Arquitetura do Projeto](#️-arquitetura-do-projeto)
- [📚 O Que Aprendi](#-o-que-aprendi)
- [🎨 Desafios e Soluções](#-desafios-e-soluções)
- [🔍 Dificuldades Encontradas](#-dificuldades-encontradas)
- [📁 Estrutura de Pastas](#-estrutura-de-pastas)
- [🧪 Testes e Validações](#-testes-e-validações)
- [📄 Licença](#-licença)

## 📖 Visão Geral

**Criando Laços** é um catálogo de produtos personalizados desenvolvido em React com TypeScript. O projeto permite aos usuários visualizar produtos organizados em categorias, personalizar itens com diversas especificações e gerenciar um carrinho de compras completo com resumo automatizado para WhatsApp.

## 🎯 Funcionalidades

### 🛍️ Sistema de Produtos
- **Catálogo organizado** em categorias (Buquês, Amigurumis, Outros)
- **Cards responsivos** com imagens e descrições
- **Preços dinâmicos** baseados em personalizações
- **Modal de personalização** com múltiplas opções

### ⚙️ Sistema de Personalização
- **Especificações variáveis** por produto
- **Opções que afetam preço** (extras)
- **Inputs de quantidade** para itens específicos
- **Validação em tempo real** de especificações obrigatórias

### 🛒 Carrinho Inteligente
- **Gestão de estado** complexa com múltiplas combinações
- **Identificação única** por combinação de personalizações
- **Atualização de quantidades** com operações matemáticas
- **Remoção e limpeza** de itens

### 📱 Interface Responsiva
- **Design mobile-first** com Tailwind CSS
- **Componentes reutilizáveis** do Shadcn/UI
- **Animações e transições** suaves
- **Modal e Sheet** otimizados para mobile

### 📋 Sistema de Pedidos
- **Geração automática** de texto para WhatsApp
- **Validação de regras** de negócio (ex: mínimo de polaroids)
- **Cálculo automático** de totais com extras
- **Feedback visual** de cópia para área de transferência

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização utilitária
- **Shadcn/UI** - Componentes acessíveis

### Gerenciamento de Estado
- **React Hooks** (useState, useEffect)
- **Estado local** complexo com múltiplos níveis
- **Derived state** para cálculos dinâmicos

### UI/UX
- **Lucide React** - Ícones
- **Animações CSS** personalizadas
- **Responsive design** com breakpoints
- **Acessibilidade** básica implementada

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/catalogo-criando-lacos.git

# Entre no diretório
cd catalogo-criando-lacos

# Instale as dependências
npm install
# ou
yarn install
```

### Execução

```bash
# Modo desenvolvimento
npm run dev
# ou
yarn dev

# Build para produção
npm run build
# ou
yarn build

# Preview do build
npm run preview
# ou
yarn preview
```

## 🏗️ Arquitetura do Projeto

### Estrutura de Tipos

```typescript
// Sistema de tipos robusto para gerenciar complexidade
type Especificacao = {
  nome: string;
  valor: string;
  afetaPreco?: boolean;
  precoExtra?: number;
  inputQuantidade?: boolean;
};

type Produto = {
  id: number;
  nome: string;
  descricao: string;
  precoBase: number;
  img: string;
  temModal?: boolean;
  especificacoes?: Especificacao[];
};
```

### Gerenciamento de Estado

```typescript
// Estado principal da aplicação
const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);
const [modalState, setModalState] = useState<ModalState | null>(null);
const [especificacoesSelecionadas, setEspecificacoesSelecionadas] = useState<
  Especificacao[]
>([]);
```

## 📚 O Que Aprendi

### 🎯 Gerenciamento de Estado Complexo
- **Estruturas aninhadas**: Como lidar com objetos complexos com múltiplos níveis
- **Identificadores únicos**: Gerar IDs baseados em combinações de propriedades
- **Derived state**: Calcular valores derivados do estado principal

### 🔧 TypeScript Avançado
- **Tipos genéricos**: Para componentes reutilizáveis
- **Type guards**: Para validação em tempo de execução
- **Utility types**: Para manipulação de tipos existentes

### 🎨 UI/UX Responsivo
- **Mobile-first**: Desenvolver pensando primeiro em mobile
- **Componentes acessíveis**: Usar bibliotecas como Shadcn/UI
- **Animações performáticas**: CSS transitions vs JavaScript

### 📱 Lógica de Negócio
- **Regras complexas**: Mínimo de itens, preços variáveis
- **Cálculos dinâmicos**: Preços baseados em múltiplos fatores
- **Validação em tempo real**: Feedback imediato ao usuário

## 🎨 Desafios e Soluções

### Desafio 1: Gerenciamento de Estado do Carrinho
**Problema**: Como gerenciar itens com múltiplas personalizações sem duplicação?

**Solução**:
```typescript
// Gerar ID único baseado nas especificações
const gerarIdentificadorUnico = (
  produtoId: number,
  especificacoes: Especificacao[],
  quantidadesExtras?: QuantidadesExtras
) => {
  const especificacoesString = especificacoes
    .map((esp) => `${esp.nome}:${esp.valor}`)
    .sort()
    .join("|");
  
  return `${produtoId}-${especificacoesString}`;
};
```

### Desafio 2: Cálculo de Preços Dinâmicos
**Problema**: Preços que variam baseados em múltiplos fatores.

**Solução**:
```typescript
const calcularPrecoTotal = (
  precoBase: number,
  especificacoes: Especificacao[],
  quantidadesExtras?: QuantidadesExtras
) => {
  let total = precoBase;
  
  especificacoes.forEach((esp) => {
    if (esp.afetaPreco && esp.precoExtra) {
      total += esp.precoExtra;
    }
  });
  
  // Lógica para extras específicos
  if (quantidadesExtras) {
    total += quantidadesExtras.chocolates * 4;
    // ... mais cálculos
  }
  
  return total;
};
```

### Desafio 3: Validação de Especificações
**Problema**: Garantir que todas as especificações obrigatórias sejam selecionadas.

**Solução**:
```typescript
useEffect(() => {
  if (!modalState?.produto.especificacoes) return;

  const tiposEspecificacoes = Array.from(
    new Set(modalState.produto.especificacoes.map((e) => e.nome))
  );
  const erros: string[] = [];

  tiposEspecificacoes.forEach((nome) => {
    const temSelecao = especificacoesSelecionadas.some(
      (esp) => esp.nome === nome
    );
    if (!temSelecao) {
      erros.push(nome);
    }
  });

  setErroEspecificacoes(erros);
}, [especificacoesSelecionadas, modalState]);
```

## 🔍 Dificuldades Encontradas

### 1. **Complexidade do Estado**
- **Problema**: Múltiplos estados interdependentes causavam re-renders desnecessários
- **Solução**: Otimização com useMemo e useCallback, separação de responsabilidades

### 2. **Tipagem TypeScript**
- **Problema**: Tipos complexos para objetos aninhados
- **Solução**: Criação de tipos específicos e uso de generics

### 3. **Performance em Mobile**
- **Problema**: Muitos re-renders em dispositivos menos potentes
- **Solução**: Lazy loading de imagens, memoização de componentes

### 4. **Acessibilidade**
- **Problema**: Componentes customizados sem acessibilidade nativa
- **Solução**: Uso de Shadcn/UI que já vem com acessibilidade

### 5. **Build e Deploy**
- **Problema**: Erros de TypeScript no build de produção
- **Solução**: Configuração adequada do tsconfig.json e verificação de tipos

## 📁 Estrutura de Pastas

```
src/
├── assets/              # Imagens e arquivos estáticos
│   ├── banner.png
│   ├── buqueCetim.webp
│   └── ...
├── components/          # Componentes UI (Shadcn/UI)
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   └── ...
├── App.tsx             # Componente principal
└── main.tsx           # Ponto de entrada
```

## 🧪 Testes e Validações

### Testes Implementados
1. **Validação de especificações**: Garante seleção completa
2. **Regras de negócio**: Mínimo de polaroids, cálculos de preço
3. **Responsividade**: Testes em múltiplos dispositivos

### Validações
- ✅ Todos os campos obrigatórios preenchidos
- ✅ Quantidades mínimas respeitadas
- ✅ Preços calculados corretamente
- ✅ Estado consistente entre sessões

### Padrões de Código
- Use TypeScript com tipagem estrita
- Siga as convenções do projeto
- Adicione testes para novas funcionalidades
- Documente mudanças significativas

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  <p>Desenvolvido com ❤️ para o <strong>Criando Laços</strong></p>
  <p>Se este projeto te ajudou, considere dar uma ⭐ no repositório!</p>
</div>

