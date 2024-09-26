

import { use } from 'react';
import Image from 'next/image'
import { Flex, Box, Text, Icon } from '@chakra-ui/react';

import Property from '@/Components/Property';
import noresult from '../../../assets/images/noresult.svg'
import Filter from '@/Components/Filter';
import { fetchApi,baseUrl } from '@/utils/fetchApi';


const Search = ({ searchParams }) => {

    console.log('router', searchParams);
    const {properties} = use(getData(searchParams));

    return (
        <Box>
            <Filter/>
            <Text fontSize='2xl' p='4' fontWeight='bold'>
                Properties {searchParams.purpose}
            </Text>
            <Flex flexWrap={'wrap'}>
                {properties.map((property) => <Property property={property} key={property.id} />)}
            </Flex>
            {properties.length === 0 && (
                <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5'>
                    <Image src={noresult} alt='noresult' />
                    <Text fontSize={"2xl"} marginTop={"3"}>No results</Text>
                </Flex>
            )}

        </Box>
    )
}

export default Search

export async function getData(query) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';

    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

    return {
        properties: data?.hits,
    };
}