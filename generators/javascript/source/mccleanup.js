MCPI.socket.close();
}; // end MCPI.socket.onmessage for player.getRotation()
MCPI.socket.send("player.getRotation()");
}; // end MCPI.socket.onmessage for player.getPos()
MCPI.socket.send("player.getPos()");
}; // end MCPI.socket.onopen
