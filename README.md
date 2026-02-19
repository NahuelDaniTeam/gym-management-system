# Stack posible

## Frontend
- Next.js (React + backend integrado si quieren)
Por qué:
- Fullstack posible
- facil deploy
- Comunidad igante
- Ideal para SaaS

Lenguaje:
- TypeScript (Obligatorio si quieren nivel profesional)

## Backend
- Node.js + Express + TypeScript

## Base de datos
- PostgreSQL

Por qué:
- Profesional
- Escalable
- Relacional
- Gratis en muchos hostings.

## ORM
- Prisma

## Hosting
- Vercel (Frontend + API)
- Supabase (Postgres)

## Auth
Primera versión:
- Login simple con JWT.
mas adelante:
- NextAuth

# Estructura del proyecto

# Objetivo del MVP

# Glosario o lineamientos de Git
Usen convenciones tipo Conventional Commits.
Formato:

tipo: descripcion

Tipos que necesitan:
- feat: nueva funcionalidad
- fix: bug
- refactor: mejora interna
- docs: cambios en documentación
- chore: tareas técnicas
- style: cambios de formato

# Estructura de ramas
```

main
└── develop
    ├── feature/member-crud
    ├── feature/payment-crud
    ├── feature/auth-jwt
```

# Reglas importantes
❌ Nunca trabajar en main
❌ Nunca mergear sin PR
✅ Siempre actualizar develop antes de crear feature
✅ Commits chicos y descriptivos
✅ Code review obligatorio

# 🌳 Git Workflow

Este proyecto utiliza una estrategia simplificada de Git Flow.

### Ramas principales

main: contiene código estable listo para producción.

develop: rama de integración para nuevas funcionalidades.

### Ramas de desarrollo

Las nuevas funcionalidades deben desarrollarse en ramas con el siguiente formato:

feature/nombre-feature

### Flujo de trabajo

1. Actualizar develop
2. Crear nueva rama desde develop
3. Implementar la funcionalidad
4. Crear Pull Request hacia develop
5. Code review obligatorio antes de mergear
6. Cuando develop esté estable, mergear a main