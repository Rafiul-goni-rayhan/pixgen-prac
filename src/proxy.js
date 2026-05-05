import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'

// This function can be marked `async` if using `await` inside
export async function proxy(request) {

// console.log("message fron proxy ");
const session = await auth.api.getSession({  //eita betterauth theke asteche 
    headers:await headers(),
})
if(!session){
     return NextResponse.redirect(new URL('/signin', request.url))
}
 
}
 
// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }
 
export const config = {
  matcher: ["/profile","/all-photos/:path"],
}