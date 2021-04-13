import phones from '../phones.js';
import Phone from '../components/Phone';
import Layout from '../components/Layout';
import Cookies from 'cookies';
import { useStoreActions } from 'easy-peasy';
import { useEffect } from 'react';





  const content = (
    <div>
      <h2>Cyber Bar's Cell Phone Repair</h2>

      <div className='phones'>
          {phones.map((phone, index) => {
            return <Phone key={index} {...phone} />
          })}
      </div>

      <style jsx>{`
        .phones {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-template-rows: 300px;
          grid-column-gap: 10px;
          grid-row-gap: 14px;
          text-align: center;
          object-fit: cover;
          object-position: center center;
        }
      `}</style>
    </div>
  )
  
  export default function Home({ cyberbarbookingsoftware_session }) {
    const setLoggedIn = useStoreActions((actions) => actions.login.setLoggedIn)
  
    useEffect(() => {
      if (cyberbarbookingsoftware_session) {
        setLoggedIn(true)
      }
    }, [])
  
    return <Layout content={content} />
  }
  
  export async function getServerSideProps({ req, res, query }) {
    const cookies = new Cookies(req, res)
    const cyberbarbookingsoftware_session = cookies.get('cyberbarbookingsoftware_session')
  
    return {
      props: {
        cyberbarbookingsoftware_session: cyberbarbookingsoftware_session || null,
      },
    }
  }

