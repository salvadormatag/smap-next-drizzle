import {MenuItem} from "@smap-dev/sdk/navigator/libs/navigator.types";

/**
 * Llistat dels ítems que defineixen el contingut global del lloc web
 */
export const LlistatItemsMenuLlocWeb: MenuItem[] = [
    {
        label: "Inici",
        slug: "/",
        icon: "home",
    },
    {
        label: "Referències SDK",
        slug: "/sdk-reference",
        icon: "samples",
    },
    {
        label: "Kanban",
        slug: "/kanban",
        icon: "activities",
    },
    {
        label: "APIS",
        slug: "/apis",
        icon: "apis",
        options: [
            {
                label: "Serveis hidraulics",
                slug: "/apis/serveis-hidraulics",
                icon: "apis",
            },
        ]
    },
];

/**
 * Llistat dels ítems de referència dels mòduls del SDK
 */
export const LlistatItemsSdkReference: MenuItem[] = [
    {
        label: "SmapInstants",
        slug: "/sdk-reference/instants",
        icon: "date",
        options: [
            {
                label: "Data amb format",
                slug: "/sdk-reference/instants/format",
                icon: "date",
            },
            {
                label: "Afegir data",
                slug: "/sdk-reference/instants/add",
                icon: "date",
            },
            {
                label: "Restar data",
                slug: "/sdk-reference/instants/substract",
                icon: "date",
            },
            {
                label: "Temps transcorregut",
                slug: "/sdk-reference/instants/elapsed-date",
                icon: "date",
            },
        ]
    },
    {
        label: "SmapNavigator",
        slug: "/sdk-reference/navigator",
        icon: "page",
        options: [
            {
                label: "Toolbar",
                slug: "/sdk-reference/navigator/toolbar",
                icon: "toolbar",
            },
            {
                label: "Sidebar",
                slug: "/sdk-reference/navigator/sidebar",
                icon: "sidebar",
            },
        ]
    },
    {
        label: "SmapAuth",
        slug: "/sdk-reference/oauth",
        icon: "page",
        options: [
            {
                label: "Smap2FA",
                slug: "/sdk-reference/oauth/smap-2FA",
                icon: "page"
            },
            {
                label: "SmapAuth",
                slug: "/sdk-reference/oauth/smap-auth",
                icon: "page"
            },
            {
                label: "SmapSession",
                slug: "/sdk-reference/oauth/sessions",
                icon: "page"
            },
        ]
    },
];