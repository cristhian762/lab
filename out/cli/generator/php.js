import * as path from 'node:path';
import * as fs from 'node:fs';
import { expandToNode, toString } from 'langium/generate';
export default function generatePhpIni(data) {
    const dest = data.destination;
    const generatedFilePath = `${path.join(dest, 'php')}.ini`;
    const fileNode = expandToNode `
    extension=pdo_sqlite
    extension=sqlite3
    `.appendNewLineIfNotEmpty();
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    fs.writeFileSync(generatedFilePath, toString(fileNode));
}
//# sourceMappingURL=php.js.map