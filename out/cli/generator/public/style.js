import * as path from 'node:path';
import * as fs from 'node:fs';
import { expandToNode, toString } from 'langium/generate';
export default function generateStyle(data) {
    const dest = data.destination + `/public/assets`;
    const generatedFilePath = `${path.join(dest, 'style')}.css`;
    const fileNode = expandToNode `
    .center {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 100vw;
    }
    `.appendNewLineIfNotEmpty();
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    fs.writeFileSync(generatedFilePath, toString(fileNode));
}
//# sourceMappingURL=style.js.map