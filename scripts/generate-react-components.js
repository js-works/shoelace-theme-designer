const fs = require('fs')
const path = require('path')

const metaFile = path.join(
  __dirname,
  '../node_modules/@shoelace-style/shoelace/dist/metadata.json'
)

const outputFile = path.join(
  __dirname,
  '../src/main/components/shoelace/generated-react-components.ts'
)

const meta = JSON.parse(fs.readFileSync(metaFile))

const dataMap = new Map()
const tags = meta.components.map(({ tag }) => tag).sort()

meta.components.forEach(({ tag, className, dependencies, props, methods }) => {
  const depsSet = new Set([...dependencies].sort())

  dataMap.set(tag, {
    className,
    props: props.map((it) => it.name).sort(),
    methods: methods.map((it) => it.name).sort(),
    depsSet
  })
})

tags.forEach((tag) => {
  const depsSet = dataMap.get(tag).depsSet

  if (depsSet.size > 0) {
    while (true) {
      const oldSize = depsSet.size
      let depsSet2

      for (const dep of depsSet) {
        depsSet2 = dataMap.get(dep).depsSet

        for (const dep2 of depsSet2) {
          depsSet.add(dep2)
        }
      }

      if (oldSize === depsSet.size) {
        break
      }
    }

    const arr = [...depsSet].sort()
    depsSet.clear()
    arr.forEach((it) => depsSet.add(it))
  }
})

const lines = [
  '/* =============================================================== *',
  " *  Important: This file is auto-generated - please don't edit it  *",
  ' * =============================================================== */',
  '',
  `// generated ${new Date().toISOString()}`,
  '',
  "import { HTMLAttributes, Ref } from 'react';",
  "import { asComponent } from './react-wrapper';",
  ''
]

for (const tag of tags) {
  const { className } = dataMap.get(tag)
  const name = tag.substr(3)

  lines.push(
    `import ${className} from '@shoelace-style/shoelace/dist/components/${name}/${name}.js';`
  )
}

lines.push('')

for (const tag of tags) {
  const { className, depsSet, props, methods } = dataMap.get(tag)
  const name = className.substr(2)
  const propsTypeString = props.length === 0 ? '{}' : `${name}Props`
  const elementTypeString = `${name}Element`

  const depsInfo = [...depsSet]
    .map((it) => dataMap.get(it).className)
    .join(', ')

  if (props.length > 0) {
    lines.push(
      `export type ${name}Props = HTMLAttributes<any> & Pick<${className}, '${props.join(
        "' | '"
      )}'>;`
    )
  } else {
    lines.push(`export type ${name}Props = HTMLAttributes<any>;`)
  }

  if (methods.length > 0) {
    lines.push(
      `export type ${name}Element = ${name}Props & Pick<${className}, '${methods.join(
        "' | '"
      )}'>;`
    )
  } else {
    lines.push(`export type ${name}Element = ${name}Props;`)
  }

  lines.push(
    `export const ${name} = asComponent<${className}, ${elementTypeString}, ${propsTypeString}>('${tag}', ${className}, [${depsInfo}]);`
  )

  lines.push('')
}

lines.push('')

fs.writeFileSync(outputFile, lines.join('\n'))
