'use client';
import CountUp from 'react-countup'

// Check for function construction.
function AnimatedCounter ({amount}: {amount: number}) {
  return (
    // Creation of our own Component to bypass error useRef
    <div className='w-full'>
        <CountUp
        decimals={2}
        decimal=','
        prefix='€' 
        end={amount} 
        />    
    </div>
  )
}

export default AnimatedCounter