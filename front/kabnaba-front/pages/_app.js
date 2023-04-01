// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
// own css files here
import "../css/customcss.css";

import '<kanbana-front>/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
