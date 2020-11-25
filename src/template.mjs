import fs from 'fs'
import path from 'path'

export function createIconTheme(dist) {
    const theme = {
        iconDefinitions: {},
        fileExtensions: {},

        addIcon(iconPath) {
            const basename = path.basename(iconPath).replaceAll('-', '_').replace(path.extname(iconPath), '')
            const id = `_${basename}`
            this.iconDefinitions[id] = {
                iconPath: path.relative(dist, iconPath)
            }
            return id
        },

        associateWithExt(id, exts) {
            exts.forEach(ext => this.fileExtensions[ext] = id)
        },

        out(filename) {
            if (!fs.existsSync(dist)) fs.mkdirSync(dist)
            fs.writeFileSync(path.join(dist, filename), JSON.stringify(this, null, 4))
        }
    }

    return theme
}