var token;
var file;
var fileId;

function doItAll(e) {
  file = e.target.files[0]
  // ext = file.name.slice(file.name.lastIndexOf('.') + 1);
  login()
  .then(postToKinveyFile)
  .then(putToGoogle)
  .then(putToKinveyCollection)
  // .then(putToKinveyUser)
  // .then(getPicFromKinvey)
  .then(getFromKinveyCollection)
  .then(putItOnThePage)
}

// for pictures associated with data (not USERS) on the backend
function putToKinveyCollection() {
  return $.ajax({
    url: 'https://baas.kinvey.com/appdata/kid_ZkilaeBwbW/unicorns/5717f6a7a86beb5379c55126',
    type: 'PUT',
    data: JSON.stringify({
      unicornPic: {
        _type: 'KinveyFile',
        _id: fileId
      }
    }),
    contentType: 'application/json',
    headers: {
      Authorization: 'Kinvey ' + token
    }
  })
}

// for pictures associated with data (not USERS) on the backend
function getFromKinveyCollection() {
  return $.ajax({
    url: 'https://baas.kinvey.com/appdata/kid_ZkilaeBwbW/unicorns/5717f6a7a86beb5379c55126',
    type: 'GET',
    headers: {
      Authorization: 'Kinvey ' + token
    }
  })
}

function putItOnThePage(imgResponse) {
  $('body').append('<img src="'+imgResponse._downloadURL+'"/>');
}

// for pictures associated with users on the backend
function getPicFromKinvey() {
  return $.ajax({
    url: 'https://baas.kinvey.com/blob/kid_ZkilaeBwbW/' + fileId,
    type: 'GET',
    headers: {
      Authorization: 'Kinvey ' + token
    }
  })
}

// for pictures associated with users on backend
function putToKinveyUser() {
  return $.ajax({
    url: 'https://baas.kinvey.com/user/kid_ZkilaeBwbW/57a3622d542bf2e64eb20f82',
    type: 'PUT',
    data: JSON.stringify({
      profilePic: fileId
    }),
    contentType: 'application/json',
    headers: {
      Authorization: 'Kinvey ' + token
    }
  })
}

function putToGoogle(kinveyFile) {
  fileId = kinveyFile._id;
  return $.ajax({
    url: kinveyFile._uploadURL,
    headers: kinveyFile._requiredHeaders,
    data: file,
    contentLength: file.size,
    type: 'PUT',
    processData: false,
    contentType: false
  })
}

// need to include public and mimetype with our data, others are optional but preferred
function postToKinveyFile(login) {
  token = login._kmd.authtoken;
  return $.ajax({
    url: 'https://baas.kinvey.com/blob/kid_ZkilaeBwbW',
    type: 'POST',
    headers: {
      Authorization: 'Kinvey ' + token,
      "X-Kinvey-Content-Type": file.type
    },
    contentType: 'application/json',
    data: JSON.stringify({
      _public: true,
      mimeType: file.type
    })
  })
}

function login() {
  return $.ajax({
    type: 'POST',
    url: 'https://baas.kinvey.com/user/kid_ZkilaeBwbW/login',
    data: {username: 'nicerhugs', password:'password'},
    headers: {
      Authorization: 'Basic ' + btoa('kid_ZkilaeBwbW:b4f19648373e4980b00f5267320ae385')
    }
  })
}

document.querySelector('input').addEventListener('change', doItAll);
