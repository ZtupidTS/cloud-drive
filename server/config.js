const config = {
  development: {
    baseUrl: 'http://192.168.222.222:3000'
  },
  production: {
    baseUrl: 'http://api.xiaodongli.me:3000'
  }
}

export default config[process.env.NODE_ENV]