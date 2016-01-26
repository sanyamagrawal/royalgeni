const serviceList = [{
    id: 1,
    label: 'Handy Man',
    value: 'handyMan'
}, {
    id: 2,
    label: 'Cake And Bakery',
    value: 'cakeAndBakery'
}, {
    id: 3,
    label: 'Flower and gifts',
    value: 'flowerAndGifts'
}, {
    id: 4,
    label: 'Electronics',
    value: 'electronics'
}, {
    id: 5,
    label: 'Groceries',
    value: 'groceries'
}, {
    id: 6,
    label: 'Department Stores',
    value: 'departmentStores'
}, {
    id: 7,
    label: 'Restaurants',
    value: 'restaurants'
}, {
    id: 8,
    label: 'Movies',
    value: 'movies'
}, {
    id: 9,
    label: 'Travel',
    value: 'travel'
}, {
    id: 10,
    label: 'Events',
    value: 'events'
}, {
    id: 11,
    label: 'Automobiles - Trade & Repair',
    value: 'automobiles'
}, {
    id: 12,
    label: 'Traffic',
    value: 'traffic'
}, {
    id: 13,
    label: 'News',
    value: 'news'
}];

const vendorList = {
    'handyMan': [{
            'S.No': '1',
            'Occupation': 'Carpenter',
            'label': 'Narayan',
            'Location': 'thapathai',
            'Phone number': '9802001919',
            'Remarks': 'indian/ fast/ expensive'
        },
        {
            'S.No': '2',
            'Occupation': 'computer / camrea',
            'label': 'Praduman',
            'Location': '',
            'Phone number': '9851123169',
            'Remarks': 'reliable/jugad'
        },
        {
            'S.No': '3',
            'Occupation': 'camera / computer',
            'label': 'suresji',
            'Location': '',
            'Phone number': '9851127985',
            'Remarks': 'good /'
        },
        {
            'S.No': '4',
            'Occupation': 'plumber',
            'label': 'malik',
            'Location': '',
            'Phone number': '9841312962',
            'Remarks': ''
        },
        {
            'S.No': '5',
            'Occupation': 'water proofing',
            'label': 'sanker',
            'Location': '',
            'Phone number': '9841469226',
            'Remarks': 'good'
        },
        {
            'S.No': '6',
            'Occupation': 'painter',
            'label': 'kesav',
            'Location': '',
            'Phone number': '9841008648',
            'Remarks': 'good'
        },
        {
            'S.No': '7',
            'Occupation': 'painter',
            'label': 'santosh',
            'Location': '',
            'Phone number': '9851063076',
            'Remarks': 'reliable/expensive'
        },
        {
            'S.No': '8',
            'Occupation': 'acp fitting',
            'label': 'abhay',
            'Location': '',
            'Phone number': '',
            'Remarks': ''
        },
        {
            'S.No': '9',
            'Occupation': 'false celing / paint / partician',
            'label': 'raj kumar',
            'Location': '',
            'Phone number': '9851085080',
            'Remarks': 'reliable/fast'
        },
        {
            'S.No': '10',
            'Occupation': 'glass sticker',
            'label': 'mukesh',
            'Location': '',
            'Phone number': '9849733366',
            'Remarks': 'good'
        },
        {
            'S.No': '11',
            'Occupation': 'glass',
            'label': 'sanjay',
            'Location': '',
            'Phone number': '9851007818',
            'Remarks': 'owner / fast'
        },
        {
            'S.No': '12',
            'Occupation': 'Cleaning / security / etc',
            'label': 'Royal services',
            'Location': '',
            'Phone number': '9849939227',
            'Remarks': 'they provide lot of services'
        },
        {
            'S.No': '13',
            'Occupation': 'sofa / civil / electrical etc',
            'label': 'Nepal Solution',
            'Location': '',
            'Phone number': '98510-72105, 9803310408',
            'Remarks': ''
        },
        {
            'S.No': '14',
            'Occupation': 'Electrician',
            'label': 'Rajkumar',
            'Location': '',
            'Phone number': '9851039893',
            'Remarks': 'reliable/expensive'
        },
        {
            'S.No': '15',
            'Occupation': 'Plumber',
            'label': 'Gangadhar',
            'Location': '',
            'Phone number': '9803090733',
            'Remarks': 'Very good/ reliable'
        },
        {
            'S.No': '16',
            'Occupation': 'Computer/wifi/laptop',
            'label': 'Aftab',
            'Location': '',
            'Phone number': '9807104795',
            'Remarks': 'good / Jugad'
        },
        {
            'S.No': '17',
            'Occupation': 'Painter (designs & official)',
            'label': 'Balram',
            'Location': '',
            'Phone number': '9851079780',
            'Remarks': 'very good/ reliable'
        },
        {
            'S.No': '18',
            'Occupation': 'Painter (House & Rooms)',
            'label': 'Jairam',
            'Location': '',
            'Phone number': '9813127434',
            'Remarks': 'very good/ reliable'
        },
        {
            'S.No': '19',
            'Occupation': 'Carpenter',
            'label': 'Shanker',
            'Location': '',
            'Phone number': '9818530414',
            'Remarks': 'good'
        },
        {
            'S.No': '20',
            'Occupation': 'Computer/wifi/ac/generator',
            'label': 'Globallink (Umesh)',
            'Location': 'thapathali',
            'Phone number': '9851173839',
            'Remarks': 'good / very good for amc\'s'
        }
    ],
    'cakeAndBakery': [
        {
            'S.No': '',
            'label': '',
            'Contact Person': '',
            'Location': '',
            'Phone number': '',
            'Remarks': ''
        },
        {
            'S.No': '1',
            'label': 'European Bakery',
            'Contact Person': '',
            'Location': 'Bhakta Marga',
            'Phone number': '',
            'Remarks': ''
        },
        {
            'S.No': '2',
            'label': 'Vienna Bakery',
            'Contact Person': '',
            'Location': 'Jhamsikhel',
            'Phone number': '',
            'Remarks': ''
        },
        {
            'S.No': '3',
            'label': 'Annapurna Cake Shop',
            'Contact Person': '',
            'Location': 'Durbar Marg',
            'Phone number': '',
            'Remarks': ''
        },
        {
            'S.No': '4',
            'label': 'Annapurna Cake Shop',
            'Contact Person': '',
            'Location': 'Jhamsikhel',
            'Phone number': '',
            'Remarks': ''
        },
        {
            'S.No': '5',
            'label': 'Radisson Cake Shop',
            'Contact Person': '',
            'Location': 'Lazimpat',
            'Phone number': '',
            'Remarks': ''
        },
        {
            'S.No': '6',
            'label': 'Bakes n Cakes',
            'Contact Person': '',
            'Location': 'Durbar Marg',
            'Phone number': '',
            'Remarks': ''
        },
        {
            'S.No': '7',
            'label': 'Le Sukre',
            'Contact Person': '',
            'Location': '',
            'Phone number': '',
            'Remarks': ''
        },
        {
            'S.No': '8',
            'label': 'Fine Grain Bakery',
            'Contact Person': '',
            'Location': 'Swayambhu',
            'Phone number': '',
            'Remarks': ''
        },
        {
            'S.No': '9',
            'label': 'Bake my Wish by Shivani',
            'Contact Person': 'Shivani Agarwal',
            'Location': 'New Baneshwor',
            'Phone number': '9801022339',
            'Remarks': ''
        },
        {
            'S.No': '10',
            'label': 'Imago Dei',
            'Contact Person': '',
            'Location': '',
            'Phone number': '',
            'Remarks': ''
        },
        {
            'S.No': '11',
            'label': 'The Bakery Cafe',
            'Contact Person': '',
            'Location': '',
            'Phone number': '',
            'Remarks': ''
        },
        {
            'S.No': '12',
            'label': 'Hermann Helmer\'s German Bakery',
            'Contact Person': '',
            'Location': 'Jawalakhel,',
            'Phone number': '01-5524900',
            'Remarks': ''
        },
        {
            'S.No': '13',
            'label': 'Chefs Bakery & Confectionery',
            'Contact Person': '',
            'Location': 'Baneshwor,',
            'Phone number': '01-6634944',
            'Remarks': ''
        },
        {
            'S.No': '14',
            'label': 'European Bakery',
            'Contact Person': '',
            'Location': 'Baluwatar',
            'Phone number': '01-4422047',
            'Remarks': ''
        },
        {
            'S.No': '15',
            'label': 'JULIE\'S CAKES & PASTRIES',
            'Contact Person': '',
            'Location': 'Lazimpat',
            'Phone number': '01-5011685',
            'Remarks': ''
        },
        {
            'S.No': '16',
            'label': 'HERMANN HELMERS',
            'Contact Person': '',
            'Location': 'Jawalakhel,',
            'Phone number': '01-5524900',
            'Remarks': ''
        },
        {
            'S.No': '17',
            'label': 'Royal Alina\'s Bakery Cafe',
            'Contact Person': '',
            'Location': 'Kanti Path',
            'Phone number': '01-4247900',
            'Remarks': ''
        },
        {
            'S.No': '18',
            'label': 'Fine Grains Bakery',
            'Contact Person': '',
            'Location': 'swayambhu',
            'Phone number': '01-4278857',
            'Remarks': ''
        },
        {
            'S.No': '20',
            'label': 'Makoo Bakery',
            'Contact Person': '',
            'Location': 'Jawalakhel',
            'Phone number': '01-5522997',
            'Remarks': ''
        },
        {
            'S.No': '21',
            'label': 'ALINA\'S BAKERY CAFE',
            'Contact Person': '',
            'Location': '',
            'Phone number': '01-4782383',
            'Remarks': ''
        },
        {
            'S.No': '22',
            'label': 'just baked Bakery & Cafe',
            'Contact Person': '',
            'Location': 'Battisputali',
            'Phone number': '01-6205126',
            'Remarks': ''
        },
        {
            'S.No': '23',
            'label': 'Vienna Bakery',
            'Contact Person': '',
            'Location': 'Jawalakhel',
            'Phone number': '',
            'Remarks': ''
        },
        {
            'S.No': '24',
            'label': 'Nanglo Bakery & Cafe',
            'Contact Person': '',
            'Location': 'Durbar Marg',
            'Phone number': '01-4222636',
            'Remarks': ''
        },
        {
            'S.No': '25',
            'label': 'Krishna Bakery & Confectionery',
            'Contact Person': '',
            'Location': 'kamal pokhari',
            'Phone number': '01-4411452',
            'Remarks': ''
        },
        {
            'S.No': '26',
            'label': 'Kathmandu J Bakery',
            'Contact Person': '',
            'Location': '',
            'Phone number': '01-4361070',
            'Remarks': ''
        },
        {
            'S.No': '27',
            'label': 'Snowman Cafe',
            'Contact Person': '',
            'Location': 'Jhochhen',
            'Phone number': '01-4246606',
            'Remarks': ''
        },
        {
            'S.No': '28',
            'label': 'ND\'s Cafe & Restaurant',
            'Contact Person': '',
            'Location': 'mahabouddha',
            'Phone number': '01-4220674',
            'Remarks': ''
        },
        {
            'S.No': '28',
            'label': 'master baker and confectionery',
            'Contact Person': '',
            'Location': '',
            'Phone number': '01-4418649',
            'Remarks': ''
        },
        {
            'S.No': '29',
            'label': 'Brezel Bakery',
            'Contact Person': '',
            'Location': 'Thamel',
            'Phone number': '01-700295',
            'Remarks': ''
        }
    ]
};

export { vendorList, serviceList };
