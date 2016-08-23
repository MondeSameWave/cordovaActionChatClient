import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('keyboard-status', 'Integration | Component | keyboard status', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{keyboard-status}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#keyboard-status}}
      template block text
    {{/keyboard-status}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
