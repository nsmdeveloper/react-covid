class CovidCases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url : 'https://covid19.mathdro.id/api/countries',
      country_obj: {},
      country : null
    };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
 
    console.log("[Current Country]: " + this.state.country);

    this.fetchCases(this.state.url);
  }


  myChangeHandler = (event) => {
    //let nam = event.target.name;
    //let val = event.target.value;
    //this.setState({[nam]: val});
    //let current_country = event.target.value;

    this.setState({country: event.target.value});

    console.log(event.target.value);

    this.fetchCases(this.state.url + "/" + event.target.value);
  }

  

  fetchCases(url) {

    var that = this;
   
    fetch(url).then(function (response) {
     
      return response.json();

    }).then(function (result) {

      that.setState({ country_obj: result });

      console.log(that.state.country_obj);
    });

  } 

  componentDidMount() {
    //this.fetchVideos(this.state.url);
    //console.log("[Current Country]: " + this.state.country);

  }

  

  render() {

    var countryListES = {
      "AF":"Afganistán",
      "AL":"Albania",
      "DE":"Alemania",
      "AD":"Andorra",
      "AO":"Angola",
      "AI":"Anguila",
      "AG":"Antigua y Barbuda",
      "AN":"Antillas Neerlandesas",
      "AQ":"Antártida",
      "SA":"Arabia Saudí",
      "DZ":"Argelia",
      "AR":"Argentina",
      "AM":"Armenia",
      "AW":"Aruba",
      "AU":"Australia",
      "AT":"Austria",
      "AZ":"Azerbaiyán",
      "BS":"Bahamas",
      "BH":"Bahréin",
      "BD":"Bangladesh",
      "BB":"Barbados",
      "BZ":"Belice",
      "BJ":"Benín",
      "BM":"Bermudas",
      "BY":"Bielorrusia",
      "BO":"Bolivia",
      "BA":"Bosnia-Herzegovina",
      "BW":"Botsuana",
      "BR":"Brasil",
      "BN":"Brunéi",
      "BG":"Bulgaria",
      "BF":"Burkina Faso",
      "BI":"Burundi",
      "BT":"Bután",
      "BE":"Bélgica",
      "CV":"Cabo Verde",
      "KH":"Camboya",
      "CM":"Camerún",
      "CA":"Canadá",
      "TD":"Chad",
      "CL":"Chile",
      "CN":"China",
      "CY":"Chipre",
      "VA":"Ciudad del Vaticano",
      "CO":"Colombia",
      "KM":"Comoras",
      "CG":"Congo",
      "KP":"Corea del Norte",
      "KR":"Corea del Sur",
      "CR":"Costa Rica",
      "CI":"Costa de Marfil",
      "HR":"Croacia",
      "CU":"Cuba",
      "DK":"Dinamarca",
      "DM":"Dominica",
      "EC":"Ecuador",
      "EG":"Egipto",
      "SV":"El Salvador",
      "AE":"Emiratos Árabes Unidos",
      "ER":"Eritrea",
      "SK":"Eslovaquia",
      "SI":"Eslovenia",
      "ES":"España",
      "US":"Estados Unidos",
      "EE":"Estonia",
      "ET":"Etiopía",
      "PH":"Filipinas",
      "FI":"Finlandia",
      "FJ":"Fiyi",
      "FR":"Francia",
      "GA":"Gabón",
      "GM":"Gambia",
      "GE":"Georgia",
      "GH":"Ghana",
      "GI":"Gibraltar",
      "GD":"Granada",
      "GR":"Grecia",
      "GL":"Groenlandia",
      "GP":"Guadalupe",
      "GU":"Guam",
      "GT":"Guatemala",
      "GF":"Guayana Francesa",
      "GG":"Guernsey",
      "GN":"Guinea",
      "GQ":"Guinea Ecuatorial",
      "GW":"Guinea-Bissau",
      "GY":"Guyana",
      "HT":"Haití",
      "HN":"Honduras",
      "HU":"Hungría",
      "IN":"India",
      "ID":"Indonesia",
      "IQ":"Iraq",
      "IE":"Irlanda",
      "IR":"Irán",
      "BV":"Isla Bouvet",
      "CX":"Isla Christmas",
      "NU":"Isla Niue",
      "NF":"Isla Norfolk",
      "IM":"Isla de Man",
      "IS":"Islandia",
      "KY":"Islas Caimán",
      "CC":"Islas Cocos",
      "CK":"Islas Cook",
      "FO":"Islas Feroe",
      "GS":"Islas Georgia del Sur y Sandwich del Sur",
      "HM":"Islas Heard y McDonald",
      "FK":"Islas Malvinas",
      "MP":"Islas Marianas del Norte",
      "MH":"Islas Marshall",
      "SB":"Islas Salomón",
      "TC":"Islas Turcas y Caicos",
      "VG":"Islas Vírgenes Británicas",
      "VI":"Islas Vírgenes de los Estados Unidos",
      "UM":"Islas menores alejadas de los Estados Unidos",
      "AX":"Islas Åland",
      "IL":"Israel",
      "IT":"Italia",
      "JM":"Jamaica",
      "JP":"Japón",
      "JE":"Jersey",
      "JO":"Jordania",
      "KZ":"Kazajistán",
      "KE":"Kenia",
      "KG":"Kirguistán",
      "KI":"Kiribati",
      "KW":"Kuwait",
      "LA":"Laos",
      "LS":"Lesoto",
      "LV":"Letonia",
      "LR":"Liberia",
      "LY":"Libia",
      "LI":"Liechtenstein",
      "LT":"Lituania",
      "LU":"Luxemburgo",
      "LB":"Líbano",
      "MK":"Macedonia",
      "MG":"Madagascar",
      "MY":"Malasia",
      "MW":"Malaui",
      "MV":"Maldivas",
      "ML":"Mali",
      "MT":"Malta",
      "MA":"Marruecos",
      "MQ":"Martinica",
      "MU":"Mauricio",
      "MR":"Mauritania",
      "YT":"Mayotte",
      "FM":"Micronesia",
      "MD":"Moldavia",
      "MN":"Mongolia",
      "ME":"Montenegro",
      "MS":"Montserrat",
      "MZ":"Mozambique",
      "MM":"Myanmar",
      "MX":"México",
      "MC":"Mónaco",
      "NA":"Namibia",
      "NR":"Nauru",
      "NP":"Nepal",
      "NI":"Nicaragua",
      "NG":"Nigeria",
      "NO":"Noruega",
      "NC":"Nueva Caledonia",
      "NZ":"Nueva Zelanda",
      "NE":"Níger",
      "OM":"Omán",
      "PK":"Pakistán",
      "PW":"Palau",
      "PS":"Palestina",
      "PA":"Panamá",
      "PG":"Papúa Nueva Guinea",
      "PY":"Paraguay",
      "NL":"Países Bajos",
      "PE":"Perú",
      "PN":"Pitcairn",
      "PF":"Polinesia Francesa",
      "PL":"Polonia",
      "PT":"Portugal",
      "PR":"Puerto Rico",
      "QA":"Qatar",
      "HK":"República Popular China",
      "MO":"República Popular China",
      "ZZ":"Región desconocida o no válida",
      "GB":"Reino Unido",
      "CF":"República Centroafricana",
      "CZ":"República Checa",
      "CD":"República Democrática del Congo",
      "DO":"República Dominicana",
      "RE":"Reunión",
      "RW":"Ruanda",
      "RO":"Rumanía",
      "RU":"Rusia",
      "WS":"Samoa",
      "AS":"Samoa Americana",
      "BL":"San Bartolomé",
      "KN":"San Cristóbal y Nieves",
      "SM":"San Marino",
      "MF":"San Martín",
      "PM":"San Pedro y Miquelón",
      "VC":"San Vicente y las Granadinas",
      "SH":"Santa Elena",
      "LC":"Santa Lucía",
      "ST":"Santo Tomé y Príncipe",
      "SN":"Senegal",
      "RS":"Serbia",
      "CS":"Serbia y Montenegro",
      "SC":"Seychelles",
      "SL":"Sierra Leona",
      "SG":"Singapur",
      "SY":"Siria",
      "SO":"Somalia",
      "LK":"Sri Lanka",
      "SZ":"Suazilandia",
      "ZA":"Sudáfrica",
      "SD":"Sudán",
      "SE":"Suecia",
      "CH":"Suiza",
      "SR":"Surinam",
      "SJ":"Svalbard y Jan Mayen",
      "EH":"Sáhara Occidental",
      "TH":"Tailandia",
      "TW":"Taiwán",
      "TZ":"Tanzania",
      "TJ":"Tayikistán",
      "IO":"Territorio Británico del Océano Índico",
      "TF":"Territorios Australes Franceses",
      "TL":"Timor Oriental",
      "TG":"Togo",
      "TK":"Tokelau",
      "TO":"Tonga",
      "TT":"Trinidad y Tobago",
      "TM":"Turkmenistán",
      "TR":"Turquía",
      "TV":"Tuvalu",
      "TN":"Túnez",
      "UA":"Ucrania",
      "UG":"Uganda",
      "UY":"Uruguay",
      "UZ":"Uzbekistán",
      "VU":"Vanuatu",
      "VE":"Venezuela",
      "VN":"Vietnam",
      "WF":"Wallis y Futuna",
      "YE":"Yemen",
      "DJ":"Yibuti",
      "ZM":"Zambia",
      "ZW":"Zimbabue"

    };

    var countryListEN = {
    "AF": "Afghanistan",
    "AL": "Albania",
    "DZ": "Algeria",
    "AS": "American Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarctica",
    "AG": "Antigua and Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas (the)",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia (Plurinational State of)",
    "BQ": "Bonaire, Sint Eustatius and Saba",
    "BA": "Bosnia and Herzegovina",
    "BW": "Botswana",
    "BV": "Bouvet Island",
    "BR": "Brazil",
    "IO": "British Indian Ocean Territory (the)",
    "BN": "Brunei Darussalam",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "CV": "Cabo Verde",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "KY": "Cayman Islands (the)",
    "CF": "Central African Republic (the)",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CX": "Christmas Island",
    "CC": "Cocos (Keeling) Islands (the)",
    "CO": "Colombia",
    "KM": "Comoros (the)",
    "CD": "Congo (the Democratic Republic of the)",
    "CG": "Congo (the)",
    "CK": "Cook Islands (the)",
    "CR": "Costa Rica",
    "HR": "Croatia",
    "CU": "Cuba",
    "CW": "Curaçao",
    "CY": "Cyprus",
    "CZ": "Czechia",
    "CI": "Côte d'Ivoire",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican Republic (the)",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "SZ": "Eswatini",
    "ET": "Ethiopia",
    "FK": "Falkland Islands (the) [Malvinas]",
    "FO": "Faroe Islands (the)",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GF": "French Guiana",
    "PF": "French Polynesia",
    "TF": "French Southern Territories (the)",
    "GA": "Gabon",
    "GM": "Gambia (the)",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GL": "Greenland",
    "GD": "Grenada",
    "GP": "Guadeloupe",
    "GU": "Guam",
    "GT": "Guatemala",
    "GG": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HM": "Heard Island and McDonald Islands",
    "VA": "Holy See (the)",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran (Islamic Republic of)",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IM": "Isle of Man",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KP": "Korea (the Democratic People's Republic of)",
    "KR": "Korea (the Republic of)",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Lao People's Democratic Republic (the)",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macao",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands (the)",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "YT": "Mayotte",
    "MX": "Mexico",
    "FM": "Micronesia (Federated States of)",
    "MD": "Moldova (the Republic of)",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands (the)",
    "NC": "New Caledonia",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger (the)",
    "NG": "Nigeria",
    "NU": "Niue",
    "NF": "Norfolk Island",
    "MP": "Northern Mariana Islands (the)",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PS": "Palestine, State of",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines (the)",
    "PN": "Pitcairn",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "MK": "Republic of North Macedonia",
    "RO": "Romania",
    "RU": "Russian Federation (the)",
    "RW": "Rwanda",
    "RE": "Réunion",
    "BL": "Saint Barthélemy",
    "SH": "Saint Helena, Ascension and Tristan da Cunha",
    "KN": "Saint Kitts and Nevis",
    "LC": "Saint Lucia",
    "MF": "Saint Martin (French part)",
    "PM": "Saint Pierre and Miquelon",
    "VC": "Saint Vincent and the Grenadines",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Sao Tome and Principe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SX": "Sint Maarten (Dutch part)",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "GS": "South Georgia and the South Sandwich Islands",
    "SS": "South Sudan",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "Sudan (the)",
    "SR": "Suriname",
    "SJ": "Svalbard and Jan Mayen",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syrian Arab Republic",
    "TW": "Taiwan",
    "TJ": "Tajikistan",
    "TZ": "Tanzania, United Republic of",
    "TH": "Thailand",
    "TL": "Timor-Leste",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad and Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TC": "Turks and Caicos Islands (the)",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates (the)",
    "GB": "United Kingdom of Great Britain and Northern Ireland (the)",
    "UM": "United States Minor Outlying Islands (the)",
    "US": "United States of America (the)",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VE": "Venezuela (Bolivarian Republic of)",
    "VN": "Viet Nam",
    "VG": "Virgin Islands (British)",
    "VI": "Virgin Islands (U.S.)",
    "WF": "Wallis and Futuna",
    "EH": "Western Sahara",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe",
    "AX": "Åland Islands"
};

    
    const countries = (
      <select name="country" id="select" placeholder="Pick a state..." onChange={this.myChangeHandler}>
  <option value="XX">Selecciona un pais</option>
<option value="AF">Afganistán</option>
<option value="AL">Albania</option>
<option value="DE">Alemania</option>
<option value="AD">Andorra</option>
<option value="AO">Angola</option>
<option value="AI">Anguila</option>
<option value="AG">Antigua y Barbuda</option>
<option value="AN">Antillas Neerlandesas</option>
<option value="AQ">Antártida</option>
<option value="SA">Arabia Saudí</option>
<option value="DZ">Argelia</option>
<option value="AR">Argentina</option>
<option value="AM">Armenia</option>
<option value="AW">Aruba</option>
<option value="AU">Australia</option>
<option value="AT">Austria</option>
<option value="AZ">Azerbaiyán</option>
<option value="BS">Bahamas</option>
<option value="BH">Bahréin</option>
<option value="BD">Bangladesh</option>
<option value="BB">Barbados</option>
<option value="BZ">Belice</option>
<option value="BJ">Benín</option>
<option value="BM">Bermudas</option>
<option value="BY">Bielorrusia</option>
<option value="BO">Bolivia</option>
<option value="BA">Bosnia-Herzegovina</option>
<option value="BW">Botsuana</option>
<option value="BR">Brasil</option>
<option value="BN">Brunéi</option>
<option value="BG">Bulgaria</option>
<option value="BF">Burkina Faso</option>
<option value="BI">Burundi</option>
<option value="BT">Bután</option>
<option value="BE">Bélgica</option>
<option value="CV">Cabo Verde</option>
<option value="KH">Camboya</option>
<option value="CM">Camerún</option>
<option value="CA">Canadá</option>
<option value="TD">Chad</option>
<option value="CL">Chile</option>
<option value="CN">China</option>
<option value="CY">Chipre</option>
<option value="VA">Ciudad del Vaticano</option>
<option value="CO">Colombia</option>
<option value="KM">Comoras</option>
<option value="CG">Congo</option>
<option value="KP">Corea del Norte</option>
<option value="KR">Corea del Sur</option>
<option value="CR">Costa Rica</option>
<option value="CI">Costa de Marfil</option>
<option value="HR">Croacia</option>
<option value="CU">Cuba</option>
<option value="DK">Dinamarca</option>
<option value="DM">Dominica</option>
<option value="EC">Ecuador</option>
<option value="EG">Egipto</option>
<option value="SV">El Salvador</option>
<option value="AE">Emiratos Árabes Unidos</option>
<option value="ER">Eritrea</option>
<option value="SK">Eslovaquia</option>
<option value="SI">Eslovenia</option>
<option value="ES">España</option>
<option value="US">Estados Unidos</option>
<option value="EE">Estonia</option>
<option value="ET">Etiopía</option>
<option value="PH">Filipinas</option>
<option value="FI">Finlandia</option>
<option value="FJ">Fiyi</option>
<option value="FR">Francia</option>
<option value="GA">Gabón</option>
<option value="GM">Gambia</option>
<option value="GE">Georgia</option>
<option value="GH">Ghana</option>
<option value="GI">Gibraltar</option>
<option value="GD">Granada</option>
<option value="GR">Grecia</option>
<option value="GL">Groenlandia</option>
<option value="GP">Guadalupe</option>
<option value="GU">Guam</option>
<option value="GT">Guatemala</option>
<option value="GF">Guayana Francesa</option>
<option value="GG">Guernsey</option>
<option value="GN">Guinea</option>
<option value="GQ">Guinea Ecuatorial</option>
<option value="GW">Guinea-Bissau</option>
<option value="GY">Guyana</option>
<option value="HT">Haití</option>
<option value="HN">Honduras</option>
<option value="HU">Hungría</option>
<option value="IN">India</option>
<option value="ID">Indonesia</option>
<option value="IQ">Iraq</option>
<option value="IE">Irlanda</option>
<option value="IR">Irán</option>
<option value="BV">Isla Bouvet</option>
<option value="CX">Isla Christmas</option>
<option value="NU">Isla Niue</option>
<option value="NF">Isla Norfolk</option>
<option value="IM">Isla de Man</option>
<option value="IS">Islandia</option>
<option value="KY">Islas Caimán</option>
<option value="CC">Islas Cocos</option>
<option value="CK">Islas Cook</option>
<option value="FO">Islas Feroe</option>
<option value="GS">Islas Georgia del Sur y Sandwich del Sur</option>
<option value="HM">Islas Heard y McDonald</option>
<option value="FK">Islas Malvinas</option>
<option value="MP">Islas Marianas del Norte</option>
<option value="MH">Islas Marshall</option>
<option value="SB">Islas Salomón</option>
<option value="TC">Islas Turcas y Caicos</option>
<option value="VG">Islas Vírgenes Británicas</option>
<option value="VI">Islas Vírgenes de los Estados Unidos</option>
<option value="UM">Islas menores alejadas de los Estados Unidos</option>
<option value="AX">Islas Åland</option>
<option value="IL">Israel</option>
<option value="IT">Italia</option>
<option value="JM">Jamaica</option>
<option value="JP">Japón</option>
<option value="JE">Jersey</option>
<option value="JO">Jordania</option>
<option value="KZ">Kazajistán</option>
<option value="KE">Kenia</option>
<option value="KG">Kirguistán</option>
<option value="KI">Kiribati</option>
<option value="KW">Kuwait</option>
<option value="LA">Laos</option>
<option value="LS">Lesoto</option>
<option value="LV">Letonia</option>
<option value="LR">Liberia</option>
<option value="LY">Libia</option>
<option value="LI">Liechtenstein</option>
<option value="LT">Lituania</option>
<option value="LU">Luxemburgo</option>
<option value="LB">Líbano</option>
<option value="MK">Macedonia</option>
<option value="MG">Madagascar</option>
<option value="MY">Malasia</option>
<option value="MW">Malaui</option>
<option value="MV">Maldivas</option>
<option value="ML">Mali</option>
<option value="MT">Malta</option>
<option value="MA">Marruecos</option>
<option value="MQ">Martinica</option>
<option value="MU">Mauricio</option>
<option value="MR">Mauritania</option>
<option value="YT">Mayotte</option>
<option value="FM">Micronesia</option>
<option value="MD">Moldavia</option>
<option value="MN">Mongolia</option>
<option value="ME">Montenegro</option>
<option value="MS">Montserrat</option>
<option value="MZ">Mozambique</option>
<option value="MM">Myanmar</option>
<option value="MX">México</option>
<option value="MC">Mónaco</option>
<option value="NA">Namibia</option>
<option value="NR">Nauru</option>
<option value="NP">Nepal</option>
<option value="NI">Nicaragua</option>
<option value="NG">Nigeria</option>
<option value="NO">Noruega</option>
<option value="NC">Nueva Caledonia</option>
<option value="NZ">Nueva Zelanda</option>
<option value="NE">Níger</option>
<option value="OM">Omán</option>
<option value="PK">Pakistán</option>
<option value="PW">Palau</option>
<option value="PS">Palestina</option>
<option value="PA">Panamá</option>
<option value="PG">Papúa Nueva Guinea</option>
<option value="PY">Paraguay</option>
<option value="NL">Países Bajos</option>
<option value="PE">Perú</option>
<option value="PN">Pitcairn</option>
<option value="PF">Polinesia Francesa</option>
<option value="PL">Polonia</option>
<option value="PT">Portugal</option>
<option value="PR">Puerto Rico</option>
<option value="QA">Qatar</option>
<option value="HK">República Popular China</option>
<option value="MO">República Popular China</option>
<option value="ZZ">Región desconocida o no válida</option>
<option value="GB">Reino Unido</option>
<option value="CF">República Centroafricana</option>
<option value="CZ">República Checa</option>
<option value="CD">República Democrática del Congo</option>
<option value="DO">República Dominicana</option>
<option value="RE">Reunión</option>
<option value="RW">Ruanda</option>
<option value="RO">Rumanía</option>
<option value="RU">Rusia</option>
<option value="WS">Samoa</option>
<option value="AS">Samoa Americana</option>
<option value="BL">San Bartolomé</option>
<option value="KN">San Cristóbal y Nieves</option>
<option value="SM">San Marino</option>
<option value="MF">San Martín</option>
<option value="PM">San Pedro y Miquelón</option>
<option value="VC">San Vicente y las Granadinas</option>
<option value="SH">Santa Elena</option>
<option value="LC">Santa Lucía</option>
<option value="ST">Santo Tomé y Príncipe</option>
<option value="SN">Senegal</option>
<option value="RS">Serbia</option>
<option value="CS">Serbia y Montenegro</option>
<option value="SC">Seychelles</option>
<option value="SL">Sierra Leona</option>
<option value="SG">Singapur</option>
<option value="SY">Siria</option>
<option value="SO">Somalia</option>
<option value="LK">Sri Lanka</option>
<option value="SZ">Suazilandia</option>
<option value="ZA">Sudáfrica</option>
<option value="SD">Sudán</option>
<option value="SE">Suecia</option>
<option value="CH">Suiza</option>
<option value="SR">Surinam</option>
<option value="SJ">Svalbard y Jan Mayen</option>
<option value="EH">Sáhara Occidental</option>
<option value="TH">Tailandia</option>
<option value="TW">Taiwán</option>
<option value="TZ">Tanzania</option>
<option value="TJ">Tayikistán</option>
<option value="IO">Territorio Británico del Océano Índico</option>
<option value="TF">Territorios Australes Franceses</option>
<option value="TL">Timor Oriental</option>
<option value="TG">Togo</option>
<option value="TK">Tokelau</option>
<option value="TO">Tonga</option>
<option value="TT">Trinidad y Tobago</option>
<option value="TM">Turkmenistán</option>
<option value="TR">Turquía</option>
<option value="TV">Tuvalu</option>
<option value="TN">Túnez</option>
<option value="UA">Ucrania</option>
<option value="UG">Uganda</option>
<option value="UY">Uruguay</option>
<option value="UZ">Uzbekistán</option>
<option value="VU">Vanuatu</option>
<option value="VE">Venezuela</option>
<option value="VN">Vietnam</option>
<option value="WF">Wallis y Futuna</option>
<option value="YE">Yemen</option>
<option value="DJ">Yibuti</option>
<option value="ZM">Zambia</option>
<option value="ZW">Zimbabue</option>
</select>
    );

let flag = "https://www.countryflags.io/"+this.state.country+"/shiny/64.png";

let resultados = "";

    if (Object.keys(this.state.country_obj).length  > 0 && !('error' in this.state.country_obj)) {

      resultados = (
        <div style={{width:"100%", border:"1px blue groove", marginTop : "20px", padding:"10px"}}>
          <img src={flag} />

          <h3><u>{countryListES[this.state.country]}</u></h3>
          <br />
          <p><b>Confirmados:</b> {this.state.country_obj.confirmed.value}</p>
          <p><b>Recuperados:</b> {this.state.country_obj.recovered.value}</p>
          <p><b>Fallecidos:</b> {this.state.country_obj.deaths.value}</p>
          <p><b>Ultima Actualizacion:</b> {this.state.country_obj.lastUpdate}</p>

        </div>
      );

    } else if (('error' in this.state.country_obj)) {

      resultados = <h5 style={{color:"red"}}>No hay datos disponibles de ese pais!</h5>;
 
    }

    return (
      <div style={{width: "600px", height:"auto", border:"3px orange groove", padding:"30px", margin:"50px auto",textAlign: "center", backgroundColor : "#ffffff;"}}>    
      <h3 style={{}}>Consulta casos de Covid-19:</h3>
      <form onSubmit={this.mySubmitHandler}>
      {countries}
      </form>
      <br />
      {resultados}
      </div>
    );
  }
}

ReactDOM.render(<CovidCases /> , document.getElementById('root'));