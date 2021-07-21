FROM nginx:1.20.1-alpine

COPY ./dist/app-base/ /usr/share/nginx/html/

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]