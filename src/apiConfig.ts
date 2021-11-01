export const config = {
    host: 'http://localhost',
    api_port: 3001,
    endpoints:{
        product: 'product',
        category: 'category',
        news: 'news'
    }
}

export const url = (endpoint: string) => {
    return `${config.host}:${config.api_port}/${endpoint}`
}