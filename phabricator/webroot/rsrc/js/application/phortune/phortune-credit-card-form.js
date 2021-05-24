/**
 * @provides phortune-credit-card-form
 * @requires javelin-install
 *           javelin-dom
 *           javelin-json
 *           javelin-workflow
 *           javelin-util
 * @javelin
 */

/**
 * Simple wrapper for credit card forms generated by `PhortuneCreditCardForm`.
 *
 * To construct an object for a form:
 *
 *   new JX.PhortuneCreditCardForm(form_root_node, submit_callback);
 *
 */
JX.install('PhortuneCreditCardForm', {
  construct : function(root, onsubmit) {
    this._root = root;
    this._submitCallback = onsubmit;
    JX.DOM.listen(root, 'submit', null, JX.bind(this, this._onsubmit));
  },

  members : {
    _root : null,
    _submitCallback : null,

    _getCardData : function() {
      var root = this._root;

      return {
        number : JX.DOM.find(root, 'input',  'number-input').value,
        cvc    : JX.DOM.find(root, 'input',  'cvc-input'   ).value,
        month  : JX.DOM.find(root, 'select', 'month-input' ).value,
        year   : JX.DOM.find(root, 'select', 'year-input'  ).value
      };
    },

    submitForm : function(errors, token) {
      var params = {
        errors: JX.JSON.stringify(errors),
        token: JX.JSON.stringify(token || {})
      };

      JX.Workflow
        .newFromForm(this._root, params)
        .start();
    },

    _onsubmit : function(e) {
      e.kill();
      this._submitCallback(this._getCardData());
    }

  }

});
