import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'

import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
    secret: useRuntimeConfig().authSecret,
    providers: [
        GithubProvider.default({
            clientId: process.env.GITHUB_CLIENT_ID, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET 
        }),
        GoogleProvider.default({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET 
            
        })
        
    ]
})
