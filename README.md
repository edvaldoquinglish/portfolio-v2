# Portfolio Full-Stack V2

Plataforma profissional dinâmica de portfólio (não apenas landing page estática).

## Stack

| Camada    | Tecnologia                          |
|-----------|-------------------------------------|
| Frontend  | React 18 + Vite + JavaScript ES6+  |
| Backend   | FastAPI + SQLAlchemy + Alembic     |
| Database  | PostgreSQL                         |
| Auth      | JWT + bcrypt                       |

## Estrutura

```
portfolio-v2/
├── frontend/          # React + Vite
├── backend/           # FastAPI
├── README.md
└── .gitignore
```

## Arranque rápido

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# Editar DATABASE_URL e SECRET_KEY

# Criar admin
export ADMIN_USERNAME=admin
export ADMIN_EMAIL=admin@example.com
export ADMIN_PASSWORD=sua-password-segura
python scripts/create_admin.py

# Seed DEMO data
python scripts/seed_database.py

uvicorn app.main:app --reload
```

Docs: http://localhost:8000/docs

### Frontend

```bash
cd frontend
npm install
npm run dev
```

App: http://localhost:5173

## Funcionalidades implementadas (base V2)

- Estrutura completa de pastas conforme especificação
- Models SQLAlchemy para todas as entidades principais
- Autenticação JWT (login, me, logout)
- Rotas públicas: profile, projects (list + detail + filtros), contact, meetings
- CRUD admin de projects
- Frontend com React Router, ThemeContext (dark/light), AuthContext
- Páginas: Home, About, Experience, Skills, Projects, ProjectDetails, Products, Learning, Certificates, Downloads, Media, Startup, Clients, Contact, Recruiter, Admin Login/Dashboard, 404
- Design moderno, responsivo, mobile-first
- SEO básico (title, meta, robots, sitemap, llms.txt)

## Próximas fases (expansão)

1. Completar rotas públicas restantes (skills, experience, products, courses...)
2. Completar CRUD admin no frontend
3. Upload de ficheiros
4. Testes pytest
5. Docker Compose (FastAPI + PostgreSQL)
6. Mais páginas com dados reais da API

## Princípios

- Não inventar dados pessoais, clientes, certificados ou URLs reais
- Usar placeholders `[Adicionar informação]` ou marcar como DEMO DATA
- Segurança: secrets em `.env`, passwords hasheadas, proteção de rotas admin
- Código modular e limpo

---

**Objetivo:** demonstrar capacidade de aprender tecnologias, compreender sistemas e transformar conhecimento em projetos funcionais.
