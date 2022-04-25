FROM python:latest
WORKDIR /usr/app
COPY . .
RUN pip install -r requirements.txt
EXPOSE 5000
CMD ["python3", "server.py"]