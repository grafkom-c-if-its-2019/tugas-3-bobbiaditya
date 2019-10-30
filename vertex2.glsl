precision mediump float;
attribute vec2 vPosition;
attribute vec3 vColor;
varying vec3 fColor;
uniform float scaleX;

void main() {
  fColor = vColor; 
  // vec2 TransformedPos  = vec2(vPosition.x - 0.5, vPosition.y + 0.5); 

  mat4 ScaleM = mat4(
      scaleX, 0.0, 0.0, 0.0,
      0.0, 1.0, 0.0, 0.0,
      0.0, 0.0, 1, 0.0,
      0.0, 0.0, 0.0, 1.0
  );
  gl_Position = (vec4(vPosition, 0.0, 1.0)-vec4(0.5,0,0,0)) * ScaleM +vec4(0.7,0,0,0);
}
