# RGBWallet API

> **Status:** Archived
> Express and MongoDB backend for the RGBWallet experiment.

This API pairs with `frontend/rgbwallet`. It supports login and protected administrator operations for listing, creating, editing, deleting, and updating balance data for users.

## Stack

- Node.js
- Express
- MongoDB native driver
- bcryptjs
- body-parser
- cors
- Dockerfile for containerized execution

## Main Files

```text
backend/rgbwallet-api/
|-- src/
|   |-- connections/
|   |-- controllers/
|   |-- middleaware/
|   |-- routers/
|   `-- index.js
|-- Dockerfile
|-- package-lock.json
`-- package.json
```

## Environment

Use `.env.example` as the reference:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/rgbwallet
MONGODB_DB=rgbwallet
```

`src/connections/database.js` requires `MONGODB_URI` at runtime.

## Scripts

From `package.json`:

| Script | Command |
| --- | --- |
| `start` | `node src/index.js` |
| `test` | Placeholder script that exits with an error |

## API Surface

Routes are defined in `src/routers/router.js`:

- `GET /`
- `POST /`
- `GET /admin`
- `DELETE /admin`
- `PUT /admin/user`
- `PUT /admin/zerarsaldo`
- `PUT /admin/aumentarsaldo`
- `POST /admin/new`

Protected routes use middleware from `src/middleaware/auth.js`.

See `docs/api.md` at the repository root for endpoint details.

## Data Store

Controller code uses the `RGBWallet` database and `Usuarios` collection. No formal schema or migration system was identified.

Observed fields include `name`, `userName`, `passwd`, `month`, `running`, `week`, `admin`, and `saldo`.

## Known Limitations

- CORS is permissive.
- Admin operations are exposed as broad controller actions.
- The project uses the older `mongodb` driver API style.
- No real test suite was identified.
- The folder name `middleaware` is preserved from the archived code.
