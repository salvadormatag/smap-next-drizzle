export const getTempsTranscorregut = (prev: Date, next: Date) => {
    return Math.floor((prev.getTime() - next.getTime()) / (1000 * 60 * 60 * 24));
}