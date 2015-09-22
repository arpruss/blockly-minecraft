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
    this.setColour(164);
    this.setTooltip('');
    this.setHelpUrl('github.com/arpruss/raspberryjammod');
  }
};

Blockly.Blocks['minecraft_turtle_go'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turtle forward");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("0", Blockly.FieldTextInput.nonnegativeIntegerValidator), "DISTANCE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(164);
    this.setTooltip('');
    this.setHelpUrl('github.com/arpruss/raspberryjammod');
  }
};

Blockly.Blocks['minecraft_turtle_yaw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turtle turn");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["left \u27F2", "-1"], ["right \u27F3", "1"]]), "DIRECTION");
    this.appendDummyInput("NAME")
        .appendField(new Blockly.FieldAngle("90"), "ANGLE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(164);
    this.setTooltip('');
    this.setHelpUrl('github.com/arpruss/raspberryjammod');
  }
};

Blockly.Blocks['minecraft_turtle_pitch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turtle pitch");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["down", "-1"], ["up", "1"]]), "DIRECTION");
    this.appendDummyInput("NAME")
        .appendField(new Blockly.FieldAngle("90"), "ANGLE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(164);
    this.setTooltip('');
    this.setHelpUrl('github.com/arpruss/raspberryjammod');
  }
};

Blockly.Blocks['minecraft_turtle_roll'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turtle roll");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["left \u27F2", "-1"], ["right \u27F3", "1"]]), "DIRECTION");
    this.appendDummyInput("NAME")
        .appendField(new Blockly.FieldAngle("90"), "ANGLE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(164);
    this.setTooltip('');
    this.setHelpUrl('github.com/arpruss/raspberryjammod');
  }
};

Blockly.Blocks['minecraft_turtle_set_pen'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set pen width to");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("1", Blockly.FieldTextInput.nonnegativeIntegerValidator), "WIDTH");
    this.appendDummyInput()
        .appendField("and block to");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["air", "0"], ["stone", "1"], ["grass", "2"]]), "BLOCK");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(164);
    this.setTooltip('');
    this.setHelpUrl('github.com/arpruss/raspberryjammod');
  }
};

Blockly.Blocks['minecraft_turtle_pen_up'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turtle pen up");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(164);
    this.setTooltip('');
    this.setHelpUrl('github.com/arpruss/raspberryjammod');
  }
};

Blockly.Blocks['minecraft_turtle_pen_down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turtle pen down");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(164);
    this.setTooltip('');
    this.setHelpUrl('github.com/arpruss/raspberryjammod');
  }
};
