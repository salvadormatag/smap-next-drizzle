import { codeToHtml } from 'shiki'

interface Props {
    code: string;
    lang?: string;
    theme?: string;
}

export async function CodeBlock({ code, lang = 'ts', theme = 'dark-plus' }: Props) {
    // Generem l'HTML ràpidament al servidor
    const html = await codeToHtml(code, {
        lang,
        theme,
        // Podem afegir transformacions per als números de línia
        transformers: [
            {
                line(node, line) {
                    node.properties['data-line'] = line
                },
            },
        ],
    })

    return (
        <div className="code-container relative group">
            {/* Estils bàsics per als números de línia via CSS */}
            <style dangerouslySetInnerHTML={{ __html: `
        .shiki.dark-plus { 
            padding: 10px !important;
            width: 100% !important;
            background-color: rgba(4, 16, 20, 0.8) !important;
        }    
        .shiki code {            
            font: 15px 'JetBrains Mono', monospace !important;
            counter-reset: step; 
            counter-increment: step 0; 
            // background-color: #485156 !important;
        }
        .shiki code .line::before {
          content: counter(step);
          counter-increment: step; 
          margin-right: 1.5rem;
          display: inline-block;
          text-align: right;
          color: rgba(236, 241, 243, 0.6); /* Color tipus JetBrains */
        }
      `}} />
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    )
}