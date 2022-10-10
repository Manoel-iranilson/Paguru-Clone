import { Box, Button, Center, Container, Flex, Link, SimpleGrid, Text, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import { BsFacebook, BsLinkedin, BsInstagram, BsBehance, } from "react-icons/bs"

const footer: React.FC = () => {
    const isDesktop = useBreakpointValue({ lg: "none" });

    return (
        <>
            {
                isDesktop ?
                    <SimpleGrid columns={[2, null, 3]} bg="#363636" ml={- 4} me={- 4} padding={10} h={300} textColor={"#fff"} >
                        <Box height='120px'>
                            <img src={"https://www.paguru.com.br/img/logo.1f24b227.svg"} alt="react" style={{ maxWidth: "10rem" }} />
                            <Text pt={2}>© 2017 - 2022</Text>

                            <Flex pt={20} >
                                <Link href='https://www.facebook.com/pagurudesenvolvimento'><BsFacebook size={20} /> </Link>
                                <Link href='https://www.linkedin.com/company/paguru/'><BsLinkedin size={20} style={{ marginLeft: "13" }} /> </Link>
                                <Link href='https://www.instagram.com/pagurudev/'><BsInstagram size={20} style={{ marginLeft: "13" }} /> </Link>
                                <Link href='https://www.behance.net/paguruteam'><BsBehance size={20} style={{ marginLeft: "13" }} /> </Link>
                            </Flex>
                        </Box>
                        <Box height='80px' w={20} me={10} display={"flex"} flexDirection={'column'}>
                            <Button colorScheme='#fff' fontSize={16} p={3} variant='link' >
                                O que fazemos
                            </Button>
                            <Button colorScheme='#fff' fontSize={16} p={3} variant='link'>
                                Nossos Cases
                            </Button>
                            <Button colorScheme='#fff' fontSize={16} p={3} variant='link'>
                                Peça seu Orçamento
                            </Button>
                            <Button colorScheme='#fff' fontSize={16} p={3} variant='link'>
                                Blog
                            </Button>
                            <Button colorScheme='#fff' fontSize={16} p={3} variant='link'>
                                Trabalhe conosco
                            </Button>
                        </Box>
                        <Box height='80px' w={400} me={50}>
                            <Text>
                                Endereço: Avenida Ailton Gomes, 4900 - Lagoa Seca - Juazeiro do Norte/CE
                            </Text>
                            <Text>
                                E-mail: seuparceiro@paguru.com.br
                            </Text>
                            <Text>Telefone/WhatsApp: +55 88 98196-5582</Text>
                            <Text pt={12}>Paguru Soluções Digitais LTDA - CNPJ 33.389.444/0001-10. Todos os direitos reservados.</Text>

                        </Box>

                    </SimpleGrid >
                    :

                    <Box ml={-4} mr={-4} p={10} textColor={"#fff"} bg="#363636" textAlign={"center"} alignItems="center">

                        <Center>
                            <img src={"https://www.paguru.com.br/img/logo.1f24b227.svg"} alt="react" style={{ maxWidth: "10rem" }} />
                        </Center>
                        <Text pt={2} pb={5}>© 2017 - 2022</Text>
                        <Center pb={5}>
                            <Flex>
                                <Link href='https://www.facebook.com/pagurudesenvolvimento'><BsFacebook size={20} /> </Link>
                                <Link href='https://www.linkedin.com/company/paguru/'><BsLinkedin size={20} style={{ marginLeft: "18" }} /> </Link>
                                <Link href='https://www.instagram.com/pagurudev/'><BsInstagram size={20} style={{ marginLeft: "15" }} /> </Link>
                                <Link href='https://www.behance.net/paguruteam'><BsBehance size={20} style={{ marginLeft: "15" }} /> </Link>
                            </Flex>
                        </Center>
                        <Center>
                            <Button colorScheme='#fff' fontSize={16} p={3} variant='link' >
                                O que fazemos
                            </Button>
                        </Center>
                        <Center>
                            <Button colorScheme='#fff' fontSize={16} p={3} variant='link'>
                                Nossos Cases
                            </Button>
                        </Center>
                        <Center>
                            <Button colorScheme='#fff' fontSize={16} p={3} variant='link'>
                                Peça seu Orçamento
                            </Button>
                        </Center>
                        <Center>
                            <Button colorScheme='#fff' fontSize={16} p={3} variant='link'>
                                Blog
                            </Button>
                        </Center>
                        <Center>
                            <Button colorScheme='#fff' fontSize={16} p={3} pb={5} variant='link'>
                                Trabalhe conosco
                            </Button>
                        </Center>
                        <Text>
                            Endereço: Avenida Ailton Gomes, 4900 - Lagoa Seca - Juazeiro do Norte/CE
                        </Text>
                        <Text>
                            E-mail: seuparceiro@paguru.com.br
                        </Text>
                        <Text>Telefone/WhatsApp: +55 88 98196-5582</Text>
                        <Text pt={12}>Paguru Soluções Digitais LTDA - CNPJ 33.389.444/0001-10. Todos os direitos reservados.</Text>

                    </Box>

            }

        </>
    );

}

export default footer;