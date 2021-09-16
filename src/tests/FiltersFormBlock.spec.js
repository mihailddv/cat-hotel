import { mount } from '@vue/test-utils';
import FiltersFormBlock from '@Components/common/Filters/FiltersFormBlock.vue';

test('FiltersFormBlock slot', () => {
  const testContent = '<div>content</div>';
  const wrapper = mount(FiltersFormBlock, {
    slots: {
      default: testContent,
    },
  });

  expect(wrapper.html()).toContain(testContent);
});
