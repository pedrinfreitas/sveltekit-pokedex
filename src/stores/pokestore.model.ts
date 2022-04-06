export interface IPokemonAPI {
  count: number;
  next: string;
  previous?: string;
  results: IPokemonResults[];
}

export interface IPokemonResults {
  name: string;
  url: string;
}

export interface Ability {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

export interface Form {
  name: string;
  url: string;
}

export interface Version {
  name: string;
  url: string;
}

export interface Game_indice {
  game_index: number;
  version: Version;
}

export interface Move {
  name: string;
  url: string;
}

export interface Move_learn_method {
  name: string;
  url: string;
}

export interface Version_group {
  name: string;
  url: string;
}

export interface Version_group_detail {
  level_learned_at: number;
  move_learn_method: Move_learn_method;
  version_group: Version_group;
}

export interface Move {
  move: Move;
  version_group_details: Version_group_detail[];
}

export interface Specy {
  name: string;
  url: string;
}

export interface Dream_world {
  front_default: string;
  front_female?: any;
}

export interface Home {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface Official_artwork {
  front_default: string;
}

export interface Other {
  dream_world: Dream_world;
  home: Home;
  official_artwork: Official_artwork;
}

export interface Red_blue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface Yellow {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface Generation_i {
  red_blue: Red_blue;
  yellow: Yellow;
}

export interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

export interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

export interface Silver {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

export interface Generation_ii {
  crystal: Crystal;
  gold: Gold;
  silver: Silver;
}

export interface Emerald {
  front_default: string;
  front_shiny: string;
}

export interface Firered_leafgreen {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface Ruby_sapphire {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface Generation_iii {
  emerald: Emerald;
  firered_leafgreen: Firered_leafgreen;
  ruby_sapphire: Ruby_sapphire;
}

export interface Diamond_pearl {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface Heartgold_soulsilver {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface Platinum {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface Generation_iv {
  diamond_pearl: Diamond_pearl;
  heartgold_soulsilver: Heartgold_soulsilver;
  platinum: Platinum;
}

export interface Animated {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface Black_white {
  animated: Animated;
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface Generation_v {
  black_white: Black_white;
}

export interface Omegaruby_alphasapphire {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface X_y {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface Generation_vi {
  omegaruby_alphasapphire: Omegaruby_alphasapphire;
  x_y: X_y;
}

export interface Icon {
  front_default: string;
  front_female?: any;
}

export interface Ultra_sun_ultra_moon {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface Generation_vii {
  icons: Icon;
  ultra_sun_ultra_moon: Ultra_sun_ultra_moon;
}

export interface Icon {
  front_default: string;
  front_female?: any;
}

export interface Generation_viii {
  icons: Icon;
}

export interface Version {
  generation_i: Generation_i;
  generation_ii: Generation_ii;
  generation_iii: Generation_iii;
  generation_iv: Generation_iv;
  generation_v: Generation_v;
  generation_vi: Generation_vi;
  generation_vii: Generation_vii;
  generation_viii: Generation_viii;
}

export interface Sprite {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
  other: Other;
  versions: Version;
}

export interface Stat {
  name: string;
  url: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Stat;
}

export interface Type {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: Type;
}

export interface RootObject {
  abilities: Ability[];
  base_experience: number;
  forms: Form[];
  game_indices: Game_indice[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: Specy;
  sprites: Sprite;
  stats: Stat[];
  types: Type[];
  weight: number;
}
