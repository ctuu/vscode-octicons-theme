import path from 'path'
import { fileURLToPath } from 'url'

import { createIconTheme } from './template.mjs'

const root = path.join(fileURLToPath(import.meta.url), '../../')
const dist = path.join(root, 'dist')

const theme = createIconTheme(dist)

theme.hidesExplorerArrows = true

theme.file = theme.addIcon(path.join(root, 'icons/file.svg'))
theme.folder = theme.addIcon(path.join(root, 'icons/file-directory-fill.svg'))
theme.folderExpanded = theme.addIcon(path.join(root, 'icons/file-directory.svg'))

const fileMedia = theme.addIcon(path.join(root, 'icons/file-media.svg'))
const fileCode = theme.addIcon(path.join(root, 'icons/file-code.svg'))
const fileZip = theme.addIcon(path.join(root, 'icons/file-zip.svg'))
const fileBinary = theme.addIcon(path.join(root, 'icons/file-binary.svg'))

theme.associateWithExt(fileMedia, ['bmp', 'jpg', 'jpeg', 'gif', 'png', 'svg', 'tif'])

theme.associateWithExt(fileZip, ['zip', 'tar', 'tgz', 'gz', 'xz', 'bzip2', '7z', 'rar'])

theme.associateWithExt(fileBinary, ['exe', 'bin', 'o', 'dll', 'so', 'dylib'])

theme.associateWithExt(fileCode, ['c', 'h', 'hpp', 'hxx', 'hh', 'cpp', 'cc', 'cxx', 'd', 'di', 'js', 'mjs', 'html', 'htm', 'css', 'styl', 'sass', 'scss', 'less', 'cs', 'fs', 'go', 'lua', 'rs', 'py', 'ruo', 'rb', 'jl', 'php', 'java', 'ts', 'd.ts', 'vue', 'coffee', 'litcoffee', 'ex', 'exs', 'clj', 'jsx', 'gql', 'tsx', 'ss', 'scm', 'lisp', 'lsp', 'l', 'cl', 'fasl', 'el', 'elc', 'ptl', 'patel', 'hs', 'lhs', 'idr', 'v', 'ml', 'mli', 'mll', 'fst', 'sats', 'dats', 'pro', 'P', 'elm', 'purs', 'slim', 'skim', 'erl', 'swift', 'tex', 'vb', 'mk', 'make', 'jade', 'pug', 'scala', 'js.map', 'css.map', 'ps1', 'tests.ps1', 'test.ps1'])

theme.out('octicons-icon-theme.json')