(function(define) {
  define(['jquery', 'underscore', 'tabletop'], function() {
    return {
      init: function() {
        var self = this;
        $('.sp-template').each(function() {
          self.dispatch(this);
        });
      },

      dispatch: function(el) {
        var $template = $(el);
        var id = $template.attr('data-sp-id'); if (!id) return;
        var targetId = $template.attr('data-sp-for'); if (!id) return;
        var $target = $(document.getElementById(targetId));
        var template = _.template($template.html());
        $template.remove();

        Tabletop.init({
          key: id,
          simpleSheet: true,
          callback: function(data, tabletop) {
            var sheet = tabletop.data()[0];
            $target.html(template(sheet));
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
