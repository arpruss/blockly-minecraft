Blockly.Python.minecraft = function() {
  Blockly.Python.definitions_['import_minecraft'] = "from mcturtle import *\n"+
                                                  "MCTURTLE = Turtle()\n";
}

Blockly.Python['minecraft_set_block'] = function(block) {
  Blockly.Python.minecraft();

  var dropdown_block = block.getFieldValue('BLOCK');
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var value_z = Blockly.Python.valueToCode(block, 'z', Blockly.Python.ORDER_ATOMIC);
  var code = 'MCTURTLE.mc.world.setBlock('+value_x+','+value_y+','+value_z+',"'+dropdown_block+'")\n';
  return code;
};

Blockly.Python['minecraft_turtle_go'] = function(block) {
  Blockly.Python.minecraft();
  var value_distance = Blockly.Python.valueToCode(block, 'DISTANCE', Blockly.Python.ORDER_ATOMIC);
  var code = 'MCTURTLE.go('+value_distance+')\n';
  return code;
};

Blockly.Python['minecraft_post_to_chat'] = function(block) {
  Blockly.Python.minecraft();
  var value_message = Blockly.Python.valueToCode(block, 'MESSAGE', Blockly.Python.ORDER_ATOMIC);
  var code = 'MCTURTLE.mc.postToChat('+value_message+')\n';
  return code;
};

Blockly.Python['minecraft_turtle_yaw'] = function(block) {
  Blockly.Python.minecraft();
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var value_angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC);
  if (dropdown_direction == '1') {
    var code = 'MCTURTLE.yaw('+value_angle+')\n';
  }
  else {
    var code = 'MCTURTLE.yaw(-('+value_angle+'))\n';
  }
  return code;
};

Blockly.Python['minecraft_turtle_pitch'] = function(block) {
  Blockly.Python.minecraft();
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var value_angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC);
  if (dropdown_direction == '1') {
    var code = 'MCTURTLE.pitch('+value_angle+')\n';
  }
  else {
    var code = 'MCTURTLE.pitch(-('+value_angle+'))\n';
  }
  return code;
};

Blockly.Python['minecraft_turtle_roll'] = function(block) {
  Blockly.Python.minecraft();
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var value_angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC);
  if (dropdown_direction == '1') {
    var code = 'MCTURTLE.roll('+value_angle+')\n';
  }
  else {
    var code = 'MCTURTLE.roll(-('+value_angle+'))\n';
  }
  return code;
};

Blockly.Python['minecraft_turtle_set_pen'] = function(block) {
  Blockly.Python.minecraft();
  var value_width = Blockly.Python.valueToCode(block, 'WIDTH', Blockly.Python.ORDER_ATOMIC);
  var dropdown_block = block.getFieldValue('BLOCK');
  var code = 'MCTURTLE.penwidth('+value_width+')\n'+'MCTURTLE.setblock(Block('+dropdown_block+'))\n';
  return code;
};

Blockly.Python['minecraft_turtle_pen'] = function(block) {
  Blockly.Python.minecraft();
  var dropdown_mode = block.getFieldValue('MODE');
  if (parseInt(dropdown_mode)) {
    var code = 'MCTURTLE.pendown()';
  }
  else {
    var code = 'MCTURTLE.penup()';
  }
  return code;
};
