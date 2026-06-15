export interface ExerciseBlank {
  id: string;
  expected: string;
  options: string[];
  explanation: string;
  armWithoutAnswer: string;
  armWithAnswer: string;
}

export interface ExerciseText {
  id: string;
  titleSp: string;
  titleArm: string;
  paragraphs: (string | { blankId: string })[][]; // Structure of text, arrays of lines containing segments
  blanks: Record<string, ExerciseBlank>;
  fullTranslationArm: string;
}

export const EXERCISES: ExerciseText[] = [
  {
    id: "text1",
    titleSp: "Texto 1 — Un día en Madrid",
    titleArm: "Տեքստ 1 — Մեկ օր Մադրիդում",
    fullTranslationArm: "Այսօր Սամուելը շուտ է արթնանում, որովհետև պետք է գնա կենտրոն։ Նա ապրում է փոքր, բայց հարմար բնակարանում՝ ավտոբուսների կայարանի մոտ։ Սկզբում նախաճաշում է կաթով սուրճ և տոստ։ Հետո դուրս է գալիս տնից և քայլում մինչև կանգառ։\nԱվտոբուսը գալիս է ժամը ութն անց կեսին։ Սամուելը նստում է ավտոբուս և նստում է մի տարեց կնոջ կողքին։ Ճանապարհի ընթացքում նա նայում է պատուհանից և մտածում իր աշխատանքի մասին։ Երբ հասնում է Մադրիդ, իջնում է ավտոբուսից և քայլում դեպի գրասենյակ։\nՄտնելուց առաջ նա ողջունում է իր գործընկերներին։ Նրա սեղանը պատուհանի մոտ է, և սեղանի վրա շատ փաստաթղթեր կան։ Սամուելը աշխատում է ժամը իննից մինչև երկուսը։",
    paragraphs: [
      [
        "Hoy Samuel se levanta temprano porque tiene que ir ",
        { blankId: "t1_b1" },
        " centro. Vive ",
        { blankId: "t1_b2" },
        " un piso pequeño, pero cómodo, ",
        { blankId: "t1_b3" },
        " la estación de autobuses. Primero desayuna café ",
        { blankId: "t1_b4" },
        " leche y una tostada. Después sale ",
        { blankId: "t1_b5" },
        " casa y camina ",
        { blankId: "t1_b6" },
        " la parada."
      ],
      [
        "El autobús llega ",
        { blankId: "t1_b7" },
        " las ocho y media. Samuel sube ",
        { blankId: "t1_b8" },
        " el autobús y se sienta ",
        { blankId: "t1_b9" },
        " una mujer mayor. Durante el viaje, mira ",
        { blankId: "t1_b10" },
        " la ventana y piensa ",
        { blankId: "t1_b11" },
        " su trabajo. Cuando llega ",
        { blankId: "t1_b12" },
        " Madrid, baja ",
        { blankId: "t1_b13" },
        " el autobús y camina ",
        { blankId: "t1_b14" },
        " la oficina."
      ],
      [
        "",
        { blankId: "t1_b15" },
        " entrar, saluda ",
        { blankId: "t1_b16" },
        " sus compañeros. Su mesa está ",
        { blankId: "t1_b17" },
        " la ventana y hay muchos documentos ",
        { blankId: "t1_b18" },
        " la mesa. Samuel trabaja ",
        { blankId: "t1_b19" },
        " las nine ", // Note: Spanish "nueve" is "nueve", let's make it standard "nueve" to align with exact text
        { blankId: "t1_b20" },
        " las dos."
      ]
    ],
    blanks: {
      t1_b1: {
        id: "t1_b1",
        expected: "al",
        options: ["al", "en", "a", "del"],
        explanation: "'ir' բայը պահանջում է 'a' նախդիրը (go to)։ 'a + el' (դեպի արական սեռի որոշյալ գոյական) միաձուլվելով դառնում է 'al' (ir al centro)։",
        armWithoutAnswer: "Այսօր Սամուելը շուտ է արթնանում, որովհետև պետք է գնա ....... կենտրոն։",
        armWithAnswer: "Այսօր Սամուելը շուտ է արթնանում, որովհետև պետք է գնա կենտրոն։"
      },
      t1_b2: {
        id: "t1_b2",
        expected: "en",
        options: ["en", "con", "de", "desde"],
        explanation: "'en' նախդիրը ցույց է տալիս գտնվելու վայրը, ներսում լինելը (մեջ, -ում)։ Vive en un piso = ապրում է բնակարանում։",
        armWithoutAnswer: "Նա ապրում է ....... մի փոքր, բայց հարմար բնակարանում...",
        armWithAnswer: "Նա ապրում է փոքր, բայց հարմար բնակարանում..."
      },
      t1_b3: {
        id: "t1_b3",
        expected: "cerca de",
        options: ["cerca de", "debajo de", "en un", "antes de"],
        explanation: "Տեքստում օգտագործված է 'cerca de la estación' (կայարանի մոտ/մոտակայքում)։",
        armWithoutAnswer: "..., ավտոբուսների կայարանի .......:",
        armWithAnswer: "..., ավտոբուսների կայարանի մոտ։"
      },
      t1_b4: {
        id: "t1_b4",
        expected: "con",
        options: ["con", "sin", "en", "para"],
        explanation: "'con' նշանակում է 'հետ' կամ բաղադրակիցը նշելու համար (կաթով սուրճ = սուրճ կաթով/կաթի հետ)։",
        armWithoutAnswer: "Սկզբում նախաճաշում է սուրճ ....... կաթ և տոստ։",
        armWithAnswer: "Սկզբում նախաճաշում է կաթով սուրճ (սուրճ կաթի հետ) և տոստ։"
      },
      t1_b5: {
        id: "t1_b5",
        expected: "de",
        options: ["de", "desde", "a", "en"],
        explanation: "'salir' (դուրս գալ) բայը պահանջում է 'de' նախդիրը որևէ վայրից դուրս գալիս (salir de casa - տնից դուրս գալ)։",
        armWithoutAnswer: "Հետո դուրս է գալիս ....... տնից...",
        armWithAnswer: "Հետո դուրս է գալիս տնից..."
      },
      t1_b6: {
        id: "t1_b6",
        expected: "hasta",
        options: ["hasta", "en", "sobre", "con"],
        explanation: "'hasta' նշանակում է 'մինչև'՝ ցույց տալով շարժման վերջնական սահմանը կամ կանգառը (camina hasta la parada)։",
        armWithoutAnswer: "... և քայլում է ....... կանգառը:",
        armWithAnswer: "... և քայլում է մինչև կանգառը:"
      },
      t1_b7: {
        id: "t1_b7",
        expected: "a",
        options: ["a", "en", "por", "de"],
        explanation: "Իսպաներենում ժամ նշելիս կիրառվում է 'a' նախդիրը (a las...)։",
        armWithoutAnswer: "Ավտոբուսը ժամանում է ....... ժամը ութն անց կեսին:",
        armWithAnswer: "Ավտոբուսը ժամանում է ժամը ութն անց կեսին:"
      },
      t1_b8: {
        id: "t1_b8",
        expected: "al",
        options: ["al", "en", "hacia", "sobre"],
        explanation: "'subir' (բարձրանալ տրանսպորտում) բայը կիրառվում է 'a' նախդիրի հետ։ 'a + el autobús' միաձուլվելով դառնում է 'al autobús':",
        armWithoutAnswer: "Սամուելը նստում է (բարձրանում է) ....... ավտոբուս...",
        armWithAnswer: "Սամուելը նստում է (բարձրանում է) ավտոբուս..."
      },
      t1_b9: {
        id: "t1_b9",
        expected: "al lado de",
        options: ["al lado de", "detrás de", "enfrente de", "entre"],
        explanation: "'al lado de' նշանակում է 'կողքին'։ Se sienta al lado de una mujer mayor = նստում է տարեց կնոջ կողքին։",
        armWithoutAnswer: "... և նստում է մի տարեց կնոջ .......:",
        armWithAnswer: "... և նստում է մի տարեց կնոջ կողքին:"
      },
      t1_b10: {
        id: "t1_b10",
        expected: "por",
        options: ["por", "desde", "para", "en"],
        explanation: "'por' նախդիրն օգտագործվում է որպես միջոց կամ անցման ուղի (պատուհանի միջով / պատուհանից նայել = mirar por la ventana)։",
        armWithoutAnswer: "Ճանապարհի ընթացքում նա նայում է պատուհանից ....... ...",
        armWithAnswer: "Ճանապարհի ընթացքում նա նայում է պատուհանից..."
      },
      t1_b11: {
        id: "t1_b11",
        expected: "en",
        options: ["en", "sobre", "con", "de"],
        explanation: "'pensar en' կայուն կապակցություն է՝ մտածել ինչ-որ բանի կամ մեկի մասին (մտքերով գտնվել դրա մեջ)։",
        armWithoutAnswer: "... և մտածում է ....... իր աշխատանքի մասին:",
        armWithAnswer: "... և մտածում է իր աշխատանքի մասին:"
      },
      t1_b12: {
        id: "t1_b12",
        expected: "a",
        options: ["a", "en", "hacia", "por"],
        explanation: "'llegar a' նշանակում է ժամանել որևէ վայր, քաղաք կամ երկիր (llegar a Madrid)։",
        armWithoutAnswer: "Երբ նա հասնում է ....... Մադրիդ...",
        armWithAnswer: "Երբ նա հասնում է Մադրիդ..."
      },
      t1_b13: {
        id: "t1_b13",
        expected: "del",
        options: ["del", "de", "al", "en"],
        explanation: "'bajar' (իջնել տրանսպորտից) բայը պահանջում է 'de' նախդիրը։ 'de + el autobús' միաձուլվելով դառնում է 'del autobús':",
        armWithoutAnswer: "... իջնում է ....... ավտոբուսից...",
        armWithAnswer: "... իջնում է ավտոբուսից..."
      },
      t1_b14: {
        id: "t1_b14",
        expected: "hacia",
        options: ["hacia", "a", "por", "desde"],
        explanation: "'hacia' նշանակում է 'դեպի' (ուղղություն, դեպի գրասենյակ)։",
        armWithoutAnswer: "... և քայլում է ....... գրասենյակը:",
        armWithAnswer: "... և քայլում է դեպի գրասենյակը:"
      },
      t1_b15: {
        id: "t1_b15",
        expected: "Antes de",
        options: ["Antes de", "Después de", "Hasta", "Para"],
        explanation: "'Antes de' նշանակում է 'նախքան, առաջ'։ Այն միշտ կառավարվում է 'de'-ով, երբ նրան հաջորդում է անորոշ դերբայ (antes de entrar = մտնելուց առաջ)։",
        armWithoutAnswer: "....... մտնելը...",
        armWithAnswer: "Մտնելուց առաջ..."
      },
      t1_b16: {
        id: "t1_b16",
        expected: "a",
        options: ["a", "con", "en", "para"],
        explanation: "'saludar a alguien' (ողջունել ինչ-որ մեկին)․ անձնական ուղիղ խնդիրներից առաջ իսպաներենում դրվում է 'a' նախդիրը։",
        armWithoutAnswer: "... ողջունում է ....... իր գործընկերներին։",
        armWithAnswer: "... ողջունում է իր գործընկերներին։"
      },
      t1_b17: {
        id: "t1_b17",
        expected: "cerca de",
        options: ["cerca de", "dentro de", "debajo de", "sobre"],
        explanation: "Su mesa está cerca de la ventana = նրա սեղանը պատուհանին մոտ է։",
        armWithoutAnswer: "Նրա սեղանը պատուհանի ....... է...",
        armWithAnswer: "Նրա սեղանը պատուհանի մոտ է..."
      },
      t1_b18: {
        id: "t1_b18",
        expected: "sobre",
        options: ["sobre", "en", "entre", "dentro de"],
        explanation: "'sobre la mesa' նշանակում է սեղանի վրա (նաև կարող է լինել 'en la mesa', բայց ըստ պատասխանի 'sobre' է օգտագործված ավելի ճշգրիտ 'վրա' իմաստով)։",
        armWithoutAnswer: "... և կան շատ փաստաթղթեր սեղանի .......:",
        armWithAnswer: "... և կան շատ փաստաթղթեր սեղանի վրա:"
      },
      t1_b19: {
        id: "t1_b19",
        expected: "desde",
        options: ["desde", "a", "de", "en"],
        explanation: "'desde... hasta...' կառույցն օգտագործվում է ժամանակային սկիզբը և ավարտը նշելու համար (իննից մինչև երկուսը)։",
        armWithoutAnswer: "Սամուելը աշխատում է ժամը իննից .......",
        armWithAnswer: "Սամուելը աշխատում է ժամը իննից ......."
      },
      t1_b20: {
        id: "t1_b20",
        expected: "hasta",
        options: ["hasta", "a", "en", "desde"],
        explanation: "'hasta' նշանակում է 'մինչև'՝ ժամանակային վերջակետը նշելու համար (hasta las dos = մինչև ժամը երկուսը)։",
        armWithoutAnswer: "... մինչև ....... ժամը երկուսը։",
        armWithAnswer: "... մինչև ժամը երկուսը։"
      }
    }
  },
  {
    id: "text2",
    titleSp: "Texto 2 — En una tienda de ropa",
    titleArm: "Տեքստ 2 — Հագուստի խանութում",
    fullTranslationArm: "Ալիսիան աշխատում է կենտրոնում գտնվող հագուստի խանութում։ Խանութը գտնվում է դեղատան և սուպերմարկետի միջև։ Այսօր Սամուելը մտնում է խանութ, որովհետև ուզում է ձմեռային բաճկոն գնել։\nՍամուելը նայում է մի քանի բաճկոնների։ Սև բաճկոնը ցուցափեղկում է, բայց այն չափազանց թանկ է։ Ալիսիան նրան ասում է. «Այս բաճկոնը քեզ համար լավ է, որովհետև հարմար է և էժան»։ Սամուելը բաճկոնը փորձում է փորձասենյակում։\nՀետո հարցնում է գինը։ Ալիսիան պատասխանում է. «Արժե 45 եվրո»։ Սամուելը վճարում է քարտով և խանութից դուրս է գալիս շատ գոհ։ Դուրս գալուց առաջ Ալիսիան նրան ասում է. «Զգույշ եղիր անձրևից։ Այսօր եղանակը վատ է»։",
    paragraphs: [
      [
        "Alicia trabaja ",
        { blankId: "t2_b1" },
        " una tienda de ropa ",
        { blankId: "t2_b2" },
        " el centro. La tienda está ",
        { blankId: "t2_b3" },
        " una farmacia y un supermercado. Hoy entra Samuel porque quiere comprar una chaqueta ",
        { blankId: "t2_b4" },
        " invierno."
      ],
      [
        "Samuel mira varias chaquetas. Una chaqueta negra está ",
        { blankId: "t2_b5" },
        " el escaparate, pero es demasiado cara. Alicia le dice: “Esta chaqueta es buena ",
        { blankId: "t2_b6" },
        " ti, porque es cómoda y barata”. Samuel se prueba la chaqueta ",
        { blankId: "t2_b7" },
        " el probador."
      ],
      [
        "Después pregunta ",
        { blankId: "t2_b8" },
        " el precio. Alicia responde: “Cuesta 45 euros”. Samuel paga ",
        { blankId: "t2_b9" },
        " tarjeta y sale ",
        { blankId: "t2_b10" },
        " la tienda muy contento. Antes ",
        { blankId: "t2_b11" },
        " salir, Alicia le dice: “¡Cuidado ",
        { blankId: "t2_b12" },
        " la lluvia! Hoy hace mal tiempo”."
      ]
    ],
    blanks: {
      t2_b1: {
        id: "t2_b1",
        expected: "en",
        options: ["en", "a", "de", "con"],
        explanation: "Trabajar en... = աշխատել ինչ-որ վայրում (խանութում)։",
        armWithoutAnswer: "Ալիսիան աշխատում է ....... հագուստի խանութում...",
        armWithAnswer: "Ալիսիան աշխատում է հագուստի խանութում..."
      },
      t2_b2: {
        id: "t2_b2",
        expected: "en",
        options: ["en", "a", "por", "de"],
        explanation: "en el centro = կենտրոնում (գտնվելու վայրը ցույց տվող 'en' նախդիր)։",
        armWithoutAnswer: "..., որը գտնվում է ....... կենտրոնում։",
        armWithAnswer: "..., որը գտնվում է կենտրոնում։"
      },
      t2_b3: {
        id: "t2_b3",
        expected: "entre",
        options: ["entre", "al lado de", "detrás de", "hacia"],
        explanation: "'entre' նշանակում է 'միջև' (երկու օբյեկտների՝ դեղատան և սուպերմարկետի միջև)։",
        armWithoutAnswer: "Խանութը գտնվում է դեղատան ....... սուպերմարկետի։",
        armWithAnswer: "Խանութը գտնվում է դեղատան և սուպերմարկետի միջև։"
      },
      t2_b4: {
        id: "t2_b4",
        expected: "para",
        options: ["para", "de", "en", "por"],
        explanation: "'para invierno' = ձմռան համար / ձմեռային (նպատակային օգտագործում)։",
        armWithoutAnswer: "..., որովհետև ուզում է բաճկոն գնել ....... ձմռան։",
        armWithAnswer: "..., որովհետև ուզում է բաճկոն գնել ձմռան համար (ձմեռային բաճկոն)։"
      },
      t2_b5: {
        id: "t2_b5",
        expected: "en",
        options: ["en", "sobre", "delante de", "por"],
        explanation: "en el escaparate = ցուցափեղկում / ցուցափեղկի մեջ (տեղորոշման համար 'en'-ով)։",
        armWithoutAnswer: "Սև բաճկոնը ....... ցուցափեղկում է...",
        armWithAnswer: "Սև բաճկոնը ցուցափեղկում է..."
      },
      t2_b6: {
        id: "t2_b6",
        expected: "para",
        options: ["para", "por", "a", "de"],
        explanation: "'buena para ti' = քեզ համար լավ ('para' + դերանուն ցույց է տալիս շահառուին/կարծիքը)։",
        armWithoutAnswer: "Այս բաճկոնը լավ է ....... քեզ...",
        armWithAnswer: "Այս բաճկոնը լավ է քեզ համար..."
      },
      t2_b7: {
        id: "t2_b7",
        expected: "en",
        options: ["en", "a", "dentro de", "al"],
        explanation: "en el probador = փորձասենյակում (ներքին փակ տարածքում գործողություն կատարելու համար ('en'))։",
        armWithoutAnswer: "Սամուելը փորձում է բաճկոնը ....... փորձասենյակում։",
        armWithAnswer: "Սամուելը փորձում է բաճկոնը փորձասենյակում։"
      },
      t2_b8: {
        id: "t2_b8",
        expected: "por",
        options: ["por", "para", "de", "a"],
        explanation: "'preguntar por...' = հարցնել ինչ-որ բանի մասին / գինը հարցնել (preguntar por el precio)։",
        armWithoutAnswer: "Հետո նա հարցնում է ....... գինը։",
        armWithAnswer: "Հետո նա հարցնում է գնի մասին։"
      },
      t2_b9: {
        id: "t2_b9",
        expected: "con",
        options: ["con", "por", "en", "sin"],
        explanation: "pagar con tarjeta = վճարել քարտով (վճարման գործիքային միջոցը նշվում է 'con'-ով)։",
        armWithoutAnswer: "Սամուելը վճարում է ....... քարտով...",
        armWithAnswer: "Սամուելը վճարում է քարտով..."
      },
      t2_b10: {
        id: "t2_b10",
        expected: "de",
        options: ["de", "desde", "a", "en"],
        explanation: "'salir de' = դուրս գալ ինչ-որ վայրից (salir de la tienda - դուրս գալ խանութից)։",
        armWithoutAnswer: "... և դուրս է գալիս ....... խանութից շատ գոհ։",
        armWithAnswer: "... և դուրս է գալիս խանութից շատ գոհ։"
      },
      t2_b11: {
        id: "t2_b11",
        expected: "de",
        options: ["de", "hasta", "para", "a"],
        explanation: "'Antes de...' = ...-ից առաջ / նախքան (Antes de salir = դուրս գալուց առաջ)։",
        armWithoutAnswer: "Դուրս գալուց ....... Ալիսիան ասում է...",
        armWithAnswer: "Դուրս գալուց առաջ Ալիսիան ասում է..."
      },
      t2_b12: {
        id: "t2_b12",
        expected: "con",
        options: ["con", "de", "por", "en"],
        explanation: "¡Cuidado con...! = Զգույշ եղիր...-ից / զգուշություն ունեցիր... հետ (tener cuidado con la lluvia)։",
        armWithoutAnswer: "«Զգույշ եղիր ....... անձրևից։»",
        armWithAnswer: "«Զգույշ եղիր անձրևից (անձրևի հետ)։»"
      }
    }
  },
  {
    id: "text3",
    titleSp: "Texto 3 — En casa de Ana",
    titleArm: "Տեքստ 3 — Անայի տանը",
    fullTranslationArm: "Անան ապրում է իր ընկերների հետ մեծ բնակարանում։ Բնակարանը կենտրոնում է, բայց համալսարանից հեռու չէ։ Տանը կա հյուրասենյակ, խոհանոց, երկու ննջասենյակ և լոգարան։\nԽոհանոցը միջանցքի աջ կողմում է։ Լոգարանը խոհանոցի և Անայի ննջասենյակի միջև է։ Հյուրասենյակում կա բազմոց, սեղան և լամպ։ Կատուն քնում է բազմոցի վրա, իսկ շունը սեղանի տակ է։\nԱմեն կեսօրից հետո Անան իր սենյակում իսպաներեն է սովորում։ Սովորելուց հետո ընթրիք է պատրաստում իր բնակակիցների համար։ Երբեմն նրանք միասին ընթրում են ժամը իննին։ Նրանց դուր է գալիս խոսել ճանապարհորդությունների և ապագայի պլանների մասին։",
    paragraphs: [
      [
        "Ana vive ",
        { blankId: "t3_b1" },
        " sus amigos ",
        { blankId: "t3_b2" },
        " un piso grande. El piso está ",
        { blankId: "t3_b3" },
        " el centro, pero no está lejos ",
        { blankId: "t3_b4" },
        " la universidad. En la casa hay un salón, una cocina, dos dormitorios y un baño."
      ],
      [
        "La cocina está ",
        { blankId: "t3_b5" },
        " la derecha del pasillo. El baño está ",
        { blankId: "t3_b6" },
        " la cocina y el dormitorio de Ana. En el salón hay un sofá, una mesa y una lámpara. El gato duerme ",
        { blankId: "t3_b7" },
        " del sofá y el perro está ",
        { blankId: "t3_b8" },
        " la mesa."
      ],
      [
        "Todas las tardes, Ana estudia español ",
        { blankId: "t3_b9" },
        " su habitación. Después ",
        { blankId: "t3_b10" },
        " estudiar, prepara la cena ",
        { blankId: "t3_b11" },
        " sus compañeros. A veces cenan juntos ",
        { blankId: "t3_b12" },
        " las nueve. Les gusta hablar ",
        { blankId: "t3_b13" },
        " viajes y planes ",
        { blankId: "t3_b14" },
        " el futuro."
      ]
    ],
    blanks: {
      t3_b1: {
        id: "t3_b1",
        expected: "con",
        options: ["con", "sin", "en", "de"],
        explanation: "vive con sus amigos = ապրում է իր ընկերների հետ ('con' = հետ)։",
        armWithoutAnswer: "Անան ապրում է ....... իր ընկերների մեծ բնակարանում...",
        armWithAnswer: "Անան ապրում է իր ընկերների հետ մեծ բնակարանում..."
      },
      t3_b2: {
        id: "t3_b2",
        expected: "en",
        options: ["en", "a", "sobre", "delante de"],
        explanation: "en un piso grande = մեծ բնակարանում (-ում, մեջ)։",
        armWithoutAnswer: "Անան ապրում է իր ընկերների հետ ....... մի մեծ բնակարանում...",
        armWithAnswer: "Անան ապրում է իր ընկերների հետ մեծ բնակարանում..."
      },
      t3_b3: {
        id: "t3_b3",
        expected: "en",
        options: ["en", "con", "de", "por"],
        explanation: "está en el centro = կենտրոնում է (տեղորոշում)։",
        armWithoutAnswer: "Բնակարանը ....... կենտրոնում է...",
        armWithAnswer: "Բնակարանը կենտրոնում է..."
      },
      t3_b4: {
        id: "t3_b4",
        expected: "de",
        options: ["de", "desde", "a", "con"],
        explanation: "'lejos de...' = հեռու ինչ-որ տեղից (no está lejos de la universidad - համալսարանից հեռու չէ)։",
        armWithoutAnswer: "... բայց հեռու չէ ....... համալսարանից։",
        armWithAnswer: "... բայց համալսարանից հեռու չէ։"
      },
      t3_b5: {
        id: "t3_b5",
        expected: "a",
        options: ["a", "en", "de", "por"],
        explanation: "'a la derecha' = աջ կողմում (a la derecha del pasillo = միջանցքի աջ կողմում)։",
        armWithoutAnswer: "Խոհանոցը միջանցքի ....... աջ կողմում է։",
        armWithAnswer: "Խոհանոցը միջանցքի աջ կողմում է։"
      },
      t3_b6: {
        id: "t3_b6",
        expected: "entre",
        options: ["entre", "detrás de", "al lado de", "enfrente de"],
        explanation: "'entre' = միջև (խոհանոցի և ննջասենյակի միջև)։",
        armWithoutAnswer: "Լոգարանը խոհանոցի ....... Անայի ննջասենյակի միջև է։",
        armWithAnswer: "Լոգարանը խոհանոցի և Անայի ննջասենյակի միջև է։"
      },
      t3_b7: {
        id: "t3_b7",
        expected: "encima",
        options: ["encima", "debajo", "dentro", "sobre"],
        explanation: "encima de el sofá = բազմոցի վրա (encima de = վրա)։",
        armWithoutAnswer: "Կատուն քնում է բազմոցի .......",
        armWithAnswer: "Կատուն քնում է բազմոցի վրա"
      },
      t3_b8: {
        id: "t3_b8",
        expected: "debajo de",
        options: ["debajo de", "encima de", "enfrente de", "al lado de"],
        explanation: "debajo de la mesa = սեղանի տակ (տարածական դիրք)։",
        armWithoutAnswer: "... իսկ շունը սեղանի ....... է։",
        armWithAnswer: "... իսկ շունը սեղանի տակ է։"
      },
      t3_b9: {
        id: "t3_b9",
        expected: "en",
        options: ["en", "a", "por", "con"],
        explanation: "en su habitación = իր սենյակում (ներքին տեղորոշում)։",
        armWithoutAnswer: "Ամեն կեսօրից հետո, Անան իսպաներեն է սովորում ....... իր սենյակում։",
        armWithAnswer: "Ամեն կեսօրից հետո, Անան իսպաներեն է սովորում իր սենյակում։"
      },
      t3_b10: {
        id: "t3_b10",
        expected: "de",
        options: ["de", "hasta", "para", "con"],
        explanation: "'Después de + infinitivo' = ...-ուց հետո (Después de estudiar = սովորելուց հետո)։",
        armWithoutAnswer: "Սովորելուց ....... նա ընթրիք է պատրաստում...",
        armWithAnswer: "Սովորելուց հետո նա ընթրիք է պատրաստում..."
      },
      t3_b11: {
        id: "t3_b11",
        expected: "para",
        options: ["para", "por", "con", "a"],
        explanation: "prepara la cena para sus compañeros = ընթրիք է պատրաստում իր բնակակիցների համար (para = համար, շահառու)։",
        armWithoutAnswer: "..., պատրաստում է ընթրիք իր հարևանների .......:",
        armWithAnswer: "..., պատրաստում է ընթրիք իր հարևանների համար (բնակակիցների համար)։"
      },
      t3_b12: {
        id: "t3_b12",
        expected: "a",
        options: ["a", "en", "por", "de"],
        explanation: "Cenan a las nueve = ընթրում են ժամը իննին (a + las + ժամ)։",
        armWithoutAnswer: "Երբեմն նրանք միասին ընթրում են ....... ժամը իննին։",
        armWithAnswer: "Երբեմն նրանք միասին ընթրում են ժամը իննին։"
      },
      t3_b13: {
        id: "t3_b13",
        expected: "sobre",
        options: ["sobre", "en", "para", "con"],
        explanation: "'hablar sobre viajes' = խոսել ճանապարհորդությունների մասին/վերաբերյալ (sobre = մասին)։",
        armWithoutAnswer: "Նրանց դուր է գալիս խոսել ....... ճանապարհորդությունների...",
        armWithAnswer: "Նրանց դուր է գալիս խոսել ճանապարհորդությունների մասին..."
      },
      t3_b14: {
        id: "t3_b14",
        expected: "para",
        options: ["para", "por", "de", "con"],
        explanation: "planes para el futuro = ապագայի պլաններ / պլաններ ապագայի համար։",
        armWithoutAnswer: "... և պլանների ....... ապագայի։",
        armWithAnswer: "... և պլանների ապագայի համար (ապագայի պլանների մասին)։"
      }
    }
  },
  {
    id: "text4",
    titleSp: "Texto 4 — Un viaje",
    titleArm: "Տեքստ 4 — Ճանապարհորդություն",
    fullTranslationArm: "Վաղը մենք գնում ենք Բարսելոնա։ Տնից դուրս ենք գալիս առավոտյան ժամը յոթին։ Գնում ենք մեքենայով, որովհետև ուզում ենք ճանապարհին կանգ առնել և մի քանի գյուղ այցելել։\nՃանապարհորդելուց առաջ պատրաստում ենք ճամպրուկները։ Ես վերցնում եմ հարմար հագուստ, փաստաթղթեր, լուսանկարչական ապարատ և գումար։ Քույրս վերցնում է զգեստ երեկույթի համար և սպորտային կոշիկներ։\nՄենք Բարսելոնա կհասնենք կեսօրից հետո։ Մեր հյուրանոցը լողափի մոտ է և մետրոյի կայարանի մոտ։ Ուզում ենք զբոսնել քաղաքով, այցելել թանգարաններ և ուտել ավանդական ռեստորանում։ Մենք շատ ուրախ ենք այս ճանապարհորդության համար։",
    paragraphs: [
      [
        "Mañana vamos ",
        { blankId: "t4_b1" },
        " Barcelona. Salimos ",
        { blankId: "t4_b2" },
        " casa ",
        { blankId: "t4_b3" },
        " las siete de la mañana. Vamos ",
        { blankId: "t4_b4" },
        " coche porque queremos parar ",
        { blankId: "t4_b5" },
        " el camino y visitar algunos pueblos."
      ],
      [
        "Antes ",
        { blankId: "t4_b6" },
        " viajar, preparamos las maletas. Yo llevo ropa cómoda, documentos, una cámara ",
        { blankId: "t4_b7" },
        " fotos y dinero. Mi hermana lleva un vestido ",
        { blankId: "t4_b8" },
        " la fiesta y unos zapatos ",
        { blankId: "t4_b9" },
        " deporte."
      ],
      [
        "Llegaremos ",
        { blankId: "t4_b10" },
        " Barcelona ",
        { blankId: "t4_b11" },
        " la tarde. Nuestro hotel está ",
        { blankId: "t4_b12" },
        " la playa y cerca ",
        { blankId: "t4_b13" },
        " una estación de metro. Queremos pasear ",
        { blankId: "t4_b14" },
        " la ciudad, visitar museos y comer ",
        { blankId: "t4_b15" },
        " un restaurante típico. Estamos muy contentos ",
        { blankId: "t4_b16" },
        " este viaje."
      ]
    ],
    blanks: {
      t4_b1: {
        id: "t4_b1",
        expected: "a",
        options: ["a", "en", "para", "hacia"],
        explanation: "vamos a Barcelona = գնում ենք Բարսելոնա (ir a = գնալ դեպի տեղ)։",
        armWithoutAnswer: "Վաղը մենք գնում ենք ....... Բարսելոնա։",
        armWithAnswer: "Վաղը մենք գնում ենք Բարսելոնա։"
      },
      t4_b2: {
        id: "t4_b2",
        expected: "de",
        options: ["de", "desde", "a", "en"],
        explanation: "Salimos de casa = դուրս ենք գալիս տնից (salir de... = դուրս գալ ինչ-որ տեղից)։",
        armWithoutAnswer: "Տնից դուրս ենք գալիս ....... առավոտյան...",
        armWithAnswer: "Տնից (դուրս) ենք գալիս առավոտյան..."
      },
      t4_b3: {
        id: "t4_b3",
        expected: "a",
        options: ["a", "en", "por", "de"],
        explanation: "a las siete = ժամը յոթին (կոնկրետ ժամը նշվում է 'a las'-ով)։",
        armWithoutAnswer: "..., դուրս ենք գալիս տնից ....... ժամը յոթին։",
        armWithAnswer: "..., դուրս ենք գալիս տնից ժամը յոթին։"
      },
      t4_b4: {
        id: "t4_b4",
        expected: "en",
        options: ["en", "con", "por", "a"],
        explanation: "ir en coche = գնալ մեքենայով (տրանսպորտային միջոցները նշվում են 'en' նախդիրով, բացառությամբ 'a pie' - ոտքով, 'a caballo' - ձիով)։",
        armWithoutAnswer: "Գնում ենք ....... մեքենայով...",
        armWithAnswer: "Գնում ենք մեքենայով..."
      },
      t4_b5: {
        id: "t4_b5",
        expected: "en",
        options: ["en", "por", "sobre", "a"],
        explanation: "parar en el camino = կանգնել ճանապարհին (գտնվելու վայրը՝ 'en'-ով)։",
        armWithoutAnswer: "..., որովհետև ցանկանում ենք կանգնել ....... ճանապարհին...",
        armWithAnswer: "..., որովհետև ցանկանում ենք կանգնել ճանապարհին..."
      },
      t4_b6: {
        id: "t4_b6",
        expected: "de",
        options: ["de", "hasta", "para", "a"],
        explanation: "Antes de viajar = ճանապարհորդելուց առաջ (Antes de + infinitivo)։",
        armWithoutAnswer: "Ճանապարհորդելուց ....... պատրաստում ենք...",
        armWithAnswer: "Ճանապարհորդելուց առաջ պատրաստում ենք..."
      },
      t4_b7: {
        id: "t4_b7",
        expected: "de",
        options: ["de", "para", "con", "en"],
        explanation: "cámara de fotos = լուսանկարչական ապարատ (de-ն արտահայտում է օբյեկտի նշանակությունը / տեսակը)։",
        armWithoutAnswer: "..., լուսանկարչական ապարատ (ապարատ ....... լուսանկարների)...",
        armWithAnswer: "..., լուսանկարչական ապարատ (տեսախցիկ լուսանկարների համար)..."
      },
      t4_b8: {
        id: "t4_b8",
        expected: "para",
        options: ["para", "por", "de", "con"],
        explanation: "vestido para la fiesta = զգեստ երեկույթի համար (para = համար, նպատակ)։",
        armWithoutAnswer: "Քույրս վերցնում է զգեստ ....... երեկույթի...",
        armWithAnswer: "Քույրս վերցնում է զգեստ երեկույթի համար..."
      },
      t4_b9: {
        id: "t4_b9",
        expected: "de",
        options: ["de", "para", "por", "con"],
        explanation: "zapatos de deporte = սպորտային կոշիկներ (տեսակը/նշանակությունը որոշող կառույց 'de'-ով)։",
        armWithoutAnswer: "... և կոշիկներ ....... սպորտի։",
        armWithAnswer: "... և սպորտային կոշիկներ (կոշիկներ սպորտի համար)։"
      },
      t4_b10: {
        id: "t4_b10",
        expected: "a",
        options: ["a", "en", "para", "por"],
        explanation: "Llegaremos a Barcelona = կժամանենք Բարսելոնա (llegar a = ժամանել որևէ տեղ)։",
        armWithoutAnswer: "Մենք կհասնենք ....... Բարսելոնա...",
        armWithAnswer: "Մենք կժամանենք Բարսելոնա..."
      },
      t4_b11: {
        id: "t4_b11",
        expected: "por",
        options: ["por", "en", "para", "a"],
        explanation: "por la tarde = կեսօրից հետո / երեկոյան (օրվա մասերը նշելիս կիրառվում է 'por' նախդիրը՝ por la mañana, por la tarde, por la noche)։",
        armWithoutAnswer: "... կեսօրից .......:",
        armWithAnswer: "... կեսօրից հետո (երեկոյան)։"
      },
      t4_b12: {
        id: "t4_b12",
        expected: "cerca de",
        options: ["cerca de", "al lado de", "delante de", "en"],
        explanation: "Nuestro hotel está cerca de la playa = մեր հյուրանոցը լողափի մոտ է։",
        armWithoutAnswer: "Մեր հյուրանոցը լողափի ....... է...",
        armWithAnswer: "Մեր հյուրանոցը լողափի մոտ է..."
      },
      t4_b13: {
        id: "t4_b13",
        expected: "de",
        options: ["de", "a", "desde", "con"],
        explanation: "cerca de una estación = մետրոյի կայարանի մոտ ('cerca de' կապակցության մասնիկն է 'de'-ն)։",
        armWithoutAnswer: "... և մետրոյի կայարանի ....... մոտ։",
        armWithAnswer: "... և մետրոյի կայարանի մոտ։"
      },
      t4_b14: {
        id: "t4_b14",
        expected: "por",
        options: ["por", "para", "en", "a"],
        explanation: "'pasear por la ciudad' = զբոսնել քաղաքով / քաղաքի տարածքով ('por' = տարածության միջով, տարածքով)։",
        armWithoutAnswer: "Ցանկանում ենք զբոսնել ....... քաղաքով...",
        armWithAnswer: "Ցանկանում ենք զբոսնել քաղաքով (քաղաքի տարածքով)..."
      },
      t4_b15: {
        id: "t4_b15",
        expected: "en",
        options: ["en", "a", "por", "sobre"],
        explanation: "comer en un restaurante = ուտել ռեստորանում (տեղորոշում 'en'-ով)։",
        armWithoutAnswer: "... և ուտել ....... ավանդական ռեստորանում։",
        armWithAnswer: "... և ուտել ավանդական ռեստորանում։"
      },
      t4_b16: {
        id: "t4_b16",
        expected: "con",
        options: ["con", "de", "por", "para"],
        explanation: "contentos con este viaje = գոհ այս ճանապարհորդությունից (estar contento con algo = գոհ/ուրախ լինել ինչ-որ բանով/հետ)։",
        armWithoutAnswer: "Մենք շատ ուրախ (գոհ) ենք ....... այս ճանապարհորդությանից։",
        armWithAnswer: "Մենք շատ ուրախ (գոհ) ենք այս ճանապարհորդության համար (ճանապարհորդությունից)։"
      }
    }
  },
  {
    id: "text5",
    titleSp: "Texto 5 — Tiempo libre",
    titleArm: "Տեքստ 5 — Ազատ ժամանակ",
    fullTranslationArm: "Հանգստյան օրերին ինձ դուր է գալիս դուրս գալ ընկերներիս հետ։ Երբեմն գնում ենք կինո, երբեմն զբոսնում ենք այգում։ Եթե ցուրտ է, մնում ենք տանը և ֆիլմ ենք դիտում։\nԻմ ընկեր Կառլոսը ֆուտբոլով է զբաղվում երկուշաբթի և չորեքշաբթի օրերին։ Ես նախընտրում եմ գնալ մարզասրահ կամ քայել կենտրոնում։ Սպորտով զբաղվելուց հետո մի բան ենք խմում բարում։\nՆաև սիրում եմ կարդալ ճանապարհորդությունների մասին գրքեր և գիշերը երաժշտություն լսել։ Չեմ կարող սովորել երաժշտությամբ, բայց կարող եմ հանգստանալ դրա հետ։ Ինձ համար ազատ ժամանակը կարևոր է հանգիստ և երջանիկ լինելու համար։",
    paragraphs: [
      [
        "Los fines de semana me gusta salir ",
        { blankId: "t5_b1" },
        " mis amigos. A veces vamos ",
        { blankId: "t5_b2" },
        " cine, otras veces paseamos ",
        { blankId: "t5_b3" },
        " el parque. Si hace frío, nos quedamos ",
        { blankId: "t5_b4" },
        " casa y vemos una película."
      ],
      [
        "Mi amigo Carlos practica fútbol ",
        { blankId: "t5_b5" },
        " lunes y miércoles. Yo prefiero ir ",
        { blankId: "t5_b6" },
        " gimnasio o caminar ",
        { blankId: "t5_b7" },
        " el centro. Después ",
        { blankId: "t5_b8" },
        " hacer deporte, tomamos algo ",
        { blankId: "t5_b9" },
        " un bar."
      ],
      [
        "También me gusta leer libros ",
        { blankId: "t5_b10" },
        " viajes y escuchar música ",
        { blankId: "t5_b11" },
        " la noche. No puedo estudiar ",
        { blankId: "t5_b12" },
        " música, pero puedo descansar ",
        { blankId: "t5_b13" },
        " ella. Para mí, el tiempo libre es importante ",
        { blankId: "t5_b14" },
        " estar tranquilo y feliz."
      ]
    ],
    blanks: {
      t5_b1: {
        id: "t5_b1",
        expected: "con",
        options: ["con", "sin", "en", "por"],
        explanation: "salir con mis amigos = դուրս գալ (զբոսնել) ընկերներիս հետ (con = հետ)։",
        armWithoutAnswer: "Հանգստյան օրերին ինձ դուր է գալիս դուրս գալ ....... իմ ընկերների...",
        armWithAnswer: "Հանգստյան օրերին ինձ դուր է գալիս դուրս գալ իմ ընկերների հետ..."
      },
      t5_b2: {
        id: "t5_b2",
        expected: "al",
        options: ["al", "en", "a", "del"],
        explanation: "vamos al cine = գնում ենք կինոթատրոն։ 'ir' + 'a' + 'el cine' միացումը դառնում է 'al cine'։",
        armWithoutAnswer: "Երբեմն մենք գնում ենք ....... կինո...",
        armWithAnswer: "Երբեմն մենք գնում ենք կինո..."
      },
      t5_b3: {
        id: "t5_b3",
        expected: "por",
        options: ["por", "en", "para", "desde"],
        explanation: "paseamos por el parque = զբոսնում ենք այգով / այգու տարածքով (-ով, միջով՝ 'por')։",
        armWithoutAnswer: "..., այլ ժամանակ զբոսնում ենք ....... այգով։",
        armWithAnswer: "..., այլ ժամանակ զբոսնում ենք այգում (այգով)։"
      },
      t5_b4: {
        id: "t5_b4",
        expected: "en",
        options: ["en", "a", "con", "de"],
        explanation: "nos quedamos en casa = մնում ենք տանը (quedarse en = մնալ ինչ-որ տեղում)։",
        armWithoutAnswer: "Եթե ցուրտ է, մենք մնում ենք ....... տանը...",
        armWithAnswer: "Եթե ցուրտ է, մենք մնում ենք տանը..."
      },
      t5_b5: {
        id: "t5_b5",
        expected: "los",
        options: ["los", "en", "a", "por"],
        explanation: "practica fútbol los lunes = ֆուտբոլ է խաղում երկուշաբթի օրերին (օրերի անուններից առաջ իսպաներենում դրվում է որոշյալ հոգնակի արտիկլը՝ 'los', առանց նախդիրի)։",
        armWithoutAnswer: "Իմ ընկեր Կառլոսը ֆուտբոլ է խաղում ....... երկուշաբթի և չորեքշաբթի օրերին։",
        armWithAnswer: "Իմ ընկեր Կառլոսը ֆուտբոլ է խաղում երկուշաբթի և չորեքշաբթի օրերին։"
      },
      t5_b6: {
        id: "t5_b6",
        expected: "al",
        options: ["al", "en", "a", "del"],
        explanation: "preferir ir al gimnasio = գերադասել գնալ մարզասրահ (ir a + el gimnasio = al gimnasio)։",
        armWithoutAnswer: "Ես նախընտրում եմ գնալ ....... մարզասրահ...",
        armWithAnswer: "Ես նախընտրում եմ գնալ մարզասրահ..."
      },
      t5_b7: {
        id: "t5_b7",
        expected: "por",
        options: ["por", "en", "para", "a"],
        explanation: "caminar por el centro = քայլել կենտրոնով / կենտրոնում (տարածքով զբոսնել/քայլել = caminar por)։",
        armWithoutAnswer: "... կամ քայլել ....... կենտրոնով։",
        armWithAnswer: "... կամ քայլել կենտրոնում (կենտրոնով)։"
      },
      t5_b8: {
        id: "t5_b8",
        expected: "de",
        options: ["de", "para", "hasta", "a"],
        explanation: "'Después de + infinitivo' = ...-ուց հետո (Después de hacer deporte = սպորտով զբաղվելուց հետո)։",
        armWithoutAnswer: "Մարզվելուց ....... հետո...",
        armWithAnswer: "Մարզվելուց հետո..."
      },
      t5_b9: {
        id: "t5_b9",
        expected: "en",
        options: ["en", "a", "por", "del"],
        explanation: "tomamos algo en un bar = ինչ-որ բան ենք խմում/ուտում բարում (en = -ում, մեջ)։",
        armWithoutAnswer: "... ինչ-որ բան ենք խմում ....... բարում։",
        armWithAnswer: "... ինչ-որ բան ենք խմում բարում։"
      },
      t5_b10: {
        id: "t5_b10",
        expected: "sobre",
        options: ["sobre", "en", "de", "con"],
        explanation: "leer libros sobre viajes = կարդալ ճանապարհորդությունների մասին գրքեր (sobre = մասին, վերաբերյալ)։",
        armWithoutAnswer: "Նաև ինձ դուր է գալիս կարդալ գրքեր ....... ճանապարհորդությունների...",
        armWithAnswer: "Նաև ինձ դուր է գալիս կարդալ ճանապարհորդությունների մասին գրքեր..."
      },
      t5_b11: {
        id: "t5_b11",
        expected: "por",
        options: ["por", "en", "a", "de"],
        explanation: "por la noche = գիշերը (օրվա ժամանակահատվածը նշելու համար օգտագործվում է 'por la noche')։",
        armWithoutAnswer: "... և լսել երաժշտություն ....... գիշերով։",
        armWithAnswer: "... և լսել երաժշտություն գիշերով (գիշերը)։"
      },
      t5_b12: {
        id: "t5_b12",
        expected: "con",
        options: ["con", "sin", "en", "bajo"],
        explanation: "No puedo estudiar con música = չեմ կարող սովորել երաժշտությամբ (երաժշտության հետ/առկայությամբ)։",
        armWithoutAnswer: "Չեմ կարող սովորել երաժշտության .......",
        armWithAnswer: "Չեմ կարող սովորել երաժշտության հետ (երաժշտությամբ)"
      },
      t5_b13: {
        id: "t5_b13",
        expected: "con",
        options: ["con", "de", "en", "por"],
        explanation: "puedo descansar con ella = կարող եմ հանգստանալ դրա հետ (երաժշտության հետ, con ella)։",
        armWithoutAnswer: "... բայց կարող եմ հանգստանալ դրա .......:",
        armWithAnswer: "... բայց կարող եմ հանգստանալ դրանով (դրա հետ)։"
      },
      t5_b14: {
        id: "t5_b14",
        expected: "para",
        options: ["para", "por", "de", "con"],
        explanation: "importante para estar tranquilo = կարևոր է հանգիստ լինելու համար (para + infinitivo ցույց է տալիս նպատակակետը/նպատակը)։",
        armWithoutAnswer: "..., ինձ համար ազատ ժամանակը կարևոր է հանգիստ և երջանիկ լինելու .......:",
        armWithAnswer: "..., ինձ համար ազատ ժամանակը կարևոր է հանգիստ և երջանիկ լինելու համար։"
      }
    }
  }
];
