# cloud-drive-server

## deploy

```
# install deps
docker run -i -v $(pwd):/app -w /app node:9.0 npm install
# start server
docker run -d -v $(pwd):/app -p 3000:3000 -w /app node:9.0 npm run build
```