export const isCandidateToActive = (pathname: string, slug: string) => {
    return ( pathname.startsWith(slug) || pathname === slug ) && slug !== "/";
}