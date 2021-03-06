'use strict';
const utils = require('../index');

describe('main', () => {
  it('has all methods exported', () => {
    expect(Object.keys(utils)).toEqual([
      'createBoolean',
      'createColor',
      'createCTA',
      'createDate',
      'createDateTime',
      'createEnum',
      'createImage',
      'createLink',
      'createLinks',
      'createModularContent',
      'createNumber',
      'createSEO',
      'createSingleLine',
      'createSlug',
      'createTextArea',
      'createWysiwyg',
      'formatColor',
      'getAllModularBlocks',
      'updateModularContent',
      'uploadFile',
    ]);
  });
});
