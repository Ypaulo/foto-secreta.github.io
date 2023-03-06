<div>
<a href="#" onclick="getLocation()">Clique aqui para compartilhar sua localização</a>

<script>
function getLocation() 
 if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition)
  } else {
    alert("Geolocation is not supported by this browser.")
  }


function showPosition(position) 
  var textFile = null,
      makeTextFile = function (text) 
          var data = new Blob([text], {type ='text/plain'})

          // Cria um link para o arquivo e faz o download
          if (textFile !== null) {
              window.URL.revokeObjectURL(textFile)
          }

          textFile = window.URL.createObjectURL(data)

          var link = document.createElement('a')
          link.setAttribute('download', 'geolocation.txt')
          link.href = textFile;
          document.body.appendChild(link);

          // Clicka automaticamente no link para fazer o download
          link.click()
      
makeTextFile(position.coords.latitude + ", " + position.coords.longitude)

</script>
</div>