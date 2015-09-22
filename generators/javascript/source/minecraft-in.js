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
  var code = 'MCPI.setBlock('+value_x+','+value_y+','+value_z+',"'+dropdown_block+'");\n';
  return code;
};

Blockly.JavaScript['minecraft_turtle_go'] = function(block) {
  Blockly.JavaScript.minecraft();
  var text_distance = parseFloat(block.getFieldValue('DISTANCE'));
  var code = 'MCPI.turtleGo('+text_distance+');\n';
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

Blockly.JavaScript['minecraft_turtle_set_pen'] = function(block) {
  Blockly.JavaScript.minecraft();
  var text_width = parseFloat(block.getFieldValue('WIDTH'));
  var dropdown_block = block.getFieldValue('BLOCK');
  var code = 'MCPI.turtleSetWidth('+text_width+');\n'+
      'MCPI.block = "'+dropdown_block+'";\n';
  return code;
};

Blockly.JavaScript['minecraft_turtle_pen_up'] = function(block) {
  Blockly.JavaScript.minecraft();
  var code = 'MCPI.penDown = false;\n';
  return code;
};

Blockly.JavaScript['minecraft_turtle_pen_down'] = function(block) {
  Blockly.JavaScript.minecraft();
  var code = 'MCPI.penDown = false;\n';
  return code;
};
