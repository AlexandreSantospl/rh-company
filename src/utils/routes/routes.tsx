import { EmailIcon, HamburgerIcon, PhoneIcon, } from "@chakra-ui/icons";


export const rotasBarraLateral = [
    {
        rotulo: "Inicio",
        icone: <HamburgerIcon />,
        rota: "/",
    },
    {
        rotulo: "Recursos",
        icone: <EmailIcon />,
        rota: "/teste",
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
        icone: <PhoneIcon />,
        rota: "/clientes",
    },

];
