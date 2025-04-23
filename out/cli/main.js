import chalk from 'chalk';
import { Command } from 'commander';
import { CrudGeneratorLanguageMetaData } from '../language/generated/module.js';
import { createCrudGeneratorServices } from '../language/crud-generator-module.js';
import { extractAstNode } from './cli-util.js';
import { generatePhp } from './generator.js';
import { NodeFileSystem } from 'langium/node';
import * as url from 'node:url';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const packagePath = path.resolve(__dirname, '..', '..', 'package.json');
const packageContent = await fs.readFile(packagePath, 'utf-8');
export const generateAction = async (fileName, opts) => {
    const services = createCrudGeneratorServices(NodeFileSystem).CrudGenerator;
    const model = await extractAstNode(fileName, services);
    const generatedFilePath = generatePhp(model, fileName, opts.destination);
    console.log(chalk.green(`PHP code generated successfully: ${generatedFilePath}`));
};
export default function () {
    const program = new Command();
    program.version(JSON.parse(packageContent).version);
    const fileExtensions = CrudGeneratorLanguageMetaData.fileExtensions.join(', ');
    program
        .command('generate')
        .argument('<file>', `source file (possible file extensions: ${fileExtensions})`)
        .option('-d, --destination <dir>', 'destination directory of generating')
        .action(generateAction);
    program.parse(process.argv);
}
//# sourceMappingURL=main.js.map