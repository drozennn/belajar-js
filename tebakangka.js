var angka = Math.floor(Math.random() * 10) + 1;
var nyawa = 2;
var pilihan = prompt('Pilih angka 1-10, nyawa anda tersisa ' + nyawa);

    while(pilihan != angka && nyawa != 0){
        if (pilihan < angka){
            alert('angka anda lebih kecil');
        } else if (pilihan > angka) {
            alert('angka anda lebih besar');
        }
        pilihan = prompt('Pilih angka 1-10, nyawa anda tersisa ' + nyawa);
        nyawa--;
    }


if (pilihan == angka) {
    alert('tebakan anda BENAR!');
} else if (pilihan != angka){
    alert('Maaf anda kalah, angka yang benar adalah ' + angka);
}