import { Color } from './color';

declare var describe: any;
declare var it: any;
declare var expect: any;

describe('Color', () => {
  it('should create a random hex code', () => {
    expect(Color.randomHexGenerator()).toMatch(/^#\d|\w{6}$/);
  });
});
