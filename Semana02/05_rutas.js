const mi_url = new URL('https://www.google.com/search?q=node&rlz=1C5CHFA_enPE1106PE1106&oq=node+&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTINCAEQABiDARixAxiABDINCAIQABiDARixAxiABDINCAMQABiDARixAxiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDE2NTdqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#:~:text=Node.js%20%E2%80%94%20Run,https%3A//nodejs.org')

console.log(mi_url.hostname.split('.'))
console.log(mi_url.pathname)
console.log(mi_url.protocol)

console.log(mi_url.searchParams.get('q'));