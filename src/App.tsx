import { useState, useEffect } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  Copy,
  CheckCheck,
  X,
  AlertCircle,
} from "lucide-react";
import banner from "./assets/banner.png";
import buqueCetim from "./assets/buqueCetim.webp";
import buqueBorboleta from "./assets/buqueBorboleta.webp";
import rosaSolitaria from "./assets/rosaSolitaria.webp";
import girassol from "./assets/girassol.webp";
import miniBuqueAberto from "./assets/miniBuqueAberto.webp";
import miniBuqueFechado from "./assets/miniBuqueFechado.webp";
import miniBuquePersonalizado from "./assets/miniBuquePersonalizado.webp";
import buqueRapunzel from "./assets/buqueRapunzel.webp";
import buqueShereck from "./assets/buqueShereck.webp";
import florRapunzel from "./assets/florRapunzel.webp";

import chaveiroAguaViva from "./assets/chaveiroAguaViva.webp";
import bangela from "./assets/banguela.webp";
import borderCollie from "./assets/borderCollie.webp";
import camaleao from "./assets/camaleao.webp";
import chaveiroFrankOcean from "./assets/chaveiroFrankOcean.webp";
import chaveiroHomemAranha from "./assets/chaveiroHomemAranha.webp";
import corujaHarryPoter from "./assets/corujaHarryPoter.webp";
import portaFoneBaiacu from "./assets/portaFoneBaiacu.webp";
import snoopy from "./assets/snoopy.webp";
import wolfChan from "./assets/wolfChan.webp";
import pochita from "./assets/pochita.jpeg";
import mandragona from "./assets/mandragona.jpeg";

import cataventoG from "./assets/cataventoG.webp";
import cataventoP from "./assets/cataventoP.webp";
import dezMotivos from "./assets/dezMotivos.webp";
import polaroids from "./assets/polaroids.jpeg";
import pulseiraDupla from "./assets/pulseiraDupla.webp";
import pulseiraRegulavel from "./assets/pulseiraRegulavel.webp";
import pulseiraTrio from "./assets/pulseiraTrio.webp";
import terco from "./assets/terco.webp";
import cesta from "./assets/cesta.jpeg";
import bolsaEstrela from "./assets/bolsaEstrela.jpeg";


type Especificacao = {
  nome: string;
  valor: string;
  afetaPreco?: boolean;
  precoExtra?: number;
  inputQuantidade?: boolean;
};

type QuantidadesExtras = {
  chocolates: number;
  polaroids: number;
  floresCetim: number;
};

type Produto = {
  id: number;
  nome: string;
  descricao: string;
  precoBase: number;
  img: string;
  temModal?: boolean;
  especificacoes?: Especificacao[];
};

type ItemCarrinho = {
  id: number;
  nome: string;
  descricao: string;
  precoFinal: number;
  img: string;
  quantidade: number;
  especificacoesSelecionadas: Especificacao[];
  quantidadesExtras?: QuantidadesExtras;
  identificadorUnico: string;
};

type ModalState = {
  produto: Produto;
  quantidade: number;
  especificacoesSelecionadas: Especificacao[];
  quantidadesExtras?: QuantidadesExtras;
};



const PRODUTOS = {
  buques: [
    {
      id: 1,
      nome: "Buquê de Cetim 💐",
      descricao: "Buquê de rosas em cetim, delicado, elegante e perfeito para presentear ou decorar.",
      precoBase: 65,
      img: buqueCetim,
      temModal: true,
      especificacoes: [
        { nome: "Tamanho", valor: "10 rosas", afetaPreco: true, precoExtra: 0 },
        { nome: "Tamanho", valor: "15 rosas", afetaPreco: true, precoExtra: 25 },
        { nome: "Tamanho", valor: "20 rosas", afetaPreco: true, precoExtra: 45 },
        { nome: "Cor", valor: "Vermelho", afetaPreco: false },
        { nome: "Cor", valor: "Azul", afetaPreco: false },
        { nome: "Cor", valor: "Amarelo", afetaPreco: false },
        { nome: "Cor", valor: "Verde", afetaPreco: false },
        { nome: "Cor", valor: "Roxo/Lilas", afetaPreco: false },
        { nome: "Cor", valor: "Rosa", afetaPreco: false },
        { nome: "Cor", valor: "Branco", afetaPreco: false },
        { nome: "Cor", valor: "Outras", afetaPreco: false },
        { nome: "Cor do envelope", valor: "Preto", afetaPreco: false },
        { nome: "Cor do envelope", valor: "Branco", afetaPreco: false },
        { nome: "Cor do envelope", valor: "Outro", afetaPreco: false },
        { nome: "Gliter?", valor: "Sim", afetaPreco: true, precoExtra: 8 },
        { nome: "Gliter?", valor: "Não", afetaPreco: false },
      ],
    },
    {
      id: 2,
      nome: "Buquê de Borboletas 🦋",
      descricao: "Buquê de borboletas, delicado, romântico e cheio de encanto, perfeito para presentear!",
      precoBase: 50,
      img: buqueBorboleta,
      temModal: true,
      especificacoes: [
        { nome: "Tamanho", valor: "30 borboletas", afetaPreco: true, precoExtra: 0 },
        { nome: "Tamanho", valor: "45 borboletas", afetaPreco: true, precoExtra: 15 },
        { nome: "Tamanho", valor: "60 borboletas", afetaPreco: true, precoExtra: 30 },
        { nome: "Cor", valor: "Vermelho", afetaPreco: false },
        { nome: "Cor", valor: "Azul", afetaPreco: false },
        { nome: "Cor", valor: "Amarelo", afetaPreco: false },
        { nome: "Cor", valor: "Verde", afetaPreco: false },
        { nome: "Cor", valor: "Roxo/Lilas", afetaPreco: false },
        { nome: "Cor", valor: "Rosa", afetaPreco: false },
        { nome: "Cor", valor: "Branco", afetaPreco: false },
        { nome: "Cor", valor: "Outras", afetaPreco: false },
        { nome: "Com LED", valor: "Sim", afetaPreco: true, precoExtra: 12 },
        { nome: "Com LED", valor: "Não", afetaPreco: false },
      ],
    },
    {
      id: 3,
      nome: "Rosa Solitária 🌹",
      descricao: "Rosa solitária, delicada e cheia de significado, perfeita para um gesto simples e especial!",
      precoBase: 13,
      img: rosaSolitaria,
      temModal: true,
      especificacoes: [
        { nome: "Cor", valor: "Vermelho", afetaPreco: false },
        { nome: "Cor", valor: "Azul", afetaPreco: false },
        { nome: "Cor", valor: "Amarelo", afetaPreco: false },
        { nome: "Cor", valor: "Verde", afetaPreco: false },
        { nome: "Cor", valor: "Roxo/Lilas", afetaPreco: false },
        { nome: "Cor", valor: "Rosa", afetaPreco: false },
        { nome: "Cor", valor: "Branco", afetaPreco: false },
        { nome: "Cor", valor: "Outras", afetaPreco: false },
      ],
    },
    {
      id: 4,
      nome: "Girassol Solitário 🌻",
      descricao: "Girassol solitário, alegre e cheio de luz, perfeito para iluminar qualquer momento!",
      precoBase: 18,
      img: girassol,
      temModal: false,
    },
    {
      id: 5,
      nome: "Minibuquê Aberto 💐",
      descricao: "Minibuquê aberto, delicado e charmoso, perfeito para presentear com leveza!",
      precoBase: 40,
      img: miniBuqueAberto,
      temModal: false,
    },
    {
      id: 6,
      nome: "Minibuquê Fechado 💐",
      descricao: "Minibuquê fechado, delicado e aconchegante, perfeito para um presente especial!",
      precoBase: 35,
      img: miniBuqueFechado,
      temModal: false,
    },
    {
      id: 7,
      nome: "Minibuquê Personalizado ✨",
      descricao: "Minibuquê personalizado, feito com carinho e detalhes únicos, do jeitinho que você imaginar!",
      precoBase: 55,
      img: miniBuquePersonalizado,
      temModal: false,
    },
    {
      id: 8,
      nome: "Lírio mágico ☀️",
      descricao: "Símbolo de amor, luz e magia, feito para eternizar sentimentos especiais!",
      precoBase: 35,
      img: florRapunzel,
      temModal: false,
    },
    {
      id: 9,
      nome: "Buquê Enrolados 🦎☀️",
      descricao: "Encantador e especial, junto com Pascal veja enfim a luz brilhar!",
      precoBase: 80,
      img: buqueRapunzel,
      temModal: false,
    },
    {
      id: 10,
      nome: "Shrek Girassol 💚",
      descricao: "O ogro do pântano mais famoso em sua forma mais carismática, perfeito para quem ama incondicionamente!",
      precoBase: 55,
      img: buqueShereck,
      temModal: false,
    },
  ],

  amigurumis: [
    {
      id: 11,
      nome: "Chaveiro de Água-Viva 🪼",
      descricao: "Feito com carinho e detalhes únicos, do jeitinho que você imaginar!",
      precoBase: 18,
      img: chaveiroAguaViva,
      temModal: true,
      especificacoes: [
        { nome: "Cor", valor: "Vermelho", afetaPreco: false },
        { nome: "Cor", valor: "Azul Claro", afetaPreco: false },
        { nome: "Cor", valor: "Azul Marinho", afetaPreco: false },
        { nome: "Cor", valor: "Amarelo", afetaPreco: false },
        { nome: "Cor", valor: "Amarelo Queimado", afetaPreco: false },
        { nome: "Cor", valor: "Verde", afetaPreco: false },
        { nome: "Cor", valor: "Roxo", afetaPreco: false },
        { nome: "Cor", valor: "Rosa Claro", afetaPreco: false },
        { nome: "Cor", valor: "Rosa", afetaPreco: false },
        { nome: "Cor", valor: "Ciano", afetaPreco: false },
        { nome: "Cor", valor: "Laranja", afetaPreco: false },
        { nome: "Cor", valor: "Bege", afetaPreco: false },
        { nome: "Cor", valor: "Marrom claro", afetaPreco: false },
        { nome: "Cor", valor: "Cinza", afetaPreco: false },
        { nome: "Cor", valor: "Outras", afetaPreco: false },
      ],
    },
    {
      id: 12,
      nome: "Snoopy 🐶",
      descricao: "Ele troca seu telhado vermelho e suas aventuras por um gesto de amor!",
      precoBase: 80,
      img: snoopy,
      temModal: false,
    },
    {
      id: 13,
      nome: "Banguela 🖤",
      descricao: "Ele carrega no olhar silencioso a confiança conquistada, tão forte quanto o voo livre pelos céus!",
      precoBase: 90,
      img: bangela,
      temModal: false,
    },
    {
      id: 14,
      nome: "Border Collie 🐶",
      descricao: "De olhar atento e coração leal, afeto e fidelidade em amor diário!",
      precoBase: 30,
      img: borderCollie,
      temModal: false,
    },
    {
      id: 15,
      nome: "Frank Ocean 🎧",
      descricao: "You showed me love - Pink + White",
      precoBase: 25,
      img: chaveiroFrankOcean,
      temModal: false,
    },
    {
      id: 16,
      nome: "Porta Fone 🐡",
      descricao: "Fofo e divertido, que guarda seus fones com charme, personalidade e um toque de humor do fundo do mar!",
      precoBase: 15,
      img: portaFoneBaiacu,
      temModal: true,
      especificacoes: [
        { nome: "Cor", valor: "Amarelo", afetaPreco: false },
        { nome: "Cor", valor: "Rosa", afetaPreco: false },
      ],
    },
    {
      id: 17,
      nome: "Chaveiro SpiderMan 🕷️",
      descricao: "O herói da vizinhança, símbolo de coragem, responsabilidade e aventura para acompanhar você todos os dias",
      precoBase: 20,
      img: chaveiroHomemAranha,
      temModal: false,
    },
    {
      id: 18,
      nome: "Camaleão 🦎",
      descricao: "Pequeno guardião das colors e dos sentimentos, delicado e curioso!",
      precoBase: 75,
      img: camaleao,
      temModal: false,
    },
    {
      id: 19,
      nome: "Pochita 🪚",
      descricao: "Pequeno demônio de coração gigante, amor simples que faz qualquer sacrifício valer a pena!",
      precoBase: 60,
      img: pochita,
      temModal: false,
    },
    {
      id: 20,
      nome: "WolfChan 🐺",
      descricao: "Fofo e carismático, perfeito para levar charme e companhia a qualquer lugar!",
      precoBase: 25,
      img: wolfChan,
      temModal: false,
    },
    {
      id: 21,
      nome: "Edwiges 🦉",
      descricao: "She is my friend...",
      precoBase: 25,
      img: corujaHarryPoter,
      temModal: false,
    },
    {
      id: 22,
      nome: "Mandrágona 🌱",
      descricao: "A plantinha mais travessa do mundo bruxo, cheia de magia com charme encantador direto de Hogwarts!",
      precoBase: 25,
      img: mandragona,
      temModal: true,
      especificacoes: [
        { nome: "Cor do vaso", valor: "Vermelho", afetaPreco: false },
        { nome: "Cor do vaso", valor: "Azul Claro", afetaPreco: false },
        { nome: "Cor do vaso", valor: "Azul Marinho", afetaPreco: false },
        { nome: "Cor do vaso", valor: "Amarelo", afetaPreco: false },
        { nome: "Cor do vaso", valor: "Amarelo Queimado", afetaPreco: false },
        { nome: "Cor do vaso", valor: "Verde", afetaPreco: false },
        { nome: "Cor do vaso", valor: "Roxo", afetaPreco: false },
        { nome: "Cor do vaso", valor: "Rosa Claro", afetaPreco: false },
        { nome: "Cor do vaso", valor: "Rosa", afetaPreco: false },
        { nome: "Cor do vaso", valor: "Ciano", afetaPreco: false },
        { nome: "Cor do vaso", valor: "Laranja", afetaPreco: false },
        { nome: "Cor do vaso", valor: "Bege", afetaPreco: false },
        { nome: "Cor do vaso", valor: "Marrom claro", afetaPreco: false },
        { nome: "Cor do vaso", valor: "Cinza", afetaPreco: false },
        { nome: "Cor do vaso", valor: "Preto", afetaPreco: false },
        { nome: "Cor do vaso", valor: "Branco", afetaPreco: false },
        { nome: "Cor do vaso", valor: "Outras", afetaPreco: false },
      ]
    },
  ],

  outros: [
    {
      id: 100,
      nome: "Cesta Personalizada",
      descricao: "Cesta completa com múltiplas opções",
      precoBase: 20,
      img: cesta,
      temModal: true,
      especificacoes: [
        { nome: "Tamanho", valor: "Pequeno", afetaPreco: true, precoExtra: 0 },
        { nome: "Tamanho", valor: "Médio", afetaPreco: true, precoExtra: 10 },
        { nome: "Tamanho", valor: "Grande", afetaPreco: true, precoExtra: 20 },
        { nome: "Chocolates?", valor: "Sim (digitar qtd)", inputQuantidade: true },
        { nome: "Chocolates?", valor: "Não" },
        { nome: "Tem Urso?", valor: "Sim", afetaPreco: true, precoExtra: 30 },
        { nome: "Tem Urso?", valor: "Não", afetaPreco: false },
        { nome: "Flores de Cetim?", valor: "Sim", inputQuantidade: true },
        { nome: "Flores de Cetim?", valor: "Não" },
        { nome: "Polaroids?", valor: "Sim (mínimo 6 unidades)", inputQuantidade: true },
        { nome: "Polaroids?", valor: "Não" },
        { nome: "Decoração Personalizada?", valor: "Sim (+ R$ 15,00)", afetaPreco: true, precoExtra: 15 },
        { nome: "Decoração Personalizada?", valor: "Não", afetaPreco: false },
      ],
    },
    {
      id: 24,
      nome: "Pulseira Personalizada ✨",
      descricao: "Feita com carinho, cores e significados, um detalhe delicado para contar sua história do seu jeito!",
      precoBase: 8,
      img: pulseiraRegulavel,
      temModal: true,
      especificacoes: [
        { nome: "Com nome?", valor: "Sim", afetaPreco: true, precoExtra: 3 },
        { nome: "Com nome?", valor: "Não", afetaPreco: false },
        { nome: "Regulável?", valor: "Sim", afetaPreco: true, precoExtra: 5 },
        { nome: "Regulável?", valor: "Não", afetaPreco: false },
      ],
    },
    {
      id: 26,
      nome: "Par Pulseiras Personalizadas ✨",
      descricao: "Feitas com carinho e significado, perfeitas para conectar histórias, afetos e momentos especiais!",
      precoBase: 12,
      img: pulseiraDupla,
      temModal: true,
      especificacoes: [
        { nome: "Com nome?", valor: "Sim", afetaPreco: true, precoExtra: 4.5 },
        { nome: "Com nome?", valor: "Não", afetaPreco: false },
        { nome: "Regulável?", valor: "Sim", afetaPreco: true, precoExtra: 6.5 },
        { nome: "Regulável?", valor: "Não", afetaPreco: false },
      ],
    },
    {
      id: 27,
      nome: "Trio Pulseiras Personalizadas ✨",
      descricao: "feitas com carinho e significado, para unir histórias, laços e momentos especiais!",
      precoBase: 16,
      img: pulseiraTrio,
      temModal: true,
      especificacoes: [
        { nome: "Com nome?", valor: "Sim", afetaPreco: true, precoExtra: 6 },
        { nome: "Com nome?", valor: "Não", afetaPreco: false },
        { nome: "Regulável?", valor: "Sim", afetaPreco: true, precoExtra: 8 },
        { nome: "Regulável?", valor: "Não", afetaPreco: false },
      ],
    },
    {
      id: 28,
      nome: "Terço Personalizado 🙏",
      descricao: "Feito com fé, carinho e significado, unindo devoção, delicadeza e identidade em cada detalhe",
      precoBase: 30,
      img: terco,
      temModal: true,
      especificacoes: [
        { nome: "Com nome?", valor: "Sim", afetaPreco: true, precoExtra: 5 },
        { nome: "Com nome?", valor: "Não", afetaPreco: false },
      ],
    },
    {
      id: 29,
      nome: "Catavento de Crochê Grande 🍃",
      descricao: "Leve e encantador, feito para girar cores, alegria e delicadeza em qualquer cantinho",
      precoBase: 25,
      img: cataventoG,
      temModal: false,
    },
    {
      id: 30,
      nome: "Catavento de Crochê Pequeno 🍃",
      descricao: "Leve e encantador, feito para girar cores, alegria e delicadeza em qualquer cantinho",
      precoBase: 20,
      img: cataventoP,
      temModal: false,
    },
  
    {
      id: 31,
      nome: "Bolsa Estrela 👜",
      descricao: "Feita à mão com carinho, unindo charme, aconchego e estilo em cada ponto",
      precoBase: 55,
      img: bolsaEstrela,
      temModal: false,
    },
    {
      id: 32,
      nome: "Polaroids (min 6 unidades) 📸",
      descricao: "Feitas para eternizar momentos, sentimentos e memórias do seu jeito",
      precoBase: 1.25,
      img: polaroids,
      temModal: false,
    },
    {
      id: 33,
      nome: "Dez Motivos para te Amar 📸",
      descricao: "Cada uma com um motivo diferente para te amar, feitas para guardar lembranças e sentimentos especiais",
      precoBase: 13,
      img: dezMotivos,
      temModal: false,
    },
  ],
};


export default function App() {

  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);
  const [modalState, setModalState] = useState<ModalState | null>(null);
  const [quantidade, setQuantidade] = useState<number>(1);
  const [especificacoesSelecionadas, setEspecificacoesSelecionadas] = useState<
    Especificacao[]
  >([]);
  const [carrinhoAnimado, setCarrinhoAnimado] = useState<boolean>(false);
  const [erroEspecificacoes, setErroEspecificacoes] = useState<string[]>([]);
  const [textoParaCopiar, setTextoParaCopiar] = useState<string>("");
  const [copiado, setCopiado] = useState<boolean>(false);
  
  const [quantidadeChocolates, setQuantidadeChocolates] = useState<number>(0);
  const [quantidadePolaroids, setQuantidadePolaroids] = useState<number>(0);
  const [quantidadeFloresCetim, setQuantidadeFloresCetim] = useState<number>(0);


  const calcularTotal = () => {
    return carrinho.reduce((acc, item) => acc + (item.precoFinal * item.quantidade), 0);
  };

  const total = calcularTotal();
  const quantidadeTotal = carrinho.reduce((acc, item) => acc + item.quantidade, 0);


  useEffect(() => {
    if (carrinho.length > 0) {
      setCarrinhoAnimado(true);
      const timer = setTimeout(() => setCarrinhoAnimado(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [carrinho.length]);


  useEffect(() => {
    if (!modalState?.produto.especificacoes) {
      setErroEspecificacoes([]);
      return;
    }

    const tiposEspecificacoes = Array.from(
      new Set(modalState.produto.especificacoes.map((e) => e.nome))
    );
    const erros: string[] = [];

    tiposEspecificacoes.forEach((nome) => {
      const temSelecao = especificacoesSelecionadas.some(
        (esp) => esp.nome === nome
      );
      if (!temSelecao) {
        erros.push(nome);
      }
    });

    setErroEspecificacoes(erros);
  }, [especificacoesSelecionadas, modalState]);


  const verificarPolaroidsMinimas = (): boolean => {
    const itemPolaroids = carrinho.find(item => item.id === 32);
    
    if (itemPolaroids) {
      return itemPolaroids.quantidade >= 6;
    }
    
   
    return true;
  };


  useEffect(() => {
    if (carrinho.length === 0) {
      setTextoParaCopiar("");
      return;
    }

    let texto = `🎀 *PEDIDO - CRIANDO LAÇOS* 🎀\n\n`;
    texto += `Olá! Gostaria de fazer o seguinte pedido:\n\n`;

    carrinho.forEach((item, index) => {
      texto += `*${index + 1}. ${item.quantidade}x ${item.nome}*\n`;
      texto += `   - ${item.descricao}\n`;

      if (item.especificacoesSelecionadas.length > 0) {
        item.especificacoesSelecionadas.forEach((esp) => {
          texto += `   • ${esp.nome}: ${esp.valor}`;
          if (esp.afetaPreco && esp.precoExtra) {
            texto += ` (+R$ ${esp.precoExtra.toFixed(2)})`;
          }
          texto += `\n`;
        });
      }

      if (item.quantidadesExtras) {
        const extras = item.quantidadesExtras;
        if (extras.chocolates > 0) {
          texto += `   • Chocolates: ${extras.chocolates} unidades (+R$ ${(extras.chocolates * 4).toFixed(2)})\n`;
        }
        if (extras.polaroids > 0) {
          // As 6 primeiras polaroids custam R$7,20
          const precoBasePolaroids = 7.2;
          const polaroidsExtras = Math.max(0, extras.polaroids - 6);
          const precoTotalPolaroids = precoBasePolaroids + (polaroidsExtras * 1.2);
          texto += `   • Polaroids: ${extras.polaroids} unidades (+R$ ${precoTotalPolaroids.toFixed(2)})\n`;
        }
        if (extras.floresCetim > 0) {
          texto += `   • Flores de Cetim: ${extras.floresCetim} unidades (+R$ ${(extras.floresCetim * 3.5).toFixed(2)})\n`;
        }
      }

      texto += `   • 💰 Valor unitário: R$ ${item.precoFinal.toFixed(2)}\n`;
      texto += `   • 📊 Subtotal: R$ ${(
        item.precoFinal * item.quantidade
      ).toFixed(2)}\n\n`;
    });

    texto += `✨ *TOTAL DO PEDIDO: R$ ${total.toFixed(2)}* ✨\n\n`;
    texto += `---\n`;

    setTextoParaCopiar(texto);
  }, [carrinho, total]);


  const calcularPrecoTotal = (
    precoBase: number,
    especificacoes: Especificacao[],
    quantidadesExtras?: QuantidadesExtras
  ) => {
    let total = precoBase;


    especificacoes.forEach((esp) => {
      if (esp.afetaPreco && esp.precoExtra) {
        total += esp.precoExtra;
      }
    });

  
    if (quantidadesExtras) {
      total += quantidadesExtras.chocolates * 4;
      
     
      if (quantidadesExtras.polaroids > 0) {
        const precoBasePolaroids = 7.2; 
        const polaroidsExtras = Math.max(0, quantidadesExtras.polaroids - 6);
        total += precoBasePolaroids + (polaroidsExtras * 1.2);
      }
      
     
      total += quantidadesExtras.floresCetim * 3.5;
    }

    return total;
  };

  const gerarIdentificadorUnico = (
    produtoId: number,
    especificacoes: Especificacao[],
    quantidadesExtras?: QuantidadesExtras
  ) => {
    const especificacoesString = especificacoes
      .map((esp) => `${esp.nome}:${esp.valor}`)
      .sort()
      .join("|");
    
    const extrasString = quantidadesExtras 
      ? `-${quantidadesExtras.chocolates}-${quantidadesExtras.polaroids}-${quantidadesExtras.floresCetim}`
      : "";

    return `${produtoId}-${especificacoesString}${extrasString}`;
  };


  const handleAdicionarAoCarrinhoComEstado = (estadoModal: ModalState) => {
    const precoTotal = calcularPrecoTotal(
      estadoModal.produto.precoBase,
      estadoModal.especificacoesSelecionadas,
      estadoModal.quantidadesExtras
    );

    const identificadorUnico = gerarIdentificadorUnico(
      estadoModal.produto.id,
      estadoModal.especificacoesSelecionadas,
      estadoModal.quantidadesExtras
    );

    setCarrinho((prev) => {
      const itemExistenteIndex = prev.findIndex(
        (item) => item.identificadorUnico === identificadorUnico
      );

      if (itemExistenteIndex !== -1) {
        const novoCarrinho = [...prev];
        novoCarrinho[itemExistenteIndex] = {
          ...novoCarrinho[itemExistenteIndex],
          quantidade:
            novoCarrinho[itemExistenteIndex].quantidade + estadoModal.quantidade,
        };
        return novoCarrinho;
      }

      return [
        ...prev,
        {
          id: estadoModal.produto.id,
          nome: estadoModal.produto.nome,
          descricao: estadoModal.produto.descricao,
          precoFinal: precoTotal,
          img: estadoModal.produto.img,
          quantidade: estadoModal.quantidade,
          especificacoesSelecionadas: estadoModal.especificacoesSelecionadas,
          quantidadesExtras: estadoModal.quantidadesExtras,
          identificadorUnico,
        },
      ];
    });

    handleFecharModal();
  };


  const handleAbrirModal = (produto: Produto) => {
    const especificacoesPadrao = produto.especificacoes
      ? produto.especificacoes
          .filter((esp, index, array) => index === array.findIndex((e) => e.nome === esp.nome))
          .map((esp) => ({ ...esp }))
      : [];


    if (produto.id === 100) { 
      setQuantidadeChocolates(0);
      setQuantidadePolaroids(0);
      setQuantidadeFloresCetim(0);
    }

    setModalState({
      produto,
      quantidade: 1,
      especificacoesSelecionadas: especificacoesPadrao,
      quantidadesExtras: produto.id === 100 ? { chocolates: 0, polaroids: 0, floresCetim: 0 } : undefined,
    });
    setEspecificacoesSelecionadas(especificacoesPadrao);
    setQuantidade(1);
    setErroEspecificacoes([]);
  };

  const handleFecharModal = () => {
    setModalState(null);
    setEspecificacoesSelecionadas([]);
    setQuantidade(1);
    setErroEspecificacoes([]);
    setQuantidadeChocolates(0);
    setQuantidadePolaroids(0);
    setQuantidadeFloresCetim(0);
  };

  const handleAtualizarEspecificacao = (nome: string, valor: string) => {
    if (!modalState?.produto.especificacoes) return;

    setEspecificacoesSelecionadas((prev) => {
      const novasEspecificacoes = prev.filter((esp) => esp.nome !== nome);
      const especificacao = modalState.produto.especificacoes!.find(
        (esp) => esp.nome === nome && esp.valor === valor
      );

      return especificacao
        ? [...novasEspecificacoes, especificacao]
        : novasEspecificacoes;
    });
  };

  const handleAdicionarDiretoAoCarrinho = (produto: Produto) => {
    const identificadorUnico = `${produto.id}-padrao`;

    setCarrinho((prev) => {
      const itemExistenteIndex = prev.findIndex(
        (item) => item.identificadorUnico === identificadorUnico
      );

      if (itemExistenteIndex !== -1) {
        const novoCarrinho = [...prev];
        novoCarrinho[itemExistenteIndex] = {
          ...novoCarrinho[itemExistenteIndex],
          quantidade: novoCarrinho[itemExistenteIndex].quantidade + 1,
        };
        return novoCarrinho;
      }

      return [
        ...prev,
        {
          id: produto.id,
          nome: produto.nome,
          descricao: produto.descricao,
          precoFinal: produto.precoBase,
          img: produto.img,
          quantidade: 1,
          especificacoesSelecionadas: [],
          identificadorUnico,
        },
      ];
    });
  };

  const handleDiminuirQuantidade = (identificadorUnico: string) => {
    setCarrinho((prev) =>
      prev
        .map((item) =>
          item.identificadorUnico === identificadorUnico
            ? { ...item, quantidade: item.quantidade - 1 }
            : item
        )
        .filter((item) => item.quantidade > 0)
    );
  };

  const handleAumentarQuantidade = (identificadorUnico: string) => {
    setCarrinho((prev) =>
      prev.map((item) =>
        item.identificadorUnico === identificadorUnico
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      )
    );
  };

  const handleRemoverDoCarrinho = (identificadorUnico: string) => {
    setCarrinho((prev) =>
      prev.filter((item) => item.identificadorUnico !== identificadorUnico)
    );
  };

  const handleLimparCarrinho = () => {
    setCarrinho([]);
  };

  const handleCopiarTexto = async () => {
    const podeCopiar = verificarPolaroidsMinimas();
    
    if (!podeCopiar) {
      alert("⚠️ A quantidade mínima de Polaroids é 6 unidades. Por favor, adicione mais Polaroids antes de copiar o pedido.");
      return;
    }

    try {
      await navigator.clipboard.writeText(textoParaCopiar);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar texto:", err);
    }
  };

 
  const handleDiminuirQuantidadeModal = () => {
    setQuantidade((prev) => Math.max(1, prev - 1));
  };

  const handleAumentarQuantidadeModal = () => {
    setQuantidade((prev) => prev + 1);
  };

  const handleConfirmarModal = () => {
    if (!modalState) return;

    if (erroEspecificacoes.length > 0) {
      alert(
        `Por favor, selecione todas as especificações:\n${erroEspecificacoes.join(
          ", "
        )}`
      );
      return;
    }

    if (modalState.produto.id === 100 && quantidadePolaroids > 0 && quantidadePolaroids < 6) {
      alert("A quantidade mínima de polaroids é 6 unidades.");
      return;
    }

    const updatedModalState = {
      ...modalState,
      quantidade,
      especificacoesSelecionadas,
      quantidadesExtras: modalState.produto.id === 100 ? {
        chocolates: quantidadeChocolates,
        polaroids: quantidadePolaroids,
        floresCetim: quantidadeFloresCetim
      } : undefined,
    };

    handleAdicionarAoCarrinhoComEstado(updatedModalState);
  };


  const calcularResumoModal = () => {
    if (!modalState) return 0;

    const precoBase = modalState.produto.precoBase;
    const extrasEspecificacoes = especificacoesSelecionadas.reduce(
      (acc, esp) =>
        acc + (esp.afetaPreco && esp.precoExtra ? esp.precoExtra : 0),
      0
    );

    let total = precoBase + extrasEspecificacoes;


    if (modalState.produto.id === 100) {
      total += quantidadeChocolates * 4;
      
 
      if (quantidadePolaroids > 0) {
        const precoBasePolaroids = 7.2; 
        const polaroidsExtras = Math.max(0, quantidadePolaroids - 6);
        total += precoBasePolaroids + (polaroidsExtras * 1.2);
      }
      

      total += quantidadeFloresCetim * 3.5;
    }

    return total * quantidade;
  };


  const renderGrid = (produtos: Produto[]) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
      {produtos.map((item) => (
        <Card
          key={item.id}
          className="rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border h-fill flex flex-col bg-[#FBF4E9]"
        >
          <CardHeader className="p-2">
            <div className="relative overflow-hidden rounded-md">
              <img
                src={item.img}
                className="w-full h-60 md:h-60 object-cover hover:scale-105 transition-transform duration-300"
                alt={item.nome}
                loading="lazy"
              />
            </div>
          </CardHeader>
          <CardContent className="p-2 flex-1">
            <p className="text-sm font-semibold text-gray-800 line-clamp-1">
              {item.nome}
            </p>
            <p className="text-xs text-gray-600 line-clamp-2 mt-1">
              {item.descricao}
            </p>
            {item.temModal && item.especificacoes && (
              <p className="text-xs text-gray-500">
                {item.especificacoes.length} personalizações
              </p>
            )}
          </CardContent>
          <CardFooter className="flex flex-col md:flex-row justify-between items-start md:items-center p-2 pt-0 gap-2">
            <span className="font-bold text-base text-[#aa5b64]">
              R$ {item.precoBase.toFixed(2).replace(".", ",")}
            </span>
            <Button
              size="sm"
              className={`w-full md:w-auto text-xs ${
                item.temModal
                  ? "bg-[#302b2b] hover:bg-[#353535]"
                  : "bg-[#aa5b64] hover:bg-[#8a4a54]"
              }`}
              onClick={() =>
                item.temModal
                  ? handleAbrirModal(item)
                  : handleAdicionarDiretoAoCarrinho(item)
              }
            >
              {item.temModal ? "Personalizar" : "Adicionar"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );

  const renderEspecificacoesModal = () => {
    if (!modalState?.produto.especificacoes) return null;

    const isCestaPersonalizada = modalState.produto.id === 100;

    return Array.from(
      new Set(modalState.produto.especificacoes.map((e) => e.nome))
    ).map((nome) => {
      const opcoesEspecificas = modalState.produto.especificacoes!.filter(
        (e) => e.nome === nome
      );
      const selecionada = especificacoesSelecionadas.find(
        (esp) => esp.nome === nome
      );
      const temErro = erroEspecificacoes.includes(nome);

      return (
        <div key={nome} className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-700">{nome}</p>
            {temErro && (
              <span className="text-xs text-amber-600">
                ⚠️ Selecione uma opção
              </span>
            )}
          </div>
          <div className="grid grid-cols-1 gap-2">
            {opcoesEspecificas.map((opcao) => {
              const isSelecionada = selecionada?.valor === opcao.valor;
              return (
                <div key={`${nome}-${opcao.valor}`}>
                  <button
                    type="button"
                    onClick={() => handleAtualizarEspecificacao(nome, opcao.valor)}
                    className={`w-full p-3 rounded-lg border text-left transition-all ${
                      isSelecionada
                        ? "border-[#aa5b64] bg-[#fdf2f3]"
                        : temErro
                        ? "border-amber-300 hover:border-amber-400 hover:bg-amber-50"
                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span
                        className={
                          isSelecionada
                            ? "font-medium text-[#aa5b64]"
                            : "text-gray-700"
                        }
                      >
                        {opcao.valor}
                      </span>
                      {opcao.afetaPreco && opcao.precoExtra && (
                        <span className="text-sm font-medium text-green-600">
                          + R$ {opcao.precoExtra.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </button>
                  
               
                  {isCestaPersonalizada && isSelecionada && opcao.inputQuantidade && (
                    <div className="mt-2 ml-4">
                      <Label htmlFor={`input-${nome}`} className="text-sm text-gray-600 mb-1 block">
                        Quantidade:
                      </Label>
                      <Input
                        id={`input-${nome}`}
                        type="number"
                        min="0"
                        value={
                          nome === "Chocolates?" ? quantidadeChocolates :
                          nome === "Polaroids?" ? quantidadePolaroids :
                          nome === "Flores de Cetim?" ? quantidadeFloresCetim : 0
                        }
                        onChange={(e) => {
                          const value = parseInt(e.target.value) || 0;
                          if (nome === "Chocolates?") setQuantidadeChocolates(value);
                          else if (nome === "Polaroids?") setQuantidadePolaroids(value);
                          else if (nome === "Flores de Cetim?") setQuantidadeFloresCetim(value);
                        }}
                        className="w-full"
                        placeholder="Digite a quantidade"
                      />
                      {nome === "Polaroids?" && quantidadePolaroids > 0 && quantidadePolaroids < 6 && (
                        <p className="text-xs text-amber-600 mt-1">
                          Mínimo 6 unidades
                        </p>
                      )}
                      <p className="text-xs text-gray-500 mt-1">
                        Preço: {
                          nome === "Chocolates?" ? "R$ 4,00 cada" :
                          nome === "Polaroids?" ? "Primeiras 6: R$ 7,20, extras: R$ 1,20 cada" :
                          nome === "Flores de Cetim?" ? "R$ 3,50 cada" : ""
                        }
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };


  return (
    <div className="p-3 sm:p-4 md:p-6 w-full bg-[#fbf4e9] relative min-h-screen">
      {/* Banner Responsivo */}
      <div className="flex justify-center mb-4 sm:mb-6">
        <img
          src={banner}
          className="max-w-full h-auto rounded-lg"
          alt="Banner CRIAND.LAÇOS"
        />
      </div>

     
      <Sheet>
        <SheetTrigger asChild>
          <Button
            size="icon"
            className={`
              fixed z-50
              top-3 right-3
              sm:top-4 sm:right-4
              bg-black text-white
              w-12 h-12
              sm:w-14 sm:h-14
              rounded-full
              transition-all duration-300
              hover:scale-110
              ${carrinhoAnimado ? "animate-shake" : ""}
              shadow-xl
            `}
          >
            <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
            {quantidadeTotal > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full">
                {quantidadeTotal > 9 ? "9+" : quantidadeTotal}
              </span>
            )}
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-full sm:w-[380px] md:w-[420px] flex flex-col p-0 h-full"
        >
          <SheetHeader className="p-4 sm:p-6 border-b flex-shrink-0">
            <div className="flex items-center justify-between">
              <SheetTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
                Carrinho
              </SheetTitle>
            </div>
          </SheetHeader>


          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="p-4 sm:p-6">
                {carrinho.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="relative mb-6">
                      <ShoppingCart className="h-20 w-20 sm:h-24 sm:w-24 text-gray-300" />
                      <div className="absolute -top-2 -right-2 w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400" />
                      </div>
                    </div>
                    <p className="text-gray-500 font-medium text-lg mb-2">
                      Carrinho vazio
                    </p>
                    <p className="text-sm text-gray-400 max-w-xs">
                      Adicione produtos personalizados ao seu carrinho
                    </p>
                  </div>
                ) : (
                  <>
                  
                    <div className="space-y-4">
                      {carrinho.map((item) => (
                        <div
                          key={item.identificadorUnico}
                          className="border rounded-lg p-4 bg-white shadow-sm"
                        >
                          <div className="flex gap-4">
                            <div className="flex-shrink-0">
                              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden">
                                <img
                                  src={item.img}
                                  alt={item.nome}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-start mb-1">
                                <h4 className="font-medium text-gray-800 text-sm sm:text-base line-clamp-1">
                                  {item.nome}
                                </h4>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  className="h-7 w-7 -mt-1 -mr-1"
                                  onClick={() =>
                                    handleRemoverDoCarrinho(item.identificadorUnico)
                                  }
                                >
                                  <Trash2 className="h-4 w-4 text-gray-400" />
                                </Button>
                              </div>
                              <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-2">
                                {item.descricao}
                              </p>

                              {item.especificacoesSelecionadas.length > 0 && (
                                <div className="mt-2 space-y-1">
                                  {item.especificacoesSelecionadas.map((esp, idx) => (
                                    <div
                                      key={idx}
                                      className="flex justify-between text-xs sm:text-sm"
                                    >
                                      <span className="text-gray-600">
                                        {esp.nome}:
                                      </span>
                                      <span className="font-medium text-gray-800 ml-2">
                                        {esp.valor}
                                        {esp.afetaPreco && esp.precoExtra && (
                                          <span className="text-green-600 ml-1">
                                            (+R$ {esp.precoExtra.toFixed(2)})
                                          </span>
                                        )}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              )}

                           
                              {item.quantidadesExtras && (
                                <div className="mt-1 space-y-1 pl-2 border-l-2 border-gray-200">
                                  {item.quantidadesExtras.chocolates > 0 && (
                                    <div className="flex justify-between text-xs">
                                      <span className="text-gray-500">Chocolates:</span>
                                      <span className="font-medium">
                                        {item.quantidadesExtras.chocolates} un
                                        <span className="text-green-600 text-xs ml-1">
                                          (+R$ {(item.quantidadesExtras.chocolates * 4).toFixed(2)})
                                        </span>
                                      </span>
                                    </div>
                                  )}
                                  {item.quantidadesExtras.polaroids > 0 && (
                                    <div className="flex justify-between text-xs">
                                      <span className="text-gray-500">Polaroids:</span>
                                      <span className="font-medium">
                                        {item.quantidadesExtras.polaroids} un
                                        {(() => {
                                          const precoBasePolaroids = 7.2;
                                          const polaroidsExtras = Math.max(0, item.quantidadesExtras.polaroids - 6);
                                          const precoTotalPolaroids = precoBasePolaroids + (polaroidsExtras * 1.2);
                                          return (
                                            <span className="text-green-600 text-xs ml-1">
                                              (+R$ {precoTotalPolaroids.toFixed(2)})
                                            </span>
                                          );
                                        })()}
                                      </span>
                                    </div>
                                  )}
                                  {item.quantidadesExtras.floresCetim > 0 && (
                                    <div className="flex justify-between text-xs">
                                      <span className="text-gray-500">Flores de Cetim:</span>
                                      <span className="font-medium">
                                        {item.quantidadesExtras.floresCetim} un
                                        <span className="text-green-600 text-xs ml-1">
                                          (+R$ {(item.quantidadesExtras.floresCetim * 3.5).toFixed(2)})
                                        </span>
                                      </span>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="flex justify-between items-center mt-4 pt-4 border-t">
                            <div className="flex items-center gap-2">
                              <Button
                                size="icon"
                                variant="outline"
                                className="h-8 w-8"
                                onClick={() =>
                                  handleDiminuirQuantidade(item.identificadorUnico)
                                }
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="font-medium w-8 text-center text-base">
                                {item.quantidade}
                              </span>
                              <Button
                                size="icon"
                                variant="outline"
                                className="h-8 w-8"
                                onClick={() =>
                                  handleAumentarQuantidade(item.identificadorUnico)
                                }
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-[#aa5b64] text-base">
                                R${" "}
                                {(item.precoFinal * item.quantidade)
                                  .toFixed(2)
                                  .replace(".", ",")}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </ScrollArea>
          </div>

        
          {carrinho.length > 0 && (
            <div className="border-t p-4 sm:p-6 bg-white flex-shrink-0">
              {/* Total */}
              <div className="bg-gradient-to-r from-[#fdf2f3] to-[#fef7f8] rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-lg text-gray-800">
                      Total do Pedido
                    </p>
                    <p className="text-sm text-gray-600">
                      Inclui todos os itens
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-2xl text-[#aa5b64]">
                      R$ {total.toFixed(2).replace(".", ",")}
                    </p>
                  </div>
                </div>
              </div>

      
              {(() => {
                const itemPolaroids = carrinho.find(item => item.id === 32);
                const temPolaroidsInsuficientes = itemPolaroids && itemPolaroids.quantidade < 6;
                
                if (temPolaroidsInsuficientes) {
                  return (
                    <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-amber-800 text-sm">
                            ⚠️ Atenção: Polaroids insuficientes
                          </p>
                          <p className="text-xs text-amber-600 mt-1">
                            É necessário ter no mínimo 6 unidades de Polaroids para finalizar o pedido.
                            <br />
                            Atual: {itemPolaroids.quantidade} unidades | Necessário: 6 unidades
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })()}

            
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="w-full h-11"
                    onClick={handleLimparCarrinho}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Limpar
                  </Button>

                  <Button
                    variant="secondary"
                    className="w-full h-11 bg-[#fdf2f3] text-[#aa5b64] hover:bg-[#fce8ea]"
                    onClick={handleCopiarTexto}
                    disabled={(() => {
                      const itemPolaroids = carrinho.find(item => item.id === 32);
                      return itemPolaroids && itemPolaroids.quantidade < 6;
                    })()}
                  >
                    {(() => {
                      const itemPolaroids = carrinho.find(item => item.id === 32);
                      const temPolaroidsInsuficientes = itemPolaroids && itemPolaroids.quantidade < 6;
                      
                      if (temPolaroidsInsuficientes) {
                        return (
                          <>
                            <AlertCircle className="h-4 w-4 mr-2 text-amber-600" />
                            <span className="text-amber-600">Polaroids Insuficientes</span>
                          </>
                        );
                      }
                      
                      return copiado ? (
                        <>
                          <CheckCheck className="h-4 w-4 text-gray-600" />
                          <span className="text-gray-600">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          <span>Copiar</span>
                        </>
                      );
                    })()}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

      <div className="relative mt-4 sm:mt-6">
        <Tabs defaultValue="buques" className="w-full">
          <div className="relative z-0">
            {/* Container das abas acima do conteúdo */}
            <div className="relative z-0">
              <TabsList className="flex bg-transparent p-0 space-x-1 justify-start">
                <TabsTrigger
                  className="px-6 py-3 rounded-t-lg rounded-b-none border border-gray-300 border-b-0 bg-[#aa5b64] text-white data-[state=active]:bg-[#aa5b64] data-[state=active]:shadow-[0_-2px_10px_-5px_rgba(0,0,0,0.3)] data-[state=active]:relative"
                  value="buques"
                >
                  Buquês
                </TabsTrigger>
                <TabsTrigger
                  className="px-6 py-3 rounded-t-lg rounded-b-none border border-gray-300 border-b-0 bg-[#ffc8c9] text-gray-800 data-[state=active]:bg-[#ffc8c9] data-[state=active]:shadow-[0_-2px_10px_-5px_rgba(0,0,0,0.3)] data-[state=active]:relative "
                  value="amigurumi"
                >
                  Amigurumi
                </TabsTrigger>
                <TabsTrigger
                  className="px-6 py-3 rounded-t-lg rounded-b-none border border-gray-300 border-b-0 bg-[#f96e74] text-white data-[state=active]:bg-[#f96e74] data-[state=active]:shadow-[0_-2px_10px_-5px_rgba(0,0,0,0.3)] data-[state=active]:relative "
                  value="outros"
                >
                  Outros
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="shadow-sm relative z-10">
              <TabsContent value="buques" className="mt-0 p-4 md:p-6 bg-[#aa5b64]">
                {renderGrid(PRODUTOS.buques)}
              </TabsContent>
              <TabsContent value="amigurumi" className="mt-0 p-4 md:p-6 bg-[#ffc8c9]" >
                {renderGrid(PRODUTOS.amigurumis)}
              </TabsContent>
              <TabsContent value="outros" className="mt-0 p-4 md:p-6 bg-[#f96e74]">
                {renderGrid(PRODUTOS.outros)}
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>


      <Dialog
        open={!!modalState}
        onOpenChange={(open) => !open && handleFecharModal()}
      >
        <DialogContent className="sm:max-w-md w-[calc(100vw-2rem)] max-h-[85vh] overflow-y-auto p-4 sm:p-6">
          {modalState && modalState.produto.especificacoes && (
            <>
              <DialogHeader className="space-y-2">
                <DialogTitle className="text-[#aa5b64] text-lg sm:text-xl">
                  {modalState.produto.nome}
                </DialogTitle>
                <DialogDescription className="text-gray-600 text-sm sm:text-base">
                  {modalState.produto.descricao}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 sm:space-y-6 py-4">
                <div className="flex justify-center">
                  <div className="w-full max-w-xs sm:max-w-sm">
                    <img
                      src={modalState.produto.img}
                      alt={modalState.produto.nome}
                      className="rounded-lg w-full h-40 sm:h-48 object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="font-medium text-gray-700 text-sm sm:text-base">
                    Quantidade
                  </p>
                  <div className="flex items-center justify-between bg-gray-50 p-3 sm:p-4 rounded-xl">
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8 sm:h-10 sm:w-10"
                      onClick={handleDiminuirQuantidadeModal}
                    >
                      <Minus className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                    <div className="text-center">
                      <span className="font-bold text-2xl sm:text-3xl text-gray-800">
                        {quantidade}
                      </span>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        unidade(s)
                      </p>
                    </div>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8 sm:h-10 sm:w-10"
                      onClick={handleAumentarQuantidadeModal}
                    >
                      <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <p className="font-medium text-gray-700 text-sm sm:text-base">
                    Especificações
                  </p>
                  {renderEspecificacoesModal()}
                </div>


                {/* Resumo */}
                <div className="space-y-2">
                  <p className="font-medium text-gray-700 text-sm sm:text-base">
                    Resumo
                  </p>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg space-y-2">
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-gray-600">Produto base:</span>
                      <span className="font-medium">
                        R$ {modalState.produto.precoBase.toFixed(2)}
                      </span>
                    </div>

                    {especificacoesSelecionadas.map(
                      (esp, idx) =>
                        esp.afetaPreco &&
                        esp.precoExtra && (
                          <div key={idx} className="flex justify-between text-sm">
                            <span className="text-gray-600">
                              {esp.nome}: {esp.valor}
                            </span>
                            <span className="font-medium text-green-600">
                              + R$ {esp.precoExtra.toFixed(2)}
                            </span>
                          </div>
                        )
                    )}

                    {modalState.produto.id === 100 && (
                      <>
                        {quantidadeChocolates > 0 && (
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">
                              Chocolates ({quantidadeChocolates} un):
                            </span>
                            <span className="font-medium text-green-600">
                              + R$ {(quantidadeChocolates * 4).toFixed(2)}
                            </span>
                          </div>
                        )}
                        {quantidadePolaroids > 0 && (
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">
                              Polaroids ({quantidadePolaroids} un):
                            </span>
                            <span className="font-medium text-green-600">
                              + R$ {(() => {
                                const precoBasePolaroids = 7.2;
                                const polaroidsExtras = Math.max(0, quantidadePolaroids - 6);
                                return (precoBasePolaroids + (polaroidsExtras * 1.2)).toFixed(2);
                              })()}
                            </span>
                          </div>
                        )}
                        {quantidadeFloresCetim > 0 && (
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">
                              Flores de Cetim ({quantidadeFloresCetim} un):
                            </span>
                            <span className="font-medium text-green-600">
                              + R$ {(quantidadeFloresCetim * 3.5).toFixed(2)}
                            </span>
                          </div>
                        )}
                      </>
                    )}

                    <div className="flex justify-between items-center pt-3 border-t">
                      <div>
                        <span className="font-bold text-base sm:text-lg text-gray-800">
                          Total ({quantidade}x):
                        </span>
                        <p className="text-xs text-gray-500">
                          Preço unitário: R$ {(calcularResumoModal() / quantidade).toFixed(2)}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-lg sm:text-xl text-[#aa5b64]">
                          R$ {calcularResumoModal().toFixed(2).replace(".", ",")}
                        </span>
                        <p className="text-xs text-gray-500">
                          {quantidade} x R$ {(calcularResumoModal() / quantidade).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 sm:gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 h-10 sm:h-11 text-sm sm:text-base"
                    onClick={handleFecharModal}
                  >
                    Cancelar
                  </Button>
                  <Button
                    className="flex-1 h-10 sm:h-11 bg-[#aa5b64] hover:bg-[#8a4a54] text-white font-semibold text-sm sm:text-base"
                    onClick={handleConfirmarModal}
                    disabled={erroEspecificacoes.length > 0}
                  >
                    Adicionar
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}