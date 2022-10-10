import React from 'react';

import { Box, Flex, SimpleGrid, Text, useBreakpointValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

const Carousel: React.FC = () => {
    const isDesktop = useBreakpointValue({ lg: "none" });


    return (

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ color: "#fff  ", marginLeft: "16px", paddingRight: "16px", }}>
            {isDesktop ?
                <>
                    <Flex direction={"row"} justify="space-between">
                        <Text fontSize={50}>O que fizemos</Text>
                        <Flex  >
                            <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" style={{ marginRight: "10px" }}>
                                <BsArrowLeft size={30} color="#53504E" />
                            </button>

                            <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <BsArrowRight size={30} color="#53504E" />
                            </button>
                        </Flex>
                    </Flex>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <SimpleGrid columns={2} spacing={10}>
                                <Box height='400px'>
                                    <Text fontSize={20} pt={5}> ContaQuanto </Text>
                                    <Text color="#c4c4c4" pt={5} pb={5}>DESIGN - DEV</Text>
                                    <Text color="#c4c4c4">Atendemos demandas específicas com o objetivo de retirar
                                        ou reduzir os gargalos dos times de desenvolvimento, assumindo o
                                        desenvolvimento de produtos internos da empresa, desde a parte de design,
                                        desenvolvimento, testes e homologação. Essa parceria impulsionou bastante a ContaQuanto,
                                        pois conseguimos, em pouco tempo, acabar com um dos maiores problemas que eles enfrentavam: contratar
                                        bons desenvolvedores.</Text>
                                </Box>
                                <Box bg={"#1b1918b3"} borderRadius={8} display="flex" justifyContent="center" alignItems="center" > <img src="https://www.paguru.com.br/img/quanto.414be3e6.png" style={{ maxWidth: "30rem" }} /> </Box>

                            </SimpleGrid>
                        </div>
                        <div className="carousel-item">
                            <SimpleGrid columns={2} spacing={10}>
                                <Box height='400px'>
                                    <Text fontSize={20} pt={5}> All4Life </Text>
                                    <Text color="#c4c4c4" pt={5} pb={5}>UI Design - Desenvolvimento mobile - Infraestrutura</Text>
                                    <Text color="#c4c4c4">O projeto All4Life está em fase beta de testes e em breve será lançado em larga escala,
                                        toda parte tecnológica e visual da plataforma foi desenvolvida por nós, incluindo design, arquitetura de software,
                                        API e aplicativo móvel. Desenvolvido em React Native, em breve estará na Google Play e AppStore.
                                        Um dos objetivos do negócio é reunir pessoas para prática de atividades saudáveis.</Text>

                                    <Flex as={Link} to='https://www.all4life.global/' mt={20} fontWeight="extrabold" textColor="#F15a24"> ACESSE</Flex>
                                </Box>
                                <Box bg={"#1b1918b3"} borderRadius={8} display="flex" justifyContent="center" alignItems="center" > <img src="https://www.paguru.com.br/img/all4life.66362b22.png" style={{ maxWidth: "30rem" }} /> </Box>

                            </SimpleGrid>
                        </div>
                        <div className="carousel-item">
                            <SimpleGrid columns={2} spacing={10}>
                                <Box height='400px'>
                                    <Text fontSize={20} pt={5}>FriendsBee </Text>
                                    <Text color="#c4c4c4" pt={5} pb={5}>Desenvolvimento mobile</Text>
                                    <Text color="#c4c4c4">Atuamos desenvolvendo e melhorando o aplicativo móvel, juntamente com a equipe de design e backend do FriendsBee. Com uma comunicação bastante proativa e colaborativa conseguimos otimizar as entregas e colocar o produto no mercado em tempo recorde.</Text>
                                    <Flex as={Link} to='https://www.friendsbee.com/' mt={20} fontWeight="extrabold" textColor="#F15a24"> ACESSE</Flex>
                                </Box>
                                <Box bg={"#1b1918b3"} borderRadius={8} display="flex" justifyContent="center" alignItems="center" > <img src="https://www.paguru.com.br/img/friendsbee.ada08c8f.png" style={{ maxWidth: "30rem" }} /> </Box>
                            </SimpleGrid>
                        </div>
                        <div className="carousel-item">
                            <SimpleGrid columns={2} spacing={10}>
                                <Box height='400px'>
                                    <Text fontSize={20} pt={5}>Atheva </Text>
                                    <Text color="#c4c4c4" pt={5} pb={5}>Desenvolvimento web</Text>
                                    <Text color="#c4c4c4">Atuamos na parte front-end de um projeto interno, construindo novos produtos junto com a equipe de Design e Back-end do Atheva na criação de um jogo na área da educação. Sempre pensando na facilidade de uso, responsividade e desempenho da aplicação. A comunicação e a colaboração entre times internos e times externos sempre é um desafio e com o Atheva tudo flui muito bem e a parceria continua evoluindo com entregas em tempo recorde.</Text>
                                    <Flex as={Link} to='https://www.atheva.com.br/' mt={20} fontWeight="extrabold" textColor="#F15a24"> ACESSE</Flex>
                                </Box>
                                <Box bg={"#1b1918b3"} borderRadius={8} display="flex" justifyContent="center" alignItems="center" > <img src="https://www.paguru.com.br/img/atheva.ad955221.png" style={{ maxWidth: "30rem" }} /> </Box>
                            </SimpleGrid>
                        </div>
                        <div className="carousel-item">
                            <SimpleGrid columns={2} spacing={10}>
                                <Box height='400px'>
                                    <Text fontSize={20} pt={5}>Doctor Life </Text>
                                    <Text color="#c4c4c4" pt={5} pb={5}>UI Design - Desenvolvimento mobile</Text>
                                    <Text color="#c4c4c4">O DoctorLife já foi lançado na PlayStore e em breve estará também na AppStore. O aplicativo serve para auxiliar médicos na comunicação com o pacientes e fornecer receitas digitais, além de manter o paciente sempre informado sobre horários de medicações e momento de retorno.</Text>
                                </Box>
                                <Box bg={"#1b1918b3"} borderRadius={8} display="flex" justifyContent="center" alignItems="center" > <img src="https://www.paguru.com.br/img/doctorlife.31890452.png" style={{ maxWidth: "30rem" }} /> </Box>
                            </SimpleGrid>
                        </div>
                        <div className="carousel-item">
                            <SimpleGrid columns={2} spacing={10}>
                                <Box height='400px'>
                                    <Text fontSize={20} pt={5}>Locus Eventus </Text>
                                    <Text color="#c4c4c4" pt={5} pb={5}>Locus Eventus</Text>
                                    <Text color="#c4c4c4">Trabalhamos desde 2015 com a Locus, apesar de ser um dos nossos primeiros clientes, ainda estamos em constante evolução do ERP desenvolvido internamente para suprir demandas que nenhum outro software de mercado conseguiu, como: Organizar turmas em contextos específicos, Criação automatizada de contratos, Área do cliente para pagamento de parcelas através de cartão ou boleto, Agendamentos e Informativos enviados de forma automatizada e controlada… Ainda hoje é um desafio diário evoluir o sistema de acordo com as melhorias e mudanças nos processos da empresa, mas acreditamos que um sistema pensado do zero, muitas vezes pode otimizar custos e tempo.</Text>
                                    <Flex as={Link} to='http://www.locuseventus.com.br/' mt={20} fontWeight="extrabold" textColor="#F15a24"> ACESSE</Flex>
                                </Box>
                                <Box bg={"#1b1918b3"} borderRadius={8} display="flex" justifyContent="center" alignItems="center" > <img src="https://www.paguru.com.br/img/locus.a2f66c4b.png" style={{ maxWidth: "30rem" }} /> </Box>
                            </SimpleGrid>
                        </div>
                    </div>
                </>
                :
                <>

                    <Flex mt={10} mb={5} >
                        <Text pe={10} fontSize={30}>O que fizemos</Text>
                        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" style={{ marginRight: "10px" }}>
                            <BsArrowLeft size={30} color="#53504E" />
                        </button>

                        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <BsArrowRight size={30} color="#53504E" />
                        </button>
                    </Flex>

                    <div className="carousel-inner">
                        <div className="carousel-item active">

                            <Box height='650px'>
                                <Box bg={"#1b1918b3"} padding={10} borderRadius={8} display="flex" justifyContent="center" alignItems="center" > <img src="https://www.paguru.com.br/img/quanto.414be3e6.png" style={{ maxWidth: "18rem" }} /> </Box>
                                <Text fontSize={20} pt={5}> ContaQuanto </Text>
                                <Text color="#c4c4c4" pt={5} pb={5}>DESIGN - DEV</Text>
                                <Text color="#c4c4c4">Atendemos demandas específicas com o objetivo de retirar
                                    ou reduzir os gargalos dos times de desenvolvimento, assumindo o
                                    desenvolvimento de produtos internos da empresa, desde a parte de design,
                                    desenvolvimento, testes e homologação. Essa parceria impulsionou bastante a ContaQuanto,
                                    pois conseguimos, em pouco tempo, acabar com um dos maiores problemas que eles enfrentavam: contratar
                                    bons desenvolvedores.</Text>
                            </Box>


                        </div>
                        <div className="carousel-item">

                            <Box height='750px'>
                                <Box bg={"#1b1918b3"} padding={10} borderRadius={8} display="flex" justifyContent="center" alignItems="center" > <img src="https://www.paguru.com.br/img/all4life.66362b22.png" style={{ maxWidth: "18rem" }} /> </Box>
                                <Text fontSize={20} pt={5}> All4Life </Text>
                                <Text color="#c4c4c4" pt={5} pb={5}>UI Design - Desenvolvimento mobile - Infraestrutura</Text>
                                <Text color="#c4c4c4">O projeto All4Life está em fase beta de testes e em breve será lançado em larga escala,
                                    toda parte tecnológica e visual da plataforma foi desenvolvida por nós, incluindo design, arquitetura de software,
                                    API e aplicativo móvel. Desenvolvido em React Native, em breve estará na Google Play e AppStore.
                                    Um dos objetivos do negócio é reunir pessoas para prática de atividades saudáveis.</Text>

                                <Flex as={Link} to='https://www.all4life.global/' mt={20} fontWeight="extrabold" textColor="#F15a24"> ACESSE</Flex>
                            </Box>


                        </div>
                        <div className="carousel-item">

                            <Box height='680px'>
                                <Box bg={"#1b1918b3"} padding={10} borderRadius={8} display="flex" justifyContent="center" alignItems="center" > <img src="https://www.paguru.com.br/img/friendsbee.ada08c8f.png" style={{ maxWidth: "18rem" }} /> </Box>
                                <Text fontSize={20} pt={5}>FriendsBee </Text>
                                <Text color="#c4c4c4" pt={5} pb={5}>Desenvolvimento mobile</Text>
                                <Text color="#c4c4c4">Atuamos desenvolvendo e melhorando o aplicativo móvel, juntamente com a equipe de design e backend do FriendsBee. Com uma comunicação bastante proativa e colaborativa conseguimos otimizar as entregas e colocar o produto no mercado em tempo recorde.</Text>
                                <Flex as={Link} to='https://www.friendsbee.com/' mt={20} fontWeight="extrabold" textColor="#F15a24"> ACESSE</Flex>
                            </Box>

                        </div>
                        <div className="carousel-item">

                            <Box height='750px'>
                                <Box bg={"#1b1918b3"} padding={10} borderRadius={8} display="flex" justifyContent="center" alignItems="center" > <img src="https://www.paguru.com.br/img/atheva.ad955221.png" style={{ maxWidth: "18rem" }} /> </Box>
                                <Text fontSize={20} pt={5}>Atheva </Text>
                                <Text color="#c4c4c4" pt={5} pb={5}>Desenvolvimento web</Text>
                                <Text color="#c4c4c4">Atuamos na parte front-end de um projeto interno, construindo novos produtos junto com a equipe de Design e Back-end do Atheva na criação de um jogo na área da educação. Sempre pensando na facilidade de uso, responsividade e desempenho da aplicação. A comunicação e a colaboração entre times internos e times externos sempre é um desafio e com o Atheva tudo flui muito bem e a parceria continua evoluindo com entregas em tempo recorde.</Text>
                                <Flex as={Link} to='https://www.atheva.com.br/' mt={20} fontWeight="extrabold" textColor="#F15a24"> ACESSE</Flex>
                            </Box>

                        </div>
                        <div className="carousel-item">

                            <Box height='600px'>
                                <Box bg={"#1b1918b3"} padding={10} borderRadius={8} display="flex" justifyContent="center" alignItems="center" > <img src="https://www.paguru.com.br/img/doctorlife.31890452.png" style={{ maxWidth: "18rem" }} /> </Box>
                                <Text fontSize={20} pt={5}>Doctor Life </Text>
                                <Text color="#c4c4c4" pt={5} pb={5}>UI Design - Desenvolvimento mobile</Text>
                                <Text color="#c4c4c4">O DoctorLife já foi lançado na PlayStore e em breve estará também na AppStore. O aplicativo serve para auxiliar médicos na comunicação com o pacientes e fornecer receitas digitais, além de manter o paciente sempre informado sobre horários de medicações e momento de retorno.</Text>
                            </Box>

                        </div>
                        <div className="carousel-item">

                            <Box height='850px'>
                                <Box bg={"#1b1918b3"} padding={10} borderRadius={8} display="flex" justifyContent="center" alignItems="center" > <img src="https://www.paguru.com.br/img/locus.a2f66c4b.png" style={{ maxWidth: "18rem" }} /> </Box>
                                <Text fontSize={20} pt={5}>Locus Eventus </Text>
                                <Text color="#c4c4c4" pt={5} pb={5}>Locus Eventus</Text>
                                <Text color="#c4c4c4">Trabalhamos desde 2015 com a Locus, apesar de ser um dos nossos primeiros clientes, ainda estamos em constante evolução do ERP desenvolvido internamente para suprir demandas que nenhum outro software de mercado conseguiu, como: Organizar turmas em contextos específicos, Criação automatizada de contratos, Área do cliente para pagamento de parcelas através de cartão ou boleto, Agendamentos e Informativos enviados de forma automatizada e controlada… Ainda hoje é um desafio diário evoluir o sistema de acordo com as melhorias e mudanças nos processos da empresa, mas acreditamos que um sistema pensado do zero, muitas vezes pode otimizar custos e tempo.</Text>
                                <Flex as={Link} to='http://www.locuseventus.com.br/' mt={20} fontWeight="extrabold" textColor="#F15a24"> ACESSE</Flex>
                            </Box>

                        </div>
                    </div>
                </>


            }
        </div >

    );
}

export default Carousel;