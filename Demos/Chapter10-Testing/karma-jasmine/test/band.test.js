import {Band} from '../src/band';

describe('Band unit tests', () => {
  it('Has correct title', () => {
      const band = new Band('The Beatles', ['John', 'Paul', 'George', 'Ringo']);
      expect(band.memberCount()).toEqual(4);
    
  });
});