/* Agenda
1. Inicializacion de JQuery
2. Selectores
3. Metodos
3.1. CSS
3.2. Eventos
3.3. Efectos


$(document).ready(function () {
  //el código
});

*/

$(function () {
   //el código

/*   let idUno = document.getElementById("uno");
  console.log(idUno);
  
  let idUno_1 = $("#uno");
  console.log(idUno_1);

  let clase1 = $(".clase1");
  console.log(clase1);

  let p = $("p");
  console.log(p);

  $("#uno").addClass("clase2");

  $("h1").removeClass("clase1");

  $("#dos").css("color","blue");
  $("#dos").css("font-size","30px");
  $("#dos").css("border","1px solid black");

  let edad = prompt("ingrese tu edad","18");

  if(edad >= 18) {
    $("#uno").removeClass("clase2");
  }else{
    $("#uno").addClass("clase1");
    $("#uno").removeClass("clase2");
  }


   $("#division").click(function (e) { 
    e.preventDefault();
    e.stopPropagation();
    console.log("clic en division");
    alert("hizo clic DIV");
    console.log($(this).parent().children().first());
    $(this).parent().children().first().toggleClass("clase2");
  });

  $("#boton").click(function (e) {
    e.preventDefault(); 
    e.stopPropagation();
    console.log("dentro del boton");
    $("p").slideToggle(3000);
    $("h1").toggleClass("clase3");
  });


 $("body").on("click","p",function () {
    alert("hizo clic en boton");
    console.log($(this));
    $(this).after("<p>Otro párrafo con after</p>");
    $(this).before("<p>Otro párrafo con before</p>");
    let texto1 = $(this).html();
    console.log(texto1);
    $("li").text(texto1);

  });

  $("#mostrar").addClass("clase3");
  
  $("p").each(function (index) {
    console.log(index +": "+$(this).text());
    $("#mostrar").append("<p>"+index +": "+$(this).text()+"</p>");
  }); */


  // $.ajax({
  //   type: "GET",
  //   url: "url",
  //   data: "data",
  //   dataType: "dataType",
  //   success: function (response) {
  //     console.log(response);
  //   },
  // });


  $("#boton").click(function (e) {
    e.preventDefault(); 
    e.stopPropagation();

    $.getJSON('https://mindicador.cl/api', function(data) {
      console.log(data);
  
      var dailyIndicators = data;
  
    let tabla = `
      <table>
        <tbody>
          <tr>
            <td>Indicador</td>
            <td>Valor</td>
          </tr>
    `;
  
  
  for (const key in data) {
    console.log(key);
      const element = data[key];
      console.log(element);
        if(key != "version" && key !="autor" && key !="fecha"){
          console.log(key + " : " + element.valor)
          tabla += `
            <tr>
              <td>${key}</td>
              <td>${element.valor}</td>
            </tr>
          `;
        }
  }
  
    tabla += `
      </tbody>
      </table>
    `;
  
    $("#mostrar").append(tabla);
      $("<p/>", {
          html: 'El valor actual de la UF es $' + dailyIndicators.uf.unidad_medida
      }).appendTo("body");
    }).fail(function() {
      console.error('Error al consumir la API!');
    });

  });
});

