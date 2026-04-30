"use client";

import {useState} from "react";
import {SmapNavigatorComponent, useSmapNavigator} from "@smap-dev/sdk/uix";

export default function ExemplesLayout({ children }: { children: React.ReactNode }) {
    const [currentPage, setCurrentPage] = useState('exemples');
    // Aquí crearies la instància per a la Navbar superior
    // que porta a Exemple A, Exemple B, etc.
    const navBar = useSmapNavigator({
        mode: 'navbar',
        items: [
            { id: 'exemples', label: "Espai general d'exemples" },
            { id: 'exemple/instants', label: "Exemples de Instants" }
        ]
    });
    
    return (
        <div className="flex flex-col h-screen">
            <header className="h-16 border-b">
                <SmapNavigatorComponent
                    navigator={navBar}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            </header>
            
            <div className="flex flex-1 overflow-hidden">
                {children} {/* Aquí es carregarà el contingut de cada exemple */}
            </div>
        </div>
    );
}
