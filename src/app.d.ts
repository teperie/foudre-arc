// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }
    // window 객체 확장
    interface AndroidInterface {
        showAlert: (message: string) => void
    }

    interface Window {
        Android?: AndroidInterface
    }
}

export {}
