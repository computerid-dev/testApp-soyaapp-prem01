// Format: {id, name, cat, note, groups: [[judulGrup, [[paket, harga], ...]], ...]}
const ADMINS = [
  { name: "Admin 1", phone: "62895622363550", label: "0895-6223-63550" },
  { name: "Admin 2", phone: "628976477656", label: "0897-6477-656" }
];

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "video", label: "Streaming Video" },
  { id: "music", label: "Musik" },
  { id: "creative", label: "Desain & Editing" },
  { id: "ai", label: "AI" }
];

const PRODUCTS = [
  { id: "nf-strong", name: "Netflix Strong", cat: "video", note: "Login code / Empas", groups: [
    ["1 Profile 1 User", [["1 Hari",5100],["2 Hari",6100],["3 Hari",7300],["5 Hari",10500],["7 Hari",12000],["1 Bulan",26000]]],
    ["1 Profile 2 Users", [["1 Hari",5000],["2 Hari",6000],["3 Hari",7100],["5 Hari",9500],["7 Hari",11000],["1 Bulan",18000]]],
    ["Semi Private (bisa request profile + PIN)", [["1 Hari",8000],["3 Hari",16000],["7 Hari",18000],["1 Bulan",35000]]],
    ["Private", [["7 Hari",55000],["1 Bulan",140000]]]
  ]},
  { id: "nf-anti", name: "Netflix Anti Masalah", cat: "video", note: "Lebih stabil untuk pemakaian rutin", groups: [
    ["Harian 1P1U", [["1 Hari",8000],["3 Hari",11000],["7 Hari",16000],["1 Bulan",44000]]],
    ["Harian 1P2U", [["1 Hari",7000],["3 Hari",9000],["7 Hari",13000],["1 Bulan",28000]]],
    ["Semi Private", [["1 Hari",11000],["3 Hari",14000],["7 Hari",19000],["1 Bulan",47000]]]
  ]},
  { id: "vidio", name: "Vidio", cat: "video", note: "", groups: [
    ["Only TV", [["1 Tahun",10000]]],
    ["Platinum Mobile", [["1 Bulan (2 user)",20000],["1 Bulan Private",28000]]],
    ["Platinum All Device", [["1 Bulan (2 user)",23000],["1 Bulan Private",40000]]],
    ["Diamond", [["1 Bulan (2 user)",35000],["1 Bulan Private",45000]]]
  ]},
  { id: "disney", name: "Disney+", cat: "video", note: "", groups: [
    ["Sharing 10 User", [["1 Hari",5000],["3 Hari",7500],["1 Minggu",11500],["1 Bulan",18000]]],
    ["Sharing 8 User", [["1 Bulan",16500]]],
    ["Sharing 6 User", [["1 Hari",6500],["3 Hari",8500],["1 Minggu",12000],["1 Bulan",25500]]],
    ["Sharing 3 User", [["1 Bulan",39000]]]
  ]},
  { id: "loklok", name: "Loklok", cat: "video", note: "", groups: [
    ["Sharing Basic (1 Bulan)", [["5 User",14500],["3 User",16500]]],
    ["Sharing Standar (1 Bulan)", [["5 User",15500],["3 User",18500]]],
    ["Private", [["Basic",48500],["Standar",64500]]]
  ]},
  { id: "prime", name: "Amazon Prime", cat: "video", note: "", groups: [
    ["Sharing", [["4 User, 1 Bulan",7500],["3 User, 1 Bulan",8500],["2 User, 1 Bulan",9500]]],
    ["Private", [["1 Bulan",15000]]]
  ]},
  { id: "hbo", name: "HBO Max", cat: "video", note: "", groups: [
    ["Plan Standar", [["Sharing 1 Bulan",16500]]],
    ["Plan Ultimate", [["Sharing 1 Bulan",20500]]]
  ]},
  { id: "youtube", name: "YouTube Premium", cat: "video", note: "", groups: [
    ["Famplan", [["1 Bulan",6000],["2 Bulan",6700],["3 Bulan",7000]]],
    ["Indplan", [["1 Bulan",8300],["2 Bulan",18300],["3 Bulan",21300]]],
    ["Mixplan", [["2 Bulan",10800]]],
    ["Famhead", [["1 Bulan",9300]]]
  ]},
  { id: "wetv", name: "WeTV", cat: "video", note: "", groups: [
    ["Sharing", [["8 User, 1 Bulan",11000],["5 User, 1 Bulan",14500],["3 User, 1 Bulan",19000],["6 User, 3 Bulan",26000],["1 Tahun",37500]]],
    ["Private", [["1 Bulan",34000]]]
  ]},
  { id: "viu-sharing", name: "Viu Sharing", cat: "video", note: "Antilimit", groups: [
    ["Sharing", [["1 Bulan",5500],["1 Tahun",7500]]]
  ]},
  { id: "viu-private", name: "Viu Private", cat: "video", note: "", groups: [
    ["Private", [["1 Bulan",6500],["1 Tahun",9500]]]
  ]},
  { id: "spotify", name: "Spotify", cat: "music", note: "", groups: [
    ["Famplan (akun seller)", [["1 Bulan",19000],["2 Bulan",31000],["3 Bulan",46000]]],
    ["Famplan (akun buyer)", [["1 Bulan",25000]]],
    ["Indplan (akun seller)", [["1 Bulan",26000],["2 Bulan",39000]]]
  ]},
  { id: "apple-music", name: "Apple Music", cat: "music", note: "", groups: [
    ["Paket", [["iMess 1 Bulan",10000],["Individual 1 Bulan",14000]]]
  ]},
  { id: "canva", name: "Canva", cat: "creative", note: "", groups: [
    ["Member", [["1 Hari",3100],["7 Hari",3600],["1 Bulan",3800],["2 Bulan (no renew)",4000],["3 Bulan (no renew)",4500],["6 Bulan",5000],["1 Tahun (renew)",7000],["1 Tahun (no renew)",9000],["Lifetime",8000]]],
    ["Admin", [["1 Bulan",5000],["6 Bulan",9500],["1 Tahun",12000]]],
    ["Head", [["1 Bulan",9000],["1 Tahun",74000]]]
  ]},
  { id: "capcut", name: "CapCut Pro", cat: "creative", note: "", groups: [
    ["Harian", [["1 Hari",5500]]],
    ["Sharing", [["7 Hari",7500],["1 Bulan",15000]]],
    ["Private", [["7 Hari",10000],["1 Bulan",30000]]]
  ]},
  { id: "alight", name: "Alight Motion", cat: "creative", note: "", groups: [
    ["Sharing", [["1 Bulan",4000],["1 Tahun",4500]]],
    ["Private", [["1 Bulan",4300],["1 Tahun",6000]]],
    ["Akun buyer (1 Tahun)", [["Via link",4800],["Via login",7000]]]
  ]},
  { id: "chatgpt", name: "ChatGPT", cat: "ai", note: "Sharing, fullgar", groups: [
    ["ChatGPT Plus", [["8 User, 1 Bulan",21500],["5 User, 1 Bulan",33500]]],
    ["ChatGPT Go", [["1 Bulan",15500]]]
  ]},
  { id: "gemini", name: "Gemini Pro", cat: "ai", note: "", groups: [
    ["Via invite email buyer", [["1 Bulan",9000],["2 Bulan",11500],["3 Bulan",15500]]],
    ["Via link", [["18 Bulan",29000]]],
    ["Private", [["1 Bulan",23500]]]
  ]}
];
