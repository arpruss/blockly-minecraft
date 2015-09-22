Blockly.JavaScript.minecraft = function() {
  Blockly.JavaScript.definitions_['minecraft'] = '[[[file:mcinit.js]]]';
  Blockly.JavaScript.cleanups_['minecraft'] = '[[[file:mccleanup.js]]]';
};


Blockly.JavaScript['minecraft_set_block'] = function(block) {
  Blockly.JavaScript.minecraft();

  var dropdown_block = block.getFieldValue('block');
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'MCPI.setBlock('+value_x+','+value_y+','+value_z+',"'+dropdown_block+'");\n';
  return code;
};

Blockly.JavaScript['minecraft_turtle_go'] = function(block) {
  Blockly.JavaScript.minecraft();
  var value_distance = Blockly.JavaScript.valueToCode(block, 'DISTANCE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'MCPI.turtleGo('+value_distance+');\n';
  return code;
};

Blockly.JavaScript['minecraft_turtle_yaw'] = function(block) {
  Blockly.JavaScript.minecraft();
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var angle_angle = block.getFieldValue('ANGLE');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'MCPI.turtleYaw('+angle_angle+'*'+dropdown_direction+');\n';
  return code;
};

Blockly.JavaScript['minecraft_turtle_pitch'] = function(block) {
  Blockly.JavaScript.minecraft();
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var angle_angle = block.getFieldValue('ANGLE');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'MCPI.turtlePitch('+angle_angle+'*'+dropdown_direction+');\n';
  return code;
};

Blockly.JavaScript['minecraft_turtle_roll'] = function(block) {
  Blockly.JavaScript.minecraft();
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var angle_angle = block.getFieldValue('ANGLE');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'MCPI.turtleRoll('+angle_angle+'*'+dropdown_direction+');\n';
  return code;
};
