import { page } from "$app/state";

export function isActive(path: string) {
    return String(page.url.pathname) === path;
}
