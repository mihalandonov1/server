import type { Schema, Struct } from '@strapi/strapi';

export interface KuhniGallery extends Struct.ComponentSchema {
  collectionName: 'components_kuhni_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'twitter';
  };
  attributes: {
    card: Schema.Attribute.Component<'spalni.card', false>;
    Glr: Schema.Attribute.Media<'images' | 'files' | 'videos', true>;
  };
}

export interface SpalniCard extends Struct.ComponentSchema {
  collectionName: 'components_spalni_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    two: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'kuhni.gallery': KuhniGallery;
      'spalni.card': SpalniCard;
    }
  }
}
