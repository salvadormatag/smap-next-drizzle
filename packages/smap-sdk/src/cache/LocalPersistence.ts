"use client"

/**
 * Donat que el localStorage només admet strings, definim un tipus d'unió per als inputs de SaveData
 */
type StorageData = object | string | number | boolean | null;

const noDisponible = "[LocalPersistence][error] LocalStorage no es troba disponible.";
const modulError = "[LocalPersistence][error]";

export class LocalPersistence {

    // Comprovació preliminar per assegurar-nos que estem al browser i el SSR de NextJS no llenci
    // error 500 per no trobar el LocalStorage.
    private static isBrowser(): boolean {
        return typeof window !== "undefined";
    }

    /**
     * Guarda dades (objecte, string, number, boolean) al localStorage.
     * T pot ser de qualsevol mena, ja que sempre es guarda com a string JSON.
     */
    static saveData<T extends StorageData>(storageKey: string, data: T): boolean {

        if (this.isBrowser()) {
            try {
                if (data !== undefined) {
                    localStorage.setItem(storageKey, JSON.stringify(data));
                    return true;
                }
                return false;

            } catch (error) {
                console.error(noDisponible, error);
            }
        }
        return false;
    }

    /**
     * Recupera i parseja dades del localStorage.
     * T, és el tipus de dada esperat (el que es va guardar).
     */
    static getData<T extends StorageData>(storageKey: string): T | null {
        if (this.isBrowser()) {
            try {
                const storedData = localStorage.getItem(storageKey);

                if (storedData !== null) {
                    try {
                        // Tothom qui utilitzi aquest mètode haurà de castejar el resultat:
                        // const user = ClientRepository.getData<User>('user_key');
                        return JSON.parse(storedData) as T;
                    } catch (e) {
                        console.error(`${modulError} Ha fallat fent JSON.parse per a la clau ${storageKey}:`, e);
                        return null;
                    }
                }
                return null;

            } catch (error) {
                console.error(noDisponible, error);
            }
        }
        return null;
    }

    /**
     * Obté una propietat específica d'un objecte emmagatzemat.
     * El tipus T, ha de ser un objecte amb una clau K.
     */
    static getNode<T extends Record<string, T>, K extends keyof T>(
        storageKey: string,
        child: K
    ): T[K] | null {
        if (this.isBrowser()) {
            try {
                // Recuperem el pare com a tipus T
                const parent = this.getData<T>(storageKey);

                if (typeof parent === 'object' && parent !== null && !Array.isArray(parent)) {
                    // L'ús de T[K] assegura el tipus de retorn
                    return parent[child] ?? null;
                }
                return null;

            } catch (error) {
                console.error(noDisponible, error);
            }
        }
        return null;
    }

    // ... (resetAllData i deleteData es mantenen igual)

    static resetAllData(): void {
        if (this.isBrowser()) {
            try {
                localStorage.clear();
            } catch (error) {
                console.error(noDisponible, error);
            }
        }
    }

    static deleteData(storageKey: string): void {
        if (this.isBrowser()) {
            try {
                localStorage.removeItem(storageKey);
            } catch (error) {
                console.error(noDisponible, error);
            }
        }
    }

    /**
     * Afegeix o actualitza un objecte (T) dins d'un array de tipus T.
     */
    static addObjectInArray<T extends object>(
        objectKey: keyof T,
        storageKey: string,
        object: T
    ): boolean {
        if (this.isBrowser()) {
            try {
                // Recuperem la llista com un array del tipus T
                let list = this.getData<T[]>(storageKey);

                if (list === null) {
                    // Si la clau no existeix, creem una nova llista
                    list = [object];
                } else if (Array.isArray(list)) {

                    const valueToMatch = object[objectKey];

                    // La cerca d'índex és segura amb el tipus T[]
                    const objIndex = list.findIndex(((obj) => obj[objectKey] === valueToMatch));

                    if (objIndex !== -1) {
                        list[objIndex] = object;
                    } else {
                        list.push(object);
                    }
                } else {
                    console.error(`${modulError} Dades a ${storageKey} no són un array.`);
                    return false;
                }

                // Guardem la llista (ara de tipus T[])
                return this.saveData(storageKey, list);
            } catch (error) {
                console.error(noDisponible, error);
                return false;
            }
        }
        return false;
    }

    /**
     * Obté un objecte (T) d'un array de tipus T dins del localStorage, buscant per una clau (objectKey).
     * @param objectKey La clau de l'objecte (p. ex., 'id') per fer la cerca.
     * @param storageKey La clau del localStorage on es guarda l'array (p. ex., 'productes_carro').
     * @param valueToMatch El valor a coincidir amb la clau (p. ex., el valor de l'ID a buscar).
     * @returns L'objecte T trobat, o null.
     */
    static getObjectFromArray<T extends Record<string, StorageData>>(
        objectKey: keyof T,
        storageKey: string,
        valueToMatch: StorageData
    ): T | null {
        if (this.isBrowser()) {
            try {
                // 1. Recuperem la llista com un array del tipus T
                const list = this.getData<T[]>(storageKey);

                // 2. Comprovacions de seguretat
                if (list !== null && Array.isArray(list) && list.length > 0) {

                    // 3. Trobar l'índex de l'objecte que coincideix amb la clau i el valor
                    const objIndex = list.findIndex((obj) => obj[objectKey] === valueToMatch);

                    // 4. Si l'índex és vàlid, retornem l'objecte
                    if (objIndex !== -1) {
                        return list[objIndex];
                    }
                }

                // 5. Si no es troba o la llista és buida/invàlida
                return null;

            } catch (error) {
                console.error(noDisponible, error);
                return null;
            }
        }

        // Si no estem al navegador
        return null;
    }

    /**
     * Elimina un objecte (T) d'un array de tipus T.
     */
    static removeObjectFromArray<T extends Record<string, T>>(
        objectKey: keyof T,
        storageKey: string,
        object: T
    ): boolean {
        if (this.isBrowser()) {
            try {
                // Recuperem la llista com un array del tipus T
                const list = this.getData<T[]>(storageKey);

                if (list !== null && Array.isArray(list) && list.length > 0) {

                    const valueToMatch = object[objectKey];

                    const objIndex = list.findIndex(((obj) => obj[objectKey] === valueToMatch));

                    if (objIndex !== -1) {
                        list.splice(objIndex, 1);
                        this.saveData(storageKey, list);
                        return true;
                    }
                }
                return false;
            } catch (error) {
                console.error(noDisponible, error);
                return false;
            }
        }
        return false;
    }
}