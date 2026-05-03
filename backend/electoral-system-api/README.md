# Electoral System API

> **Status:** Archived
> Flask and PostgreSQL backend kept inside the historical `web-oldies` archive.

## Summary

- Archived Flask/PostgreSQL backend for the electoral-system experiment.
- Solves CRUD-style API access for candidates, parties, offices, people, donations, judicial processes, support teams, elections, and database functions.
- Main stack: Python 3.12, Flask, Flask-Cors, PostgreSQL, psycopg2, SQL files, and Docker.
- Current status: archived inside `web-oldies`.
- Technical value: preserves an early database-backed Flask API with domain blueprints and SQL scripts.

Backend API for the electoral-system experiment. It exposes CRUD-style Flask blueprints around candidates, parties, offices, people, donations, judicial processes, support teams, elections, and database functions.

## Features

- Flask app factory with CORS enabled.
- PostgreSQL connection lifecycle registration.
- Blueprints for electoral domain tables.
- SQL DDL, DML, and teardown scripts.
- Dockerfile for containerized execution.

## Tech Stack

- Python 3.12
- Flask
- Flask-Cors
- PostgreSQL
- psycopg2
- Docker

## Getting Started

Dependencies are listed in `requirements.txt`. Database setup files live under `database/`; verify local database credentials before using the API.

## Usage

The Dockerfile starts the app with:

```bash
python run.py
```

## Project Structure

```text
backend/electoral-system-api/
├── app/
│   ├── db.py
│   └── routes/
├── database/
├── Dockerfile
├── requirements.txt
└── run.py
```

## Architecture

`app/__init__.py` creates the Flask app, enables CORS, registers database cleanup, and mounts each domain blueprint. SQL files under `database/` define the relational database surface used by the routes.
