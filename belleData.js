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
    "facebookUrl": "https://www.facebook.com/belle.colombo/",
    "locationName": "Belle Colombo",
    "address": "58A Horton Place, Colombo 00700",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Belle+Colombo,+58A+Horton+Place,+Colombo+00700",
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
      "price": "2,200",
      "priceLabel": "Single",
      "price2": "3,800",
      "price2Label": "Double",
      "options": [
        { "label": "Option A: House-Made Chicken Liver Pâté" },
        { "label": "Option B: Slow-Cooked Duck Rillettes (with cinnamon & cardamom)" },
        { "label": "Option C: Creamy Wild Mushroom & Miso Pâté", "isVeg": true }
      ],
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
      "metaList": [
        {
          "badge": "ADD-ONS",
          "text": "Double Patty (<strong>LKR 1,050</strong>) · Beef Bacon (<strong>LKR 250</strong>) · Sunny-Side-Up Egg (<strong>LKR 150</strong>)"
        },
        {
          "badge": "SIDES",
          "text": "Choice of Truffle Parmesan Fries, Manioc Fries with Chilli Salt, or Fresh Side Salad"
        }
      ],
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
      "price": "3,100",
      "priceLabel": "Corned Beef",
      "price2": "3,900",
      "price2Label": "Pastrami",
      "cuts": [
        { "origin": "Slow-Simmered Corned Beef", "price": "3,100" },
        { "origin": "House-Cured Pastrami", "price": "3,900" }
      ],
      "desc": "Melted Swiss cheese | Dills | Sharp local mustard on toasted rye.",
      "meta": {
        "badge": "SIDES",
        "text": "Choice of Truffle Parmesan Fries, Manioc Fries with Chilli Salt, or Fresh Side Salad"
      },
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
      "metaList": [
        {
          "badge": "ADD-ONS",
          "text": "Sautéed Mushrooms (<strong>LKR 140</strong>) · Charred Peppers (<strong>LKR 100</strong>)"
        },
        {
          "badge": "SIDES",
          "text": "Choice of Truffle Parmesan Fries, Manioc Fries with Chilli Salt, or Fresh Side Salad"
        }
      ],
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
          "options": [
            { "label": "Option A: House-Made Chicken Liver Pâté" },
            { "label": "Option B: Slow-Cooked Duck Rillettes (with cinnamon & cardamom)" },
            { "label": "Option C: Creamy Wild Mushroom & Miso Pâté", "isVeg": true }
          ],
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
          "meta": {
            "badge": "ADD-ONS",
            "text": "Crispy Spiced Chicken (<strong>LKR 420</strong>) · Seared Prawns (<strong>LKR 550</strong>) · Grilled Octopus (<strong>LKR 600</strong>)"
          },
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
          "options": [
            { "label": "Option A: Ceylonese Red Fish & Prawn Claypot — Goraka, roasted spices, coconut milk, steamed red rice" },
            { "label": "Option B: Laksa-Style Coconut Noodle Broth — Lemongrass, galangal, chilli oil, egg noodles, crispy shallots" }
          ],
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
          "meta": {
            "badge": "ADD-ONS",
            "text": "Pan-Seared Foie Gras (<strong>LKR 3,200</strong>) · Black Truffle Shavings (<strong>LKR 1,800</strong>)"
          },
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
          "price2": "2,800",
          "price2Label": "Double",
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
          "options": [
            { "label": "Classic Beef: Melted aged cheddar, lettuce, tomato, pickles" },
            { "label": "Chicken Karaage: Ginger-garlic fried chicken, pickled cucumber ribbons, sriracha aioli" }
          ],
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
          "meta": {
            "badge": "FOR TWO",
            "text": "3 Cave-Aged Cheeses · Wild Honey & Preserves"
          },
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
      "wineCountText": "including 4 wine pairings",
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
              "desc": "Yellowfin tuna | extra virgin olive oil | crushed pink peppercorns | micro-greens.",
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
              "wine": "d'Arenberg Dam, Riesling, Aus."
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
              "wine": "Erben Auslese, Ger."
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
      "wineCountText": "including 6 wine pairings",
      "note": "Please select one option per course.",
      "courses": [
        {
          "courseNumber": "1",
          "courseName": "Cold Charcuterie & Prelude",
          "dishes": [
            {
              "label": "Meat Option",
              "name": "Savannah Beef Tartare",
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
              "desc": "House-smoked duck breast medallions paired with caramelized peaches | pickled radish | crisp duck skin | pour of savory duck dashi.",
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
              "wine": "d'Arenberg Dam, Riesling, Aus."
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
              "desc": "French-trimmed lamb chop charred over Binchotan coals, finished with white miso | Kithul treacle reduction | roasted garlic purée.",
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
      "categoryLabel": "DINING",
      "day": 8,
      "dow": "WED",
      "month": "OCT",
      "time": "7:00 PM – 10:00 PM",
      "venue": "Main Dining Hall",
      "desc": "A curated 5-course menu paired with fine wines. An unforgettable night of flavour and atmosphere.",
      "isVip": false,
      "hasImage": true,
      "imageKey": "event_wine_dine",
      "imageData": "assets/events/event_wine_dine.jpg"
    },
    {
      "id": "event-2",
      "title": "Live Acoustic Night",
      "category": "live-music",
      "categoryLabel": "LIVE MUSIC",
      "day": 12,
      "dow": "SUN",
      "month": "OCT",
      "time": "6:30 PM – 9:30 PM",
      "venue": "Outdoor Terrace",
      "desc": "Local artists. Good vibes. Great food. Join us for an evening of live acoustic music by the lake.",
      "isVip": false,
      "hasImage": true,
      "imageKey": "event_acoustic_night",
      "imageData": "assets/events/event_acoustic_night.jpg"
    },
    {
      "id": "event-3",
      "title": "Chef's Tasting Menu",
      "category": "specials",
      "categoryLabel": "SPECIALS",
      "day": 16,
      "dow": "THU",
      "month": "OCT",
      "time": "7:00 PM – 11:00 PM",
      "venue": "Main Dining Hall",
      "desc": "A special evening featuring our seasonal tasting menu, crafted for true food lovers.",
      "isVip": false,
      "hasImage": true,
      "imageKey": "event_chefs_tasting",
      "imageData": "assets/events/event_chefs_tasting.jpg"
    },
    {
      "id": "event-4",
      "title": "Sunset Terrace",
      "category": "dining",
      "categoryLabel": "DINING",
      "day": 20,
      "dow": "MON",
      "month": "OCT",
      "time": "5:00 PM – 10:00 PM",
      "venue": "Rooftop Terrace",
      "desc": "Relax with signature cocktails, great music and a stunning view.",
      "isVip": false,
      "hasImage": true,
      "imageKey": "event_sunset_terrace",
      "imageData": "assets/events/event_sunset_terrace.jpg"
    },
    {
      "id": "event-5",
      "title": "Private Event",
      "category": "private-events",
      "categoryLabel": "PRIVATE EVENTS",
      "day": 24,
      "dow": "FRI",
      "month": "OCT",
      "time": "7:00 PM – 11:00 PM",
      "venue": "Main Dining Hall",
      "desc": "An exclusive evening for our valued guests.",
      "isVip": false,
      "hasImage": true,
      "imageKey": "event_private_event",
      "imageData": "assets/events/event_private_event.jpg"
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
