import fs from 'fs'
import path from 'path'

export function createIconTheme(dist) {
    const theme = {
        iconDefinitions: {},
        fileExtensions: {},
        light: {
            fileExtensions: {}
        },

        addIcon(iconPath, suffix = 'default') {
            const basename = path.basename(iconPath).replaceAll('-', '_').replace(path.extname(iconPath), '')
            const id = `_${basename}_${suffix}`
            this.iconDefinitions[id] = {
                iconPath: path.relative(dist, iconPath)
            }
            return id
        },

        associateWithExt(dark_id, light_id, exts) {
            exts.forEach(ext => {
                this.fileExtensions[ext] = dark_id
                if (light_id) this.light.fileExtensions[ext] = light_id
            })
        },

        out(filename) {
            if (!fs.existsSync(dist)) fs.mkdirSync(dist)
            fs.writeFileSync(path.join(dist, filename), JSON.stringify(this, null, 4))
        }
    }

    return theme
}