import {MenuItem, MenuItemTypes} from "@smap-dev/sdk/navigator/libs/navigator.types";

/**
 * Llistat dels ítems que defineixen el contingut global del lloc web
 */
export const LlistatItemsMenuLlocWeb: MenuItem[] = [
    {
        label: "Inici",
        slug: "/",
        icon: "home",
        type: MenuItemTypes.SINGLE_LINK,
    },
    {
        label: "Referències SDK",
        slug: "/sdk-reference",
        icon: "samples",
        type: MenuItemTypes.SINGLE_LINK,
    },
    {
        label: "Kanban",
        slug: "/kanban",
        icon: "activities",
        type: MenuItemTypes.SINGLE_LINK,
    },
    {
        label: "APIS",
        slug: "/apis",
        icon: "apis",
        type: MenuItemTypes.ONLY_OPTIONS,
        options: [
            {
                label: "Serveis hidraulics",
                slug: "/apis/serveis-hidraulics",
                icon: "apis",
                type: MenuItemTypes.SINGLE_LINK,
            },
            {
                label: "Serveis postals",
                slug: "/apis/serveis-postals",
                icon: "apis",
                type: MenuItemTypes.SINGLE_LINK,
            },
            {
                label: "Conversió PDF a JSON",
                slug: "/apis/conversio-pdf-json",
                icon: "apis",
                type: MenuItemTypes.SINGLE_LINK,
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
        type: MenuItemTypes.LINK_WITH_OPTIONS,
        options: [
            {
                label: "Data amb format",
                slug: "/sdk-reference/instants/format",
                icon: "date",
                type: MenuItemTypes.SINGLE_LINK,
            },
            {
                label: "Afegir data",
                slug: "/sdk-reference/instants/add",
                icon: "date",
                type: MenuItemTypes.SINGLE_LINK,
            },
            {
                label: "Restar data",
                slug: "/sdk-reference/instants/substract",
                icon: "date",
                type: MenuItemTypes.SINGLE_LINK,
            },
            {
                label: "Temps transcorregut",
                slug: "/sdk-reference/instants/elapsed-date",
                icon: "date",
                type: MenuItemTypes.SINGLE_LINK,
            },
        ]
    },
    {
        label: "SmapNavigator",
        slug: "/sdk-reference/navigator",
        icon: "page",
        type: MenuItemTypes.LINK_WITH_OPTIONS,
        options: [
            {
                label: "Toolbar",
                slug: "/sdk-reference/navigator/toolbar",
                icon: "toolbar",
                type: MenuItemTypes.SINGLE_LINK,
            },
            {
                label: "Sidebar",
                slug: "/sdk-reference/navigator/sidebar",
                icon: "sidebar",
                type: MenuItemTypes.SINGLE_LINK,
            },
        ]
    },
    {
        label: "SmapAuth",
        slug: "/sdk-reference/oauth",
        icon: "page",
        type: MenuItemTypes.LINK_WITH_OPTIONS,
        options: [
            {
                label: "Smap2FA",
                slug: "/sdk-reference/oauth/smap-2FA",
                icon: "page",
                type: MenuItemTypes.SINGLE_LINK,
            },
            {
                label: "SmapAuth",
                slug: "/sdk-reference/oauth/smap-auth",
                icon: "page",
                type: MenuItemTypes.SINGLE_LINK,
            },
            {
                label: "SmapSession",
                slug: "/sdk-reference/oauth/sessions",
                icon: "page",
                type: MenuItemTypes.SINGLE_LINK,
            },
        ]
    },
];