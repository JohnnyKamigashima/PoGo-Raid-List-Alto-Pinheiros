

function calc() {

  var abre = document.getElementById('abreH').value;
  var bater = document.getElementById('bateH').value;
  var gym = document.getElementById('result').value;
 //var boss = document.getElementById('bossN').value;
  var Minhascontas = document.getElementById('playerN').value;
  var remotos = document.querySelector("input[name='remoto']:checked");
  var boss = $('#bossN').val().split(';')[0];
  var obs = $('#bossN').val().split(';')[1];

  var Listapresencial = document.getElementById('playerN').value

  if (remotos.value == 'remoto') {
    Listapresencial = ''
  } else {
    Minhascontas = ''
  }

  var texto =
    '*RAID BOSS* ' +
    boss +
    '\n' +
    obs.substring(1) +
    '\n' +
    '\n' +
    'Ginásio ' +
    gym +
    '\n' +
    '\n' +
    'Abre: ' +
    abre +
    'h' +
    '\n' +
    '*BATER*: ' +
    bater +
    'h' +
    '\n' +
    '\n' +
    '*REMOTOS* (máx. 10):' +
    '\n' +
    '\n' +
    '1. ' +
    Minhascontas +
    '\n' +
    '2. ' +
    '\n' +
    '3. ' +
    '\n' +
    '4. ' +
    '\n' +
    '5. ' +
    '\n' +
    '6. ' +
    '\n' +
    '7. ' +
    '\n' +
    '8. ' +
    '\n' +
    '9. ' +
    '\n' +
    '10. ' +
    '\n' +
    '\n' +
    '*PRESENCIAIS*:' +
    '\n' +
    '\n' +
    Listapresencial

  /* Get the text field */
  var copyText = texto
  //document.getElementById('result').innerHTML = texto
  copyToClipboard(copyText);
  alert('Copiado! Cole a lista no seu grupo.');
  return false
}

function currentTimePlus10(elementid) {
  var now = new Date(),
  minutosTotal = horasEMinutos(now.getHours() + ":" + now.getMinutes()),
  mais10min = emHoras(minutosTotal + 10)
  ;

  document.getElementById(elementid).value = mais10min; // Adiciona horario atual no horario de abertura
}

function currentTime(elementid) {
  document.getElementById(elementid).value = (new Date()).getHours() + ":" + (new Date()).getMinutes();
  
}

function copyToClipboard(text) {
  var dummy = document.createElement('textarea')
  // to avoid breaking orgain page when copying more words
  // cant copy when adding below this code
  // dummy.style.display = 'none'
  document.body.appendChild(dummy)
  //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
  dummy.value = text
  dummy.select()
  document.execCommand('copy')
  document.body.removeChild(dummy)
}

function raidAbriu(amudarEl,entradaEl) {
  let dataAtual = new Date(),
  dataAtualemMinutos = (Number(dataAtual.getHours()) * 60) + Number(dataAtual.getMinutes()),
  fecha = 59 - (Number(document.getElementById(entradaEl).value) < 60 ? Number(document.getElementById(entradaEl).value) : 59),
  fechaHora = dataAtualemMinutos - fecha
  ;
document.getElementById(amudarEl).value = emHoras(fechaHora);
}

function atualizaFecha(amudarEl,entradaEl) {
document.getElementById(amudarEl).value = emHoras(Number(horasEMinutos(document.getElementById(entradaEl).value)+59));
}

function emHoras(horarioemminutos) { // input hours and minutes as int
return (Math.trunc(horarioemminutos/60)+":" + (((horarioemminutos%60) < 10 ? '0' : ''))+(horarioemminutos%60));
}




function sort(elementid) {
  // WARN: won't handle OPTGROUPs!
  var sel = document.getElementById(elementid)
  // convert OPTIONs NodeList to an Array
  // - keep in mind that we're using the original OPTION objects
  var ary = (function (nl) {
    var a = []
    for (var i = 0, len = nl.length; i < len; i++) a.push(nl.item(i))
    return a
  })(sel.options)
  // sort OPTIONs Array
  ary.sort(function (a, b) {
    // sort by "value"? (numeric comparison)
    // NOTE: please remember what ".value" means for OPTION objects
    //return a.value - b.value
    // or by "label"? (lexicographic comparison) - case sensitive
    //return a.text < b.text ? -1 : a.text > b.text ? 1 : 0;
    // or by "label"? (lexicographic comparison) - case insensitive
    var aText = a.text.toLowerCase()
    var bText = b.text.toLowerCase()
    return aText < bText ? -1 : aText > bText ? 1 : 0
  })
  // remove all OPTIONs from SELECT (don't worry, the original
  // OPTION objects are still referenced in "ary") ;-)
  for (var i = 0, len = ary.length; i < len; i++) sel.remove(ary[i].index)
  // (re)add re-ordered OPTIONs to SELECT
  for (var i = 0, len = ary.length; i < len; i++) sel.add(ary[i], null)
}

function sortList(elementid) {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById(elementid);
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    // Loop through all list items:
    for (i = 0; i < (b.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should
      switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        /* If next item is alphabetically lower than current item,
        mark as a switch and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}

function horasEMinutos(data) { //input must be str "HH:MM"
  let minutos = Number(data.split(":")[1]) ,
  horas = Number(data.split(":")[0]) * 60
  ;
  return horas+minutos;
}