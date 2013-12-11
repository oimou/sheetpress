
require.config({
  paths: {
    'tabletop': '/lib/tabletop/src/tabletop',
    'underscore': '/lib/underscore/underscore',
    'jquery': '/lib/jquery/jquery',
    'sheetpress': '/js/sheetpress'
  },

  shim: {
    'sheetpress': ['jquery', 'underscore', 'tabletop']
  }
});
