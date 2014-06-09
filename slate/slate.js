// Movement/Size Operations
var centered = slate.operation('move', {
  'x': 'screenOriginX+(screenSizeX*.1)',
  'y': 'screenOriginY+(screenSizeY*.1)',
  'width': 'screenSizeX*.8',
  'height': 'screenSizeY*.8'
});
var browserCorner = slate.operation('corner', {
  'direction': 'top-right',
  'width': '1366',
  'height': '768'
});
var chatCorner = slate.operation('corner', {
  'direction': 'top-left',
  'width': 'screenSizeX*.4',
  'height': 'screenSizeY*.4'
});
var hipChatCorner = slate.operation('move', {
  'x': 'screenOriginX-4',
  'y': 'screenOriginY',
  'width': 'windowSizeX',
  'height': 'windowSizeY'
});
var vmWindow = slate.operation('resize', {
  'width': '1600',
  'height': '900'
});
var vmTop = slate.operation('push', {
  'direction': 'up',
  'style': 'center'
});
var sequelBottom = slate.operation('push', {
  'direction': 'bottom',
  'style': 'center'
});

// Development Layout
var devLayout = slate.layout('dev', {
  // iTerm centered taking up 80% of screen
  'iTerm': {
    'operations': [centered],
    'repeat': true
  },

  // Browsers in the top right corner with 1366x768 size (most common scrrensize in jan-2014)
  'Firefox': {
    'operations': [browserCorner],
    'repeat': true
  },
  'Google Chrome': {
    'operations': [browserCorner],
    'repeat': true
  },
  'Safari': {
    'operations': [browserCorner],
    'repeat': true
  },

  // Chat apps go in the top left in a 40% square
  'Messages': {
    'operations': [chatCorner],
    'repeat': true
  },
  'HipChat': {
    'operations': [hipChatCorner],
    'repeat': true
  },

  // VM's should be 1600x900 and live centered and at the top
  'Microsoft Remote Desktop': {
    'operations': [vmWindow, vmTop],
    'repeat': true
  },

  // Sequel Pro should be at the bottom and centered
  'Sequel Pro': {
    'operations': [sequelBottom],
    'repeat': true
  }
});

slate.bind('`:cmd,alt', slate.operation('relaunch'));
slate.bind('1:cmd,alt', slate.operation('layout', { 'name': devLayout }));
slate.bind('0:cmd:alt', slate.operation('move', {
  "x": "screenOriginX+(screenSizeX-windowSizeX)/2",
  "y": "screenOriginY+(screenSizeY-windowSizeY)/2",
  "width": "windowSizeX",
  "height": "windowSizeY"
}));
