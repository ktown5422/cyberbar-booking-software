import Head from 'next/head'
import Layout from '../../components/Layout'
import phones from '../../phones'
import BasicDateTimePicker from '../../components/BasicDateTimePicker'
import '../index'
import { useStoreActions } from 'easy-peasy'
import Cookies from 'cookies'
import { useState, useEffect } from 'react'


export default function Phone(props) {
    const setShowLoginModal = useStoreActions(
        (actions) => actions.modals.setShowLoginModal
    )
    
    const setLoggedIn = useStoreActions((actions) => actions.login.setLoggedIn)

    // useEffect(() => {
    //   if (cyberbarbooking_session) {
    //        setLoggedIn(true)
    //   }
    // }, [])

      
    return (
        <Layout
            content={
                <div className='container'>
                    <Head>
                    <title>{props.phone.title}</title>
                    </Head>
                    <article>
                    <img src={props.phone.picture} height='100px' width='100px' alt='Phone picture' />
                    <p>
                    {props.phone.type}
                    </p>
                    <p>{props.phone.title}</p>
                    <p>Price: {props.phone.price}</p>
                    <p>{props.phone.description}</p>
                    </article>
                    <aside>
                        <h2>Click the Box to Set Appointment</h2>
                        <BasicDateTimePicker />
                        <h2>Total Cost for Booking</h2>
                        <p>{props.phone.price}</p>
                        <button className='reserve' onClick={() => {setShowLoginModal()}}>Reserve</button> 
                    </aside>

                    <style jsx>{`
                        .container {
                        display: grid;
                        grid-template-columns: 60% 40%;
                        grid-gap: 30px;
                        }

                        aside {
                        display: grid;
                        margin-bottom: 250px;
                        border: 1px solid #ccc;
                        padding: 20px;
                        }
                        button {
                            background-color: rgb(0, 0, 204);
                            color: white;
                            font-size: 13px;
                            width: 100%;
                            border: none;
                            height: 40px;
                            border-radius: 4px;
                            cursor: pointer;
                        }
                    `}</style>
                </div>
            }
        />
    )
  }



export async function getServerSideProps({ req, res, query }) {
    const { id } = query
    const cookies = new Cookies(req, res)
    const  cyberbarbookingsoftware_session = cookies.get('cyberbarbookingsoftware_session')

    return { 
        props: {
            phone: phones.filter((phone) => phone.id === parseInt(id))[0],
            cyberbarbookingsoftware_session: cyberbarbookingsoftware_session || null,
        },
    }   
}

  