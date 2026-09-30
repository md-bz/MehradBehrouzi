import { load as i18nLoad } from "$lib/translations";
import type { LayoutLoad } from "./$types";

// an arrow so kit's generated proxy types the event from LayoutLoad: that is
// what gives `data` the server load's session/lang/theme, not i18n's overload
export const load: LayoutLoad = (event) => i18nLoad(event);
