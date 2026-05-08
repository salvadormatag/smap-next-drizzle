// src/navigator/controllers/NavbarController.tsx
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// src/navigator/libs/navigator.types.ts
var MenuItemTypes = /* @__PURE__ */ ((MenuItemTypes2) => {
  MenuItemTypes2["SINGLE_LINK"] = "only-link";
  MenuItemTypes2["LINK_WITH_OPTIONS"] = "link-with-options";
  MenuItemTypes2["ONLY_OPTIONS"] = "only-options";
  return MenuItemTypes2;
})(MenuItemTypes || {});

// src/navigator/libs/navigator.utils.ts
var isCandidateToActive = (pathname, slug) => {
  if (pathname === slug) return true;
  if (slug === "/" || slug === "") return false;
  return pathname.startsWith(`${slug}/`);
};

// src/navigator/libs/NavigatorIconsLibrary.ts
import * as Icon from "@heroicons/react/24/outline";
var _icons = {
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
  esquerra: Icon.ChevronDoubleLeftIcon
};
var NavigatorIconsLibrary = _icons;

// src/navigator/styles/navigator.module.css
var navigator_default = {};

// src/navigator/controllers/NavbarController.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var Navbar = ({ items }) => {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState(null);
  const navRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleLinkClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return /* @__PURE__ */ jsx("div", { ref: navRef, className: navigator_default.navigator_navbar, children: /* @__PURE__ */ jsx("div", { className: navigator_default.ItemNavigator, children: items.map((item, index) => {
    const submenuAvailable = openIndex === index && item.options !== void 0;
    const arrow = submenuAvailable ? "collapsar" : "desplegar";
    const isActive = isCandidateToActive(pathname, item.slug);
    const submenuProps = {
      item,
      onClick: handleLinkClick
    };
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: navigator_default.MenuItemLink,
        "data-active": isActive,
        children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: item.slug,
              onClick: (e) => {
                if (item.type === "only-options" /* ONLY_OPTIONS */) {
                  e.preventDefault();
                }
                handleLinkClick(index);
              },
              children: [
                item.label,
                item.options && /* @__PURE__ */ jsxs(Fragment, { children: [
                  "\xA0",
                  /* @__PURE__ */ jsx(MenuItemIcon, { iconKey: arrow, isActive })
                ] })
              ]
            }
          ),
          submenuAvailable && /* @__PURE__ */ jsx("div", { className: navigator_default.MenuSubmenuOptions, "data-render": "SubmenuContainer", children: /* @__PURE__ */ jsx(MenuItemSubmenu, { ...submenuProps }) })
        ]
      },
      index
    );
  }) }) });
};

// src/navigator/controllers/SidebarController.tsx
import { useState as useState2, useMemo } from "react";
import { usePathname as usePathname2 } from "next/navigation";
import Link2 from "next/link";

// src/navigator/components/RocketIcon.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var RocketIcon = ({
  size = 24,
  ...props
}) => {
  return /* @__PURE__ */ jsxs2(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 256 256",
      fill: "none",
      ...props,
      children: [
        /* @__PURE__ */ jsx2(
          "path",
          {
            d: "M156 20C116 32 84 64 72 104L52 124C44 132 40 144 40 156V188C40 194.6 45.4 200 52 200H84C96 200 108 196 116 188L136 168C176 156 208 124 220 84C224 68 224 48 220 20C192 16 172 16 156 20Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx2(
          "path",
          {
            d: "M168 88C168 101.255 157.255 112 144 112C130.745 112 120 101.255 120 88C120 74.7452 130.745 64 144 64C157.255 64 168 74.7452 168 88Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx2(
          "path",
          {
            d: "M88 168L64 192",
            stroke: "currentColor",
            strokeWidth: "16",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx2(
          "path",
          {
            d: "M100 204C100 176 80 156 52 156C52 184 72 204 100 204Z",
            fill: "#FF6B35"
          }
        ),
        /* @__PURE__ */ jsx2(
          "path",
          {
            d: "M188 56L200 68",
            stroke: "white",
            strokeWidth: "10",
            strokeLinecap: "round"
          }
        )
      ]
    }
  );
};

// src/navigator/controllers/SidebarController.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var Sidebar = ({ items }) => {
  const pathname = usePathname2();
  const activeParentIndex = useMemo(() => {
    return items.findIndex((item) => {
      if (item.slug === pathname) return true;
      return item.options?.some((subItem) => subItem.slug === pathname);
    });
  }, [items, pathname]);
  const [manualIndex, setManualIndex] = useState2(null);
  const openIndex = manualIndex !== null ? manualIndex : activeParentIndex !== -1 ? activeParentIndex : null;
  const handleToggle = (index) => {
    if (openIndex === index) {
      setManualIndex(-1);
    } else {
      setManualIndex(index);
    }
  };
  return /* @__PURE__ */ jsx3("div", { className: navigator_default.navigator_sidebar, children: items.map((item, index) => {
    const isItemOpen = openIndex === index;
    const isActive = isCandidateToActive(pathname, item.slug);
    const cssItemNavigator = isActive ? navigator_default.ItemNavigatorActive : navigator_default.ItemNavigator;
    const paginaActiva = "marcadorPaginaActiva";
    const iconLink = {
      icon: isActive ? paginaActiva : item.icon,
      styles: isActive ? "active" : ""
    };
    const submenuProps = {
      item,
      isActive
    };
    return /* @__PURE__ */ jsxs3("div", { className: cssItemNavigator, children: [
      /* @__PURE__ */ jsx3(
        "div",
        {
          className: navigator_default.MenuItemLink,
          "data-active": isActive,
          children: /* @__PURE__ */ jsxs3(Link2, { href: item.slug, children: [
            isActive ? /* @__PURE__ */ jsx3(RocketIcon, { size: 16, className: "text-red-500" }) : /* @__PURE__ */ jsx3(MenuItemIcon, { iconKey: iconLink?.icon || "bug", isActive }),
            item.label
          ] })
        }
      ),
      isItemOpen && item.options && /* @__PURE__ */ jsx3("div", { className: navigator_default.MenuSubmenuOptions, children: /* @__PURE__ */ jsx3(MenuItemSubmenu, { ...submenuProps }) })
    ] }, index);
  }) });
};

// src/navigator/components/NavigatorComponent.tsx
import { Fragment as Fragment2, jsx as jsx4 } from "react/jsx-runtime";
function NavigatorComponent(props) {
  const { features } = props;
  return /* @__PURE__ */ jsx4(Fragment2, { children: features.model === "NAVBAR" ? /* @__PURE__ */ jsx4(Navbar, { ...props }) : /* @__PURE__ */ jsx4(Sidebar, { ...props }) });
}

// src/navigator/components/MenuItemSubmenu.tsx
import { usePathname as usePathname3 } from "next/navigation";
import Link3 from "next/link";
import { Fragment as Fragment3, jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function MenuItemSubmenu(props) {
  const pathname = usePathname3();
  const { item, onClick } = props;
  return /* @__PURE__ */ jsx5(Fragment3, { children: item.options?.map((option, subIndex) => {
    const isActive = isCandidateToActive(pathname, option.slug);
    const paginaActiva = "marcadorPaginaActiva";
    const iconLink = {
      icon: isActive ? paginaActiva : option.icon,
      styles: isActive ? "active" : ""
    };
    return /* @__PURE__ */ jsx5(
      "div",
      {
        className: navigator_default.MenuItemLink,
        "data-active": isActive,
        children: /* @__PURE__ */ jsxs4(
          Link3,
          {
            href: option.slug,
            className: navigator_default.MenuLink,
            onClick: () => onClick ? onClick(subIndex) : null,
            children: [
              /* @__PURE__ */ jsx5(MenuItemIcon, { iconKey: iconLink?.icon || "bug", isActive }),
              option.label
            ]
          }
        )
      },
      subIndex
    );
  }) });
}

// src/libs/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/navigator/components/MenuItemIcon.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
function MenuItemIcon(props) {
  const key = props.iconKey || "bug";
  const IconComponent = NavigatorIconsLibrary[key];
  return /* @__PURE__ */ jsx6(IconComponent, { className: cn(
    navigator_default.navIcon,
    // Classe base sempre present
    props.isActive && navigator_default.navIconActive
    // El que s'aplica si és actiu
  ) });
}

// src/validators/SmapAuthValidators.ts
import { z } from "zod";
var SmapAuthSchema = z.object({
  email: z.email({ message: "L'email no sembla una adre\xE7a de correu electr\xF2nic v\xE0lida." }).toLowerCase().trim(),
  password: z.string().min(12, { message: "Per la teva propia seguretat, recomanem un m\xEDnim de 12 car\xE0cters." }).max(100).refine((val) => /[A-Z]/.test(val), {
    message: "Cal almenys una lletra maj\xFAscula."
  }).refine((val) => /[0-9]/.test(val), {
    message: "Cal almenys un n\xFAmero."
  }).refine((val) => /[!@#$%^&*(),.?":{}|<>]/.test(val), {
    message: "Cal almenys un car\xE0cter especial."
  })
});

// src/validators/SmapValidators.ts
var SmapValidators = class {
  static isValidTimestamp(timestamp) {
    if (!Number.isFinite(timestamp)) {
      return false;
    }
    const MAX_JS_DATE = 864e13;
    return Math.abs(timestamp) <= MAX_JS_DATE;
  }
  static isValidCalendarDate(d, m, y) {
    const test = new Date(y, m - 1, d, 12, 0, 0);
    return test.getFullYear() === y && test.getMonth() === m - 1 && test.getDate() === d;
  }
};

// src/errors/ErrorCodes.ts
var getErrorCode = (code) => {
  return `[${code}]`;
};

// src/instants/SmapInstantsFormatters.ts
var SmapLocales = /* @__PURE__ */ ((SmapLocales2) => {
  SmapLocales2["CAT"] = "ca-ES";
  SmapLocales2["ESP"] = "es-ES";
  SmapLocales2["UK"] = "en-GB";
  SmapLocales2["USA"] = "en-US";
  return SmapLocales2;
})(SmapLocales || {});
var SmapDateFormats = /* @__PURE__ */ ((SmapDateFormats2) => {
  SmapDateFormats2[SmapDateFormats2["short"] = 1] = "short";
  SmapDateFormats2[SmapDateFormats2["full"] = 2] = "full";
  SmapDateFormats2[SmapDateFormats2["longDay"] = 3] = "longDay";
  SmapDateFormats2[SmapDateFormats2["longDayFull"] = 4] = "longDayFull";
  SmapDateFormats2[SmapDateFormats2["monthShort"] = 5] = "monthShort";
  SmapDateFormats2[SmapDateFormats2["monthLong"] = 6] = "monthLong";
  SmapDateFormats2[SmapDateFormats2["monthShortFull"] = 7] = "monthShortFull";
  SmapDateFormats2[SmapDateFormats2["monthLongFull"] = 8] = "monthLongFull";
  return SmapDateFormats2;
})(SmapDateFormats || {});
var _SmapInstantsFormatter = class _SmapInstantsFormatter {
  /**
   * Obté o crea un formatador basat en el locale i el format sol·licitat.
   */
  static getFormatter(locale, format) {
    const cacheKey = `${locale}-${format}`;
    const cached = this.cache.get(cacheKey);
    if (cached) return cached;
    const options = this.FORMAT_CONFIGS[format] || this.BASE_OPTIONS;
    const formatter = new Intl.DateTimeFormat(locale, options);
    this.cache.set(cacheKey, formatter);
    return formatter;
  }
  static format(date, format = 1 /* short */, locale = "ca-ES" /* CAT */) {
    return this.getFormatter(locale, format).format(date);
  }
};
// 1. Encapsulament de configuracions privades
_SmapInstantsFormatter.BASE_OPTIONS = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric"
};
_SmapInstantsFormatter.FULL_DATE_OPTIONS = {
  ..._SmapInstantsFormatter.BASE_OPTIONS,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
};
// 2. Mapa de formats declaratiu (Substitueix el switch)
_SmapInstantsFormatter.FORMAT_CONFIGS = {
  [1 /* short */]: _SmapInstantsFormatter.BASE_OPTIONS,
  [2 /* full */]: _SmapInstantsFormatter.FULL_DATE_OPTIONS,
  [3 /* longDay */]: { ..._SmapInstantsFormatter.BASE_OPTIONS, weekday: "long" },
  [4 /* longDayFull */]: { ..._SmapInstantsFormatter.BASE_OPTIONS, weekday: "long", hour: "2-digit", minute: "2-digit", second: "2-digit" },
  [5 /* monthShort */]: { ..._SmapInstantsFormatter.BASE_OPTIONS, month: "short" },
  [6 /* monthLong */]: { ..._SmapInstantsFormatter.BASE_OPTIONS, month: "long" },
  [7 /* monthShortFull */]: { ..._SmapInstantsFormatter.FULL_DATE_OPTIONS, month: "short" },
  [8 /* monthLongFull */]: { ..._SmapInstantsFormatter.FULL_DATE_OPTIONS, month: "long" }
};
// 3. Cache d'instàncies per evitar recrear objectes Intl (molt car en memòria)
_SmapInstantsFormatter.cache = /* @__PURE__ */ new Map();
var SmapInstantsFormatter = _SmapInstantsFormatter;

// src/instants/SmapInstants.ts
var UnitsDate = /* @__PURE__ */ ((UnitsDate2) => {
  UnitsDate2["Days"] = "days";
  UnitsDate2["Hours"] = "hours";
  UnitsDate2["Minutes"] = "minutes";
  UnitsDate2["Months"] = "months";
  UnitsDate2["Seconds"] = "seconds";
  UnitsDate2["Weeks"] = "weeks";
  UnitsDate2["Years"] = "years";
  return UnitsDate2;
})(UnitsDate || {});
var SmapInstants = class _SmapInstants {
  constructor() {
    this.currentLocale = "ca-ES" /* CAT */;
  }
  static getInstance() {
    if (!_SmapInstants.instance) _SmapInstants.instance = new _SmapInstants();
    return _SmapInstants.instance;
  }
  // --- Configuració ---
  setLocale(locale) {
    this.currentLocale = locale;
  }
  getLocale() {
    return this.currentLocale;
  }
  // --- Core Parsing ---
  /**
   * Centralitza la creació de dates. Si falla, llança error o retorna 'ara'.
   * PRO: Separa la validació de la transformació.
   */
  toDate(moment) {
    if (moment === null || moment === void 0) return /* @__PURE__ */ new Date();
    if (moment instanceof Date) {
      if (isNaN(moment.getTime())) throw new Error(`${getErrorCode("PARAMETRE_NO_VALID" /* WrongParam */)} Date inv\xE0lid.`);
      return new Date(moment.getTime());
    }
    if (typeof moment === "number") {
      if (!SmapValidators.isValidTimestamp(moment)) throw new Error(`${getErrorCode("PARAMETRE_NO_VALID" /* WrongParam */)} Timestamp inv\xE0lid.`);
      return new Date(moment);
    }
    const parsed = this.parserStringToDate(moment);
    return parsed || /* @__PURE__ */ new Date();
  }
  /**
   * Regex millorada per suportar el format segons locale si calgués,
   * tot i que ara forcem el format estàndard del SDK.
   */
  parserStringToDate(moment) {
    const trimmed = moment.trim();
    if (!trimmed) return null;
    const matcher = /^(\d{1,2})[./-](\d{1,2})[./-](\d{4})(?:\s+(\d{1,2}):(\d{1,2}):(\d{1,2}))?$/;
    const match = trimmed.match(matcher);
    if (!match) {
      const native = new Date(trimmed);
      if (!isNaN(native.getTime())) return native;
      throw new Error(`${getErrorCode("PARAMETRE_NO_VALID" /* WrongParam */)} Format no reconegut: ${moment}`);
    }
    const [d, m, y, h, min, sec] = match.slice(1).map(Number);
    if (!SmapValidators.isValidCalendarDate(d, m, y)) {
      throw new Error(`${getErrorCode("PARAMETRE_FORA_DE_RANG" /* OutOfRange */)} Data impossible: ${moment}`);
    }
    return new Date(y, m - 1, d, h || 0, min || 0, sec || 0);
  }
  // --- Operacions ---
  getElapsedDays(prev, next) {
    const diff = Math.abs(this.toDate(next).getTime() - this.toDate(prev).getTime());
    return Math.floor(diff / (1e3 * 60 * 60 * 24));
  }
  /**
   * PRO: Gestió de desbordament de mesos (Feb 31 -> Feb 28/29)
   */
  add(date, qty, unit) {
    const res = new Date(date.getTime());
    switch (unit) {
      case "seconds" /* Seconds */:
        res.setSeconds(res.getSeconds() + qty);
        break;
      case "minutes" /* Minutes */:
        res.setMinutes(res.getMinutes() + qty);
        break;
      case "hours" /* Hours */:
        res.setHours(res.getHours() + qty);
        break;
      case "days" /* Days */:
        res.setDate(res.getDate() + qty);
        break;
      case "weeks" /* Weeks */:
        res.setDate(res.getDate() + qty * 7);
        break;
      case "years" /* Years */:
        res.setFullYear(res.getFullYear() + qty);
        break;
      case "months" /* Months */: {
        const dayBefore = res.getDate();
        res.setMonth(res.getMonth() + qty);
        if (res.getDate() !== dayBefore) res.setDate(0);
        break;
      }
    }
    return res;
  }
  substract(date, qty, unit) {
    const res = new Date(date.getTime());
    switch (unit) {
      case "seconds" /* Seconds */:
        res.setSeconds(res.getSeconds() - qty);
        break;
      case "minutes" /* Minutes */:
        res.setMinutes(res.getMinutes() - qty);
        break;
      case "hours" /* Hours */:
        res.setHours(res.getHours() - qty);
        break;
      case "days" /* Days */:
        res.setDate(res.getDate() - qty);
        break;
      case "weeks" /* Weeks */:
        res.setDate(res.getDate() - qty * 7);
        break;
      case "years" /* Years */:
        res.setFullYear(res.getFullYear() - qty);
        break;
      case "months" /* Months */: {
        const dayBefore = res.getDate();
        res.setMonth(res.getMonth() - qty);
        if (res.getDate() !== dayBefore) res.setDate(0);
        break;
      }
    }
    return res;
  }
  // Façanes (Aliases per comoditat del dev)
  fromString(moment) {
    return this.toDate(moment);
  }
};
var skeleton = SmapInstants.getInstance();

// src/oauth/oauth.interfaces.ts
var SmapUserRole = /* @__PURE__ */ ((SmapUserRole3) => {
  SmapUserRole3["ADMIN"] = "admin";
  SmapUserRole3["EDITOR"] = "editor";
  SmapUserRole3["VIEWER"] = "viewer";
  SmapUserRole3["GUEST"] = "guest";
  return SmapUserRole3;
})(SmapUserRole || {});
var SmapPasswordStrength = /* @__PURE__ */ ((SmapPasswordStrength2) => {
  SmapPasswordStrength2[SmapPasswordStrength2["WEAK"] = 0] = "WEAK";
  SmapPasswordStrength2[SmapPasswordStrength2["FAIR"] = 1] = "FAIR";
  SmapPasswordStrength2[SmapPasswordStrength2["GOOD"] = 2] = "GOOD";
  SmapPasswordStrength2[SmapPasswordStrength2["STRONG"] = 3] = "STRONG";
  SmapPasswordStrength2[SmapPasswordStrength2["SHOGUN"] = 4] = "SHOGUN";
  return SmapPasswordStrength2;
})(SmapPasswordStrength || {});

// src/oauth/SmapAuth.ts
import { hash, verify } from "@node-rs/argon2";
var SmapAuth = class {
  /**
   * Valida les credencials abans de processar-les
   */
  static validateCredentials(data) {
    const result = SmapAuthSchema.safeParse(data);
    if (!result.success) {
      const firstError = result.error.message;
      throw new Error(`[Validaci\xF3] ${firstError}`);
    }
    return result.data;
  }
  /**
   * Calcula la força de la contrasenya de 0 a 4
   */
  static getPasswordStrength(password) {
    let score = 0;
    if (!password) return 0 /* WEAK */;
    if (password.length > 8) score++;
    if (password.length > 12) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    if (password.length < 6) score = 0;
    if (score <= 2) return 0 /* WEAK */;
    if (score === 3) return 1 /* FAIR */;
    if (score === 4) return 2 /* GOOD */;
    if (password.length >= 14 && score > 4) return 3 /* STRONG */;
    if (password.length >= 18 && score > 4) return 4 /* SHOGUN */;
    return 0 /* WEAK */;
  }
  /**
   * REGISTRE: Crea un hash segur de la contrasenya.
   */
  static async hashPassword(password) {
    return await hash(password);
  }
  /**
   * INICI DE SESSIÓ: Comprova si la contrasenya és correcta.
   */
  static async verifyPassword(password, hash2) {
    try {
      return await verify(hash2, password);
    } catch (e) {
      return false;
    }
  }
  /**
   * Lògica de Login (Exemple de flux)
   */
  static async authenticate(credentials, userFromDb) {
    const isValid = await this.verifyPassword(userFromDb.passwordHash, credentials.password);
    if (!isValid) return null;
    return {
      id: userFromDb.id,
      email: userFromDb.email,
      displayName: userFromDb.name,
      role: userFromDb.role,
      locale: userFromDb.locale,
      createdAt: new Date(userFromDb.createdAt),
      lastLogin: /* @__PURE__ */ new Date(),
      isTwoFactorEnabled: !!userFromDb.tfaEnabled
    };
  }
};
export {
  MenuItemTypes,
  NavigatorComponent,
  SmapAuth,
  SmapDateFormats,
  skeleton as SmapInstants,
  SmapInstantsFormatter,
  SmapLocales,
  SmapPasswordStrength,
  SmapUserRole,
  UnitsDate
};
//# sourceMappingURL=index.mjs.map