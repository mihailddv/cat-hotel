import { mount } from '@vue/test-utils';
import LayoutDefault from '../layouts/default.vue';

import Container from '@Components/layout/Container.vue';

test('LayoutDefault slot', () => {
  const testContent = '<div>content</div>';

  const stubs = {
    Container,
  };

  const wrapper = mount(LayoutDefault, {
    stubs,
    slots: {
      default: testContent,
    },
  });

  expect(wrapper.html()).toContain(testContent);
});
