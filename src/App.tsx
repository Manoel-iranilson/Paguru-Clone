import { useEffect } from 'react';
import { Container, Grid, GridItem, Box, SimpleGrid, Flex, useBreakpointValue, Center, Text, Button, SlideFade, useDisclosure, ScaleFade, Heading, Accordion, AccordionItem, AccordionPanel, AccordionIcon, AccordionButton } from '@chakra-ui/react'

import Logo from './assets/logoPaguru.svg'
import LogoMobile from './assets/logoMobile.svg'
import byteme from './assets/byteme.png'
import totalCross from './assets/totalCross.png'
import top2 from './assets/top2.png'
import atheva from './assets/atheva.png'
import knolla from './assets/knolla.png'
import All4 from './assets/All4.png'
import Insede from './assets/Insede.png'
import tutu from './assets/tutu.png'
import friends from './assets/friends.png'
import { Link } from 'react-router-dom'
import Card from './components/card';

import Carousel from './components/carousel';

import Footer from './components/footer';
import Particles from './components/particles';

function App() {
  const isDesktop = useBreakpointValue({ lg: "none" });
  const { isOpen, onOpen, onToggle } = useDisclosure();

  useEffect(() => {
    onOpen()
  }, [])

  return (
    <><Container maxW='100vw' maxH={"600vh"} pt={5}   >
      {isDesktop ?
        <>
          <Particles />
          <Grid templateColumns='repeat(2, 1fr)' ml="3rem">
            <GridItem colSpan={1}>  <Flex as={Link} to='/'> <img src={Logo} alt="Paguru-logo" style={{ maxWidth: "10rem" }} /></Flex> </GridItem>
            <GridItem rowSpan={4} mt={2} me={20} flexDirection="row">
              <Flex textColor="#e5e5e5" justifyContent="space-between" fontSize={"16px"}>
                <Link to='#Fazemos'> <Text textColor="#fff" >  O que fazemos</Text></Link>
                <Link to='#Cases'> <Text textColor="#fff" > Nossos cases</Text> </Link>
                <Link to='#Blog' > <Text textColor="#fff" >Blog </Text> </Link>
                <Text fontWeight={"bold"} >
                  |
                </Text>
                <Link to='#Orcamento'> <Text textColor="#F15a24" > PEÇA UM ORÇAMENTO </Text></Link>
              </Flex>
            </GridItem>
          </Grid>
          <SlideFade in={isOpen} offsetY='800px'>

            <Center pt={20}>
              <Text
                w={"50%"}
                bgGradient='linear(to-b,#F15a24, #f15b24b9)'
                bgClip='text'
                fontSize='2.75rem'
                fontWeight='extrabold'
                textAlign="center"
              >

                Somos a software<br /> house que te levará ao <br /> próximo nível
              </Text>
            </Center>
            <Center fontSize="1.5rem" textColor="#fff">
              Alinhamos o humano com a tecnologia, e o seu negócio com o futuro.<br />
              Conta com a gente para desenvolver seus sistemas web e aplicativos.
            </Center>
            <Center mt={10}>
              <ScaleFade in whileHover={{ scale: 1.1 }}>
                <Button boxShadow="5px -3px 24px 10px #500e0c" w='20rem' h="5rem"
                  bgGradient='linear(#f15a24 20.91%,#a62e02 80.7%)'
                  _hover={{ bgGradient: 'linear(#f15a24 20.91%,#a62e02 80.7%)' }}>PEÇA UM ORÇAMENTO</Button>
              </ScaleFade>
            </Center>
          </SlideFade>

        </>
        :
        <>
          <Particles />
          <Center>
            <Flex as={Link} to='/'> <img src={LogoMobile} alt="Paguru-logo" style={{ maxWidth: "10rem" }} /></Flex>
          </Center>
          <SlideFade in={isOpen} offsetY='800px'>

            <Center pt={20}>
              <Text

                bgGradient='linear(to-b,#F15a24, #f15b24b9)'
                bgClip='text'
                fontSize='1.5rem'
                fontWeight='extrabold'
                textAlign="center"
              >

                Somos a software<br /> house que te levará <br /> ao  próximo nível
              </Text>
            </Center>
            <Center fontSize="1rem" p={8} pb={3} textColor="#fff">
              Alinhamos o humano com a tecnologia, e o seu negócio com o futuro.
            </Center>
            <Center fontSize="1rem" p={8} pt={3} textColor="#fff">
              <Text>
                Conta com a gente para desenvolver seus sistemas web e aplicativos.
              </Text>
            </Center>
            <Center mt={10}>
              <ScaleFade in whileHover={{ scale: 1.1 }}>
                <Button boxShadow="5px -3px 24px 10px #500e0c" w='20rem' h="5rem"
                  bgGradient='linear(#f15a24 20.91%,#a62e02 80.7%)'
                  _hover={{ bgGradient: 'linear(#f15a24 20.91%,#a62e02 80.7%)' }}>PEÇA UM ORÇAMENTO</Button>
              </ScaleFade>
            </Center>
          </SlideFade>
        </>}
    </Container>
      <Container mt={20} pt={5} maxW='100vw' bg={"#000"}>
        {isDesktop ?

          <>
            <Text ml="3rem" fontSize='3xl' textColor={"#fff"}>Projetos de softwares com parceiros de todo o Brasil</Text>
            <Grid templateColumns='repeat(5, 1fr)' pt={10} ml="3rem">
              <GridItem w='100%' h='10'> <img src={byteme} alt="byteme-logo" style={{ maxWidth: "10rem" }} /> </GridItem>
              <GridItem w='100%' h='10'>  <img src={totalCross} alt="totalCross-logo" style={{ maxWidth: "10rem" }} /> </GridItem>
              <GridItem w='100%' h='10'>  <img src={top2} alt="top2-logo" style={{ maxWidth: "10rem" }} /> </GridItem>
              <GridItem w='100%' h='10'>  <img src={atheva} alt="atheva-logo" style={{ maxWidth: "10rem" }} /></GridItem>
              <GridItem w='100%' h='10'> <img src={knolla} alt="knolla-logo" style={{ maxWidth: "10rem" }} /> </GridItem>
            </Grid>
            <Grid templateColumns='repeat(4, 1fr)' pt={10} ml="8rem">
              <GridItem w='100%' h='10'> <img src={All4} alt="All4-logo" style={{ maxWidth: "10rem" }} /> </GridItem>
              <GridItem w='100%' h='10'>  <img src={Insede} alt="Insede-logo" style={{ maxWidth: "10rem" }} /> </GridItem>
              <GridItem w='100%' h='10'>  <img src={tutu} alt="tutu-logo" style={{ maxWidth: "10rem" }} /> </GridItem>
              <GridItem w='100%' h='10'>  <img src={friends} alt="friends-logo" style={{ maxWidth: "10rem" }} /></GridItem>
            </Grid>

          </>
          :

          <>
            <Text m={10} fontSize='2xl' textColor={"#fff"}>Projetos de softwares com parceiros de todo o Brasil</Text>
            <Center>
              <SimpleGrid columns={2} spacing='30px'>
                <GridItem h='10'> <img src={byteme} alt="byteme-logo" style={{ maxWidth: "6rem" }} /> </GridItem>
                <GridItem h='10'>  <img src={totalCross} alt="totalCross-logo" style={{ maxWidth: "6rem" }} /> </GridItem>
                <GridItem h='10'>  <img src={top2} alt="top2-logo" style={{ maxWidth: "6rem" }} /> </GridItem>
                <GridItem h='10'>  <img src={atheva} alt="atheva-logo" style={{ maxWidth: "6rem" }} /></GridItem>
                <GridItem h='10'> <img src={knolla} alt="knolla-logo" style={{ maxWidth: "6rem" }} /> </GridItem>
                <GridItem h='10'> <img src={All4} alt="All4-logo" style={{ maxWidth: "6rem" }} /> </GridItem>
                <GridItem h='10'>  <img src={Insede} alt="Insede-logo" style={{ maxWidth: "6rem" }} /> </GridItem>
                <GridItem h='10'>  <img src={tutu} alt="tutu-logo" style={{ maxWidth: "6rem" }} /> </GridItem>
                <GridItem h='10'>  <img src={friends} alt="friends-logo" style={{ maxWidth: "6rem" }} /></GridItem>
              </SimpleGrid>
            </Center></>}

        {isDesktop ?

          <Center>
            <SimpleGrid mt={20} columns={9} spacing='10px'>
              <GridItem h='10'> <img src={"https://www.paguru.com.br/img/react_logo.e707616a.svg"} alt="react" style={{ maxWidth: "6rem" }} /> </GridItem>
              <GridItem h='10'>  <img src={"https://www.paguru.com.br/img/vuejs_logo.369b985f.svg"} alt="vue" style={{ maxWidth: "6rem" }} /> </GridItem>
              <GridItem h='10'>  <img src={"https://www.paguru.com.br/img/nodejs_logo.0a040efe.svg"} alt="node" style={{ maxWidth: "6rem" }} /> </GridItem>
              <GridItem h='10'>  <img src={"https://www.paguru.com.br/img/flutter_logo.4e8c36d4.svg"} alt="flutter" style={{ maxWidth: "6rem" }} /></GridItem>
              <GridItem h='10'> <img src={"https://www.paguru.com.br/img/mongo_logo.8d1487a9.svg"} alt="mongo" style={{ maxWidth: "6rem" }} /> </GridItem>
              <GridItem h='10'> <img src={"https://www.paguru.com.br/img/redis_logo.f305fbf1.svg"} alt="redis" style={{ maxWidth: "6rem" }} /> </GridItem>
              <GridItem h='10'>  <img src={"https://www.paguru.com.br/img/angular_logo.d1f3c43c.svg"} alt="angular" style={{ maxWidth: "6rem" }} /> </GridItem>

              <GridItem h='10'>  <img src={"https://www.paguru.com.br/img/ionic_logo.161ce46c.svg"} alt="ionic" style={{ maxWidth: "6rem" }} /> </GridItem>
              <GridItem h='10'>  <img src={"https://www.paguru.com.br/img/php_logo.dee80160.svg"} alt="php" style={{ maxWidth: "6rem" }} /></GridItem>
            </SimpleGrid>
          </Center>

          :
          <>

            <Center>
              <img src={"https://www.paguru.com.br/img/react_logo.e707616a.svg"} alt="react" style={{ maxWidth: "5rem" }} />
              <img src={"https://www.paguru.com.br/img/vuejs_logo.369b985f.svg"} alt="vue" style={{ maxWidth: "5rem" }} />
              <img src={"https://www.paguru.com.br/img/nodejs_logo.0a040efe.svg"} alt="node" style={{ maxWidth: "5rem" }} />
              <img src={"https://www.paguru.com.br/img/flutter_logo.4e8c36d4.svg"} alt="flutter" style={{ maxWidth: "5rem" }} />
              <img src={"https://www.paguru.com.br/img/mongo_logo.8d1487a9.svg"} alt="mongo" style={{ maxWidth: "5rem" }} />
            </Center>
            <Center>
              <img src={"https://www.paguru.com.br/img/redis_logo.f305fbf1.svg"} alt="redis" style={{ maxWidth: "5rem" }} />
              <img src={"https://www.paguru.com.br/img/angular_logo.d1f3c43c.svg"} alt="angular" style={{ maxWidth: "5rem" }} />
              <img src={"https://www.paguru.com.br/img/ionic_logo.161ce46c.svg"} alt="ionic" style={{ maxWidth: "5rem" }} />
              <img src={"https://www.paguru.com.br/img/php_logo.dee80160.svg"} alt="php" style={{ maxWidth: "5rem" }} />
            </Center>
          </>}

        <Text ml={5} mt={5} fontSize={50} color="#fff">O que fazemos.</Text>
        <a href="#0">2</a>
        <Card />


        {isDesktop ?
          <>
            <Text ml={5} mt={10} fontSize={50} color="#fff">
              Como fazemos
            </Text>
            <Accordion color={"#fff"} display={"flex"} m={10}>
              <AccordionItem>
                <Flex>
                  <h2>
                    <AccordionButton>
                      <Box alignItems={"center"} justifyContent={"center"} display={"flex"} borderRadius="10" h={150} w={150} textAlign='left' bg={"#1b1918b3"}>
                        <img src={"https://www.paguru.com.br/img/idea%C3%A7%C3%A3o.6aa62e3c.svg"} alt="react" style={{ maxWidth: "10rem" }} />
                      </Box>

                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text textColor={"#f15a24 "} fontSize="1.5rem">1. Ideação</Text>
                    Desafiamos suas ideias e construímos um roadmap para o sucesso.
                  </AccordionPanel>
                </Flex>
              </AccordionItem>
              <AccordionItem>
                <Flex>
                  <h2>
                    <AccordionButton>
                      <Box alignItems={"center"} justifyContent={"center"} display={"flex"} borderRadius="10" h={150} w={150} textAlign='left' bg={"#1b1918b3"}>
                        <img src={"https://www.paguru.com.br/img/design.26b397ff.svg"} alt="react" style={{ maxWidth: "10rem" }} />
                      </Box>

                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text textColor={"#f15a24 "} fontSize="1.5rem">2. Design</Text>
                    Criamos experiências amigáveis e bonitas para o seu produto.
                  </AccordionPanel>
                </Flex>
              </AccordionItem>
              <AccordionItem>
                <Flex>
                  <h2>
                    <AccordionButton>
                      <Box alignItems={"center"} justifyContent={"center"} display={"flex"} borderRadius="10" h={150} w={150} textAlign='left' bg={"#1b1918b3"}>
                        <img src={"https://www.paguru.com.br/img/desenvolvimento.c3895ba1.svg"} alt="react" style={{ maxWidth: "10rem" }} />
                      </Box>

                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text textColor={"#f15a24 "} fontSize="1.5rem">3. Desenvolvimento</Text>
                    Construímos seu produto usando as ferramentas e tecnologias mais avançadas.
                  </AccordionPanel>
                </Flex>
              </AccordionItem>
              <AccordionItem>
                <Flex>
                  <h2>
                    <AccordionButton>
                      <Box alignItems={"center"} justifyContent={"center"} display={"flex"} borderRadius="10" h={150} w={150} textAlign='left' bg={"#1b1918b3"}>
                        <img src={"https://www.paguru.com.br/img/entrega.2142f276.svg"} alt="react" style={{ maxWidth: "10rem" }} />
                      </Box>

                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text textColor={"#f15a24 "} fontSize="1.5rem">4. Entrega</Text>
                    Cuidamos de toda entrega do produto ao usuário final, garantindo disponibilidade e segurança.
                  </AccordionPanel>
                </Flex>
              </AccordionItem>
            </Accordion>
          </>
          :
          <>
            <Text ml={3} mt={10} fontSize={30} color="#fff">
              Como fazemos
            </Text>

            <Flex>
              <Box pl={3} w={100} mt={5}>
                <Box alignItems={"center"} justifyContent={"center"} display={"flex"} borderRadius="10" h={100} w={100} bg={"#1b1918b3"}>
                  <img src={"https://www.paguru.com.br/img/idea%C3%A7%C3%A3o.6aa62e3c.svg"} alt="react" style={{ maxWidth: "5rem" }} />
                </Box>
              </Box>
              <Box me={10} ml={5} mt={5} textColor={"#fff"} fontSize="0.9rem">
                <Text textColor={"#f15a24 "} fontSize="1.2rem">1. Ideação</Text>
                Desafiamos suas ideias e construímos um roadmap para o sucesso.
              </Box>
            </Flex>
            <Flex>
              <Box mt={5} pl={3} w={100}>
                <Box alignItems={"center"} justifyContent={"center"} display={"flex"} borderRadius="10" h={100} w={100} bg={"#1b1918b3"}>
                  <img src={"https://www.paguru.com.br/img/design.26b397ff.svg"} alt="react" style={{ maxWidth: "5rem" }} />
                </Box>
              </Box>
              <Box me={10} ml={5} mt={5} textColor={"#fff"} fontSize="0.9rem">
                <Text textColor={"#f15a24 "} fontSize="1.2rem">2. Design</Text>
                Criamos experiências amigáveis e bonitas para o seu produto.
              </Box>
            </Flex>

            <Flex>
              <Box mt={5} pl={3} w={100}>
                <Box alignItems={"center"} justifyContent={"center"} display={"flex"} borderRadius="10" h={100} w={100} bg={"#1b1918b3"}>
                  <img src={"https://www.paguru.com.br/img/desenvolvimento.c3895ba1.svg"} alt="react" style={{ maxWidth: "5rem" }} />
                </Box>
              </Box>
              <Box me={10} ml={5} mt={5} textColor={"#fff"} fontSize="0.9rem">
                <Text textColor={"#f15a24 "} fontSize="1.2rem">3. Desenvolvimento</Text>
                Construímos seu produto usando as ferramentas e tecnologias mais avançadas.
              </Box>
            </Flex>

            <Flex>
              <Box mt={5} pl={3} w={100}>
                <Box alignItems={"center"} justifyContent={"center"} display={"flex"} borderRadius="10" h={100} w={100} bg={"#1b1918b3"}>
                  <img src={"https://www.paguru.com.br/img/entrega.2142f276.svg"} alt="react" style={{ maxWidth: "5rem" }} />
                </Box>
              </Box>
              <Box me={10} ml={5} mt={5} textColor={"#fff"} fontSize="0.9rem">
                <Text textColor={"#f15a24 "} fontSize="1.2rem">4. Entrega</Text>
                Cuidamos de toda entrega do produto ao usuário final, garantindo disponibilidade e segurança.
              </Box>
            </Flex>

          </>}

        <Carousel />

        <Box ml={-5} mr={-4} mt={20} h={300} p={10} bg="#1b1918b3">
          <Center>
            <Text textColor={"#f15a24 "} fontWeight="bold" fontSize={30}>somos uma extensão do seu negócio.</Text>
          </Center>
          <Center pt={10}>
            <ScaleFade in whileHover={{ scale: 1.1 }}>
              <Button boxShadow="5px -3px 24px 10px #500e0c" w='20rem' h="5rem"
                bgGradient='linear(#f15a24 20.91%,#a62e02 80.7%)'
                _hover={{ bgGradient: 'linear(#f15a24 20.91%,#a62e02 80.7%)' }}>PEÇA UM ORÇAMENTO</Button>
            </ScaleFade>
          </Center>
        </Box>

        <Footer />

      </Container>

    </>
  )
}

export default App
