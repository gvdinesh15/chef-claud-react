
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Body from "./components/Body.jsx"

const root = createRoot(document.getElementById("root"))
root.render(
  <>
    <App />
    <Body />
  </>

)