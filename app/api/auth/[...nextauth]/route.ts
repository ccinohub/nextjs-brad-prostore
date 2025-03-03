// Try visiting the /api/auth/anything -> basically this file will handle anything routes for you
// console.log("Hello from route.ts")

import { handlers } from '@/auth';
export const { GET, POST } = handlers; 