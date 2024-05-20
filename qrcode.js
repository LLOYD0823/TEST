// Initialize Firebase
const firebaseConfig = {
    // Your Firebase configuration goes here
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  // Initialize QRCode scanner
  const qrCode = new QRCode(document.getElementById('qr-canvas'));
  const video = document.getElementById('qr-video');
  const startButton = document.getElementById('start-button');
  const stopButton = document.getElementById('stop-button');
  
  let streaming = false;
  
  startButton.addEventListener('click', () => {
    if (!streaming) {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then((stream) => {
          video.srcObject = stream;
          video.setAttribute('playsinline', true);
          video.play();
          streaming = true;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  });
  
  stopButton.addEventListener('click', () => {
    if (streaming) {
      video.srcObject.getVideoTracks().forEach((track) => {
        track.stop();
      });
      streaming = false;
    }
  });
  
  function decodeQRCode(image) {
    qrCode.decode(image);
  }
  
  video.addEventListener('canplay', (event) => {
    if (event.target.videoWidth > 0) {
      const image = new Image();
      image.src = video.currentSrc;
      image.onload = () => {
        decodeQRCode(image);
      };
    }
  });
  
  // Handle QR code scan
  function handleQRCodeScan(data) {
    const timestamp = new Date().toISOString();
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${data}</td>
      <td>${timestamp}</td>
      <td><button id="verify-button-${data}">Verify</button></td>
    `;
    const verifyButton = tableRow.querySelector(`#verify-button-${data}`);
    verifyButton.addEventListener('click', () => {
      db.collection('qr-codes').doc(data).set({
        timestamp,
        verified: true,
      });
    });
    document.getElementById('qr-table-body').appendChild(tableRow);
  }
  
  // Initialize Firebase Firestore
  db.collection('qr-codes').orderBy('timestamp').onSnapshot((snapshot) => {
    const tableBody = document.getElementById('qr-table-body');
    tableBody.innerHTML = '';
    snapshot.forEach((doc) => {
      const data = doc.data().data;
      const timestamp = doc.data().timestamp;
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${data}</td>
        <td>${timestamp}</td>
        <td>${doc.data().verified ? 'Verified' : 'Not Verified'}</td>
      `;
      tableBody.appendChild(tableRow);
    });
  });
  
  // Initialize QRCode scanner
  const qrCanvas = document.getElementById('qr-canvas');
  const qrCode = new QRCode(qrCanvas);
  const qrVideo = document.getElementById('qr-video');
  const startButton = document.getElementById('start-button');
  const stopButton = document.getElementById('stop-button');
  
  let streaming = false;
  
  startButton.addEventListener('click', () => {
    if (!streaming) {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then((stream) => {
          qrVideo.srcObject = stream;
          qrVideo.setAttribute('playsinline', true);
          qrVideo.play();
          streaming = true;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  });
  
  stopButton.addEventListener('click', () => {
    if (streaming) {
      qrVideo.srcObject.getVideoTracks().forEach((track) => {
        track.stop();
      });
      streaming = false;
    }
  });
  
  function decodeQRCode(image) {
    qrCode.decode(image);
  }
  
  video.addEventListener('canplay', (event) => {
    if (event.target.videoWidth > 0) {
      const image = new Image();
      image.src = video.currentSrc;
      image.onload = () => {
        decodeQRCode(image);
      };
    }
  });
  
  // Handle QR code scan
  function handleQRCodeScan(data) {
    const timestamp = new Date().toISOString();
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${data}</td>
      <td>${timestamp}</td>
      <td><button id="verify-button-${data}">Verify</button></td>
    `;
    const verifyButton = tableRow.querySelector(`#verify-button-${data}`);
    verifyButton.addEventListener('click', () => {
      db.collection('qr-codes').doc(data).set({
        timestamp,
        verified: true,
      });
    });
    document.getElementById('qr-table-body').appendChild(tableRow);
  }
  
  // Initialize Firebase Firestore
  db.collection('qr-codes').orderBy('timestamp').onSnapshot((snapshot) => {
    const tableBody = document.getElementById('qr-table-body');
    tableBody.innerHTML = '';
    snapshot.forEach((doc) => {
      const data = doc.data().data;
      const timestamp = doc.data().timestamp;
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${data}</td>
        <td>${timestamp}</td>
        <td>${doc.data().verified ? 'Verified' : 'Not Verified'}</td>
      `;
      tableBody.appendChild(tableRow);
    });
  });
  
  // Handle QR code scan
  function handleQRCodeScan(data) {
    const timestamp = new Date().toISOString();
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${data}</td>
      <td>${timestamp}</td>
      <td><button id="verify-button-${data}">Verify</button></td>
    `;
    const verifyButton = tableRow.querySelector(`#verify-button-${data}`);
    verifyButton.addEventListener('click', () => {
      db.collection('qr-codes').doc(data).set({
        timestamp,
        verified: true,
      });
    });
    document.getElementById('qr-table-body').appendChild(tableRow);
  }
  
  // Initialize Firebase Firestore
  db.collection('qr-codes').orderBy('timestamp').onSnapshot((snapshot) => {
    const tableBody = document.getElementById('qr-table-body');
    tableBody.innerHTML = '';
    snapshot.forEach((doc) => {
      const data = doc.data().data;
      const timestamp = doc.data().timestamp;
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${data}</td>
        <td>${timestamp}</td>
        <td>${doc.data().verified ? 'Verified' : 'Not Verified'}</td>
      `;
      tableBody.appendChild(tableRow);
    });
  });
  
  // Handle QR code scan
  function handleQRCodeScan(data) {
    const timestamp = new Date().toISOString();
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${data}</td>
      <td>${timestamp}</td>
      <td><button id="verify-button-${data}">Verify</button></td>
    `;
    const verifyButton = tableRow.querySelector(`#verify-button-${data}`);
    verifyButton.addEventListener('click', () => {
      db.collection('qr-codes').doc(data).set({
        timestamp,
        verified: true,
      });
    });
    document.getElementById('qr-table-body').appendChild(tableRow);
  }
  
  // Initialize Firecloud Functions
  const functions = firebase.functions();
  const scanQRCodeFunction = functions.httpsCallable('scanQRCode');
  
  // Scan QR code from the uploaded image
  document.getElementById('upload-image-button').addEventListener('click', async () => {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (!file) {
      return;
    }
    const imageURL = URL.createObjectURL(file);
    const result = await scanQRCodeFunction({
      imageURL,
    });
    handleQRCodeScan(result.data.data);
  });
  
  // Scan QR code from the uploaded image
  document.getElementById('upload-image-button').addEventListener('click', async () => {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (!file) {
      return;
    }
    const imageURL = URL.createObjectURL(file);
    const result = await scanQRCodeFunction({
      imageURL,
    });
    handleQRCodeScan(result.data.data);
  });
  
  // Scan QR code from the video
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
    });
  });
  
  // Scan QR code from the video
  function scanQRCodeFromVideo() {
    qrCode.decodeFromImage(video).then((result) => {
      if (result) {
        handleQRCodeScan(result.data);
      }
      scanQRCodeFromVideo();
    });
  }
  
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
      scanQRCodeFromVideo();
    });
  });
  
  // Initialize Firebase Firestore
  db.collection('qr-codes').orderBy('timestamp').onSnapshot((snapshot) => {
    const tableBody = document.getElementById('qr-table-body');
    tableBody.innerHTML = '';
    snapshot.forEach((doc) => {
      const data = doc.data().data;
      const timestamp = doc.data().timestamp;
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${data}</td>
        <td>${timestamp}</td>
        <td>${doc.data().verified ? 'Verified' : 'Not Verified'}</td>
      `;
      tableBody.appendChild(tableRow);
    });
  });
  
  // Handle QR code scan
  function handleQRCodeScan(data) {
    const timestamp = new Date().toISOString();
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${data}</td>
      <td>${timestamp}</td>
      <td><button id="verify-button-${data}">Verify</button></td>
    `;
    const verifyButton = tableRow.querySelector(`#verify-button-${data}`);
    verifyButton.addEventListener('click', () => {
      db.collection('qr-codes').doc(data).set({
        timestamp,
        verified: true,
      });
    });
    document.getElementById('qr-table-body').appendChild(tableRow);
  }
  
  // Scan QR code from the uploaded image
  document.getElementById('upload-image-button').addEventListener('click', async () => {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (!file) {
      return;
    }
    const imageURL = URL.createObjectURL(file);
    const result = await scanQRCodeFunction({
      imageURL,
    });
  handleQRCodeScan(result.data.data);
  });
  
  // Scan QR code from the video
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
    });
  });
  
  // Scan QR code from the video
  function scanQRCodeFromVideo() {
    qrCode.decodeFromImage(video).then((result) => {
      if (result) {
        handleQRCodeScan(result.data);
      }
      scanQRCodeFromVideo();
    });
  }
  
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
      scanQRCodeFromVideo();
    });
  });
  
  // Initialize Firebase Firestore
  db.collection('qr-codes').orderBy('timestamp').onSnapshot((snapshot) => {
    const tableBody = document.getElementById('qr-table-body');
    tableBody.innerHTML = '';
    snapshot.forEach((doc) => {
      const data = doc.data().data;
      const timestamp = doc.data().timestamp;
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${data}</td>
        <td>${timestamp}</td>
        <td>${doc.data().verified ? 'Verified' : 'Not Verified'}</td>
      `;
      tableBody.appendChild(tableRow);
    });
  });
  
  // Handle QR code scan
  function handleQRCodeScan(data) {
    const timestamp = new Date().toISOString();
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${data}</td>
      <td>${timestamp}</td>
      <td><button id="verify-button-${data}">Verify</button></td>
    `;
    const verifyButton = tableRow.querySelector(`#verify-button-${data}`);
    verifyButton.addEventListener('click', () => {
      db.collection('qr-codes').doc(data).set({
        timestamp,
        verified: true,
      });
    });
    document.getElementById('qr-table-body').appendChild(tableRow);
  }
  
  // Scan QR code from the uploaded image
  document.getElementById('upload-image-button').addEventListener('click', async () => {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (!file) {
      return;
    }
    const imageURL = URL.createObjectURL(file);
    const result = await scanQRCodeFunction({
      imageURL,
    });
    handleQRCodeScan(result.data.data);
  });
  
  // Scan QR code from the video
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
    });
  });
  
  // Scan QR code from the video
  function scanQRCodeFromVideo() {
    qrCode.decodeFromImage(video).then((result) => {
      if (result) {
        handleQRCodeScan(result.data.data);
      }
      scanQRCodeFromVideo();
    });
  }
  
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
   navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
      scanQRCodeFromVideo();
    });
  });
  
  // Initialize Firebase Firestore
  db.collection('qr-codes').orderBy('timestamp').onSnapshot((snapshot) => {
    const tableBody = document.getElementById('qr-table-body');
    tableBody.innerHTML = '';
    snapshot.forEach((doc) => {
      const data = doc.data().data;
      const timestamp = doc.data().timestamp;
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${data}</td>
        <td>${timestamp}</td>
        <td>${doc.data().verified ? 'Verified' : 'Not Verified'}</td>
      `;
      tableBody.appendChild(tableRow);
    });
  });
  
  // Handle QR code scan
  function handleQRCodeScan(data) {
    const timestamp = new Date().toISOString();
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${data}</td>
      <td>${timestamp}</td>
      <td><button id="verify-button-${data}">Verify</button></td>
    `;
    const verifyButton = tableRow.querySelector(`#verify-button-${data}`);
    verifyButton.addEventListener('click', () => {
      db.collection('qr-codes').doc(data).set({
        timestamp,
        verified: true,
      });
    });
    document.getElementById('qr-table-body').appendChild(tableRow);
  }
  
  // Scan QR code from the uploaded image
  document.getElementById('upload-image-button').addEventListener('click', async () => {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (!file) {
      return;
    }
    const imageURL = URL.createObjectURL(file);
    const result = await scanQRCodeFunction({
      imageURL,
    });
    handleQRCodeScan(result.data.data);
  });
  
  // Scan QR code from the video
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
    });
  });
  
  // Scan QR code from the video
  function scanQRCodeFromVideo() {
    qrCode.decodeFromImage(video).then((result) => {
      if (result) {
        handleQRCodeScan(result.data.data);
      }
      scanQRCodeFromVideo();
    });
  }
  
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
      scanQRCodeFromVideo();
    });
  });
  
  // Initialize Firebase Firestore
  db.collection('qr-codes').orderBy('timestamp').onSnapshot((snapshot) => {
    const tableBody = document.getElementById('qr-table-body');
    tableBody.innerHTML = '';
    snapshot.forEach((doc) => {
      const data = doc.data().data;
      const timestamp = doc.data().timestamp;
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${data}</td>
        <td>${timestamp}</td>
        <td>${doc.data().verified ? 'Verified' : 'Not Verified'}</td>
      `;
      tableBody.appendChild(tableRow);
    });
  });
  
  // Handle QR code scan
  function handleQRCodeScan(data) {
    const timestamp = new Date().toISOString();
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${data}</td>
      <td>${timestamp}</td>
      <td><button id="verify-button-${data}">Verify</button></td>
    `;
    const verifyButton = tableRow.querySelector(`#verify-button-${data}`);
    verifyButton.addEventListener('click', () => {
      db.collection('qr-codes').doc(data).set({
        timestamp,
        verified: true,
      });
    });
    document.getElementById('qr-table-body').appendChild(tableRow);
  }
  
  // Scan QR code from the uploaded image
  document.getElementById('upload-image-button').addEventListener('click', async () => {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (!file) {
      return;
    }
    const imageURL = URL.createObjectURL(file);
    const result = await scanQRCodeFunction({
      imageURL,
    });
    handleQRCodeScan(result.data.data);
  });
  
  // Scan QR code from the video
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
    });
  });
  
  // Scan QR code from the video
  function scanQRCodeFromVideo() {
    qrCode.decodeFromImage(video).then((result) => {
      if (result) {
        handleQRCodeScan(result.data.data);
      }
      scanQRCodeFromVideo();
    });
  }
  
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
      scanQRCodeFromVideo();
    });
  });
  
  // Initialize Firebase Firestore
  db.collection('qr-codes').orderBy('timestamp').onSnapshot((snapshot) => {
    const tableBody = document.getElementById('qr-table-body');
    tableBody.innerHTML = '';
    snapshot.forEach((doc) => {
      const data = doc.data().data;
      const timestamp = doc.data().timestamp;
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${data}</td>
        <td>${timestamp}</td>
        <td>${doc.data().verified ? 'Verified' : 'Not Verified'}</td>
      `;
      tableBody.appendChild(tableRow);
    });
  });
  
  // Handle QR code scan
  function handleQRCodeScan(data) {
    const timestamp = new Date().toISOString();
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${data}</td>
      <td>${timestamp}</td>
      <td><button id="verify-button-${data}">Verify</button></td>
    `;
    const verifyButton = tableRow.querySelector(`#verify-button-${data}`);
    verifyButton.addEventListener('click', () => {
      db.collection('qr-codes').doc(data).set({
        timestamp,
        verified: true,
      });
    });
    document.getElementById('qr-table-body').appendChild(tableRow);
  }
  
  // Scan QR code from the uploaded image
  document.getElementById('upload-image-button').addEventListener('click', async () => {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (!file) {
      return;
    }
    const imageURL = URL.createObjectURL(file);
    const result = await scanQRCodeFunction({
      imageURL,
    });
    handleQRCodeScan(result.data.data);
  });
  
  // Scan QR code from the video
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
    });
  });
  
  // Scan QR code from the video
  function scanQRCodeFromVideo() {
    qrCode.decodeFromImage(video).then((result) => {
      if (result) {
        handleQRCodeScan(result.data.data);
      }
      scanQRCodeFromVideo();
    });
  }
  
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
      scanQRCodeFromVideo();
    });
  });
  
  // Initialize Firebase Firestore
  db.collection('qr-codes').orderBy('timestamp').onSnapshot((snapshot) => {
    const tableBody = document.getElementById('qr-table-body');
    tableBody.innerHTML = '';
    snapshot.forEach((doc) => {
      const data = doc.data().data;
      const timestamp = doc.data().timestamp;
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${data}</td>
        <td>${timestamp}</td>
        <td>${doc.data().verified ? 'Verified' : 'Not Verified'}</td>
      `;
      tableBody.appendChild(tableRow);
    });
  });
  
  // Handle QR code scan
  function handleQRCodeScan(data) {
    const timestamp = new Date().toISOString();
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${data}</td>
      <td>${timestamp}</td>
      <td><button id="verify-button-${data}">Verify</button></td>
    `;
    const verifyButton = tableRow.querySelector(`#verify-button-${data}`);
    verifyButton.addEventListener('click', () => {
      db.collection('qr-codes').doc(data).set({
        timestamp,
        verified: true,
      });
    });
    document.getElementById('qr-table-body').appendChild(tableRow);
  }
  
  // Scan QR code from the uploaded image
  document.getElementById('upload-image-button').addEventListener('click', async () => {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (!file) {
      return;
    }
    const imageURL = URL.createObjectURL(file);
    const result = await scanQRCodeFunction({
      imageURL,
    });
    handleQRCodeScan(result.data.data);
  });
  
  // Scan QR code from the video
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
    });
  });
  
  // Scan QR code from the video
  function scanQRCodeFromVideo() {
    qrCode.decodeFromImage(video).then((result) => {
      if (result) {
        handleQRCodeScan(result.data.data);
      }
      scanQRCodeFromVideo();
    });
  }
  
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
   navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
      scanQRCodeFromVideo();
    });
  });
  
  // Initialize Firebase Firestore
  db.collection('qr-codes').orderBy('timestamp').onSnapshot((snapshot) => {
    const tableBody = document.getElementById('qr-table-body');
    tableBody.innerHTML = '';
    snapshot.forEach((doc) => {
      const data = doc.data().data;
      const timestamp = doc.data().timestamp;
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${data}</td>
        <td>${timestamp}</td>
        <td>${doc.data().verified ? 'Verified' : 'Not Verified'}</td>
      `;
      tableBody.appendChild(tableRow);
    });
  });
  
  // Handle QR code scan
  function handleQRCodeScan(data) {
    const timestamp = new Date().toISOString();
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${data}</td>
      <td>${timestamp}</td>
      <td><button id="verify-button-${data}">Verify</button></td>
    `;
    const verifyButton = tableRow.querySelector(`#verify-button-${data}`);
    verifyButton.addEventListener('click', () => {
      db.collection('qr-codes').doc(data).set({
        timestamp,
        verified: true,
      });
    });
    document.getElementById('qr-table-body').appendChild(tableRow);
  }
  
  // Scan QR code from the uploaded image
  document.getElementById('upload-image-button').addEventListener('click', async () => {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (!file) {
      return;
    }
    const imageURL = URL.createObjectURL(file);
    const result = await scanQRCodeFunction({
      imageURL,
    });
    handleQRCodeScan(result.data.data);
  });
  
  // Scan QR code from the video
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
    });
  });
  
  // Scan QR code from the video
  function scanQRCodeFromVideo() {
    qrCode.decodeFromImage(video).then((result) => {
      if (result) {
        handleQRCodeScan(result.data.data);
      }
      scanQRCodeFromVideo();
    });
  }
  
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
      scanQRCodeFromVideo();
    });
  });
  
  // Initialize Firebase Firestore
  db.collection('qr-codes').orderBy('timestamp').onSnapshot((snapshot) => {
    const tableBody = document.getElementById('qr-table-body');
    tableBody.innerHTML = '';
    snapshot.forEach((doc) => {
      const data = doc.data().data;
      const timestamp = doc.data().timestamp;
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${data}</td>
        <td>${timestamp}</td>
        <td>${doc.data().verified ? 'Verified' : 'Not Verified'}</td>
      `;
      tableBody.appendChild(tableRow);
    });
  });
  
  // Handle QR code scan
  function handleQRCodeScan(data) {
    const timestamp = new Date().toISOString();
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${data}</td>
      <td>${timestamp}</td>
      <td><button id="verify-button-${data}">Verify</button></td>
    `;
    const verifyButton = tableRow.querySelector(`#verify-button-${data}`);
    verifyButton.addEventListener('click', () => {
      db.collection('qr-codes').doc(data).set({
        timestamp,
        verified: true,
      });
    });
    document.getElementById('qr-table-body').appendChild(tableRow);
  }
  
  // Scan QR code from the uploaded image
  document.getElementById('upload-image-button').addEventListener('click', async () => {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (!file) {
      return;
    }
    const imageURL = URL.createObjectURL(file);
    const result = await scanQRCodeFunction({
      imageURL,
    });
    handleQRCodeScan(result.data.data);
  });
  
  // Scan QR code from the video
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
    });
  });
  
  // Scan QR code from the video
  function scanQRCodeFromVideo() {
    qrCode.decodeFromImage(video).then((result) => {
      if (result) {
        handleQRCodeScan(result.data.data);
      }
      scanQRCodeFromVideo();
    });
  }
  
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
      scanQRCodeFromVideo();
    });
  });
  
  // Initialize Firebase Firestore
  db.collection('qr-codes').orderBy('timestamp').onSnapshot((snapshot) => {
    const tableBody = document.getElementById('qr-table-body');
    tableBody.innerHTML = '';
    snapshot.forEach((doc) => {
      const data = doc.data().data;
      const timestamp = doc.data().timestamp;
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${data}</td>
        <td>${timestamp}</td>
        <td>${doc.data().verified ? 'Verified' : 'Not Verified'}</td>
      `;
      tableBody.appendChild(tableRow);
    });
  });
  
  // Handle QR code scan
  function handleQRCodeScan(data) {
    const timestamp = new Date().toISOString();
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${data}</td>
      <td>${timestamp}</td>
      <td><button id="verify-button-${data}">Verify</button></td>
    `;
    const verifyButton = tableRow.querySelector(`#verify-button-${data}`);
    verifyButton.addEventListener('click', () => {
      db.collection('qr-codes').doc(data).set({
        timestamp,
        verified: true,
      });
    });
    document.getElementById('qr-table-body').appendChild(tableRow);
  }
  
  // Scan QR code from the uploaded image
  document.getElementById('upload-image-button').addEventListener('click', async () => {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (!file) {
      return;
    }
    const imageURL = URL.createObjectURL(file);
    const result = await scanQRCodeFunction({
      imageURL,
    });
    handleQRCodeScan(result.data.data);
  });
  
  // Scan QR code from the video
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
    });
  });
  
  // Scan QR code from the video
  function scanQRCodeFromVideo() {
    qrCode.decodeFromImage(video).then((result) => {
      if (result) {
        handleQRCodeScan(result.data.data);
      }
      scanQRCodeFromVideo();
    });
  }
  
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
      scanQRCodeFromVideo();
    });
  });
  
  // Initialize Firebase Firestore
  db.collection('qr-codes').orderBy('timestamp').onSnapshot((snapshot) => {
    const tableBody = document.getElementById('qr-table-body');
    tableBody.innerHTML = '';
    snapshot.forEach((doc) => {
      const data = doc.data().data;
      const timestamp = doc.data().timestamp;
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${data}</td>
        <td>${timestamp}</td>
        <td>${doc.data().verified ? 'Verified' : 'Not Verified'}</td>
      `;
      tableBody.appendChild(tableRow);
    });
  });
  
  // Handle QR code scan
  function handleQRCodeScan(data) {
    const timestamp = new Date().toISOString();
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${data}</td>
      <td>${timestamp}</td>
      <td><button id="verify-button-${data}">Verify</button></td>
    `;
    const verifyButton = tableRow.querySelector(`#verify-button-${data}`);
    verifyButton.addEventListener('click', () => {
      db.collection('qr-codes').doc(data).set({
        timestamp,
        verified: true,
      });
    });
    document.getElementById('qr-table-body').appendChild(tableRow);
  }
  
  // Scan QR code from the uploaded image
  document.getElementById('upload-image-button').addEventListener('click', async () => {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (!file) {
      return;
    }
    const imageURL = URL.createObjectURL(file);
    const result = await scanQRCodeFunction({
      imageURL,
    });
    handleQRCodeScan(result.data.data);
  });
  
  // Scan QR code from the video
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
    });
  });
  
  // Scan QR code from the video
  function scanQRCodeFromVideo() {
    qrCode.decodeFromImage(video).then((result) => {
      if (result) {
        handleQRCodeScan(result.data.data);
      }
      scanQRCodeFromVideo();
    });
  }
  
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
   navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
      scanQRCodeFromVideo();
    });
  });
  
  // Initialize Firebase Firestore
  db.collection('qr-codes').orderBy('timestamp').onSnapshot((snapshot) => {
    const tableBody = document.getElementById('qr-table-body');
    tableBody.innerHTML = '';
    snapshot.forEach((doc) => {
      const data = doc.data().data;
      const timestamp = doc.data().timestamp;
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${data}</td>
        <td>${timestamp}</td>
        <td>${doc.data().verified ? 'Verified' : 'Not Verified'}</td>
      `;
      tableBody.appendChild(tableRow);
    });
  });
  
  // Handle QR code scan
  function handleQRCodeScan(data) {
    const timestamp = new Date().toISOString();
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${data}</td>
      <td>${timestamp}</td>
      <td><button id="verify-button-${data}">Verify</button></td>
    `;
    const verifyButton = tableRow.querySelector(`#verify-button-${data}`);
    verifyButton.addEventListener('click', () => {
      db.collection('qr-codes').doc(data).set({
        timestamp,
        verified: true,
      });
    });
    document.getElementById('qr-table-body').appendChild(tableRow);
  }
  
  // Scan QR code from the uploaded image
  document.getElementById('upload-image-button').addEventListener('click', async () => {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (!file) {
      return;
    }
    const imageURL = URL.createObjectURL(file);
    const result = await scanQRCodeFunction({
      imageURL,
    });
    handleQRCodeScan(result.data.data);
  });
  
  // Scan QR code from the video
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
    });
  });
  
  // Scan QR code from the video
  function scanQRCodeFromVideo() {
    qrCode.decodeFromImage(video).then((result) => {
      if (result) {
        handleQRCodeScan(result.data.data);
      }
      scanQRCodeFromVideo();
    });
  }
  
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
      scanQRCodeFromVideo();
    });
  });
  
  // Initialize Firebase Firestore
  db.collection('qr-codes').orderBy('timestamp').onSnapshot((snapshot) => {
    const tableBody = document.getElementById('qr-table-body');
    tableBody.innerHTML = '';
    snapshot.forEach((doc) => {
      const data = doc.data().data;
      const timestamp = doc.data().timestamp;
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${data}</td>
        <td>${timestamp}</td>
        <td>${doc.data().verified ? 'Verified' : 'Not Verified'}</td>
      `;
      tableBody.appendChild(tableRow);
    });
  });
  
  // Handle QR code scan
  function handleQRCodeScan(data) {
    const timestamp = new Date().toISOString();
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${data}</td>
      <td>${timestamp}</td>
      <td><button id="verify-button-${data}">Verify</button></td>
    `;
    const verifyButton = tableRow.querySelector(`#verify-button-${data}`);
    verifyButton.addEventListener('click', () => {
      db.collection('qr-codes').doc(data).set({
        timestamp,
        verified: true,
      });
    });
    document.getElementById('qr-table-body').appendChild(tableRow);
  }
  
  // Scan QR code from the uploaded image
  document.getElementById('upload-image-button').addEventListener('click', async () => {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (!file) {
      return;
    }
    const imageURL = URL.createObjectURL(file);
    const result = await scanQRCodeFunction({
      imageURL,
    });
    handleQRCodeScan(result.data.data);
  });
  
  // Scan QR code from the video
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
    });
  });
  
  // Scan QR code from the video
  function scanQRCodeFromVideo() {
    qrCode.decodeFromImage(video).then((result) => {
      if (result) {
        handleQRCodeScan(result.data.data);
      }
      scanQRCodeFromVideo();
    });
  }
  
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
      scanQRCodeFromVideo();
    });
  });
  
  // Initialize Firebase Firestore
  db.collection('qr-codes').orderBy('timestamp').onSnapshot((snapshot) => {
    const tableBody = document.getElementById('qr-table-body');
    tableBody.innerHTML = '';
    snapshot.forEach((doc) => {
      const data = doc.data().data;
      const timestamp = doc.data().timestamp;
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${data}</td>
        <td>${timestamp}</td>
        <td>${doc.data().verified ? 'Verified' : 'Not Verified'}</td>
      `;
      tableBody.appendChild(tableRow);
    });
  });
  
  // Handle QR code scan
  function handleQRCodeScan(data) {
    const timestamp = new Date().toISOString();
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${data}</td>
      <td>${timestamp}</td>
      <td><button id="verify-button-${data}">Verify</button></td>
    `;
    const verifyButton = tableRow.querySelector(`#verify-button-${data}`);
    verifyButton.addEventListener('click', () => {
      db.collection('qr-codes').doc(data).set({
        timestamp,
        verified: true,
      });
    });
    document.getElementById('qr-table-body').appendChild(tableRow);
  }
  
  // Scan QR code from the uploaded image
  document.getElementById('upload-image-button').addEventListener('click', async () => {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (!file) {
      return;
    }
    const imageURL = URL.createObjectURL(file);
    const result = await scanQRCodeFunction({
      imageURL,
    });
    handleQRCodeScan(result.data.data);
  });
  
  // Scan QR code from the video
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
    });
  });
  
  // Scan QR code from the video
  function scanQRCodeFromVideo() {
    qrCode.decodeFromImage(video).then((result) => {
      if (result) {
        handleQRCodeScan(result.data.data);
      }
      scanQRCodeFromVideo();
    });
  }
  
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
      scanQRCodeFromVideo();
    });
  });
  
  // Initialize Firebase Firestore
  db.collection('qr-codes').orderBy('timestamp').onSnapshot((snapshot) => {
    const tableBody = document.getElementById('qr-table-body');
    tableBody.innerHTML = '';
    snapshot.forEach((doc) => {
      const data = doc.data().data;
      const timestamp = doc.data().timestamp;
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${data}</td>
        <td>${timestamp}</td>
        <td>${doc.data().verified ? 'Verified' : 'Not Verified'}</td>
      `;
      tableBody.appendChild(tableRow);
    });
  });
  
  // Handle QR code scan
  function handleQRCodeScan(data) {
    const timestamp = new Date().toISOString();
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${data}</td>
      <td>${timestamp}</td>
      <td><button id="verify-button-${data}">Verify</button></td>
    `;
    const verifyButton = tableRow.querySelector(`#verify-button-${data}`);
    verifyButton.addEventListener('click', () => {
      db.collection('qr-codes').doc(data).set({
        timestamp,
        verified: true,
      });
    });
    document.getElementById('qr-table-body').appendChild(tableRow);
  }
  
  // Scan QR code from the uploaded image
  document.getElementById('upload-image-button').addEventListener('click', async () => {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (!file) {
      return;
    }
    const imageURL = URL.createObjectURL(file);
    const result = await scanQRCodeFunction({
      imageURL,
    });
    handleQRCodeScan(result.data.data);
  });
  
  // Scan QR code from the video
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
    });
  });
  
  // Scan QR code from the video
  function scanQRCodeFromVideo() {
    qrCode.decodeFromImage(video).then((result) => {
      if (result) {
        handleQRCodeScan(result.data.data);
      }
      scanQRCodeFromVideo();
    });
  }
  
  document.getElementById('start-scanning-button').addEventListener('click', () => {
    const constraints = {
      video: {
        width: 1280,
        height: 720,
      },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.play();
      scanQRCodeFromVideo();
    });
  });
  
  // Scan QR code from the uploaded image
  document.getElementById('upload-image-button').addEventListener('click', async () => {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (!file) {
      return;
    }
    const imageURL = URL.createObjectURL(file);
    const result = await scanQRCodeFunction({
      imageURL,
    });
    handleQRCodeScan(result.data.data);
  });
  
  // Handle QR code scan
  function handleQRCodeScan(data) {
    const timestamp = new Date().toISOString();
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${data}</td>
      <td>${timestamp}</td>
      <td><button id="verify-button-${data}">Verify</button></td>
    `;
    const verifyButton = tableRow.querySelector(`#verify-button-${data}`);
    verifyButton.addEventListener('click', () => {
      db.collection('qr-codes').doc(data).set({
        timestamp,
        verified: true,
      });
    });
    document.getElementById('qr-table-body').appendChild(tableRow);
  }
  
  // Initialize Firebase Firestore
  db.collection('qr-codes').orderBy('timestamp').onSnapshot((snapshot) => {
    const tableBody = document.getElementById('qr-table-body');
    tableBody.innerHTML = '';
    snapshot.forEach((doc) => {
      const data = doc.data().data;
      const timestamp = doc.data().timestamp;
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${data}</td>
        <td>${timestamp}</td>
        <td>${doc.data().verified ? 'Verified' : 'Not Verified'}</td>
      `;
      tableBody.appendChild(tableRow);
    });
  });
  
  // Scan QR code from the uploaded image
  document.getElementById('upload-image-button').addEventListener('click', async () => {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (!file) {
      return;
    }
    const imageURL = URL.createObjectURL(file);
    const result = await scanQRCodeFunction({
      imageURL,
    });
    handleQRCodeScan(result.data.data);
  });
  
  // Handle QR code scan
  function handleQRCodeScan(data) {
    const timestamp = new Date().toISOString();
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${data}</td>
      <td>${timestamp}</td>
      <td><button id="verify-button-${data}">Verify</button></td>
    `;
    const verifyButton = tableRow.querySelector(`#verify-button-${data}`);
    verifyButton.addEventListener('click', () => {
      db.collection('qr-codes').doc(data).set({
        timestamp,
        verified: true,
      });
    });
    document.getElementById('qr-table-body').appendChild(tableRow);
  }
  
  // Initialize Firebase Firestore
  db.collection('qr-codes').orderBy('timestamp').onSnapshot((snapshot) => {
    const tableBody = document.getElementById('qr-table-body');
    tableBody.innerHTML = '';
    snapshot.forEach((doc) => {
      const data = doc.data().data;
      const timestamp = doc.data().timestamp;
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${data}</td>
        <td>${timestamp}</td>
        <td>${doc.data().verified ? 'Verified' : 'Not Verified'}</td>
      `;
      tableBody.appendChild(tableRow);
    });
  });
  
  // Scan QR code from the uploaded image
  document.getElementById('upload-image-button').addEventListener('click', async () => {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (!file) {
      return;
    }
    const imageURL = URL.createObjectURL(file);
    const result = await scanQRCodeFunction({
      imageURL,
    });
    handleQRCodeScan(result.data.data);
  });
  
  // Handle QR code scan
  function handleQRCodeScan(data) {
    const timestamp = new Date().toISOString();
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${data}</td>
      <td>${timestamp}</td>
      <td><button id="verify-button-${data}">Verify</button></td>
    `;
    const verifyButton = tableRow.querySelector(`#verify-button-${data}`);
    verifyButton.addEventListener('click', () => {
      db.collection('qr-codes').doc(data).set({
        timestamp,
        verified: true,
      });
    });
    document.getElementById('qr-table-body').appendChild(tableRow);
  }
  
  // Initialize Firebase Firestore
  db.collection('qr-codes').orderBy('timestamp').onSnapshot((snapshot) => {
    const tableBody = document.getElementById('qr-table-body');
    tableBody.innerHTML = '';
    snapshot.forEach((doc) => {
      const data = doc.data().data;
      const timestamp = doc.data().timestamp;
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${data}</td>
        <td>${timestamp}</td>
        <td>${doc.data().verified ? 'Verified' : 'Not Verified'}</td>
      `;
      tableBody.appendChild(tableRow);
    });
  });
  
  // Scan QR code from the uploaded image
  document.getElementById('upload-image-button').addEventListener('click', async () => {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (!file) {
      return;
    }
    const imageURL = URL.createObjectURL(file);
    const result = await scanQRCodeFunction({
      imageURL,
    });
    handleQRCodeScan(result.data.data);
  });
  
  // Handle QR code scan
  function handleQRCodeScan(data) {
    const timestamp = new Date().toISOString();
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${data}</td>
      <td>${timestamp}</td>
      <td><button id="verify-button-${data}">Verify</button></td>
    `;
    const verifyButton = tableRow.querySelector(`#verify-button-${data}`);
    verifyButton.addEventListener('click', () => {
      db.collection('qr-codes').doc(data).set({
        timestamp,
        verified: true,
      });
    });
    document.getElementById('qr-table-body').appendChild(tableRow);
  }
  
  // Initialize Firebase Firestore
  db.collection('qr-codes').orderBy('timestamp').onSnapshot((snapshot) => {
    const tableBody = document.getElementById('qr-table-body');
    tableBody.innerHTML = '';
    snapshot.forEach((doc) => {
      const data = doc.data().data;
      const timestamp = doc.data().timestamp;
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${data}</td>
        <td>${timestamp}</td>
        <td>${doc.data().verified ? 'Verified' : 'Not Verified'}</td>
      `;
      tableBody.appendChild(tableRow);
    });
  });
  
  // Scan QR code from the uploaded image
  document.getElementById('upload-image-button').addEventListener('click', async () => {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (!file) {
      return;
    }
    const imageURL = URL.createObjectURL(file);
    const result = await scanQRCodeFunction({
      imageURL,
    });
    handleQRCodeScan(result.data.data);
  });
  
  // Initialize Firebase Firestore
  db.collection('qr-codes').orderBy('timestamp').onSnapshot((snapshot) => {
    const tableBody = document.getElementById('qr-table-body');
    tableBody.innerHTML = '';
    snapshot.forEach((doc) => {
      const data = doc.data().data;
      const timestamp = doc.data().timestamp;
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${data}</td>
        <td>${timestamp}</td>
        <td>${doc.data().verified ? 'Verified' : 'Not Verified'}</td>
      `;
      tableBody.appendChild(tableRow);
    });
  });
  
  // Scan QR code from the uploaded image
  document.getElementById('upload-image-button').addEventListener('click', async () => {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (!file) {
      return;
    }
    const imageURL = URL.createObjectURL(file);
    const result = await scanQRCodeFunction({
      imageURL,
    });
    handleQRCodeScan(result.data.data);
  });
  
  // Initialize Firebase Firestore
  db.collection('qr-codes').orderBy('timestamp').onSnapshot((snapshot) => {
    const tableBody = document.getElementById('qr-table-body');
    tableBody.innerHTML = '';
    snapshot.forEach((doc) => {
      const data = doc.data().data;
      const timestamp = doc.data().timestamp;
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${data}</td>
        <td>${timestamp}</td>
        <td>${doc.data().verified ? 'Verified' : 'Not Verified'}</td>
      `;
      tableBody.appendChild(tableRow);
    });
  });
  
  // Scan QR code from the uploaded image
  document.getElementById('upload-image-button').addEventListener('click', async () => {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (!file) {
      return;
    }
    const imageURL = URL.createObjectURL(file);
    const result = await scanQRCodeFunction({
      imageURL,
    });
    handleQRCodeScan(result.data.data);
  });
  
  // Handle QR code scan
  function handleQRCodeScan(data) {
    const timestamp = new Date().toISOString();
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${data}</td>
      <td>${timestamp}</td>
      <td><button id="verify-button-${data}">Verify</button></td>
    `;
    const verifyButton = tableRow.querySelector(`#verify-button-${data}`);
    verifyButton.addEventListener('click', () => {
      db.collection('qr-codes').doc(data).set({
        timestamp,
        verified: true,
      });
    });
    document.getElementById('qr-table-body').appendChild(tableRow);
  }
  
  // Initialize Firebase Firestore
  db.collection('qr-codes').orderBy('timestamp').onSnapshot((snapshot) => {
    const tableBody = document.getElementById('qr-table-body');
    tableBody.innerHTML = '';
    snapshot.forEach((doc) => {
      const data = doc.data().data;
      const timestamp = doc.data().timestamp;
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${data}</td>
        <td>${timestamp}</td>
        <td>${doc.data().verified ? 'Verified' : 'Not Verified'}</td>
      `;
      tableBody.appendChild(tableRow);
    });
  });
  
  // Scan QR code from the uploaded image
  document.getElementById('upload-image-button').addEventListener('click', async () => {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files