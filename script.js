
document.addEventListener("mousemove", (e) => {
    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");
});

const ICON = "https://images.icon-icons.com/2699/PNG/512/minecraft_logo_icon_168974.png";

const versions = [
{ name:"Beta 1.3", url:"https://chromecraft-beta-1-3.vercel.app/", desc:"Early build of Chromecraft, often unstable though." },
{ name:"Release 1.5.0", url:"https://chromecraft-1-5-0.vercel.app/", desc:"First release of early Chromecraft with redstone." },
{ name:"Release 1.8.7", url:"https://chromecraft-1-8-7.vercel.app/", desc:"Stability update so browsers could read without lag." },
{ name:"Release 1.12.2", url:"https://chromecraft-1-12-2.vercel.app/", desc:"Expansion update including some parrots!" },
{ name:"Release 1.14.4", url:"https://userarham.github.io/Chromecraft-1.14.4/", desc:"Optimization pass, added pillagers and villager jobs." },
{ name:"Release 1.16.5", url:"https://userarham.github.io/Chromecraft-1.16.5/", desc:"Nether update, including piglins." },
{ name:"Release 1.16.6", url:"https://chromecraft-1-16-6.vercel.app/", desc:"Latest build of Chromecraft." }
];

let selected = 0;

function render(){
    const list = document.getElementById("list");
    list.innerHTML = "";

    versions.forEach((v,i)=>{
        const div = document.createElement("div");
        div.className = "version" + (i===selected ? " active":"");

        div.innerHTML = `<img src="${ICON}"><div>${v.name}</div>`;

        div.onclick = ()=>{
            selected = i;
            update();
            render();
            localStorage.setItem("chromecraft_last", i);
        };

        list.appendChild(div);
    });

    update();
}

function update(){
    const v = versions[selected];
    document.getElementById("title").innerText = v.name;
    document.getElementById("desc").innerText = v.desc;
    document.getElementById("url").innerText = v.url;
}

function play(){
    window.location.href = versions[selected].url;
}

window.onload = ()=>{
    const saved = localStorage.getItem("chromecraft_last");
    if(saved !== null) selected = parseInt(saved);
    render();
};
