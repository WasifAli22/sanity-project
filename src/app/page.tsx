import Image from 'next/image'
import { client } from '../../sanity/lib/client'

export const getProductData=async () => {
    const res = await client.fetch(`*[_type=="product"]{title,description}`)
    return res
}
interface Iproduct{
  title:string,
  description:string
}
export default async function Home() {
  const data:Iproduct[] = await getProductData() 
  console.log(data)

  return (
    <div>
      {
        data.map((product) => (
          <div key={product.title}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </div>
        ))
      }
      
    </div>
  )
}
