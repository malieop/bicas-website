# Bicas - Associação de Dança e Música

Website em React para a Associação de Dança e Música Bicas, com conteúdo em Português.

## 📁 Estrutura do Projeto

```
/
├── index.html                 # Arquivo principal HTML
├── README.md                  # Este arquivo
└── src/
    ├── App.jsx               # Componente principal da aplicação
    ├── styles/
    │   └── main.css          # Estilos globais
    └── components/
        ├── Header.jsx        # Cabeçalho com logo
        ├── Navigation.jsx     # Menu de navegação
        ├── Aulas.jsx          # Seção de Aulas
        ├── Horarios.jsx       # Seção de Horários
        ├── Contactos.jsx      # Seção de Contactos
        └── Footer.jsx         # Rodapé
```

## 🚀 Como Usar

### Opção 1: Abrir Diretamente (Mais Simples)
1. Abra o arquivo `index.html` no seu navegador
2. O site carregará e funcionará imediatamente

### Opção 2: Usar um Servidor Local (Recomendado)

Se tiver Python instalado:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Depois acesse `http://localhost:8000` no seu navegador.

Se tiver Node.js e npm:
```bash
npx http-server
```

## 📝 Conteúdo do Site

### Navegação
O site possui 3 secções principais:
- **Aulas** - Informações sobre as aulas disponíveis
- **Horários** - Calendário de horários das aulas
- **Contactos** - Informações de contacto e formulário

## 🎨 Personalização

### Alterar Logo
1. Substitua o SVG em `src/components/Header.jsx` pelo seu logo
2. O logo aparecerá no header e como favicon

### Alterar Cores
1. Edite `src/styles/main.css`
2. Procure pelos valores hex das cores:
   - `#2d3561` - Cor escura principal
   - `#8b5cf6` - Cor de destaque (roxa)
   - `#1a1f3a` - Cor muito escura

### Adicionar/Modificar Aulas
1. Edite o array `classes` em `src/components/Aulas.jsx`

### Atualizar Horários
1. Edite o array `schedule` em `src/components/Horarios.jsx`

### Alterar Informações de Contacto
1. Edite `src/components/Contactos.jsx`
2. Atualize email, telefone, endereço, etc.

## 📱 Responsividade

O site é totalmente responsivo e funciona bem em:
- Computadores desktop
- Tablets
- Telemóveis

## 🔧 Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **Babel Standalone** - Para compilar JSX no navegador
- **CSS3** - Estilos modernos com Grid e Flexbox

## 📧 Contacto Padrão

O email e telefone padrão no site:
- Email: `info@bicasassociation.pt`
- Telefone: `+351 91 234 5678`

Substitua estes valores pelos seus dados reais em `src/components/Contactos.jsx`

## 💡 Dicas

- Os arquivos são carregados dinamicamente pelo Babel
- Não é necessário qualquer processo de build
- O site funciona offline depois de carregado uma vez
- As cores de destaque (roxas) podem ser alteradas em toda a aplicação editando `main.css`

## 🎯 Próximos Passos

1. Substitua o conteúdo de exemplo pelos seus dados reais
2. Atualize as imagens e logos
3. Configure seus contactos reais
4. Publique o site online (GitHub Pages, Netlify, etc.)

---

**Desenvolvido com ❤️ para Bicas - Associação de Dança e Música**
