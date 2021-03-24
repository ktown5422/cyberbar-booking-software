import Head from 'next/head'
import Layout from '../../components/Layout'
import phones from '../../phones'
import BasicDateTimePicker from '../../components/BasicDateTimePicker'
import '../index'

export default function Phone(props) {
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
                        <h2>Choose a date and time for a repair</h2>
                        <BasicDateTimePicker />
                        <h2>Total Cost for Booking</h2>
                        <p>{props.phone.price}</p>
                        <button className='reserve'>Reserve</button>
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



export async function getServerSideProps({ query }) {
    const { id } = query

    return { 
        props: {
            phone: phones.filter((phone) => phone.id === parseInt(id))[0],
        },
    }   
}

  