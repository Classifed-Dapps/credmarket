type Links = {
  name: string;
  id: number;
};
interface Footer {
  title: string;
  id: number;
  links: Links[];
}
type Views = {
  id: number;
  price: number;
  totalImage: number;
  productName: string;
  date: string;
  profilePhoto?: string;
  ticked: boolean;
  profileName: string;
  location: string;
  photo?: string;
  favorite: boolean;
};
type Product = {
  id: number;
  description: string;
  date: string;
  price: number;
  condition: string;
  material: string;
  conditions: string;
  age: string;
  dimensions: string;
  weight: string;
  color: string;
  images: string[];
};
type UserMessage = {
  name: string;
  content: string;
  time: string;
  newMessage: number | null;
  photo: string;
  id: number;
};
type Chat = {
  message: string;
  time: string;
  seen: boolean;
  id: number;
  status: string;
};
interface Tab {
  id: number;
  route?: string;
  image: string;
  label: string;
}
interface Tabs extends Tab {
  value: string;
}
