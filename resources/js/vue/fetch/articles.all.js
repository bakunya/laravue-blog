export const articlesAll = async () => {
    try {
        const rawRes = await fetch('/api/articles', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        const res = await rawRes.json()
        if(rawRes.status === 404) return Promise.resolve([])
        
        if(!!res.error) return Promise.reject(res.error)
        return Promise.resolve(res?.data ?? [])
    } catch(er) {
        console.error(er.message)
        return Promise.reject(er.message)
    }
}