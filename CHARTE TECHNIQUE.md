# 🚀 Charte Technique et Opérationnelle – Front-End (Projet Hubble)

## § Synthèse d'Onboarding Parfait

Hubble repose sur une architecture Domain Driven Design (feature-based), un typage intégral TypeScript, et une rigueur personnelle inspirée des standards SaaS modernes. Chaque ligne de code renforce la clarté, la cohérence et la maintenabilité du produit.

---

## 1. Fondamentaux du Projet (Architecture & Stack)

### 1.1 Stack Technique Officielle

| Catégorie | Technologie | Rôle |
|-----------|-------------|------|
| Framework | React + TypeScript | Cœur de l'application (interface et logique). |
| État global | Zustand | Gestion performante et minimaliste des stores. |
| Requêtes API | React Query | Gestion centralisée des appels, cache et synchronisation. |
| Validation | Zod | Validation et typage des schémas (API, forms, stores). |
| Formulaires | React Hook Form | Gestion réactive et performante des formulaires. |
| Routing | React Router | Routage applicatif entre espaces, projets, tâches, etc. |
| Backend | Node.js | Environnement d'exécution JavaScript côté serveur. |
| Framework Backend | Express.js | Framework web minimaliste pour Node.js. |
| Base de données | PostgreSQL | Système de gestion de base de données relationnelle. |
| ORM | Prisma | ORM de nouvelle génération pour Node.js et TypeScript. |
| Style | Tailwind CSS | Styling utility-first et design system modulaire. |
| Tests | Vitest + Testing Library | Tests unitaires et d'intégration ciblés. |
| Icônes | Lucide React | Librairie d'icônes claire et légère. |

### 1.2 Architecture et Design Pattern

**Architecture Principale : Domain Driven Design (feature-based)**

Chaque domaine (auth, workspace, project, task, chat, etc.) est autonome et cohérent. L'objectif est de minimiser l'impact des modifications locales sur les autres domaines.

**Pattern UI : Compound Components**

À utiliser pour les composants complexes (Modal, Dropdown, ChatThread, etc.) pour maximiser la flexibilité et la réutilisabilité par composition.

**Hiérarchie Hubble (vue macro) :**

```
src/
├── app/          # Configuration globale (router, providers, layouts)
├── features/     # Domaines fonctionnels indépendants
│   ├── auth/
│   ├── workspace/
│   ├── project/
│   ├── task/
│   ├── chat/
│   ├── notification/
│   └── user/
├── shared/       # Composants UI et utilitaires communs (Button, Input, Card)
├── lib/          # Fonctions utilitaires globales (queryKeys, formatDate)
└── types/        # Types globaux partagés
```

### Architecture Backend

Le backend est construit avec Node.js et Express.js, utilisant PostgreSQL comme base de données et Prisma comme ORM. L'architecture sera également orientée par domaine, avec des modules séparés pour l'authentification, les utilisateurs, les projets, etc., afin de maintenir une bonne séparation des préoccupations et une maintenabilité élevée.


---

## 2. Règles de Code (Rigueur Hubble)

### 2.1 Architecture et Structure

- Une feature = un domaine complet (composants, hooks, stores, schémas, tests).
- Aucune dépendance circulaire entre les domaines.
- Chaque domaine possède un `index.ts` exportant les éléments publics.
- Les imports internes doivent passer par ces `index.ts` publics (jamais d'imports profonds comme `../features/task/components/TaskItem`).

### 2.2 Nommage et Conventions

| Élément | Convention | Exemple |
|---------|------------|---------|
| Dossiers | kebab-case | `project-board/` |
| Composants | PascalCase | `TaskCard` |
| Hooks / Stores / Utils | camelCase | `useTaskStore`, `formatDate` |
| Variables / Fonctions | Noms explicites, sans abréviations obscures. | `isTaskCompleted` |
| Code mort | Interdit : toute ligne non utilisée doit être supprimée immédiatement. | **NON négociable.** |

### 2.3 Composants et Logique React

- Une seule responsabilité par composant.
- Aucune logique métier dans les composants de présentation (ils reçoivent des données et des callbacks).
- Les logiques réutilisables doivent être extraites dans des hooks (`useTaskStatus`, `useChatThread`).
- Les composants doivent gérer explicitement les états de chargement, erreur et succès.
- Typage strict et testabilité obligatoire.

### 2.4 Gestion d'État et Formulaires

**Zustand**

- Un seul store par domaine logique (`useAuthStore`, `useTaskStore`).
- Aucune donnée locale de composant dans un store global.
- Tous les stores sont typés et validés via Zod.

**React Query**

- Toute requête réseau passe par `useQuery` / `useMutation`.
- Les clés (queryKeys) sont centralisées dans `src/lib/queryKeys.ts`.

**RHF + Zod**

- Tous les formulaires (auth, création de tâche, message, etc.) ont un schéma Zod pour la validation.
- Les erreurs sont toujours gérées et affichées proprement à l'utilisateur.

### 2.5 Styles et Design System (Tailwind CSS)

- **Ordre Tailwind :** layout → spacing → color → typography → effects  
  (ex: `flex p-4 bg-white text-lg font-bold shadow-md`).
- Créer d'abord des UI primitives dans `/shared` : `Button`, `Input`, `Card`, `Modal`, etc.
- Les couleurs, espaces, typographies, etc., proviennent uniquement du thème Tailwind (`tailwind.config.js`).
- Aucun style inline sauf exception justifiée (e.g., logique dynamique).

### 2.6 Typage et Qualité TypeScript

- Aucun `any` autorisé. Utiliser `unknown` si nécessaire.
- Les props, stores et données API doivent être validés et typés.
- Jamais ignorer une erreur TS.
- Lint avant tout commit (via Husky ou CI).

### 2.7 Tests

- Tester les composants critiques : tâches, chat, hooks métier.
- Ne pas tester les détails d'implémentation mais les comportements utilisateurs.
## 3. Discipline Personnelle

- Aucune trace de `console.log` dans le code final.
- Supprimer le code mort.
- Lancer `npm run dev` et tester avant chaque push.
- Documenter les composants, stores ou hooks si nécessaire pour la clarté future.

---

## Devise Hubble

> **"Pas plus vite. Plus clair."**
