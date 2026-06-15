export interface VocabItem {
  id: string;
  sp: string;      // Spanish
  arm: string;     // Armenian
  category: 'general' | 'verbs' | 'estar_tener' | 'basic' | 'time_space';
  explanation: string; // Explanation of usage
  exampleSp?: string;  // Spanish example
  exampleArm?: string; // Armenian example
}

export const VOCABULARY: VocabItem[] = [
  // --- Section: Preposiones — հայերեն → իսպաներեն ---
  {
    id: "a_en",
    sp: "a / en",
    arm: "դեպի / -ում",
    category: "general",
    explanation: "'a'-ն օգտագործվում է ուղղություն կամ շարժում ցույց տալու համար (դեպի), իսկ 'en'-ը՝ գտնվելու վայրը կամ տեղը ցույց տալու համար (մեջ, -ում)։",
    exampleSp: "Voy a Madrid. Vivo en Madrid.",
    exampleArm: "Գնում եմ Մադրիդ։ Ապրում եմ Մադրիդում։"
  },
  {
    id: "hasta_luego",
    sp: "hasta luego",
    arm: "մինչ հետո",
    category: "general",
    explanation: "Օգտագործվում է որպես հրաժեշտի խոսք, տառացի՝ 'մինչև հետո'։",
    exampleSp: "¡Hasta luego, amigos!",
    exampleArm: "Մինչ հանդիպում (մինչ հետո), ընկերներ։"
  },
  {
    id: "al_lado",
    sp: "al lado",
    arm: "կողքին",
    category: "time_space",
    explanation: "'Al lado' (կամ 'al lado de') նշանակում է ինչ-որ բանի կամ մեկի անմիջապես կողքին լինելը։",
    exampleSp: "El banco está al lado de la tienda.",
    exampleArm: "Բանկը խանութի կողքին է։"
  },
  {
    id: "con_destino_a",
    sp: "con destino a",
    arm: "դեպի նպատակակետ",
    category: "general",
    explanation: "Պաշտոնական կամ գրավոր արտահայտություն է, որը նշանակում է 'դեպի որոշակի նպատակակետ/ուղղությամբ'։",
    exampleSp: "El tren con destino a Barcelona sale ahora.",
    exampleArm: "Դեպի Բարսելոնա նպատակակետով գնացքը հիմա է մեկնում։"
  },
  {
    id: "a_la_derecha",
    sp: "a la derecha",
    arm: "աջ կողմում",
    category: "time_space",
    explanation: "Ցույց է տալիս կողմնորոշում դեպի աջ կողմը։ Հաճախ օգտագործվում է 'de'-ի հետ՝ 'a la derecha de...' (ինչ-որ բանի աջ կողմում)։",
    exampleSp: "La farmacia está a la derecha.",
    exampleArm: "Դեղատունը աջ կողմում է։"
  },
  {
    id: "a_la_izquierda",
    sp: "a la izquierda",
    arm: "ձախ կողմում",
    category: "time_space",
    explanation: "Ցույց է տալիս կողմնորոշում դեպի ձախ կողմը։ 'a la izquierda de...' նշանակում է ինչ-որ բանի ձախ կողմում։",
    exampleSp: "Gira a la izquierda.",
    exampleArm: "Թեքվիր ձախ կողմում (դեպի ձախ)։"
  },
  {
    id: "con_antelacion",
    sp: "con antelación",
    arm: "նախօրոք",
    category: "general",
    explanation: "Արտահայտում է որևէ գործողություն, որը կատարվում է ժամանակից շուտ, նախապես կամ նախօրոք։",
    exampleSp: "Es mejor reservar con antelación.",
    exampleArm: "Ավելի լավ է ամրագրել նախօրոք։"
  },
  {
    id: "dentro_de_1",
    sp: "dentro de",
    arm: "ներսում",
    category: "time_space",
    explanation: "Ֆիզիկական տիրույթի, տարածքի կամ սահմանների ներսում լինելը ցույց տվող արտահայտություն։",
    exampleSp: "Las llaves están dentro de la bolsa.",
    exampleArm: "Բանալիները պայուսակի ներսում են։"
  },
  {
    id: "al_final",
    sp: "al final",
    arm: "վերջում",
    category: "time_space",
    explanation: "Ցույց է տալիս իրադարձության, տարածության կամ ժամանակի ավարտը (վերջում)։",
    exampleSp: "Al final de la calle hay un parque.",
    exampleArm: "Փողոցի վերջում այգի կա։"
  },
  {
    id: "a_gusto",
    sp: "a gusto",
    arm: "հարմար / լավ զգալ",
    category: "general",
    explanation: "Արտահայտում է հարմարավետության կամ լավ զգալու հոգեվիճակ (հաճախ 'estar'-ի հետ)։",
    exampleSp: "Estoy muy a gusto aquí.",
    exampleArm: "Ես այստեղ ինձ շատ հարմար/լավ եմ զգում։"
  },
  {
    id: "al_mediodia",
    sp: "al mediodía",
    arm: "կեսօրին",
    category: "general",
    explanation: "Օրվա կոնկրետ ժամանակահատված՝ կեսօր, որի հետ կիրառվում է 'al' (a + el mediodía)։",
    exampleSp: "Almorzamos al mediodía.",
    exampleArm: "Մենք ճաշում ենք կեսօրին։"
  },
  {
    id: "a_pie",
    sp: "a pie",
    arm: "ոտքով",
    category: "general",
    explanation: "Տեղաշարժման ձևը նշելու համար. 'ոտքով քայլել' արտահայտվում է 'a pie'-ով։",
    exampleSp: "Voy a la escuela a pie.",
    exampleArm: "Դպրոց եմ գնում ոտքով։"
  },
  {
    id: "por_cierto",
    sp: "por cierto",
    arm: "ի դեպ",
    category: "general",
    explanation: "Խոսակցության մեջ նոր կապակցված միտք կամ թեմա ներմուծելու արտահայտություն՝ 'ի դեպ'։",
    exampleSp: "Por cierto, ¿cómo te llamas?",
    exampleArm: "Ի դեպ, ինչպե՞ս է քո անունը։"
  },
  {
    id: "hasta_ahora",
    sp: "hasta ahora",
    arm: "մինչ հիմա / հենց հիմա",
    category: "general",
    explanation: "Օգտագործվում է և՛ որպես ժամանակային սահմանափակում (մինչև հիմա), և՛ որպես շուտով հանդիպելու հրաժեշտ (հենց հիմա/մինչև մոտ ժամանակներս)։",
    exampleSp: "No he tenido problemas hasta ahora.",
    exampleArm: "Մինչ հիմա ես խնդիրներ չեմ ունեցել։"
  },
  {
    id: "a_traves_de",
    sp: "a través de",
    arm: "միջոցով / միջով",
    category: "time_space",
    explanation: "Ցույց է տալիս տարածության միջով անցնելը կամ որևէ գործիքի/միջոցի օգնությամբ արդյունքի հասնելը։",
    exampleSp: "Miró a través de la ventana. Aprendo a través de juegos.",
    exampleArm: "Նա նայեց պատուհանի միջով։ Ես սովորում եմ խաղերի միջոցով։"
  },
  {
    id: "en_absoluto",
    sp: "en absoluto",
    arm: "ընդհանրապես ոչ",
    category: "general",
    explanation: "Կտրուկ և ուժեղացված ժխտում՝ 'ամենևին ոչ', 'ընդհանրապես ոչ'։",
    exampleSp: "¿Te molesta? - En absoluto.",
    exampleArm: "Քեզ խանգարո՞ւմ է։ - Ընդհանրապես ոչ։"
  },
  {
    id: "en_caso_de_que",
    sp: "en caso de que",
    arm: "եթե / այն դեպքում, երբ",
    category: "general",
    explanation: "Պայմանական արտահայտություն է (սովորաբար պահանջում է Subjuntivo եղանակը)։",
    exampleSp: "Lámame en caso de que necesites ayuda.",
    exampleArm: "Զանգիր ինձ այն դեպքում, երբ (եթե) օգնության կարիք ունենաս։"
  },
  {
    id: "al_principio",
    sp: "al principio",
    arm: "սկզբում",
    category: "time_space",
    explanation: "Ցույց է տալիս որևէ գործընթացի կամ ժամանակի սկզբնական փուլը։",
    exampleSp: "Al principio todo era difícil.",
    exampleArm: "Սկզբում ամեն ինչ դժվար էր։"
  },
  {
    id: "en_vez_de",
    sp: "en vez de",
    arm: "փոխարենը",
    category: "general",
    explanation: "Մեկ այլընտրանքը մյուսով փոխարինելը՝ 'փոխարենը'։",
    exampleSp: "Toma té en vez de café.",
    exampleArm: "Թեյ խմիր սուրճի փոխարեն։"
  },
  {
    id: "como_maximo",
    sp: "como máximo",
    arm: "առավելագույնը",
    category: "general",
    explanation: "Սահմանում է վերին թույլատրելի կամ հնարավոր սահմանը՝ 'առավելագույնը'։",
    exampleSp: "Tardaré diez minutos como máximo.",
    exampleArm: "Ես կուշանամ տասը րոպե առավելագույնը։"
  },
  {
    id: "como_minimo",
    sp: "como mínimo",
    arm: "նվազագույնը",
    category: "general",
    explanation: "Սահմանում է ստորին անհրաժեշտ սահմանը՝ 'նվազագույնը'։",
    exampleSp: "Tienes que estudiar dos hours como mínimo.",
    exampleArm: "Դու պետք է սովորես երկու ժամ նվազագույնը։"
  },
  {
    id: "a_la_hora_de",
    sp: "a la hora de",
    arm: "ժամանակ / պահին",
    category: "general",
    explanation: "Կոնկրետ գործունեություն կատարելու պահը կամ ժամանակն արտահայտող կառույց։",
    exampleSp: "A la hora de comer, no hablamos de trabajo.",
    exampleArm: "Ուտելու ժամանակ (պահին) մենք աշխատանքից չենք խոսում։"
  },
  {
    id: "encima_de",
    sp: "encima de",
    arm: "վերևում / վրա",
    category: "time_space",
    explanation: "Ինչ-որ մակերեսի վրա կամ վերևում գտնվելը ցույց տվող տարածական նախդիր։",
    exampleSp: "El libro está encima de la mesa.",
    exampleArm: "Գիրքը սեղանի վրա է (վերևում է)։"
  },
  {
    id: "alrededor_de",
    sp: "alrededor de",
    arm: "շուրջը",
    category: "time_space",
    explanation: "Շրջանաձև դիրք կամ մոտավոր արժեք ցույց տվող նախդիր՝ 'շուրջը', 'մոտավորապես'։",
    exampleSp: "Nos sentamos alrededor de la mesa.",
    exampleArm: "Մենք նստեցինք սեղանի շուրջը։"
  },
  {
    id: "antes_de",
    sp: "antes de",
    arm: "առաջ",
    category: "time_space",
    explanation: "Ժամանակային կամ հաջորդական նախորդություն արտահայտող նախդիր՝ 'առաջ/նախքան'։",
    exampleSp: "Lávate las manos antes de comer.",
    exampleArm: "Լվա ձեռքերդ ուտելուց առաջ։"
  },
  {
    id: "con",
    sp: "con",
    arm: "հետ",
    category: "basic",
    explanation: "Ուղեկցության, միասնության կամ օգտագործվող գործիքի պատկանելություն (հետ, միջոցով)։",
    exampleSp: "Hablo con mi madre. Escribo con un bolígrafo.",
    exampleArm: "Խոսում եմ մորս հետ։ Գրում եմ գրիչով (գրիչի միջոցով)։"
  },
  {
    id: "conmigo_contigo",
    sp: "conmigo / contigo",
    arm: "ինձ հետ / քեզ հետ",
    category: "basic",
    explanation: "'Con + mí' դառնում է 'conmigo' (ինձ հետ), իսկ 'con + ti' դառնում է 'contigo' (քեզ հետ)։",
    exampleSp: "¿Quieres venir conmigo o quedarte contigo?",
    exampleArm: "Ուզո՞ւմ ես գալ ինձ հետ, թե՞ մնալ քեզ հետ։"
  },
  {
    id: "despues_de",
    sp: "después de",
    arm: "հետո",
    category: "time_space",
    explanation: "Ժամանակային կամ հերթական հաջորդականություն՝ 'հետո'։",
    exampleSp: "Después de estudiar, voy a descansar.",
    exampleArm: "Սովորելուց հետո ես գնում եմ հանգստանալու։"
  },
  {
    id: "en_2",
    sp: "en",
    arm: "մեջ / -ում",
    category: "basic",
    explanation: "Տեղանունների, տարածքների կամ ժամանակի մեջ գտնվելը ցույց տվող հիմնական նախդիր։",
    exampleSp: "Estoy en la oficina.",
    exampleArm: "Ես գրասենյակում եմ (մեջ)։"
  },
  {
    id: "dentro_de_2",
    sp: "dentro de",
    arm: "որոշ ժամանակից հետո",
    category: "time_space",
    explanation: "Ժամանակային իմաստով 'dentro de'-ն ցույց է տալիս, թե երբ է կատարվելու գործողությունը սկսած ներկա պահից (որոշ ժամանակից հետո)։",
    exampleSp: "El train llega dentro de diez minutos.",
    exampleArm: "Գնացքը կժամանի տասը րոպեից (տասը րոպե հետո)։"
  },
  {
    id: "en_esta_zona",
    sp: "en esta zona",
    arm: "այս շրջանում / այս կողմերում",
    category: "general",
    explanation: "Տեղային որոշակի սահմանափակ տարածք մատնանշող արտահայտություն։",
    exampleSp: "Hay buenos restaurantes en esta zona.",
    exampleArm: "Այս շրջանում (այս կողմերում) լավ ռեստորաններ կան։"
  },
  {
    id: "de_1",
    sp: "de",
    arm: "-ից / պատկանելություն",
    category: "basic",
    explanation: "Ցույց է տալիս ծագում, պատկանելություն, նյութ կամ թեմա (-ից, պատկանելություն)։",
    exampleSp: "El coche de Juan. Soy de Armenia.",
    exampleArm: "Խուանի մեքենան (Խուանին պատկանող)։ Ես Հայաստանից եմ։"
  },
  {
    id: "de_vez_en_cuando",
    sp: "de vez en cuando",
    arm: "ժամանակ առ ժամանակ",
    category: "general",
    explanation: "Պարբերաբար, բայց ոչ շատ հաճախ կատարվող գործողություն՝ 'երբեմն-երբեմն', 'ժամանակ առ ժամանակ'։",
    exampleSp: "Estudio español de vez en cuando.",
    exampleArm: "Ժամանակ առ ժամանակ իսպաներեն եմ սովորում։"
  },
  {
    id: "de_todos_modos",
    sp: "de todos modos",
    arm: "ամեն դեպքում",
    category: "general",
    explanation: "Անկախ հանգամանքներից՝ 'ամեն դեպքում', 'ինչևիցե'։",
    exampleSp: "Gracias de todos modos.",
    exampleArm: "Շնորհակալություն ամեն դեպքում։"
  },
  {
    id: "a_principios_de",
    sp: "a principios de",
    arm: "ամսվա սկզբին",
    category: "time_space",
    explanation: "Ժամանակային որոշակի փուլի սկիզբը նշելու համար (ամսվա, տարվա, դարի սկզբին)։",
    exampleSp: "Viajamos a principios de junio.",
    exampleArm: "Մենք ճանապարհորդում ենք հունիսի սկզբին։"
  },
  {
    id: "desde_1",
    sp: "desde",
    arm: "սկսած / ի վեր",
    category: "basic",
    explanation: "Գործողության տարածական կամ ժամանակային սկզբնակետը (սկսած, -ից)։",
    exampleSp: "Camino desde el parque. Trabajo desde las ocho.",
    exampleArm: "Քայլում եմ այգուց սկսած։ Աշխատում եմ ժամը ութից։"
  },
  {
    id: "desde_hace",
    sp: "desde hace",
    arm: "արդեն ինչքան ժամանակ է",
    category: "general",
    explanation: "Ցույց է տալիս անցյալում սկսված և մինչև հիմա շարունակվող գործողության տևողությունը։",
    exampleSp: "Estudio español desde hace dos años.",
    exampleArm: "Արդեն երկու տարի է (ինչքան ժամանակ է), ինչ իսպաներեն եմ սովորում։"
  },
  {
    id: "detras_de",
    sp: "detrás de",
    arm: "հետևում",
    category: "time_space",
    explanation: "Տարածական նախդիր, որը ցույց է տալիս ինչ-որ բանի հետևում գտնվելը։",
    exampleSp: "El perro está detrás de la puerta.",
    exampleArm: "Շունը դռան հետևում է։"
  },
  {
    id: "cuanto_antes",
    sp: "cuanto antes",
    arm: "որքան հնարավոր է շուտ",
    category: "general",
    explanation: "Հրատապություն արտահայտող դարձվածք՝ 'որքան հնարավոր է շուտ'։",
    exampleSp: "Tengo que irme cuanto antes.",
    exampleArm: "Ես պետք է գնամ որքան հնարավոր է շուտ։"
  },
  {
    id: "delante_de",
    sp: "delante de",
    arm: "առջևում",
    category: "time_space",
    explanation: "Տարածական դիրք, որը ցույց է տալիս ինչ-որ բանի դիմաց/առջևում լինելը։",
    exampleSp: "La parada está delante de la tienda.",
    exampleArm: "Կանգառը խանութի առջևում է։"
  },
  {
    id: "en_a_casa_de",
    sp: "en / a casa de",
    arm: "տանը / մեկի տանը",
    category: "general",
    explanation: "'en casa de...' նշանակում է ինչ-որ մեկի տանը (գտնվել), իսկ 'a casa de...'՝ դեպի ինչ-որ մեկի տուն (գնալ)։",
    exampleSp: "Estoy en casa de María. Voy a casa de Carlos.",
    exampleArm: "Ես Մարիայի տանն եմ։ Գնում եմ Կառլոսի տուն (մեկի տանը)։"
  },
  {
    id: "de_postre",
    sp: "de postre",
    arm: "որպես աղանդեր",
    category: "general",
    explanation: "Սննդի ընդունման ժամանակ աղանդերի դերը նշելու համար օգտագործվում է 'de' նախդիրը։",
    exampleSp: "Quiero fruta de postre.",
    exampleArm: "Որպես աղանդեր ես մրգեր եմ ուզում։"
  },
  {
    id: "contar_con",
    sp: "contar con",
    arm: "հույս դնել / հաշվել մեկի վրա",
    category: "verbs",
    explanation: "'Contar con' նշանակում է ունենալ ինչ-որ բան կամ հույսը դնել ինչ-որ մեկի վրա (տառացի՝ հաշվել մեկի հետ)։",
    exampleSp: "Puedes contar conmigo.",
    exampleArm: "Դու կարող ես հույսդ դնել ինձ վրա (իմ վրա հաշվել)։"
  },
  {
    id: "seguir_todo_recto",
    sp: "seguir todo recto",
    arm: "շարունակել ուղիղ",
    category: "general",
    explanation: "Ճանապարհ ցույց տալու կայուն արտահայտություն՝ 'շարունակել քայլել/գնալ ամբողջությամբ ուղիղ'։",
    exampleSp: "Sigue todo recto hasta el semáforo.",
    exampleArm: "Շարունակիր ուղիղ գնալ մինչև լուսակիրը։"
  },
  {
    id: "seguir_gerundio",
    sp: "seguir + gerundio",
    arm: "շարունակել անել",
    category: "verbs",
    explanation: "Քերականական կառույց, որը ցույց է տալիս գործողության շարունակականությունը (seguir + -ando/-iendo)։",
    exampleSp: "Sigue estudiando español.",
    exampleArm: "Նա շարունակում է իսպաներեն սովորել (շարունակել անել)։"
  },
  {
    id: "primero",
    sp: "primero",
    arm: "նախ",
    category: "general",
    explanation: "Հաջորդականություն սկսելուց առաջ օգտագործվող բառ՝ 'նախ', 'առաջին հերթին'։",
    exampleSp: "Primero tomamos café, luego caminamos.",
    exampleArm: "Նախ սուրճ ենք խմում, հետո զբոսնում։"
  },
  {
    id: "de_acuerdo",
    sp: "de acuerdo",
    arm: "համաձայն / լավ",
    category: "general",
    explanation: "Համաձայնություն արտահայտող կայուն կապակցություն՝ 'լավ, համաձայն եմ'։",
    exampleSp: "Estoy de acuerdo contigo.",
    exampleArm: "Ես համաձայն եմ քեզ հետ։"
  },
  {
    id: "debajo_de",
    sp: "debajo de",
    arm: "տակ / ներքևում",
    category: "time_space",
    explanation: "Տարածական նախդիր, որը նշանակում է ինչ-որ բանի անմիջապես տակ կամ ցածր դիրքում լինելը։",
    exampleSp: "El gato está debajo de la mesa.",
    exampleArm: "Կատուն սեղանի տակ է (ներքևում է)։"
  },
  {
    id: "enfrente_de",
    sp: "enfrente de",
    arm: "դիմացը",
    category: "time_space",
    explanation: "Տարածական նախդիր՝ դիմահայաց դիրք ցույց տալու համար։",
    exampleSp: "La escuela está enfrente del museo.",
    exampleArm: "Դպրոցը թանգարանի դիմացն է։"
  },
  {
    id: "arriba",
    sp: "arriba",
    arm: "վերևում",
    category: "time_space",
    explanation: "Տեղանուն մակբայ, որը ցույց է տալիս վերին դիրք (առանց ուղիղ խնդրի)։",
    exampleSp: "Mi habitación está arriba.",
    exampleArm: "Իմ սենյակը վերևում է։"
  },
  {
    id: "abajo",
    sp: "abajo",
    arm: "ներքևում",
    category: "time_space",
    explanation: "Տեղանուն մակբայ, որը ցույց է տալիս ստորին դիրք (առանց ուղիղ խնդրի)։",
    exampleSp: "El garaje está abajo.",
    exampleArm: "Ավտոտնակը ներքևում է։"
  },
  {
    id: "de_piel",
    sp: "de piel",
    arm: "կաշվե",
    category: "general",
    explanation: "Նյութ ցույց տվող 'de' նախդիրով կառույց (կաշվից պատրաստված)։",
    exampleSp: "Compré una chaqueta de piel.",
    exampleArm: "Ես կաշվե բաճկոն գնեցի։"
  },
  {
    id: "de_primero",
    sp: "de primero",
    arm: "որպես առաջին ուտեստ",
    category: "general",
    explanation: "Ճաշացանկում առաջին ուտեստի դերը արտահայտող կապակցություն։",
    exampleSp: "De primero quiero sopa de tomate.",
    exampleArm: "Որպես առաջին ուտեստ ցանկանում եմ լոլիկով ապուր։"
  },
  {
    id: "de_segundo",
    sp: "de segundo",
    arm: "որպես հիմնական ուտեստ",
    category: "general",
    explanation: "Ճաշացանկում երկրորդ/հիմնական ուտեստի դերը արտահայտող կապակցություն։",
    exampleSp: "De segundo quiero pescado con verduras.",
    exampleArm: "Որպես հիմնական (երկրորդ) ուտեստ ցանկանում եմ ձուկ բանջարեղենով։"
  },
  {
    id: "en_pleno_invierno",
    sp: "en pleno invierno",
    arm: "ձմռան կեսին",
    category: "general",
    explanation: "Ժամանակային ուժեղացված արտահայտություն՝ հենց ձմռան ամենաթեժ պահին (ձմռան կեսին)։",
    exampleSp: "Hace mucho frío en pleno invierno.",
    exampleArm: "Ձմռան կեսին շատ ցուրտ է լինում։"
  },
  {
    id: "ademas",
    sp: "además",
    arm: "բացի այդ",
    category: "general",
    explanation: "Լրացուցիչ տեղեկություն կամ միտք ավելացնելու համար՝ 'բացի այդ', 'նաև'։",
    exampleSp: "Es inteligente, además es muy amable.",
    exampleArm: "Նա խելացի է, բացի այդ շատ բարյացակամ է։"
  },
  {
    id: "en_realidad",
    sp: "en realidad",
    arm: "իրականում",
    category: "general",
    explanation: "Փաստացի իրավիճակը մատնանշելու դարձվածք՝ 'իրականում, իրոք'։",
    exampleSp: "En realidad, no sé la respuesta.",
    exampleArm: "Իրականում ես չգիտեմ պատասխանը։"
  },
  {
    id: "todavia",
    sp: "todavía",
    arm: "դեռ",
    category: "general",
    explanation: "Ժամանակային մակբայ, որը ցույց է տալիս գործողության դեռևս շարունակվելը կամ չավարտվելը։",
    exampleSp: "Todavía está lloviendo. Todavía no he comido.",
    exampleArm: "Դեռ անձրև է գալիս։ Ես դեռ չեմ կերել։"
  },
  {
    id: "por_fin",
    sp: "por fin",
    arm: "վերջապես",
    category: "general",
    explanation: "Երկար սպասված իրադարձության իրականացումն ընդգծող դարձվածք՝ 'վերջապես, ի վերջո'։",
    exampleSp: "¡Por fin ha llegado el verano!",
    exampleArm: "Վերջապես եկավ ամառը։"
  },
  {
    id: "juntos_juntas",
    sp: "juntos / juntas",
    arm: "միասին",
    category: "general",
    explanation: "Համատեղ գործողություն կամ վիճակ (համաձայնեցվում է սեռով և թվով՝ մակբայական բնույթի ածական)։",
    exampleSp: "Siempre estudiamos juntos.",
    exampleArm: "Մենք միշտ միասին ենք սովորում։"
  },
  {
    id: "entre_1",
    sp: "entre",
    arm: "միջև",
    category: "basic",
    explanation: "Տարածական կամ հարաբերական միջանկյալ դիրք երկու կամ ավելի տարրերի միջև։",
    exampleSp: "La tienda está entre el banco y el cine.",
    exampleArm: "Խնդութը բանկի և կինոթատրոնի միջև է։"
  },
  {
    id: "entrar_en",
    sp: "entrar en",
    arm: "մեջ մտնել",
    category: "verbs",
    explanation: "'Entrar' բայը իսպաներենում միշտ պահանջում է 'en' նախդիրը, երբ մտնում ենք ինչ-որ տարածք։",
    exampleSp: "Samuel entra en la oficina.",
    exampleArm: "Սամուելը մտնում է գրասենյակ (մեջ մտնել)։"
  },
  {
    id: "ser_de",
    sp: "ser de",
    arm: "պատկանել / լինել ծագումով",
    category: "estar_tener",
    explanation: "'Ser de' նշանակում է լինել որևէ տեղից (ծագումով) կամ պատկանել որևէ մեկին։",
    exampleSp: "El libro es de Juan. Soy de Armenia.",
    exampleArm: "Գիրքը պատկանում է Խուանին։ Ես ծագումով Հայաստանից եմ։"
  },
  {
    id: "estar_enamorado_de",
    sp: "estar enamorado de",
    arm: "սիրահարված լինել",
    category: "estar_tener",
    explanation: "Ինչ-որ մեկին սիրահարված լինելու հոգեվիճակը կիրառվում է 'de' նախդիրով։",
    exampleSp: "Está enamorado de su compañera.",
    exampleArm: "Նա սիրահարված է իր կուրսընկերուհուն։"
  },
  {
    id: "estar_en_paro",
    sp: "estar en paro",
    arm: "գործազուրկ լինել",
    category: "estar_tener",
    explanation: "Անգործության կամ գործազրկության կարգավիճակում գտնվելը ('paro' նշանակում է դադար/գործադուլ)։",
    exampleSp: "Muchos jóvenes están en paro.",
    exampleArm: "Շատ երիտասարդներ գործազուրկ են։"
  },
  {
    id: "estar_de_buen_humor",
    sp: "estar de buen humor",
    arm: "լավ տրամադրություն ունենալ",
    category: "estar_tener",
    explanation: "'de' նախդիրով կիրառվող դարձվածք տրամադրության համար (տրամադրությունից լինել)։",
    exampleSp: "Hoy estoy de buen humor.",
    exampleArm: "Այսօր ես լավ տրամադրություն ունեմ (լավ տրամադրության եմ)։"
  },
  {
    id: "estar_de_mal_humor",
    sp: "estar de mal humor",
    arm: "վատ տրամադրություն ունենալ",
    category: "estar_tener",
    explanation: "Վատ տրամադրության մեջ գտնվելու վիճակը արտահայտվում է 'estar de mal humor'։",
    exampleSp: "No le hables, está de mal humor.",
    exampleArm: "Մի խոսիր նրա հետ, նա վատ տրամադրություն ունի։"
  },
  {
    id: "estar_de_paso",
    sp: "estar de paso",
    arm: "ճանապարհին / անցողիկ լինել",
    category: "estar_tener",
    explanation: "Կարճ ժամանակով որևէ տեղում գտնվելու վիճակ (անցողիկ լինել, ժամանակավորապես այցելել)։",
    exampleSp: "No vivo aquí, solo estoy de paso.",
    exampleArm: "Ես այստեղ չեմ ապրում, պարզապես ճանապարհին եմ (անցողիկ եմ)։"
  },
  {
    id: "estar_de_erasmus",
    sp: "estar de Erasmus",
    arm: "Էրասմուսով լինել",
    category: "estar_tener",
    explanation: "Էրասմուս ուսանողական փոխանակման ծրագրով այլ երկրում գտնվելը։",
    exampleSp: "Mi primo está de Erasmus en Italia.",
    exampleArm: "Իմ զարմիկը Էրասմուսով Իտալիայում է։"
  },
  {
    id: "estar_de_compras",
    sp: "estar de compras",
    arm: "գնումներ անելիս լինել",
    category: "estar_tener",
    explanation: "Շոփինգի/գնումների գնացած լինելու վիճակը՝ 'estar de compras'։",
    exampleSp: "Ana está de compras en el centro.",
    exampleArm: "Անան կենտրոնում գնումներ անելիս է։"
  },
  {
    id: "estar_acostumbrado_a",
    sp: "estar acostumbrado a",
    arm: "սովոր լինել",
    category: "estar_tener",
    explanation: "Որևէ պայմանի կամ սովորության հարմարված լինելը պահանջում է 'a' նախդիրը։",
    exampleSp: "Estoy acostumbrado a levantarme temprano.",
    exampleArm: "Ես սովոր եմ շուտ արթնանալուն։"
  },
  {
    id: "estar_listo_para",
    sp: "estar listo para",
    arm: "պատրաստ լինել",
    category: "estar_tener",
    explanation: "Որևէ գործողություն կամ իրադարձություն սկսելու համար լիովին պատրաստ լինելը ('para'-ով)։",
    exampleSp: "¿Estás listo para el viaje?",
    exampleArm: "Պատրա՞ստ ես ճանապարհորդությանը։"
  },
  {
    id: "tener_cuidado_con",
    sp: "tener cuidado con",
    arm: "զգույշ լինել",
    category: "estar_tener",
    explanation: "'Tener cuidado' (զգուշություն ունենալ/զգույշ լինել) արտահայտությունը պահանջում է 'con' (ինչ-որ բանի հետ/նկատմամբ)։",
    exampleSp: "¡Ten cuidado con el perro!",
    exampleArm: "Զգույշ եղիր շնից (շան հետ)։"
  },
  {
    id: "hacer_daño",
    sp: "hacer daño",
    arm: "ցավ պատճառել",
    category: "verbs",
    explanation: "Ցավոտ կամ վնասակար լինելը՝ 'ցավ պատճառել' (առանց նախդիրի, բայց հաճախ կիրառվում է տրական հոլովում 'a'-ի հետ)։",
    exampleSp: "El picante me hace daño.",
    exampleArm: "Կծուն ինձ ցավ է պատճառում (վնասում է)։"
  },
  {
    id: "dar_una_vuelta_por",
    sp: "dar una vuelta por",
    arm: "զբոսնել / պտտվել",
    category: "verbs",
    explanation: "'Dar una vuelta por' նշանակում է պտույտ կատարել, զբոսնել որոշակի տարածքում ('por'-ով)։",
    exampleSp: "Vamos a dar una vuelta por el parque.",
    exampleArm: "Արի գնանք զբոսնելու (պտտվելու) այգում։"
  },
  {
    id: "a_finales_de",
    sp: "a finales de",
    arm: "ամսվա վերջում",
    category: "time_space",
    explanation: "Ժամանակային որոշակի փուլի ավարտը նշելու համար (ամսվա, տարվա, դարի վերջում)։",
    exampleSp: "Volvemos a finales de mes.",
    exampleArm: "Մենք վերադառնում ենք ամսվա վերջում։"
  },
  {
    id: "a_casa_de",
    sp: "a casa de",
    arm: "մեկի տանը",
    category: "general",
    explanation: "Ինչ-որ մեկի տուն ուղղություն վերցնելիս օգտագործվում է 'a casa de...' (դեպի մեկի տուն)։",
    exampleSp: "Vamos a casa de Daniel.",
    exampleArm: "Մենք գնում ենք Դանիելի տուն (դեպի նրա տունը)։"
  },
  {
    id: "no_tener_ni_idea_de",
    sp: "no tener ni idea de",
    arm: "գաղափար չունենալ ինչ-որ բանից",
    category: "estar_tener",
    explanation: "Բացարձակ անտեղյակություն արտահայտող դարձվածք, որը պահանջում է 'de' նախդիրը։",
    exampleSp: "No tengo ni idea de lo que pasó.",
    exampleArm: "Ես բացարձակ գաղափար չունեմ, թե ինչ պատահեց։"
  },
  {
    id: "hasta_que",
    sp: "hasta que",
    arm: "մինչև որ",
    category: "general",
    explanation: "Շաղկապական կառույց ժամանակային սահման նշելու համար, որից հետո գալիս է նախադասություն (մինչև որ...)։",
    exampleSp: "No me voy hasta que termines.",
    exampleArm: "Ես չեմ գնա, մինչև որ դու չավարտես։"
  },
  {
    id: "hasta",
    sp: "hasta",
    arm: "մինչև",
    category: "basic",
    explanation: "Ժամանակային կամ տեղական վերջնագիծը ցույց տվող հիմնական նախդիր (մինչև)։",
    exampleSp: "Camino hasta la esquina. Abre hasta las ocho.",
    exampleArm: "Քայլում եմ մինչև անկյունը։ Այն բաց է մինչև ժամը ութը։"
  },
  {
    id: "ahi",
    sp: "ahí",
    arm: "այնտեղ / ահա այնտեղ",
    category: "time_space",
    explanation: "Տեղանուն մակբայ, որը նշում է խոսակցին համեմատաբար մոտ գտնվող վայրը (այնտեղ, ահա այնտեղ)։",
    exampleSp: "Pon el libro ahí.",
    exampleArm: "Գիրքը դիր այնտեղ (ահա այնտեղ)։"
  },
  {
    id: "alli_alla",
    sp: "allí / allá",
    arm: "այնտեղ / այն կողմ",
    category: "time_space",
    explanation: "Տեղանուն մակբայներ խոսակիցներից շատ հեռու վայր նշելու համար (allí - այնտեղ, allá - այն կողմ, դեպի այնտեղ)։",
    exampleSp: "Mi casa está allí. Vamos más allá.",
    exampleArm: "Իմ տունը այնտեղ է։ Արի գնանք ավելի այն կողմ։"
  },
  {
    id: "pensar_en",
    sp: "pensar en",
    arm: "մտածել մի բանի մասին",
    category: "verbs",
    explanation: "'Pensar' բայը պահանջում է 'en' նախդիրը, երբ արտահայտում է մտքերի կենտրոնացում ինչ-որ թեմայի կամ անձի վրա։",
    exampleSp: "Siempre pienso en ti.",
    exampleArm: "Ես միշտ մտածում եմ քո մասին։"
  },
  {
    id: "sonar_con",
    sp: "soñar con",
    arm: "երազել ինչ-որ բանի մասին",
    category: "verbs",
    explanation: "'Soñar' (երազել / երազ տեսնել) բայը իսպաներենում կառավարվում է 'con' նախդիրով (երազել ինչ-որ բանի հետ)։",
    exampleSp: "Sueño con viajar por el mundo.",
    exampleArm: "Ես երազում եմ աշխարհով մեկ ճանապարհորդելու մասին։"
  },
  {
    id: "dirigirse_a",
    sp: "dirigirse a",
    arm: "դիմել մեկին",
    category: "verbs",
    explanation: "'Dirigirse' բայը նշանակում է դիմել որևէ մեկին կամ ուղղություն վերցնել դեպի ինչ-որ տեղ ('a'-ով)։",
    exampleSp: "Tienes que dirigirte a la recepción.",
    exampleArm: "Դու պետք է դիմես ընդունարան (տնօրինությանը)։"
  },
  {
    id: "acercarse_a",
    sp: "acercarse a",
    arm: "մոտենալ",
    category: "verbs",
    explanation: "Ինչ-որ բանին կամ մեկին տարածության մեջ մոտենալը պահանջում է 'a' նախդիրը։",
    exampleSp: "El niño se acerca al perro.",
    exampleArm: "Երեխան մոտենում է շանը։"
  },
  {
    id: "acostumbrarse_a",
    sp: "acostumbrarse a",
    arm: "վարժվել / սովորել",
    category: "verbs",
    explanation: "Որևէ պայմանի կամ կարգի ընտելանալու/վարժվելու գործընթացը կառավարվում է 'a'-ով։",
    exampleSp: "Me acostumbré a este clima.",
    exampleArm: "Ես սովորեցի (վարժվեցի) այս կլիմային։"
  },
  {
    id: "dedicarse_a",
    sp: "dedicarse a",
    arm: "նվիրվել / զբաղվել",
    category: "verbs",
    explanation: "Մասնագիտական կամ ամենօրյա զբաղմունքը նշելու բայ կառավարվող 'a' նախդիրով։",
    exampleSp: "Él se dedica a la enseñanza.",
    exampleArm: "Նա զբաղվում է (իրեն նվիրում է) ուսուցչությամբ։"
  },
  {
    id: "disfrazarse_de",
    sp: "disfrazarse de",
    arm: "զգեստավորվել որպես",
    category: "verbs",
    explanation: "Դիմակահանդեսային կամ կերպարային հանդերձանք կրելը արտահայտվում է 'disfrazarse de...' կառույցով։",
    exampleSp: "Se disfrazó de pirata para la fiesta.",
    exampleArm: "Նա երեկույթի համար զգեստավորվեց որպես ծովահեն։"
  },
  {
    id: "enfadarse_con",
    sp: "enfadarse con",
    arm: "բարկանալ մեկի վրա",
    category: "verbs",
    explanation: "Մեկի վրա զայրույթ կամ բարկություն արտահայտելու համար օգտագործվում է 'con' նախդիրը (բարկանալ մեկի հետ)։",
    exampleSp: "No te enfades conmigo.",
    exampleArm: "Մի բարկացիր ինձ վրա։"
  },
  {
    id: "no_fiarse_de",
    sp: "no fiarse de",
    arm: "չվստահել",
    category: "verbs",
    explanation: "'Fiarse' (վստահել) բայական ձևը պահանջում է 'de' նախդիրը, հատկապես ժխտական իմաստով (չվստահել մեկին/բանին)։",
    exampleSp: "No te fíes de las apariencias.",
    exampleArm: "Մի վստահիր արտաքինին։"
  },
  {
    id: "relacionarse_con",
    sp: "relacionarse con",
    arm: "կապ ունենալ / հարաբերություն ունենալ",
    category: "verbs",
    explanation: "Մարդկանց կամ երևույթների հետ շփում կամ փոխհարաբերություն ունենալը կառավարվում է 'con' նախդիրով։",
    exampleSp: "Se relaciona bien con sus vecinos.",
    exampleArm: "Նա լավ հարաբերություններ ունի (շփվում է) իր հարևանների հետ։"
  },
  {
    id: "acordarse_de",
    sp: "acordarse de",
    arm: "հիշել",
    category: "verbs",
    explanation: "'Acordarse' (մտաբերել, հիշել) անդրադարձ բայը իսպաներենում միշտ պահանջում է 'de' նախդիրը։",
    exampleSp: "¿Te acuerdas de nuestra infancia?",
    exampleArm: "Հիշո՞ւմ ես մեր մանկությունը։"
  },
  {
    id: "servir_para",
    sp: "servir para",
    arm: "ծառայել ինչ-որ բանի համար",
    category: "verbs",
    explanation: "Որևէ գործիքի կամ առարկայի ֆունկցիան/նպատակը նշելու համար օգտագործվում է 'servir para'։",
    exampleSp: "Este botón sirve para encender la luz.",
    exampleArm: "Այս կոճակը ծառայում է լույսը միացնելու համար։"
  },
  {
    id: "en_3",
    sp: "en",
    arm: "վրա / մեջ / -ում",
    category: "basic",
    explanation: "Բազմիմաստ նախդիր, որը կարող է նշանակել պարզ տեղորոշում տարածության ներսում կամ տրանսպորտում։",
    exampleSp: "El gato duerme en el sofá.",
    exampleArm: "Կատուն քնում է բազմոցի վրա (բազմոցին)։"
  },
  {
    id: "sobre_2",
    sp: "sobre",
    arm: "մասին / վերաբերյալ",
    category: "basic",
    explanation: "Բացի 'վրա' նշանակելուց, 'sobre'-ն նշանակում է նաև որևէ թեմայի շուրջ/մասին խոսելը։",
    exampleSp: "Leemos un libro sobre viajes.",
    exampleArm: "Մենք գնում ենք ճանապարհորդությունների մասին գիրք կարդալու։"
  },
  {
    id: "sobre_todo",
    sp: "sobre todo",
    arm: "հատկապես",
    category: "general",
    explanation: "Կարևոր կետ առանձնացնելու դարձվածք՝ 'առավել ևս', 'հատկապես' (գրվում է առանձին)։",
    exampleSp: "Me gusta la música, sobre todo el jazz.",
    exampleArm: "Ես սիրում եմ երաժշտություն, հատկապես ջազ։"
  },
  {
    id: "tardar_en",
    sp: "tardar en",
    arm: "ուշանալ / ժամանակ պահանջել",
    category: "verbs",
    explanation: "'Tardar' բայը, որը նշանակում է որոշակի ժամանակ պահանջել ինչ-որ գործողություն անելու համար, պահանջում է 'en'։",
    exampleSp: "Él tardó mucho en llegar.",
    exampleArm: "Նա շատ ուշացավ (երկար ժամանակ պահանջվեց նրան) ժամանել մեզ մոտ։"
  },
  {
    id: "por_telefono",
    sp: "por teléfono",
    arm: "հեռախոսով",
    category: "general",
    explanation: "Հաղորդակցության միջոցը նշելու համար օգտագործվում է 'por' նախդիրը (por teléfono, por correo)։",
    exampleSp: "Hablamos por teléfono ayer.",
    exampleArm: "Երեկ խոսեցինք հեռախոսով։"
  },
  {
    id: "hacia_2",
    sp: "hacia",
    arm: "դեպի / մոտավորապես",
    category: "basic",
    explanation: "Ցույց է տալիս շարժման մոտավոր ուղղությունը (դեպի) կամ մոտավոր ժամանակային նշում։",
    exampleSp: "Caminamos hacia su casa. Llegaré hacia las diez.",
    exampleArm: "Մենք քայլում ենք դեպի նրա տունը։ Կժամանեմ մոտավորապես ժամը տասին։"
  },
  {
    id: "para_mi_ti",
    sp: "para mí / para ti",
    arm: "քո կարծիքով / ինձ համար",
    category: "basic",
    explanation: "Անձնական կարծիք կամ շահառու նշելու համար՝ 'para mí' (ինձ համար / իմ կարծիքով), 'para ti' (քեզ համար / քո կարծիքով)։",
    exampleSp: "Para mí, este tema es muy importante.",
    exampleArm: "Ինձ համար (իմ կարծիքով) այս թեման շատ կարևոր է։"
  },
  {
    id: "por_2",
    sp: "por",
    arm: "պատճառով / համար",
    category: "basic",
    explanation: "Բազմիմաստ նախդիր, որն արտահայտում է պատճառ, միջոց, մոտավոր ժամանակ/տարածք, փոխարենը։",
    exampleSp: "Gracias por la ayuda. Paseamos por la ciudad.",
    exampleArm: "Շնորհակալություն օգնության համար (պատճառով)։ Զբոսնում ենք քաղաքով։"
  },
  {
    id: "para_2",
    sp: "para",
    arm: "նպատակով / համար",
    category: "basic",
    explanation: "Նախդիր, որը ցույց է տալիս գործողության նպատակը, վերջնական ստացողին, կամ վերջնաժամկետը։",
    exampleSp: "Estudio español para viajar. Este regalo es para ti.",
    exampleArm: "Իսպաներեն եմ սովորում ճանապարհորդելու նպատակով։ Այս նվերը քեզ համար է։"
  },

  // --- Section: Ամենակարևոր հիմնական preposiciones ---
  {
    id: "basic_a",
    sp: "a",
    arm: "դեպի, ժամը, անձին",
    category: "basic",
    explanation: "Հիմնական նախդիր. 1) շարժում դեպի տեղ, 2) ժամ նշելիս, 3) որոշյալ անձի հետ որպես ուղիղ խնդիր, 4) տրական հոլովում։",
    exampleSp: "Voy a casa. A las cinco. Vi a Marta.",
    exampleArm: "Գնում եմ տուն։ Ժամը հինգին։ Տեսա Մարտային։"
  },
  {
    id: "basic_en",
    sp: "en",
    arm: "մեջ, վրա, -ում",
    category: "basic",
    explanation: "Հիմնական նախդիր տեղորոշման համար (մեջ, վրա, ներսում) կամ տրանսպորտային միջոցով ճանապարհորդելու համար։",
    exampleSp: "En el parque. En taxi.",
    exampleArm: "Այգում (մեջ)։ Տաքսիով։"
  },
  {
    id: "basic_de",
    sp: "de",
    arm: "-ից, պատկանելություն, մասին",
    category: "basic",
    explanation: "Հիմնական նախդիր ծագման (-ից), պատկանելության (ում պատկանող) կամ նյութի/թեմայի նշման համար։",
    exampleSp: "De Barcelona. El coche de Ana. Mesa de madera.",
    exampleArm: "Բարսելոնայից։ Անայի մեքենան։ Փայտե սեղան։"
  },
  {
    id: "basic_con",
    sp: "con",
    arm: "հետ, միջոցով",
    category: "basic",
    explanation: "Համատեղություն, ուղեկցություն կամ որևէ գործիքի կիրառում (հետ, միջոցով)։",
    exampleSp: "Hablo con el profesor. Escribo con pluma.",
    exampleArm: "Խոսում եմ ուսուցչի հետ։ Գրում եմ փետրագնդով։"
  },
  {
    id: "basic_sin",
    sp: "sin",
    arm: "առանց",
    category: "basic",
    explanation: "'Con' նախդիրի հականիշն է՝ որևէ բանի կամ մեկի բացակայությունը ցույց տալու համար։",
    exampleSp: "Café sin azúcar. Un día sin lluvia.",
    exampleArm: "Սուրճ առանց շաքարավազի։ Օր առանց անձրևի։"
  },
  {
    id: "basic_por",
    sp: "por",
    arm: "պատճառով, միջոցով, փոխարենը, տարածքով",
    category: "basic",
    explanation: "Մոտավոր ժամանակ կամ տարածություն, պատճառ, միջոց, փոխանակում (սակագին)։",
    exampleSp: "Por la mañana. Pasear por la calle. Gracias por todo.",
    exampleArm: "Առավոտյան։ Զբոսնել փողոցով։ Շնորհակալություն ամեն ինչի համար։"
  },
  {
    id: "basic_para",
    sp: "para",
    arm: "համար, նպատակ, վերջնաժամկետ",
    category: "basic",
    explanation: "Նպատակաուղղվածություն, վերջնակետ, շահառու, կարծիք, կամ կոնկրետ վերջնաժամկետ։",
    exampleSp: "Para aprender. El regalo es para ella. Tarea para mañana.",
    exampleArm: "Սովորելու համար։ Նվերը նրա համար է։ Տնայինը վաղվա համար։"
  },
  {
    id: "basic_hasta",
    sp: "hasta",
    arm: "մինչև",
    category: "basic",
    explanation: "Ժամանակային, տարածական կամ քանակական սահմանափակման ամբողջական վերջնակետ (մինչև)։",
    exampleSp: "Hasta la vista. Te espero hasta el lunes.",
    exampleArm: "Մինչ հանդիպում։ Սպասում եմ քեզ մինչև երկուշաբթի։"
  },
  {
    id: "basic_desde",
    sp: "desde",
    arm: "սկսած, -ից",
    category: "basic",
    explanation: "Գործողության, ժամանակի կամ տարածության մեկնարկային կետը (սկսած, -ից)։",
    exampleSp: "Desde mi ventana se ve el mar. Trabajo desde las ocho.",
    exampleArm: "Իմ պատուհանից երևում է ծովը։ Աշխատում եմ ժամը ութից սկսած։"
  },
  {
    id: "basic_entre",
    sp: "entre",
    arm: "միջև",
    category: "basic",
    explanation: "Երկու կամ ավելի իրերի, մարդկանց կամ նպատակների միջև ընկած տիրույթը։",
    exampleSp: "Entre tú y yo. Entre los árboles.",
    exampleArm: "Քո և իմ միջև։ Ծառերի միջև։"
  },
  {
    id: "basic_sobre",
    sp: "sobre",
    arm: "վրա, մասին",
    category: "basic",
    explanation: "1) Վերևում գտնվելու ֆիզիկական դիրք, 2) Թեմայի բովանդակություն/մասին։",
    exampleSp: "El vaso sobre la mesa. Un artículo sobre arte.",
    exampleArm: "Բաժակը սեղանի վրա։ Հոդված արվեստի մասին։"
  },
  {
    id: "basic_hacia",
    sp: "hacia",
    arm: "դեպի, մոտավորապես",
    category: "basic",
    explanation: "Ուղղություն դեպի տեղ (առանց հասնելու պարտադրանքի) կամ մոտավոր ժամանակային նշում։",
    exampleSp: "Camina hacia la plaza. Hacia las tres.",
    exampleArm: "Քայլիր դեպի հրապարակ։ Մոտավորապես ժամը երեքին։"
  },
  {
    id: "basic_durante",
    sp: "durante",
    arm: "ընթացքում",
    category: "basic",
    explanation: "Ցույց է տալիս գործողության կատարման ժամանակահատվածը (ընթացքում)։",
    exampleSp: "Durante las vacaciones. Durante el día.",
    exampleArm: "Արձակուրդների ընթացքում։ Օրվա ընթացքում։"
  },
  {
    id: "basic_antes_de",
    sp: "antes de",
    arm: "առաջ",
    category: "basic",
    explanation: "Ժամանակային կամ հաջորդական նախորդություն, միշտ պահանջում է 'de' գոյականից կամ բայից առաջ։",
    exampleSp: "Antes de salir de casa.",
    exampleArm: "Տնից դուրս գալուց առաջ։"
  },
  {
    id: "basic_despues_de",
    sp: "después de",
    arm: "հետո",
    category: "basic",
    explanation: "Ժամանակային կամ հաջորդական հաջորդություն, միշտ պահանջում է 'de' գոյականից կամ բայից առաջ։",
    exampleSp: "Después de cenar.",
    exampleArm: "Ընթրելուց հետո։"
  },
  {
    id: "basic_dentro_de",
    sp: "dentro de",
    arm: "ներսում / որոշ ժամանակից հետո",
    category: "basic",
    explanation: "Տարածքային առումով՝ ներսում, ժամանակային առումով՝ ներկա պահից սկսած որոշ ժամանակ անց։",
    exampleSp: "Dentro del coche. Llegará dentro de una hora.",
    exampleArm: "Մեքենայի ներսում։ Կժամանի մեկ ժամից (մեկ ժամ հետո)։"
  },
  {
    id: "basic_delante_de",
    sp: "delante de",
    arm: "առջևում",
    category: "basic",
    explanation: "Ֆիզիկական դիրք ինչ-որ բանի դիմաց/առջևի մասում։",
    exampleSp: "Delante de la puerta.",
    exampleArm: "Դռան առջևում։"
  },
  {
    id: "basic_detras_de",
    sp: "detrás de",
    arm: "հետևում",
    category: "basic",
    explanation: "Ֆիզիկական դիրք ինչ-որ բանի հետևի կամ ետնամասում։",
    exampleSp: "Detrás del edificio.",
    exampleArm: "Շենքի հետևում։"
  },
  {
    id: "basic_encima_de",
    sp: "encima de",
    arm: "վրա",
    category: "basic",
    explanation: "Մակերևույթի վերևում գտնվելը (հաճախ հպվելով)։",
    exampleSp: "Encima del armario.",
    exampleArm: "Պահարանի վրա։"
  },
  {
    id: "basic_debajo_de",
    sp: "debajo de",
    arm: "տակ",
    category: "basic",
    explanation: "Մակերևույթի ներքևում, տակ գտնվելու ֆիզիկական դիրքը։",
    exampleSp: "Debajo del puente.",
    exampleArm: "Կամրջի տակ։"
  },
  {
    id: "basic_al_lado_de",
    sp: "al lado de",
    arm: "կողքին",
    category: "basic",
    explanation: "Ինչ-որ բանի կամ մեկի մոտակայքում, կողքի մասում գտնվելը։",
    exampleSp: "Al lado del cine.",
    exampleArm: "Կինոթատրոնի կողքին։"
  },
  {
    id: "basic_alrededor_de",
    sp: "alrededor de",
    arm: "շուրջը",
    category: "basic",
    explanation: "Շրջանաձև կամ շրջապատող դիրք տարածության մեջ, կամ մոտավոր քանակ։",
    exampleSp: "Alrededor de la fogata. Alrededor de cien personas.",
    exampleArm: "Խարույկի շուրջը։ Շուրջ հարյուր մարդ։"
  },
  {
    id: "basic_enfrente_de",
    sp: "enfrente de",
    arm: "դիմաց",
    category: "basic",
    explanation: "Ֆիզիկական դիրք դեմ առ դեմ կամ հակառակ կողմում։",
    exampleSp: "Enfrente de mi ventana.",
    exampleArm: "Իմ պատուհանի դիմաց։"
  },
  {
    id: "basic_a_traves_de",
    sp: "a través de",
    arm: "միջոցով / միջով",
    category: "basic",
    explanation: "Տարածության մեջ անցնումը մեկ կողմից մյուսը (միջով) կամ գործիքային միջնորդությունը (միջոցով)։",
    exampleSp: "A través del bosque. A través de internet.",
    exampleArm: "Անտառի միջով։ Ինտերնետի միջոցով։"
  }
];
