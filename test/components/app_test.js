import { renderComponent , expect } from '../app_test';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders app', () => {
    expect(component).to.exist;
  });
});
