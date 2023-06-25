FROM python:3.9
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE $TO_EXPOSE_PORT
CMD python manage.py migrate && python manage.py runserver 0.0.0.0:$PORT
