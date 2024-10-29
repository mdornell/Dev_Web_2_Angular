// Converte Date para String no formato 'yyyy-MM-dd'
export function dateToString(date: Date): string {
    return date.toISOString().split('T')[0]; // Retorna 'yyyy-MM-dd'
}

// Converte String para Date. Retorna null se a data for inválida
export function stringToDate(dateString: string): Date | null {
    const date = new Date(dateString);
    console.log(date);
    return isNaN(date.getTime()) ? null : date; // Retorna null se a data for inválida
}
