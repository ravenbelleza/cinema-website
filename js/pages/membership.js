// Modal Script
var modal = document.getElementById("login-modal");
var btn = document.getElementById("login-button");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Mobile number input only 11 Digits
function phoneNumber(element) {
  if (element.value.length > 11) {
      element.value = element.value.slice(0, 11);
  }
}


// Form Province, City, Baranggay
const data = {
  "Metro Manila": {
    "Quezon City": [
      "Alicia", "Amihan", "Apolonio Samson", "Bagbag", "Bagong Lipunan ng Crame", 
      "Bagong Pag-asa", "Bagong Silangan", "Bahay Toro", "Balingasa", "Balintawak", 
      "Batasan Hills", "Bayanihan", "Blue Ridge A", "Blue Ridge B", "Botocan", 
      "Bungad", "Capri", "Central", "Claro", "Commonwealth", 
      "Culiat", "Damar", "Damayan", "Damayan Lagi", "Del Monte", 
      "Dioquino Zobel", "Don Manuel", "Doña Aurora", "Doña Imelda", "Doña Josefa", 
      "Duyan-Duyan", "E. Rodriguez", "Escopa I", "Escopa II", "Escopa III", 
      "Escopa IV", "Fairview", "Greater Lagro", "Gulod", "Holy Spirit", 
      "Horseshoe", "Immaculate Conception", "Kaligayahan", "Kalusugan", "Kamuning", 
      "Katipunan", "Kaunlaran", "Krus na Ligas", "Laging Handa", "Libis", 
      "Lourdes", "Loyola Heights", "Maharlika", "Malaya", "Mangga", 
      "Manresa", "Mariana", "Mariblo", "Marilag", "Masagana", 
      "Masambong", "Matandang Balara", "Milagrosa", "N.S. Amoranto", "Nayong Kanluran", 
      "New Era", "North Fairview", "Novaliches Proper", "Obrero", "Old Capitol Site", 
      "Paang Bundok", "Pag-ibig sa Nayon", "Paligsahan", "Paltok", "Paraiso", 
      "Pasong Putik Proper", "Pasong Tamo", "Payatas", "Phil-Am", "Pinagkaisahan", 
      "Pinyahan", "Project 6", "Quezon Memorial Circle", "Ramon Magsaysay", "Roxas", 
      "Sacred Heart", "Saint Ignatius", "San Agustin", "San Antonio", "San Bartolome", 
      "San Isidro Labrador", "San Jose", "San Martin de Porres", "San Roque", "San Vicente", 
      "Santa Cruz", "Santa Lucia", "Santa Monica", "Santa Teresita", "Santo Cristo", 
      "Santo Niño", "Santol", "Sauyo", "Sienna", "Sikatuna Village", 
      "Silangan", "Socorro", "South Triangle", "Tagumpay", "Talampas", 
      "Talayan", "Tandang Sora", "Tatalon", "Teachers Village East", "Teachers Village West", 
      "U.P. Campus", "U.P. Village", "Unang Sigaw", "Valencia", "Vasra", 
      "Veterans Village", "Villa Maria Clara", "Violago Homes", "West Kamias", "West Triangle", 
      "White Plains"
    ],
    "Makati": [
      "Barangay Bel-Air", "Barangay Poblacion", "Barangay San Lorenzo", "Barangay Kasilawan", 
      "Barangay Pembo", "Barangay Pitogo", "Barangay San Antonio", "Barangay South Cembo", 
      "Barangay Tejeros", "Barangay West Rembo"
    ],
    "Manila": [
      "Barangay 1", "Barangay 2", "Barangay 3", "Barangay 4", "Barangay 5", 
      "Barangay 6", "Barangay 7", "Barangay 8", "Barangay 9", "Barangay 10",
      "Barangay 11", "Barangay 12", "Barangay 13", "Barangay 14", "Barangay 15",
      "Barangay 16", "Barangay 17", "Barangay 18", "Barangay 19", "Barangay 20"
    ],
    "Pasig": [
      "Barangay Bagong Katipunan", "Barangay Kapitolyo", "Barangay Santolan", 
      "Barangay San Miguel", "Barangay San Jose", "Barangay Manggahan", 
      "Barangay Caniogan", "Barangay Bagong Ilog", "Barangay Rosario"
    ],
    "Taguig": [
      "Barangay Fort Bonifacio", "Barangay Ususan", "Barangay Western Bicutan", 
      "Barangay Upper Bicutan", "Barangay Lower Bicutan", "Barangay Tuktukan"
    ],
    "Marikina": [
      "Barangay Concepcion Uno", "Barangay Santo Elena", "Barangay Industrial Valley", 
      "Barangay San Roque", "Barangay Barangka"
    ]
  },
  "Cebu": {
    "Cebu City": [
      "Barangay Apas", "Barangay Banilad", "Barangay Lahug", "Barangay Kamputhaw", 
      "Barangay Capitol Site", "Barangay Tejero", "Barangay San Antonio", 
      "Barangay Santo Niño", "Barangay Mabolo"
    ],
    "Mandaue City": [
      "Barangay Banilad", "Barangay Casuntingan", "Barangay Ibabao", 
      "Barangay Mantuyong", "Barangay Centro"
    ],
    "Lapu-Lapu City": [
      "Barangay Basak", "Barangay Mactan", "Barangay Marigondon"
    ]
  },
  "Davao del Sur": {
    "Davao City": [
      "Barangay 1-A", "Barangay 2-A", "Barangay 3-A", "Barangay 4-A", 
      "Barangay 5-A", "Barangay 6-A", "Barangay 7-A", "Barangay 8-A"
    ]
  },
  "Laguna": {
    "Santa Rosa": [
      "Barangay Don Jose", "Barangay Santo Domingo", "Barangay Tagapo"
    ],
    "Biñan": [
      "Barangay Biñan", "Barangay San Antonio", "Barangay San Isidro"
    ]
  },
  "Pangasinan": {
    "Lingayen": [
      "Barangay Aplaya", "Barangay Bonuan Gueset"
    ],
    "Dagupan": [
      "Barangay Poblacion", "Barangay Bonuan Boquig"
    ]
  },
  "Batangas": {
    "Batangas City": [
      "Barangay Alangilan", "Barangay Balagtas", "Barangay Banaba", "Barangay Bolbok", 
      "Barangay Bugtong na Pulo"
    ],
    "Lipa City": [
      "Barangay Bagalangit", "Barangay Bañadero", "Barangay San Vicente", 
      "Barangay Mataas na Lupa"
    ]
  },
  "Iloilo": {
    "Iloilo City": [
      "Barangay Arevalo", "Barangay City Proper", "Barangay La Paz", 
      "Barangay Jaro", "Barangay Lapaz"
    ],
    "Passi City": [
      "Barangay Cagay", "Barangay Man-it", "Barangay Naslo"
    ]
  },
  "Negros Occidental": {
    "Bacolod City": [
      "Barangay Alijis", "Barangay Bata", "Barangay Cabug", "Barangay Estefania"
    ],
    "Silay City": [
      "Barangay E. Lopez", "Barangay Guimbalaon", "Barangay Lantad"
    ]
  },
  "Bataan": {
    "Balanga City": [
      "Barangay Balsik", "Barangay Longos", "Barangay Pagalanggang"
    ],
    "Orani": [
      "Barangay Banawang", "Barangay Bagumbayan"
    ]
  },
  "Cavite": {
    "Tagaytay": [
      "Barangay Alfonso", "Barangay Asisan", "Barangay Dapitan"
    ],
    "Imus": [
      "Barangay Alabang", "Barangay Anabu", "Barangay Burol"
    ]
  },
  "Zambales": {
    "Olongapo City": [
      "Barangay East Tapinac", "Barangay West Tapinac", "Barangay New Cabalan"
    ],
    "Subic": [
      "Barangay Subic Bay", "Barangay Cawag"
    ]
  },
  "Samar": {
    "Catbalogan City": [
      "Barangay Beneg", "Barangay Bulao"
    ],
    "Calbayog City": [
      "Barangay Bagacay", "Barangay Bato"
    ]
  },
  "Leyte": {
    "Tacloban City": [
      "Barangay 1", "Barangay 2", "Barangay 3"
    ],
    "Ormoc City": [
      "Barangay Magsaysay", "Barangay San Pablo"
    ]
  },
  "Albay": {
    "Legazpi City": [
      "Barangay Albay", "Barangay Bagumbayan"
    ],
    "Tabaco City": [
      "Barangay 1", "Barangay 2"
    ]
  },
  "Camarines Sur": {
    "Naga City": [
      "Barangay Bagumbayan", "Barangay Concepcion Pequeña"
    ],
    "Iriga City": [
      "Barangay San Jose", "Barangay San Pedro"
    ]
  },
  "Ifugao": {
    "Lamut": [
      "Barangay Amganad", "Barangay Nattumang"
    ],
    "Lamut City": [
      "Barangay Namal", "Barangay Tua"
    ]
  },
  "Kalinga": {
    "Tabuk City": [
      "Barangay Bulanao", "Barangay Bulo"
    ]
  },
  "Mountain Province": {
    "Bontoc": [
      "Barangay Bontoc Ili", "Barangay Samoki"
    ]
  },
  "Aurora": {
    "Baler": [
      "Barangay Sabang", "Barangay Buhangin"
    ]
  },
  "Marinduque": {
    "Boac": [
      "Barangay Bagumbayan", "Barangay Bunga"
    ]
  },
  "Romblon": {
    "Romblon": [
      "Barangay San Pedro", "Barangay Lumbang"
    ]
  },
  "Siquijor": {
    "Siquijor": [
      "Barangay San Juan", "Barangay Lazi"
    ]
  },
  "Batanes": {
    "Basco": [
      "Barangay Kayhuvokan", "Barangay San Antonio", "Barangay Sta. Rosa"
    ],
    "Sabtang": [
      "Barangay Chavayan", "Barangay Sumnanga"
    ]
  },
  "Bulacan": {
    "Malolos": [
      "Barangay Barasoain", "Barangay Santo Niño", "Barangay San Gabriel"
    ],
    "Meycauayan": [
      "Barangay Dela Cruz", "Barangay Lawa"
    ],
    "San Jose del Monte": [
      "Barangay San Manuel", "Barangay Poblacion"
    ]
  },
  "Pampanga": {
    "San Fernando": [
      "Barangay Del Pilar", "Barangay San Jose"
    ],
    "Angeles City": [
      "Barangay Balibago", "Barangay Sto. Domingo"
    ]
  },
  "Tarlac": {
    "Tarlac City": [
      "Barangay San Vicente", "Barangay San Rafael"
    ],
    "Concepcion": [
      "Barangay Manalpac", "Barangay Poblacion"
    ]
  },
  "Nueva Ecija": {
    "Cabanatuan": [
      "Barangay Singalat", "Barangay San Antonio"
    ],
    "Palayan": [
      "Barangay Dila-dila", "Barangay Saguin"
    ]
  },
  "Pangasinan": {
    "Lingayen": [
      "Barangay Alinzor", "Barangay Bonuan Gueset"
    ],
    "Dagupan": [
      "Barangay Poblacion", "Barangay Bonuan Boquig"
    ]
  },
  "La Union": {
    "San Fernando": [
      "Barangay Ittang", "Barangay San Juan"
    ],
    "Agoo": [
      "Barangay Poblacion", "Barangay San Vicente"
    ]
  },
  "Cavite": {
    "Cavite City": [
      "Barangay 1", "Barangay 2"
    ],
    "Dasmariñas": [
      "Barangay Salawag", "Barangay San Agustin"
    ]
  },
  "Occidental Mindoro": {
    "Mamburao": [
      "Barangay Bayanan", "Barangay Poblacion"
    ],
    "Sablayan": [
      "Barangay Santo Niño", "Barangay San Vicente"
    ]
  },
  "Oriental Mindoro": {
    "Calapan": [
      "Barangay Bunga", "Barangay San Antonio"
    ],
    "Baco": [
      "Barangay Malabog", "Barangay San Isidro"
    ]
  },
  "Quezon": {
    "Lucena": [
      "Barangay Ilayang Iyam", "Barangay Mayao Castillo"
    ],
    "Tayabas": [
      "Barangay 1", "Barangay 2"
    ]
  },
  "Marinduque": {
    "Boac": [
      "Barangay Bagumbayan", "Barangay Bunga"
    ],
    "Gasan": [
      "Barangay Libtangin", "Barangay Manlibador"
    ]
  },
  "Masbate": {
    "Masbate City": [
      "Barangay Buan", "Barangay Dapdap"
    ],
    "Mobo": [
      "Barangay Bayonan", "Barangay Buluangan"
    ]
  },
  "Biliran": {
    "Naval": [
      "Barangay Calumpang", "Barangay Sto. Niño"
    ],
    "Biliran": [
      "Barangay Bunga", "Barangay Cagdianao"
    ]
  },
  "Samar": {
    "Catbalogan City": [
      "Barangay Beneg", "Barangay Bulao"
    ],
    "Calbayog City": [
      "Barangay Bagacay", "Barangay Bato"
    ]
  },
  "Northern Samar": {
    "Catarman": [
      "Barangay San Isidro", "Barangay Poblacion"
    ],
    "Laoang": [
      "Barangay 1", "Barangay 2"
    ]
  },
  "Southern Leyte": {
    "Maasin City": [
      "Barangay Bontoc", "Barangay San Isidro"
    ],
    "Sogod": [
      "Barangay Bunga", "Barangay Lungsod"
    ]
  },
  "Zamboanga del Norte": {
    "Dipolog": [
      "Barangay Sta. Isabel", "Barangay La Paz"
    ],
    "Dapitan": [
      "Barangay Talisay", "Barangay 1"
    ]
  },
  "Zamboanga del Sur": {
    "Pagadian": [
      "Barangay Lumbang", "Barangay Lumbang"
    ],
    "Zamboanga City": [
      "Barangay Zone 1", "Barangay Zone 2"
    ]
  },
  "Sultan Kudarat": {
    "Tacurong": [
      "Barangay New Isabela", "Barangay Poblacion"
    ],
    "Sen. Ninoy Aquino": [
      "Barangay Lanjungan", "Barangay New Tupi"
    ]
  },
  "Lanao del Norte": {
    "Tubod": [
      "Barangay Poblacion", "Barangay Looc"
    ],
    "Iligan": [
      "Barangay Poblacion", "Barangay Tambo"
    ]
  },
  "Lanao del Sur": {
    "Marawi": [
      "Barangay Datu Saber", "Barangay Madaya"
    ],
    "Bacolod": [
      "Barangay Lumbac", "Barangay Dato"
    ]
  },
  "Basilan": {
    "Isabela City": [
      "Barangay Binuangan", "Barangay Malamawi"
    ],
    "Lantawan": [
      "Barangay Balobo", "Barangay Maligue"
    ]
  },
  "Sulu": {
    "Jolo": [
      "Barangay Bus-bus", "Barangay Walled City"
    ],
    "Patikul": [
      "Barangay Tugas", "Barangay Timpok"
    ]
  },
  "Tawi-Tawi": {
    "Bongao": [
      "Barangay Poblacion", "Barangay Sanga-Sanga"
    ],
    "Simunul": [
      "Barangay Bato-Bato", "Barangay Malawali"
    ]
  },
  "Agusan del Norte": {
    "Butuan City": [
      "Barangay Bayugan", "Barangay Baan"
    ],
    "Cabadbaran": [
      "Barangay Alubihid", "Barangay Cuyago"
    ]
  },
  "Agusan del Sur": {
    "Patin-ay": [
      "Barangay San Vicente", "Barangay San Isidro"
    ],
    "Bunawan": [
      "Barangay Magsaysay", "Barangay Bunawan Proper"
    ]
  },
  "Surigao del Norte": {
    "Surigao City": [
      "Barangay Taft", "Barangay San Juan"
    ],
    "Baculin": [
      "Barangay Libtangin", "Barangay San Pedro"
    ]
  },
  "Surigao del Sur": {
    "Tandag": [
      "Barangay San Agustin", "Barangay San Vicente"
    ],
  "Carmen": [
      "Barangay Poblacion", "Barangay Mahaba"
    ]
  },
  "Davao de Oro": {
    "Mabini": [
      "Barangay Marangal", "Barangay Calayo"
    ],
    "Nabunturan": [
      "Barangay Poblacion", "Barangay San Isidro"
    ]
  },
  "Davao del Norte": {
    "Tagum City": [
      "Barangay Apokon", "Barangay Cuambog"
    ],
    "Panabo City": [
      "Barangay Datu Abdul Dadja", "Barangay San Pedro"
    ]
  },
  "Davao Occidental": {
    "Malita": [
      "Barangay Biao", "Barangay Blaan"
    ],
    "Don Marcelino": [
      "Barangay Manggal", "Barangay Poblacion"
    ]
  },
  "Cotabato": {
    "Kidapawan City": [
      "Barangay Poblacion", "Barangay Amas"
    ],
    "Midsayap": [
      "Barangay Bagua I", "Barangay Bagua II"
    ]
  },
  "Sarangani": {
    "Alabel": [
      "Barangay Upper Labay", "Barangay Lower Labay"
    ],
    "Malungon": [
      "Barangay Poblacion", "Barangay Datal Anggas"
    ]
  },
  "South Cotabato": {
    "General Santos": [
      "Barangay Bula", "Barangay San Isidro"
    ],
    "Koronadal": [
      "Barangay Poblacion", "Barangay Concepcion"
    ]
  },
  "Sultan Kudarat": {
    "Tacurong": [
      "Barangay New Isabela", "Barangay Poblacion"
    ],
    "Sen. Ninoy Aquino": [
      "Barangay Lanjungan", "Barangay New Tupi"
    ]
  },
  "Bataan": {
    "Balanga": [
      "Barangay San Jose", "Barangay Tortugas"
    ],
    "Orani": [
      "Barangay Longos", "Barangay Layac"
    ]
  },
  "Zambales": {
    "Olongapo City": [
      "Barangay East Tapinac", "Barangay West Tapinac"
    ],
    "Subic": [
      "Barangay Asinan", "Barangay Nunez"
    ]
  },
  "Pampanga": {
    "Angeles City": [
      "Barangay Balibago", "Barangay Sto. Domingo"
    ],
    "San Fernando": [
      "Barangay Del Pilar", "Barangay San Jose"
    ]
  },
  "Aurora": {
    "Baler": [
      "Barangay Sabang", "Barangay Buhangin"
    ],
    "Casiguran": [
      "Barangay 1", "Barangay 2"
    ]
  },
  "Apayao": {
    "Conner": [
      "Barangay San Isidro", "Barangay Manaboc"
    ],
    "Flora": [
      "Barangay Bayag", "Barangay Santa Maria"
    ]
  },
  "Kalinga": {
    "Tabuk City": [
      "Barangay Bulanao", "Barangay Poblacion"
    ],
    "Lubuagan": [
      "Barangay Lubuagan Proper", "Barangay Basao"
    ]
  },
  "Abra": {
    "Bangued": [
      "Barangay Poblacion", "Barangay Bantay"
    ],
    "Lagangilang": [
      "Barangay Lagangilang", "Barangay Dineg"
    ]
  },
  "Cagayan": {
    "Tuguegarao": [
      "Barangay Bagay", "Barangay Balayag"
    ],
    "Lal-lo": [
      "Barangay Calassitan", "Barangay San Vicente"
    ]
  },
  "Isabela": {
    "Ilagan": [
      "Barangay Alinguigan", "Barangay San Vicente"
    ],
    "Cauayan": [
      "Barangay Minanga", "Barangay Maligaya"
    ]
  },
  "Quirino": {
    "Cabarroguis": [
      "Barangay Poblacion", "Barangay Sanguit"
    ],
    "Maddela": [
      "Barangay Bimmapor", "Barangay San Jose"
    ]
  },
  "Samar": {
    "Catbalogan": [
      "Barangay San Jose", "Barangay Tinago"
    ],
    "Calbayog": [
      "Barangay Bagacay", "Barangay Balayni"
    ]
  },
  "Leyte": {
    "Tacloban": [
      "Barangay 1", "Barangay 2"
    ],
    "Palo": [
      "Barangay San Joaquin", "Barangay Santo Niño"
    ]
  },
  "Biliran": {
    "Naval": [
      "Barangay Calumpang", "Barangay Sto. Niño"
    ],
    "Biliran": [
      "Barangay Bunga", "Barangay Cagdianao"
    ]
  },
  "Camarines Norte": {
    "Daet": [
      "Barangay Bagasbas", "Barangay Poblacion"
    ],
    "Mercedes": [
      "Barangay San Isidro", "Barangay Poblacion"
    ]
  },
  "Camarines Sur": {
    "Naga City": [
      "Barangay Bagumbayan", "Barangay Concepcion Pequeña"
    ],
    "Iriga City": [
      "Barangay San Jose", "Barangay San Pedro"
    ]
  }
};
// add nalang iba if kaya hahaha

const provinceDropdown = document.getElementById('province');
const cityDropdown = document.getElementById('city');
const barangayDropdown = document.getElementById('barangay');

for (let province in data) {
  const option = document.createElement('option');
  option.value = province;
  option.text = province;
  provinceDropdown.add(option);
}

function updateCityDropdown() {
  cityDropdown.innerHTML = '<option value="">Select City/Municipality</option>';
  barangayDropdown.innerHTML = '<option value="">Select Barangay</option>';

  const selectedProvince = provinceDropdown.value;
  if (selectedProvince && data[selectedProvince]) {
      for (let city in data[selectedProvince]) {
          const option = document.createElement('option');
          option.value = city;
          option.text = city;
          cityDropdown.add(option);
      }
  }
}

function updateBarangayDropdown() {
  barangayDropdown.innerHTML = '<option value="">Select Barangay</option>';

  const selectedProvince = provinceDropdown.value;
  const selectedCity = cityDropdown.value;
  if (selectedProvince && selectedCity && data[selectedProvince][selectedCity]) {
      data[selectedProvince][selectedCity].forEach(barangay => {
          const option = document.createElement('option');
          option.value = barangay;
          option.text = barangay;
          barangayDropdown.add(option);
      });
  }
}

// Signup
function toggleContainers() {
  const membershipContainer = document.querySelector('.membership-container');
  const basicForm = document.querySelector('.basic-form');
  
  // Hide the membership container
  membershipContainer.style.display = 'none';
  
  // Show the basic form container
  basicForm.style.display = 'block';
}