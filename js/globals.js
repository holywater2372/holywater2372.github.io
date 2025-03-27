const outputEl = document.getElementById("output");
const inputEl = document.getElementById("terminal-input");
const terminalEl = document.getElementById("terminal");
const preRenderDOM = document.getElementById("prerender");
const promptDOM = document.getElementById("prompt");

let prompt = `C:\\Users\\H0lyWat3r>`;

const commands = {
  whoami: "Displays Username",
 "whoami /priv":"View Privileges",
  about: "Something about me",
  social: "My social networks",
  meme: "One meme - Updated every month",
  date: "Displays date",
  echo: "echo in current session",
  help: "Displays help menu",
  cls: "Clear terminal",
  dir: "To view the list of blogs",
  type: "To read files. Usage: type <filename>",
  "powershell.exe": "Spawns PowerShell hopefully",
  "cmd.exe": "Spawns Command Prompt hopefully",
  "Set-MpPreference -DisableRealtimeMonitoring":"Command for heckers, run at your own risk"
};

const social = [
  "<br>",
  'LinkedIn: <a href="https://www.linkedin.com/in/nazeef-hasan-khan" target="_blank" class="sociallink">linkedin/nazeef-hasan-khan</a>',
  'Github: <a href="https://github.com/Nzf07" target="_blank" class="sociallink">github/Nzf07</a>',
  'HackTheBox: <a href="https://app.hackthebox.com/profile/1202144" target="_blank" class="sociallink">Nzf07</a>',
  "<br>"
];

const blogs = [
  { name: "CPTS Review 2024", file: "cpts.html" },
  { name: "CRTO Review 2024", file: "crto.html" }
  
];

const pages = blogs.map((item) => item.file);



