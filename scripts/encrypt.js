import { patterns } from "./patterns.js"

export function encrypt(text) {
    const textLower = text.toLowerCase()
    let encrypted = ''

    textLower.split('').forEach(t => {
        let found = false
        patterns.forEach(p => {
            if (p.in == t) {
                encrypted += p.out
                found = true
            }
        })

        if (!found) {
            encrypted += t
        }
    })

    return encrypted
}