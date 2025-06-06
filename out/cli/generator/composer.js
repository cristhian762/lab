import * as path from 'node:path';
import * as fs from 'node:fs';
import { expandToNode, toString } from 'langium/generate';
export default function generateComposer(data) {
    const dest = data.destination;
    const generatedFilePath = `${path.join(dest, 'composer')}.json`;
    const fileNode = expandToNode `
    {
      "name": "developer/php",
      "autoload": {
        "psr-4": {
          "App\\\\": "src/"
        }
      },
      "authors": [
        {
          "name": "Laboratório de Pesquisa e Extensão"
        }
      ],
      "require": {}
    }
    `.appendNewLineIfNotEmpty();
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    fs.writeFileSync(generatedFilePath, toString(fileNode));
}
//# sourceMappingURL=composer.js.map