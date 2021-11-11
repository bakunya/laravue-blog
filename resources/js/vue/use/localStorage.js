function useLocalStorage() {
    return [
        (key, value) => localStorage.setItem(key, JSON.stringify(value)),
        (key) => JSON.parse(localStorage.getItem(key)),
    ]
}

export default useLocalStorage