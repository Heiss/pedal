import fs from 'fs'
import path from 'path'
import Gettext from 'node-gettext'
import { po } from 'gettext-parser'

const locale = {
    translationsDir: 'l10n',
    locales: ['en', 'de'],
    domain: "messages"
};

const gt = new Gettext()

locale.locales.forEach((locale) => {
    const fileName = `${locale.domain}.po`
    const translationsFilePath = path.join(locale.translationsDir, locale, fileName)
    const translationsContent = fs.readFileSync(translationsFilePath)

    const parsedTranslations = po.parse(translationsContent)
    gt.addTranslations(locale, locale.domain, parsedTranslations)
})

export default gt;