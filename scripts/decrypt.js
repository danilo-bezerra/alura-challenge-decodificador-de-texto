import { patterns } from "./patterns.js"

export function decrypt(text) {
    const textLower = text.toLowerCase()
    let decrypted = ''
    textLower.split('').forEach(t => {
        let found = false
        patterns.forEach(p => {
            if (p.out == t && !found) {
                decrypted += p.in
                found = true
            }
        })

        if (!found) {
            decrypted += t
        }
    })

    return decrypted
}