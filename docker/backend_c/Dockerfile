FROM python:3.10.12-slim-buster

WORKDIR /backend_c

COPY ./backend_c .

RUN python3 -m venv /opt/venv && \
    /opt/venv/bin/pip install --upgrade pip && \
    /opt/venv/bin/pip install -r requirements.txt && \
    chmod +x /backend_c/entrypoint.sh

CMD [ "/backend_c/entrypoint.sh" ]