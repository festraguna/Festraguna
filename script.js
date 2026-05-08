/**
 * ============================================================
 * PROJECT   : TEN DELEGATION 2026 - SMAN 10 BOGOR
 * AUTHOR    : FARREL AKBAR NAUFAL RAMADHAN
 * INSTAGRAM : @farrelize
 * VERSION   : 1.1.0 (Dynamic Group Edition)
 * ============================================================
 */

// --- 1. INITIALIZE & VISUAL EFFECTS ---
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('kelasContainer');
    if(container) {
        dataKelas.forEach(k => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="img/12${k.id}.jpg" onerror="this.src='https://via.placeholder.com/450x600?text=Foto+Sampul+12${k.id}'">
                <h2>CLASS 12 ${k.id}</h2>
            `;
            card.onclick = () => openModal(k);
            container.appendChild(card);
        });
    }

    // --- 2. EKSKUL RENDERER ---
    const ekskulCont = document.getElementById('ekskulContainer');
    const dataEkskul = [
        { nama: "Paskib", q: "Disiplin adalah nafas kami, kehormatan adalah segalanya." },
        { nama: "Pramuka", q: "Satu pandu, satu nusa, abadi dalam karya." },
        { nama: "Pmr", q: "Inter Arma Caritas, kemanusiaan di atas segalanya." },
        { nama: "Literasi", q: "Membaca dunia, menuliskan sejarah baru." },
        { nama: "EC", q: "Language is the bridge to the global future." },
        { nama: "Kirs", q: "Inovasi lahir dari rasa ingin tahu yang tak terbatas." },
        { nama: "Basket", q: "Win the heart before you win the game." },
        { nama: "Tradi", q: "Melestarikan akar, mempercantik masa depan." },
        { nama: "Moderen", q: "Express yourself through every beat and move." },
        { nama: "Teater", q: "Dunia adalah panggung, dan kita adalah pemeran utamanya." },
        { nama: "Rohis", q: "Membangun karakter mulia di bawah ridho-Nya." },
        { nama: "Rohkris", q: "Kasih yang mempersatukan, iman yang menguatkan." },
        { nama: "Handball", q: "Power, speed, and unstoppable teamwork." },
        { nama: "DCS", q: "Digital creativity, shaping the world of tomorrow." }
    ];

    if(ekskulCont) {
    dataEkskul.forEach(e => {
        const div = document.createElement('div');
        div.className = 'ekskul-card';
        
        // Mengambil gambar dari folder img/ berdasarkan nama ekskul
        div.innerHTML = `
            <img src="img/${e.nama.toLowerCase()}.jpg" alt="${e.nama}" onerror="this.src='https://via.placeholder.com/150?text=${e.nama}'">
            <span>${e.nama.toUpperCase()}</span>
        `;
        
        // Memanggil fungsi detail saat diklik tanpa teks sitasi
        div.onclick = () => showEkskulDetail(e.nama.toLowerCase()); 
        
        ekskulCont.appendChild(div);
    });
}

    setTimeout(() => {
        const loader = document.getElementById('loader');
        if(loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 1000);
        }
    }, 2000);
});

// Efek Partikel
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
    if(cursor) {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    }
});

function createDust() {
    const dust = document.createElement('div');
    dust.style.cssText = `position:fixed; width:2px; height:2px; background:rgba(212,175,55,0.4); z-index:1; pointer-events:none; border-radius:50%;`;
    dust.style.left = Math.random() * 100 + 'vw';
    dust.style.top = '-10px';
    document.body.appendChild(dust);
    dust.animate([
        { transform: 'translateY(0)', opacity: 0 },
        { opacity: 1, offset: 0.2 },
        { transform: `translateY(100vh) translateX(${Math.random() * 100 - 50}px)`, opacity: 0 }
    ], { duration: Math.random() * 3000 + 5000 });
    setTimeout(() => dust.remove(), 8000);
}
setInterval(createDust, 400);

// --- DATA KELAS LENGKAP (A - I) - SORTED A-Z ---
const dataKelas = [
     {
        id: 'A',
        names: [
            {nama: "Adiba Rahima Begum Madiadipura"},
            { nama: "Adisti Salsabila", ttl: "Bogor, 26 Agustus 2008", alamat: "Bogor", ig: "@addistiie", quote: "This isn’t goodbye, but see you letter" },
            { nama: "Akhsan Zikri Rifana", ttl: "Bogor, 13 April 2008", alamat: "Bogor", ig: "@khsan_3148"},
            { nama: "Aliyya Nur Hasanah", ttl: "Bogor, 18 November 2007", alamat: "Bogor", ig: "@lyya4a__", quote: "we accept the love we think we deserve" },
            { nama: "Andreas Reivan Imanoella", ttl: "Bogor, 28 Oktober 2007", alamat: "Bogor", ig: "@nmny_andres", quote: "mantap" },
            { nama: "Andriyani Yulinda", ttl: "Bogor, 26 Desember 2007", alamat: "Bogor", ig: "@yulindandryn", quote: "life doesn't stop at one chapter, there's always a chance to start again" },
            {nama: "Areta Ollydia Ma'ruf"},
            { nama: "Audy Fitri Ramadani", ttl: "Bogor, 12 Oktober 2007", alamat: "Bogor", ig: "@audyftrr", quote: "long story short, i survived." },
            { nama: "Christy Larastian Nugrohoputri", ttl: "Bogor, 31 Oktober 2008", alamat: "Bogor", ig: "@ch.31.8n", quote: "That was fun. Same time next year?" },
            {nama: "Danish Alfa Ramdhan"},
            { nama: "Dimas Bayu Kusuma", ttl: "Bogor, 7 Agustus 2007", alamat: "Bogor", ig: "@dimasmie", quote: "hidup itu berjalan,kalau capek gojek aja" },
            { nama: "Ekky Hertika Satria", ttl: "Bogor, 21 April 2008", alamat: "Bogor", ig: "@ekkystr_", quote: "Kucing naik pesawat tanpa tiket" },
            { nama: "Faith Aufa Ghani", ttl: "Bogor, 4 Desember 2007", alamat: "Bogor", ig: "@fa1thnr", quote: "ya" },
             { nama: "Irsyad Khoerul Anam", ttl: "Bogor, 23 April 2008", alamat: "Bogor", ig: "@justcallmesyad", quote: "Farrel kelas D baik" },
            { nama: "Keyla Cinta Erriva", ttl: "Bogor, 29 November 2007", alamat: "Bogor", ig: "@keycntaerrv", quote: "Qué será, será" },
            { nama: "Kimi Rai Syauqia", ttl: "Bogor, 18 Oktober 2007", alamat: "Bogor", ig: "@kimiraiii_", quote: "One day, you'll sit in the sun and things won't feel so bad anymore, Keep going." },
            { nama: "Luthfi Putra Jauhari", ttl: "Bogor, 11 Agustus 2008", alamat: "Bogor", ig: "@isiuthaai", quote: "i love u" },
            { nama: "Mahmuddin Hafidz Chairuzzady", ttl: "Batam, 31 Juli 2007", alamat: "Batam", ig: "@ud1ngamers", quote: "Wanna know about me? Ask Raden" },
            {nama: "Marwah Sinta Eldi Putri"},
            { nama: "Muhammad Rafi Agam", ttl: "Bogor, 3 Januari 2007", alamat: "Bogor", ig: "@rrafiagamm_", quote: "Never give up" },
             { nama: "Muhammad Alfarisi Kusumahwardhana", alamat: "Bogor", ig: "alfakvv", quote: "Keep goin" },
               {nama: "Muhammad Aqwam Zaid"},
               { nama: "Muhammad Asshidhiqie Pamungkas", ttl: "Bogor, 27 Desember 2008", alamat: "Bogor", ig: "dndikkk_", quote: "singkat saja" },
             {nama: "Muhammad Fauzan Zikry"},
            { nama: "Muhammad Ibnu Ibrahim", ttl: "Bogor, 17 September 2007", alamat: "Bogor", ig: "@ibupunajapah", quote: "tetap semangat dan jangan menyerah" },
            {nama: "Muhammad Kalil Gibran Ramadhan Zainudin"},
             {nama: "Muhammad Rava Adilean", ttl: "26 April 2008", alamat: "Bogor", ig: "dennrava", quote:"SIA NANGTANG AING NANGTUNG"},
              {nama: "Muhammad Razky Ramadhan Irmawan", alamat: "Bogor"},
               {nama: "Nabil Anugrah", ttl: "26 April 2008", alamat: "Bogor", ig: "dennrava", quote:"SIA NANGTANG AING NANGTUNG"},
            { nama: "Raden Ahmad Rafa Firdaus", ttl: "Bogor, 12 April 2007", alamat: "Bogor", ig: "@raden.shogun_", quote: "Wanna know about me? Ask Mahmuddin" },
            {nama: "Serliyana"},
            { nama: "Syafina Syahla Aulia Widodo", ttl: "Jakarta, 05 Juli 2008", alamat: "Jakarta", ig: "@slay.fin", quote: "Starting my journey in psychology" },
            { nama: "Tubagus Muhammad Alfauzan Alfaris"},
            { nama: "Valerina Maliqa Anastasia", ttl: "Bogor, 20 Mei 2008", alamat: "Bogor", ig: "@valerinanst", quote: "-" },
            { nama: "Yumna Zhafira Khansa", ttl: "Tangerang, 19 Februari 2007", alamat: "Tangerang", ig: "@yzhafiraansa", quote: "You’ll never be perfect" },
            { nama: "Zaki Askar An Naksyabhi",  alamat: "Bogor"},
        ],
        groupCaptions: ["Group 1", "Group 2", "Group 3", "Group 4", "Group 5"] 
    },
    {
        id: 'B',
        names: [
            { nama: "Adhinda Trieprita Ravelina", ttl: "Tangerang, 29 April 2008", alamat: "Tangerang", ig: "@adhindaravelina", quote: "I'll be the one that stays 'til the end" },
            { nama: "Adimas Prinsa Amanda Melodicca", ttl: "Bogor, 03 Maret 2008", alamat: "Bogor", ig: "@prinsamelody", quote: "Setiap langkah menuju keberhasilan adalah langkah menuju diri yang lebih baik" },
            { nama: "Ahmad Zaki Ajwad", ttl: "Bogor, 20 Februari 2008", alamat: "Bogor", ig: "@jawaatt", quote: "stars can't shine without darkness" },
            { nama: "Anas Abujabir", ttl: "Bogor, 01 November 2007", alamat: "Bogor", ig: "@yuyyyhhyyy", quote: "2024" },
            { nama: "Arditya Bima Pradana", ttl: "Bogor, 21 Mei 2007", alamat: "Bogor", ig: "@bbimardtya", quote: "Long as the outcome is income -Drake" },
            { nama: "Arif Zacky Arham El Marom", ttl: "Bogor, 25 April 2008", alamat: "Bogor", ig: "@rifzckyy", quote: "people will never forget how you made them feel." },
            { nama: "Audi Budi Anira ", alamat:"Bogor", ig:"audianira", quote:"You dont have to be sorry for leaving and growing up"},
            { nama: "Azka Adila Istiantie", ttl: "Bogor, 04 November 2008", alamat: "Bogor", ig: "@_azkadila", quote: "If Mark Lee can chase his dreams, I guess I can chase mine too." },
            { nama: "Azrian Almirza Vhasa", ttl: "Grobogan, 12 April 2009", alamat: "Grobogan", ig: "@azrianvhasa", quote: "Es wird Wunder geben, wenn wir glauben" },
            { nama: "Bayu Crisnawan Daewangga Putra", ttl: "Klaten, 27 Maret 2008", alamat: "Klaten", ig: "@inii_bayyy", quote: "tetep berjuang untuk masa depan" },
            { nama: "Bintang Galang Diputra", ttl: "Bogor, 04 Januari 2008", alamat: "Bogor", ig: "@_bintanggalang", quote: "High school was a mess, but y’all made it a vibe." },
            { nama: "Bintang Satriani Ramadhan", ttl: "Bogor, 07 Oktober 2007", alamat: "Bogor", ig: "@bintangsatrianiramadhan", quote: "Imbangi gw, imbangi gw" },
            { nama: "Carissa Devi Artanti", ttl: "Bogor, 18 Oktober 2008", alamat: "Bogor", ig: "@crsdrt", quote: "I'm scared of gettin' older" },
            { nama: "Dandi Maulana", ttl: "Bogor, 24 agustus 2007", alamat: "bogor", ig: "@tuandandi", quote: "I was born to win" },
            { nama: "Deswita Bunga Riani", alamat: "bogor", ig: "@delsraes", quote: "Never give up on dream" },
            { nama: "Fakhri Maulana Yusuf", ttl: "Bogor, 3 April 2008", alamat: "Bogor", ig: "@Fakhri.myusuf", quote: "Natura non contristatur - Alam tidak bersedih" },
            { nama: "Farel Setya Achyunda Putra", ttl: "Bogor, 6 Juli 2007", alamat: "Bogor", ig: "@farel.stya", quote: "GAPERLU JADI ORANG BAIK, JADI ORANG KAYA AJA" },
            { nama: "Ghaida Azka Putria Anugrah", ttl: "Bogor, 03 Agustus 2008", alamat: "Bogor", ig: "@gaidanugrh", quote: "c’est la vie, and the story goes on" },
            { nama: "Hanindya Nabila Pratomo", ttl: "Bogor, 28 Agustus 2008", alamat: "Bogor", ig: "@hanindyanp_", quote: "I’ve been the archer, I’ve been the prey." },
            { nama: "Keisya Syahputri Singgih", ttl: "Jakarta, 17 Mei 2008", alamat: "Jakarta", ig: "@keiisyh", quote: "don't be too hard on yourself" },
            { nama: "Made Alicia Chandra Wijaya Tasma", ttl: "Bogor, 18 Juni 2008", alamat: "Bogor", ig: "@robbieincave", quote: "I am no bird; and no net ensnares me." },
            { nama: "Mark Stevi Hadulu", alamat: "Bogor", ig: "@markstevh", quote: "Jesus is always with you" },
            { nama: "Mediatma Rizky Ramadhan", ttl: "Bogor, 18 September 2008", alamat: "Bogor", ig: "@atmarrama", quote: "first of all i would to thank to my bestfriend, gpt." },
            { nama: "Muhamad Wahyudin", ttl: "Bogor, 21 Agustus 2008", alamat: "Bogor", ig: "@wahiidhh", quote: "We never know until we try" },
            { nama: "Muhammad Faldhi Irawan", ttl: "Jakarta, 22 maret 2008", alamat: "Jakarta", ig: "@Faldhi irawan", quote: "Semoga lebih baik" },
            { nama: "Muhammad Reza Gustama", ttl: "Bogor, 18 Agustus 2008", alamat: "Bogor", ig: "@rezagustama_", quote: "small progres is still progres" },
            { nama: "Muhammad Yusup", ttl: "bogor, 12 juli 2008", alamat: "bogor", ig: "@mhmmdyspp_", quote: "apis" },
            { nama: "Nabil Al Fahri", ttl: "Bogor, 2 Juni 2008", alamat: "Bogor", ig: "@nabilgombloh", quote: "anyone can be anything" },
            { nama: "Nabil Asad Ahmad", ttl: "Bogor, 2 November 2007", alamat: "Bogor", ig: "@nblsdmh", quote: "semangat nyenggol yb nya ya mo, biar bisa makan" },
            { nama: "Nadya Rayyani", ttl: "Depok, 16 November 2007", alamat: "Depok", ig: "@naddyaa.r", quote: "In the end, I'm gonna be alright - LANY" },
            { nama: "Nail Fawwaz Aydin", ttl: "Bogor, 6 November 2007", alamat: "Bogor", ig: "@nailfwwz", quote: "one last pict and I'll be gone" },
            { nama: "Rifaa Alqierasyi", ttl: "Bogor, 5 Juli 2008", alamat: "Bogor", ig: "@rflqrsy_", quote: "Eternal sunshine of the spotless mind!" },
            {nama: "Salma Aisyah", alamat:"Bogor"},
            { nama: "Sean Sealift Nangkoda", ttl: "BOGOR, 30 DESEMBER 2007", alamat: "BOGOR", ig: "@seyynangkoda", quote: "Tawa di kelas hari ini akan jadi cerita indah di masa depan" },
            { nama: "Siti Fatimah", ttl: "Bogor, 17 April 2008", alamat: "Bogor", ig: "@fftmms_", quote: "give peace a chance, let the fear you have fall away" }
        ],
        groupCaptions: ["Group 1", "Group 2", "Group 3", "Group 4", "Group 5", "Group 6"] 
    },
    {
        id: 'C',
        names: [
            { nama: "Almira Malkaesa", ttl: "Bogor, 26 April 2008", alamat: "Bogor", ig: "@mirakaesaa", quote: "a flower is beautiful for its bloom is not eternal" },
            { nama: "Amanda Aprilia", ttl: "bogor, 12 April 2008", alamat: "bogor", ig: "just_pril1", quote: "terimakasih hasilnya memuaskan" },
            { nama: "Amelita Styawati", ttl: "Bogor, 25 Februari 2008", alamat: "Bogor", ig: "@amelitaasty", quote: "Money is the reason we exist" },
            { nama: "Astrie Nabila Wirawan", ttl: "Kediri, 09 April 2008", alamat: "Kediri", ig: "@_astrieenbw", quote: "It'll be over in no time. – Frank Ocean" },
            { nama: "Azzahra Raisya Putri", ttl: "Bogor, 07 Oktober 2007", alamat: "Bogor", ig: "@raishashz", quote: "I rock, I roll, I bloom, I grow" },
            { nama: "Fahri Dimas Sasongko", ttl: "Yogyakarta, 23 Oktober 2008", alamat: "Yogyakarta", ig: "@dims.desu", quote: "bagai padi semakin berisi semakin merunduk" },
            { nama: "Faiz Rizq Muliansyah", ttl: "Bandung, 31 Mei 2008", alamat: "Bandung", ig: "fai.05_", quote: "first step always the hardest" },
            { nama: "Fathir Rizky Pratama Siregar", alamat: "Bogor", ig: "@fathirrps_", quote: "Abdi negara nama tengah ku" },
            { nama: "Fawaz Maulana", ttl: "Cirebon, 17 Juli 2008", alamat: "Cirebon", ig: "@fawazmaulanaa", quote: "well" },
            { nama: "Haidar Ghozy Albadi", ttl: "Bogor, 11 Agustus 2008", alamat: "Bogor", ig: "@godarrrrr", quote: "Put Your Trust in Allah" },
            { nama: "Haidar Nanda Syahrial", ttl: "Bogor, 17 November 2007", alamat: "Bogor", ig: "ruth_do_kungfu", quote: "Jangan lupa baca komik clover lover" },
            { nama: "Jezen Rezqy Ilahmsayh", ttl: "Bogor, 08 Juni 2008", alamat: "Bogor", ig: "@jezennrezqy_", quote: "pembinis kerasa" },
            { nama: "Kaisar Hamizan Syahputra", ttl: "Bogor, 08 November 2008", alamat: "Bogor", ig: "@kaisarhamizans", quote: "Tetes keringat adalah doa" },
            { nama: "Kayla Aura Aurellia", ttl: "Bogor, 11 Oktober 2007", alamat: "Bogor", ig: "@aurakaylaa_", quote: "hiduplah selayak layaknya." },
            { nama: "Kheyla Puspa Yulianata", ttl: "Bogor, 11 February 2008", alamat: "Bogor", ig: "@kheylapuspa14", quote: "hidupmu adalah ceritamu buatlah yang terbaik." },
            { nama: "M. Noval", ttl: "Bogor, 06 November 2007", alamat: "Bogor", ig: "@nvmhmmd_09", quote: "Apa yg sudah ditakar tidak akan tertukar" },
            { nama: "Muhamad Raihan", ttl: "Bogor, 08 April 2008", alamat: "Bogor", ig: "@mr_raiihan", quote: "Hidup ini bagaikan lakara yang berlayar" },
            { nama: "Muhamad Rizki Aifkadari", ttl: "Bogor, 19 Juni 2008", alamat: "Bogor", ig: "tiziy_ptn_ipb", quote: "Jangan menyerah, prosesmu sedang berjalan" },
            { nama: "Muhammad Naufal Firdaus", ttl: "Bogor, 30 November 2007", alamat: "Bogor", ig: "@naufalfirdauss._", quote: "i walk through life like a traveler" },
            {nama:"Muhammad Nizzar Ibnu Fadillah", alamat:"Bogor"},
            { nama: "Muhammad Ra'id Al Rafi", ttl: "Bogor, 28 November 2008", alamat: "Bogor", ig: "@mhmmadrfiii", quote: "be loyal to your future not your past" },
            {nama: "Muhammad Rakhaa Ammar Taufiq", alamat: "Bogor"},
            { nama: "Muhammad Zaki Habibi", ttl: "05 Juli 2008", alamat: "Bogor", ig: "@zack_hbibi", quote: "Maybe you needed that lose to win." },
            { nama: "Natan Yoel Dirgayusa Tuwaidan", ttl: "Depok, 15 April 2008", alamat: "Depok", ig: "natanyoel_", quote: "a perfect diamond is the result of hard work" },
            { nama: "Nathan Aizha Ardani", ttl: "Bogor, 1 Juli 2008", alamat: "Bogor", ig: "@Peanuttannn", quote: "Semoga semua perjuangan menjadi awal kesuksesan" },
            { nama: "Nazwhan Khadafy", ttl: "Bogor, 2 Maret 2008", alamat: "Bogor", ig: "@nzkhdfy" },
            { nama: "Nur Rahmadina Putri", ttl: "Tangerang, 6 Oktober 2005", alamat: "Tangerang", ig: "@dindarahn", quote: "Good bye smanten, Hello Bakrie University" },
            { nama: "Pandya Yuziel Mahardhika", ttl: "Bekasi, 10 Juni 2007", alamat: "Bekasi", ig: "@pandyayuziel", quote: "Persija" },
            { nama: "Revania Larasati", ttl: "Bogor, 16 Agustus 2006", alamat: "Bogor", ig: "@rvnialaras", quote: "we accept the love we think we deserve" },
            { nama: "Rubayyi Fitri", ttl: "Bogor, 28 Agustus 2008", alamat: "Bogor", ig: "@ryu_bayiik", quote: "dan masuklah kedalam surga-Ku" },
            { nama: "Salsa Raihana", ttl: "Jakarta, 29 Mei 2008", alamat: "Jakarta", ig: "@salsrhna", quote: "A real loser is somebody that’s so afraid of not winning" },
            { nama: "Salwa Aulia Fitri", ttl: "Bogor, 13 Oktober 2007", alamat: "Bogor", ig: "@salw4hh", quote: "Aku, mimpi, dan perjalanan yang masih panjang." },
            { nama: "Satria Rasya Pratama", ttl: "Bogor, 21 Desember 2007", alamat: "Bogor", ig: "@aboutsatt", quote: "The best proof that you're on the right path" },
            { nama: "Sonia Farha Nur Imani", ttl: "Bogor, 18 Juli 2008", alamat: "Bogor", ig: "@soniaafarha", quote: "brain, beauty, behaviour" },
            { nama: "Verlita Cahaya Yanuaryva", ttl: "Bogor, 03 Januari 2008", alamat: "Bogor", ig: "@_verlitayfahaya", quote: "Berani bermimpi adalah langkah pertama menuju kenyataan" },
            { nama: "Yasmine Nur Aliya", ttl: "Bogor, 14 Februari 2008", alamat: "Bogor", ig: "@1402lia_liaa", quote: "semangat" }
        ],
       groupCaptions: ["Group 1", "Group 2", "Group 3", "Group 4", "Group 5", "Group 6"] 
    },
    {
        id: 'D',
        names: [
            { nama: "Ahri", ttl: "Bogor, 12 September 2007", alamat: "Bogor", ig: "@44hriii", quote: "SEMANGAT TERUS DUNIA KEJAM" },
            { nama: "Annisa Luthfiyah Napitupulu", ttl: "Bogor, 18 Desember 2007", alamat: "Bogor", ig: "@annisaluthfyhh", quote: "Only forwards, never backwards." },
            { nama: "Annisa Putri Zahra", ttl: "Bogor, 31 Desember 2007", alamat: "Bogor", ig: "@ansptrzhr._", quote: "Your best does not have to be perfect." },
            { nama: "Ardiani Kayla Radisty", ttl: "Bogor, 24 Januari 2008", alamat: "Bogor", ig: "@diann24._", quote: "What matter is the heart inside." },
            { nama: "Audya Rahmadina Kamila", ttl: "Bogor, 21 Februari 2008", alamat: "Bogor", ig: "@audykamilaa_", quote: "We came as strangers, left as memories." },
            { nama: "Augustine Almaghfira", ttl: "Bogor, 07 Agustus 2008", alamat: "Bogor", ig: "@almajanggar", quote: "i wish i was a cat, no study" },
            { nama: "Brilliant Ayu Widia Putri", ttl: "Lamongan, 22 April 2008", alamat: "Lamongan", ig: "@brlyu_22", quote: "Berproseslah sampai kau menjadi bintang" },
            { nama: "Bunga Nur Aprilia", ttl: "Bogor, 20 April 2008", alamat: "Bogor", ig: "@bunganrapr", quote: "-" },
            { nama: "Chelsea Meirianni Magirintua", ttl: "19 Mei 2008", alamat: "Bogor", ig: "@eciyy_08", quote: "tuhan baik" },
            { nama: "Davin Anjarianto", ttl: "Bogor, 24 April 2008", alamat: "Bogor", ig: "@dav.n_an", quote: "allah tidak akan menghalanginya" },
            { nama: "Devan Rama Radithya", ttl: "Bogor, 5 Desember 2007", alamat: "Bogor", ig: "@dvnrama_", quote: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا " },
            { nama: "Farrel Akbar Naufal Ramadhan", ttl: "Bogor, 05 Oktober 2007", alamat: "Bogor", ig: "@farrelize", quote: "Some people quietly shape those moments." },
            { nama: "Hasna Khalilah Hadi", ttl: "Depok, 12 April 2007", alamat: "Depok", ig: "@nakheshaa", quote: "we’ll never be those kids again" },
            { nama: "Jihan Aqilah Azzahra", ttl: "Bogor, 01 Juni 2008", alamat: "Bogor", ig: "@jiqilazzahra_", quote: "Big girls don't cry" },
            { nama: "Kalyca Alisha Aurellia", ttl: "Bogor, 07 April 2008", alamat: "Bogor", ig: "@kalycaalisha_", quote: "Life is given only once, so give it your best" },
            { nama: "Luthfiya Margaretha", ttl: "Bogor, 11 Maret 2008", alamat: "Bogor", ig: "@luthfi_yaar", quote: "Happiness can be found even in the darkest times" },
            { nama: "Marsel Nehemia Barus", ttl: "Bogor, 03 Desember 2008", alamat: "Bogor", ig: "mars_nb3", quote: "akan menuai dengan bersorak-sorai" },
            { nama: "Mohammad Aria Kundrat", ttl: "Bogor, 14 Desember 2007", alamat: "Bogor", ig: "ariakundrat@gmail.com", quote: "Harta karunku terletak pada teman-temanku." },
            { nama: "Mohammad Youri Januar", ttl: "Bogor, 06 Januari 2008", alamat: "Bogor", ig: "@myourijanuar26", quote: "they were nice." },
            { nama: "Mozha Faulina", ttl: "Bogor, 27 Agustus 2008", alamat: "Bogor", ig: "@queenxyavi_", quote: "sukses terus buat angkatan 26" },
            { nama: "Muhammad Anfi", ttl: "Jakarta, 29 November 2007", alamat: "Jakarta", ig: "-", quote: "Diam kadang lebih bermakna" },
            { nama: "Muhammad Faathir Milanneto", ttl: "Bogor, 14 Januari 2008", alamat: "Bogor", ig: "@bakpauayamnyamnyam", quote: "Every farewell brings a memory" },
            { nama: "Muhammad Refin Alfachrizi", ttl: "Jakarta, 09 November 2007", alamat: "Jakarta", ig: "rfnalfch_", quote: "Keberhasilan tidak datang pada orang yang menunggu" },
            { nama: "Nadya Delia Permata", ttl: "Jakarta, 08 Desember 2008", alamat: "Jakarta", ig: "@ndydelia_08", quote: "Mulailah harimu dengan senyuman" },
            { nama: "Naufal Ahmadinejad", ttl: "Bogor, 11 Juli 2007", alamat: "Bogor", ig: "@_nauflahmd07", quote: "Jangan menyerah sebelum mencoba" },
            { nama: "Raisa Zafira Rahmayani", ttl: "Bogor, 14 Maret 2008", alamat: "Bogor", ig: "@z4firaa_03", quote: "Remembering is easy. It’s forgetting that’s hard" },
            { nama: "Raisya Putri Gunawan", ttl: "Bogor, 30 Januari 2008", alamat: "Bogor", ig: "@raiissy4_", quote: "Litani dengan renjana akan selalu nirmala." },
            { nama: "Revalina Gryska Zivanna Usior", ttl: "Biak, 28 Juni 2008", alamat: "Biak", ig: "@revgryzvn_", quote: "Jangan menurut ilmu, karena ilmu tidak salah" },
            { nama: "Rizky Noval Prasetyo", ttl: "Bogor, 08 November 2007", alamat: "Bogor", ig: "@rizkynoval.p", quote: "Semoga perjalanan hidup kita meningkat" },
            { nama: "Sheila Aulia Febriyanti", ttl: "Bekasi, 11 Februari 2008", alamat: "Bekasi", ig: "@sheilaauliaf", quote: "a flower is beautiful for its bloom is not eternal" },
            { nama: "Shevira Bianika Candra", ttl: "Bogor, 19 Juni 2007", alamat: "Bogor", ig: "@shevira_thv", quote: "Some moments quietly shape a lifetime." },
            { nama: "Silvia Anggraeni", ttl: "Bogor, 08 Desember 2007", alamat: "Bogor", ig: "@silpianggrnii", quote: "belum nemu yang mirip zayn malik" },
            { nama: "Talitha Edgina Fikra Prameswari", ttl: "Bekasi, 08 September 2007", alamat: "Bekasi", ig: "@talithaedgina", quote: "are we out of the woods yet?" },
            { nama: "Vina Khoirunnisa", ttl: "Bogor, 07 November 2008", alamat: "Bogor", ig: "@viinluvly", quote: "namanya juga hidup, kadang digidaw" },
            { nama: "Zahiroh Syifa Qolbi", ttl: "Jakarta, 18 Oktober 2008", alamat: "Jakarta", ig: "@zzahiqq", quote: "Time well spent, see you around!" }
        ],
        groupCaptions: ["Group 1", "Group 2", "Group 3", "Group 4", "Group 5", "Group 6"] 
    },
    {
        id: 'E',
        names: [
            { nama: "Aisah Rayan Safia", ttl: "Bogor, 8 September 2008", alamat: "Bogor", ig: "@aisyhrynn_", quote: "Sampai jumpa di kesuksesan." },
            { nama: "Auliza Putri", ttl: "Bogor, 25 September 2008", alamat: "Bogor", ig: "@aullxptr", quote: "menyambut garis selesai" },
            { nama: "Fadlan Restu Mulia", ttl: "Bogor, 27 Agustus 2008", alamat: "Bogor", ig: "@frestumulia", quote: "Netral, Berteman Dengan Siapapun" },
            { nama: "Faris Muhammad Izzuddin", ttl: "Bandung, 27 Februari 2008", alamat: "Bandung", ig: "@frytsp", quote: "Study hard, pray hard, istirahard" },
            { nama: "Fathiane Rafa Aqilah", ttl: "Bogor, 10 September 2008", alamat: "Bogor", ig: "@anfathiaaaah", quote: "hidup itu singkat, cuman 5 huruf" },
            { nama: "Fatih Failasufa Hermansyah", ttl: "Tuban, 08 Agustus 2006", alamat: "Tuban", ig: "@failasufatih", quote: "I hate Summer." },
            { nama: "Imelda Pasha Sagita", ttl: "Yogyakarta, 13 Desember 2007", alamat: "Yogyakarta", ig: "@imeeldsa_", quote: "Embracing the beautiful chaos" },
            { nama: "Innaya Rahmania", ttl: "Bogor, 01 Juli 2007", alamat: "Bogor", ig: "@nayarhmnia", quote: "Grateful for the memories, ready for the future." },
            { nama: "Irene Ramadhani", ttl: "Bogor, 23 September 2008", alamat: "Bogor", ig: "@reneermdhni", quote: "yaudah lah" },
            { nama: "Karisa Aulia Putri", ttl: "Bogor, 07 Januari 2009", alamat: "Bogor", ig: "@auleasyaa._", quote: "sukses berawal dari mimpi, makanya saya suka tidur" },
            { nama: "Keysha Aprilia Putri Tristian", ttl: "Bogor, 1 April 2008", alamat: "Bogor", ig: "@Key_jie0105", quote: "Kau tidak butuh taman yang rapi untuk tumbuh menjadi yang paling indah" },
            { nama: "Khailla Aryani", ttl: "Bogor, 29 Maret 2008", alamat: "Bogor", ig: "@khiyyyaw", quote: "Keep on going with your silly dream" },
            { nama: "Khansayla Berlian Hidayat", ttl: "Bogor, 14 Januari 2008", alamat: "Bogor", ig: "@khansaylaberlian", quote: "too glam to give a damn" },
            { nama: "Khiar Naraseka", ttl: "Bogor, 09 Desember 2007", alamat: "Bogor", ig: "khiaarr_", quote: "Shine in your own light" },
            { nama: "Muhammad Andika Pratama", ttl: "Bogor, 9 April 2008", alamat: "Bogor", ig: "@mhhmmddika28", quote: "mantap" },
            { nama: "Muhammad Hafizh Marwan", ttl: "Bogor, 22 Agustus 2007", alamat: "Bogor", ig: "@callme_fizh2", quote: "Life is a journey, and I’m enjoying every step" },
            { nama: "Mutya Asmara Putri", ttl: "Bogor, 29 Juni 2008", alamat: "Bogor", ig: "@mtysmr_p", quote: "percaya pada keindahan mimpinya" },
            { nama: "Nabilla Ardella", ttl: "Bogor, 02 Maret 2008", alamat: "Bogor", ig: "@nbllaard_", quote: "High school was the chapter where our stories began" },
            { nama: "Naurah Azalia Sabilah", ttl: "Bogor, 27 Juli 2008", alamat: "Bogor", ig: "@nnou.r4a", quote: "in the end, everything will be fine." },
            { nama: "Nayla Nuarista", ttl: "Bogor, 06 Januari 2008", alamat: "Bogor", ig: "@naylanuaristaa", quote: "saatnya menulis cerita baru." },
            { nama: "Nurvacha Alfarizky", ttl: "Bogor, 04 Desember 2007", alamat: "Bogor", ig: "@PokerAS_Hitam", quote: "Ga ada" },
            { nama: "Panji Wishnutama", ttl: "Purworejo, 15 Februari 2008", alamat: "Purworejo", ig: "@pnjiwshntma", quote: "Dream high, work hard, take the risk" },
            { nama: "Parda", ttl: "Bogor, 28 Februari 2008", alamat: "Bogor", ig: "@1arrds/Parda", quote: "Mantap" },
            { nama: "Raihan Ahmad Hisyam Lubis", ttl: "Bogor, 15 Mei 2008", alamat: "Bogor", ig: "@raihanahmad852", quote: "selalu berusaha jadi lebih baik." },
            { nama: "Raisya Amelia", ttl: "Bogor, 26 Juni 2008", alamat: "Bogor", ig: "@raisya.aml", quote: "be yourself and know that, that's good enough" },
            { nama: "Retno Alfita Luthfiyati", ttl: "Bogor, 22 Juni 2008", alamat: "Bogor", ig: "@42shinne_", quote: "The world is beautiful when we're together" },
            { nama: "Revan Dwi Septian", ttl: "Jakarta, 17 September 2008", alamat: "Bogor", ig: "@revan_s.08", quote: "your life is the story you write for yourself" },
            { nama: "Revana Anggraeni", ttl: "Bogor, 05 Maret 2008", alamat: "Bogor", ig: "@rvanggraeni", quote: "dreams can come true" },
            { nama: "Rifa Aulia Ramadani", ttl: "Bogor, 30 Oktober 2007", alamat: "Bogor", ig: "@rfaa_.7", quote: "From ‘What’s the assignment?’ to ‘What’s the plan?" },
            { nama: "Ronel Immanuelo", ttl: "Bogor, 21 Juni 2008", alamat: "Bogor", ig: "@nuellowy", quote: "myself is the definition" },
            { nama: "Salsabila Nazmi", ttl: "Bogor, 23 Januari 2008", alamat: "Bogor", ig: "cacaseasonn23", quote: "Unik" },
            { nama: "Salwa Salsabila Esti Ningtyas", ttl: "Bogor, 16 Maret 2008", alamat: "Bogor", ig: "@bilahslw_", quote: "Jadilah dirimu sendiri, dan bermanfaatlah" },
            { nama: "Sri Mulyani", ttl: "Bogor, 14 Maret 2008", alamat: "Bogor", ig: "@mlynsri", quote: "sukses selalu" },
            { nama: "Sunria", ttl: "Bogor, 21 Februari 2008", alamat: "Bogor", ig: "@ovys.anguk", quote: "Raihan Ahmad Hisyam Lubis" },
            { nama: "Talitha Salsabila", ttl: "Bogor, 13 April 2008", alamat: "Bogor", ig: "@waterfallingtotheflower", quote: "Semoga kita selalu berada dalam karunia-Nya." },
            { nama: "Zahra Putri Adhela", ttl: "Bogor, 2 November 2007", alamat: "Bogor", ig: "zahraadhela_", quote: "This chapter ends, but the story goes on." }
        ],
        groupCaptions: ["Group 1", "Group 2", "Group 3", "Group 4", "Group 5", "Group 6"] 
    },
    {
        id: 'F',
        names: [
            { nama: "Adinda Khumayra", ttl: "Bogor, 26 Juni 2007", alamat: "Bogor", ig: "@adiinkhumay_", quote: "Hidup tidak memiliki kewajiban memberi apa yang kita harapkan." },
            { nama: "Allikha Gadiza Johan", ttl: "Bogor, 20 Agustus 2007", alamat: "Bogor", ig: "allikhaiza", quote: "Suffered, leanerd, changed." },
            { nama: "Annisa Salma Billah", ttl: "Bogor, 21 Juni 2008", alamat: "Bogor", ig: "@__an.sb_", quote: "I hate anyone who looks better than me" },
            { nama: "Anugrah Alif Alfhatir", ttl: "Bogor, 30 Juli 2008", alamat: "Bogor", ig: "anugraahalif_", quote: "Blooming at my own pace." },
            { nama: "Argia Diandra", ttl: "Bogor, 13 Mei 2008", alamat: "Bogor", ig: "@mayygiiaa_", quote: "bangga bisa sampai di titik ini." },
            { nama: "Bimo Nugraha", alamat: "Bogor", ig: "@Bimo.nugraha", },
            { nama: "Denita Cahaya Amelia", ttl: "Bogor, 26 Desember 2007", alamat: "Bogor", ig: "nxx.nta", quote: "Plant hope, harvest dreams." },
            { nama: "Fadhil Wahyu Mukti", ttl: "Bogor, 11 July 2008", alamat: "Bogor", ig: "@1522things", quote: "Goodbye and good luck!" },
            { nama: "Fardda Rafeyfa", ttl: "Bogor, 22 Juni 2007", alamat: "Bogor", ig: "@meisiamf_", quote: "Less talk, more slay. Let the vibe speaks." },
            { nama: "Fariha Adellia Virgiandaru Huzna", ttl: "Jember, 1 Agustus 2008", alamat: "Jember", ig: "@frhaadellia", quote: "Carpe diem." },
            { nama: "Farras Aqila Fikri", ttl: "Bogor, 28 April 2008", alamat: "Bogor", ig: "@frrasaqilaa", quote: "chasing a heart is like chasing a ghost" },
            { nama: "Gerrard Axel Hermanus", ttl: "Bogor, 29 November 2007", alamat: "Bogor", ig: "@geraxell_", quote: "I'm not clearing any rumors. I probably did do it" },
            { nama: "Gita Wara Ramadani", ttl: "Bogor, 25 September 2008", alamat: "Bogor", ig: "@gitaawr", quote: "May our friendship never end!" },
            { nama: "Hisani Taqiyya", ttl: "Bogor, 17 Februari 2008", alamat: "Bogor", ig: "@hisani_17", quote: "hal-hal yang manis tergantung pilihanmu sendiri." },
            { nama: "Keysa Medina Apriliani", ttl: "Bogor, 08 April 2008", alamat: "Bogor", ig: "@kysaaprl_", quote: "every end has a new begining." },
            { nama: "Maisya Almaidah", ttl: "Bogor, 20 Mei 2008", alamat: "Bogor", ig: "@mysa20_", quote: "Do you only love me, 'cause you have to?" },
            { nama: "Mita Ramadanti", ttl: "Bogor, 20 April 2008", alamat: "Bogor", ig: "@mitrmadant", quote: "Love is the poetry of the soul." },
            { nama: "Moch Rizki", ttl: "Bogor, 26 Januari 2008", alamat: "Bogor", ig: "@mhmdrzkiii_", quote: "Work hard in silence, success be your noise" },
            { nama: "Muhamad Fajri Putra Laksono", ttl: "Bogor, 20 Oktober 2007", alamat: "Bogor", ig: "@xxliljrissi", quote: "The long wandering finally meets the end." },
            { nama: "Muhammad Rafa Kalihku Putra", ttl: "Bogor, 20 Juli 2008", alamat: "Bogor", ig: "rafakalihku", quote: "Keep saving until your own money come easily" },
            { nama: "Nabila", ttl: "Bogor, 15 Februari 2008", alamat: "Bogor", ig: "@nanolaaa_", quote: "Satu gerbang, sejuta kenangan" },
            { nama: "Nayla Shifa", ttl: "Bogor, 01 Juli 2007", alamat: "Bogor", ig: "naylawaz", quote: "-" },
            { nama: "Rafa Abhista Rozan", ttl: "Bogor, 31 Maret 2008", alamat: "Bogor", ig: "@abhisstaa", quote: "Jangan biarkan kegagalan kemarin menyita hari ini" },
            { nama: "Rafael Muhammad Zafrullah", ttl: "Bogor, 30 Januari 2009", alamat: "Bogor", ig: "@raekatze", quote: "-" },
            { nama: "Rainy Putri Suryo", ttl: "Bogor, 7 November 2007", alamat: "Bogor", ig: "@r_arainy", quote: "I'm super shy, super shy" },
            { nama: "Razani Aqila", ttl: "Bogor, 20 Juli 2008", alamat: "Bogor", ig: "@rui.044__", quote: "Would you rain on me, BIBORA?" },
            { nama: "Riegita Putri Hidayat", ttl: "Bogor, 09 Juli 2008", alamat: "Bogor", ig: "@rrigita_", quote: "sebaik-baiknya rumah adalah diri sendiri" },
            { nama: "Safira Chairunnisa", ttl: "Bogor, 28 Oktober 2008", alamat: "Bogor", ig: "@saffch_", quote: "It is you who can change your own future" },
            { nama: "Salim Mawla Abi", ttl: "Bogor, 03 Februari 2008", alamat: "Bogor", ig: "@_aezuuu", quote: "I aint down with that shit bro" },
            { nama: "Silva Mulya", ttl: "Jakarta, 09 September 2007", alamat: "Jakarta", ig: "@sslpaa_", quote: "We'll never be those kids again" },
            { nama: "Sri Nurmalasari", ttl: "Jakarta Utara, 05 Februari 2008", alamat: "Jakarta Utara", ig: "@mal.malaaaaa", quote: "Asterum selalu jadi pelarian yang paling nyaman." },
            { nama: "Syafira Rizahra", ttl: "Bogor, 3 Januari 2008", alamat: "Bogor", ig: "@syafira_rizahra", quote: "Some dreams are too big for just one place." },
            { nama: "Talitha Ayu Nirbita Lubna", ttl: "Bogor, 6 Desember 2007", alamat: "Bogor", ig: "@taliithh", quote: "never run back to what broke you" },
            { nama: "Trikartika", ttl: "Bogor, 09 April 2007", alamat: "Bogor", ig: "@tkrtika.a", quote: "mekarlah dimanapun kalian tumbuh nya" },
            { nama: "Viona Pradita", ttl: "Bogor, 05 Januari 2008", alamat: "Bogor", ig: "@vv.lailzny", quote: "There's no freedom before Palestine is free." },
            { nama: "Zaskia Verawati", ttl: "Bogor, 17 Juni 2008", alamat: "Bogor", ig: "@qkiyaa", quote: "It's the little things, always." }
        ],
        groupCaptions: ["Group 1", "Group 2", "Group 3", "Group 4", "Group 5"] 
    },
        {
        id: 'G',
        names: [
            { nama: "Abdullah Kadaffi Ayta", ttl: "Bogor, 21 April 2008", alamat: "Bogor", ig: "@abdulkadaffi", quote: "dikulum dikunyah" },
            { nama: "Abidarma Saputra", ttl: "Bogor, 18 Desember 2007", alamat: "Bogor", ig: "@i", quote: "which one would you choose?, the town mouse or the country mose" },
            { nama: "Adinda Salwa Billah", ttl: "Bogor, 21 Juni 2008", alamat: "Bogor", ig: "@adindelune", quote: "be kind, be smart, be duan" },
            { nama: "Adinka Chantika Putri", ttl: "Bogor, 6 November 2007", alamat: "Bogor", ig: "@novemberriie", quote: "JuniorMarkFTW - GmmtvFTW - MarkLeeFTW" },
            { nama: "Alma Hira Riawan", ttl: "Bogor, 23 Oktober 2008", alamat: "Bogor", ig: "@mahirarwn", quote: "part of a story I’ll remember" },
            { nama: "Anisa Afriani", ttl: "Bogor, 30 April 2008", alamat: "Bogor", ig: "@ansaaflanii", quote: "Jadilah lebih baik dari kemarin" },
            { nama: "Ardelia Putri Sugiono",},
            { nama: "Athalia Azora Alviosa", ttl: "Bogor, 24 Mei 2008", alamat: "Bogor", ig: "@athlyy.a", quote: "be kind, be humble, be the sun" },
            { nama: "Ayu Rahmawati", ttl: "Bogor, 16 Mei 2008", alamat: "Bogor", ig: "@__ayrhm", quote: "Whatever u are, be a good one !" },
            { nama: "Casey Sachio Syabana", ttl: "Jakarta, 22 Agustus 2007 ", alamat: "Bogor", ig: "@caseysachio", quote: "capek? boleh, nyerah? jangan" },
            { nama: "Clarissa Villareal Mambo", ttl: "Bogor, 15 Mei 2008", alamat: "Bogor", ig: "clarissamambo", quote: "It’s not goodbye but see you again." },
            { nama: "Fajar Satia Putra", ttl: "Bogor, 8 November 2006", alamat: "Bogor", ig: "@fajar_putrasatya", quote: "OKEH SINGKAT SAJA,SUKSES KEDEPANNYA" },
            { nama: "Firlly Agisna Nur'ali", ttl: "Bogor, 16 Agustus 2008", alamat: "Bogor", ig: "@firllyagsna_", quote: "About You. The 1975" },
            { nama: "Jian Fahrul Nasution", ttl: "Bogor, 10 Mei 2008", alamat: "Bogor",  quote: "ingin bahagiakan orangtua" }, 
            { nama: "Kayren Anabillah", ttl: "Sukabumi, 5 Januari 2008", alamat: "Bogor", ig: "@kyrenabillah", quote: "i ain't a kid no more - Ivy, Frank Ocean" },
            { nama: "Kezi Aurelia", ttl: "Tanjung Pinang, 17 Oktober 2007", alamat: "Tanjung Pinang", ig: "@__keauli.zzie", quote: "kezi sayang qeysha" },
            { nama: "Mozza Wilona Kaulika Badjideh", ttl: "Bandung,1 April 2008", alamat: "Bogor", ig: "@wilona_private", quote: "Amor Fati" },
            { nama: "Muhammad Abduh Muzaki Ramadhan", ttl: "Bogor, 9 Oktober 2007", alamat: "Bogor", ig: "@zkrmdhnn_", quote: "menyambut sukacita" },
            { nama: "Muhammad Izzaz Adriyan", ttl: "Bogor, 27 Januari 2008", alamat: "Bogor", ig: "@izzadryn_", quote: "Apapun Jalannya Nanti, I Still MySelf" },
            { nama: "Muhammad Raidan El'raufa Zaiba", ttl: "Bogor, 23 Juni 2008", alamat: "Bogor", ig: "@Raidan_Zaiba", quote: "nak ini papa waktu muda" },
            { nama: "Nabila Putri Munawar", ttl: "Bogor, 05 November 2008", alamat: "Bogor", ig: "@chsteeland", quote: "Not a lot, just forever" },
            {nama: " Naila Ainun Nisa", ttl: "Bogor, 30 Desember 2007", alamat: "Bogor", ig: "@nailainunn", quote: "i live for now, not what happpens afteri die - Liam Gallagher" },
            { nama: "Nayra Filosofia", ttl: "Bogor, 27 Oktober 2006", alamat: "Bogor", ig: "@276.nyr", quote: "Success Starts from a dream, that's why i like to sleep" },
            {nama: "Neyla Shazia Desyafani", ttl: "Bogor, 28 Desember 2007", alamat: "Bogor", ig: "@neyshazia_d" , quote: "Maybe growing up means learning that every Sacrifice (Eat Me Up) we make is just the Fate that turns into our Karma."}, 
            {nama: "Nikita Ayu Lestari", ttl: "Bogor, 15 April 2008", alamat: "Bogor", ig: "@nikitaayulstri", quote: "Masa depanmu dimulai dari apa yang kamu pelajari hari ini"}, 
            {nama: "Qeysha Fathi Anggara", ttl: "Bogor, 14 Februari 2008", alamat: "Bogor", ig: "@qeyshaanggara", quote: "qeysha sayang kezi" },
            { nama: "Raisya Adya Pramitha", ttl: "Bogor, 10 Maret 2008", alamat: "Bogor", ig: "@Racaleds", quote: "Long story short I survived." },
            {nama: "Raka Putra Hermawan", ttl: "Bogor, 5 Mei 2008", alamat: "Bogor", ig: "@rakaputrah.08", quote: "awali pagi ini dengan segelas kopi liong"},
            { nama: "Ratu Zhahrotu Shita Seruni Utami", ttl: "Bandung, 11 Januari 2008", alamat: "Bandung", ig: "@luviera", quote: "run toward your dreams" },
            { nama: "Revina Chandra Putri Alifia", ttl: "Bogor, 11 Juli 2008", alamat: "Bogor", ig: "@rvxenaa", quote: "What you want" },
            {nama: "Rheno Revaldi", ttl: "Bogor, 28 Agustus 2008", alamat: "Bogor", ig: "@rhnorvldi", quote: "just do it"},
            {nama: "Talita Majida Arisanti",alamat: "Bogor", ig: "@taltamj"},
            {nama:"Talitha Vasthi Marsha Andika", ttl:"Bogor, 9 April 2008", alamat:"Bogor", ig:"@trvsthvn", quote:""},
            { nama: "Tifada Abbygail", ttl: "Bogor, 17 Agustus 2008", alamat: "Bogor", ig: "@tifavny", quote: "Jangan menunggu semangat datang, mulailah dulu." },
            { nama: "Varah Febrianti", ttl: "Bogor, 9 Februari 2007", alamat: "Bogor", ig: "@varrraaah_", quote: "masa depan adalah petualangan yang menanti" },
            {nama: "Zacky Halim Yudhatama", ttl: "Bandung 20 Oktober 2007", alamat: "Bogor", ig: "@zackyhlm30", quote: "let me be the one who shines with you and we can slide away - oasis"},  
        ],
        groupCaptions: ["Group 1", "Group 2", "Group 3", "Group 4", "Group 5", "Group 6", "Group 7"] 
    },
    {
        id: 'H',
        names: [
            { nama: "Adriansyah Maulana", ttl: "Surabaya, 04 Maret 2008", alamat: "Surabaya", ig: "@driaann.08", quote: "Tindakan adalah kunci dasar untuk semua kesuksesan" },
            { nama: "Aldi Sopian", ttl: "Bogor, 20 September 2008", alamat: "Bogor", ig: "@_aldispn", quote: "happy to be with you and have a good life⛓️" },
            {nama: "Alika Yuanda Putri", ttl: "Bogor, 8 November 2007", alamat: "Bogor", ig: "@lik.syalika", quote: "bukan perpisahan, hanya sampai jumpa lagi."},
            { nama: "Amanda Bilqis Azzahra", ttl: "Bogor, 28 Juli 2008", alamat: "Bogor", ig: "@mndblqszhr", quote: "If Plan A doesn't work, remember there are still 25 other letters in the alphabet, so don't worry." },
            { nama: "Annisa Novelina", ttl: "Bogor, 23 November 2007", alamat: "Bogor", ig: "@nvlnaz", quote: "Never think that you're alone. God is always with you." },
            { nama: "Ayudya Kartikasari", ttl: "Jakarta, 07 Februari 2008", alamat: "Jakarta", ig: "@ayydks_", quote: "“it's fine to fake it till you make it, until you do, until it's true” -taylor swift" },
            {nama: "Azizah Rahma Dani", ttl: "Bogor, 22 September 2007", alamat: "Bogor", ig: "@zize_rahmadnii", quote: "semangat"},
            { nama: "Dafina Nurdianti Putri", ttl: "Bogor, 06 Februari 2008", alamat: "Bogor", ig: "@dffnaptr", quote: "di pegunungan, di sanalah kau merasa bebas" },
            {nama: "Dhea Tri Ayu Permadi", ttl: "Bogor, 22 Juni 2008", alamat: "Bogor", ig: "@cluvssiedey", quote: "hah?"},
            {nama: "Diva Ardelia Kersana", ttl: "Bogor, 3 Januari 2008", alamat: "Bogor", ig: "@dv.ksana", quote: "Word and ideas can change the world"},
            { nama: "Erika Novianti", ttl: "Bogor, 25 November 2007", alamat: "Bogor", ig: "@erikanvynt25", quote: "-" },
            { nama: "Fachri Muhammad", ttl: "Bogor, 19 November 2007", alamat: "Bogor", ig: "@fhryiii.m", quote: "No Risk No Rich" },
            {nama: "Febry Nurya Anisa", ttl: "Bogor, 2 Februari 2008", alamat: "Bogor", ig: "@4sei__f", quote: "Tie the knot, finish the plot"},
            {nama: "Ibnu Fathir Muhammad", ttl: "Bogor, 23 November 2007", alamat: "Bogor", ig: "@fathirr.muhammad", quote: "perasaan baru kemarin mpls"},
            { nama: "Imrotul Mu'minah", ttl: "Bangkalan, 14 Juni 2008", alamat: "Bangkalan", ig: "@im.mumi14", quote: "Lakukan apapun yang kalian suka, jangan perdulikan orang lain" },
            { nama: "Keisha Maharani Sasti", ttl: "Karawang, 13 Maret 2007", alamat: "Karawang", ig: "@keisasti", quote: "Tungguin i di Harvard 2032 😋" },
            { nama: "Mohamad Fauzan Zardari", ttl: "Jakarta, 28 Januari 2008", alamat: "Jakarta", ig: "@zanhakho", quote: "ga perlu kata kata yg perlu cuman uang" },
            { nama: "Mohammad Hasbi", ttl: "Bogor, 21 Februari 2008", alamat: "Bogor", ig: "@hasbimhhmd_", quote: "Just a little human chasing stars in the sky" },
            {nama: "Muhammad Dava Saputra", ttl: "Bogor, 2 Desember 2007", alamat: "Bogor", ig: "@dvspttt", quote: "kita pernah duduk di kelas yang sama, untuk mengejar mimpi yang berbeda"},
            {nama: "Muhammad Dyo Dylansyah Hidayat", alamat: "Bogor", quote: "just do it"},
            {nama: "Muhammad Fardan Fathdriansyah", ttl: "Bogor, 2 Februari 2008", alamat: "Bogor", ig: "@mfardannnn", quote: "datang telat, pulang duluan"},
            {nama: "Muhammad Yugi Saputra", ttl: "Bogor, 19 Agustus 2008", alamat: "Bogor", ig: "@yugikaisenn", quote: "Bahkan sebelum adanya sekolah, KING EMYU sudah berkelas"},
            { nama: "Mysha Dianti", ttl: "Bogor, 19 Mei 2008", alamat: "Bogor", ig: "@meyyd._", quote: "same hallway." },
            { nama: "Nasszhwa Radisti", ttl: "Bogor, 25 Oktober 2007", alamat: "Bogor", ig: "@thisisnara___", quote: "make it happen" },
            { nama: "Nurmalasari", ttl: "Bogor, 04 Desember 2007", alamat: "Bogor", ig: "@malzzzsh", quote: "It is never too late to be what you might have been" },
            { nama: "Puella Ayna Bastian", ttl: "Bogor, 26 Agustus 2008", alamat: "Bogor", ig: "@puellayna", quote: "we accept the love we think we deserve" },
            { nama: "Putri Aulia Al'Masyad", ttl: "Bogor, 14 Desember 2006", alamat: "Bogor", ig: "@_putriiauliiaas", quote: "same laughter." },
            { nama: "Raisa Adelia Putri", ttl: "Jakarta, 22 Agustus 2007", alamat: "Jakarta", ig: "@rsadlptri_", quote: "She blooms even when darkness swallows her whole -Nadin Amizah" },
            { nama: "Ramadhania Mulyadi", ttl: "Bogor, 04 Oktober 2007", alamat: "Bogor", ig: "@ramdhniaaa", quote: "Berproses lebih penting daripada terlihat sempurna." },
            { nama: "Reinzany Clarisa Ridwan", ttl: "Bogor, 13 Juni 2008", alamat: "Bogor", ig: "@cllarssaa_", quote: "Chase your dreams and never stop believing" },
            { nama: "Riki Maulana", ttl: "BOGOR, 28 Januari 2008", alamat: "Bogor", ig: "@ogopegek_", quote: "everything is a lesson" },
            { nama: "Shakila Zahra Aulia", ttl: "Jakarta, 16 Desember 2007", alamat: "Jakarta", ig: "@shazahau_z8", quote: "Believe you can and you're halfway there." },
            { nama: "Siti Amanda Salsabila", ttl: "Bogor, 17 Juni 2008", alamat: "Bogor", ig: "@slsabila.9", quote: "anjay" },
            { nama: "Siti Kayla Nur Aisra", ttl: "Bogor, 15 Januari 2008", alamat: "Bogor", ig: "@kaylaaisra", quote: "my house is on pretty girl avenue!" },
            {nama: "Siti Syeril Dwi Tryani", ttl: "Bogor, 25 Agustus 2008", alamat: "Bogor", ig: "@s.syeeril", quote: "It's better to be hated for what you are, then to be love for what you're  not"},
            { nama: "Zaskia Nur Hayyu Riyani", ttl: "Bogor, 11 April 2008", alamat: "Bogor", ig: "@zskianrhyyu", quote: "“Painting is poetry that is seen rather than felt.”" }
        ],
        groupCaptions: ["Group 1", "Group 2", "Group 3", "Group 4", "Group 5", "Group 6"] 
    },
    {
        id: 'I',
        names: [
            { nama: "Aditya Rassya", ttl: "Bogor, 25 Desember 2007", alamat: "Bogor", ig: "@adityarassya_", quote: "apa ya" },
            {nama: "Aldy Oktavianus Sitepu", alamat: "Bogor", quote: "just do it"},
             { nama: "Aris Rinaldy", ttl: "Bogor, 23 Maret 2008", alamat: "Bogor", ig: "@_arisrinaly", quote: "sukses" },
              { nama: "Azzahra Putri Umari", alamat: "Bogor", quote: "sukses" },
            { nama: "Bagus Buana Kurniawan", alamat: "Bogor"},
            { nama: "Bunga Putri Hermana", ttl: "Bogor, 29 April 2008", alamat: "Bogor", ig: "@bptrhrmn", quote: "apa dong??" },
            { nama: "Bunga Nurliana", ttl: "Bogor, 12 Juli 2007", alamat: "Bogor", ig: "@flawwungaa__", quote: "”Bermimpilah setinggi langit.” — Ir. Soekarno" },
            { nama: "Chesya Dava Raditya", ttl: "Bogor, 31 Agustus 2007", alamat: "Bogor", ig: "@_chssydpa", quote: "Sabar itu ga ada batasnya" },
            { nama: "Dennis Joan Siahaan", ttl: "Bogor, 23 Agustus 2008", alamat: "Bogor", ig: "@deniisjoann", quote: "langkah boleh beda, tapi cerita kita abadi." },
            { nama: "Desman Triputra", alamat: "Bogor", },
            { nama: "Desti Astiyani", ttl: "Bogor, 27 Desember 2007", alamat: "Bogor", ig: "@drakskindesss", quote: "mngt" },
             { nama: "Farel Davio Pratama", alamat: "Bogor"},
             { nama: "Fita Aurel Awaliyah", ttl: "Bogor, 02 Oktober 2008", alamat: "Bogor", ig: "@aurellawalyah_", quote: "I'll be strong, I'll be wrong, oh but life goes on - a place in this world, taylor swift" },
             { nama: "Gendis Ayu Fatimah", alamat: "Bogor" },
            { nama: "Helvian Bagas Adiwitya", alamat: "Bogor" },
            { nama: "Jovan Alvin Excel Sikombong", ttl: "Pekan Baru, 24 Januari 2008", alamat: "Pekan Baru", ig: "@alvinjovan13", quote: "Masa Depan Tidak Dapat Diraih Dengan Cara Instant,Tetapi Masa Depan Dapat Di Raih Dengan Cara Kerja Keras Dan Usaha" },
            { nama: "Kirana Andia Shabira", alamat: "Bogor"},
            { nama: "Mario Septriandra", ttl: "Jakarta, 2 September 2007", alamat: "Jakarta", ig: "@mariosept_", quote: "banyak hal yang berkesan di masa masa putih abu, terimakasih supporten untuk 3 tahunnya!" },
             { nama: "Michael Yohanes", alamat: "Bogor",},
            { nama: "Muhamad Dilan Santoso", alamat: "Bogor" },
            { nama: "Muhamad Fadli Al Fahrezi", alamat: "Bogor"},
            { nama: "Muhamad Rival", ttl:"Bogor, 13 Januari 2008", ig:"@muhamadrivall13", alamat: "Bogor", quote:"semangat" },
            { nama: "Muhammad Rasya Azka Sentosa",  alamat: "Bogor", ttl:"Bogor, 29 Desember 2007", ig:"_rsyaacaaa", quote:"GOODD"},
            { nama: "Naufal Aflah Kamaludin", ttl: "Bogor, 11 Oktober 2008", alamat: "Bogor", ig: "@aflooooo_", quote: "Disini bukan tentang cuman belajar rumus-rumus aja, tapi belajar kehilangan, bertahan dan tertawa tanpa alasan." },
            { nama: "Nur Azni Aprilia Andries", ttl: "Bogor, 8 April 2008", alamat: "Bogor", ig: "@queen.nazmiii", quote: "I'll be strong, I'll be wrong, oh but life goes on - a place in this world, taylor swift" },
             { nama: "Raditiya Nafis Sabana", alamat: "Bogor" },
             { nama: "Raka Taufiq Fazri", alamat: "Bogor" },
             { nama: "Ralfhie Fauzan Abrar", ttl: "Bogor, 29 November 2007", alamat: "Bogor", ig: "@rlfhiapi", quote: "yes" },
             { nama: "Rava Yuda Yudistira", alamat: "Bogor"},
            { nama: "Revant Messi Pratama", ttl: "Bogor, 11 Juni 2006", alamat: "Bogor", ig: "@reva.ntmessip", quote: "Aku mungkin butuh waktu lebih lama buat paham, tapi aku punya hati yang nggak gampang menyerah." },
            { nama: "Salma Nur Al", ttl: "Bogor, 10 Oktober 2008", alamat: "Bogor", ig: "@sllmmaaa_", quote: "Life is what happens to you while you're busy making other plans" },
             { nama: "Sekar Wulan Kencoro Putri", alamat: "Bogor"},
            { nama: "Shafa Azka Annisa", ttl: "Bogor, 14 Mei 2008", alamat: "Bogor", ig: "-", quote: "semoga sukses" },
            { nama: "Sigit Firmansyah", ttl: "BOGOR, 13 SEPTEMBER 2008", alamat: "Bogor", ig: "@bblackirk", quote: "Love the life you live live the life you love" },
             { nama: "Ulil Azmi Muharram", alamat: "Bogor" },
              { nama: "Yeni Ramanda", ttl: "Bogor, 20 September 2008", alamat: "Bogor", ig: "@yenirmnd_", quote: "sukses terus" }
        ],
        groupCaptions: ["Group 1", "Group 2", "Group 3", "Group 4", "Group 5", "Group 6"] 
    }
];

// --- 3. MODAL & NAVIGATION ---
function openModal(kelas) {
    const m = document.getElementById('modal');
    const classId = `12${kelas.id}`;
    document.getElementById('mTitle').innerText = "CLASS " + classId;
    document.getElementById('mMainImg').src = `img/${classId}.jpg`;
    document.getElementById('player').src = `music/${classId}.mp3`;

    // Render Murid
    const sCont = document.getElementById('mStudents');
    sCont.innerHTML = "";
    kelas.names.forEach((murid, index) => {
        const fotoMurid = `img/murid/${classId}_${index + 1}.jpg`;
        const q = murid.quote || "Stay Gold."; 
        const card = document.createElement('div');
        card.className = 'student-card';
        card.innerHTML = `
            <img src="${fotoMurid}" onerror="this.src='https://via.placeholder.com/200?text=Foto+${index+1}'">
            <span class="name">${murid.nama}</span>
            <span class="quote">"${q}"</span>
        `;
        card.onclick = () => openZoom(fotoMurid, murid.nama, q, murid);
        sCont.appendChild(card);
    });

    // Render Foto Kelompok (Dinamis sesuai jumlah groupCaptions)
    const gCont = document.getElementById('mGroups');
    gCont.innerHTML = "";
    kelas.groupCaptions.forEach((cap, index) => {
        const i = index + 1;
        const imgSrc = `img/${classId}_g${i}.jpg`;
        gCont.innerHTML += `
            <div class="group-item" onclick="openZoom('${imgSrc}', 'Kelompok ${i}', '${cap}', null)">
                <img src="${imgSrc}" onerror="this.src='https://via.placeholder.com/600x400?text=Foto+Grup+${i}'">
                <div class="group-caption">
                    <h4>KELOMPOK ${i}</h4>
                    <p>${cap}</p>
                </div>
            </div>`;
    });

    m.style.display = "block";
    document.body.style.overflow = "hidden";
    setTimeout(() => m.classList.add('active'), 10);
}

function closeModal() {
    const m = document.getElementById('modal');
    m.classList.remove('active');
    setTimeout(() => {
        m.style.display = "none";
        document.body.style.overflow = "auto";
        if(document.getElementById('player')) document.getElementById('player').pause();
    }, 500);
}

function openZoom(src, name, quote, bio) {
    const zm = document.getElementById('zoomModal');
    document.getElementById('zoomImg').src = src;
    document.getElementById('zoomName').innerText = name;
    document.getElementById('zoomQuote').innerText = quote ? `"${quote}"` : "";
    
    const bioCont = document.getElementById('zoomBio');
    if(bio && bio.ttl) {
        bioCont.innerHTML = `
            <div class="bio-item"><i class="fas fa-calendar-alt"></i> <span>${bio.ttl}</span></div>
            <div class="bio-item"><i class="fas fa-map-marker-alt"></i> <span>${bio.alamat}</span></div>
            <div class="bio-item"><i class="fab fa-instagram"></i> <span>${bio.ig}</span></div>
        `;
    } else { bioCont.innerHTML = ""; }
    zm.style.display = "flex";
}

function closeZoom() { document.getElementById('zoomModal').style.display = "none"; }

function openOrg(title, subtitle) {
    openZoom(`img/org/${title.toLowerCase()}.jpg`, title.toUpperCase(), subtitle, null);
}

function toggleMusic() {
    const p = document.getElementById('player');
    const s = document.getElementById('speakerIcon');
    if (p.paused) { p.play(); s.className = "fas fa-volume-up fa-beat"; } 
    else { p.pause(); s.className = "fas fa-volume-mute"; }
}

function filterKelas() {
    let val = document.getElementById('search').value.toUpperCase();
    document.querySelectorAll('.card').forEach(c => c.style.display = c.innerText.includes(val) ? "" : "none");
}

function showEkskulDetail(id) {
    const data = ekskulData[id];
    const modal = document.getElementById('ekskulModal');
    
    if (data) {
        modal.querySelector('.modal-title-text').innerText = data.name; // Sesuai CSS kamu
        modal.querySelector('.modal-quote').innerText = `"${data.quote}"`;
        modal.querySelector('.img-glow-main').src = `img/${id.toLowerCase()}.jpg`; // Sesuai CSS kamu[cite: 5]
        
        modal.style.display = 'block';
        // Tambahkan baris ini agar animasi opacity & transform di CSS jalan
        setTimeout(() => modal.classList.add('active'), 10); 
    }
}

function closeEkskulModal() {
    const modal = document.getElementById('ekskulModal');
    modal.classList.remove('active');
    setTimeout(() => modal.style.display = 'none', 800); // Tunggu animasi selesai
}