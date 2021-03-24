import Link from 'next/link';



export default function Phone(props) {
    //console.log(props)

    return (
      <Link href='/phones/[id]' as={'/phones/' + props.id}>
        <a>
          <img src={props.picture} height='100px' width='100px' alt='Phone picture' />
          <p>
            {props.type}
          </p>
          <p>{props.title}</p>
        </a>
      </Link>
    )
  }
  