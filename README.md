LLM Benchmark Studio
A full-stack web application for running and comparing locally hosted Large Language Models (LLMs) through Ollama. The application records benchmark results, stores run history in SQLite, visualizes performance trends, ranks models by historical latency, and exports results to CSV.
Project status: Working MVP. Current metrics include end-to-end latency, host CPU usage, host RAM usage, and response length. Tokens-per-second measurement and Docker support are planned improvements, not current features.

Results:
Dashboard
<img width="1763" height="872" alt="Screenshot_22-10-2026_144315_localhost" src="https://github.com/user-attachments/assets/50a01d63-da83-439e-9c28-752ad501c03f" />

Benchmark
<img width="1763" height="1087" alt="image" src="https://github.com/user-attachments/assets/28d3678e-769a-465e-bd64-1b7d4f367b67" />

History
<img width="1763" height="805" alt="image" src="https://github.com/user-attachments/assets/9b0886f3-4d01-45a5-abcc-6d8327fb0c03" />

Leaderboard
<img width="1763" height="805" alt="image" src="https://github.com/user-attachments/assets/1d57bdf4-9338-4938-bd49-2d7284a348a2" />

Settings
<img width="1763" height="828" alt="image" src="https://github.com/user-attachments/assets/b5d0fbbc-513e-4cd2-b54b-6624b653df38" />

Features
- Local model discovery: Retrieve installed models from the Ollama API.
- LLM benchmarking: Select a model, submit a prompt, and view its generated response.
- Performance metrics: Record end-to-end request latency, CPU usage, RAM usage, and response length.
- Persistent history: Store benchmark runs in a local SQLite database and review previous results.
- Dashboard analytics: View summary metrics and latency trends with Recharts.
- Model leaderboard: Compare models using aggregated benchmark results, including average latency and resource metrics.
- CSV export: Download benchmark history for further analysis.
- Dark interface: Navigate the application through a React dashboard with dedicated pages for Dashboard, Benchmark, History, Leaderboard, and Settings.

Tech Stack
Frontend
- React and Vite
- Tailwind CSS
- React Router
- Axios
- Recharts
- React Icons
Backend
- Python
- FastAPI and Uvicorn
- Requests for communication with the Ollama API
- psutil for host CPU and memory metrics
- SQLite for persistent benchmark history
LLM runtime
- Ollama
- Tested models: gemma3:1b, llama3.2:3b, and phi3:3.8b
Architecture
React + Tailwind CSS
        |
        | HTTP requests (Axios)
        v
     FastAPI
      / | \
     /  |  \
    v   v   v
 Ollama SQLite psutil
    |
    v
Local LLMs
The React frontend calls FastAPI endpoints. FastAPI discovers installed models through Ollama, sends prompts for inference, collects benchmark metrics, and persists completed runs in SQLite. The frontend retrieves history and aggregated metrics to populate the dashboard, leaderboard, and CSV export workflow.
Project Structure
llm-benchmark-studio/
├── backend/
│   ├── app/
│   │   ├── api/
│   │   │   ├── benchmark.py
│   │   │   ├── charts.py
│   │   │   ├── dashboard.py
│   │   │   ├── export.py
│   │   │   ├── history.py
│   │   │   ├── leaderboard.py
│   │   │   └── models.py
│   │   ├── database/
│   │   │   └── database.py
│   │   ├── schemas/
│   │   │   └── benchmark.py
│   │   ├── services/
│   │   │   ├── benchmark_service.py
│   │   │   └── ollama_service.py
│   │   └── main.py
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── ollamaApi.js
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── screenshots/
│   ├── dashboard.png
│   ├── benchmark.png
│   ├── history.png
│   ├── leaderboard.png
│   └── settings.png
├── .gitignore
└── README.md
Prerequisites

Install the following before running the application:
- Python 3.11 or compatible version
- Node.js 22 or a compatible version required by the installed Vite release
- npm
- Ollama
- Git (for cloning the repository)
Local model inference performance depends on the model, memory available, CPU/GPU hardware, and whether Ollama needs to load a model before the run.

Installation and Setup
1. Clone the repository
Replace the URL below with the URL of your GitHub repository if it differs.
git clone https://github.com/Sahana2960/LLM-Benchmark-studio.git
cd LLM-Benchmark-studio
2. Install and prepare Ollama models
Make sure Ollama is installed and running. Pull the models you want to benchmark:
ollama pull gemma3:1b
ollama pull llama3.2:3b
ollama pull phi3:3.8b
Verify the installed models:
ollama list
Ollama normally runs as a background service on http://localhost:11434. If that endpoint is already in use, Ollama may already be running; you do not need to start a second server instance.
3. Set up and run the backend
Open a terminal at the project root, then run:
cd backend
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload
If PowerShell blocks virtual-environment activation, you can use Command Prompt instead:
cd backend
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
The backend API will be available at http://127.0.0.1:8000.

Interactive API documentation is available at:
- http://127.0.0.1:8000/docs
4. Set up and run the frontend
Open a second terminal at the project root:
cd frontend
npm install
npm run dev
Open the frontend URL printed by Vite, usually http://localhost:5173.

Keep both the backend and frontend terminals running while using the application.
How to Use
1. Open the frontend in your browser.
2. Go to Benchmark and choose an installed Ollama model.
3. Enter a prompt and select Run Benchmark.
4. Review the generated response and its performance metrics.
5. Open History to review saved benchmark runs.
6. Open Leaderboard to compare models using stored results.
7. Select Export CSV on the History page to download benchmark history.
8. Use the Dashboard to review summary statistics and the latency trend chart.

API Endpoints
Method	Endpoint	Purpose
GET	/api/models/	List installed Ollama models
POST	/api/benchmark/	Run a model benchmark
GET	/api/history/	Retrieve benchmark history
DELETE	/api/history/clear	Clear stored benchmark history
GET	/api/leaderboard/	Retrieve model performance rankings
GET	/api/dashboard/	Retrieve dashboard summary metrics
GET	/api/charts/	Retrieve data for performance charts
GET	/api/export/csv	Export benchmark history as CSV


Example benchmark request:
{
  "model": "gemma3:1b",
  "prompt": "Explain binary search in simple terms."
}

Benchmark Metrics
- Latency (ms): Elapsed time measured around the request to Ollama, including model loading when it occurs.
- CPU usage (%): Host CPU usage sample collected by the backend.
- RAM usage (%): Host memory usage percentage collected by the backend.
- Response length: Number of characters in the generated response.
These measurements are useful for comparing runs on the same machine. They can vary with system load, prompt length, model state, and hardware. CPU and RAM values are host-level samples, not model-exclusive resource measurements.
Data and Privacy
Benchmark history is stored locally in backend/benchmark.db when the backend is run from the backend directory. The database and generated CSV exports are local artifacts; they should not be committed to Git. Prompts and responses are sent to the locally running Ollama service for inference.

Known Limitations
- Inference can be slow on CPU-only computers or systems with limited RAM.
- Latency can include model-loading time, especially on a model's first run.
- CPU and RAM measurements are host-level samples and may be affected by other running applications.
- Tokens-per-second metrics, authentication, and Docker deployment are potential future enhancements.

Future Enhancements
- Tokens-per-second and Ollama-native inference statistics
- CPU and RAM trend charts alongside latency
- Benchmark comparison by prompt category and repeated-run averages
- Automated tests and CI workflow
- Docker Compose setup and deployment documentation
