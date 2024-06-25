import {makeProject} from '@motion-canvas/core';
import foreach_instead_of_map from './scenes/foreach_instead_of_map?scene';
import map_instead_of_push from './scenes/map_instead_of_push?scene';

import {Code, LezerHighlighter} from '@motion-canvas/2d';
import {parser} from '@lezer/javascript';

Code.defaultHighlighter = new LezerHighlighter(
  parser.configure({
    // Provide a space-separated list of dialects to enable:
    dialect: 'jsx ts',
  }),
);

export default makeProject({
  scenes: [
    foreach_instead_of_map,
    map_instead_of_push,
  ],
});
