export const articlesUnpublished = async (token) => {
    if(!token) return Promise.reject('token is required.')

    try {
        const rawRes = await fetch('/api/articles/unpublished', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }
        })
        const res = await rawRes.json()
        if(rawRes.status === 401) return Promise.reject(res.message)
        if(rawRes.status === 404) return Promise.resolve([])
        
        if(!!res.error) return Promise.reject(res.error)
        return Promise.resolve(res?.data ?? [])
    } catch(er) {
        console.error(er.message)
        return Promise.reject(er.message)
    }
}