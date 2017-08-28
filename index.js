'use strict';

const STORE = {
  htmlElements: {
    a: { description: 'Defines a hyperlink', status: true },
    abbr: { description: 'Defines an abbreviation or an acronym', status: true },
    acronym: { description: 'Not supported in HTML5.Use abbr instead.Defines an acronym', status: false },
    address: {
      description: 'Defines contact information for the author/owner of a document', status: true
    },
    applet: { description: 'Defines an embedded applet. Not supported in HTML5.Use embed or object instead.', status: true },
    area: { description: 'Defines an area inside an image-map', status: true },
    article: { description: 'Defines an article', status: true },
    aside: { description: 'Defines content aside from the page content', status: true },
    audio: { description: 'Defines sound content', status: true },
    b: { description: 'Defines bold text', status: true },
    base: {
      description: 'Specifies the base URL/target for all relative URLs in a document', status: true
    },
    basefont: { description: 'Not supported in HTML5.Use CSS instead.Specifies a default color, size, and font for all text in a document', status: false },
    bdi: { description: 'Isolates a part of text that might be formatted in a different direction from other text outside it', status: true },
    bdo: { description: 'Overrides the current text direction', status: true },
    big: { description: 'Not supported in HTML5.Use CSS instead.Defines big text', status: false },
    blockquote: { description: 'Defines a section that is quoted from another source', status: true },
    body: {
      description: 'Defines the document\'s body', status: true
    },
    br: { description: 'Defines a single line break', status: true },
    button: { description: 'Defines a clickable button', status: true },
    canvas: { description: 'Used to draw graphics, on the fly, via scripting (usually JavaScript)', status: true },
    caption: { description: 'Defines a table caption', status: true },
    center: { description: 'Not supported in HTML5.Use CSS instead.Defines centered text', status: false },
    cite: { description: 'Defines the title of a work', status: true },
    code: { description: 'Defines a piece of computer code', status: true },
    col: { description: 'Specifies column properties for each column within a colgroup element ', status: true },
    colgroup: { description: 'Specifies a group of one or more columns in a table for formatting', status: true },
    datalist: { description: 'Specifies a list of pre- defined options for input controls', status: true },
    dd: { description: 'Defines a description/ value of a term in a description list', status: true },
    del: { description: 'Defines text that has been deleted from a document', status: true },
    details: { description: 'Defines additional details that the user can view or hide', status: true },
    dfn: { description: 'Represents the defining instance of a term', status: true },
    dialog: { description: 'Defines a dialog box or window', status: true },
    dir: { description: 'Not supported in HTML5.Use ul instead.Defines a directory list', status: false },
    div: { description: 'Defines a section in a document', status: true },
    dl: { description: 'Defines a description list', status: true },
    dt: { description: 'Defines a term/ name in a description list', status: true },
    em: { description: 'Defines emphasized text ', status: true },
    embed: { description: 'Defines a container for an external (non - HTML) application', status: true },
    fieldset: { description: 'Groups related elements in a form', status: true },
    figcaption: { description: 'Defines a caption for a figure element', status: true },
    figure: { description: 'Specifies self- contained content', status: true },
    font: { description: 'Not supported in HTML5.Use CSS instead.Defines font, color, and size for text', status: false },
    footer: { description: 'Defines a footer for a document or section', status: true },
    form: { description: 'Defines an HTML form for user input', status: true },
    frame: { description: 'Not supported in HTML5.Defines a window (a frame) in a frameset', status: true },
    frameset: { description: 'Not supported in HTML5.Defines a set of frames', status: false },
    h1: { description: 'Defines HTML headings', status: true },
    h2: { description: 'Defines HTML headings', status: true },
    h3: { description: 'Defines HTML headings', status: true },
    h4: { description: 'Defines HTML headings', status: true },
    h5: { description: 'Defines HTML headings', status: true },
    h6: { description: 'Defines HTML headings', status: true },
    head: { description: 'Defines information about the document', status: true },
    header: { description: 'Defines a header for a document or section', status: true },
    hr: { description: 'Defines a thematic change in the content', status: true },
    html: { description: 'Defines the root of an HTML document', status: true },
    i: { description: 'Defines a part of text in an alternate voice or mood', status: true },
    iframe: { description: 'Defines an inline frame', status: true },
    img: { description: 'Defines an image', status: true },
    input: { description: 'Defines an input control', status: true },
    ins: { description: 'Defines a text that has been inserted into a document', status: true },
    kbd: { description: 'Defines keyboard input', status: true },
    keygen: { description: 'Defines a key- pair generator field (for forms)', status: true },
    label: { description: 'Defines a label for an input element', status: true },
    legend: { description: 'Defines a caption for a fieldset element', status: true },
    li: { description: 'Defines a list item', status: true },
    link: { description: 'Defines the relationship between a document and an external resource (most used to link to style sheets)', status: true },
    main: { description: 'Specifies the main content of a document', status: true },
    map: { description: 'Defines a client- side image- map', status: true },
    mark: { description: 'Defines marked/ highlighted text', status: true },
    menu: { description: 'Defines a list/ menu of commands', status: true },
    menuitem: { description: 'Defines a command/ menu item that the user can invoke from a popup menu', status: true },
    meta: { description: 'Defines metadata about an HTML document', status: true },
    meter: { description: 'Defines a scalar measurement within a known range (a gauge)', status: true },
    nav: { description: 'Defines navigation links', status: true },
    noframes: { description: 'Not supported in HTML5.Defines an alternate content for users that do not support frames', status: false },
    noscript: { description: 'Defines an alternate content for users that do not support client- side scripts', status: true },
    object: { description: 'Defines an embedded object', status: true },
    ol: { description: 'Defines an ordered list', status: true },
    optgroup: { description: 'Defines a group of related options in a drop- down list', status: true },
    option: { description: 'Defines an option in a drop- down list', status: true },
    output: { description: 'Defines the result of a calculation', status: true },
    p: { description: 'Defines a paragraph', status: true },
    param: { description: 'Defines a parameter for an object', status: true },
    picture: { description: 'Defines a container for multiple image resources', status: true },
    pre: { description: 'Defines preformatted text', status: true },
    progress: { description: 'Represents the progress of a task', status: true },
    q: { description: 'Defines a short quotation', status: true },
    rp: { description: 'Defines what to show in browsers that do not support ruby annotations', status: true },
    rt: { description: 'Defines an explanation/ pronunciation of characters (for East Asian typography)', status: true },
    ruby: { description: 'Defines a ruby annotation (for East Asian typography)', status: true },
    s: { description: 'Defines text that is no longer correct', status: true },
    samp: { description: 'Defines sample output from a computer program', status: true },
    script: { description: 'Defines a client- side script', status: true },
    section: { description: 'Defines a section in a document', status: true },
    select: { description: 'Defines a drop- down list', status: true },
    small: { description: 'Defines smaller text', status: true },
    source: { description: 'Defines multiple media resources for media elements (video and audio)', status: true },
    span: { description: 'Defines a section in a document', status: true },
    strike: { description: 'Not supported in HTML5.Use del or s instead.Defines strikethrough text', status: false },
    strong: { description: 'Defines important text', status: true },
    style: { description: 'Defines style information for a document', status: true },
    sub: { description: 'Defines subscripted text', status: true },
    summary: { description: 'Defines a visible heading for a details element', status: true },
    sup: { description: 'Defines superscripted text', status: true },
    table: { description: 'Defines a table', status: true },
    tbody: { description: 'Groups the body content in a table', status: true },
    td: { description: 'Defines a cell in a table', status: true },
    textarea: { description: 'Defines a multiline input control (text area)', status: true },
    tfoot: { description: 'Groups the footer content in a table', status: true },
    th: { description: 'Defines a header cell in a table', status: true },
    thead: { description: 'Groups the header content in a table', status: true },
    time: { description: 'Defines a date/ time', status: true },
    title: { description: 'Defines a title for the document', status: true },
    tr: { description: 'Defines a row in a table', status: true },
    track: { description: 'Defines text tracks for media elements (video and audio)', status: true },
    tt: { description: 'Not supported in HTML5.Use CSS instead.Defines teletype text', status: false },
    u: { description: 'Defines text that should be stylistically different from normal text', status: true },
    ul: { description: 'Defines an unordered list', status: true },
    var: { description: 'Defines a variable', status: true },
    video: { description: 'Defines a video or movie', status: true },
    wbr: { description: 'Defines a possible line-break', status: true }
  },
  nextIndent: 0,
  oneIndent: ' ',
  singleColumnWidth: 640, // this must match the CSS responsive media query
  displayStatus: 'video', // options are video, 4colStart, 4colEdit, 1col, and 1field
  displayDevice: '',
  inputText: '',
  theCss: ''
};

// basically a regex for the line - don\'t obsess; assume this is a good programmer, just get rid of // and blank line
function isAGoodLine(line) {
  let result = true;
  switch (true) {
  case line.length <= 1:
    result = false;
    break;
  default:
    result = true;
    break;
  }
  return result;
}

// check to see the indent level of the line, and add spaces to the front
function addIndentToLine(qty) {
  STORE.oneIndent = '  '; // FUTURE OPTION: USER SELECTION
  let indent = '';
  for (let i = 1; i <= qty; i++) {
    indent += STORE.oneIndent;
  }
  return indent;
}

function cleanTheLine(line) {
  // replace tabs with spaces
  let tab = RegExp('\\t', 'g');
  let noTab = line.replace(tab, ' ');
  // remove double spaces
  let noQuad = noTab.replace('    ', ' ');
  let noTrip = noQuad.replace('   ', ' ');
  let noDouble = noTrip.replace('  ', ' ');
  // remove leading & trailing white space
  let noLead = noDouble.trim();
  // change first letter to lowercase (undo phone auto-case)
  let caseLine = noLead;
  if (line.length > 0) { // FUTURE OPTION: ALLOW USER SELECTION
    caseLine = noLead.charAt(0).toLowerCase() + noLead.slice(1);
  }
  return caseLine;
}

function checkElement(line) {
  let lineAsArr = line.split(' ');
  // default element to div
  let theElement = 'div';
  // mutation 1: if the first word is 'end' and there are multiple words, remove the first word
  if (lineAsArr[0] === 'end' && lineAsArr.length > 1) { lineAsArr.shift(); } 
  // mutation 2: if the first word is an element, set the first word as the element.
  if (STORE.htmlElements.hasOwnProperty(lineAsArr[0])) { theElement = lineAsArr[0]; }
  return theElement;
}

function checkClass(line, element) {
  let lineAsArr = line.split(' ');
  // default class to entire line
  let theClass = line;
  // mutation 1: if the first word is 'end' and there are multiple words, remove the first word
  if (lineAsArr.length === 1) {
    // do nothing; keep as default
  } else if (lineAsArr[0] === 'end') {
    lineAsArr.shift();
  }
  // mutation 2: if the first word is the element and there are multiple words, remove the first word
  // if the first word is the element and there are no other words, class returns an empty string.
  if (lineAsArr[0] === element && lineAsArr.length === 1) {
    lineAsArr[0] = '';
  } else if (lineAsArr[0] === element ) {
    lineAsArr.shift();
  }
  // join the remaining words back into a string ()
  theClass = lineAsArr.join(' ');
  return theClass;
}

// take a single line of input, and populate properties (start, end, indent level, actual html tag)
function processTheLine(line) {
  // indent = "next" indent passed in
  let lineObject = {};
  // we could do more cleanup, but assume this is good for now.
  lineObject.line = cleanTheLine(line);
  lineObject.element = checkElement(lineObject.line);
  lineObject.class = checkClass(lineObject.line, lineObject.element);
  // if the first 3 characters are 'end', set type to end, else set type to start
  let arrFromLine = lineObject.line.split(' ');
  if (arrFromLine[0] === 'end') {
    lineObject.type = 'end';
    lineObject.indent = STORE.nextIndent - 1; // next = next new tier; we are backing out
    STORE.nextIndent = lineObject.indent + 0; // subtract 1 since we just backed out a tier
    lineObject.indentPrint = addIndentToLine(lineObject.indent);
    lineObject.tag = `${lineObject.indentPrint}</${lineObject.element}><!--${lineObject.line}-->
`;
  } else {
    lineObject.type = 'start';
    lineObject.indent = STORE.nextIndent + 0;
    STORE.nextIndent = lineObject.indent + 1; // add 1 for next tier
    lineObject.indentPrint = addIndentToLine(lineObject.indent);
    lineObject.tag = `${lineObject.indentPrint}<${lineObject.element}`;
    lineObject.tag += lineObject.class.length>0 ? ` class='${lineObject.class}'>
` : `>
`;
  }
  return lineObject;
}

function createHtmlArrOfObj(text) {
  let lines = text.split(/\r?\n/);
  let htmlArrOfObj = [];
  let newObject = {};
  for (let i = 0; i < lines.length; i++) {
    if (isAGoodLine(lines[i])) {
      newObject = processTheLine(lines[i]);
      htmlArrOfObj.push(newObject);
    }
  }
  return htmlArrOfObj;
}

function createHtml(htmlArrOfObj) {
  return htmlArrOfObj.map(item => item.tag).join('');
}

function createClassArr(htmlArrOfObj) {
  let theLineArr = [];
  // push all lines to array of lines  (class and 'end' only)
  for (let i = 0; i < htmlArrOfObj.length; i++) { theLineArr.push(htmlArrOfObj[i].line); }
  // convert this to a string (so we have just words, irrelevant of array status) & remove end with trailing space
  let theString = theLineArr.join(' ').replace('end ', ''); // string of all classes, plus 'end' separated by spaces, in order
  // go back to an array with ONLY single words
  let classArr = theString.split(' '); // array of all classes, plus 'end', in order
  return classArr;
}

function createClassObj(classArr) {
  let classObj = {};
  for (let i = 0; i < classArr.length; i++) {
    if (classObj.hasOwnProperty(classArr[i])) {
      // do nothing
    } else {
      classObj[classArr[i]] = true;
    }
  } // theCssObj is an object with 1 property per class, NOT IN ORDER
  return classObj;
}

function createCss(classArr, classObj) {
  let theKeys = Object.keys(classObj);
  let tempClassObj = {};
  for (let x = 0; x <= theKeys.length; x++) {
    tempClassObj[theKeys[x]] = true;
  }
  let theCss = '';
  for (let i = 0; i < classArr.length; i++) {
    if (tempClassObj.hasOwnProperty(classArr[i]) && classArr[i] !== 'end') {
      let cssItem =
        `.${classArr[i]} {
  position: absolute;
  top: 10%;
  left: 10%;
  height: 10%;
  width: 10%;
  border-radius: 25%;
  background-color: $aColor
}
`;
      theCss += cssItem;
      delete tempClassObj[classArr[i]];
    }
  } // the CssArr should now have 
  return theCss;
}

function createJq(classArr, classObj) {
  let jq = '// EVENT HANDLERS (IF NEEDED)';
  for (let i = 0; i < classArr.length; i++) {
    let contents = classArr[i].trim();
    if (classObj.hasOwnProperty(contents) && contents !== 'end' && contents.length > 1) {
      let jqItem = `
// $('.${contents}')`;
      jq += jqItem;
      delete classObj[contents];
    }
  }
  return jq;
}

function process(text){
  STORE.nextIndent = 0; // reset this, in case we have existing data on screen
  STORE.inputText = text;
  STORE.htmlArrOfObj = createHtmlArrOfObj(STORE.inputText);
  STORE.theHtml = createHtml(STORE.htmlArrOfObj);
  STORE.classArr = createClassArr(STORE.htmlArrOfObj);
  STORE.classObj = createClassObj(STORE.classArr);
  STORE.theCss = createCss(STORE.classArr, STORE.classObj);
  STORE.jq = createJq(STORE.classArr, STORE.classObj);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ END OF DATA HANDLING, START DISPLAY FUNCTIONS ~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ UPDATE DEVICE SETTINGS ~~~~~~~~~~~~~~~~~~~~~~~
function updateDevice() {
  STORE.displayDevice = ($(document).width() >= STORE.singleColumnWidth) ? 'tablet' : 'mobile';
  if(STORE.displayDevice === 'mobile'){
    switch(true) {
    case STORE.displayStatus === '1field':
    case STORE.displayStatus === '4colStart':
    case STORE.displayStatus === '4colEdit':
      STORE.displayStatus = '1col';
      break;
    case STORE.displayStatus === 'video':
      STORE.displayStatus = 'video';
      break;
    default:
      STORE.displayStatus = '1col';
    }  
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ USER REQUEST TO CHANGE SCREEN (EVENT LISTENERS) ~~~~~~~~~~~~~~~~~~~~~~~`

function selectExpand(theCol){
  STORE.displayStatus = '1field';
  render(theCol);
}

function selectVideo() {
  STORE.displayStatus = 'video';
  render();
}

function selectShrink() {
  STORE.displayStatus = STORE.inputText.length ? '4colEdit' : '4colStart' ;
  render();
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ NO JQ ABOVE THIS POINT !!!! ~~~~~~~~~~~~~~~~~~~~~~~`

function selectRun() {
  process($('.inputUser').val());
  STORE.displayStatus = '4colEdit';
  // print html, css, jQ to screen
  $('.outputHtml').val(STORE.theHtml);
  $('.outputCss').val(STORE.theCss);
  $('.outputJq').val(STORE.jq);
  selectShrink();
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 3 SUBFUNCTIONS OF RENDER RUN ON RENDER() ~~~~~~~~~~~~~~~~~~~~~~~`

function renderIcons() {
  if (STORE.inputText.length) {
    $('.iconCodepen').removeClass('hidden');
    $('.iconCopy').removeClass('hidden');
    $('.iconEmail').removeClass('hidden');
  } else {
    $('.iconCodepen').addClass('hidden');
    $('.iconCopy').addClass('hidden');
    $('.iconEmail').addClass('hidden');
  }
  if (STORE.theCss.length){
    $('.iconRun').addClass('hidden');
    $('.iconRerun').removeClass('hidden');
  } else {
    $('.iconRun').removeClass('hidden');
    $('.iconRerun').addClass('hidden');
  }
  if (STORE.displayStatus === 'video'){
    $('.iconVideo').addClass('hidden');    
  } else {
    $('.iconVideo').removeClass('hidden');        
  }
  switch(true){
  case STORE.displayStatus === '1col':
    $('.iconShrink').addClass('hidden');    
    $('.iconExpand').addClass('hidden');
    break;  
  case STORE.displayStatus === '1field':
    $('.iconShrink').removeClass('hidden');    
    $('.iconExpand').addClass('hidden');
    break; 
  case STORE.displayStatus === 'video':
    $('.iconShrink').addClass('hidden');    
    $('.iconExpand').addClass('hidden');
    $('.video').find('.iconShrink').removeClass('hidden');    
    $('.inputHtml').find('.iconExpand').removeClass('hidden');
    break; 
  default:
    $('.iconShrink').addClass('hidden');    
    $('.iconExpand').removeClass('hidden');
  }
}

function renderTooltips () {
  switch(true) {
  case STORE.displayStatus === '1col': // if we are in 1-column mode
  case STORE.displayStatus === '1field':
    $('.tooltiptext').addClass('left'); // set all tooltips to left
    $('.run').find('.tooltiptext').removeClass('left'); // except run
    break;
  default:
    $('.tooltiptext').removeClass('left'); // set all tooltips to right
    $('.outputJq').find('.tooltiptext').addClass('left'); // except those normally on the right
    $('.video').find('.tooltiptext').addClass('left');
    $('.headerIcons').find('.tooltiptext').addClass('left');
    break;
  }
}

function renderContent(theCol) {
  switch(true){
  case STORE.displayStatus === 'video':
    // hide all columns, except show the html input column & video column
    $('.inputOutputRow').find('.col').addClass('hidden');  // hide all columns
    $('.inputOutputRow').find('.inputHtml').removeClass('hidden'); // show input
    $('.inputOutputRow').find('.inputHtml').addClass('col-3');  // set input to col-3
    $('.inputOutputRow').find('.col-9').removeClass('hidden'); // set video to col-9
    break;
  case STORE.displayStatus === '1field': // display 1 column only (1 of 4, not video).
    $('.inputOutputRow').find('.col-12').addClass('col-3'); // switch full-width to multi-column
    $('.inputOutputRow').find('.col-3').removeClass('col-12'); 
    $('.inputOutputRow').find('.col-3').addClass('hidden'); // hide all columns
    $('.inputOutputRow').find('.col-9').addClass('hidden');
    $(theCol).addClass('col-3 col-12'); // toggle selected column to col-12
    $(theCol).removeClass('hidden'); // show selected column
    break;
  default: // 4-col (desktop) or 1-col (mobile)
    $('.inputOutputRow').find('.col-12').addClass('col-3'); // switch full-width to multi-column
    $('.inputOutputRow').find('.col-3').removeClass('col-12'); // switch full-width to multi-column
    $('.inputOutputRow').find('.col-3').removeClass('hidden'); // show all columns
    $('.inputOutputRow').find('.col-9').addClass('hidden'); // except video
    break;
  }
  $('.inputUser').attr('placeholder', `body
 header
 end header
 main
  className
   icon ClassName2
   end ClassName2
  end className
 end main
end body`);
}

function render(theCol) {
  updateDevice();
  renderContent(theCol);
  renderIcons();
  renderTooltips();
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ USER OPTIONS TO EXPORT DATA ~~~~~~~~~~~~~~~~~~~~~~~

function sendEmail(){
  alert('Email function coming soon!');
} 
function sendCodepen(){
  alert('Codepen function coming soon!');  
}
function sendCopy(){
  alert('Copy function coming soon!');  
}
function help(){
  alert('Help function coming soon!');  
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ DOCUMENT READY FUNCTIONS ~~~~~~~~~~~~~~~~~~~~~~~

function applyListeners(){
  $('.iconVideo').on('click',   function(event){ selectVideo(); });
  $('.iconExpand').on('click',  function(event){ selectExpand($(this).closest('.col')); });
  $('.iconShrink').on('click',  function(event){ selectShrink(); });
  $('.run').on('click',         function(event){ selectRun(); });
  $('.iconEmail').on('click',   function(event){ sendEmail(); });
  $('.iconCodepen').on('click', function(event){ sendCodepen(); });
  $('.iconCopy').on('click',    function(event){ sendCopy(); });
  $('.iconHelp').on('click',    function(event){ help(); });
}

$(render); 
$(applyListeners); 

// textarea inset shadow
