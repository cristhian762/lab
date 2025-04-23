/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.CrudGeneratorValidator;
    const checks = {};
    registry.register(checks, validator);
}
/**
 * Implementation of custom validations.
 */
export class CrudGeneratorValidator {
}
//# sourceMappingURL=crud-generator-validator.js.map