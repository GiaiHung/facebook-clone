import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user.uid = token.sub

      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
})
