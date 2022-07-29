import { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
	product : IProduct
}

export const Product = ({product}: ProductProps) => {
	const [showDetails, setShowDetails] =  useState(false)

	const btnBgClassName = showDetails ? 'bg-blue-300':'bg-yellow-300' 
	const btnClassName = ['py-4 px-4 border', btnBgClassName]

  return (
	<div className='border py-2 px-4 flex flex-col items-center mb-2'>
		<img src={product.image} alt={product.title} className=' w-1/6 ' />
		<p>{product.title}</p>
		<p className=' font-bold '>{product.price}</p>
		<button 
			className = {btnClassName.join(' ')}
			onClick={()=>setShowDetails(prev=>!prev)}
			>{showDetails? 'close info': 'open info'}
		</button>
		{showDetails && <div>
			<p>{product.description}</p>
			<p>Rate:<span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>
		</div>}
	</div>
  )
}
