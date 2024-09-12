#!/bin/bash

APP_PORT=${PORT:-8002}

echo "Waiting for postgres...backend_c"
sleep 5
echo "PostgreSQL started backend_c"

echo "Migrating database...backend_c"
/opt/venv/bin/python manage.py makemigrations --noinput
/opt/venv/bin/python manage.py migrate --noinput
echo "Database migrated backend_c"


echo "Collecting static files...backend_c"
/opt/venv/bin/python manage.py collectstatic --noinput
echo "Static files collected"

echo "Starting server...backend_c"
/opt/venv/bin/gunicorn backend.wsgi:application --bind "0.0.0.0:${APP_PORT}" --workers 4