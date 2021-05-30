var data = [
    "rekayasa perangkat lunak",
    "teknik penyimpanan tekstil",
    "teknologi pengolahan hasil pertanian",
    "teknik konstruksi batu dan beton"
];
console.log("ll");

function tampil(){
    var tabel = document.getElementById("tabel");
    tabel.innerHTML = "<tr><th>No</th><th>jurusan</th><th>Action</th></tr>";
    for (let i = 0; i < data.length; i++){
        var btnEdit = "<button class='btn-edit' onclick='edit("+i+")' type='button'>Edit</button>";
        var btnHapus = "<button class='btn-hapus' onclick='hapus("+i+")' type='button'>Hapus</button>";
        j = i +1;
        tabel.innerHTML += "<tr><td>" + j + "</td><td>" + data[i] + "</td><td>" + btnEdit + " " + btnHapus + "</td></tr> ";
    }
}
function tambah(){
    var input = document.querySelector("input[name=jurusan]");
    data.push(input.value);
    tampil();
    input.value = "";

}
function edit(id){
    var baru = prompt("edit",data[id]);
    data[id] = baru;
    tampil();

}
function hapus(id){
    data.pop(id);
    tampil();

}
tampil();