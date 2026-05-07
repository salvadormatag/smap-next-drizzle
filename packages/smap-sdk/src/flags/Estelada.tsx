// Component intern per a l'Estelada Blava
const EsteladaBlava = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 30 20" className={className} xmlns="http://www.w3.org/2000/svg">
        {/* Les 4 barres sobre fons groc */}
        <rect width="30" height="20" fill="#ffff00" />
        <rect width="30" height="2.22" y="2.22" fill="#ff0000" />
        <rect width="30" height="2.22" y="6.66" fill="#ff0000" />
        <rect width="30" height="2.22" y="11.11" fill="#ff0000" />
        <rect width="30" height="2.22" y="15.55" fill="#ff0000" />
        {/* El triangle blau */}
        <polygon points="0,0 15,10 0,20" fill="#0000ff" />
        {/* L'estrella blanca */}
        <polygon points="5,7.5 5.6,9.4 7.5,9.4 5.9,10.6 6.5,12.5 5,11.3 3.5,12.5 4.1,10.6 2.5,9.4 4.4,9.4" fill="#ffffff" />
    </svg>
);

export default EsteladaBlava;