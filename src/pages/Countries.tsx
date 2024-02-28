import { useCountry } from '../hooks/useCountry'
import Card from '../components/Card'


export default function Countries() {

  const{countries} = useCountry()
  
  return (
    <div className='w-[90%] md:max-w-[1200px] mx-auto mt-10 grid grid-cols-1 md:grid-cols-4 gap-10'>
      {countries?.map((country) => 
        <Card key={country.name.common} country={country} />
      )}
    </div>
  )
}
