// ============================================================
//  ✏️  ARQUIVO DE CONFIGURAÇÃO — EDITE AQUI!
//  Não é necessário alterar o index.html para atualizar dados.
// ============================================================

// 📱 SEU NÚMERO DE WHATSAPP (formato: 55 + DDD + número, sem espaços)
const WHATSAPP_NUMBER = "5511999999999";

// 🏪 NOME DA SUA LOJA
const STORE_NAME = "Vinoteca BR";

// 🔑 SENHA DO PAINEL ADMIN (para editar vinhos pelo navegador)
const ADMIN_PASSWORD = "vinho123";

// 🍷 LISTA DE VINHOS
// Para usar foto local: coloque a imagem na pasta "images/" e use "images/nome-do-arquivo.jpg"
// Para usar foto da internet: cole a URL completa
let wines = [
    {
        id: 1,
        name: "DV Catena Malbec Malbec",
        type: "tinto",          // tinto | branco | rose | espumante
        origin: "Vale do Napa, EUA",
        year: Sob Consulta,
        // description: "Vinho encorpado com notas de cassis, amora e leve toque de carvalho francês.",
        price: 107.90,
        stock: 12,
        image: "images/dv mbc mbc.png"   // ← coloque sua foto aqui
    },
    {
        id: 2,
        name: "Sauvignon Blanc Premium",
        type: "branco",
        origin: "Loire, França",
        year: 2021,
        description: "Fresco e mineral, com aromas cítricos e florais. Final elegante.",
        price: 145.00,
        stock: 8,
        image: "images/sauvignon.jpg"
    },
    {
        id: 3,
        name: "Whispering Angel Rosé",
        type: "rose",
        origin: "Provence, França",
        year: 2022,
        description: "Rosé icônico, seco e refinado. Notas de pêssego e flores brancas.",
        price: 220.00,
        stock: 15,
        image: "images/rose.jpg"
    },
    {
        id: 4,
        name: "Champagne Brut Annika",
        type: "espumante",
        origin: "Champagne, França",
        year: 2018,
        description: "Champagne tradicional com bolhas finas. Notas de brioche e maçã verde.",
        price: 350.00,
        stock: 6,
        image: "images/champagne.jpg"
    },
    {
        id: 5,
        name: "Malbec Gran Reserva",
        type: "tinto",
        origin: "Mendoza, Argentina",
        year: 2017,
        description: "Intenso e complexo. Taninos suaves com final persistente de frutas negras.",
        price: 165.00,
        stock: 20,
        image: "images/malbec.jpg"
    },
    {
        id: 6,
        name: "Château Campbell",
        type: "branco",
        origin: "Bordeaux, França",
        year: 2020,
        description: "Blend sofisticado de Sauvignon Blanc e Sémillon. Estruturado e elegante.",
        price: 195.00,
        stock: 4,
        image: "images/chateau.jpg"
    },
    {
        id: 7,
        name: "Miraval Rosé",
        type: "rose",
        origin: "Provence, França",
        year: 2021,
        description: "Mineral e fresco com notas de frutas vermelhas.",
        price: 280.00,
        stock: 9,
        image: "images/miraval.jpg"
    },
    {
        id: 8,
        name: "Prosecco DOCG",
        type: "espumante",
        origin: "Veneto, Itália",
        year: 2022,
        description: "Espumante italiano leve e frutado. Perfeito para celebrações.",
        price: 89.90,
        stock: 25,
        image: "images/prosecco.jpg"
    }
];
