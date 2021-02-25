import Head from 'next/head'
import phones from '../../phones'
import '../index'

export default function Phone(props) {
    return (
        <div>
            <Head>
            <title>{props.phone.title}</title>
            </Head>
            <img src={props.phone.picture} height='100px' width='100px' alt='Phone picture' />
            <p>
            {props.phone.type}
            </p>
            <p>{props.phone.title}</p>
            <p>{props.phone.description}</p>
      </div>
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

  