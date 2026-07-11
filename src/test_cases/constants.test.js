import CDN_URL from '../utils/constants';



describe('constants smoke test', () => {
  it('exports the expected image base URL', () => {
    const { CDN_URL } = require('../utils/constants');
    expect(CDN_URL).toContain('swiggy/image/upload');
  });
});
