# Sierra Take Home

By Jonathan Yin



## Setup
Follow the instructions below to setup the project.
### Frontend
Install dependencies:

```
cd frontend
npm install
```

Run frontend:
```
npm run dev
```

### Backend
Create and activate virtual environment:

```
cd backend
python3.12 -m venv env
source env/bin/activate
```

Install dependencies:

```
pip install -r requirements.txt
```

Create .env file and add OPENAI_API_KEY:

```
OPENAI_API_KEY=<your-openai-api-key>
```

Run backend:

```
fastapi dev main.py
```

