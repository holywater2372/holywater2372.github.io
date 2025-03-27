promptDOM.innerHTML = prompt;





let welcome = `<p>H0lyWat3r's decent wesbite [Version 07.12.2000.xxxx]
</p><p>
(c) H0lyWat3r Corporation. No rights reserved.</p>
<p>The website was inspired by KillSwitch a.k.a. Paavai Aram</p>`;


preRenderDOM.innerHTML += welcome;



function getOS() {
  let Name = "unknown";
  if (navigator.userAgent.indexOf("Win") != -1) Name = "Windows OS";
  if (navigator.userAgent.indexOf("Mac") != -1) Name = "MacOS";
  if (navigator.userAgent.indexOf("X11") != -1) Name = "UNIX OS";
  if (navigator.userAgent.indexOf("Linux") != -1) Name = "Linux OS";
  return Name;
}

function killfetch(data = {}) {
  return `
   <div id="killfetch">
          <img id= "main-img" src="assets/rats.gif" alt="main image" />
          <div class="data">
            <div>
              <span>Browser:</span>
              <span>Chrome</span>
            </div>
            <div>
              <span>Browser:</span>
              <span>${getOS()}</span>
            </div>
            <div>
              <span>IP:</span>
              <span>${data.ip || "?????"}</span>
            </div>
            <div>
              <span>Longitude:</span>
              <span>${data.longitude || "?????"}</span>
            </div>
            <div>
              <span>Latitude:</span>
              <span>${data.latitude || "?????"}</span>
            </div>
            <div>
              <span>Origin:</span>
              <span>${data.region || "?????"}</span>
            </div>
            <div>
              <span>Country:</span>
              <span>${data.country_name || "?????"}</span>
            </div>
            <div>
              <span>Time:</span>
              <span>${new Date().toLocaleTimeString()}</span>
            </div>
            <div>
              <span>Date:</span>
              <span>${new Date().toLocaleDateString()}</span>
            </div>
            <div>
              <span>Resolution:</span>
              <span>${window.screen.width}</span>
              <span>x</span>
              <span>${window.screen.height}</span>
            </div>
          </div>
        </div> `;
}

async function getIpApi(place = "pre") {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    if (place === "pre") preRenderDOM.innerHTML += killfetch(data);
    if (place === "out")
      document.getElementById("output").innerHTML += killfetch(data);
  } catch (err) {
    if (place === "pre") preRenderDOM.innerHTML += killfetch();
    if (place === "out")
      document.getElementById("output").innerHTML += killfetch();
  }
}

function preRender(opt) {
  switch (opt) {
    case "welcome":
      preRenderDOM.innerHTML += welcome;
      break;
    case "figlet":
      preRenderDOM.innerHTML += figlet;
      break;
    case "stickman":
      preRenderDOM.innerHTML += stickman;
      break;
    case "killfetch":
      preRenderDOM.innerHTML += killfetch();
      break;
    case "hackerman":
      getIpApi();
      break;
  }
}

opts.forEach((item) => {
  preRenderDOM.innerHTML += `<div class=prompt-wrapper><span>${prompt}</span><span>${item}</span></div>`;
  preRender(item);
});
