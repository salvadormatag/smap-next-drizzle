export default async function InstantsHomePage() {
    return (
        <div>
            <h1>Home de referències del mòdul: <b>Instants</b></h1>
            <p>
                El mòdul <b>Instants</b> del <b>smap-dev/sdk</b> és un conjunt d'utilitats per facilitar el treball
                amb dates en l'àmbit més comú d'aplicatius web:
            </p>
            <ul>
                <li>
                    Donar format a una data per persistir a la BD (drizzle + postgre).
                </li>
                <li>
                    Donar diferents formats a una data per publicacions en web i aplicacions.
                </li>
                <li>
                    <b>Afegir</b> unitats de temps a una data indicada.
                </li>
                <li>
                    <b>Restar</b> unitats de temps a una data indicada.
                </li>
                <li>
                    Obtenir el <b>temps transcorregut</b> o el <b>temps restant</b> entre dues dates donades.
                </li>
                <li>
                    Disposar d'un component visual per mostrar comptes enrere <b>(esdeveniments, etc)</b>.
                </li>
            </ul>
        </div>
    );
}

