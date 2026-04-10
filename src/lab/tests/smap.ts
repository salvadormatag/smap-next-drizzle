import fs from "fs";
import path from "path";
import {parseStringPromise} from "xml2js";

async function main() {
    console.log("Espai d'execució de proves de llibreries de tercers, via TSX");
    
    provaParseigLlibreriaXML2JS().then(() => {
        console.log("Execució finalitzada");
    });
}

async function provaParseigLlibreriaXML2JS() {
    
    const mockDataPath = path.resolve(__dirname, "mocks");
    
    console.log("MockData", mockDataPath);
    
    console.log("Parseig d'un XML a JSON amb xml2js configurant els arrays explicits a false");
    
    // 1. Llegir XML de mostra
    const xmlRaw = fs.readFileSync(path.join(mockDataPath, "exemple.xml"), "utf8");
    
    console.log("Què és això?", {
        tipus: typeof xmlRaw
    });
    
    // 2. Configurar el parser
    const optionsNoArray = {
        explicitArray: false,
        attrkey: "attrs",
    }
    
    // 3. Executar el parseig d'XML a JSON
    const jsonFromParserWithoutArrays = await parseStringPromise(xmlRaw, optionsNoArray);
    const jsonFromParserDefault = await parseStringPromise(xmlRaw);
    
    // 4. Exportar el resultat a un fitxer de sortida
    fs.writeFileSync(path.join(mockDataPath, "parsejatSenseArrays.json"), objectJSON2String(jsonFromParserWithoutArrays), "utf8");
    fs.writeFileSync(path.join(mockDataPath, "parsejatDefault.json"), objectJSON2String(jsonFromParserDefault), "utf8");
}

function objectJSON2String(str: object){
    return JSON.stringify(str, null, 2)
}

main().catch(err => {
    console.error(err);
})