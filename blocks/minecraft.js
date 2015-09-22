Blockly.Blocks['minecraft_set_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Put");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["air", "0"], ["stone", "1"], ["grass", "2"]]), "block");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("at");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField(",");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField(",");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

