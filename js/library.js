function calc () {
  var abre = document.getElementById('abreH').value
  var bater = document.getElementById('bateH').value
  var gym = document.getElementById('gyms').value
  var boss = document.getElementById('bossN').value
  var Minhascontas = document.getElementById('playerN').value
  var remotos = document.getElementById('remoto').value
  var Listapresencial = document.getElementById('playerN').value

  if ((remotos = 'remoto')) {
    Minhascontas = ''
  } else {
    Listapresencial = ''
  }

  var texto =
    '*RAID BOSS* ' +
    boss +
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
    '1.' +
    Minhascontas +
    '\n' +
    '2.' +
    '\n' +
    '3.' +
    '\n' +
    '4.' +
    '\n' +
    '5.' +
    '\n' +
    '6.' +
    '\n' +
    '7.' +
    '\n' +
    '8.' +
    '\n' +
    '9.' +
    '\n' +
    '10.' +
    '\n' +
    '\n' +
    '*PRESENCIAIS*:' +
    '\n' +
    '\n' +
    Listapresencial

  /* Get the text field */
  var copyText = texto
  document.getElementById('result').innerHTML = texto

  copyToClipboard(copyText)

  return false
}

function copyToClipboard (text) {
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

function currentTime () {
  var now = new Date()
  var hora = Number(now.getHours())
  var minuto = Number(now.getMinutes())

  document.getElementById('abreH').value =
    hora +
    ':' +
    ((minuto < 10 ? '0' : '') + minuto) // Adiciona horario atual no horario de abertura

    if (minuto<50){    
      document.getElementById('bateH').value =
    hora +
    ':' +
    ((minuto < 10 ? '0' : '') + (minuto+10)) // Adiciona horario atual + 10 minutos}
    }
    else {
      document.getElementById('bateH').value =
      (hora+1) +
      ':' +
      ((minuto < 10 ? '0' : '') + "0" +(minuto-50)) // Adiciona horario atual + 10 minutos}
    }

  return now
}

function sort (elementid) {
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
