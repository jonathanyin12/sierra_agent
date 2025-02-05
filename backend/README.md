
# Backend

Create and activate virtual environment:

```
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