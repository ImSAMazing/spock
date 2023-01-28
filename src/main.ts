import './app.css'
import App from './App.svelte'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
const app = new App({
  target: document.getElementById('app'),
})

export default app
 