import { Button, Flex, Text, ButtonProps, IconButton } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router"; // Use o useRouter do Next.js
import { AddIcon, ChevronDownIcon } from "@chakra-ui/icons";

interface BotaoBarraLateralProps extends ButtonProps {
  currentRoute: boolean;
  barraAberta: boolean;
  isSelected: boolean;
  icone: React.ReactElement;
  rotulo: string;
  rota: string;
}

export default function BotaoBarraLateral({
  currentRoute,
  barraAberta,
  isSelected,
  icone,
  rotulo,
  rota,
  ...props
}: BotaoBarraLateralProps): React.ReactElement {
  const router = useRouter();

  function getBackgroundColor() {
    if (currentRoute && (!barraAberta || isSelected)) return "white";
    if (!currentRoute && !isSelected) return "white";
    if ((!currentRoute && isSelected) || (barraAberta && isSelected)) return "white";
  }

  function getTextColor() {
    if (currentRoute && (!barraAberta || isSelected)) return "navy.900";
    if (!currentRoute && !isSelected) return "navy.900";
    if ((!currentRoute && isSelected) || (barraAberta && isSelected)) return "navy.900";
  }

  function getBorderRadius() {
    return isSelected ? "5px 0 0 5px" : "5px";
  }

  return (
    <Button
      w={barraAberta ? !isSelected ? "calc(100% - 0.75rem)" : "100%" : isSelected ? "100%" : "calc(100% - 0.75rem)"}
      h="2.25rem"
      px="0.5rem"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap="0.5rem"
      border="none"
      fontSize="0.875rem"
      borderRadius={getBorderRadius()}
      color={getTextColor()}
      backgroundColor={getBackgroundColor()}
      onClick={() => router.push(rota)}
      _hover={{
        color: currentRoute ? "navy.600" : "orange_500",
      }}
      {...props}
      transition="width 0.1s"
    >
      <Flex h="100%" alignItems="center" justifyContent="center" gap={"0.5rem"}>
        {icone}
        {rotulo !== "" ? (
          <Text fontSize="0.875rem">{rotulo}</Text>

        ) : undefined}
      </Flex>

      {props.children}
    </Button>
  );
}
