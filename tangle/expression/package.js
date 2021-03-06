'use strict';

var Expression = require('./Expression');
var ExpressionComponent = require('./ExpressionComponent');
var ExpressionCommand = require('./ExpressionCommand');
var ExpressionTool = require('./ExpressionTool');
var EditExpressionTool = require('./EditExpressionTool');

module.exports = {
  name: 'expression',
  configure: function(config) {
    config.addNode(Expression);
    config.addComponent(Expression.static.name, ExpressionComponent);
    config.addCommand(ExpressionCommand);
    config.addTool(ExpressionTool);
    config.addIcon(ExpressionCommand.static.name, { 'fontawesome': 'fa-cube' });
    config.addTool(EditExpressionTool, { overlay: true });
    config.addIcon('edit-value', { 'fontawesome': 'fa-edit' });
    config.addIcon('confirm-value', { 'fontawesome': 'fa-check' });
    config.addIcon('drag-value', { 'fontawesome': ' fa-arrows-h' });
    config.addStyle(__dirname, '_expression.scss');
  }
};
