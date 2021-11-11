export const articleUnpublish = async (token, id) => {
    if(!token) return Promise.reject('token is required.')

    try {
        const rawRes = await fetch(`/api/article/unpublish/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }
        })
        const res = await rawRes.json()
        if(rawRes.status === 401) return Promise.reject(res.message)
        if(!!res.error) return Promise.reject(res.error)
        return Promise.resolve(res?.data ?? '')
    } catch(er) {
        console.error(er.message)
        return Promise.reject(er.message)
    }
}