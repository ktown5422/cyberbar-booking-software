import phones from '../phones.js';
import Phone from '../components/Phone';





export default function Home() {
  return (
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
}
