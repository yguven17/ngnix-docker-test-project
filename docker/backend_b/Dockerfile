FROM python:3.10.12-slim-buster

WORKDIR /backend_b

COPY ./backend_b .

RUN python3 -m venv /opt/venv && \
    /opt/venv/bin/pip install --upgrade pip && \
    /opt/venv/bin/pip install -r requirements.txt && \
    chmod +x /backend_b/entrypoint.sh

CMD [ "/backend_b/entrypoint.sh" ]