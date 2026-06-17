import { hasLocale } from "next-intl"
import { getRequestConfig } from "next-intl/server"

import { routing } from "./routing"

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale

    let locale = routing.defaultLocale
    if (hasLocale(routing.locales, requested)) {
        locale = requested
    }

    const { default: defaultMessages } = await import(`../messages/${locale}.json`)

    return {
        locale,
        messages: defaultMessages,
    }
})
