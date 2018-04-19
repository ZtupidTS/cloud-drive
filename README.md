# cloud-drive
you know, for storage

## deploy

```
# install deps
docker run -i -v $(pwd):/app -w /app node:9.0 npm install

# build bundle
docker run -i -v $(pwd):/app -w /app node:9.0 npm run build

# start server
docker run -d -v $(pwd)/dist:/app $(pwd)/nginx.conf:/etc/nginx/conf.d/default.conf -p 80:80 nginx
```
