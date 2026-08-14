# CanvasCV — AI-Powered Resume Builder

> Build, import, and enhance professional resumes with the power of AI.

CanvasCV is a full-stack web application that lets you create stunning resumes from scratch or by uploading an existing PDF. It uses **Google Gemini AI** and **OpenAI-compatible models** to auto-parse your resume, suggest improvements, and generate ATS-friendly content — all within a clean, real-time canvas editor.

---

## ✨ Features

- 📄 **Create Resumes from Scratch** — Fill in personal info, experience, education, skills, projects, and a professional summary
- 📤 **Upload Existing PDF** — AI extracts all data automatically (supports text-based & scanned/image PDFs via Gemini Vision OCR)
- 🤖 **AI Content Enhancement** — One-click AI rewrite for professional summaries and job descriptions
- 🎨 **Multiple Templates** — Choose from Classic, Modern, Minimal, and Minimal with Image templates
- 🖼️ **Profile Photo Upload** — Powered by ImageKit CDN
- 🎨 **Accent Color Picker** — Personalize your resume's color scheme
- 👁️ **Live Preview** — See your resume update in real time
- 🔗 **Shareable Public Link** — Share your resume via a public URL
- 🔐 **JWT Authentication** — Secure sign-up / login with bcrypt-hashed passwords
- 💾 **Cloud Storage** — Resumes saved to MongoDB Atlas

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite | Build tool & dev server |
| Redux Toolkit | Global state management |
| React Router v7 | Client-side routing |
| TailwindCSS v4 | Styling |
| Lucide React | Icon library |
| Axios | HTTP client |
| React Hot Toast | Notifications |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express 5 | REST API server |
| MongoDB + Mongoose | Database |
| JWT + bcrypt | Authentication |
| Google Gemini AI (`@google/genai`) | Vision OCR & AI parsing |
| OpenAI-compatible SDK | Text enhancement |
| ImageKit | Profile image CDN |
| Multer | File upload handling |
| pdf-parse | Server-side PDF text extraction |

---

## 📁 Project Structure

```
CanvasCV-Resume_builder/
├── client/                     # React frontend (Vite)
│   └── src/
│       ├── pages/              # Home, Dashboard, ResumeBuilder, Preview, Login
│       ├── components/         # Form sections, templates, Navbar, etc.
│       ├── app/                # Redux store & auth slice
│       └── configs/            # Axios instance
│
└── server/                     # Express backend
    ├── Controllers/            # UserController, resumeController, aiController
    ├── models/                 # User & Resume Mongoose schemas
    ├── routes/                 # /api/users, /api/resumes, /api/ai
    ├── middlewares/            # JWT auth middleware
    └── configs/                # DB, AI, ImageKit, Multer setup
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (or local MongoDB)
- Google Gemini API key
- ImageKit account

### 1. Clone the repo

```bash
git clone https://github.com/AdityaTawhare/CanvasCV-Resume_builder.git
cd CanvasCV-Resume_builder
```

### 2. Setup the Server

```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# AI — use Gemini API key with OpenAI-compatible base URL
OPENAI_API_KEY=your_gemini_api_key
OPENAI_BASE_URL=https://generativelanguage.googleapis.com/v1beta/openai/
OPENAI_MODEL=gemini-2.5-flash

GOOGLE_GEMINI_API_KEY=your_gemini_api_key

# ImageKit
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id
```

Start the server:

```bash
npm run server     # development (nodemon)
# or
npm start          # production
```

### 3. Setup the Client

```bash
cd ../client
npm install
```

Create a `.env` file in the `client/` directory:

```env
VITE_API_BASE_URL=http://localhost:3000
```

Start the dev server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔌 API Endpoints

### Users `/api/users`
| Method | Endpoint | Description |
|---|---|---|
| POST | `/register` | Register a new user |
| POST | `/login` | Login & receive JWT |
| GET | `/data` | Get current user data |

### Resumes `/api/resumes`
| Method | Endpoint | Description |
|---|---|---|
| POST | `/create` | Create a blank resume |
| GET | `/all` | Get all resumes for user |
| GET | `/:resumeId` | Get a single resume |
| PUT | `/update` | Update resume data |
| DELETE | `/delete/:resumeId` | Delete a resume |

### AI `/api/ai`
| Method | Endpoint | Description |
|---|---|---|
| POST | `/upload-resume` | Parse uploaded PDF with AI |
| POST | `/enhance-pro-summary` | AI-enhance professional summary |
| POST | `/enhance-job-description` | AI-enhance job description |

---

## 📋 Resume Templates

| Template | Description |
|---|---|
| **Classic** | Traditional two-column layout with a sidebar |
| **Modern** | Clean, contemporary single-column design |
| **Minimal** | Ultra-clean, whitespace-focused layout |
| **Minimal Image** | Minimal layout with profile photo support |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **ISC License**.

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/AdityaTawhare">Aditya Tawhare</a>
</div>
