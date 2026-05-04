# API Reference

This document lists API surfaces found in the current backend code. It does not describe routes that were not present in the codebase.

Authentication, validation, error response shape, and request bodies are inconsistent across projects because each backend is an independent archived experiment.

## Joystick API

Location: `backend/joystick-api`

Runtime entry:

- `bin/server.js`
- `src/app.js`

Mounted route groups:

- `/`
- `/games`
- `/users`

### Root

| Method | Path | Handler | Notes |
| --- | --- | --- | --- |
| `GET` | `/` | `src/routes/index-route.js` | Returns API title metadata. |

### Games

| Method | Path | Auth | Handler | Purpose |
| --- | --- | --- | --- | --- |
| `GET` | `/games` | No | `game-controller.get` | List games. |
| `GET` | `/games/:id` | No | `game-controller.getById` | Get one game by id. |
| `POST` | `/games` | Admin token | `game-controller.post` | Create a game. |
| `PUT` | `/games/admin/:id` | Admin token | `game-controller.put` | Update a game. |
| `DELETE` | `/games/admin/:id` | Admin token | `game-controller.delete` | Delete a game. |

Game fields are based on `src/models/game.js`: `title`, `id`, `description`, `price`, `genders`, `carousel`, `best`, and `release`.

### Users, Auth, Cart, Library

| Method | Path | Auth | Handler | Purpose |
| --- | --- | --- | --- | --- |
| `POST` | `/users` | No | `user-controller.post` | Create a user. |
| `GET` | `/users` | Token decoded manually | `user-controller.get` | Return decoded token data. |
| `GET` | `/users/cart` | Token decoded manually | `user-controller.getCart` | Return cart from decoded token data. |
| `GET` | `/users/library` | Token decoded manually | `user-controller.getLibrary` | Return library from decoded token data. |
| `POST` | `/users/authenticate` | No | `user-controller.authenticate` | Authenticate and return a JWT. |
| `POST` | `/users/refresh-token` | Authorized token | `user-controller.refreshToken` | Refresh JWT data. |
| `PUT` | `/users/:game` | Authorized token | `user-controller.putGame` | Add a game to the user's cart. |
| `PUT` | `/users` | Authorized token | `user-controller.update` | Update the current user. |
| `DELETE` | `/users/cart/:game` | Authorized token | `user-controller.deleteGame` | Remove one game from cart. |
| `DELETE` | `/users/cart` | Authorized token | `user-controller.cleanCart` | Empty the cart. |
| `POST` | `/users/finish` | Authorized token | `user-controller.finish` | Move cart games to library and empty cart. |

User fields are based on `src/models/user.js`: `id`, `name`, `username`, `email`, `password`, `isAdmin`, `cart`, and `games`.

### Unmounted Order Route

`src/routes/order-route.js` defines order routes, but `src/app.js` does not mount that module. Treat those routes as inactive unless the app is changed.

## Secret Santa API

Location: `backend/secret-santa-api`

Runtime entry:

- `server.js`
- `src/app.js`

Routes are registered through `src/routes/index.js` and `src/routes/usersRoutes.js`.

| Method | Path | Handler | Purpose |
| --- | --- | --- | --- |
| `GET` | `/` | Inline route in `src/routes/index.js` | Root response. |
| `GET` | `/users` | `UserController.listarUsers` | List participants. |
| `GET` | `/users/sortear` | `UserController.sortearUsers` | Generate Secret Santa assignments. |
| `GET` | `/users/:id` | `UserController.listarUserPorId` | Get one participant by MongoDB id. |
| `POST` | `/users` | `UserController.cadastrarUser` | Create participant. |
| `PUT` | `/users/:id` | `UserController.atualizarUser` | Update participant. |
| `DELETE` | `/users/:id` | `UserController.excluirUser` | Delete participant. |

Participant fields are based on `src/models/User.js`: `id`, `nome`, and `email`.

## RGBWallet API

Location: `backend/rgbwallet-api`

Runtime entry:

- `src/index.js`
- `src/routers/router.js`

| Method | Path | Auth | Handler | Purpose |
| --- | --- | --- | --- | --- |
| `GET` | `/` | No | Inline route in `router.js` | Returns API title metadata. |
| `POST` | `/` | No | `sessionController.login` | Login by `userName` and `passwd`. |
| `GET` | `/admin` | Required | `admController.getUsers` | List non-admin users and count them. |
| `DELETE` | `/admin` | Required | `admController.deleteUser` | Delete a user by `_id` in request body. |
| `PUT` | `/admin/user` | Required | `admController.updateUser` | Update user fields. |
| `PUT` | `/admin/zerarsaldo` | Required | `admController.resetSaldo` | Reset balances for non-admin users. |
| `PUT` | `/admin/aumentarsaldo` | Required | `admController.increaseSaldo` | Increase balances based on user flags. |
| `POST` | `/admin/new` | Required | `admController.CreateUser` | Create a non-admin user. |

The API uses the `RGBWallet` database and `Usuarios` collection in controller code.

## Electoral System API

Location: `backend/electoral-system-api`

Runtime entry:

- `run.py`
- `app/__init__.py`

The app registers Flask blueprints for each domain route file under `app/routes/`.

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/` | Root API metadata. |
| `GET` | `/candidato` | List candidates with related data. |
| `DELETE` | `/candidato/<id>` | Delete candidate by id. |
| `GET` | `/partido` | List parties. |
| `DELETE` | `/partido/<id>` | Delete party by id. |
| `GET` | `/cargo` | List offices. |
| `DELETE` | `/cargo/<id>` | Delete office by id. |
| `GET` | `/pessoa` | List people. |
| `DELETE` | `/pessoa/<id>` | Delete person by id. |
| `GET` | `/processo_judicial` | List judicial processes. |
| `DELETE` | `/processo_judicial/<id>` | Delete judicial process by id. |
| `GET` | `/equipe_apoio` | List support teams. |
| `DELETE` | `/equipe_apoio/<id>` | Delete support team by id. |
| `GET` | `/participante_equipe` | List support team participants. |
| `DELETE` | `/participante_equipe/<id>` | Delete support team participant by id. |
| `GET` | `/doador` | List donors. |
| `DELETE` | `/doador/<id>` | Delete donor by id. |
| `GET` | `/doacao` | List donations. |
| `DELETE` | `/doacao/<id>` | Delete donation by id. |
| `GET` | `/pleito` | List elections. |
| `DELETE` | `/pleito/<id>` | Delete election by id. |
| `POST` | `/limpar` | Clear database data through SQL commands. |
| `POST` | `/alimentar` | Insert seed data through SQL commands. |

No authentication or authorization layer was identified in the Flask API.

## Frontend API Clients

The main frontend API wrappers are:

- `frontend/electoral-system/src/App.tsx`: uses `fetch` and `VITE_API_URL` through `__VITE_API_URL__` fallback logic.
- `frontend/joystick/src/services/api.js`: Axios client with `VITE_API_URL` fallback and a public default Joystick API URL.
- `frontend/rgbwallet/src/services/api.js`: Axios client with `VITE_API_URL` fallback and a public default RGBWallet API URL.
- `frontend/secret-santa/src/services/api.js`: Axios client with `VITE_API_URL` fallback and a public default Secret Santa API URL.
- `frontend/video-project-manage/src/services/api.js`: Axios wrapper used with MirageJS mock behavior in development.
- `frontend/lojinha-simples/src/pages/Produtos.tsx`: fetches products from `https://fakestoreapi.com/products`.
