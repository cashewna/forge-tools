const originalXHR = XMLHttpRequest.prototype.open;

XMLHttpRequest.prototype.open = function(
    method: string,
    url: string,
    async: boolean = true,
    username?: string | null,
    password?: string | null
): void {
    const args: [string, string | URL, boolean, string | null | undefined, string | null | undefined] = [
        method,
        url,
        async,
        username,
        password
    ];
    console.log('Request method:', method);
    console.log('Request URL:', url);
    return originalXHR.apply(this, args);
}