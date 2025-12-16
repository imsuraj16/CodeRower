# Configuration Dashboard (CodeRower Task)

Full‑stack app to fetch configuration data and update remarks. The backend is a Node/Express API with MongoDB, and the frontend is a React (Vite) UI styled with Tailwind CSS.

## Project Structure

```
backend/
	server.js
	models/Configuration.js
	routes/configurationRoutes.js
	package.json
frontend/
	src/
		App.jsx
		main.jsx
		index.css
		components/
			Navbar.jsx
		pages/
			FetchConfig.jsx
			UpdateRemark.jsx
	vite.config.js
	package.json
```

## Prerequisites

- Node.js 18+ and npm
- A MongoDB connection string (`MONGO_URI`)

## Backend Setup (API)

1) Install dependencies

```powershell
cd backend
npm install
```

2) Create `.env` in `backend/` with:

```
MONGO_URI=<your-mongodb-connection-string>
PORT=8080
```

3) Start the server

```powershell
node server.js
```

Server runs on `http://localhost:8080`.

### API Endpoints

- GET `GET /api/configurations/:id`
	- Returns the 2D array `data` for the configuration with `configId = :id`.
	- Response example:
		```json
		[["A","B","C"],["D","E"],["F"]]
		```

- PUT `PUT /api/configurations/:id`
	- Body: `{ "remark": "Some text" }`
	- Updates the `remark` field of the configuration with `configId = :id`.
	- Response: `{ "message": "success" }`

### MongoDB Document Shape

Collection: `configurations`

```json
{
	"configId": "qwertyuiop",
	"data": [["A","B"],["C","D"]],
	"remark": "Initial remark"
}
```

## Frontend Setup (React + Vite)

1) Install dependencies

```powershell
cd frontend
npm install
```

2) Run the dev server

```powershell
npm run dev
```

Vite serves the app (usually at `http://localhost:5173`).

### Pages

- Fetch Config (`/`): Enter a `Configuration ID` and fetch its 2D `data` via the API.
- Update Remark (`/update`): Enter a `Configuration ID` and a new `remark`, then update via the API.

### Backend URL

The frontend currently calls a deployed backend:

```
https://config-backend-1.onrender.com
```

If running the backend locally, update the axios base URLs in `src/pages/FetchConfig.jsx` and `src/pages/UpdateRemark.jsx` to:

```
http://localhost:8080
```

Example change (Fetch):

```js
axios.get(`http://localhost:8080/api/configurations/${configId}`)
```

Example change (Update):

```js
axios.put(`http://localhost:8080/api/configurations/${configId}`, { remark })
```

## Quick Start

- Backend: set `.env` and run `node server.js`.
- Frontend: `npm run dev` in `frontend/`, then open the shown URL.

## Notes

- Ensure a document with the given `configId` exists in MongoDB before fetching/updating.
- Tailwind CSS v4 is enabled via `@tailwindcss/vite` and `@import "tailwindcss"` in `src/index.css`.

<img width="1919" height="966" alt="image" src="https://github.com/user-attachments/assets/70d349c3-89e0-4e2a-8880-0c676ab3a7aa" />

<img width="1919" height="966" alt="image" src="https://github.com/user-attachments/assets/9e3794e3-dc9a-4898-9224-aa92ac7e6629" />

<img width="1919" height="966" alt="image" src="https://github.com/user-attachments/assets/86626f13-a7af-4ae0-b063-c02351a752ce" />

<img width="1919" height="966" alt="image" src="https://github.com/user-attachments/assets/f0bde2c5-b0e0-40eb-9789-e3b67e83848e" />



