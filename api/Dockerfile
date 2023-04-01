FROM python:3.10-alpine3.16

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

WORKDIR /app/api

COPY requirements.txt /app/api/
RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/api/

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]