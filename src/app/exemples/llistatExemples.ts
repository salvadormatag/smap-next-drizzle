import {IconKey} from "@/sdk/navigation/navigation.icons";



export const LlistatExemples: MenuItemLinkProps[] = [
    {
        label: "Directori",
        href: "#",
        icon: "selector",
        menu: "directori",
        options: [
            {
                label: "Dashboard",
                href: "/",
                icon: "dashboard",
            },
            {
                label: "Tasques",
                href: "/agile",
                icon: "tasks",
            },
        ]
    },
    {
        label: "QA Índex",
        href: "/qa",
        icon: "selector",
    },
    {
        label: "Select amb Search",
        href: "/qa/select-search",
        icon: "qa",
    },
    {
        label: "Mocks Factory",
        href: "/qa/mockery",
        icon: "qa",
    }
];