# NetWorkly

NetWorkly is a full-stack social media platform inspired by LinkedIn, enabling users to connect, share posts, comment, and manage professional profiles. The project demonstrates modern web development practices using React, Next.js, Redux, Express, and MongoDB.

## Project Structure

```
frontend/
  ├── src/
  │   ├── components/
  │   ├── pages/
  │   ├── styles/
  │   └── config/
  ├── public/
  ├── package.json
  └── ...
backend/
  ├── controllers/
  ├── models/
  ├── routes/
  ├── uploads/
  ├── server.js
  ├── package.json
  └── ...
README.md
```

- **frontend/**: Next.js React client, UI, state management, and API calls.
- **backend/**: Express server, REST API, MongoDB models, file uploads.

## Tech Stack

- **Frontend**: Next.js, React, Redux Toolkit, Axios, CSS Modules
- **Backend**: Express.js, MongoDB (Mongoose), Multer (file uploads), bcrypt (password hashing), PDFKit (PDF generation)
- **Other**: dotenv, cors

## How to Run

### Backend

1. Install dependencies:
   ```sh
   cd backend
   npm install
   ```
2. Start server:
   ```sh
   npm run dev
   ```
   The backend runs on [http://localhost:9090](http://localhost:9090).

### Frontend

1. Install dependencies:
   ```sh
   cd frontend
   npm install
   ```
2. Start development server:
   ```sh
   npm run dev
   ```
   The frontend runs on [http://localhost:3000](http://localhost:3000).

## Features

- User registration and login
- Profile management (bio, work, education, profile picture)
- Post creation, commenting, liking
- Connection requests and management
- PDF resume generation from profile

## API Endpoints

See [backend/api.http](backend/api.http) for example requests.

## License

This project is for educational purposes.