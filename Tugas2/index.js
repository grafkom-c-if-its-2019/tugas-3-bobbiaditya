(function(global) {

  var canvas, gl, program,program2;

  glUtils.SL.init({ callback:function() { main(); } });

  function main() {
    // Register Callbacks
    window.addEventListener('resize', resizer);

    // Get canvas element and check if WebGL enabled
    canvas = document.getElementById("glcanvas");
    gl = glUtils.checkWebGL(canvas);

    // Initialize the shaders and program
    var vertexShader = glUtils.getShader(gl, gl.VERTEX_SHADER, glUtils.SL.Shaders.v1.vertex),
        vertexShader2 = glUtils.getShader(gl, gl.VERTEX_SHADER, glUtils.SL.Shaders.v2.vertex),
        fragmentShader = glUtils.getShader(gl, gl.FRAGMENT_SHADER, glUtils.SL.Shaders.v1.fragment);

   program = glUtils.createProgram(gl, vertexShader, fragmentShader);
   program2 = glUtils.createProgram(gl, vertexShader2, fragmentShader);



    
    resizer();
  

  // draw!

    //huruf b full garis
    // var pointsVertices = new Float32Array([
    //   -0.5, -0.5
    // ]);
    // var linesVertices1 = new Float32Array([ // bagian dalam
    //   -0.9, -0.5,   0.1765, 0.8157, 0.9255,
    //   -0.9 , 0.5,   0.1765, 0.8157, 0.9255,
    //   -0.9, -0.5,   0.1765, 0.8157, 0.9255,
    //   -0.73,-0.2,   0.1765, 0.8157, 0.9255,
    //   -0.73, -0.2,  0.1765, 0.8157, 0.9255,
    //   -0.86,  0.0,  0.1765, 0.8157, 0.9255,
    //   -0.86,  0.0,  0.1765, 0.8157, 0.9255,
    //   -0.73, 0.2,   0.1765, 0.8157, 0.9255,
    //   -0.73, 0.2,   0.1765, 0.8157, 0.9255,
    //   -0.9 , 0.5,   0.1765, 0.8157, 0.9255
      
    // ]);
    
    // var linesVertices2 = new Float32Array([ //bagian luar
    //   -0.95, -0.67,   0.1765, 0.8157, 0.9255,
    //   -0.95 , 0.67,   0.1765, 0.8157, 0.9255,
    //   -0.95, -0.67,   0.1765, 0.8157, 0.9255,
    //   -0.66,-0.20,    0.1765, 0.8157, 0.9255,
    //   -0.66, -0.20,   0.1765, 0.8157, 0.9255,
    //   -0.78,  0.0,    0.1765, 0.8157, 0.9255,
    //   -0.78,  0.0,    0.1765, 0.8157, 0.9255,
    //   -0.65, +0.2,    0.1765, 0.8157, 0.9255,
    //   -0.65, +0.2,    0.1765, 0.8157, 0.9255,
    //   -0.95, 0.67,    0.1765, 0.8157, 0.9255
    // ]);


    var vertices1 = [],
    vertices2 = [],
    vertices3 = [],
    vertices4 = [];
    //kosongan
    for (var x=0.0; x<=180; x+=1) {
      // degrees to radians
      var z = x * Math.PI / 180;
      var vert1 = [
        -0.85 + Math.sin(z)*0.1,
        -0.1 + Math.cos(z)*0.15,
        0.1765, 0.8157, 0.9255
      ];

      vertices1 = vertices1.concat(vert1);
    }

    var linesVertices3 = new Float32Array([ //bagian luar
      -0.90, 0.45,    0.1765, 0.8157, 0.9255,
      -0.90, 0.15,    0.1765, 0.8157, 0.9255,
      -0.90, 0.45,    0.1765, 0.8157, 0.9255,
      -0.85, 0.45,    0.1765, 0.8157, 0.9255,
      -0.90, 0.15,    0.1765, 0.8157, 0.9255,
      -0.85, 0.15,    0.1765, 0.8157, 0.9255,

      -0.90, 0.05,    0.1765, 0.8157, 0.9255,
      -0.90, -0.25,   0.1765, 0.8157, 0.9255,
      -0.90, 0.05,    0.1765, 0.8157, 0.9255,
      -0.85, 0.05,    0.1765, 0.8157, 0.9255,
      -0.90, -0.25,   0.1765, 0.8157, 0.9255,
      -0.85, -0.25,   0.1765, 0.8157, 0.9255
    ]);

    
    for (var x=0.0; x<=180; x+=1) {
      // degrees to radians
      var z = x * Math.PI / 180;

      var vert2 = [
        -0.85 + Math.sin(z)*0.1,
        0.3 + Math.cos(z)*0.15,
        0.1765, 0.8157, 0.9255
      ];
      vertices2 = vertices2.concat(vert2);
    }

    for (var x=0.0; x<=144; x+=1) {
      // degrees to radians
      var z = x * Math.PI / 180;

      var vert3 = [
        -0.85 + Math.sin(z)*0.2,
        0.3 + Math.cos(z)*0.25,
        0.1765, 0.8157, 0.9255
      ];
      vertices3 = vertices3.concat(vert3);
    }

    var linesVertices4 = new Float32Array([ //bagian luar
      -0.95,-0.35,   0.1765, 0.8157, 0.9255,
      -0.95, 0.55,   0.1765, 0.8157, 0.9255,
      -0.95, 0.55,   0.1765, 0.8157, 0.9255,
      -0.84, 0.55,  0.1765, 0.8157, 0.9255,
      -0.95 ,-0.35,  0.1765, 0.8157, 0.9255,
      -0.84, -0.35, 0.1765, 0.8157, 0.9255      
    ]);

    for (var x=36.0; x<=180; x+=1) {
      // degrees to radians
      var z = x * Math.PI / 180;

      var vert4 = [
        -0.85 + Math.sin(z)*0.2,
       -0.1 + Math.cos(z)*0.25,
        0.1765, 0.8157, 0.9255
      ];
      vertices4 = vertices4.concat(vert4);
    }

    var vertices5 = [],
    vertices6 = [],
    vertices7 = [],
    vertices8 = [];


    //adaisi
    //adaisi
    var linesVertices6 = new Float32Array([ //bagian luar
      0.45, 0.15,    0.1765, 0.8157, 0.9255,
      0.45, -0.15,   0.1765, 0.8157, 0.9255,
      0.45, 0.15,    0.1765, 0.8157, 0.9255,
      0.5, 0.15,     0.1765, 0.8157, 0.9255,
      0.45, -0.15,   0.1765, 0.8157, 0.9255,
      0.5, -0.15,    0.1765, 0.8157, 0.9255

    ]);
    var linesVertices7 = new Float32Array([
      0.45, 0.25,    0.1765, 0.8157, 0.9255,
      0.45,  0.55,   0.1765, 0.8157, 0.9255,
      0.45, 0.25,    0.1765, 0.8157, 0.9255,
      0.5, 0.25,     0.1765, 0.8157, 0.9255,
      0.45, 0.55,    0.1765, 0.8157, 0.9255,
      0.5, 0.55,     0.1765, 0.8157, 0.9255
    ]);

    for (var x=0.0; x<=180; x+=1) {
      // degrees to radians
      var z = x * Math.PI / 180;
      var vert5 = [
        0.5 + Math.sin(z)*0.1,
        0 + Math.cos(z)*0.15,
        0.1765, 0.8157, 0.9255
      ];
      var vert6 = [
        0.5 + Math.sin(z)*0.1,
        0.4 + Math.cos(z)*0.15,
        0.1765, 0.8157, 0.9255
      ];
      vertices5 = vertices5.concat(vert5);
      vertices6 = vertices6.concat(vert6);
    }

    //luar atas
    for (var x=0.0; x<=180; x+=1) {
      // degrees to radians
      var z = x * Math.PI / 180;
      var vert6 = [
        0.5 + Math.sin(z)*0.1,
        0.4 + Math.cos(z)*0.15,
        0.1765, 0.8157, 0.9255
      ];
      var vert7 = [
        0.5 + Math.sin(z)*0.2,
        0.4 + Math.cos(z)*0.25,
        0.0078, 0.2078, 0.3922,
      ];

      vertices7 = vertices7.concat(vert7);
      vertices7 = vertices7.concat(vert6);
    }

    //luar bawah
    for (var x=0.0; x<=180; x+=1) {
      // degrees to radians
      var z = x * Math.PI / 180;
      var vert5 = [
        0.5 + Math.sin(z)*0.1,
        0.0 + Math.cos(z)*0.15,
        0.1765, 0.8157, 0.9255
      ];
      var vert8 = [
       0.5 + Math.sin(z)*0.2,
       0 + Math.cos(z)*0.25,
       0.0078, 0.2078, 0.3922
      ];
      vertices8 = vertices8.concat(vert8);
      vertices8 = vertices8.concat(vert5);
    }

    var isian1 = new Float32Array([
      0.45, -0.25,     0.0078, 0.2078, 0.3922,
      0.45,  0.65,     0.1765, 0.8157, 0.9255,
      0.40,-0.25,      0.1765, 0.8157, 0.9255,
      0.40, 0.65,      0.0078, 0.2078, 0.3922
    ]);
    
    var isiatas = new Float32Array([
      0.45, 0.65,     0.1765, 0.8157, 0.9255,
      0.45, 0.55,     0.0078, 0.2078, 0.3922,
      0.50, 0.65,     0.1765, 0.8157, 0.9255,
      0.50, 0.55,     0.1765, 0.8157, 0.9255
    ]);

    var isitengah = new Float32Array([
      0.45, 0.15,     0.1765, 0.8157, 0.9255,
      0.45, 0.25,     0.0078, 0.2078, 0.3922,
      0.50, 0.15,     0.1765, 0.8157, 0.9255,
      0.50, 0.25,     0.0078, 0.2078, 0.3922
    ]);


    var isibawah = new Float32Array([
      0.45, -0.15,    0.1765, 0.8157, 0.9255,
      0.45, -0.25,    0.0078, 0.2078, 0.3922,
      0.50, -0.15,    0.1765, 0.8157, 0.9255,
      0.50, -0.25,    0.0078, 0.2078, 0.3922
    ])




    //huruf b dengan isian
    // drawCircle(gl.LINE_STRIP, vertices5);//dalam
    // drawCircle(gl.LINE_STRIP, vertices6);//dalam

    // drawA(gl.TRIANGLE_STRIP, isian1);//samping

    // drawA(gl.TRIANGLE_STRIP, isiatas);
    // drawA(gl.TRIANGLE_STRIP, isitengah);
    // drawA(gl.TRIANGLE_STRIP, isibawah);

    // drawCircle(gl.TRIANGLE_STRIP, vertices7);
    // drawCircle(gl.TRIANGLE_STRIP, vertices8);
    // drawA(gl.LINES, linesVertices6);
    // drawA(gl.LINES, linesVertices7);
    // drawA(gl.LINES, linesVertices3);
    // drawA(gl.LINES, linesVertices4);
  
  
    
  function drawShapes(type,vertices,n) {
    
    var vertexBufferObject = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBufferObject);
  
  var vPosition = gl.getAttribLocation(program, 'vPosition');
  var vColor = gl.getAttribLocation(program, 'vColor');
  gl.vertexAttribPointer(
    vPosition, //variabel pemegang posisi atribut di shader
    2,          // jumlah elemen per atribut
    gl.FLOAT,   // tipe data atribut
    gl.FALSE,   
    5 * Float32Array.BYTES_PER_ELEMENT, // ukuran byte tiap vertex
    0
  );
  gl.vertexAttribPointer(
    vColor, 
    3, 
    gl.FLOAT, 
    gl.FALSE, 
    5 * Float32Array.BYTES_PER_ELEMENT, 
    2 * Float32Array.BYTES_PER_ELEMENT
  );
  gl.enableVertexAttribArray(vPosition);
  gl.enableVertexAttribArray(vColor);

  var vPosition = gl.getAttribLocation(program, 'vPosition');
  var vColor = gl.getAttribLocation(program, 'vColor');
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  gl.drawArrays(type, 0, n);
  }

  var thetaLocation = gl.getUniformLocation(program, 'theta');
  var theta = 0.0;

  function render() {
    gl.useProgram(program);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    theta +=0.0099;
    gl.uniform1f(thetaLocation,theta);
  //huruf b dengan lingkaran

  drawShapes(gl.LINES, linesVertices3,12);
  drawShapes(gl.LINES, linesVertices4,6);
  drawShapes(gl.LINE_STRIP, vertices1,181);//dalam bawah
  drawShapes(gl.LINE_STRIP, vertices2,181);//dalam atas
  drawShapes(gl.LINE_STRIP, vertices3,145);//luar atas
  drawShapes(gl.LINE_STRIP, vertices4,144);//luarbawah
  requestAnimationFrame(render);
  }
  


//isi
  function drawShapes2(type,vertices,n) {
    
    var vertexBufferObject = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBufferObject);
  
  var vPosition = gl.getAttribLocation(program2, 'vPosition');
  var vColor = gl.getAttribLocation(program2, 'vColor');
  gl.vertexAttribPointer(
    vPosition, //variabel pemegang posisi atribut di shader
    2,          // jumlah elemen per atribut
    gl.FLOAT,   // tipe data atribut
    gl.FALSE,   
    5 * Float32Array.BYTES_PER_ELEMENT, // ukuran byte tiap vertex
    0
  );
  gl.vertexAttribPointer(
    vColor, 
    3, 
    gl.FLOAT, 
    gl.FALSE, 
    5 * Float32Array.BYTES_PER_ELEMENT, 
    2 * Float32Array.BYTES_PER_ELEMENT
  );
  gl.enableVertexAttribArray(vPosition);
  gl.enableVertexAttribArray(vColor);

  var vPosition = gl.getAttribLocation(program2, 'vPosition');
  var vColor = gl.getAttribLocation(program2, 'vColor');
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  gl.drawArrays(type, 0, n);
  }

  var scaleXLocation = gl.getUniformLocation(program2, 'scaleX');
  // var scaleYLocation = gl.getUniformLocation(program2, 'scaleY');
  var scaleX = 1.0;
  // var scaleY = 1.0;
  var melebar = 1;  

function render2(){

  gl.useProgram(program2);

  if (scaleX >= 1) melebar = -1;
  else if (scaleX <= -1) melebar = 1; 
  scaleX += 0.0099 * melebar;
  gl.uniform1f(scaleXLocation, scaleX);
  // gl.uniform1f(scaleYLocation, scaleY);

    //huruf b dengan isian
    drawShapes2(gl.LINE_STRIP, vertices5,180);//dalam
    drawShapes2(gl.LINE_STRIP, vertices6,180);//dalam

    drawShapes2(gl.TRIANGLE_STRIP, isian1,4);//samping

    drawShapes2(gl.TRIANGLE_STRIP, isiatas,4);
    drawShapes2(gl.TRIANGLE_STRIP, isitengah,4);
    drawShapes2(gl.TRIANGLE_STRIP, isibawah,4);

    drawShapes2(gl.TRIANGLE_STRIP, vertices7,360);
    drawShapes2(gl.TRIANGLE_STRIP, vertices8,362);
    // drawA(gl.LINES, linesVertices6);
    // drawA(gl.LINES, linesVertices7);
    // drawA(gl.LINES, linesVertices3);
    // drawA(gl.LINES, linesVertices4);

  requestAnimationFrame(render2);

} 
  render();
  render2();


}
  function resizer() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  }

})(window || this);