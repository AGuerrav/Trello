document.getElementById('boton1').addEventListener('click', function () {
  //elimino mi boton
  var padre = document.getElementById('padreBoton');
  var boton = document.getElementById('boton1');
  padre.removeChild(boton);

  //creo mi div contenedor de mi imput + boton + icono
  var divcontenedor1 = document.createElement('div');
  divcontenedor1.classList.add('class', 'divcontenedor1')
  //creo mi imput y le doy atributos
  var input1 = document.createElement('input');
  input1.setAttribute('type', 'text');
  input1.setAttribute('placeholder', 'Añadir una lista...');
  input1.classList.add('class', 'input1');
  input1.value;
  //creo mi boton que guarda la info del formulario
  var boton2 =document.createElement('button');
  var textBoton2= document.createTextNode('Guardar');
  boton2.classList.add('class', 'guardarLista')
  //creo la "x" que va al lado del boton guardar y le doy atributos y clase
  var equis =document.createElement('i');
  equis.setAttribute('aria-hidden', 'true');
  equis.classList.add('class','fa', 'fa-times');


  //asigno padre a lo creado
  padre.appendChild(divcontenedor1);
  divcontenedor1.appendChild(input1);
  divcontenedor1.appendChild(boton2);
  divcontenedor1.appendChild(equis);
  boton2.appendChild(textBoton2);

    //guardo lo que escribio el usuario para usarlo luego
  boton2.addEventListener('click',function(){
    var nombreLista = document.getElementsByClassName('input1')[0].value;
    document.getElementsByClassName('input1')[0].value = "";
    //console.log(nombreLista);
      //creo mi segundo div contenedor
    var divcontenedor2 = document.createElement('div');
    divcontenedor2.classList.add('class', 'divcontenedor2')

    //creo mi titulo con la info ingresada
    var titulo = document.createElement('h2');
    titulo.classList.add('class', 'titulo')
    var textTitulo= document.createTextNode(nombreLista)

      //creo link "Añadir una tarjeta"
    var linkAñadirTarj = document.createElement('a')
    linkAñadirTarj.setAttribute('href', '#');
    linkAñadirTarj.classList.add('class', 'aAñadirtarj');
    var textAñadirTarj = document.createTextNode('Añadir una tarjeta...');
    //asigno padres a lo creado
    padre.appendChild(divcontenedor2);
    divcontenedor2.appendChild(titulo);
    titulo.appendChild(textTitulo);
    divcontenedor2.appendChild(linkAñadirTarj);
    linkAñadirTarj.appendChild(textAñadirTarj);
    //para que se despliegue textarea en click link
    linkAñadirTarj.addEventListener('click',function(){
      divcontenedor2.removeChild(linkAñadirTarj);

      //creo textarea
      var textarea = document.createElement('textarea');
      textarea.setAttribute('rows', '')
      textarea.setAttribute('cols', '')

      textarea.classList.add('class', 'textarea');
      //creo boton Añadir
      var botonAdd = document.createElement('button');
      botonAdd.classList.add('class', 'botonAñadir')
      var textBotonAdd= document.createTextNode('Añadir')
      equis;
      //Asigno padres correspondientes
      divcontenedor2.appendChild(textarea);
      divcontenedor2.appendChild(botonAdd);
      divcontenedor2.appendChild(equis);
      botonAdd.appendChild(textBotonAdd);


      botonAdd.addEventListener('click',function(){
        var añadirLista = document.getElementsByClassName('textarea')[0].value;
        document.getElementsByClassName('textarea')[0].value = "";
        //console.log(añadirLista);
        //elimino textarea, boton y equis
        divcontenedor2.removeChild(textarea);
        divcontenedor2.removeChild(botonAdd);
        divcontenedor2.removeChild(equis);
        //creo un div con la info de textarea
        var contenedor3 = document.createElement('div');
        contenedor3.classList.add('class', 'contenedor3');
        var tarea = document.createElement('p');
        tarea.classList.add('class', 'tarea');
        var textoTarea = document.createTextNode(añadirLista);
        //asigno padres e ingreso el boton nuevamente
        divcontenedor2.appendChild(contenedor3);
        contenedor3.appendChild(tarea);
        tarea.appendChild(textoTarea);
        divcontenedor2.appendChild(textarea);
        divcontenedor2.appendChild(botonAdd);
        divcontenedor2.appendChild(equis);






      })


    })

  })

})
