export interface Restaurant {
  name: string;
  image: string;
  url: string;
  map: {
    address: string;
    lat: number;
    title: string;
    url: string;
    lng: number;
    zoom: number;
  } | null;
  work_time: string;
  dishes: Dish[];
  total: number | null;
}

interface Dish {
  name: string;
  price: number | null;
}
