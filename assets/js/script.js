let mapOptions = {
    center:[48.3156, 33.2938],
    zoom:4
}

var has_been_clicked = 0;

let map = new L.map('map', mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let marker = new L.marker([39.9139, 46.7933], {
    riseOnHover: true,
    title: 'Armênia e Azerbaijão'
});

let marker2 = new L.marker([53.9006, 27.5590], {
    riseOnHover:true,
    title: 'Bielorrússia'
})

let marker3 = new L.marker([43.3178, 45.6985], {
    riseOnHover:true,
    title: 'Chechênia'
})

let marker4 = new L.marker([44.7866, 20.4489], {
    riseOnHover:true,
    title: 'Iugoslávia'
})

let marker5 = new L.marker([47.2493, 29.4076], {
    riseOnHover:true,
    title: 'Transnístria'
})

let marker6 = new L.marker([42.3236, 43.3549], {
    riseOnHover:true,
    title: 'Geórgia'
})

marker.bindPopup('<h1>Armênia e Azerbaijão</h1>').openPopup();

marker2.bindPopup('<h1>Bielorrússia</h1>').openPopup();

marker3.bindPopup('<h1>Chechênia</h1>').openPopup();

marker4.bindPopup('<h1>Iugoslávia</h1>').openPopup();

marker5.bindPopup('<h1>Transnístria</h1>').openPopup();

marker6.bindPopup('<h1>Geórgia</h1>').openPopup();

marker.addTo(map);

marker2.addTo(map);

marker3.addTo(map);

marker4.addTo(map);

marker5.addTo(map);

marker6.addTo(map);



marker.on('click', function(e) {
    console.log(has_been_clicked)
    if (has_been_clicked == 0){
        document.getElementById('cont-mapa').innerHTML = ""
        document.getElementById('cont-mapa').innerHTML += "<h1>ARMÊNIA E AZERBAIJÃO</h1><br></br>"
        document.getElementById('cont-mapa').innerHTML += "<h2> Os conflitos entre a Armênia e o Azerbaijão têm raízes profundas na história e nas disputas territoriais, com destaque para a região de Nagorno-Karabakh. Esta área montanhosa, de maioria étnica armênia, foi disputada por séculos, mas se tornou o epicentro do conflito moderno após o colapso da União Soviética. Em 1988, tensões étnicas entre armênios e azerbaijanos culminaram em uma guerra, que se intensificou durante a década de 1990, quando Nagorno-Karabakh declarou independência do Azerbaijão. A guerra resultou em milhares de mortes e em um grande número de deslocados, mas o conflito foi interrompido com um cessar-fogo em 1994, sem uma resolução definitiva.</h2><br></br>"
        document.getElementById('cont-mapa').innerHTML += "<h2> Apesar do cessar-fogo, os confrontos continuaram esporadicamente ao longo das décadas seguintes, com ambas as partes acusando-se mutuamente de violar o acordo de paz. A situação se agravou em 2020, quando eclodiu um novo confronto armado, conhecido como a Segunda Guerra de Nagorno-Karabakh. Durante o conflito, o Azerbaijão conseguiu recapturar parte do território perdido durante a guerra dos anos 90, com o apoio da Turquia. A Rússia, tradicionalmente aliada da Armênia, mediou um acordo de cessar-fogo, mas o equilíbrio de poder na região foi alterado, deixando o Azerbaijão em uma posição mais forte.</h2><br></br>"
        document.getElementById('cont-mapa').innerHTML += "<h2> O conflito é alimentado por questões territoriais, religiosas e étnicas, com a Armênia sendo predominantemente cristã e o Azerbaijão muçulmano, e ambos os países tendo forte ligação com suas respectivas diásporas. A região de Nagorno-Karabakh permanece uma área de disputa, e o status de sua independência ou integração continua a ser uma questão central. Além disso, a rivalidade geopolítica entre potências regionais, como a Rússia, a Turquia e o Irã, também influencia o conflito, tornando-o um ponto focal de tensão no Cáucaso. O caminho para uma paz duradoura permanece incerto, e as tensões continuam a afetar a estabilidade na região.</h2>"
    }
    
})

marker2.on('click', function(e) {
    console.log(has_been_clicked)
    if (has_been_clicked == 0){
        document.getElementById('cont-mapa').innerHTML = ""
        document.getElementById('cont-mapa').innerHTML += "<h1>BIELORRÚSSIA</h1><br></br>"
        document.getElementById('cont-mapa').innerHTML += "<h2> O conflito na Bielorrússia está intimamente ligado à repressão política e à luta pela liberdade e democracia, especialmente após a eleição presidencial de 2020. Alexander Lukashenko, que governava o país desde 1994, foi reeleito em uma votação amplamente contestada, resultando em grandes protestos em massa em todo o país. A oposição, liderada por figuras como Sviatlana Tsikhanouskaya, alegou que as eleições foram fraudulentas e pediram a renúncia de Lukashenko. As manifestações foram inicialmente pacíficas, mas a repressão violenta das autoridades, com prisões em massa e uso de força militar contra os manifestantes, gerou uma crise política e humanitária no país.</h2><br></br>"
        document.getElementById('cont-mapa').innerHTML += "<h2> Além das tensões internas, o governo bielorrusso manteve uma aliança próxima com a Rússia, o que exacerbou as relações com o Ocidente. A União Europeia e os Estados Unidos impuseram sanções contra o regime de Lukashenko, enquanto a Rússia forneceu apoio financeiro e político. A crise também se agravou em 2021, quando Lukashenko usou táticas agressivas, como o desvio forçado de um voo comercial para prender um dissidente bielorrusso, um evento que foi amplamente condenado pela comunidade internacional. Esses atos de repressão aumentaram a pressão sobre o regime e destacaram as preocupações globais com a falta de liberdades políticas e direitos humanos no país.</h2><br></br>"
        document.getElementById('cont-mapa').innerHTML += "<h2> Os conflitos na Bielorrússia têm raízes profundas em questões de governança autoritária, corrupção e a luta pela liberdade de expressão e direitos civis. A repressão das manifestações e a falta de reformas democráticas continuam a dividir o país, com muitos cidadãos buscando uma transição para um governo mais democrático, enquanto outros ainda veem Lukashenko como uma figura de estabilidade. O futuro político da Bielorrússia permanece incerto, à medida que o regime continua a enfrentar pressões internas e externas por mudanças significativas.</h2>"
    }
    
})

marker3.on('click', function(e) {
    console.log(has_been_clicked)
    if (has_been_clicked == 0){
        document.getElementById('cont-mapa').innerHTML = ""
        document.getElementById('cont-mapa').innerHTML += "<h1>CHECHÊNIA</h1><br></br>"
        document.getElementById('cont-mapa').innerHTML += "<h2> A Chechênia, uma região predominantemente muçulmana localizada no Cáucaso e que faz parte da Federação Russa, tem uma história marcada por intensos conflitos, especialmente após o colapso da União Soviética. Em 1991, a Chechênia declarou independência da Rússia, o que resultou em uma resposta militar de Moscou e levou à Primeira Guerra Chechena (1994-1996). Esse conflito devastador culminou com a retirada das tropas russas e uma breve independência de facto da Chechênia, que ficou marcada pela destruição da infraestrutura e por altos índices de pobreza e instabilidade.</h2><br></br>"
        document.getElementById('cont-mapa').innerHTML += "<h2> A Segunda Guerra Chechena (1999-2009) teve início quando o governo russo, liderado por Vladimir Putin, iniciou uma campanha para reocupar a região sob a justificativa de combater o terrorismo, após incidentes de violência e sequestros. Essa guerra foi ainda mais devastadora, levando a uma destruição em massa de Grozny, a capital chechena, e forçando milhares de civis a fugir. A Chechênia voltou ao controle russo, e o governo local passou a ser liderado por Ramzan Kadyrov, um aliado leal de Putin. Sob a liderança de Kadyrov, a região passou por um processo de reconstrução, mas também se tornou conhecida por relatos de repressão e violações aos direitos humanos, incluindo tortura, perseguições a minorias e assassinatos de opositores.</h2><br></br>"
        document.getElementById('cont-mapa').innerHTML += "<h2> Hoje, a Chechênia vive um período de relativa estabilidade, embora sob um regime autoritário e fortemente controlado pelo Kremlin. A influência de Kadyrov, marcada por uma política de mão de ferro, assegura a lealdade da região à Rússia. No entanto, a situação dos direitos humanos e a repressão à dissidência continuam sendo questões altamente preocupantes para a comunidade internacional. Além disso, o controle rígido sobre a liberdade de expressão e as denúncias de abusos contra grupos minoritários, como a comunidade LGBTQ+, evidenciam as limitações à democracia e à autonomia regional, que permanecem sob a vigilância de Moscou.</h2>"
    }
    
})

marker4.on('click', function(e) {
    console.log(has_been_clicked)
    if (has_been_clicked == 0){
        document.getElementById('cont-mapa').innerHTML = ""
        document.getElementById('cont-mapa').innerHTML += "<h1>IUGOSLÁVIA</h1><br></br>"
        document.getElementById('cont-mapa').innerHTML += "<h2> Os conflitos na Iugoslávia foram uma série de guerras que ocorreram na década de 1990, após o colapso do governo socialista e a dissolução do país em várias repúblicas independentes. A Iugoslávia era uma federação de seis repúblicas (Sérvia, Croácia, Eslovênia, Bósnia e Herzegovina, Montenegro e Macedônia do Norte) e duas províncias autônomas (Kosovo e Voivodina). Com a queda da União Soviética e o enfraquecimento do regime comunista, começaram a emergir fortes movimentos nacionalistas e separatistas. As tensões entre os diferentes grupos étnicos, religiosos e culturais foram exacerbadas, culminando em uma série de guerras violentas, inicialmente entre Croácia e Sérvia, e depois com a eclosão da Guerra da Bósnia (1992-1995).</h2><br></br>"
        document.getElementById('cont-mapa').innerHTML += "<h2> A Guerra da Bósnia foi uma das mais brutais e teve um impacto devastador, marcado por crimes de guerra, genocídio e limpeza étnica, especialmente entre sérvios, croatas e bósnios. Durante o conflito, ocorreu o massacre de Srebrenica, onde mais de 8.000 muçulmanos bósnios foram mortos pelas forças sérvias, um ato que posteriormente foi classificado como genocídio pela Corte Internacional de Justiça. Esse período foi marcado por atrocidades e um elevado número de refugiados. A intervenção da Organização das Nações Unidas (ONU) e da Organização do Tratado do Atlântico Norte (OTAN) tornou-se crucial para pôr fim aos conflitos e para negociar os Acordos de Dayton em 1995, que estabeleceram a paz na Bósnia, embora o país ainda esteja dividido em entidades autônomas.</h2><br></br>"
        document.getElementById('cont-mapa').innerHTML += "<h2> O conflito na Iugoslávia encerrou-se oficialmente em 2001, após a guerra do Kosovo e a intervenção da OTAN para proteger a população albanesa do Kosovo. A guerra do Kosovo resultou na separação da província da Sérvia, com o Kosovo declarando sua independência em 2008, embora a Sérvia e alguns outros países ainda não o reconheçam como um estado soberano. A dissolução da Iugoslávia e as guerras subsequentes deixaram uma marca profunda na região, que ainda sofre com tensões étnicas e a reconstrução social e econômica. Hoje, os países formados após a dissolução da Iugoslávia tentam consolidar suas identidades nacionais e políticas, embora muitos desafios relacionados à estabilidade política, integração europeia e reconciliação ainda permaneçam.</h2>"
    }
    
})

marker5.on('click', function(e) {
    console.log(has_been_clicked)
    if (has_been_clicked == 0){
        document.getElementById('cont-mapa').innerHTML = ""
        document.getElementById('cont-mapa').innerHTML += "<h1>TRANSNÍSTRIA</h1><br></br>"
        document.getElementById('cont-mapa').innerHTML += "<h2> O conflito da Transnístria é uma disputa não resolvida entre a Moldávia e a região separatista da Transnístria, que fica a leste do rio Dniester e faz fronteira com a Ucrânia. Após a dissolução da União Soviética em 1991, a Moldávia declarou sua independência e buscou alinhar-se politicamente com a Romênia e o Ocidente. No entanto, a Transnístria, com uma população composta principalmente por russos e ucranianos, resistiu a essa orientação pró-Ocidente e declarou sua independência, buscando manter laços com a Rússia. Esse movimento separatista gerou uma guerra civil em 1992, que resultou em centenas de mortes e deslocamentos, sendo interrompida com um cessar-fogo mediado pela Rússia, que também posicionou tropas na Transnístria.</h2><br></br>"
        document.getElementById('cont-mapa').innerHTML += "<h2> Desde então, a Transnístria funciona como uma república de facto independente, com seu próprio governo, moeda e forças de segurança, embora não seja reconhecida internacionalmente como um país independente. As tentativas de resolução do conflito têm se mostrado difíceis, pois a Moldávia busca reintegrar a região enquanto a Transnístria insiste em sua independência, com forte apoio da Rússia. A situação é frequentemente caracterizada como um 'conflito congelado', pois o status da região permanece indefinido, e a Rússia continua mantendo tropas na Transnístria, justificando essa presença como uma medida para manter a paz.</h2><br></br>"
        document.getElementById('cont-mapa').innerHTML += "<h2> O conflito da Transnístria ainda é uma fonte de instabilidade para a Moldávia e influencia a geopolítica da região, especialmente nas relações entre a Rússia e o Ocidente. A situação é complicada por questões étnicas e pela presença de uma população majoritariamente pró-Rússia na Transnístria. A Moldávia tem buscado uma aproximação com a União Europeia, o que gerou tensões com a Rússia, que vê a região como parte de sua esfera de influência. Assim, a Transnístria continua a ser uma zona de instabilidade no leste europeu, refletindo tanto os interesses da população local quanto as tensões entre Rússia, Moldávia e o Ocidente.</h2>"
    }
    
})

marker6.on('click', function(e) {
    console.log(has_been_clicked)
    if (has_been_clicked == 0){
        document.getElementById('cont-mapa').innerHTML = ""
        document.getElementById('cont-mapa').innerHTML += "<h1>GEÓRGIA</h1><br></br>"
        document.getElementById('cont-mapa').innerHTML += "<h2> Os conflitos na Geórgia estão principalmente relacionados às regiões separatistas da Abecásia e da Ossétia do Sul, que têm buscado independência desde o colapso da União Soviética. Em 1991, quando a Geórgia declarou sua independência, surgiram tensões com essas regiões, que possuem diferentes identidades étnicas e culturais e receberam apoio da Rússia para suas demandas separatistas. Nos primeiros anos da década de 1990, eclodiram conflitos armados entre as forças georgianas e os separatistas em ambas as regiões, resultando em grandes deslocamentos de população e devastação local. A Geórgia tentou manter a integridade territorial, enquanto a Rússia manteve tropas nas regiões, justificando sua presença como uma medida de manutenção da paz.</h2><br></br>"
        document.getElementById('cont-mapa').innerHTML += "<h2> Em 2008, o conflito escalou drasticamente quando a Geórgia tentou retomar o controle da Ossétia do Sul, resultando em uma intervenção militar direta da Rússia, que rapidamente derrotou as forças georgianas e consolidou a presença militar russa em ambas as regiões. Após essa guerra, a Rússia reconheceu formalmente a independência da Ossétia do Sul e da Abecásia, embora a maioria da comunidade internacional ainda os veja como parte da Geórgia. O conflito de 2008 causou uma crise humanitária e tensões políticas que permanecem até hoje, com a Geórgia continuando a reivindicar sua soberania sobre essas regiões e a Rússia exercendo influência sobre elas.</h2><br></br>"
        document.getElementById('cont-mapa').innerHTML += "<h2> A situação na Geórgia reflete tensões maiores entre a Rússia e o Ocidente, com a Geórgia buscando aproximação com a União Europeia e a OTAN, e a Rússia vendo essa movimentação como uma ameaça à sua influência na região do Cáucaso. Enquanto o status de Abecásia e Ossétia do Sul permanece sem resolução, a presença russa nas áreas continua sendo uma fonte de instabilidade e um ponto crítico nas relações russo-georgianas, deixando a questão aberta e com perspectivas de resolução incertas, embora as áreas tenham estabilidade relativa sob controle russo.</h2>"
    }
    
})