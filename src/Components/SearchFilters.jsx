import React from 'react'
import { useState } from 'react';
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button, Container } from '@chakra-ui/react';

import { filterData } from '@/utils/filterData';
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()
  const [purpose, setPurpose] = useState(searchParams.get('purpose') || '');
  const [rentFrequency, setRentFrequency] = useState(searchParams.get('rentFrequency') || '');
  const [minPrice, setMinPrice] = useState(searchParams.get('minPrice') || 0);
  const [maxPrice, setmaxPrice] = useState(searchParams.get('maxPrice') || 0);
  const [sort, setSort] = useState(searchParams.get('sort') || '');
  const [areaMax, setAreaMax] = useState(searchParams.get('areaMax') || 0);
  const [roomsMin, setRoomsMin] = useState(searchParams.get('roomsMin') || 0);
  const [bathsMin, setBathsMin] = useState(searchParams.get('bathsMin') || 0);
  const [furnishingStatus, setFurnishingStatus] = useState(searchParams.get('furnishingStatus') || '');
  const [categoryExternalID, setCategoryExternalID] = useState(searchParams.get('categoryExternalID') || 0);

   // Handle select changes and update the state
  const handlePurposeChange = (e) => {

    const selectedValue = e.target.value
    const filter = filterData.find(f => f.items.some(item => item.value === selectedValue));
    console.log('filter',filter.queryName);
    switch (filter.queryName) {
      case 'purpose':
        setPurpose(selectedValue)
        break;
      case 'rentFrequency':
        setRentFrequency(selectedValue)
        break;
      case 'minPrice':
        setMinPrice(parseInt(selectedValue))
        break;
      case 'maxPrice':
        setmaxPrice(parseInt(selectedValue))
        break;
      case 'sort':
        setSort(selectedValue)
        break;
      case 'areaMax':
        setAreaMax(parseInt(selectedValue))
        break;
      case 'roomsMin':
        setRoomsMin(parseInt(selectedValue))
        break;
      case 'bathsMin':
        setBathsMin(parseInt(selectedValue))
        break;
      case 'furnishingStatus':
        setFurnishingStatus(selectedValue)
        break;
      case 'categoryExternalID':
        setCategoryExternalID(parseInt(selectedValue))
        break;
    
      default:
        break;
    }

  };
  
  const clear = () =>{
    router.push(`${pathname}`, { shallow: true });

  }
  const searchwithFilters = () =>{
    
    
    const Params = new URLSearchParams();
    if(purpose)  Params.set("purpose",purpose)
    if(rentFrequency) Params.set("rentFrequency",rentFrequency)
    if(minPrice) Params.set("minPrice",minPrice)
    if(maxPrice) Params.set("maxPrice",maxPrice)
    if(sort) Params.set("sort",sort)
    if(areaMax) Params.set("areaMax",areaMax)
    if(roomsMin) Params.set("roomsMin",roomsMin)
    if(bathsMin) Params.set("bathsMin",bathsMin)
    if(furnishingStatus) Params.set("furnishingStatus",furnishingStatus)
    if(categoryExternalID) Params.set("categoryExternalID",categoryExternalID)
    const queryString = Params.toString();
    
    router.push(`${pathname}?${queryString}`, { shallow: true });
  }
  return (
      <Flex  bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
        {
          filters.map((f)=>(
            <Box key={f.queryName}>
              <Select
                placeholder={f.placeholder}
                w="fit-content"
                p="2"
                onChange={handlePurposeChange}
              >
                {
                  f?.items?.map((i)=>(
                    <option key={i.value} value={i.value}>
                      {i.value}
                    </option>
                  ))
                }
              </Select>
            </Box>
          ))
        }
        <Flex  justifyContent='space-around' gap={'4px'} flexWrap='wrap'>
            <Button colorScheme='blue'size='lg' onClick={()=>searchwithFilters()}>Search</Button>
            <Button colorScheme='blue'size='lg' onClick={()=>clear()}>Clear</Button>
        </Flex>
      </Flex>
  )
}

export default SearchFilters


