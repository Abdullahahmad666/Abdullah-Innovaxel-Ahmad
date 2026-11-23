# URL Shortener Service

A full-stack URL shortener with usage statistics: shorten long links, redirect, update or delete them, and see how often each short link is opened. Built as a technical assessment for Innovaxel.

> The full source code is on the **`dev` branch**. `main` holds this README only, as the assessment required.

## Features
- Create a short code for any URL
- Resolve a short code to the original URL
- Update or delete a short link
- Access counter and stats per link

## API
| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/shorten` | Create a short URL |
| GET | `/shorten/:code` | Get the original URL |
| PUT | `/shorten/:code` | Update the target URL |
| DELETE | `/shorten/:code` | Delete a short URL |
| GET | `/shorten/:code/stats` | Get access statistics |

## Tech stack
Node.js · Express · MongoDB (Mongoose) · React · Axios

## Run locally
```bash
git clone -b dev https://github.com/Abdullahahmad666/Abdullah-Innovaxel-Ahmad.git
cd Abdullah-Innovaxel-Ahmad

# backend
cd backend && npm install
echo "MONGO_URI=your_mongodb_uri\nPORT=5000" > .env
npm run dev            # http://localhost:5000

# frontend (new terminal)
cd ../frontend && npm install && npm start   # http://localhost:3000
```

---

**Built by [Abdullah Ahmad](https://abdullah-ahmad-portfolio.vercel.app)**, Full Stack Software Engineer in Lahore, Pakistan · [GitHub](https://github.com/Abdullahahmad666) · [LinkedIn](https://www.linkedin.com/in/abdullah-ahmad-a00913259/)
