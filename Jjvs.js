eval(function (p, a, c, k, e, d) {
  e = function (c) {
    return (
      (c < a ? "" : e(parseInt(c / a))) +
      ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    );
  };
  if (!"".replace(/^/, String)) {
    while (c--) d[e(c)] = k[c] || e(c);
    k = [
      function (e) {
        return d[e];
      },
    ];
    e = function () {
      return "\\w+";
    };
    c = 1;
  }
  while (c--)
    if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
  return p;
})(
  '(function(){try{const a=document.querySelectorAll("#cover-upload"),b=document.querySelectorAll("#cover-url"),c=document.querySelectorAll(".notifs"),d=document.querySelectorAll(".waitsubmit"),e="023f4ffcaf1f4d9";a.forEach(a=>{a.addEventListener("change",a=>{const f=new FormData;f.append("image",a.target.files[0]),c.forEach(a=>{a.textContent="Gambar sedang diupload..."}),d.forEach(a=>{a.disabled=!0}),fetch("https://api.imgur.com/3/image",{method:"post",headers:{Authorization:`Client-ID ${e}`},body:f}).then(a=>a.json()).then(a=>{a.success?(b.forEach(a=>{a.value=a.data.link}),c.forEach(a=>{a.textContent="Berhasil diupload."}),d.forEach(a=>{a.disabled=!1})):console.error("Error uploading image:",a.error),c.forEach(a=>{a.textContent="Gagal mengupload gambar."}),d.forEach(a=>{a.disabled=!0})}).catch(a=>{console.error("Error uploading image:",a),c.forEach(a=>{a.textContent="Gagal mengupload gambar."}),d.forEach(a=>{a.disabled=!0})})})})}catch(a){console.error("Error in image pengajuan upload block:",a)}})();try{const a=document.querySelector("#isigambar-upload"),b=document.querySelector("#isigambar"),c=document.querySelector(".notif-isi"),d="023f4ffcaf1f4d9",e=[];a.addEventListener("change",async a=>{c.textContent="Gambar sedang diupload...";const f=[],g=async()=>{for(let b=0;b<a.target.files.length;b++){const c=new FormData;c.append("image",a.target.files[b]),c.textContent=`Meng-upload gambar ${b}...`;const d=new Promise((a,b)=>{setTimeout(()=>{fetch("https://api.imgur.com/3/image",{method:"post",headers:{Authorization:`Client-ID ${d}`},body:c}).then(a=>a.json()).then(c=>{c.success?a(c.data.link):console.error("Error uploading images:",c.error),a(null)}).catch(a=>{console.error("Error uploading images:",a),a(null)})},b*5e3)});f.push(d)}try{const a=await Promise.all(f),b=a.filter(a=>null!==a);e.push(...b),console.log(JSON.stringify(e)),b.value=JSON.stringify(e),c.textContent="Berhasil diupload."}catch(a){console.error("Error uploading images:",a),c.textContent="Gagal mengupload gambar."}})}catch(a){console.error("Error in image kamar upload block:",a)});',
  0,
  1,
  "split|function|image|querySelectorAll|document|notif|const|files|catch|querySelector|JSON|stringify|uploadPromises|target|append|link|error|Promise|FormData|fetch|then|textContent|console|new|disabled|log|body|Client|ID|data|success|author".split(
    "|"
  ),
  0,
  {}
)
