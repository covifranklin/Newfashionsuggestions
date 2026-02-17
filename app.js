/* ========================================
   SARTORIAL — Men's Fashion Advisor
   Core application logic & recommendation engine
   ======================================== */

// ---- Colour Database ----
const COLOURS = [
  { id: 'white',       name: 'White',        hex: '#FFFFFF' },
  { id: 'off-white',   name: 'Off-White',    hex: '#F5F0E8' },
  { id: 'cream',       name: 'Cream',        hex: '#F2E8D4' },
  { id: 'beige',       name: 'Beige',        hex: '#D4C5A9' },
  { id: 'tan',         name: 'Tan',          hex: '#C4A882' },
  { id: 'camel',       name: 'Camel',        hex: '#C19A6B' },
  { id: 'brown',       name: 'Brown',        hex: '#7B5B3A' },
  { id: 'dark-brown',  name: 'Dark Brown',   hex: '#4A3728' },
  { id: 'light-grey',  name: 'Light Grey',   hex: '#C8C4BE' },
  { id: 'grey',        name: 'Grey',         hex: '#888580' },
  { id: 'charcoal',    name: 'Charcoal',     hex: '#4A4845' },
  { id: 'black',       name: 'Black',        hex: '#1A1A1A' },
  { id: 'navy',        name: 'Navy',         hex: '#2C3E6B' },
  { id: 'light-blue',  name: 'Light Blue',   hex: '#8AAEC4' },
  { id: 'blue',        name: 'Blue',         hex: '#4A6FA5' },
  { id: 'royal-blue',  name: 'Royal Blue',   hex: '#3A5BA0' },
  { id: 'teal',        name: 'Teal',         hex: '#4A7C7E' },
  { id: 'sage',        name: 'Sage',         hex: '#8A9A7B' },
  { id: 'olive',       name: 'Olive',        hex: '#6B7A4A' },
  { id: 'forest-green',name: 'Forest Green', hex: '#3A5A3A' },
  { id: 'burgundy',    name: 'Burgundy',     hex: '#7A3040' },
  { id: 'maroon',      name: 'Maroon',       hex: '#5A2A2A' },
  { id: 'rust',        name: 'Rust',         hex: '#A85A3A' },
  { id: 'terracotta',  name: 'Terracotta',   hex: '#C47A5A' },
  { id: 'mustard',     name: 'Mustard',      hex: '#C4A832' },
  { id: 'lavender',    name: 'Lavender',     hex: '#A89EC4' },
  { id: 'pink',        name: 'Dusty Pink',   hex: '#C4A0A0' },
  { id: 'coral',       name: 'Coral',        hex: '#C4826A' },
];

// ---- Colour Pairing Rules ----
// Each colour maps to an array of complementary colour IDs with pairing notes
const COLOUR_PAIRINGS = {
  'white': [
    { id: 'navy',         note: 'Timeless, clean contrast' },
    { id: 'charcoal',     note: 'Sophisticated monochrome depth' },
    { id: 'black',        note: 'Sharp and high-contrast' },
    { id: 'light-blue',   note: 'Fresh, airy and relaxed' },
    { id: 'olive',        note: 'Earthy counterbalance' },
    { id: 'burgundy',     note: 'Rich and refined' },
    { id: 'camel',        note: 'Warm, Mediterranean feel' },
    { id: 'sage',         note: 'Soft, nature-inspired' },
    { id: 'terracotta',   note: 'Warm earthy elegance' },
  ],
  'off-white': [
    { id: 'navy',         note: 'Refined nautical vibe' },
    { id: 'brown',        note: 'Classic old-money palette' },
    { id: 'olive',        note: 'Muted earthy combo' },
    { id: 'charcoal',     note: 'Soft contrast, very elegant' },
    { id: 'burgundy',     note: 'Warm sophistication' },
    { id: 'sage',         note: 'Gentle, tonal harmony' },
    { id: 'teal',         note: 'Unexpected but refined' },
  ],
  'cream': [
    { id: 'navy',         note: 'Preppy and polished' },
    { id: 'brown',        note: 'Natural, heritage feel' },
    { id: 'olive',        note: 'Safari-inspired warmth' },
    { id: 'charcoal',     note: 'Understated elegance' },
    { id: 'burgundy',     note: 'Autumnal richness' },
    { id: 'forest-green', note: 'Deep, grounding contrast' },
    { id: 'rust',         note: 'Warm seasonal palette' },
  ],
  'beige': [
    { id: 'navy',         note: 'Classic smart-casual anchor' },
    { id: 'white',        note: 'Light and breezy' },
    { id: 'brown',        note: 'Tonal layering' },
    { id: 'olive',        note: 'Earthy harmony' },
    { id: 'charcoal',     note: 'Modern and grounded' },
    { id: 'burgundy',     note: 'Warm and inviting' },
    { id: 'forest-green', note: 'Sophisticated nature palette' },
  ],
  'tan': [
    { id: 'navy',         note: 'Polished and reliable' },
    { id: 'white',        note: 'Clean summer look' },
    { id: 'charcoal',     note: 'Urban sophistication' },
    { id: 'olive',        note: 'Safari-chic' },
    { id: 'burgundy',     note: 'Warm autumnal elegance' },
    { id: 'cream',        note: 'Tonal warmth' },
    { id: 'teal',         note: 'Unexpected pop' },
  ],
  'camel': [
    { id: 'navy',         note: 'Quintessential classic combo' },
    { id: 'white',        note: 'Clean and bright' },
    { id: 'charcoal',     note: 'Modern urban pairing' },
    { id: 'cream',        note: 'Quiet luxury vibes' },
    { id: 'dark-brown',   note: 'Rich monochrome depth' },
    { id: 'burgundy',     note: 'Opulent warmth' },
    { id: 'olive',        note: 'Earthy and masculine' },
  ],
  'brown': [
    { id: 'navy',         note: 'Heritage classic' },
    { id: 'white',        note: 'Fresh contrast' },
    { id: 'cream',        note: 'Warm and natural' },
    { id: 'beige',        note: 'Tonal layering' },
    { id: 'olive',        note: 'Earthy depth' },
    { id: 'light-blue',   note: 'Relaxed elegance' },
    { id: 'sage',         note: 'Muted nature tones' },
    { id: 'rust',         note: 'Warm autumnal palette' },
  ],
  'dark-brown': [
    { id: 'cream',        note: 'High-contrast elegance' },
    { id: 'camel',        note: 'Tonal warmth' },
    { id: 'white',        note: 'Sharp and clean' },
    { id: 'navy',         note: 'Deep and dignified' },
    { id: 'olive',        note: 'Woodland richness' },
    { id: 'beige',        note: 'Soft classic' },
    { id: 'sage',         note: 'Nature-inspired refinement' },
  ],
  'light-grey': [
    { id: 'navy',         note: 'Boardroom staple' },
    { id: 'white',        note: 'Clean and minimalist' },
    { id: 'charcoal',     note: 'Monochrome depth' },
    { id: 'light-blue',   note: 'Cool-toned harmony' },
    { id: 'burgundy',     note: 'Sophisticated accent' },
    { id: 'pink',         note: 'Modern and fresh' },
    { id: 'sage',         note: 'Soft, muted combination' },
  ],
  'grey': [
    { id: 'white',        note: 'Clean, modern base' },
    { id: 'navy',         note: 'Versatile and reliable' },
    { id: 'black',        note: 'Urban edge' },
    { id: 'burgundy',     note: 'Rich accent pairing' },
    { id: 'camel',        note: 'Warm-cool balance' },
    { id: 'olive',        note: 'Understated and masculine' },
    { id: 'light-blue',   note: 'Business-casual essential' },
    { id: 'mustard',      note: 'Trend-forward pop' },
  ],
  'charcoal': [
    { id: 'white',        note: 'High-contrast classic' },
    { id: 'cream',        note: 'Soft, luxurious contrast' },
    { id: 'camel',        note: 'Warm modern elegance' },
    { id: 'light-blue',   note: 'Fresh professional look' },
    { id: 'burgundy',     note: 'Deep, rich pairing' },
    { id: 'sage',         note: 'Muted, sophisticated' },
    { id: 'lavender',     note: 'Trend-forward refinement' },
    { id: 'rust',         note: 'Bold warm accent' },
  ],
  'black': [
    { id: 'white',        note: 'Maximum contrast, always works' },
    { id: 'grey',         note: 'Monochrome layering' },
    { id: 'cream',        note: 'Warmer than pure white' },
    { id: 'navy',         note: 'Deep-on-deep sophistication' },
    { id: 'burgundy',     note: 'Dark, dramatic elegance' },
    { id: 'camel',        note: 'Modern luxury contrast' },
    { id: 'olive',        note: 'Utilitarian edge' },
    { id: 'charcoal',     note: 'Subtle tonal depth' },
  ],
  'navy': [
    { id: 'white',        note: 'Crisp and classic' },
    { id: 'cream',        note: 'Soft, sophisticated' },
    { id: 'camel',        note: 'The quintessential pairing' },
    { id: 'light-grey',   note: 'Cool professional' },
    { id: 'light-blue',   note: 'Tonal blue harmony' },
    { id: 'burgundy',     note: 'Rich complementary' },
    { id: 'pink',         note: 'Confident and modern' },
    { id: 'mustard',      note: 'Bold prep-school accent' },
    { id: 'terracotta',   note: 'Warm Mediterranean vibe' },
  ],
  'light-blue': [
    { id: 'navy',         note: 'Tonal blue elegance' },
    { id: 'white',        note: 'Clean and effortless' },
    { id: 'grey',         note: 'Cool modern minimalism' },
    { id: 'beige',        note: 'Relaxed smart-casual' },
    { id: 'brown',        note: 'Italian sprezzatura' },
    { id: 'charcoal',     note: 'Professional sharpness' },
    { id: 'olive',        note: 'Earthy meets cool' },
  ],
  'blue': [
    { id: 'white',        note: 'Clean and fresh' },
    { id: 'grey',         note: 'Cool-toned balance' },
    { id: 'camel',        note: 'Warm-cool harmony' },
    { id: 'cream',        note: 'Relaxed elegance' },
    { id: 'charcoal',     note: 'Sharp and modern' },
    { id: 'brown',        note: 'Heritage pairing' },
    { id: 'terracotta',   note: 'Complementary warmth' },
  ],
  'royal-blue': [
    { id: 'white',        note: 'Bold and clean' },
    { id: 'grey',         note: 'Grounding neutral' },
    { id: 'charcoal',     note: 'Deep modern look' },
    { id: 'camel',        note: 'Warm accent contrast' },
    { id: 'cream',        note: 'Softened vibrancy' },
    { id: 'black',        note: 'Dramatic edge' },
  ],
  'teal': [
    { id: 'cream',        note: 'Soft and interesting' },
    { id: 'white',        note: 'Bright and fresh' },
    { id: 'grey',         note: 'Understated cool' },
    { id: 'tan',          note: 'Warm balance' },
    { id: 'charcoal',     note: 'Deep and polished' },
    { id: 'navy',         note: 'Tonal depth' },
    { id: 'coral',        note: 'Complementary pop' },
  ],
  'sage': [
    { id: 'cream',        note: 'Soft natural palette' },
    { id: 'white',        note: 'Clean and botanical' },
    { id: 'beige',        note: 'Quiet earthy harmony' },
    { id: 'charcoal',     note: 'Modern grounding' },
    { id: 'brown',        note: 'Woodland-inspired' },
    { id: 'navy',         note: 'Refined contrast' },
    { id: 'terracotta',   note: 'Warm complementary' },
  ],
  'olive': [
    { id: 'white',        note: 'Clean and military-fresh' },
    { id: 'cream',        note: 'Warm tonal blend' },
    { id: 'navy',         note: 'Deep, commanding combo' },
    { id: 'charcoal',     note: 'Urban utility' },
    { id: 'brown',        note: 'Earthy brotherhood' },
    { id: 'beige',        note: 'Safari elegance' },
    { id: 'rust',         note: 'Autumnal richness' },
    { id: 'burgundy',     note: 'Deep warm palette' },
  ],
  'forest-green': [
    { id: 'cream',        note: 'Rich and classic' },
    { id: 'camel',        note: 'Warm heritage look' },
    { id: 'white',        note: 'Fresh contrast' },
    { id: 'brown',        note: 'Deep woodland tones' },
    { id: 'navy',         note: 'Commanding and dignified' },
    { id: 'beige',        note: 'Soft natural pairing' },
    { id: 'charcoal',     note: 'Modern dark palette' },
  ],
  'burgundy': [
    { id: 'navy',         note: 'The power combination' },
    { id: 'cream',        note: 'Soft, luxurious contrast' },
    { id: 'camel',        note: 'Warm old-money vibe' },
    { id: 'charcoal',     note: 'Sleek and modern' },
    { id: 'grey',         note: 'Grounded sophistication' },
    { id: 'white',        note: 'Clean and striking' },
    { id: 'olive',        note: 'Rich earthy depth' },
    { id: 'black',        note: 'Dark drama' },
  ],
  'maroon': [
    { id: 'cream',        note: 'Warm and refined' },
    { id: 'navy',         note: 'Deep complementary' },
    { id: 'camel',        note: 'Heritage warmth' },
    { id: 'charcoal',     note: 'Dark, polished look' },
    { id: 'beige',        note: 'Softened depth' },
    { id: 'white',        note: 'Fresh counterpoint' },
  ],
  'rust': [
    { id: 'navy',         note: 'Warm-cool balance' },
    { id: 'cream',        note: 'Soft, warm pairing' },
    { id: 'olive',        note: 'Autumn in one outfit' },
    { id: 'charcoal',     note: 'Urban meets earthy' },
    { id: 'white',        note: 'Clean and bold' },
    { id: 'brown',        note: 'Tonal warm depth' },
    { id: 'sage',         note: 'Natural complementary' },
  ],
  'terracotta': [
    { id: 'navy',         note: 'Mediterranean elegance' },
    { id: 'cream',        note: 'Sandy warmth' },
    { id: 'white',        note: 'Clean contrast' },
    { id: 'olive',        note: 'Earthy duo' },
    { id: 'charcoal',     note: 'Modern grounding' },
    { id: 'sage',         note: 'Nature-inspired harmony' },
    { id: 'beige',        note: 'Tonal layering' },
  ],
  'mustard': [
    { id: 'navy',         note: 'Bold prep-school classic' },
    { id: 'charcoal',     note: 'Modern and sharp' },
    { id: 'cream',        note: 'Warm tonal blend' },
    { id: 'olive',        note: 'Earthy richness' },
    { id: 'brown',        note: 'Heritage autumn feel' },
    { id: 'grey',         note: 'Understated pop' },
    { id: 'burgundy',     note: 'Warm, bold pairing' },
  ],
  'lavender': [
    { id: 'charcoal',     note: 'Sophisticated modern look' },
    { id: 'navy',         note: 'Cool-toned elegance' },
    { id: 'cream',        note: 'Soft and approachable' },
    { id: 'grey',         note: 'Understated harmony' },
    { id: 'white',        note: 'Light and fresh' },
    { id: 'olive',        note: 'Unexpected earthy balance' },
  ],
  'pink': [
    { id: 'navy',         note: 'Confident and sharp' },
    { id: 'charcoal',     note: 'Modern masculinity' },
    { id: 'grey',         note: 'Cool understated pairing' },
    { id: 'cream',        note: 'Warm and inviting' },
    { id: 'white',        note: 'Clean spring look' },
    { id: 'olive',        note: 'Earthy-soft contrast' },
    { id: 'camel',        note: 'Warm and refined' },
  ],
  'coral': [
    { id: 'navy',         note: 'Punchy summer contrast' },
    { id: 'white',        note: 'Bright and holiday-fresh' },
    { id: 'cream',        note: 'Warm tonal blend' },
    { id: 'charcoal',     note: 'Grounding depth' },
    { id: 'teal',         note: 'Bold complementary' },
    { id: 'beige',        note: 'Relaxed warmth' },
  ],
};

// ---- Outfit Templates per Occasion ----
const OUTFIT_TEMPLATES = {
  casual: [
    {
      name: 'The Easy Essential',
      vibe: 'Effortlessly cool',
      slots: {
        'top':      { label: 'Top',       fallback: 'Well-fitted crew-neck tee' },
        'bottom':   { label: 'Bottom',    fallback: 'Slim tapered chinos' },
        'shoes':    { label: 'Shoes',     fallback: 'Clean white leather sneakers' },
        'layer':    { label: 'Layer',     fallback: 'Lightweight bomber jacket' },
        'accessory':{ label: 'Accessory', fallback: 'Minimal watch' },
      },
    },
    {
      name: 'Weekend Wander',
      vibe: 'Relaxed but put-together',
      slots: {
        'top':      { label: 'Top',       fallback: 'Relaxed linen shirt' },
        'bottom':   { label: 'Bottom',    fallback: 'Straight-leg jeans' },
        'shoes':    { label: 'Shoes',     fallback: 'Suede desert boots' },
        'layer':    { label: 'Layer',     fallback: 'Cotton overshirt' },
        'accessory':{ label: 'Accessory', fallback: 'Woven leather belt' },
      },
    },
  ],
  'smart-casual': [
    {
      name: 'The Modern Classic',
      vibe: 'Polished without trying',
      slots: {
        'top':      { label: 'Top',       fallback: 'Oxford button-down shirt' },
        'bottom':   { label: 'Bottom',    fallback: 'Tailored slim chinos' },
        'shoes':    { label: 'Shoes',     fallback: 'Leather loafers' },
        'layer':    { label: 'Layer',     fallback: 'Unstructured cotton blazer' },
        'accessory':{ label: 'Accessory', fallback: 'Leather strap watch' },
      },
    },
    {
      name: 'The New Prep',
      vibe: 'Sharp and contemporary',
      slots: {
        'top':      { label: 'Top',       fallback: 'Knit polo shirt' },
        'bottom':   { label: 'Bottom',    fallback: 'Pressed wool trousers' },
        'shoes':    { label: 'Shoes',     fallback: 'Penny loafers' },
        'layer':    { label: 'Layer',     fallback: 'V-neck merino sweater' },
        'accessory':{ label: 'Accessory', fallback: 'Silk pocket square' },
      },
    },
  ],
  business: [
    {
      name: 'Boardroom Ready',
      vibe: 'Commanding and professional',
      slots: {
        'top':      { label: 'Top',       fallback: 'Crisp dress shirt' },
        'bottom':   { label: 'Bottom',    fallback: 'Tailored suit trousers' },
        'shoes':    { label: 'Shoes',     fallback: 'Oxford cap-toe shoes' },
        'layer':    { label: 'Layer',     fallback: 'Fitted two-button blazer' },
        'accessory':{ label: 'Accessory', fallback: 'Silk tie & metal tie bar' },
      },
    },
    {
      name: 'Business Modern',
      vibe: 'Authoritative yet approachable',
      slots: {
        'top':      { label: 'Top',       fallback: 'Spread-collar dress shirt' },
        'bottom':   { label: 'Bottom',    fallback: 'Flat-front wool trousers' },
        'shoes':    { label: 'Shoes',     fallback: 'Leather monk-strap shoes' },
        'layer':    { label: 'Layer',     fallback: 'Slim-fit suit jacket' },
        'accessory':{ label: 'Accessory', fallback: 'Dress watch & cufflinks' },
      },
    },
  ],
  'date-night': [
    {
      name: 'Understated Charmer',
      vibe: 'Effortlessly attractive',
      slots: {
        'top':      { label: 'Top',       fallback: 'Fitted henley or mock-neck' },
        'bottom':   { label: 'Bottom',    fallback: 'Dark slim jeans' },
        'shoes':    { label: 'Shoes',     fallback: 'Clean Chelsea boots' },
        'layer':    { label: 'Layer',     fallback: 'Leather or suede jacket' },
        'accessory':{ label: 'Accessory', fallback: 'Simple silver chain' },
      },
    },
    {
      name: 'Dinner Date',
      vibe: 'Refined and intentional',
      slots: {
        'top':      { label: 'Top',       fallback: 'Silk-blend camp collar shirt' },
        'bottom':   { label: 'Bottom',    fallback: 'Tailored dark trousers' },
        'shoes':    { label: 'Shoes',     fallback: 'Suede loafers' },
        'layer':    { label: 'Layer',     fallback: 'Knit blazer' },
        'accessory':{ label: 'Accessory', fallback: 'Luxury fragrance' },
      },
    },
  ],
  streetwear: [
    {
      name: 'Urban Edge',
      vibe: 'Bold and expressive',
      slots: {
        'top':      { label: 'Top',       fallback: 'Oversized graphic tee' },
        'bottom':   { label: 'Bottom',    fallback: 'Wide-leg cargo trousers' },
        'shoes':    { label: 'Shoes',     fallback: 'Chunky retro sneakers' },
        'layer':    { label: 'Layer',     fallback: 'Cropped puffer vest' },
        'accessory':{ label: 'Accessory', fallback: 'Beanie & crossbody bag' },
      },
    },
    {
      name: 'Clean Street',
      vibe: 'Minimalist with attitude',
      slots: {
        'top':      { label: 'Top',       fallback: 'Boxy fit hoodie' },
        'bottom':   { label: 'Bottom',    fallback: 'Straight-leg track pants' },
        'shoes':    { label: 'Shoes',     fallback: 'Low-profile skate shoes' },
        'layer':    { label: 'Layer',     fallback: 'Coach jacket' },
        'accessory':{ label: 'Accessory', fallback: 'Cap & statement socks' },
      },
    },
  ],
  formal: [
    {
      name: 'Black Tie Classic',
      vibe: 'Timeless elegance',
      slots: {
        'top':      { label: 'Top',       fallback: 'Wing-tip tuxedo shirt' },
        'bottom':   { label: 'Bottom',    fallback: 'Satin-stripe tuxedo trousers' },
        'shoes':    { label: 'Shoes',     fallback: 'Patent leather Oxfords' },
        'layer':    { label: 'Layer',     fallback: 'Peak-lapel dinner jacket' },
        'accessory':{ label: 'Accessory', fallback: 'Bow tie & silk cummerbund' },
      },
    },
    {
      name: 'Contemporary Formal',
      vibe: 'Modern sophistication',
      slots: {
        'top':      { label: 'Top',       fallback: 'Slim-fit dress shirt' },
        'bottom':   { label: 'Bottom',    fallback: 'Pressed wool suit trousers' },
        'shoes':    { label: 'Shoes',     fallback: 'Polished derby shoes' },
        'layer':    { label: 'Layer',     fallback: 'Shawl-collar suit jacket' },
        'accessory':{ label: 'Accessory', fallback: 'Slim tie & dress watch' },
      },
    },
  ],
};

// ---- Category-to-slot mapping ----
const CATEGORY_SLOT = {
  't-shirt':     'top',
  'shirt':       'top',
  'polo':        'top',
  'hoodie':      'top',
  'jacket':      'layer',
  'blazer':      'layer',
  'trousers':    'bottom',
  'jeans':       'bottom',
  'shorts':      'bottom',
  'sneakers':    'shoes',
  'boots':       'shoes',
  'accessories': 'accessory',
};

// ---- Clothing descriptions by category and colour ----
function describeItem(category, colourName) {
  const descriptions = {
    't-shirt':     `${colourName} crew-neck t-shirt`,
    'shirt':       `${colourName} dress shirt`,
    'polo':        `${colourName} polo shirt`,
    'hoodie':      `${colourName} hoodie`,
    'jacket':      `${colourName} jacket`,
    'blazer':      `${colourName} blazer`,
    'trousers':    `${colourName} trousers`,
    'jeans':       `${colourName} jeans`,
    'shorts':      `${colourName} shorts`,
    'sneakers':    `${colourName} sneakers`,
    'boots':       `${colourName} boots`,
    'accessories': `${colourName} accessories`,
  };
  return descriptions[category] || `${colourName} ${category}`;
}

// ---- Style Tips Database ----
const STYLE_TIPS = {
  casual: [
    { tag: '2025 Trend', text: 'Relaxed tailoring is king — think soft-shouldered blazers over t-shirts. The oversized-but-intentional silhouette continues to dominate casual wear.' },
    { tag: 'Fit Tip', text: 'Aim for a "comfortable slim" fit. Not skin-tight, not baggy. Your clothes should follow your body without clinging.' },
    { tag: 'Texture Play', text: 'Mix textures to add depth: pair a smooth cotton tee with textured linen trousers or a waffle-knit henley with smooth chinos.' },
    { tag: 'Sneaker Game', text: 'Clean, minimal sneakers remain the casual cornerstone. White leather or off-white suede pairs with almost everything.' },
  ],
  'smart-casual': [
    { tag: '2025 Trend', text: 'The "quiet luxury" movement is still strong — invest in quality fabrics over loud logos. Cashmere, merino, and premium cotton speak volumes.' },
    { tag: 'Layering', text: 'Master the art of the third piece — a well-fitted blazer, a knit cardigan, or a leather jacket transforms any outfit.' },
    { tag: 'Fit Tip', text: 'Trousers with a slight taper and no break (or a small break) create the most modern smart-casual silhouette.' },
    { tag: 'Details', text: 'Roll your sleeves to show you\'re relaxed but intentional. A good watch and quality belt are the only accessories you need.' },
  ],
  business: [
    { tag: '2025 Trend', text: 'Power dressing is evolving — monochrome suiting and tonal outfits are replacing the traditional navy suit + white shirt formula in progressive offices.' },
    { tag: 'Fit Rule', text: 'Your jacket shoulder seam should sit right at your shoulder point. This single detail makes or breaks a suit.' },
    { tag: 'Modern Touch', text: 'Swap the tie for a well-chosen turtleneck under your blazer for a modern business look that commands respect.' },
    { tag: 'Colour Strategy', text: 'Build your business wardrobe around navy, charcoal, and light grey — these three suit colours handle 90% of professional situations.' },
  ],
  'date-night': [
    { tag: '2025 Trend', text: 'Dark romanticism is in — deep jewel tones, rich textures, and moody colour palettes create magnetic evening looks.' },
    { tag: 'Fragrance', text: 'Your outfit is incomplete without a scent. Woody, amber, or oud-based fragrances are trending for evening wear.' },
    { tag: 'Fit Tip', text: 'Clothes should be slightly more fitted than your casual wear — not tight, but showing you made an effort.' },
    { tag: 'Details', text: 'One statement piece is enough. A great jacket, an interesting shirt, or standout boots — let one piece do the talking.' },
  ],
  streetwear: [
    { tag: '2025 Trend', text: 'Gorpcore meets luxury — trail runners, technical fabrics, and outdoor-inspired pieces styled with tailored basics define the new street look.' },
    { tag: 'Proportion', text: 'Play with proportions: oversized top + slim bottom, or fitted top + wide-leg trousers. Contrast creates visual interest.' },
    { tag: 'Colour Block', text: 'Bold colour blocking is back — pair earth tones with one unexpected bright accent piece for a curated street look.' },
    { tag: 'Layering', text: 'Streetwear thrives on layering. Tee + open overshirt + vest creates dimension. Visible waistbands and hems add intentional detail.' },
  ],
  formal: [
    { tag: '2025 Trend', text: 'Velvet dinner jackets and textured fabrics are gaining ground in formal wear — a departure from the classic all-black tuxedo.' },
    { tag: 'Fit Rule', text: 'Formal wear demands precision tailoring. Get your suit altered — the difference between off-the-rack and tailored is night and day.' },
    { tag: 'Modern Touch', text: 'A slim black tie is replacing the bow tie at many formal events. Know the dress code, but a slim tie reads sophisticated.' },
    { tag: 'Details', text: 'Subtle details matter most in formal wear: quality cufflinks, polished shoes, and a well-pressed pocket square elevate everything.' },
  ],
};

// ---- Do's and Don'ts by Occasion ----
const DOS_DONTS = {
  casual: {
    dos: [
      'Invest in a few high-quality basics that fit perfectly',
      'Use accessories sparingly to elevate a simple outfit',
      'Match your leather — belt colour and shoe colour should align',
      'Experiment with one new trend piece per outfit',
    ],
    donts: [
      'Wear graphic tees with cargo shorts past your twenties',
      'Mix more than three colours in one outfit',
      'Wear athletic wear outside the gym (unless intentionally styled)',
      'Neglect grooming — wrinkled clothes undo any outfit',
    ],
  },
  'smart-casual': {
    dos: [
      'Layer intentionally — each piece should work on its own',
      'Get your trousers hemmed to the right length',
      'Mix casual and dressy pieces (jeans + blazer)',
      'Stick to muted, complementary colour combinations',
    ],
    donts: [
      'Wear a full suit to a smart-casual event — you\'ll look overdressed',
      'Pair sneakers with a blazer unless they\'re premium and clean',
      'Wear short-sleeve dress shirts — roll long sleeves instead',
      'Overdo the accessories — less is more',
    ],
  },
  business: {
    dos: [
      'Get your suit properly tailored — fit is everything',
      'Keep shirts crisp and well-pressed',
      'Invest in quality leather shoes and maintain them',
      'Build a capsule of 3 suits, 5 shirts, and 3 ties',
    ],
    donts: [
      'Wear a suit jacket that\'s too long — it should cover your seat',
      'Leave the bottom button of your jacket fastened',
      'Wear white socks with dress shoes',
      'Choose novelty ties or overly busy patterns',
    ],
  },
  'date-night': {
    dos: [
      'Wear something that makes you feel confident',
      'Apply fragrance to pulse points 30 minutes before',
      'Choose one conversation-starting piece',
      'Make sure your shoes are clean and polished',
    ],
    donts: [
      'Try an entirely new style — wear what you know works',
      'Overdo cologne — two sprays maximum',
      'Wear overly casual items like flip-flops or ratty tees',
      'Forget to check yourself in full-length mirror before leaving',
    ],
  },
  streetwear: {
    dos: [
      'Mix high and low — pair designer with thrift finds',
      'Keep sneakers clean and in rotation',
      'Use colour strategically — muted base with one bold piece',
      'Follow proportional rules even in oversized fits',
    ],
    donts: [
      'Cover yourself head-to-toe in logos',
      'Wear clothes so oversized they look like you borrowed them',
      'Copy full outfits from influencers — develop your own style',
      'Ignore fabric quality — cheap materials ruin any look',
    ],
  },
  formal: {
    dos: [
      'Get your formal wear tailored well in advance',
      'Polish shoes the night before',
      'Match metals — gold cufflinks with a gold watch',
      'Practice tying your bow tie (clip-ons are noticeable)',
    ],
    donts: [
      'Wear a belt with a tuxedo — use suspenders or a side-tab trouser',
      'Choose a coloured shirt — stick to white or ivory',
      'Forget to remove the stitching from jacket vents',
      'Wear a long tie with a tuxedo (unless explicitly modern-formal)',
    ],
  },
};

// ---- Application State ----
let state = {
  category: null,
  colour: null,
  occasion: null,
};

// ---- DOM Elements ----
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const heroSection      = $('#heroSection');
const selectorSection  = $('#selectorSection');
const resultsSection   = $('#resultsSection');
const startBtn         = $('#startBtn');
const backBtn          = $('#backBtn');
const categoryGrid     = $('#categoryGrid');
const colorPicker      = $('#colorPicker');
const colorGrid        = $('#colorGrid');
const selectedItemName = $('#selectedItemName');
const occasionPicker   = $('#occasionPicker');
const occasionGrid     = $('#occasionGrid');
const currentSeason    = $('#currentSeason');

// ---- Init ----
function init() {
  setSeason();
  startBtn.addEventListener('click', showSelector);
  backBtn.addEventListener('click', resetAll);
  setupCategoryListeners();
  setupOccasionListeners();
}

function setSeason() {
  const month = new Date().getMonth();
  const seasons = [
    'Winter', 'Winter', 'Spring', 'Spring', 'Spring', 'Summer',
    'Summer', 'Summer', 'Autumn', 'Autumn', 'Autumn', 'Winter',
  ];
  const year = new Date().getFullYear();
  currentSeason.textContent = `${seasons[month]} ${year}`;
}

// ---- Navigation ----
function showSelector() {
  heroSection.classList.add('hidden');
  selectorSection.classList.remove('hidden');
  selectorSection.scrollIntoView({ behavior: 'smooth' });
}

function resetAll() {
  state = { category: null, colour: null, occasion: null };
  resultsSection.classList.add('hidden');
  selectorSection.classList.add('hidden');
  heroSection.classList.remove('hidden');

  $$('.card.active').forEach(c => c.classList.remove('active'));
  $$('.color-swatch.active').forEach(c => c.classList.remove('active'));
  colorPicker.classList.add('hidden');
  occasionPicker.classList.add('hidden');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---- Category Selection ----
function setupCategoryListeners() {
  $$('.card--category').forEach(card => {
    card.addEventListener('click', () => {
      $$('.card--category').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      state.category = card.dataset.category;
      showColorPicker();
    });
  });
}

function showColorPicker() {
  selectedItemName.textContent = state.category.replace('-', ' ');
  colorGrid.innerHTML = '';

  COLOURS.forEach(colour => {
    const btn = document.createElement('button');
    btn.className = 'color-swatch';
    btn.dataset.colour = colour.id;
    btn.innerHTML = `
      <span class="color-swatch__circle" style="background:${colour.hex}"></span>
      <span class="color-swatch__name">${colour.name}</span>
    `;
    btn.addEventListener('click', () => {
      $$('.color-swatch').forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
      state.colour = colour.id;
      showOccasionPicker();
    });
    colorGrid.appendChild(btn);
  });

  colorPicker.classList.remove('hidden');
  colorPicker.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ---- Occasion Selection ----
function setupOccasionListeners() {
  $$('.card--occasion').forEach(card => {
    card.addEventListener('click', () => {
      $$('.card--occasion').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      state.occasion = card.dataset.occasion;
      generateResults();
    });
  });
}

function showOccasionPicker() {
  occasionPicker.classList.remove('hidden');
  occasionPicker.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ---- Results Generation ----
function generateResults() {
  const { category, colour, occasion } = state;
  const colourObj = COLOURS.find(c => c.id === colour);
  const pairings = COLOUR_PAIRINGS[colour] || [];

  renderContext(category, colourObj, occasion);
  renderPalette(pairings);
  renderOutfits(category, colourObj, occasion, pairings);
  renderTips(occasion);
  renderDosDonts(occasion);

  selectorSection.classList.add('hidden');
  resultsSection.classList.remove('hidden');
  resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function renderContext(category, colourObj, occasion) {
  const ctx = $('#resultsContext');
  const prettyCategory = category.replace('-', ' ');
  const prettyOccasion = occasion.replace('-', ' ');
  ctx.innerHTML = `
    <span class="results__context-chip">
      <span class="results__context-dot" style="background:${colourObj.hex}"></span>
      ${colourObj.name} ${prettyCategory}
    </span>
    <span class="results__context-chip">${prettyOccasion}</span>
  `;
}

function renderPalette(pairings) {
  const grid = $('#paletteGrid');
  grid.innerHTML = '';

  pairings.forEach(p => {
    const col = COLOURS.find(c => c.id === p.id);
    if (!col) return;
    const card = document.createElement('div');
    card.className = 'palette__card fade-in';
    card.innerHTML = `
      <div class="palette__swatch" style="background:${col.hex}" data-hex="${col.hex}"></div>
      <div class="palette__info">
        <div class="palette__name">${col.name}</div>
        <div class="palette__desc">${p.note}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderOutfits(category, colourObj, occasion, pairings) {
  const grid = $('#outfitGrid');
  grid.innerHTML = '';

  const templates = OUTFIT_TEMPLATES[occasion] || OUTFIT_TEMPLATES.casual;
  const slot = CATEGORY_SLOT[category];
  const itemDesc = describeItem(category, colourObj.name);

  templates.forEach(template => {
    const card = document.createElement('div');
    card.className = 'outfit-card fade-in';

    let itemsHTML = '';
    const usedColours = [];

    Object.entries(template.slots).forEach(([slotKey, slotInfo]) => {
      let text, dotColour;

      if (slotKey === slot) {
        // This is the user's chosen item
        text = `<span class="outfit-card__item-label">${slotInfo.label}:</span> ${itemDesc}`;
        dotColour = colourObj.hex;
      } else {
        // Pick a complementary colour for this slot
        const available = pairings.filter(p => !usedColours.includes(p.id));
        const pick = available.length > 0
          ? available[Math.floor(Math.random() * Math.min(3, available.length))]
          : pairings[0];

        if (pick) {
          usedColours.push(pick.id);
          const pickCol = COLOURS.find(c => c.id === pick.id);
          const colName = pickCol ? pickCol.name : '';
          dotColour = pickCol ? pickCol.hex : '#888';
          text = `<span class="outfit-card__item-label">${slotInfo.label}:</span> ${colName} ${slotInfo.fallback.toLowerCase()}`;
        } else {
          dotColour = '#888';
          text = `<span class="outfit-card__item-label">${slotInfo.label}:</span> ${slotInfo.fallback}`;
        }
      }

      itemsHTML += `
        <li class="outfit-card__item">
          <span class="outfit-card__item-dot" style="background:${dotColour}"></span>
          ${text}
        </li>
      `;
    });

    card.innerHTML = `
      <div class="outfit-card__name">${template.name}</div>
      <div class="outfit-card__vibe">${template.vibe}</div>
      <ul class="outfit-card__items">${itemsHTML}</ul>
    `;
    grid.appendChild(card);
  });
}

function renderTips(occasion) {
  const grid = $('#tipsGrid');
  grid.innerHTML = '';

  const tips = STYLE_TIPS[occasion] || STYLE_TIPS.casual;
  tips.forEach(tip => {
    const card = document.createElement('div');
    card.className = 'tip-card fade-in';
    card.innerHTML = `
      <span class="tip-card__tag">${tip.tag}</span>
      <p class="tip-card__text">${tip.text}</p>
    `;
    grid.appendChild(card);
  });
}

function renderDosDonts(occasion) {
  const container = $('#dosDonts');
  container.innerHTML = '';

  const data = DOS_DONTS[occasion] || DOS_DONTS.casual;

  const dosCol = document.createElement('div');
  dosCol.className = 'dos-donts__col fade-in';
  dosCol.innerHTML = `
    <h4 class="dos-donts__heading dos-donts__heading--do">Do</h4>
    <ul class="dos-donts__list">
      ${data.dos.map(d => `
        <li class="dos-donts__item">
          <span class="dos-donts__icon dos-donts__icon--do">&#10003;</span>
          <span>${d}</span>
        </li>
      `).join('')}
    </ul>
  `;

  const dontsCol = document.createElement('div');
  dontsCol.className = 'dos-donts__col fade-in';
  dontsCol.innerHTML = `
    <h4 class="dos-donts__heading dos-donts__heading--dont">Don't</h4>
    <ul class="dos-donts__list">
      ${data.donts.map(d => `
        <li class="dos-donts__item">
          <span class="dos-donts__icon dos-donts__icon--dont">&#10007;</span>
          <span>${d}</span>
        </li>
      `).join('')}
    </ul>
  `;

  container.appendChild(dosCol);
  container.appendChild(dontsCol);
}

// ---- Launch ----
document.addEventListener('DOMContentLoaded', init);
