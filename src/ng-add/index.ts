import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics'

export default function(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    console.log('hello from ng add test :)')
    return tree
  }
}
