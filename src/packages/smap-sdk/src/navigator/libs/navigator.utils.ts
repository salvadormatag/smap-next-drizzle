export const isCandidateToActive = (
    pathname: string,
    slug: string
): boolean => {

    // 1. Coincidència exacta (Inici o ruta idèntica)
    if (pathname === slug) return true;

    // 2. Evitar que l'arrel "/" marqui com a actius tots els enllaços
    if (slug === '/' || slug === '') return false;

    // 3. Comprovar si la ruta actual comença amb el slug seguit d'una barra.
    // Això evita que "/references-sdk" activi un slug que sigui "/ref."
    return pathname.startsWith(`${slug}/`);
}