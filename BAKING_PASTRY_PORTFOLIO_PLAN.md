# Baking & Pastry Portfolio — Plano do Projeto

## 1. Objetivo
Criar um portfólio web simples, elegante e responsivo, em inglês, para apresentar trabalhos de confeitaria a possíveis empregadores na Austrália. O site será acessível por um único link clicável no currículo em PDF.

## 2. Escopo do MVP
- Página única com apresentação breve, galeria de doces e contato.
- Fotos em destaque, com nome do doce e descrição curta em inglês.
- Categorias opcionais para organizar os trabalhos.
- Layout responsivo (celular e desktop), rápido e acessível.
- Publicação na Vercel com URL pública.
- Estrutura preparada para adicionar novas fotos e receitas sem redesenhar o site.

**Fora do escopo inicial:** login, painel administrativo, pagamentos, pedidos, preços, carrinho, comentários e banco de dados remoto.

## 3. Stack
- **Next.js (App Router)** + **TypeScript**.
- **Tailwind CSS** para estilização.
- **Vercel** para hospedagem e deploy automático via GitHub.
- **Fotos locais em `public/` + arquivo TypeScript** como catálogo de conteúdo.

> Para este MVP, não é necessário banco de dados. O catálogo local funciona como uma base simples de dados. Se houver necessidade futura de upload pelo navegador, avaliar Vercel Blob ou Supabase Storage e uma camada de metadados.

## 4. Estrutura de pastas

```text
Baking&Pastry_Portifolio/
├── public/
│   └── images/
│       ├── brownies/
│       ├── cakes/
│       ├── puddings/
│       ├── sweets/
│       └── other/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── PortfolioGallery.tsx
│   │   ├── DessertCard.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── desserts.ts
│   └── types/
│       └── dessert.ts
├── .gitignore
├── README.md
├── package.json
└── next.config.ts
```

As pastas de imagens representam categorias; novos produtos podem ganhar subpastas próprias se houver várias fotos, por exemplo `public/images/cakes/lemon-blueberry/`.

## 5. Modelo de dados

Cada item terá um ID estável, nome, descrição, categoria, imagem principal, imagens extras opcionais e texto alternativo acessível.

```ts
export type Dessert = {
  id: string;
  name: string;
  description: string;
  category: 'brownies' | 'cakes' | 'puddings' | 'sweets' | 'other';
  coverImage: string;
  images?: string[];
  alt: string;
};
```

Exemplo ilustrativo (não publicar sem a foto correspondente):

```ts
{
  id: 'chocolate-brownies',
  name: 'Chocolate Brownies',
  description: 'Rich chocolate brownies with a soft, fudgy centre.',
  category: 'brownies',
  coverImage: '/images/brownies/chocolate-brownies.webp',
  alt: 'Chocolate brownies with a fudgy centre'
}
```

## 6. Estrutura visual

### Hero
- Título: **Baking & Pastry Portfolio**.
- Nome profissional da autora (a confirmar).
- Frase curta em inglês sobre paixão por confeitaria, criatividade, dedicação e atenção aos detalhes.
- Botão ou link de navegação: **View My Work**.

### Galeria
- Grade de 1 coluna no celular e 2–3 colunas em telas maiores.
- Cada card: fotografia, nome e descrição de 1–2 frases.
- Filtro de categoria apenas se houver quantidade suficiente de itens.
- Clique na imagem para ampliar ou visualizar fotos adicionais, caso necessário.

### Sobre / Contato
- Pequena apresentação profissional em inglês, sem alegações não confirmadas.
- Link de contato por e-mail e/ou LinkedIn, a definir.
- Sem preços ou elementos de loja virtual.

### Direção de arte
- Fundo creme/off-white, textos em marrom escuro e detalhes discretos.
- Tipografia elegante e legível, bastante espaço em branco.
- Fotos reais como foco; sem imagens genéricas no portfólio publicado.
- Evitar animações pesadas e excesso de texto.

## 7. Organização das fotografias

1. Receber as fotos originais e selecionar as melhores de cada doce.
2. Agrupar por categoria e, quando necessário, por produto.
3. Nomear arquivos em inglês, em minúsculas e com hífens: `lemon-blueberry-cake-01.webp`.
4. Converter para WebP/AVIF quando apropriado, preservando qualidade visual.
5. Definir imagem de capa e fotos complementares.
6. Preencher `src/data/desserts.ts` com caminhos e descrições.
7. Usar `next/image` para otimização e dimensões adequadas.

**Para adicionar um doce depois:** colocar as imagens na pasta correspondente e adicionar um novo objeto ao catálogo. Não será preciso alterar componentes.

## 8. Implementação por etapas

### Etapa 1 — Setup
- [ ] Abrir a pasta `~/Documents/VS CODE/Projects/Baking&Pastry_Portifolio` no VS Code.
- [ ] Inicializar Next.js com TypeScript, Tailwind e App Router na pasta existente.
- [ ] Criar pastas de imagens, componentes, dados e tipos.
- [ ] Configurar estilos globais, fontes e metadados.

### Etapa 2 — Conteúdo e interface
- [ ] Implementar hero, galeria, cards e rodapé.
- [ ] Criar catálogo tipado com dados de exemplo claramente provisórios.
- [ ] Implementar layout mobile-first.
- [ ] Definir identidade pessoal ou Dolce Bia e contatos.
- [ ] Inserir fotos reais e descrições finais em inglês.

### Etapa 3 — Qualidade
- [ ] Verificar responsividade e legibilidade no celular.
- [ ] Testar navegação por teclado, foco e textos alternativos.
- [ ] Otimizar imagens e desempenho.
- [ ] Revisar ortografia, links e metadados de compartilhamento.
- [ ] Executar `npm run build` sem erros.

### Etapa 4 — Publicação
- [ ] Criar repositório no GitHub e enviar o código.
- [ ] Importar o repositório na Vercel.
- [ ] Conferir configurações de build detectadas automaticamente.
- [ ] Fazer deploy e testar a URL pública em celular e computador.
- [ ] Adicionar no currículo PDF um hyperlink com o texto **Baking & Pastry Portfolio**.

## 9. Critérios de conclusão
- Site público funcionando com HTTPS.
- Um clique no currículo abre o portfólio.
- Fotos carregam corretamente e mantêm boa qualidade.
- Nomes e descrições estão em inglês.
- Experiência boa em celular e desktop.
- Novo doce pode ser incluído apenas adicionando imagens e um registro ao catálogo.
- Sem custos obrigatórios de banco de dados no MVP; hospedagem sujeita aos limites e termos do plano Vercel escolhido.

## 10. Decisões pendentes
- Nome exibido: nome pessoal ou **Dolce Bia**.
- Fotos definitivas e categorias necessárias.
- Texto de apresentação e informações de contato.
- Domínio: subdomínio gratuito da Vercel ou domínio próprio.
- Necessidade futura de um painel para upload de fotos sem editar código.

## 11. Próximo passo
Receber as fotos, organizar os produtos por categoria e construir a primeira versão do site com conteúdo real. Manter a solução estática no MVP; introduzir armazenamento remoto somente quando houver uma necessidade concreta de gerenciamento pelo navegador.
