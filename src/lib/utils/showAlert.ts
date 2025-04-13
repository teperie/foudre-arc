export function showAlert(
    message: string,
    forceBrowserAlert: boolean = false,
): void {
    // 웹뷰 여부 판단
    if (!forceBrowserAlert && isAndroidWebView()) {
        window.Android?.showAlert(message)
    } else {
        alert(message)
    }
}

function isAndroidWebView(): boolean {
    const userAgent = navigator.userAgent
    return /Android/i.test(userAgent) && /wv/.test(userAgent)
}
