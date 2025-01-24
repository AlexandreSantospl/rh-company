import React from "react";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface IOpcaoBotaoBarraLateral {
  rotaItem: {
    rotulo: string;
    rota: string;
  };
}

export default function OpcaoBotaoBarraLateral({
  rotaItem,
}: IOpcaoBotaoBarraLateral): React.ReactElement {
  const router = useRouter();
  const { pathname } = router;

  return (
    <Button
      w="100%"
      minH="2.25rem"
      h="fit-content"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      gap="0.5rem"
      border="none"
      borderRadius="0.375rem"
      fontFamily="NexaBook"
      fontWeight={"bold"}
      fontSize="0.875rem"
      color={pathname === rotaItem.rota ? "white" : "black"}
      backgroundColor={pathname === rotaItem.rota ? "orange_500" : "orange_400"}
      _hover={{
        color: pathname !== rotaItem.rota && "orange_500",
      }}
      _active={{
        color: pathname !== rotaItem.rota && "orange_500",
      }}
      onClick={() => {
        router.push(rotaItem.rota);
      }}
    >
      {rotaItem.rotulo}
    </Button>
  );
}
