export function copyToClipboard(content: string): void {
    navigator.clipboard.writeText(content).then(() => "");
}
