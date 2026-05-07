import * as Icon from '@heroicons/react/24/outline';

const _icons = {
    
    // Icona per defecte si, en algun lloc s'envia una iconKey no definida en aquesta llibreria
    bug: Icon.BugAntIcon,
    
    // Globals
    main: Icon.CircleStackIcon,
    selector: Icon.SwatchIcon,
    home: Icon.HomeIcon,
    alertsEnabled: Icon.BellIcon,
    alertsDisabled: Icon.BellSlashIcon,
    flag: Icon.BookmarkIcon,
    settings: Icon.Cog8ToothIcon,
    stats: Icon.ChartBarIcon,
    dashboard: Icon.PresentationChartBarIcon,
    qa: Icon.BeakerIcon,
    like: Icon.HandThumbUpIcon,
    notLike: Icon.HandThumbDownIcon,
    
    // Confluence
    confluence: Icon.PencilSquareIcon,
    page: Icon.DocumentTextIcon,
    
    // Users
    users: Icon.UsersIcon,
    userDetails: Icon.IdentificationIcon,
    newUser: Icon.UserPlusIcon,
    
    // Activitats
    tasks: Icon.WrenchScrewdriverIcon,
    activities: Icon.NewspaperIcon,
    newActivity: Icon.SquaresPlusIcon,
    newComment: Icon.DocumentPlusIcon,
    newResponse: Icon.ChatBubbleLeftEllipsisIcon,

    // Exemples
    samples: Icon.InboxStackIcon,

    // Calendaris
    date: Icon.CalendarDateRangeIcon,

    // Miscellanea
    cadenatTancat: Icon.LockClosedIcon,
    cadenatObert: Icon.LockOpenIcon,
    marcadorPaginaActiva: Icon.RocketLaunchIcon,
    apis: Icon.ServerIcon,
    toolbar: Icon.WindowIcon,
    sidebar: Icon.ListBulletIcon,
    desplegar: Icon.ChevronDoubleDownIcon,
    collapsar: Icon.ChevronDoubleUpIcon,
    dreta: Icon.ChevronDoubleRightIcon,
    esquerra: Icon.ChevronDoubleLeftIcon,
};


export type IconKey = keyof typeof _icons;

export const NavigatorIconsLibrary: Record<IconKey, React.ElementType> = _icons;