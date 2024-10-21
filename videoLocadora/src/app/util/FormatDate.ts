export function ToISOFormat(dateString: string): Date | null {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? null : date; // Retorna null se a data for inválida
}

export function ToDateString(date: Date): string {
    return date.toISOString().split('T')[0]; // Retorna apenas 'yyyy-MM-dd'
}

export function ToDateStringBR(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`; // Retorna 'dd-MM-aaaa'
}

export function ParseDate(dateString: string): Date | null {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? null : date; // Retorna null se a data for inválida
}