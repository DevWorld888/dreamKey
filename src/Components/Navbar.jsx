"use client"
import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import { useRouter } from 'next/navigation'

const MainMenu = () => {
    const router = useRouter()
    return (
        <Flex p="2" borderBottom="1px" borderColor="gray.100">
            <Box>
                <Menu>
                    <MenuButton as={IconButton} icon={<FcMenu />} variant="outline" color="red.400" />
                    <MenuList>
                        <Link href="/" passHref>
                            <MenuItem icon={<FcHome />}>Home</MenuItem>
                        </Link>
                        <Link href="/search" passHref>
                            <MenuItem icon={<BsSearch />}>Search</MenuItem>
                        </Link>
                        <Link 
                             href={{
                                pathname: "/search",
                                query: { purpose: "for-sale" },
                             }}
                            passHref>
                            <MenuItem icon={<FcAbout />}>Buy property</MenuItem>
                        </Link>
                        <Link 
                            href={{
                                pathname: "/search",
                                query: { purpose: "for-rent" },
                            }}
                            passHref
                            >
                            <MenuItem icon={<FiKey />}>Rent property</MenuItem>
                        </Link>

                    </MenuList>
                </Menu>
            </Box>
            <Spacer />
            <Box fontSize="3xl" color="blue.400" fontWeight="bold">
                <Link href="/" paddingLeft="2">DreamKeys</Link>
            </Box>
        </Flex>
    );
}

export default MainMenu;
