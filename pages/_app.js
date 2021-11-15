import '../styles/globals.css'
import User from "../components/context";
import { useState,useMemo} from 'react';

function MyApp({ Component, pageProps }) {


  const [user, setUser] = useState({});
  const providervalue = useMemo(() => ({ user, setUser }), [user, setUser]);
  return(
  <User.Provider value={providervalue}>
   <Component {...pageProps} />
  </User.Provider>
  )
}

export default MyApp
