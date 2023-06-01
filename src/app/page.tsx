import Image from 'next/image'
import { client } from '../../sanity/lib/client'
import { Image as IImage } from 'sanity'
import { urlForImage } from '../../sanity/lib/image'

export const getProductData=async () => {
    const res = await client.fetch(`*[_type=="product"]{title,description,
      _id,  
      price,
      image,
      category ->{
        name
      }
    }`)
    return res
}
interface Iproduct{
  title:string,
  description:string,
  price:number,
  image: IImage,
  _id:string,
  category:{
    name:string
  }
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
            <p className='font-bold text-3xl'>{product.description}</p>
            <p className='font-bold'>{product.price}</p>
            <Image src={urlForImage(product.image).url()} width={300} height={300} alt='product'/>
          </div>
        ))
      }
      
    </div>
  )
}
