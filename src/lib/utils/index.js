export * from "./files";
export * from "./format";
export * from "./math";
export * from "./transitions";

/**
 * Return whether the variable is neither null nor undefined
 * @param {object} variable
 */
export function isNotNullNorUndefined(variable) {
  return typeof variable !== "undefined" && variable !== null;
}
