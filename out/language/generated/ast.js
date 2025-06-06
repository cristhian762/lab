/******************************************************************************
 * This file was generated by langium-cli 3.4.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/
import { AbstractAstReflection } from 'langium';
export const CrudGeneratorTerminals = {
    WS: /\s+/,
    ID: /[_a-zA-Z][\w_]*/,
    ML_COMMENT: /\/\*[\s\S]*?\*\//,
    SL_COMMENT: /\/\/[^\n\r]*/,
};
export const Entity = 'Entity';
export function isEntity(item) {
    return reflection.isInstance(item, Entity);
}
export const Field = 'Field';
export function isField(item) {
    return reflection.isInstance(item, Field);
}
export const Model = 'Model';
export function isModel(item) {
    return reflection.isInstance(item, Model);
}
export class CrudGeneratorAstReflection extends AbstractAstReflection {
    getAllTypes() {
        return [Entity, Field, Model];
    }
    computeIsSubtype(subtype, supertype) {
        switch (subtype) {
            default: {
                return false;
            }
        }
    }
    getReferenceType(refInfo) {
        const referenceId = `${refInfo.container.$type}:${refInfo.property}`;
        switch (referenceId) {
            default: {
                throw new Error(`${referenceId} is not a valid reference id.`);
            }
        }
    }
    getTypeMetaData(type) {
        switch (type) {
            case Entity: {
                return {
                    name: Entity,
                    properties: [
                        { name: 'fields', defaultValue: [] },
                        { name: 'name' }
                    ]
                };
            }
            case Field: {
                return {
                    name: Field,
                    properties: [
                        { name: 'name' },
                        { name: 'type' }
                    ]
                };
            }
            case Model: {
                return {
                    name: Model,
                    properties: [
                        { name: 'entities', defaultValue: [] }
                    ]
                };
            }
            default: {
                return {
                    name: type,
                    properties: []
                };
            }
        }
    }
}
export const reflection = new CrudGeneratorAstReflection();
//# sourceMappingURL=ast.js.map