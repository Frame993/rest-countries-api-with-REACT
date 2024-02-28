import React from 'react'

interface Props {
    onSearch: (searchText: string) => void
}

export default function Search( { onSearch }: Props) {
  return  <input 
  className='flex w-full md:w-[400px] h-[50px] border-none rounded-[6px] px-5 shadow-lg outline-none'
  type="text" 
  placeholder="Search for a country..." 
  onChange={(e) => onSearch(e.target.value)}/>
}