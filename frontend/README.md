# 🤖 LLM Benchmark Studio

A production-quality full-stack AI benchmarking platform built using **FastAPI**, **React**, **Ollama**, and **SQLite**.

LLM Benchmark Studio allows developers to compare multiple local Large Language Models (LLMs) by measuring latency, CPU usage, RAM usage, and maintaining benchmark history with interactive analytics.

---

# 🚀 Features

✅ Compare multiple local LLMs

- Phi-3 3.8B
- Llama 3.2 3B
- Gemma 3 1B

✅ Benchmark Metrics

- Response Latency
- CPU Usage
- RAM Usage
- Response Length

✅ Dashboard

- Live statistics
- Performance charts using Recharts

✅ Benchmark History

- SQLite database
- Automatic benchmark logging

✅ Leaderboard

- Average latency comparison
- Model ranking

✅ CSV Export

- Export benchmark history

✅ Modern UI

- React + Tailwind CSS
- Dark theme

---

# 🖥️ Screenshots

## Dashboard

![Dashboard](screenshots/dashboard.png)

---

## Benchmark

![Benchmark](screenshots/benchmark.png)

---

## History

![History](screenshots/history.png)

---

## Leaderboard

![Leaderboard](screenshots/leaderboard.png)

---

## Settings

![Settings](screenshots/settings.png)

---

# 🛠 Tech Stack

## Frontend

- React (Vite)
- Tailwind CSS
- Axios
- Recharts
- React Router

## Backend

- FastAPI
- Ollama
- SQLite
- psutil
- Requests

---

# 📂 Project Structure

```
llm-benchmark-studio/

├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── database/
│   │   ├── services/
│   │   └── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
│
├── screenshots/
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/llm-benchmark-studio.git
```

```
cd llm-benchmark-studio
```

---

## Backend

```
cd backend
```

Create virtual environment

```
python -m venv .venv
```

Activate

Windows

```
.venv\Scripts\activate
```

Install packages

```
pip install -r requirements.txt
```

Run FastAPI

```
uvicorn app.main:app --reload
```

---

## Frontend

```
cd frontend
```

Install packages

```
npm install
```

Run

```
npm run dev
```

---

## Ollama

Install Ollama

https://ollama.com

Pull models

```
ollama pull gemma3:1b
ollama pull llama3.2:3b
ollama pull phi3:3.8b
```

Verify

```
ollama list
```

---

# 📊 Benchmark Metrics

The application measures

- Response Latency
- CPU Usage
- RAM Usage
- Response Length
- Benchmark History

---

# 🎯 Future Improvements

- Token per second calculation
- GPU monitoring
- Docker support
- Authentication
- PDF report export
- Real-time benchmarking
- Model quality scoring

---

# 👨‍💻 Author

**Sahana M**

Computer Science Engineering Student

Interested in

- Backend Development
- AI Engineering
- Machine Learning
- Full Stack Development