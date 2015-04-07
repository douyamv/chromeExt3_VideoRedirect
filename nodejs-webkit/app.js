var http = require('http');
var serverPort = 8123;
http.createServer(function (request, response) {
	console.log(" response: "+response.toLocaleString);
  if(request.method === "GET") {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end("ZTE_NJUST_Desktop is running");
  } 
  else if(request.method === "POST") {
    if (request.url === "/") {
      var requestBody = '';
      request.on('data', function(data) {
        requestBody += data;
        if(requestBody.length > 1e7) {
          response.writeHead(413, 'Request Entity Too Large', {'Content-Type': 'text/html'});
          response.end('<!doctype html><html><head><title>413</title></head><body>413: Request Entity Too Large</body></html>');
        }
      });
      request.on('end', function() {
      	var html = requestBody;
          var substr = "controlPosition";
          if(html.indexOf(substr) <= 0 )
          {
                //包含的只有视频信息
              document.getElementById("zte_container").innerHTML = html;
          }
          else{
              document.getElementById("control_container").innerHTML = html;
          }

          console.error("\n\nget player  ok!");
          console.error(html);
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end('object html received');

          var playerLeft=$("#controlPosition").attr("playerLeft");
          var playerTop=$("#controlPosition").attr("playerTop");
          var playerWidth=$("#controlPosition").attr("playerWidth");
          var playerHeight=$("#controlPosition").attr("playerHeight");
         // console.log("left:  "+$("#control").attr("leftposition"));
         // console.log("value:  "+$("#control").attr("leftposition"));

          console.error("playerLeft: "+playerLeft+"  playerTop: "+playerTop+"  playerWidth: "+playerWidth+"  playerHeight: "+playerHeight);

          window.resizeTo(playerWidth,playerHeight);
         // window.moveTo(playerLeft,playerTop);
          window.moveTo(1000,1000);
      });
    } else {
      response.writeHead(404, 'Resource Not Found', {'Content-Type': 'text/html'});
      response.end('<!doctype html><html><head><title>404</title></head><body>404: Resource Not Found</body></html>');
    }
  } else {
    response.writeHead(405, 'Method Not Supported', {'Content-Type': 'text/html'});
    return response.end('<!doctype html><html><head><title>405</title></head><body>405: Method Not Supported</body></html>');
  }

  

}).listen(serverPort);
console.log('Server running at localhost:'+serverPort);


