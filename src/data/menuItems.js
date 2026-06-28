// Matches the official Laxmi Kantam Vatika banquet menu brochure.
// Each package lists its included sections with the item count per section,
// exactly as specified in the brochure (page 2). The brochure does not
// specify which exact dishes are pre-selected within each count — guests
// choose specific items from the full menu (see pages 3-5) at booking time.

export const menuData = {
  vegPackage1: {
    label: 'Veg Package 1',
    price: 800,
    unit: 'pax',
    sections: [
      { title: 'Welcome Drinks',     count: 2 },
      { title: 'Soup',               count: 1 },
      { title: 'Hi-Tea Counter',     count: 4 },
      { title: 'Live Counter',       count: 1 },
      { title: 'Veg Moving Snacks',  count: 3 },
      { title: 'Bread',              count: 2 },
      { title: 'Rice',               count: 1 },
      { title: 'Dal',                count: 1 },
      { title: 'Veg Main Course',    count: 3 },
      { title: 'Salad/Papad',        count: 3 },
      { title: 'Dahi',               count: 1 },
      { title: 'Chutney',            count: 1 },
      { title: 'Desserts',           count: 3 },
    ],
  },

  vegPackage2: {
    label: 'Veg Package 2',
    price: 900,
    unit: 'pax',
    sections: [
      { title: 'Welcome Drinks',     count: 2 },
      { title: 'Soup',               count: 1 },
      { title: 'Hi-Tea Counter',     count: 5 },
      { title: 'Live Counter',       count: 2 },
      { title: 'Veg Moving Snacks',  count: 3 },
      { title: 'Bread',              count: 3 },
      { title: 'Rice',               count: 1 },
      { title: 'Dal',                count: 1 },
      { title: 'Veg Main Course',    count: 4 },
      { title: 'Salad/Papad',        count: 3 },
      { title: 'Dahi',               count: 2 },
      { title: 'Chutney',            count: 1 },
      { title: 'Desserts',           count: 4 },
    ],
  },

  nonVegPackage1: {
    label: 'Non-Veg Package 1',
    price: 950,
    unit: 'pax',
    sections: [
      { title: 'Welcome Drinks',        count: 2 },
      { title: 'Soup',                  count: 1 },
      { title: 'Hi-Tea Counter',        count: 3 },
      { title: 'Live Counter',          count: 1 },
      { title: 'Veg Moving Snacks',     count: 2 },
      { title: 'Non-Veg Moving Snacks', count: 2 },
      { title: 'Bread',                 count: 2 },
      { title: 'Rice',                  count: 1 },
      { title: 'Dal',                   count: 1 },
      { title: 'Veg Main Course',       count: 2 },
      { title: 'Non-Veg Main Course (Chicken and Fish)', count: 2 },
      { title: 'Salad/Papad',           count: 3 },
      { title: 'Dahi',                  count: 1 },
      { title: 'Chutney',               count: 1 },
      { title: 'Desserts',              count: 3 },
    ],
  },

  nonVegPackage2: {
    label: 'Non-Veg Package 2',
    price: 1050,
    unit: 'pax',
    sections: [
      { title: 'Welcome Drinks',        count: 2 },
      { title: 'Soup',                  count: 1 },
      { title: 'Hi-Tea Counter',        count: 4 },
      { title: 'Live Counter',          count: 2 },
      { title: 'Veg Moving Snacks',     count: 3 },
      { title: 'Non-Veg Moving Snacks', count: 2 },
      { title: 'Bread',                 count: 3 },
      { title: 'Rice',                  count: 1 },
      { title: 'Dal',                   count: 1 },
      { title: 'Veg Main Course',       count: 2 },
      { title: 'Non-Veg Main Course (Mutton and Fish)', count: 2 },
      { title: 'Salad/Papad',           count: 3 },
      { title: 'Dahi',                  count: 2 },
      { title: 'Chutney',               count: 1 },
      { title: 'Desserts',              count: 4 },
    ],
  },
}

// Full available dish list per section, from the brochure's detailed pages.
// Useful for an "all available items" reference view, separate from the
// per-package summaries above.
export const fullMenuSections = {
  welcomeDrinks: {
    title: 'Welcome Drinks',
    items: ['Jeera Pani', 'Assorted Soft Drinks', 'Aam Ka Panna', 'Soda Water Sweet', 'Fruit Punch', 'Blue Lagoon', 'Coffee', 'Tea'],
  },
  soup: {
    title: 'Soup',
    items: ['Cream of Tomato Soup', 'Veg. Manchow Soup', 'Veg. Hot & Sour Veg. Soup', 'Veg. Sweet Corn Soup', 'Veg. Lemon Coriander Soup', 'Tomato Sorba'],
  },
  hiTea: {
    title: 'Hi-Tea',
    items: ['Veg Chowmein', 'Veg Manchurian', 'Litti Chokha', 'Golgappa', 'Dahi Vada', 'Pasta', 'Paow Bhaji', 'Moong Dal Chilla', 'Mini Dosa', 'Tikki Chaat', 'Papadi Chaat'],
  },
  liveCounter: {
    title: 'Live Counter',
    items: ['Veg Dim Sum', 'Chicken Dim Sum', 'Tawa Garden', 'Idli Sambhar', 'Bada Sambhar', 'Veg Chilla'],
  },
  movingSnacksVeg: {
    title: 'Moving Snacks Veg',
    items: ['Paneer Goli', 'Corn Cheese Bowl', 'Hara Bhara Kabab', 'Cheese P.A. Stick', 'Veg Lolly Pop', 'Chilly Paneer Dry', 'Baby Corn Chilly Dry', 'Veg Spring Roll', 'Chinese Sigar', 'Dahi Kabab', 'Paneer Tikka', 'Paneer Hariyali Tikka', 'Paneer Kali Mirch Tikka', 'Paneer Methi Tikka', 'Veg Seekh Kabab', 'Chilly Potato', 'Honey Chilly Potato', 'Potato Chatapata Chaat', 'Paneer 65'],
  },
  movingSnacksNonVeg: {
    title: 'Moving Snacks Non Veg',
    items: ['Chilly Chicken Dry B/L', 'Fish Finger', 'Chicken Tikka', 'Chicken Hariyali Tikka', 'Tawa Chicken B/L', 'Chicken Malai Kabab', 'Chicken Seekh Kabab', 'Chilly Chicken Dry Bone', 'Chicken Pakoda', 'Chicken Kali Mich Kabab', 'Chicken Cheese Bowl', 'Corn Chicken Cheese Bowl', 'Chicken Methi Kabab B/L', 'Tandoori Chilly Dry', 'Fish Tikka', 'Fish Chilly Fry', 'Chicken 65'],
  },
  mainCourseVeg: {
    title: 'Main Course Veg',
    items: ['Mix Vegetable', 'Dum Aloo Kashmiri', 'Dum Aloo Bhojpuri', 'Aloo Parwal Masala Dum (S)', 'Aloo Gobhi Masala Dum (S)', 'Mushroom Mutter', 'Corn Palak', 'Paneer Butter Masala', 'Paneer Do Pyaza', 'Paneer Kadahi', 'Veg Kofta', 'Paneer Handi', 'Palak Paneer', 'Paneer Masala', 'Paneer Pasanda', 'Paneer Diwani', 'Malai Kofta', 'Kathal Kofta', 'Aloo Kathal Dum'],
  },
  mainCourseNonVeg: {
    title: 'Main Course Non Veg',
    items: ['Dehati Chicken Curry', 'Chicken Do Pyaza', 'Chicken Kadhai', 'Chicken Butter Masala', 'Chicken Handi', 'Chicken Tikka Butter Masala', 'Chicken Diwani', 'Palak Chicken', 'Chicken Kassa', 'Chicken Isttu', 'Mutton Curry', 'Mutton Rogan Josh', 'Mutton Kadhai', 'Palak Mutton', 'Mutton Handi', 'Rehu Fish Fry', 'Fish Amritsari', 'Rehu Fish Curry'],
  },
  bread: {
    title: 'Bread',
    items: ['Tandoori Roti', 'Butter Naan', 'Stuff Naan', 'Lachha Paratha', 'Mini Kulcha', 'Puri', 'Palak Puri', 'Hing Kachori', 'Methi Paratha'],
  },
  rice: {
    title: 'Rice',
    items: ['Plain Basmati Rice', 'Veg Pulao', 'Mutter Pulao', 'Jeera Rice', 'Navratan Pulao', 'Veg Biryani', 'Veg Fried Rice', 'Paneer Biryani', 'Veg Hydrabadi Biryani'],
  },
  dal: {
    title: 'Dal',
    items: ['Chana Dal Tadka', 'Chana Dal Makhana', 'Dal Makhani Kali Dal', 'Dal Hariyali', 'Dal Trriangi'],
  },
  saladPapad: {
    title: 'Salad/Papad',
    items: ['Green Salad', 'Sprout Salad', 'Potato Chaat', 'Corn Salad', 'Onion Salad', 'Peanut Salad', 'Fry Papad', 'Rosted Papad'],
  },
  dahi: {
    title: 'Dahi',
    items: ['Mix Veg Raita', 'Dahi Vada', 'Bundi Raita', 'Pine Apple Raita', 'Cucumber Raita', 'Kaddu Raita'],
  },
  chutney: {
    title: 'Chutney',
    items: ['Navratan Chutney', 'Imli Chutney', 'Green Chutney', 'Makhana Chutney', 'Papaya Jelly'],
  },
  desserts: {
    title: 'Desserts',
    items: ['Gulab Jamun', 'Rasgulla', 'Rajbhog', 'Rasmalai', 'Gajar Ka Halwa', 'Moong Dal Halwa', 'Imrati with Rabri', 'Assorted Ice Cream'],
  },
}

// Optional counter/menu add-ons guests can request for an extra charge.
export const addOnCounters = [
  'Kesharia Milk', 'Paan Counter', 'Mocktail Counter', 'Mix Fruit Counter',
  'Kesar Kulfi', 'Kesar Faluda', 'Magic Ice Cream Counter',
  'Chocolate Fountain', 'Chana Chur Moving with Singer',
]

export const addOnMenuItems = [
  { label: 'Welcome Drinks',         price: 20 },
  { label: 'Desserts',               price: 30 },
  { label: 'Veg Moving Snack',       price: 35 },
  { label: 'Non Veg Moving Snacks',  price: 70 },
  { label: 'Hi-Tea Counter',         price: 80 },
  { label: 'Veg Main Course',        price: 100 },
  { label: 'Live Counter',           price: 100 },
  { label: 'Non Veg Main Course',    price: 150 },
]