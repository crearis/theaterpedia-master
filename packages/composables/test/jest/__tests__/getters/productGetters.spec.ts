import { getProductProperties, getProductGallery, getProductFiltered, getProductAttributes } from '../../../../src/composables/getters/productGetters';
import { Product } from '@vue-storefront/odoo-api/src/types';
import productVariants from '../../data/productVariants.json';
import productVariantsFormated from '../../data/productVariantsFormated.json';

it('get empty product attributes', () => {
  const propertiesWithNull = getProductProperties(null);
  const propertiesWithUndefined = getProductProperties(undefined);

  expect(propertiesWithNull).toStrictEqual([]);
  expect(propertiesWithUndefined).toStrictEqual([]);
});
it('get list of Attributes', () => {
  const product = {
    id: 1,
    attributes: [
      { id: 1, name: 'size', displayName: 'Size' },
      { id: 1, name: 'category', displayName: 'Category' }
    ]
  } as Product;
  const properties = getProductProperties(product);

  expect(properties).toStrictEqual(product.attributes);
});

it('get empty gallery for no product', () => {

  const galleryWithNull = getProductGallery(null);
  const galleryWithUndefined = getProductGallery(undefined);

  expect(galleryWithNull).toStrictEqual([]);
  expect(galleryWithUndefined).toStrictEqual([]);
});

it('get AgnosticMediaGallery with empty image for product without image', () => {

  const galleryWithNull = getProductGallery({} as Product);

  expect(galleryWithNull).toStrictEqual([{
    small: undefined,
    big: undefined,
    normal: undefined
  }]);
});

it('get AgnosticMediaGallery with image for product', () => {

  const product = {
    image: 'http://odoo.com'
  } as Product;

  const galleryWithNull = getProductGallery(product);

  expect(galleryWithNull).toStrictEqual([{
    small: 'http://odoo.com',
    big: 'http://odoo.com',
    normal: 'http://odoo.com'
  }]);
});

it('get empty filtered product', () => {

  const productsWithNull = getProductFiltered(null);
  const productsWithUndefined = getProductFiltered(undefined);

  expect(productsWithNull).toStrictEqual([]);
  expect(productsWithUndefined).toStrictEqual([]);
});

it('get grouped attribute list', () => {

  const result = getProductAttributes(productVariants, []);

  expect(result).toStrictEqual(productVariantsFormated);
});