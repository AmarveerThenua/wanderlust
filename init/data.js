const sampleListings = [
  {
    _id: '683af1aaf30a7f9e9aa3bb98',
    title: 'New Villa',
    description: 'Awesome',
    image: {
      url: 'https://res.cloudinary.com/dfcbqc90g/image/upload/v1748693417/wanderlust_DEV/qgyzxefsnhjgjqb72acp.jpg',
      filename: 'wanderlust_DEV/qgyzxefsnhjgjqb72acp'
    },
    price: 4000,
    location: 'New Delhi',
    country: 'India',
    reviews: [],
    owner: '683884b8a5148f7ee1959a93',
    __v: 0
  },
  {
    _id: '683af1aaf30a7f9e9aa3bb99',
    title: 'Beachside Bungalow',
    description: 'Relaxing place near the sea',
    image: {
      url: 'https://res.cloudinary.com/dfcbqc90g/image/upload/v1748693417/wanderlust_DEV/qgyzxefsnhjgjqb72acp.jpg',
      filename: 'wanderlust_DEV/qgyzxefsnhjgjqb72acp'
    },
    price: 3500,
    location: 'Goa',
    country: 'India',
    reviews: [],
    owner: '683884b8a5148f7ee1959a93',
    __v: 0
  },
  {
    _id: '683af1aaf30a7f9e9aa3bb9a',
    title: 'Mountain Cabin',
    description: 'Cozy cabin in the hills',
    image: {
      url: 'https://res.cloudinary.com/dfcbqc90g/image/upload/v1748693417/wanderlust_DEV/qgyzxefsnhjgjqb72acp.jpg',
      filename: 'wanderlust_DEV/qgyzxefsnhjgjqb72acp'
    },
    price: 2700,
    location: 'Manali',
    country: 'India',
    reviews: [],
    owner: '683884b8a5148f7ee1959a93',
    __v: 0
  },
  {
    _id: '683af1aaf30a7f9e9aa3bb9b',
    title: 'City Apartment',
    description: 'Modern apartment in the city center',
    image: {
      url: 'https://res.cloudinary.com/dfcbqc90g/image/upload/v1748693417/wanderlust_DEV/qgyzxefsnhjgjqb72acp.jpg',
      filename: 'wanderlust_DEV/qgyzxefsnhjgjqb72acp'
    },
    price: 3200,
    location: 'Mumbai',
    country: 'India',
    reviews: [],
    owner: '683884b8a5148f7ee1959a93',
    __v: 0
  },
  {
    _id: '683af1aaf30a7f9e9aa3bb9c',
    title: 'Country House',
    description: 'Peaceful countryside retreat',
    image: {
      url: 'https://res.cloudinary.com/dfcbqc90g/image/upload/v1748693417/wanderlust_DEV/qgyzxefsnhjgjqb72acp.jpg',
      filename: 'wanderlust_DEV/qgyzxefsnhjgjqb72acp'
    },
    price: 2800,
    location: 'Punjab',
    country: 'India',
    reviews: [],
    owner: '683884b8a5148f7ee1959a93',
    __v: 0
  },
  {
    _id: '683af1aaf30a7f9e9aa3bb9d',
    title: 'Lakefront Villa',
    description: 'Beautiful villa overlooking the lake',
    image: {
      url: 'https://res.cloudinary.com/dfcbqc90g/image/upload/v1748693417/wanderlust_DEV/qgyzxefsnhjgjqb72acp.jpg',
      filename: 'wanderlust_DEV/qgyzxefsnhjgjqb72acp'
    },
    price: 5000,
    location: 'Udaipur',
    country: 'India',
    reviews: [],
    owner: '683884b8a5148f7ee1959a93',
    __v: 0
  },
  {
    _id: '683af1aaf30a7f9e9aa3bb9e',
    title: 'Desert Retreat',
    description: 'Experience the desert in luxury',
    image: {
      url: 'https://res.cloudinary.com/dfcbqc90g/image/upload/v1748693417/wanderlust_DEV/qgyzxefsnhjgjqb72acp.jpg',
      filename: 'wanderlust_DEV/qgyzxefsnhjgjqb72acp'
    },
    price: 4500,
    location: 'Rajasthan',
    country: 'India',
    reviews: [],
    owner: '683884b8a5148f7ee1959a93',
    __v: 0
  },
  {
    _id: '683af1aaf30a7f9e9aa3bb9f',
    title: 'Hilltop Cottage',
    description: 'A quaint cottage with a view',
    image: {
      url: 'https://res.cloudinary.com/dfcbqc90g/image/upload/v1748693417/wanderlust_DEV/qgyzxefsnhjgjqb72acp.jpg',
      filename: 'wanderlust_DEV/qgyzxefsnhjgjqb72acp'
    },
    price: 2600,
    location: 'Darjeeling',
    country: 'India',
    reviews: [],
    owner: '683884b8a5148f7ee1959a93',
    __v: 0
  },
  {
    _id: '683af1aaf30a7f9e9aa3bba0',
    title: 'Forest Cabin',
    description: 'Escape to the woods',
    image: {
      url: 'https://res.cloudinary.com/dfcbqc90g/image/upload/v1748693417/wanderlust_DEV/qgyzxefsnhjgjqb72acp.jpg',
      filename: 'wanderlust_DEV/qgyzxefsnhjgjqb72acp'
    },
    price: 2900,
    location: 'Shimla',
    country: 'India',
    reviews: [],
    owner: '683884b8a5148f7ee1959a93',
    __v: 0
  },
  {
    _id: '683af1aaf30a7f9e9aa3bba1',
    title: 'Coastal Home',
    description: 'Steps away from the ocean',
    image: {
      url: 'https://res.cloudinary.com/dfcbqc90g/image/upload/v1748693417/wanderlust_DEV/qgyzxefsnhjgjqb72acp.jpg',
      filename: 'wanderlust_DEV/qgyzxefsnhjgjqb72acp'
    },
    price: 3700,
    location: 'Kerala',
    country: 'India',
    reviews: [],
    owner: '683884b8a5148f7ee1959a93',
    __v: 0
  },
  {
    _id: '683af1aaf30a7f9e9aa3bba2',
    title: 'Urban Loft',
    description: 'Stylish loft in downtown',
    image: {
      url: 'https://res.cloudinary.com/dfcbqc90g/image/upload/v1748693417/wanderlust_DEV/qgyzxefsnhjgjqb72acp.jpg',
      filename: 'wanderlust_DEV/qgyzxefsnhjgjqb72acp'
    },
    price: 3300,
    location: 'Bangalore',
    country: 'India',
    reviews: [],
    owner: '683884b8a5148f7ee1959a93',
    __v: 0
  },
  {
    _id: '683af1aaf30a7f9e9aa3bba3',
    title: 'Countryside Villa',
    description: 'Quiet place with nature around',
    image: {
      url: 'https://res.cloudinary.com/dfcbqc90g/image/upload/v1748693417/wanderlust_DEV/qgyzxefsnhjgjqb72acp.jpg',
      filename: 'wanderlust_DEV/qgyzxefsnhjgjqb72acp'
    },
    price: 3100,
    location: 'Himachal Pradesh',
    country: 'India',
    reviews: [],
    owner: '683884b8a5148f7ee1959a93',
    __v: 0
  },
  {
    _id: '683af1aaf30a7f9e9aa3bba4',
    title: 'Lakeview Apartment',
    description: 'Modern apartment with lake view',
    image: {
      url: 'https://res.cloudinary.com/dfcbqc90g/image/upload/v1748693417/wanderlust_DEV/qgyzxefsnhjgjqb72acp.jpg',
      filename: 'wanderlust_DEV/qgyzxefsnhjgjqb72acp'
    },
    price: 3500,
    location: 'Nainital',
    country: 'India',
    reviews: [],
    owner: '683884b8a5148f7ee1959a93',
    __v: 0
  },
  {
    _id: '683af1aaf30a7f9e9aa3bba5',
    title: 'Luxury Penthouse',
    description: 'Top floor luxury living',
    image: {
      url: 'https://res.cloudinary.com/dfcbqc90g/image/upload/v1748693417/wanderlust_DEV/qgyzxefsnhjgjqb72acp.jpg',
      filename: 'wanderlust_DEV/qgyzxefsnhjgjqb72acp'
    },
    price: 6000,
    location: 'Chennai',
    country: 'India',
    reviews: [],
    owner: '683884b8a5148f7ee1959a93',
    __v: 0
  }
]


module.exports = { data: sampleListings };