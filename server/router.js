import Router from 'koa-router'
import fs from 'fs'
import { promisify } from 'util'
import qrcode from 'qrcode'
import config from './config.js'

const router = new Router()
const path = './data'
const stat = promisify(fs.stat)
const readdir = promisify(fs.readdir)
const unlink = promisify(fs.unlink)

router
  .get('/', async (ctx, next) => {
    const query = ctx.request.query
    let dirPath = path
    if (query.dirname) {
      dirPath = `${dirPath}${query.dirname}`
    }

    let results = []
    const filenames = await readdir(dirPath)
    for (let filename of filenames) {
      const stats = await stat(`${dirPath}/${filename}`)
      results.push({
        name: filename,
        isDir: stats.isDirectory(),
        dirname: query.dirname || '/',
        date: stats.birthtime,
        size: Math.round(stats.size / 1024) + ' KB'
      })
    }

    ctx.body = results
  })
  .post('/upload', (ctx) => {
    const query = ctx.request.query
    let dirPath = path
    if (query.dirname) {
      dirPath = `${dirPath}${query.dirname}`
    }

    const files = Object.values(ctx.request.body.files)
    for (let file of files) {
      let reader = fs.createReadStream(file.path)
      let stream = fs.createWriteStream(`${dirPath}/${file.name}`)
      reader.pipe(stream)
    }

    ctx.status = 200
  })
  .post('/qrcode', async (ctx) => {
    const params = ctx.request.body
    const url = `${config.baseUrl}${params.name}`
    const qrcodeUrl = await qrcode.toDataURL(url, { errorCorrectionLevel: 'H' })
    ctx.body = qrcodeUrl
  })
  .del('/file', async (ctx, next) => {
    const query = ctx.request.query
    if (query.name) {
      try {
        await unlink(`${path}${query.name}`)
      } catch (e) {
        console.log(e)
      }
    }

    ctx.status = 200
  })

export default router