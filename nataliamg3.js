function Pilihwarna(value) {
    var tema = document.getElementsByClassName("tema")

    if (value == "black") {
        for (let i = 0; i < tema.length; i++) {
            tema[i].style.color = 'white'
        }
        document.body.style.backgroundColor = value
    } else {
        for (let i = 0; i < tema.length; i++) {
            tema[i].style.color = 'black'
        }
        document.body.style.backgroundColor = value
    }
}

function Pilihmusic(value) {
    var music = document.getElementById("music")

    if (value == "gitar") {
        music.innerHTML = "Gitar adalah salah satu jenis musik dawai, alat musik gitar memainkannya dengan cara dipetik. Alat musik gitar tersusun atas sebuah bagian yang terdiri dari leher padat. Leher gitar dijadikan tempat senar yang berjumlah enam."
    } else if (value == "piano") {
        music.innerHTML = "Piano adalah alat musik yang dimainkan dengan jari-jemari tangan. Piano adalah jenis alat musik yang terpopuler di dunia dan alat musik yang dikategorikan alat musik tertua."
    } else if (value == "biola") {
        music.innerHTML = "Biola adalah sebuah instrumen musik dawai yang dimainkan dengan cara digesek. Alat musik ini disebut sebagai musik yang elegan dan harga alat musik biola relatif mahal ."
    } else if (value == "saxophone") {
        music.innerHTML = "Saxophone adalah instrumen yang masih tergolong dalam aerphone, single-reed woodwind instrument. Saxophone umumnya dihubungkan dengan popular music, big band music dan jazz. Alat musik saxophone dimainkan dengan cara ditiup."
    } else if (value == "drum") {
        music.innerHTML = "Drum adalah salah satu dari keluarga besar alat musik perkusi yang terdiri dari kulit yang direntangkan dan dipukul menggunakan tangan atau sebuah batang. "
    }
}

function factorial() {
    var angka = document.getElementById("angka").value
    var hasil = angka
    console.log(angka)

    for (let i = hasil - 1; i > 0; i--) {
        hasil *= i
    }

    var factorial = document.getElementById("factorial")
    factorial.innerHTML = `The factorial of ${angka} is ${hasil}`
}