
import React from 'react'
import * as Icon from 'phosphor-react'

const sizeIcon = 27
const classIcon = ""

export const categoryIcons = [
  { name: "Plus", icon: <Icon.Plus /> },
  { name: "DotsThreeVertical", icon: <Icon.DotsThreeVertical /> },
  { name: "AddressBook", icon: <Icon.DotsThreeVertical /> },
  { name: "Archive", icon: <Icon.Archive size={ sizeIcon } className={ classIcon } /> },
  { name: "Archive", icon: <Icon.Archive /> },
  { name: "Asterisk", icon: <Icon.Asterisk size={ sizeIcon } className={ classIcon } /> },
  { name: "Book", icon: <Icon.Book /> },
  { name: "Books", icon: <Icon.Books /> },
  { name: "BookOpen", icon: <Icon.BookOpen /> },
  { name: "BoundingBox", icon: <Icon.BoundingBox /> },
  { name: "Bus", icon: <Icon.Bus /> },
  { name: "CalendarCheck", icon: <Icon.CalendarCheck /> },
  { name: "Car", icon: <Icon.Car /> },
  { name: "ChalkboardTeacher", icon: <Icon.ChalkboardTeacher /> },
  { name: "ChatCircleText", icon: <Icon.ChatCircleText /> },
  { name: "Clock", icon: <Icon.Clock /> },
  { name: "ClockClockwise", icon: <Icon.ClockClockwise /> },
  { name: "Command", icon: <Icon.Command /> },
  { name: "Cpu", icon: <Icon.Cpu /> },
  { name: "CurrencyDollar", icon: <Icon.CurrencyDollar /> },
  { name: "DesktopTower", icon: <Icon.DesktopTower /> },
  { name: "Database", icon: <Icon.Database /> },
  { name: "FadersHorizontal", icon: <Icon.FadersHorizontal /> },
  { name: "Eye", icon: <Icon.Eye /> },
  { name: "File", icon: <Icon.File /> },
  { name: "FolderUser", icon: <Icon.FolderUser /> },
  { name: "ForkKnife", icon: <Icon.ForkKnife /> },
  { name: "ForkKnife", icon: <Icon.ForkKnife /> },
  { name: "Funnel", icon: <Icon.Funnel /> },
  { name: "Gear", icon: <Icon.Gear /> },
  { name: "GraduationCap", icon: <Icon.GraduationCap /> },
  { name: "Hamburger", icon: <Icon.Hamburger /> },
  { name: "HourglassHigh", icon: <Icon.HourglassHigh /> },
  { name: "IdentificationCard", icon: <Icon.IdentificationCard /> },
  { name: "Person", icon: <Icon.Person /> },
  { name: "PersonSimple", icon: <Icon.PersonSimple /> },
  { name: "PencilLine", icon: <Icon.PencilLine /> },
  { name: "WifiHigh", icon: <Icon.WifiHigh /> },
  { name: "Rss", icon: <Icon.Rss /> },
  { name: "User", icon: <Icon.User /> },
  { name: "Wrench", icon: <Icon.Wrench /> },
]


export const categoryModel = [
  {
  id: "00",
    titleCategory: "Outros",
    icon: categoryIcons[3].icon,
    link: "/servicebook/:titleCategory/:titleSubcategory",
  description: "Quando um servi??o ?? criado mas n??o se enquadra em nenhuma das outras categorias, essa categoria ser?? atribu??da.",
  },
  {
  id: "01",
    titleCategory: "NTI",
    icon: categoryIcons[5].icon,
    link: "/servicebook/:titleCategory/:titleSubcategory",
  description: "Quando um servi??o ?? criado mas n??o se enquadra em nenhuma das outras categorias, essa categoria ser?? atribu??da.",
  },
  
];


export const subcategoryModel = [
  {
  id: "02",
  titleSubcategory: "Redes",
  description: "",
  category: categoryModel[0],
  icon: categoryIcons[3].icon,
  }
];


export const serviceModel = [ 
  {
    id: "005",
    category: categoryModel[0],
    subcategory: subcategoryModel[0],
    title: "titulo do servi??o clicado na lista de subcategorias",
    patrimonio: "opcional mas informado pelo usu??rio se precisa e de qual tipo",
    description:
    "Infelizmente n??o d?? pra gente ganhar todas, mas perder todas aparentemente d?? sim.",
  applicantsName: "select m??ltiplo pra dizer quem (aluno, professor, t??cnico) pode solicitar o servi??o",
  publicoAlvo: "informado pelo usu??rio",
  tempoDeEspera: "input",

},
  {
  id: "02456",
  category: categoryModel[0],
  subcategory: subcategoryModel[0],
  title: "titulo do servi??o 2",
    patrimonio: "opcional mas informado pelo usu??rio se precisa e de qual tipo",
    description:
    "Infelizmente n??o d?? pra gente ganhar todas, mas perder todas aparentemente d?? sim.",
  applicantsName: "select m??ltiplo pra dizer quem (aluno, professor, t??cnico) pode solicitar o servi??o",
  publicoAlvo: "informado pelo usu??rio",
  tempoDeEspera: "input",

},

];

export const serviceOrderModel = [
  {
    id: "service01",
    serviceLocal: "Bloco A",
    description:
      "Infelizmente n??o d?? pra gente ganhar todas, mas perder todas aparentemente d?? sim.",
    serviceLetter: serviceModel[0],
    patrimonio: "se obrigatorio (verificado em serviceLetterModel[0].patrimonio (booleano) ent??o ser?? exibido o input para adicionar arquivo)",
  },
  {
    id: "service02",
    serviceLocal: "Bloco C",
    description:
      "Infelizmente n??o d?? pra gente ganhar todas, mas perder todas aparentemente d?? sim.",
    serviceLetter: serviceModel[1],
    patrimonio: "se obrigatorio (verificado em serviceLetterModel[0].patrimonio (booleano) ent??o ser?? exibido o input para adicionar arquivo)",
  },
];