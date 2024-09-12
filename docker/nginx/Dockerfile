FROM nginx:stable-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY ./frontend/dist /usr/share/nginx/html

CMD [ "nginx", "-g", "daemon off;" ]