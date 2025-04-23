import create from "./create.js";
import destroy from "./delete.js";
import edit from "./edit.js";
export default function generatePublic(name, fields, data) {
    create(name, fields, data);
    edit(name, fields, data);
    destroy(name, data);
}
//# sourceMappingURL=generate.js.map