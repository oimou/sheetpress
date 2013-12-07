(function(define) {
  define(['jquery', 'tabletop'], function() {
    return {
      init: function() {
        var self = this;
        $('.sp-template').each(function() {
          var id = $(this).attr('data-sp-id'); if (!id) return;
          var targetId = $(this).attr('data-sp-for'); if (!id) return;
          var $target = $(document.getElementById(targetId));

          self.dispatch($(this), $target, id);
        });
      },

      dispatch: function($el, $target, id) {
        Tabletop.init({
          key: id,
          callback: function(data, tabletop) {
            $target.html(JSON.stringify(data));
          }
        });
      }
    };
  });
})(
  typeof define !== 'undefined' ?
  define :
  typeof module !== 'undefined' ?
  function(deps, factory) { module.exports = factory(); } :
  function(deps, factory) { this['SheetPress'] = factory(); }
);
