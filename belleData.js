// Belle Colombo Central Production Data Store
// Automatically synchronized with Executive Admin Studio
(function(root) {
  var data = {
  "venue": {
    "brandName": "BELLE COLOMBO",
    "tagline": "Fine Dining & Curated Spirits",
    "phone": "+94 77 031 5589",
    "phoneFormatted": "+94 77 031 5589",
    "whatsappNumber": "94770315589",
    "instagramHandle": "@belle.colombo",
    "instagramUrl": "https://www.instagram.com/belle.colombo/",
    "facebookUrl": "https://www.facebook.com/bellecolombo",
    "locationName": "Belle Colombo",
    "address": "Colombo, Sri Lanka",
    "googleMapsUrl": "https://maps.google.com/?q=Belle+Colombo+Sri+Lanka",
    "hours": "Daily | 11:00 AM – 10:30 PM",
    "taxNote": "All prices are in LKR and subject to 10% service charge and applicable government taxes."
  },
  "menuCategories": [
    {
      "id": "lunch",
      "name": "LUNCH",
      "subtitle": "Express Midday Selection",
      "icon": "🥗",
      "type": "standard",
      "isSystem": true
    },
    {
      "id": "alacarte",
      "name": "À LA CARTE",
      "subtitle": "5-Course Gourmet Odyssey",
      "icon": "🍽️",
      "type": "courses",
      "isSystem": true
    },
    {
      "id": "tasting",
      "name": "TASTING MENUS",
      "subtitle": "Curated Pairings & Sommelier Odysseys",
      "icon": "🍷",
      "type": "tasting",
      "isSystem": true
    },
    {
      "id": "thebar",
      "name": "THE BAR",
      "subtitle": "Botanical Spirits & Bites",
      "icon": "🍸",
      "type": "bar",
      "isSystem": true
    }
  ],
  "customCategories": [],
  "subCategories": {
    "lunch": ["Soups & Starters", "Artisan Salads", "Sharing Platters", "Burgers & Sandwiches"],
    "alacarte": ["Appetisers", "Entrées", "Mains", "From The Grill", "Desserts"],
    "thebar": []
  },
  "lunchItems": [
    {
      "id": "lunch-1",
      "name": "Roasted Tomato & Chipotle Soup",
      "subCategory": "Soups & Starters",
      "isVeg": true,
      "price": "1,800",
      "priceLabel": "",
      "desc": "Fire-roasted tomatoes | Smoky chipotle chillies | Roasted garlic | Toasted cumin | Lime-avocado crema | Fresh coriander oil | Herb pressed focaccia",
      "meta": null,
      "image": "assets/images/chef_plating.webp",
      "video": ""
    },
    {
      "id": "lunch-2",
      "name": "The Signature Caesar",
      "subCategory": "Artisan Salads",
      "isVeg": false,
      "price": "2,600",
      "priceLabel": "",
      "desc": "Caesar dressing | Cinnamon-infused cherry tomatoes | Rustic sourdough croûtons | Slow-poached farm egg | Crisp chicken skin and duck",
      "meta": {
        "badge": "ADD-ONS",
        "text": "Crispy Spiced Chicken (<strong>LKR 420</strong>) · Seared Prawns (<strong>LKR 550</strong>) · Grilled Octopus (<strong>LKR 600</strong>)"
      },
      "image": "assets/images/artisan_salad.webp",
      "video": ""
    },
    {
      "id": "lunch-3",
      "name": "Organic Green Salad",
      "subCategory": "Artisan Salads",
      "isVeg": true,
      "price": "1,500",
      "priceLabel": "",
      "desc": "Mixed selected greens | Herb-emulsion | Toasted pumpkin | Sunflower | Sesame seeds.",
      "meta": null,
      "image": "assets/images/artisan_salad.webp",
      "video": ""
    },
    {
      "id": "lunch-4",
      "name": "Heirloom Tomato, Goat’s Cheese & Basil Salad",
      "subCategory": "Artisan Salads",
      "isVeg": true,
      "price": "1,900",
      "priceLabel": "",
      "desc": "Tomatoes | Goat's cheese | Basil | Greens and assorted herb base | Passionfruit dressing | Toasted pumpkin | Sunflower seeds.",
      "meta": null,
      "image": "assets/images/artisan_salad.webp",
      "video": ""
    },
    {
      "id": "lunch-5",
      "name": "House-Made Pâté, Duck Rillettes & Smoked Meat Platter",
      "subCategory": "Sharing Platters",
      "isVeg": false,
      "price": "",
      "priceLabel": "",
      "desc": "Chicken liver pâté | Shredded duck rillettes | Smoked meats | Tangy house pickles | Sharp mustard | Toasted sourdough.",
      "meta": null,
      "image": "assets/images/bg/slide_glazed_ribs.webp",
      "video": ""
    },
    {
      "id": "lunch-6",
      "name": "The Classic Burger",
      "subCategory": "Burgers & Sandwiches",
      "isVeg": false,
      "price": "2,800",
      "priceLabel": "",
      "desc": "120g premium beef patty | Melted cheddar | Crisp lettuce | Tomato | Red onion | Dills | House secret sauce on a toasted sesame bun.",
      "meta": {
        "badge": "ADD-ONS",
        "text": "Double Patty (<strong>LKR 1,050</strong>) · Beef Bacon (<strong>LKR 250</strong>) · Sunny-Side-Up Egg (<strong>LKR 150</strong>)"
      },
      "image": "assets/images/bg/slide_steak_grill.webp",
      "video": ""
    },
    {
      "id": "lunch-7",
      "name": "The Shogun Burger",
      "subCategory": "Burgers & Sandwiches",
      "isVeg": true,
      "price": "1,800",
      "priceLabel": "",
      "desc": "Crispy-fried king oyster mushroom \"steak\" (120g) | House-togarashi | Tangy Tonkatsu sauce | Japanese mayo | Tempura gotu kola | Shredded cabbage | Toasted potato bun",
      "meta": {
        "badge": "SIDES",
        "text": "Choice of Truffle Parmesan Fries, Manioc Fries with Chilli Salt, or Fresh Side Salad"
      },
      "image": "assets/images/bg/slide_steak_grill.webp",
      "video": ""
    },
    {
      "id": "lunch-8",
      "name": "The Smoked Club",
      "subCategory": "Burgers & Sandwiches",
      "isVeg": false,
      "price": "2,800",
      "priceLabel": "",
      "desc": "House-smoked chicken breast | Crispy beef bacon | Avocado | Lettuce | Tomato | Nai Miris aioli | Toasted multi-grain bread.",
      "meta": {
        "badge": "SIDES",
        "text": "Choice of Truffle Parmesan Fries, Manioc Fries with Chilli Salt, or Fresh Side Salad"
      },
      "image": "assets/images/bg/slide_tacos_kitchen.webp",
      "video": ""
    },
    {
      "id": "lunch-9",
      "name": "The Classic Rye",
      "subCategory": "Burgers & Sandwiches",
      "isVeg": false,
      "price": "",
      "priceLabel": "",
      "desc": "Melted Swiss cheese | Dills | Sharp local mustard on toasted rye.",
      "meta": null,
      "image": "assets/images/bg/slide_glazed_ribs.webp",
      "video": ""
    },
    {
      "id": "lunch-10",
      "name": "The Signature Steak Sandwich",
      "subCategory": "Burgers & Sandwiches",
      "isVeg": false,
      "price": "5,200",
      "priceLabel": "",
      "desc": "Grilled beef tenderloin | Melted provolone cheese | Caramelized onions | Mustard-horseradish cream on a crusty baguette.",
      "meta": {
        "badge": "ADD-ONS",
        "text": "Sautéed Mushrooms (<strong>LKR 140</strong>) · Charred Peppers (<strong>LKR 100</strong>)"
      },
      "image": "assets/images/bg/slide_steak_grill.webp",
      "video": ""
    }
  ],
  "aLaCarte": [
    {
      "category": "Appetisers",
      "key": "appetisers",
      "subtitle": "Daily | 11:00 AM – 10:30 PM",
      "items": [
        {
          "id": "appetisers-1",
          "name": "Forest Mushroom & Truffle Soup",
          "tags": [
            "Vegetarian"
          ],
          "price": "2,200",
          "priceLabel": "",
          "price2": "",
          "price2Label": "",
          "cuts": null,
          "desc": "Forest mushrooms, fresh thyme, black truffle oil, crispy sourdough shard."
        },
        {
          "id": "appetisers-2",
          "name": "Ceylonese Seafood Bouillabaisse",
          "tags": [
            "Seafood",
            "Signature"
          ],
          "price": "3,800",
          "priceLabel": "",
          "price2": "",
          "price2Label": "",
          "cuts": null,
          "desc": "Rich seafood broth, local prawns, cuttlefish, line-caught catch of the day, mussels, sourdough."
        },
        {
          "id": "appetisers-3",
          "name": "House Pâté, Rillette & Smoked Meat Platter",
          "tags": [
            "Sharing"
          ],
          "price": "2,200",
          "priceLabel": "Single",
          "price2": "3,800",
          "price2Label": "Double",
          "cuts": null,
          "desc": "Smoked meats, tangy house pickles, local sharp mustard, toasted sourdough."
        }
      ]
    },
    {
      "category": "Entrées",
      "key": "entr-es",
      "subtitle": "Starters & Light Plates",
      "items": [
        {
          "id": "entr-es-1",
          "name": "The Signature Caesar",
          "tags": [
            "Signature"
          ],
          "price": "2,600",
          "priceLabel": "",
          "price2": "",
          "price2Label": "",
          "cuts": null,
          "desc": "Parmesan Caesar dressing, blistered cherry tomatoes, sourdough croûtons, poached quail egg, crisp chicken skin and duck skin crackling mix."
        },
        {
          "id": "entr-es-2",
          "name": "Signature Green Salad",
          "tags": [
            "Vegetarian"
          ],
          "price": "1,500",
          "priceLabel": "",
          "price2": "",
          "price2Label": "",
          "cuts": null,
          "desc": "Mixed dressed greens, garden herbs, herb-emulsion, toasted pumpkin, sunflower, sesame seeds."
        },
        {
          "id": "entr-es-3",
          "name": "Wood-Charred Duck, Peach & Pickled Radish",
          "tags": [
            "Poultry"
          ],
          "price": "2,200",
          "priceLabel": "",
          "price2": "",
          "price2Label": "",
          "cuts": null,
          "desc": "Duck breast, peaches, radish, pickled mustard, warm duck dashi, shatteringly crisp duck skin."
        },
        {
          "id": "entr-es-4",
          "name": "Yellowfin Tuna Carpaccio",
          "tags": [
            "Raw Bar",
            "Seafood"
          ],
          "price": "2,200",
          "priceLabel": "",
          "price2": "",
          "price2Label": "",
          "cuts": null,
          "desc": "Yellowfin tuna, citrus-soy, extra virgin olive oil, crushed pink peppercorns, micro-greens."
        },
        {
          "id": "entr-es-5",
          "name": "Savannah Beef Tartare",
          "tags": [
            "Raw Bar",
            "Beef"
          ],
          "price": "2,400",
          "priceLabel": "",
          "price2": "",
          "price2Label": "",
          "cuts": null,
          "desc": "Beef tenderloin, sea salt, cornichons, grain mustard, cured egg yolk, sourdough shards."
        }
      ]
    },
    {
      "category": "Mains",
      "key": "mains",
      "subtitle": "Chef's Signature Land & Sea Plates",
      "items": [
        {
          "id": "mains-1",
          "name": "Pan-Seared Catch of the Day",
          "tags": [
            "Seafood",
            "Local"
          ],
          "price": "3,400",
          "priceLabel": "",
          "price2": "",
          "price2Label": "",
          "cuts": null,
          "desc": "Yellow Kirihodi (tempered coconut milk broth), baby potatoes, charred wild okra, Narang and curry-leaf chimichurri."
        },
        {
          "id": "mains-2",
          "name": "Cajun-Spiced & Lemongrass Chicken",
          "tags": [
            "Poultry"
          ],
          "price": "2,700",
          "priceLabel": "",
          "price2": "",
          "price2Label": "",
          "cuts": null,
          "desc": "Corn-fed chicken, lemongrass brew, Cajun spices, roasted on coals, sweet corn succotash, Vietnamese fresh herb salad."
        },
        {
          "id": "mains-3",
          "name": "Miso-Kithul & Sansho Glazed Lamb Chops",
          "tags": [
            "Chef's Selection"
          ],
          "price": "16,000",
          "priceLabel": "",
          "price2": "",
          "price2Label": "",
          "cuts": null,
          "desc": "Grain-fed Australian lamb, white miso, local Kithul treacle reduction, citrus Japanese Sansho pepper, garlic purée with charred spring onion."
        },
        {
          "id": "mains-4",
          "name": "Smoked Kiri Ala Gnocchi",
          "tags": [
            "Vegetarian"
          ],
          "price": "2,500",
          "priceLabel": "",
          "price2": "",
          "price2Label": "",
          "cuts": null,
          "desc": "Green herb pesto base with blistered tomatoes, mushrooms, black olives, fragrant hazelnut dukkah."
        },
        {
          "id": "mains-5",
          "name": "Seafood Confluence Option",
          "tags": [
            "Seafood"
          ],
          "price": "3,900",
          "priceLabel": "",
          "price2": "",
          "price2Label": "",
          "cuts": null,
          "desc": "Prawns, cuttlefish, line-caught snapper, mussels-folded, house seafood-reduction sauce."
        }
      ]
    },
    {
      "category": "From The Grill",
      "key": "from-the-grill",
      "subtitle": "Coal-Fired Cuts & Prime Steaks",
      "items": [
        {
          "id": "from-the-grill-1",
          "name": "Filet Mignon (250g)",
          "tags": [
            "Steak",
            "Tenderloin"
          ],
          "price": "",
          "priceLabel": "",
          "price2": "",
          "price2Label": "",
          "cuts": [
            {
              "origin": "BRAZIL · Grass-Fed Heritage",
              "price": "13,500"
            },
            {
              "origin": "AUSTRALIA · Grain-Fed Angus",
              "price": "16,500"
            },
            {
              "origin": "USA · USDA Grain-Fed",
              "price": "19,500"
            }
          ],
          "desc": "Beef tenderloin, truffled potato purée, creamy wild mushrooms, tableside herb béarnaise."
        },
        {
          "id": "from-the-grill-2",
          "name": "Sirloin (300g – 350g)",
          "tags": [
            "Steak",
            "Sirloin"
          ],
          "price": "",
          "priceLabel": "",
          "price2": "",
          "price2Label": "",
          "cuts": [
            {
              "origin": "BRAZIL · Grass-Fed Heritage",
              "price": "11,500"
            },
            {
              "origin": "AUSTRALIA · Grain-Fed Angus",
              "price": "14,500"
            },
            {
              "origin": "USA · USDA Grain-Fed",
              "price": "16,500"
            },
            {
              "origin": "JAPANESE WAGYU · A5 Premium",
              "price": "65,000",
              "premium": true
            }
          ],
          "desc": "Loin cut steak, Binchotan coal grilled, Parmesan fries, cracked peppercorn sauce."
        },
        {
          "id": "from-the-grill-3",
          "name": "Ribeye (350g – 400g)",
          "tags": [
            "Steak",
            "Ribeye"
          ],
          "price": "",
          "priceLabel": "",
          "price2": "",
          "price2Label": "",
          "cuts": [
            {
              "origin": "BRAZIL · Grass-Fed Heritage",
              "price": "17,500"
            },
            {
              "origin": "AUSTRALIA · Grain-Fed Angus",
              "price": "21,500"
            },
            {
              "origin": "USA · USDA Grain-Fed",
              "price": "24,000"
            }
          ],
          "desc": "Marbled steak, charcoal fire finish, sweet corn succotash, bone-marrow chimichurri."
        },
        {
          "id": "from-the-grill-4",
          "name": "Australian Wagyu Striploin (300g)",
          "tags": [
            "Signature",
            "Wagyu"
          ],
          "price": "27,500",
          "priceLabel": "",
          "price2": "",
          "price2Label": "",
          "cuts": null,
          "desc": "High-marbled Wagyu cut, intense velvety texture, classic reduction jus, silk sweet potato purée."
        },
        {
          "id": "from-the-grill-5",
          "name": "The Master Wagyu Burger (200g)",
          "tags": [
            "Burger",
            "Wagyu"
          ],
          "price": "4,500",
          "priceLabel": "",
          "price2": "",
          "price2Label": "",
          "cuts": null,
          "desc": "Premium Wagyu beef patty grilled over Binchotan coals, cave-aged cheddar, caramelized onions, wild rocket, truffle aioli on a toasted brioche bun, served with Truffle Parmesan Fries."
        }
      ]
    },
    {
      "category": "Desserts",
      "key": "desserts",
      "subtitle": "Sweet Finales",
      "items": [
        {
          "id": "desserts-1",
          "name": "The Rockland Red Rum & Espresso Chocolate Biscuit Pudding (CBP)",
          "tags": [
            "Signature"
          ],
          "price": "1,200",
          "priceLabel": "",
          "price2": "",
          "price2Label": "",
          "cuts": null,
          "desc": "Milk-soaked biscuits, rich dark chocolate ganache infused with Rockland Red Rum and cold-brew espresso, toasted cashew praline."
        },
        {
          "id": "desserts-2",
          "name": "Biscoff, Chocolate & Narang Mousse Slice",
          "tags": [
            "Dessert"
          ],
          "price": "1,400",
          "priceLabel": "",
          "price2": "",
          "price2Label": "",
          "cuts": null,
          "desc": "Spiced Biscoff biscuit base, dark chocolate fudge, toasted coconut crumble, vanilla mousse, Narang citrus zest."
        },
        {
          "id": "desserts-3",
          "name": "Charred Pineapple & Pandan Basque Cheesecake",
          "tags": [
            "Dessert"
          ],
          "price": "1,500",
          "priceLabel": "",
          "price2": "",
          "price2Label": "",
          "cuts": null,
          "desc": "Low-sugar pandan Basque cheesecake, Binchotan-charred pineapple, ginger-kithul compote."
        }
      ]
    }
  ],
  "theGardenAndBar": [
    {
      "category": "The Bar",
      "key": "the-bar",
      "subtitle": "Daily | 06:00 PM – 10:30 PM",
      "items": [
        {
          "id": "bar-the-garden-1",
          "name": "The Smoked Club",
          "tags": [
            "Sandwich"
          ],
          "price": "2,800",
          "priceLabel": "",
          "desc": "House-smoked chicken breast, crispy beef bacon, avocado, lettuce, tomato, Nai Miris aioli, toasted multi-grain bread."
        },
        {
          "id": "bar-the-garden-2",
          "name": "The Classic Rye",
          "tags": [
            "Sandwich"
          ],
          "price": "1,800",
          "priceLabel": "Single",
          "desc": "Slow-simmered corned beef or house-cured pastrami, melted Swiss cheese, dills, sharp local mustard on toasted rye."
        },
        {
          "id": "bar-the-garden-3",
          "name": "The Classic Burger",
          "tags": [
            "Burger"
          ],
          "price": "3,100",
          "priceLabel": "",
          "desc": "120g premium beef patty, melted cheddar, crisp lettuce, tomato, red onion, dills, house secret sauce on a toasted sesame bun."
        },
        {
          "id": "bar-the-garden-4",
          "name": "The Shogun Burger",
          "tags": [
            "Vegetarian",
            "Burger"
          ],
          "price": "1,800",
          "priceLabel": "",
          "desc": "Crispy-fried king oyster mushroom 'steak' (120g), house-togarashi, tangy Tonkatsu sauce, Japanese mayo, tempura gotu kola, shredded cabbage on a toasted potato bun."
        },
        {
          "id": "bar-the-garden-5",
          "name": "The Signature Steak Sandwich",
          "tags": [
            "Steak",
            "Sandwich"
          ],
          "price": "3,900",
          "priceLabel": "",
          "desc": "Grilled beef tenderloin, melted provolone cheese, caramelized onions, mustard-horseradish cream on a crusty baguette."
        },
        {
          "id": "bar-the-garden-6",
          "name": "Roasted Tomato & Chipotle Soup",
          "tags": [
            "Vegetarian",
            "Soup"
          ],
          "price": "1,900",
          "priceLabel": "",
          "desc": "Fire-roasted tomatoes, smoky chipotle chillies, roasted garlic, toasted cumin, lime-avocado crema, fresh coriander oil, herb-pressed focaccia."
        },
        {
          "id": "bar-the-garden-7",
          "name": "Heirloom Tomato, Goat’s Cheese & Basil Salad",
          "tags": [
            "Vegetarian",
            "Salad"
          ],
          "price": "2,200",
          "priceLabel": "",
          "desc": "Tomatoes, goat's cheese, basil, greens and assorted herb base, passionfruit dressing, toasted pumpkin & sunflower seeds."
        },
        {
          "id": "bar-the-bar-bites-1",
          "name": "The Classic Sliders (Two)",
          "tags": [
            "Sharing",
            "Bar Bite"
          ],
          "price": "4,000",
          "priceLabel": "",
          "desc": "Two mini sliders served on soft, toasted brioche buns. Choice of Classic Beef (melted aged cheddar, lettuce, tomato, pickles) or Chicken Karaage (ginger-garlic fried chicken, pickled cucumber ribbons, sriracha aioli)."
        },
        {
          "id": "bar-the-bar-bites-2",
          "name": "Smoked Duck Tacos",
          "tags": [
            "Bar Bite"
          ],
          "price": "2,200",
          "priceLabel": "",
          "desc": "Tortillas, shredded duck leg, red cabbage, ginger-lime slaw, sweet hoisin-kithul glaze, fresh coriander."
        },
        {
          "id": "bar-the-bar-bites-3",
          "name": "Crispy Chicken Karaage Bao",
          "tags": [
            "Bar Bite"
          ],
          "price": "1,800",
          "priceLabel": "",
          "desc": "Steamed bao buns, crisp Japanese fried chicken, pickled cucumber ribbons, curry-leaf aioli."
        },
        {
          "id": "bar-the-bar-bites-4",
          "name": "Thai-Style Crispy Oyster Omelet",
          "tags": [
            "Seafood",
            "Bar Bite"
          ],
          "price": "2,200",
          "priceLabel": "",
          "desc": "Pan-fried oysters in lacy egg and tapioca starch batter, wok-tossed bean sprouts, coriander, spring scallions, sweet-chili-lime sriracha drizzle."
        },
        {
          "id": "bar-the-bar-bites-5",
          "name": "Vietnamese-Style Rice Paper Summer Rolls with Scallops",
          "tags": [
            "Seafood",
            "Fresh"
          ],
          "price": "2,800",
          "priceLabel": "",
          "desc": "Translucent rice paper, seared scallops, local fresh herbs (mint, coriander, gotu kola), crisp cucumber, peanut-tamarind dipping sauce."
        },
        {
          "id": "bar-the-bar-bites-6",
          "name": "Corn Succotash Fritters",
          "tags": [
            "Vegetarian",
            "Bar Bite"
          ],
          "price": "1,400",
          "priceLabel": "",
          "desc": "Sweet corn succotash fritters, zesty citrus cream, pickled onion slivers, coriander oil, fresh picked leaves."
        },
        {
          "id": "bar-the-bar-bites-7",
          "name": "Mushroom Tempura Nest",
          "tags": [
            "Vegetarian",
            "Bar Bite"
          ],
          "price": "1,600",
          "priceLabel": "",
          "desc": "Crisp local oyster & button mushroom tempura nest, rich truffle-miso dipping sauce."
        },
        {
          "id": "bar-the-bar-bites-8",
          "name": "Artisanal Cheese Platter (For Two)",
          "tags": [
            "Sharing",
            "Cheese"
          ],
          "price": "3,800",
          "priceLabel": "",
          "desc": "A curated selection of three premium cave-aged cheeses served with wild honey, roasted nuts, seasonal fruit preserves, and toasted sourdough."
        }
      ]
    }
  ],
  "tastingMenus": {
    "fiveCourse": {
      "id": "five-course",
      "title": "BY THE GLASS PAIRING 5 COURSE MENU",
      "shortTitle": "5 COURSE PAIRING",
      "hours": "Daily | 11:00 AM – 10:30 PM",
      "priceMenuOnly": "9,500",
      "priceWinePairing": "17,000",
      "wineCountText": "including 4 wine pairing",
      "note": "Please select one option per course.",
      "courses": [
        {
          "courseNumber": "1",
          "courseName": "THE PRELUDE",
          "dishes": [
            {
              "name": "Heirloom Tomato & Chèvre",
              "desc": "Local heirloom tomatoes | whipped goat's cheese mousse | wild passionfruit | kithul vinaigrette | fresh basil oil.",
              "wine": "Ardechois, Sauvignon Blanc 2023 Fr."
            },
            {
              "name": "Yellowfin Tuna Carpaccio",
              "desc": "Yellow fin tuna | extra virgin olive oil | crushed pink peppercorns | micro-greens.",
              "wine": "Indana Chardonnay, Cape G. Hope 2024 SA"
            },
            {
              "name": "Savannah Beef Tartare",
              "desc": "Beef tenderloin | cornichons | grain mustard | quail egg yolk | toasted sourdough shard.",
              "wine": "Dark Horse, Pinot Noir, Cal."
            }
          ]
        },
        {
          "courseNumber": "2",
          "courseName": "THE HERO MAIN",
          "dishes": [
            {
              "name": "Binchotan Mushroom Steak",
              "desc": "Oyster mushroom | sweet truffle-miso | roasted garlic | sweet potato purée.",
              "wine": "Dark Horse, Pinot Noir, Cal."
            },
            {
              "name": "Lemongrass Modha",
              "desc": "Sea bass fillet | lemongrass-infused yellow Kirihodi broth | Narang | curry-leaf chimichurri.",
              "wine": "Darenberg Dam, Riesling, Aus."
            },
            {
              "name": "Heritage Filet Mignon",
              "desc": "Binchotan-grilled beef tenderloin | smoked garlic & bone-marrow butter | classic reduction jus | truffled potato purée.",
              "wine": "Obikwa Cab. Sauvignon, Cal."
            }
          ]
        },
        {
          "courseNumber": "3",
          "courseName": "PALATE CLEANSER",
          "dishes": [
            {
              "name": "House Citrus & Wild Mint Sorbet",
              "desc": "A refreshing interlude of local Narang citrus.",
              "wine": null
            }
          ]
        },
        {
          "courseNumber": "4",
          "courseName": "TRADITIONAL CHEESE COURSE",
          "dishes": [
            {
              "name": "Curated House Cheeses",
              "desc": "A selection of premium cave-aged house cheeses served with wild honey | roasted nuts | seasonal fruit preserves | warm toasted sourdough.",
              "wine": "Piccini, Toscana, Ital."
            }
          ]
        },
        {
          "courseNumber": "5",
          "courseName": "THE SWEET FINALE",
          "dishes": [
            {
              "name": "Rockland Red Rum CBP",
              "desc": "Milk-soaked biscuits | dark chocolate ganache infused with Rockland Red Rum and cold-brew espresso | toasted cashew praline.",
              "wine": "Erben Auslese, Ger."
            },
            {
              "name": "Charred Pineapple Basque",
              "desc": "Low-sugar pandan Basque cheesecake | Binchotan-charred pineapple | ginger-kithul compote.",
              "wine": null
            }
          ]
        }
      ]
    },
    "sevenCourse": {
      "id": "seven-course",
      "title": "7 COURSE GRAND TASTING MENU",
      "shortTitle": "7 COURSE GRAND",
      "hours": "Daily | 11:00 AM – 10:30 PM",
      "priceMenuOnly": "10,000",
      "priceWinePairing": "19,500",
      "wineCountText": "including 6 wine pairing",
      "note": "Please select one option per course.",
      "courses": [
        {
          "courseNumber": "1",
          "courseName": "Cold Charcuterie & Prelude",
          "dishes": [
            {
              "label": "Meat Option",
              "name": "Savannah Beef Tartar",
              "desc": "Beef tenderloin | sea salt | cornichons | grain mustard | raw quail egg yolk on a sourdough shard.",
              "wine": "Indana Chardonnay, 2024 S.A"
            },
            {
              "label": "Poultry Option",
              "name": "Foie Gras-Style Chicken Liver Parfait",
              "desc": "Ultra-silky red wine and shallot-infused chicken liver pâté, served with house pickles | local sharp mustard | shattered poultry skin crackling.",
              "wine": "Oude Kaap Moscato S.A"
            }
          ]
        },
        {
          "courseNumber": "2",
          "courseName": "Warm Game & Grill",
          "dishes": [
            {
              "label": "Meat Option",
              "name": "Binchotan Beef Tenderloin Medallion",
              "desc": "Flame-charred beef tenderloin bite served with smoked garlic | bone-marrow chimichurri.",
              "wine": "Piccini, Toscana, Ital."
            },
            {
              "label": "Poultry Option",
              "name": "Wood-Charred Duck Breast",
              "desc": "House-smoked duck breast medallions paired with caramelized peaches | pickled radish | crisp duck skin | Pour of savory duck dashi.",
              "wine": "Dark Horse Pinot Noir, Cal."
            }
          ]
        },
        {
          "courseNumber": "3",
          "courseName": "Low & Slow Pit Smoke",
          "dishes": [
            {
              "label": "Meat Option",
              "name": "Smoked Angus Brisket (Jaffna Spice Rub)",
              "desc": "12-hour cinnamon wood-smoked Black Angus brisket finished with a dark roasted curry powder | black pepper crust.",
              "wine": "Obikwa Cab. Sauvignon, Cal."
            },
            {
              "label": "Poultry Option",
              "name": "Smoked & Roasted Chicken",
              "desc": "Sweet-tea and lemongrass brined chicken cold-smoked over cinnamon wood | glazed with tangy Alabama White sauce | cider apple slaw.",
              "wine": "Darenberg Dam, Riesling, Aus."
            }
          ]
        },
        {
          "courseNumber": "4",
          "courseName": "Palate Cleanser",
          "dishes": [
            {
              "label": "Interlude",
              "name": "Local Narang Citrus & Passionfruit Sorbet",
              "desc": "A bright, high-acid palate refresher infused with mountain citrus.",
              "wine": null
            }
          ]
        },
        {
          "courseNumber": "5",
          "courseName": "Hero Main",
          "dishes": [
            {
              "label": "Meat Option",
              "name": "Miso-Kithul & Sansho Glazed Lamb Chop",
              "desc": "French-trimmed lamb chop charred over Binchotan coals, finished | white miso | Kithul treacle reduction | roasted garlic purée.",
              "wine": "Dark Horse Pinot Noir, Cal."
            }
          ]
        },
        {
          "courseNumber": "6",
          "courseName": "Artisanal House Cheese Course",
          "dishes": [
            {
              "label": "Selection",
              "name": "Cave-Aged House Cheese Tasting",
              "desc": "Cave-aged cheeses | local wild honey | roasted nuts | house fruit preserves | toasted sourdough.",
              "wine": "Valdouro Ruby Port, Port"
            }
          ]
        },
        {
          "courseNumber": "7",
          "courseName": "Sweet Finale",
          "dishes": [
            {
              "label": "Option A",
              "name": "Rockland Red Rum & Espresso CBP",
              "desc": "Layers of milk-soaked biscuits | dark chocolate ganache | Rockland Red Rum | cold-brew espresso | toasted cashew praline.",
              "wine": "Erben Auslese, Ger."
            },
            {
              "label": "Option B",
              "name": "Biscoff, Chocolate & Narang Mousse Slice",
              "desc": "Spiced Biscoff biscuit base | dark chocolate fudge | toasted coconut crumble | vanilla mousse.",
              "wine": "Moscato 2025, S.A."
            }
          ]
        },
        {
          "courseNumber": "✦",
          "courseName": "COFFEE OR TEA",
          "dishes": [
            {
              "label": "Conclusion",
              "name": "Artisanal Coffee or Single-Estate Ceylon Tea",
              "desc": "Freshly brewed selection of premium Ceylon highland tea or single-origin espresso.",
              "wine": null
            }
          ]
        }
      ]
    }
  },
  "events": [
    {
      "id": "event-1",
      "title": "Wine & Dine Evening",
      "category": "dining",
      "day": 8,
      "month": "OCT",
      "time": "7:00 PM – 10:00 PM",
      "desc": "A curated 5-course menu paired with fine wines. An unforgettable night of flavour and atmosphere.",
      "isVip": false,
      "hasImage": false,
      "imageKey": "event_wine_dine",
      "imageData": "data:image/jpeg;base64,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"
    },
    {
      "id": "event-2",
      "title": "Live Acoustic Night",
      "category": "live-music",
      "day": 12,
      "month": "OCT",
      "time": "6:30 PM – 9:30 PM",
      "desc": "Local artists. Good vibes. Great food. Join us for an evening of live acoustic music by the lake.",
      "isVip": false,
      "hasImage": false,
      "imageKey": "event_acoustic_night",
      "imageData": "data:image/jpeg;base64,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"
    },
    {
      "id": "event-3",
      "title": "Chef's Tasting Menu",
      "category": "specials",
      "day": 16,
      "month": "OCT",
      "time": "7:00 PM – 11:00 PM",
      "desc": "A special evening featuring our seasonal tasting menu, crafted for true food lovers.",
      "isVip": false,
      "hasImage": false,
      "imageKey": "event_chefs_tasting",
      "imageData": "data:image/jpeg;base64,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"
    },
    {
      "id": "event-4",
      "title": "Sunset Terrace",
      "category": "dining",
      "day": 20,
      "month": "OCT",
      "time": "5:00 PM – 10:00 PM",
      "desc": "Relax with signature cocktails, great music and a stunning view.",
      "isVip": false,
      "hasImage": false,
      "imageKey": "event_sunset_terrace",
      "imageData": "data:image/jpeg;base64,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"
    },
    {
      "id": "event-5",
      "title": "Private Event",
      "category": "private-events",
      "day": 24,
      "month": "OCT",
      "time": "7:00 PM – 11:00 PM",
      "desc": "An exclusive evening for our valued guests.",
      "isVip": false,
      "hasImage": false,
      "imageKey": "event_private_event",
      "imageData": "data:image/jpeg;base64,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"
    }
  ]
};
  if (typeof window !== 'undefined') {
    window.BELLE_DEFAULT_DATA = data;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = data;
  }
  if (typeof root !== 'undefined') {
    root.BELLE_DEFAULT_DATA = data;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this);
