import React from 'react'
import ContractSidebar from './ContractSidebar'
import ContractContent from './ContractContent'

export default function Contract() {
  return (
      <div className='flex h-screen w-screen'>
        <ContractSidebar/>
        <ContractContent/>
      </div>
    
  )
}
