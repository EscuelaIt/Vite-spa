export const enviroment = {
  BACKEND_URL: import.meta.env.VITE_BACKEND_URL ? import.meta.env.VITE_BACKEND_URL : 'http://localhost',
  PUSHER_KEY: import.meta.env.VITE_PUSHER_KEY,
}