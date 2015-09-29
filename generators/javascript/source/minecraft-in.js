Blockly.JavaScript.minecraft = function() {
  Blockly.JavaScript.definitions_['minecraft'] = '[[[file:mcinit.js]]]';
  Blockly.JavaScript.cleanups_['minecraft'] = '[[[file:mccleanup.js]]]';
};

Blockly.JavaScript['minecraft_set_block'] = function(block) {
  Blockly.JavaScript.minecraft();

  var dropdown_block = block.getFieldValue('BLOCK');
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ADDITION);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ADDITION);
  var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ADDITION);
  var code = 'MCPI.setBlock('+value_x+'+MCPI.playerX,'+value_y+'+MCPI.playerY,'+value_z+'+MCPI.playerZ,"'+dropdown_block+'");\n';
  return code;
};

Blockly.JavaScript['minecraft_turtle_go'] = function(block) {
  Blockly.JavaScript.minecraft();
  var value_distance = Blockly.JavaScript.valueToCode(block, 'DISTANCE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'MCPI.turtleGo('+value_distance+');\n';
  return code;
};

Blockly.JavaScript['minecraft_post_to_chat'] = function(block) {
  Blockly.JavaScript.minecraft();
  var value_message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'MCPI.postToChat('+value_message+');\n';
  return code;
};

Blockly.JavaScript['minecraft_turtle_yaw'] = function(block) {
  Blockly.JavaScript.minecraft();
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var value_angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_MULTIPLICATION);
  var code = 'MCPI.turtleYaw('+value_angle+'*'+dropdown_direction+');\n';
  return code;
};

Blockly.JavaScript['minecraft_turtle_pitch'] = function(block) {
  Blockly.JavaScript.minecraft();
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var value_angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_MULTIPLICATION);
  var code = 'MCPI.turtlePitch('+value_angle+'*'+dropdown_direction+');\n';
  return code;
};

Blockly.JavaScript['minecraft_turtle_roll'] = function(block) {
  Blockly.JavaScript.minecraft();
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var value_angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_MULTIPLICATION);
  var code = 'MCPI.turtleRoll('+value_angle+'*'+dropdown_direction+');\n';
  return code;
};

Blockly.JavaScript['minecraft_turtle_pen_block'] = function(block) {
  Blockly.JavaScript.minecraft();
  var dropdown_block = block.getFieldValue('BLOCK');
  var code = 'MCPI.block = "'+dropdown_block+'";\n';
  return code;
};

Blockly.JavaScript['minecraft_turtle_pen_width'] = function(block) {
  Blockly.JavaScript.minecraft();
  var value_width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'MCPI.turtleSetWidth('+value_width+');\n';
  return code;
};

Blockly.JavaScript['minecraft_turtle_pen'] = function(block) {
  Blockly.JavaScript.minecraft();
  var dropdown_mode = block.getFieldValue('MODE');
  var code = 'MCPI.penDown = '+Boolean(parseInt(dropdown_mode))+';\n';
  return code;
};
