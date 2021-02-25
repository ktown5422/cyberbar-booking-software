import phones from '../Phones.js'



export default function Home() {
  return (
    <div>
      <h2>Cyber Bar's Cell Phone Repair</h2>

      <div className='phones'>
        {phones.map((phone, index) => {
          //...
        })}
      </div>
    </div>
  )
}
