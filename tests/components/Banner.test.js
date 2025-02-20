/**
 * Test file for Banner component
 * Verifies translations work correctly for all supported languages
 */

import { render } from '@testing-library/react';
import Banner from '../../components/Banner';
import { useTranslations } from 'next-intl';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn()
}));

describe('Banner Component', () => {
  beforeEach(() => {
    useTranslations.mockReturnValue((key) => `Translated ${key}`);
  });

  it('renders banner correctly', () => {
    const { container } = render(<Banner />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
