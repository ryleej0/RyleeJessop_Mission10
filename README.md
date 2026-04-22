# Mission 10 — Bowler listing

This repository contains a **React** frontend and an **ASP.NET Core** Web API backend.

## Layout

- `frontend/` — Create React App (TypeScript)
- `backend/Mission10Backend/` — Web API project (`Mission10Backend.csproj`)

## Run locally

**1. API (port 5287)**

```bash
cd backend/Mission10Backend
dotnet run
```

**2. React app (port 3000)**

```bash
cd frontend
npm install
npm start
```

The frontend calls `http://localhost:5287/api/bowler`. CORS allows `http://localhost:3000`.

## Replace sample data

`BowlerController` currently returns seeded rows. If your course requires a database (for example SQLite or SQL Server with the bowling league schema), replace the static list with your EF Core query and migrations.
