import Header from './Header'


export default function Layout(props) {
    return (
      <div>
        <Header />
        <main>{props.content}</main>

        <style jsx>{`
            main {
                position: relative;
                max-width: 56em;
                background-color: white;
                padding: 2em;
                margin: 0 auto;
                box-sizing: border-box;
            }
        `}</style>
      </div>
    )
  }
  