import { rotasBarraLateral } from "@/utils/routes/routes";
import { Flex, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import OpcaoBotaoBarraLateral from "./buttonOpcionalSideBar";
import BotaoBarraLateral from "./buttonSideBar";
import { FiChevronRight } from "react-icons/fi";
import { useRouter } from "next/router";

interface RotasBarraLateral {
    rotulo: string;
    rota: string;
    rotas?: {
        rotulo: string;
        rota: string;
    }[];
}

export default function BarraLateral(): React.ReactElement {
    const [aberto, setAberto] = useState(true);
    const [selectedRoute, setSelectedRoute] = useState<RotasBarraLateral | null>(null);
    const router = useRouter();

    const handleNavigation = async (rota: string) => {
        await router.push(rota);
        setSelectedRoute(null);
    };

    return (
        <Flex w="fit-content" position="relative" h={"100vh"} >
            <Flex
                w={aberto && !selectedRoute ? "20rem" : "4.5rem"}
                backgroundColor="navy.900"
                p="1.5rem 0 1rem"
                direction="column"
                align="flex-end"
                justify="space-between"
                transition="width 0.2s"
            >
                <Flex
                    w="100%"
                    display="flex"
                    flexDirection="column"
                    gap="0.75rem"
                    pl="0.75rem"
                >
                    {rotasBarraLateral.map((rota, index) => (
                        <BotaoBarraLateral
                            overflowX={"hidden"}
                            key={index}
                            currentRoute={router.pathname.split("/")[1] === rota.rota.split("/")[1]}
                            barraAberta={aberto}
                            isSelected={selectedRoute?.rota === rota.rota}
                            icone={rota.icone}
                            rotulo={rota.rotulo}
                            rota={rota.rota}
                            onClick={() => {
                                if (rota.rotas) {
                                    if (selectedRoute === rota) setSelectedRoute(null);
                                    else setSelectedRoute(rota);
                                } else {
                                    handleNavigation(rota.rota);
                                }
                            }}
                            {...(rota.rotas && { rotas: rota.rotas })}
                        >
                            {rota.rotas && !selectedRoute && aberto ? <Text>{'>'}</Text> : undefined}
                        </BotaoBarraLateral>
                    ))}
                </Flex>
            </Flex>
            <Flex
                w={selectedRoute ? "calc(20rem - 4.5rem)" : "0"}
                p={selectedRoute ? "1.5rem 0.75rem 1rem" : "0"}
                direction="column"
                align="flex-start"
                justify="flex-start"
                gap="0.75rem"
                transition="width 0.2s"
                bgColor={"navy.800"}
            >
                <Button
                    hidden={!selectedRoute}
                    w="100%"
                    minH="2.5rem"
                    h="fit-content"
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                    border="none"
                    borderRadius="0"
                    fontFamily="UltimaPro"
                    fontWeight="bold"
                    fontSize="1rem"
                    color={"orange_500"}
                    backgroundColor="orange_400"
                    _hover={{
                        color: "orange_500",
                    }}
                    _active={{
                        color: "orange_500",
                        backgroundColor: "orange_400",
                    }}
                    onClick={() => {
                        setSelectedRoute(null);
                    }}
                >
                    {selectedRoute?.rotulo}
                </Button>

                {selectedRoute?.rotas?.map((rotaItem, index) => (
                    <OpcaoBotaoBarraLateral key={index} rotaItem={rotaItem} />
                ))}
            </Flex>
            <Button
                position="absolute"
                right="0"
                bottom={"1.5rem"}
                w="2rem"
                h="2rem"
                minW="2rem"
                variant="outline"
                borderRadius="50%"
                p="0"
                m="0"
                transform={`translateX(1rem) ${aberto ? "rotate(180deg)" : ""}`}
                zIndex={10}
                onClick={() => {
                    if (selectedRoute) {
                        setSelectedRoute(null);
                        setAberto(false);
                    }
                    setAberto(!aberto);
                }}
            >
                <FiChevronRight size={20} />
            </Button>
        </Flex>
    );
}
