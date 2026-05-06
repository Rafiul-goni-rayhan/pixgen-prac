import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  // baseURL: "http://localhost:3000",
    baseURL: "https://pixgen-prac-mrm5.vercel.app",
//   providers: {
//     google: {
//       clientId: process.env.GOOGLE_CLIENT_ID, // Ensure this is set in your .env file
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Ensure this is set in your .env file
//     },
//   },
});

export const { signIn, signUp, useSession } = authClient;