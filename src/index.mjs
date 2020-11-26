import path from 'path'
import { fileURLToPath } from 'url'

import { createIconTheme } from './template.mjs'

const root = path.join(fileURLToPath(import.meta.url), '../../')
const dist = path.join(root, 'dist')

const theme = createIconTheme(dist)

theme.hidesExplorerArrows = true

theme.file = theme.addIcon(path.join(root, 'icons/dark/file.svg'), 'dark')
theme.folder = theme.addIcon(path.join(root, 'icons/dark/file-directory-fill.svg'), 'dark')
theme.folderExpanded = theme.addIcon(path.join(root, 'icons/dark/file-directory.svg'), 'dark')

theme.light.file = theme.addIcon(path.join(root, 'icons/light/file.svg'), 'light')
theme.light.folder = theme.addIcon(path.join(root, 'icons/light/file-directory-fill.svg'), 'light')
theme.light.folderExpanded = theme.addIcon(path.join(root, 'icons/light/file-directory.svg'), 'light')

function createAssociateEasy(file, exts) {
    const dark = theme.addIcon(path.join(root, `icons/dark/${file}`), 'dark')
    const light = theme.addIcon(path.join(root, `icons/light/${file}`), 'light')
    theme.associateWithExt(dark, light, exts)
}

createAssociateEasy('file-media.svg', ['bmp', 'jpg', 'jpeg', 'gif', 'png', 'svg', 'tif'])
createAssociateEasy('file-code.svg', ['c', 'h', 'hpp', 'hxx', 'hh', 'cpp', 'cc', 'cxx', 'd', 'di', 'js', 'mjs', 'html', 'htm', 'css', 'styl', 'sass', 'scss', 'less', 'cs', 'fs', 'go', 'lua', 'rs', 'py', 'ruo', 'rb', 'jl', 'php', 'java', 'ts', 'd.ts', 'vue', 'coffee', 'litcoffee', 'ex', 'exs', 'clj', 'jsx', 'gql', 'tsx', 'ss', 'scm', 'lisp', 'lsp', 'l', 'cl', 'fasl', 'el', 'elc', 'ptl', 'patel', 'hs', 'lhs', 'idr', 'v', 'ml', 'mli', 'mll', 'fst', 'sats', 'dats', 'pro', 'P', 'elm', 'purs', 'slim', 'skim', 'erl', 'swift', 'tex', 'vb', 'mk', 'make', 'jade', 'pug', 'scala', 'js.map', 'css.map', 'ps1', 'tests.ps1', 'test.ps1'])
createAssociateEasy('file-zip.svg', ['zip', 'tar', 'tgz', 'gz', 'xz', 'bzip2', '7z', 'rar'])
createAssociateEasy('file-binary.svg', ['exe', 'bin', 'o', 'dll', 'so', 'dylib'])

theme.out('octicons-icon-theme.json')