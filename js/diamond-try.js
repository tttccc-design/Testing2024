;(function () {
  'use strict';

  // Get the embedded <script> tag.
  var tool_parent = document.getElementsByTagName('script');
  if (tool_parent.hasOwnProperty(tool_parent.length - 1)) {
    tool_parent = tool_parent[tool_parent.length - 1];
  } else {
    window.alert('No source script file was found.');
    return;
  }

  // Alert if wrong <script> tag and move on.
  if (!tool_parent.src.length || !tool_parent.src.match(/embed\.js/i)) {
    console.log('There was a problem embedding the tool.');
    return;
  }

  // Create new iframe on page.
  var tool_frame = document.createElement('iframe');
  tool_frame.style.width = '1px';
  tool_frame.style.minWidth = '100%';
  tool_frame.scrolling = 'no';
  tool_frame.marginWidth = '0';
  tool_frame.marginHeight = '0';
  tool_frame.frameBorder = '0';
  tool_frame.setAttribute('vspace', '0');
  tool_frame.setAttribute('hspace', '0');

  var tool_source = tool_parent.src.match(/^(?:http[s]?:\/\/)?(\/?[^/]+)/i).pop();
  if (typeof tool_source !== 'string') {
    tool_source = 'https://4cs.gia.edu/interactive-4cs/index.html';
  }
  else{
    tool_source = 'https://4cs.gia.edu/interactive-4cs/index.html';
  }

  // Get value if tool is passed.
  var standalone = '';
  var internal = '';
  var src_query_string = tool_parent.src.replace(/^[^?]+\??/, '').split('&');
  for (var pair in src_query_string) {
    if (src_query_string.hasOwnProperty(pair)) {
      var tool = src_query_string[pair].match(/tool=([^&]+)/i);
      if (tool && tool.length) {
        standalone = '/standalone/' + tool.pop() + '.html';
      }

      internal = src_query_string[pair].match(/internal=true/i);
    }
  }

  if (standalone.length === 0) {
    tool_frame.style.outline = '1px solid #e9e9e9';
  }

  // Pass UTM codes to source for tracking.
  var query_string = [internal];
  query_string.push('embedURL=' + window.top.location.hostname);
  query_string.push('embedPath=' + window.top.location.pathname);
  query_string = encodeURI(query_string.join('&'));

  // Insert iframe on page.
  tool_frame.src = 'https://' + tool_source + standalone + '?' + query_string;
  // tool_frame.src = ('https:' === window.top.location.protocol ? 'https://' : 'http://') + tool_source + standalone + '?' + query_string;
  console.log("Tool Frame Source is: "+tool_frame.src)
  tool_parent.parentNode.insertBefore(tool_frame, tool_parent);

  // Respond to iframe resize messages.
  function onMessage(event) {
    var c = (tool_frame.contentWindow || tool_frame.contentDocument);
    if (event.source !== c || typeof event.data !== 'string') {
      return;
    }
    var tool_frame_data = JSON.parse(event.data);
    tool_frame.height = '';
    tool_frame.height = tool_frame_data.height;
  }

  if (window.attachEvent) {
    window.attachEvent('onmessage', onMessage);
  } else if (window.addEventListener) {
    window.addEventListener('message', onMessage, false);
  }
})();