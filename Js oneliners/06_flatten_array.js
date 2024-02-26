const flattenArray = (arr) => [].concat.apply(
    [],
    arr.map((a) => (Array.isArray(a) ? flattenArray(a) : a))
)
console.log(flattenArray(['male', ['child', ['children']], ['female']]));