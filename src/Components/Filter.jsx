"use client"
import React, { useState } from 'react'
import { Flex, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import SearchFilters from './SearchFilters';

const Filter = () => {
    const [searchFilters, setSearchFilters] = useState(false);

    return (
        <>
            <Flex
                onClick={() => setSearchFilters(!searchFilters)}
                cursor='pointer'
                bg='gray.100'
                borderBottom='1px'
                borderColor='gray.200'
                p='2'
                fontWeight='black'
                fontSize='lg'
                justifyContent='center'
                alignItems='center'
            >
                <Text>Search by filers</Text>
                <Icon paddingLeft='2' w='7' as={BsFilter} />
            </Flex>
            {searchFilters && <SearchFilters />}
        </>
    )
}

export default Filter
