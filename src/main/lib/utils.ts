// === exports =======================================================

export { getProp, setProp, toCamelCase, toKebabCase }

// === utils =========================================================

function getProp(obj: object, name: string): any {
  return (obj as any)[name]
}

function setProp(obj: object, name: string, value: any) {
  ;(obj as any)[name] = value
}

function toCamelCase(s: string): string {
  return s
    .match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
    )!
    .map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
    .join('')
}

function toKebabCase(s: string): string {
  return s
    .match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
    )!
    .map((x) => x.toLowerCase())
    .join('-')
}
