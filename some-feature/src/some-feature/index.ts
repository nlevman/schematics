import {
  chain, Rule, apply, url, template,
  branchAndMerge, mergeWith,
} from '@angular-devkit/schematics';
import { schemaOptions } from './schema';
import { normalize } from '@angular-devkit/core';
import { classify, dasherize, camelize, underscore } from '@angular-devkit/core/src/utils/strings';

const stringUtils = {classify, dasherize, camelize, underscore };

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function someFeature(options: schemaOptions): Rule {
  options.path = options.path ? normalize(options.path) : options.path;

  const templateSource = apply(url('./files'), [
    template({
      ...stringUtils,
      ...options,
    }),
  ]);
  return chain([
    branchAndMerge(chain([
      mergeWith(templateSource),
    ])),
  ]);
}
