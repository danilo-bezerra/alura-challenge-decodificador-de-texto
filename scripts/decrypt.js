import { patterns } from "./patterns.js"

export function decrypt(text) {
    let decrypted = text.toLowerCase()
    patterns.forEach(p => {
        decrypted = decrypted.replaceAll(p.out, p.in)
        
    })
    return decrypted
}