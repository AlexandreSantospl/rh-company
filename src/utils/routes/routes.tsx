import { AddIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";


export const rotasBarraLateral = [
    {
        rotulo: "Inicio",
        icone: <IconButton aria-label="Add item" icon={<AddIcon />} />,
        rota: "/",
    },
    {
        rotulo: "Recursos",
        icone: <IconButton aria-label="Add item" icon={<AddIcon />} />,
        rota: "/",
        rotas: [
            {
                rotulo:
                    "Recursos",
                rota: "/user/registrar",
            },

            {
                rotulo:
                    "Organização",
                rota: "/organizacao/contas_bancarias",
            },
        ],
    },

    {
        rotulo: "Rota unica",
        icone: <IconButton aria-label="Add item" icon={<AddIcon />} />,
        rota: "/clientes",
    },

];
