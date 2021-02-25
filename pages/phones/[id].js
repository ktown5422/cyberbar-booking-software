import phones from '../../phones'

export default function Phone(props) {
    return (
      <div>
        <p>{props.phone.title}</p>
      </div>
    )
  }



export async function getServerSideProps({ query }) {
    console.log(query)
    return { 
        props: {
            phone: phones.filter((phone) => phone.id === parseInt(id))[0],
        },
    }   
}

  